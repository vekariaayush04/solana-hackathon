'use client';

import {
  WalletProvider,
  ConnectionProvider,
} from '@solana/wallet-adapter-react';
import { WalletModalProvider } from '@solana/wallet-adapter-react-ui';
import {
  AlphaWalletAdapter,
  LedgerWalletAdapter,
  SolflareWalletAdapter,
} from '@solana/wallet-adapter-wallets';
import { FC, useMemo } from 'react';

import '@solana/wallet-adapter-react-ui/styles.css';
import { clusterApiUrl } from '@solana/web3.js';

type Props = {
  children?: React.ReactNode;
};

export const Wallet: FC<Props> = ({ children }) => {
  //input your RPC as your endpoint value
  const endpoint = process.env.NEXT_PUBLIC_DEVNET_ENDPOINT || clusterApiUrl('devnet');
  // const wallets = useMemo(
  //   () => [
  //     new SolflareWalletAdapter(),
  //     new AlphaWalletAdapter(),
  //     new LedgerWalletAdapter(),
  //   ],
  //   []
  // );

  return (
    <ConnectionProvider endpoint={endpoint}>
      <WalletProvider wallets={[]} autoConnect={true}>
        <WalletModalProvider>{children}</WalletModalProvider>
      </WalletProvider>
    </ConnectionProvider>
  );
};
