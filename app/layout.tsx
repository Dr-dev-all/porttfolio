import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Header, Footer } from '@/components';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Dr-Web Programmer Portfolio',
  description: "Dr-Web's portfolio website",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
