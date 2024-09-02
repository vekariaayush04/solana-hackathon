import Link from 'next/link'
import { Button } from '@/components/ui/button'

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-16 flex flex-col items-center justify-center h-[560px]">
      <h1 className="text-5xl font-bold mb-8 text-center">Solana Services</h1>
      <p className="text-xl mb-12 text-center max-w-2xl">
        Explore the Solana blockchain with our easy-to-use tools. Request airdrops or view transaction history with just a few clicks.
      </p>
      <div className="flex gap-6">
        <Link href="/airdrop">
          <Button size="lg">Request Airdrop</Button>
        </Link>
        <Link href="/transactions">
          <Button size="lg" >Explore Transactions</Button>
        </Link>
      </div>
    </div>
  )
}
