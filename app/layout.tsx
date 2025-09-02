import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'TradeMate Quotes — Professional Quotes in Minutes',
  description:
    'TradeMate helps tradespeople create professional quotes in minutes. Save time, win more work, and impress clients with branded, polished PDFs.',
  keywords: [
    'TradeMate',
    'quotes app',
    'tradespeople',
    'AI quotes',
    'professional quotes',
    'invoices',
    'builders',
    'plumbers',
    'electricians',
  ],
  authors: [{ name: 'TradeMate Quotes', url: 'https://trademateapp-site.vercel.app' }],
  metadataBase: new URL('https://trademateapp-site.vercel.app'),

  // Favicons / Icons
  icons: {
    icon: '/icon.png',
    shortcut: '/icon.png',
    apple: '/apple-touch-icon.png',
  },

  // Open Graph (Facebook, LinkedIn, WhatsApp previews)
  openGraph: {
    title: 'TradeMate Quotes — Professional Quotes in Minutes',
    description:
      'Create AI-powered quotes in minutes. Save time, look professional, and win more work.',
    url: 'https://trademateapp-site.vercel.app',
    siteName: 'TradeMate Quotes',
    images: [
      {
        url: '/og-image.png', // make sure you have this in /public
        width: 1200,
        height: 630,
        alt: 'TradeMate Quotes App Preview',
      },
    ],
    locale: 'en_GB',
    type: 'website',
  },

  // Twitter Card
  twitter: {
    card: 'summary_large_image',
    title: 'TradeMate Quotes — Professional Quotes in Minutes',
    description:
      'AI-powered quoting for tradespeople. Save time and impress clients with branded PDFs.',
    images: ['/og-image.png'],
  },

  // App Store / PWA style
  themeColor: '#0f172a',
  manifest: '/site.webmanifest',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="antialiased bg-gradient-to-b from-white to-slate-50">
        {children}
      </body>
    </html>
  );
}