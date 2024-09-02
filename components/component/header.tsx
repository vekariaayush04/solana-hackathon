'use client';

import Link from 'next/link'
import dynamic from 'next/dynamic'
import { useWallet } from '@solana/wallet-adapter-react'

const WalletMultiButtonDynamic = dynamic(
  async () => (await import('@solana/wallet-adapter-react-ui')).WalletMultiButton,
  { ssr: false }
)

const Header = () => {
  const network = 'Devnet'
  return (
    <header className="sticky top-0 z-50 px-4 lg:px-6 h-16 flex items-center justify-between bg-gray-800 shadow-md">
      <div className="flex items-center space-x-4">
        <Link href="/" className="text-lg font-bold text-white">
          Solana Services
        </Link>
        <Link href="/airdrop" className="text-sm font-medium text-gray-300 hover:text-white">
          Airdrop
        </Link>
        <Link href="/transactions" className="text-sm font-medium text-gray-300 hover:text-white">
          Transactions
        </Link>
        <span className="px-2 py-1 text-xs font-semibold text-white bg-blue-600 rounded">
          {network}
        </span>
      </div>
      <WalletMultiButtonDynamic />
    </header>
  )
}

export default Header