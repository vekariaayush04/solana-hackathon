import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { Wallet } from './component/Wallet';
import Header from '@/components/component/header';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Solana Services',
  description: 'Airdrop and Transaction Explorer for Solana',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={`${inter.className} bg-gray-900 text-white min-h-screen flex flex-col`}>
        <Wallet>
          <Header />
          <main className="flex-grow">
            {children}
          </main>
        </Wallet>
      </body>
    </html>
  );
}
