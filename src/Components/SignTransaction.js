import React from 'react'
import MyAlgoConnect from '@randlabs/myalgo-connect'

const SignTransaction = async () => {
    const algoWallet = new MyAlgoConnect()

    const sign_transaction = async () => {
        
    }

    return (
        <section className='sign-transaction-section section-wrapper'>
            <h2>Sign a transaction</h2>
            <button onClick={(sign_transaction)}>Sign transaction</button>
        </section>
    )
}

export default SignTransaction