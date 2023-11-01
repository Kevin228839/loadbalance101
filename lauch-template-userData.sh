#!/bin/bash

# download nvm
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.5/install.sh | bash
source ~/.bashrc
nvm install node

#upgrade yum
sudo yum upgrade
#install git
sudo yum install git -y
cd /home/ec2-user
# get source code from githubt
git clone https://github.com/Kevin228839/loadbalance101.git
#get in project dir
cd loadbalance101
#give permission
sudo chmod -R 755 .
#install node module
npm install
# start the app
node index.js &