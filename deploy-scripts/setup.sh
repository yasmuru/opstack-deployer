#!/bin/bash

# Enable "exit on error" and "pipefail" mode
set -eo pipefail

# Function to check if a required parameter is missing
function check_parameter {
    if [ -z "$2" ]; then
        echo "Error: $1 is not defined in the .env file."
        exit 1
    fi
}

# Load the .env file if it exists
if [ -f .env ]; then
    source .env
else
    echo "Error: .env file not found."
    exit 1
fi

output_location="/var/optimism/packages/contracts-bedrock/deploy-config"

# Check required parameters
check_parameter "CHAIN_NAME" "$CHAIN_NAME"
check_parameter "CHAIN_ID" "$CHAIN_ID"
check_parameter "ETH_RPC_URL" "$ETH_RPC_URL"
check_parameter "ADMIN_PUBLIC_ADDRESS" "$ADMIN_PUBLIC_ADDRESS"
check_parameter "ADMIN_PRIVATE_KEY" "$ADMIN_PRIVATE_KEY"
check_parameter "SEQUENCER_PUBLIC_ADDRESS" "$SEQUENCER_PUBLIC_ADDRESS"
check_parameter "SEQUENCER_PRIVATE_KEY" "$SEQUENCER_PRIVATE_KEY"
check_parameter "BATCHER_PUBLIC_ADDRESS" "$BATCHER_PUBLIC_ADDRESS"
check_parameter "BATCHER_PRIVATE_KEY" "$BATCHER_PUBLIC_ADDRESS"
check_parameter "PROPOSER_PUBLIC_ADDRESS" "$PROPOSER_PUBLIC_ADDRESS"
check_parameter "PROPOSER_PRIVATE_KEY" "$PROPOSER_PRIVATE_KEY"
check_parameter "RPC_KIND" "$RPC_KIND"

echo "Cloning Optimism repository"
# Clone and install Optimism
cd ~
cd /var
git clone https://github.com/ethereum-optimism/optimism.git
cd optimism
pnpm install
make op-node op-batcher op-proposer

foundryup
pnpm build

echo "Cloning Op-geth repository"
# Clone and install op-geth
cd ..
git clone https://github.com/ethereum-optimism/op-geth.git
cd op-geth
make geth

# Set ETH_RPC_URL environment variable
cd ../optimism/
export ETH_RPC_URL="$ETH_RPC_URL"

address_template="0xff000000000000000000000000000000000"
address_length=42

# Calculate the number of Xs
num_x="${#CHAIN_ID}"
if [[ $num_x -gt 0 ]]; then
        if [ "$num_x" -lt 5 ]; then
                append_count=$((5 - num_x))
                for ((i = 0; i < append_count; i++)); do
                        address_template+="0"
                done
        elif [ "$num_x" -gt 5 ]; then
                remove_x=""
                reduce_count=$((num_x - 5))
                for ((i=0; i < reduce_count; i++)); do
                        remove_x+="?"
                done
                address_template="${address_template%$remove_x}"

        fi
else
    echo "Invalid input for X. Exiting."
    exit 1
fi
address="$address_template$CHAIN_ID"

echo "Creating config for L2 chain($CHAIN_NAME)"
output=$(cast block finalized --rpc-url $ETH_RPC_URL | grep -E "(timestamp|hash|number)")

blockhash=$(echo "$output" | awk '/hash/ {print $2}')
number_value=$(echo "$output" | awk '/number/ {print $2}')
timestamp=$(echo "$output" | awk '/timestamp/ {print $2}')

json_data=$(cat <<EOF
{
    "numDeployConfirmations": 1,
    "finalSystemOwner": "$ADMIN_PUBLIC_ADDRESS",
    "portalGuardian": "$ADMIN_PUBLIC_ADDRESS",
    "controller": "$ADMIN_PUBLIC_ADDRESS",
    "l1StartingBlockTag": "$blockhash",
    "l1ChainID": 5,
    "l2ChainID": $CHAIN_ID,
    "l2BlockTime": 2,
    "maxSequencerDrift": 600,
    "sequencerWindowSize": 3600,
    "channelTimeout": 300,

    "p2pSequencerAddress": "$SEQUENCER_PUBLIC_ADDRESS",
    "batchInboxAddress": "$address",
    "batchSenderAddress": "$BATCHER_PUBLIC_ADDRESS",

    "l2OutputOracleSubmissionInterval": 120,
    "l2OutputOracleStartingBlockNumber": 0,
    "l2OutputOracleStartingTimestamp": $timestamp,

    "l2OutputOracleProposer": "$PROPOSER_PUBLIC_ADDRESS",
    "l2OutputOracleChallenger": "$ADMIN_PUBLIC_ADDRESS",

    "finalizationPeriodSeconds": 12,

    "proxyAdminOwner": "$ADMIN_PUBLIC_ADDRESS",
    "baseFeeVaultRecipient": "$ADMIN_PUBLIC_ADDRESS",
    "l1FeeVaultRecipient": "$ADMIN_PUBLIC_ADDRESS",
    "sequencerFeeVaultRecipient": "$ADMIN_PUBLIC_ADDRESS",

    "baseFeeVaultMinimumWithdrawalAmount": "0x8ac7230489e80000",
    "l1FeeVaultMinimumWithdrawalAmount": "0x8ac7230489e80000",
    "sequencerFeeVaultMinimumWithdrawalAmount": "0x8ac7230489e80000",
    "baseFeeVaultWithdrawalNetwork": 0,
    "l1FeeVaultWithdrawalNetwork": 0,
    "sequencerFeeVaultWithdrawalNetwork": 0,

    "gasPriceOracleOverhead": 2100,
    "gasPriceOracleScalar": 1000000,

    "enableGovernance": true,
    "governanceTokenSymbol": "OP",
    "governanceTokenName": "Optimism",
    "governanceTokenOwner": "$ADMIN_PUBLIC_ADDRESS",

    "l2GenesisBlockGasLimit": "0x1c9c380",
    "l2GenesisBlockBaseFeePerGas": "0x3b9aca00",
    "l2GenesisRegolithTimeOffset": "0x0",

    "eip1559Denominator": 50,
    "eip1559Elasticity": 10
}
EOF
)

create_file_name_format() {
    local input_string="$1"
    # Replace spaces and special characters with underscores using parameter expansion and regex
    formatted_string="${input_string//[^[:alnum:]_]/_}"
    # Convert the string to lowercase
    formatted_string="${formatted_string,,}"
    echo "$formatted_string"
}

file_name_format=$(create_file_name_format "$CHAIN_NAME")

echo "$json_data" > "$output_location/$file_name_format.json"