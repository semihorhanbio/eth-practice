const assert = require("assert")
const ganache = require('ganache');
const { Web3 } = require('web3');

const web3 = new Web3(ganache.provider());

// contract test code will go here
beforeEach(() => {
    web3.eth.getAccounts().then(fetchedAccounts => {
        console.log(fetchedAccounts)
    })
})

describe('Inbox', () => {
    it('deploys a contract', () => {
        
    })
})