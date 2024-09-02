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

const WalletDisconnectButtonDynamic = dynamic(
  async () =>
    
    (await import('@solana/wallet-adapter-react-ui')).WalletDisconnectButton,
  { ssr: false }
);

const ConnectButton = () => {
    const wallet = useWallet();
    console.log(wallet);
    
  return (
    <>
    <WalletMultiButtonDynamic className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50">
      {wallet.publicKey
        ? `${wallet.publicKey?.toBase58().substring(0, 7)}...`
        : 'Connect Wallet'}
      
    </WalletMultiButtonDynamic> 
    <WalletDisconnectButtonDynamic/>
    </>
  );
};

export default ConnectButton