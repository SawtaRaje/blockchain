import Web3 from 'web3'
var ethers = require('ethers')

const tokenAbi = require('./ERC721.json');
const exchangeAbi=require('./exchangAbi.json')
const address = "0xC2B2848b3cfBa7628Fd40D039d7dE2358e9F705a";
const exchangecontract = "0x6b3149bFf5F7be908e4083Da84e1E27806BbD01A";

const info = {
    _web3: undefined,
    _web4: undefined,
    provider: undefined,
    signer: undefined,
    contract: undefined,
    _exchangeContract: undefined,
    _tokenContract: undefined,
    _tokenContract4: undefined
}

const getInitialInfo = () => {
    if (typeof window.web3 !== 'undefined') {
        info._web3 = new Web3(window.web3.currentProvider)
        info._web4 = new Web3(window.web3.currentProvider)
        info.provider = new ethers.providers.Web3Provider(window.ethereum)
        info.signer = info.provider.getSigner()
        info.contract = new ethers.Contract(address, tokenAbi, info.signer)
        info._exchangeContract= new ethers.Contract(exchangecontract,exchangeAbi,info.signer)
    }
    info._tokenContract = new info._web3.eth.Contract(tokenAbi, address);
    info._tokenContract4 = new info._web4.eth.Contract(tokenAbi, address);
}

getInitialInfo()

export async function getAccount() {
    if (info._account == null) {
        await window.ethereum.enable();
        info._account = await new Promise((resolve, reject) => {
            info._web3 && info._web3.eth.getAccounts((err, accs) => {
                if (err != null) {
                    alert('There was an error fetching your accounts.');
                    reject([]);
                    return;
                }

                if (accs.length === 0) {
                    alert(
                        'Couldn\'t get any accounts! Make sure your Ethereum client is configured correctly.'
                    );
                    return;
                }
                resolve(accs[0]);
            })
        })

        // info._web3.eth.defaultAccount = info._account;
    }

    return info._account;
}

export async function create(tokenId) {
    // function mint(address to, uint256 id, uint256 amount)
    let status
    let transHash
    const params1 = await getAccount()
    const params2 = tokenId
    const params3 = 1
    
    try {
        await info._tokenContract.methods.mint(params1, params2, params3)
        .send({ from: info._account, value: 0, gas: 2100000 })
        .on('transactionHash', function (transactionHash) {
            status = false
            transHash = transactionHash
        })
        .on('receipt', function (receipt) {
            status = receipt.status
        })
    } catch(err) {
        status = false
    }
    
    return { status, transHash }
}

export async function signMsg(address) {
    var message=`Welcome to InArtGallery!\n\n Click \"Sign\" to sign in. No password needed!\n\n I accept the OpenSea Terms of Service: https://opensea.io/tos\n\n Wallet address:\n ${address}`
    var signature = await info.signer.signMessage(message);

    return signature
}

// async function getUserBalance() {
//     let account = await getAccount();
//     console.log('account===getUserBalance========', account);

//     return new Promise(resolve => {
//         resolve(account);
//     });

//     // return account;
// }

// async function getUserId() {
//     console.log("testuserids")
//     let account = await getAccount();
//     return new Promise((resolve, reject) => {
//     //   let _web3 = info._web3;
//       console.log('account===========', info._tokenContract.methods, account);
//       info._tokenContract.methods.users(account).call().then(function (result) {
//         if (result == null) {
//           reject([]);
//         }
//         console.log("testuserids")
//         resolve(result);
//       });
//     });
// }
