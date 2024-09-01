import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import NavBar from './component/Navbar';
import { Wallet } from './component/Wallet';
import Header from '@/components/component/header';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <Wallet>
          <Header/>
          {children}
        </Wallet>
      </body>
    </html>
  );
}
