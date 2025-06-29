import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import FloatingActions from '@/components/layout/floating-actions';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'OB Moving - Professional Moving Services in Canada',
  description: 'Reliable and affordable moving services across Canada. We handle local moving, long distance moving, storage services, and professional packing & unpacking.',
  keywords: 'moving services canada, local movers, long distance moving, storage services, packing unpacking, brampton movers',
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
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
        <FloatingActions />
      </body>
    </html>
  );
}