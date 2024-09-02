import TransactionHistory from '@/components/TransactionHistory'

export default function TransactionsPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8 text-center text-white">Solana Transaction Explorer</h1>
      <TransactionHistory />
    </div>
  )
}