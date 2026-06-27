import type {Metadata} from 'next';
import { Inter, Space_Grotesk } from 'next/font/google';
import './globals.css';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { JsonLd } from '@/components/json-ld';
import { ORGANIZATION_DESCRIPTION, SITE_URL, organizationSchema } from '@/lib/seo';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const space = Space_Grotesk({ subsets: ['latin'], variable: '--font-space' });

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: 'XE Labs | AI-Native Product Lab for Agents, LLMs & Automation',
    template: '%s',
  },
  description: ORGANIZATION_DESCRIPTION,
  applicationName: 'XE Labs',
  authors: [{ name: 'XE Labs', url: SITE_URL }],
  creator: 'XE Labs',
  publisher: 'XE Labs',
  formatDetection: { email: false, address: false, telephone: false },
  icons: {
    icon: [{ url: '/icon.svg', type: 'image/svg+xml' }],
    shortcut: '/icon.svg',
    apple: '/icon.svg',
  },
  manifest: '/manifest.webmanifest',
  openGraph: {
    title: 'XE Labs | AI-Native Product Lab for Agents, LLMs & Automation',
    description: ORGANIZATION_DESCRIPTION,
    url: SITE_URL,
    siteName: 'XE Labs',
    images: [{ url: '/opengraph-image', width: 1200, height: 630, alt: 'XE Labs AI-native product lab' }],
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'XE Labs | AI-Native Product Lab for Agents, LLMs & Automation',
    description: ORGANIZATION_DESCRIPTION,
    images: ['/opengraph-image'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en" className={`${inter.variable} ${space.variable} bg-black scroll-smooth`}>
      <body suppressHydrationWarning className="font-sans text-gray-200 bg-black">
        <JsonLd data={organizationSchema} />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
