'use client';

import { BitcoinIcon } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

import dynamic from 'next/dynamic';
import { useWallet } from '@solana/wallet-adapter-react';

const WalletMultiButtonDynamic = dynamic(
  async () =>
    (await import('@solana/wallet-adapter-react-ui')).WalletMultiButton,
  { ssr: false }
);



const Header = () => {
  return (
    <header className="px-4 lg:px-6 h-14 flex items-center">
        <Link href="#" className="flex items-center justify-center" prefetch={false}>
          <BitcoinIcon className="h-6 w-6" />
          <span className="sr-only">Decentralized Voting</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link href="#" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>
            Features
          </Link>
          <Link href="/how-it-works" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>
            How it Works
          </Link>
          <Link href="#" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>
            About
          </Link>
          <Link href="#" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>
            Contact
          </Link>
        
        </nav>
      </header>
  )
}

export default Header