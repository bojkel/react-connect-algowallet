import React from 'react'
import MyAlgoConnect from '@randlabs/myalgo-connect'

const ConnectAlgoWallet = () => {

  const myAlgoWallet = new MyAlgoConnect();

  const connect_your_algo_wallet = async () => {
    try{
      const connection = await myAlgoWallet.connect()
      // const addresses = connection.map()
      console.log(`The connection: ${connection}`)
    }
    catch(walletConnectionError){
      console.log(`Error connecting to wallet: ${walletConnectionError}`)
    }
  }

  return (
    <section className='connecto-wallet-section section-wrapper'>
      <h2>Algo wallet connection</h2>
      <button onClick={(connect_your_algo_wallet)}>Connect your algo wallet</button>
    </section>
  )
}

export default ConnectAlgoWallet