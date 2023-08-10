# Launch OP Stack L2 Chain
Our repository contains deployment scripts that facilitate the seamless setup and launch of the L2 Optimism chain, built on the robust opstack platform. Our aim is to simplify the L2 chain deployment process, allowing developers and users to effortlessly experience the power and potential of the L2 Optimism solution. With our user-friendly scripts, you can quickly configure and deploy the L2 chain.

_Hardware Requirements_: Ensure that you have the following hardware specifications

```
Linux ubuntu 20.04 LTS
Min. 8GB RAM & 4 Core CPU
Storage 250GB or more
```

_Cloud Service Options_: You have the flexibility to use any cloud service provider, such as [Digital Ocean]([url](https://cloud.digitalocean.com/)), [AWS]([url](https://aws.amazon.com/)), [Google Cloud]([url](https://cloud.google.com/)), etc.,

# Follow these simple steps to launch your very own L2 Optimism chain:
## Step 1 - Clone the repository
```
git clone https://github.com/yasmuru/opstack-deployer
// navigate to the deploy script folder
cd opstack-deployer/deploy-scripts
```

## Step 2 - Create your environment file
Create a new environment file using nano .env or vim .env, and add the following keys:
```
CHAIN_NAME="Chain Name"
CHAIN_ID=<Chain_ID>
ETH_RPC_URL="L1 RPC End Point"
ADMIN_PUBLIC_ADDRESS="Admin public address"
ADMIN_PRIVATE_KEY="Admin private key"
SEQUENCER_PUBLIC_ADDRESS="Sequencer public address"
SEQUENCER_PRIVATE_KEY="Sequencer private key"
BATCHER_PUBLIC_ADDRESS="Batcher public address"
BATCHER_PRIVATE_KEY="Batcher private key"
PROPOSER_PUBLIC_ADDRESS="proposer public address"
PROPOSER_PRIVATE_KEY="Properser private key"
```
#### Make sure to define the funding requirements for each account::
- Admin: 2 ETH
- Proposer: 5 ETH
- Batcher: 10 ETH

## Step 3 - Run initial script
After creating the environment file, run the initial script using:
```
bash ./initial.sh
or
./initial.sh
```
#### script initial.sh performs
* Installs the necessary dependencies
* Creates the necessary directories
* Downloads the OP Stack Code

## Step 4
Once initial.sh script runs successfully, We can refresh the terminal using command 
`source ~/.bashrc`

Then we can run the setup / final script with below command 
```
bash ./setup.sh
or
./setup.sh
```
#### script setup.sh performs
* Initializes the OP Stack
* Starts the OP Stack

## L2 Chain Deployed Successfully

Once the script runs successfully you can now see the new chain up and running in the port **8545**. You can access it by using the RPC end points as `host:8545` along with chain id used earlier while running the script.