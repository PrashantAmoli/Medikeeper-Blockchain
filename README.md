# Blockchain Based Medical Health Records <img src="https://thumbs.gfycat.com/ScientificSimilarIvorybilledwoodpecker-max-1mb.gif" width="70" align="bottom" >

This Repository is a part of Blockchain based medical health record system, It includes the implementation of Blockchain section only. Full Project with working demo can be viewed here -> https://medikeeper.vercel.app

## Blockchain

Records of patients are stored on blockchain which is a decentralised, distributed server. Where no single authority have the power to take down the server. Records are stored all over the internet Using *Ethereum* Blockchain.

<p align="center">
<img src="https://c.tenor.com/7VzBpq5zYR8AAAAd/eth.gif" height="100" align="center">
 
<img src="https://c.tenor.com/Vj0bLN3bFksAAAAC/blockchain-bitcoin.gif" height="100" align="center">
</p>

## Contracts

Contracts are the programs that are deployed on the ethereum network and are executed whenever someone makes a call to the contract.

Contract calls are made To record and View the patient data.

<p align="center">
<img src="https://cdn.dribbble.com/users/2574702/screenshots/6702374/metamask.gif" height="100" align="center">
</p>

## Contracts Usage

* Doctor - Contains the implementation of the Doctor Information.
* Patient - Contains the implementaiton of the Patient Information
* Records -  Contains the implementation of the Record keeping of the patient.
* AccessControl - This is used to limit the users from accessing data. As medical records can be misused, This Access Control helps access the records either by the doctor or Patient only.
* AddMedicalInfo - This contract is used to send data to multiple other contracts functions which adds the information to the blockchain. Function AddMedicalInfoDoctor, will send the data to the contract *Doctor* and Furthermore the functions which adds the information only.
* GetMedicalInfo - This contract is used to make call to multiple other contracts functions which fetches the information form the blockchain. Function GetMedicalInfoDoctor, which calls the contract *Doctor* and Furthermore the functions which fetches the information only.

<p align="center">
<img src="https://www.cognierblock.com/img/bi-admin.gif" height="200" align="center" />
</p>

## ABI's

ABI's are json files which helps in interaction with the blockchain through Normal Web. 

## How to be Doctor?

Well you can become doctor by contacting the owner and If you are the owner, you can authorise others to be doctor by accessing: https://medikeeper.vercel.app/AdminPanel

Pass the wallet addreess of the user who is going to be the user and you are all set. Make sure you authorise the user twice. So he gets both, Adding as well as viewing permission.

<p align="center">
<img src="https://i.pinimg.com/originals/36/02/fc/3602fc580ec2e5439d9e2588c4bd3544.gif" height="150" align="center">
  
<img src="https://upload.wikimedia.org/wikipedia/commons/8/8d/Patient_Care_GIF_Animation_Loop.gif" height="150" align="center">
  
<img src="https://images.squarespace-cdn.com/content/v1/5a8694a6e45a7c0c0c9dfac1/1625848330150-P6AZKX3IWVSWBSTR7D6X/report_mini_black_animated.gif" height="150" align="center">
</p>

## Clean Networks:

truffle networks --clean : removes all the deployments

truffle migrate --reset --network <goerli - N/W Name>: Resets the contract deployment i.e starts from 0 and deploys it on goerli net.

truffle console --network goerli: opens goerli console.


## .env

Contains the Memonic and the address of the testnet.

Format

API_URL = "https://eth-goerli.alchemyapi.io/v2/API_KEY"

MNEMONIC = "privatekey here"

## Deployment Information:

Deployed on Goerli Testnet.

## Deploy

To re-deploy, you will first need to install the requirements.
You should have *Node* installed

`npm install`

### For Local Deployment

1. truffle compile
2. truffle migrate --reset 
3. truffle console
4. Now you will be in console window and you can run commands. See the below section on how to run commands in local deployment.

### For Testnet Deployment

1. truffle compile
2. truffle migrate --reset  --network goerli (here i am using goerli testnet)
3. truffle console --network goerli (to enter into the goerli testnet console)
4. Run the commands just like you ran commands in Local deployment.


## Running Commands in Terminal

first, you have to create a instance of the deployment using `get = await GetMedicalInfo.deployed()`

Now, we can access the GetMedicalInfo contract with the 'get' only. So all the functions can be accessed like this

1. get.addAuthorisedDoctor('address')

Similarly, you can do it for other contracts. and call the functions with `instanceName.functionName('parameter')`

### Giving Access From Terminal (CLI):

Access Nedds to be given for 2 Contracts (AddMedicalInfo & GetMedicalInfo) like this:

get = await GetMedicalInfo.deployed()

add = await AddMedicalInfo.deployed()

get.addAuthorisedDoctor('address')

add.addAuthorisedDoctor('address')
