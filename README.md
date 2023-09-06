# Launch OP Stack L2 Chain

[This project](https://ethglobal.com/showcase/opstack-deployer-kmrfx) won the 🚀 Optimism — 🥉 Best Superchain Dev Tools & Infra prize at the [ETHGlobal Superhack 2023](https://ethglobal.com/events/superhack) hackathon:


Our repository contains deployment scripts that facilitate the seamless setup and launch of the L2 Optimism chain, built on the robust opstack platform. Our aim is to simplify the L2 chain deployment process, allowing developers and users to effortlessly experience the power and potential of the L2 Optimism solution. With our user-friendly scripts, you can quickly configure and deploy the L2 chain.

**Visit [opstack-deployer.vercel.app](https://opstack-deployer.vercel.app/)**: You can start the chain setup by visiting [opstack-deployer.vercel.app](https://opstack-deployer.vercel.app/), where you'll find all the necessary resources and documentation or you can follow the steps in below.

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
cd opstack-deployer/
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

## Step 3 - Run opstack script

You have the option to either manually execute the scripts or run them through Docker. Ensure that you have updated the .env file with the correct values and have deposited the necessary amount of ETH.

For Manual, 
```
cd deployer-scripts 
./opstack.sh
```
For Docker,
Make sure you have installed docker and docker-compose.

If docker not installed, for ubuntu
```
apt install docker.io
sudo curl -L "https://github.com/docker/compose/releases/download/1.29.2/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose 
sudo chmod +x /usr/local/bin/docker-compose
```

```
docker-compose up --build
```

## L2 Chain Deployed Successfully

Once the script runs successfully you can now see the new chain up and running in the port 8545. You can access it by using the RPC end points as `host:8545` along with chain id used earlier while running the script.

After the chain is successfully created, you will receive the L1 bridge proxy address as the output. You can then send a small amount of ETH (0.1 or less) to that bridge proxy address, and it will be bridged to your L2 Chain.


## Setup Blockscout Explorer _(Optional)_
For setting up the explorer for the new l2 chain launched, Please follow setps below 

Lets, clone the blockscout explorer 
```
git clone https://github.com/blockscout/blockscout/
cd blocksout/docker-compose/
```

We can modify the environment variables here, 

```
vim blockscout/docker-compose/envs/common-blockscout.env
or 
nano blockscout/docker-compose/envs/common-blockscout.env
```
You can refer to the below values in the environment file
```

ETHEREUM_JSONRPC_HTTP_URL: http://host.docker.internal:8545/
ETHEREUM_JSONRPC_TRACE_URL: http://host.docker.internal:8545/
INDEXER_DISABLE_PENDING_TRANSACTIONS_FETCHER: "true"
SUBNETWORK: "Blocktheory"
PORT: 4000
```
Once the environment variables are set. You can run the docker-compose

```
docker-compose up --build -d
```

Now, you can access the blocksout explorer in port **4000**. You can access it by using the end point as `host:4000`
