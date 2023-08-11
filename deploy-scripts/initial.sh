#!/bin/bash

# Enable "exit on error" and "pipefail" mode
set -eo pipefail

# Update package lists
sudo apt update

# Install build essentials
sudo apt install -y build-essential

# Install required packages
sudo apt install -y git curl make jq


if command -v go >/dev/null 2>&1; then
    echo 'go installed alreay'
else 
    # Download and install Go
    echo 'Installing Go...'
    wget https://go.dev/dl/go1.20.linux-amd64.tar.gz
    tar xvzf go1.20.linux-amd64.tar.gz
    sudo cp -n go/bin/go /usr/bin/go
    sudo mv -n go /usr/lib
    export GOROOT=/usr/lib/go
    echo 'export GOROOT=/usr/lib/go' >> ~/.bashrc
    source ~/.bashrc
fi


# Install Node.js
echo 'Installing node and supported packages...'
curl -fsSL https://deb.nodesource.com/setup_16.x | sudo -E bash -
sudo apt-get install -y nodejs

# Install PNPM and Yarn
sudo npm install -g pnpm

# Install Rust
echo 'Installing Rust...'
curl https://sh.rustup.rs -sSf | sh -s -- -y
source ~/.bashrc

# Install Foundry
echo 'Installing Foundry...'
curl -L https://foundry.paradigm.xyz | bash
source ~/.bashrc

if command -v direnv >/dev/null 2>&1; then
    echo 'direnv installed already'
else
    # Install direnv
    sudo apt install direnv
fi