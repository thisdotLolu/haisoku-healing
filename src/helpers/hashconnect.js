import {HashConnect} from 'hashconnect'

let hashconnect = new HashConnect()

let appMetaData = {
    name:'Remedium Health',
    description:'Connect to Web App',
    icon:'/academyLogo.png'
}


export const pairHashpack = async() =>{
    let initData = await hashconnect.init(appMetaData,'mainnet', false);
    
    hashconnect.foundExtensionEvent.once((walletMetaData)=>{
        hashconnect.connectToLocalWallet(initData.pairingString, walletMetaData)
    })

    hashconnect.pairingEvent.once((pairingData)=>{
        console.log('')
    })

    // let privateKey = initData.pri

    return initData
}