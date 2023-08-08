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