'use client';

import Link from 'next/link'
import React from 'react'

import dynamic from 'next/dynamic';
import { useWallet } from '@solana/wallet-adapter-react';

const WalletMultiButtonDynamic = dynamic(
  async () =>
    
    (await import('@solana/wallet-adapter-react-ui')).WalletMultiButton,
  { ssr: false }
);

const ConnectButton = () => {
    const wallet = useWallet();

  return (
    <WalletMultiButtonDynamic>
    {wallet.publicKey
      ? `${wallet.publicKey?.toBase58().substring(0, 7)}...`
      : 'Connect Wallet'}
    </WalletMultiButtonDynamic>
  )
}

export default ConnectButton