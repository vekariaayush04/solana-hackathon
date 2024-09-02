'use client'

import { useState, useEffect } from 'react'
import { useConnection } from '@solana/wallet-adapter-react'
import { PublicKey, ParsedTransactionWithMeta } from '@solana/web3.js'
import { Button } from './ui/button'
import { Input } from './ui/input'
import { RefreshCw } from 'lucide-react'

const TransactionHistory = () => {
  const [address, setAddress] = useState('')
  const [transactions, setTransactions] = useState<ParsedTransactionWithMeta[]>([])
  const [loading, setLoading] = useState(false)
  const { connection } = useConnection()

  const fetchTransactions = async () => {
    if (!address) return
    setLoading(true)
    try {
      const publicKey = new PublicKey(address)
      const signatures = await connection.getSignaturesForAddress(publicKey, { limit: 10 })
      const txs = await connection.getParsedTransactions(signatures.map(sig => sig.signature))
      setTransactions(txs.filter((tx): tx is ParsedTransactionWithMeta => tx !== null))
    } catch (error) {
      console.error('Error fetching transactions:', error)
    } finally {
      setLoading(false)
    }
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    fetchTransactions()
  }

  const formatTimestamp = (timestamp: number | undefined) => {
    if (!timestamp) return 'N/A'
    return new Date(timestamp * 1000).toUTCString()
  }

  const formatAge = (timestamp: number | undefined) => {
    if (!timestamp) return 'N/A'
    const now = Date.now() / 1000
    const diff = now - timestamp
    const minutes = Math.floor(diff / 60)
    if (minutes < 60) return `${minutes} minute${minutes !== 1 ? 's' : ''} ago`
    const hours = Math.floor(minutes / 60)
    if (hours < 24) return `${hours} hour${hours !== 1 ? 's' : ''} ago`
    const days = Math.floor(hours / 24)
    return `${days} day${days !== 1 ? 's' : ''} ago`
  }

  return (
    <div className="space-y-8">
      <form onSubmit={handleSubmit} className="flex gap-4">
        <Input
          type="text"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          placeholder="Enter Solana address"
          className="flex-grow text-black"
        />
        <Button type="submit" disabled={loading}>
          Explore
        </Button>
      </form>

      <div className="bg-gray-900 p-6 rounded-lg">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-semibold text-white">Transaction History</h2>
          <Button onClick={fetchTransactions} disabled={loading} variant="outline" size="sm" className='text-black'>
            <RefreshCw className="w-4 h-4 mr-2 text-black" /> Refresh
          </Button>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-sm text-left text-gray-300">
            <thead className="text-xs uppercase bg-gray-800">
              <tr>
                <th className="px-6 py-3">Transaction Signature</th>
                <th className="px-6 py-3">Block</th>
                <th className="px-6 py-3">Age</th>
                <th className="px-6 py-3">Timestamp</th>
                <th className="px-6 py-3">Result</th>
              </tr>
            </thead>
            <tbody>
              {transactions.map((tx, index) => (
                <tr key={index} className="border-b border-gray-700">
                  <td className="px-6 py-4 font-medium text-gray-300">
                    {tx.transaction.signatures[0].slice(0, 20)}...
                  </td>
                  <td className="px-6 py-4">{tx.slot}</td>
                  <td className="px-6 py-4">{formatAge(tx.blockTime!)}</td>
                  <td className="px-6 py-4">{formatTimestamp(tx.blockTime!  )}</td>
                  <td className="px-6 py-4">
                    <span className={`px-2 py-1 rounded ${tx.meta?.err ? 'bg-red-800 text-red-200' : 'bg-green-800 text-green-200'}`}>
                      {tx.meta?.err ? 'Failed' : 'Success'}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default TransactionHistory