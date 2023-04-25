const Web3 = require('web3')

// connect to local blockchain
const web3 = new Web3('http://localhost:7545')

// import the abi
const contractAbi = require('./build/contracts/web3ClubsToken.json')
const contractAddress = "0xF9bA5D292905D943dB98d4640c16eF4B3D66621E"


// get blockchain ID
const networkId = async() => {
    const netId = await web3.eth.net.getId()
    console.log(netId)
    return netId
}

// networkId()

// get accounts
const getWallets = async() => {
    const accounts = await web3.eth.getAccounts()
    console.log(accounts)
}

// getWallets()

// get balance
const getBalance = async() => {
    const accounts = await web3.eth.getAccounts()
    const balance = await web3.eth.getBalance(accounts[0])

    // convert from wei to ether
    const etherBalance = web3.utils.fromWei(balance, 'ether')
    console.log(etherBalance)
}

getBalance()

// transfer ether from one account to another
const transferEther = async(sender, recepient, amount) => {
    // const accounts = await web3.eth.getAccounts()
    const balance = await web3.eth.getBalance(sender)
    const etherBalance = web3.utils.fromWei(balance, 'ether')
    console.log(etherBalance)

    // transfer ether
    const tx = await web3.eth.sendTransaction({
        from: sender,
        to: recepient,
        value: web3.utils.toWei(amount, 'ether')
    })

    console.log(tx)
}

transferEther("0x70A6401C2DD4A68f94191d0f6633203276eC9d37","0x61f3FA313F83917254Db3ECf5CaD5D20dAaa0999", '2')




