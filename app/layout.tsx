import './globals.css';
import type { Metadata, Viewport } from 'next';

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
  authors: [{ name: 'TradeMate Quotes', url: 'https://tradematequotes.com' }],
  metadataBase: new URL('https://tradematequotes.com'),

  icons: {
    icon: '/icon.png',
    shortcut: '/icon.png',
    apple: '/apple-touch-icon.png',
  },

  openGraph: {
    title: 'TradeMate Quotes — Professional Quotes in Minutes',
    description:
      'Create AI-powered quotes in minutes. Save time, look professional, and win more work.',
    url: 'https://tradematequotes.com',
    siteName: 'TradeMate Quotes',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'TradeMate Quotes App Preview',
      },
    ],
    locale: 'en_GB',
    type: 'website',
  },

  twitter: {
    card: 'summary_large_image',
    title: 'TradeMate Quotes — Professional Quotes in Minutes',
    description:
      'AI-powered quoting for tradespeople. Save time and impress clients with branded PDFs.',
    images: ['/og-image.png'],
  },

  manifest: '/site.webmanifest',
};

// ✅ Move themeColor here
export const viewport: Viewport = {
  themeColor: '#0f172a',
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