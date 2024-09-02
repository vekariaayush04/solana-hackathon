'use client'

import { useState } from 'react'
import { useConnection, useWallet } from '@solana/wallet-adapter-react'
import { LAMPORTS_PER_SOL } from '@solana/web3.js'
import { Button } from './ui/button'
import { Input } from './ui/input'

const AirdropFaucet = () => {
  const [amount, setAmount] = useState('1')
  const [status, setStatus] = useState('')
  const { connection } = useConnection()
  const wallet = useWallet()

  const handleAirdrop = async () => {
    if (!wallet.publicKey) {
      setStatus('Please connect your wallet first.')
      return
    }

    try {
      setStatus('Requesting airdrop...')
      const signature = await connection.requestAirdrop(
        wallet.publicKey,
        Number(amount) * LAMPORTS_PER_SOL
      )
      setStatus(`Airdrop of ${amount} SOL successful!`)
    } catch (error) {
      setStatus(`Error`)
    }
  }

  return (
    <div className="w-full max-w-md p-10 bg-white rounded-lg shadow-lg space-y-4">
      <Input
        type="number"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        placeholder="Amount of SOL"
        min="0.1"
        max="2"
        step="0.1"
        className="w-full mb-4 p-4 border border-gray-300 rounded-md text-black"
      />
      <Button onClick={handleAirdrop} className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition-colors">
        Request Airdrop
      </Button>
      {status && <p className="text-center text-sm text-gray-700">{status}</p>}
    </div>
  )
}

export default AirdropFaucet
