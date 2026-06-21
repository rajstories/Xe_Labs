import type {Metadata} from 'next';
import { Inter, Space_Grotesk } from 'next/font/google';
import './globals.css';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const space = Space_Grotesk({ subsets: ['latin'], variable: '--font-space' });

export const metadata: Metadata = {
  title: 'XE Labs',
  description: 'An AI product and technology lab building custom LLM systems, AI-driven software, automation agents and intelligent workflows for modern businesses.',
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en" className={`${inter.variable} ${space.variable} bg-black scroll-smooth`}>
      <body suppressHydrationWarning className="font-sans text-gray-200 bg-black">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
