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
  alternates: {
    canonical: 'https://tradematequotes.com',
  },

  // Favicons / Icons
  icons: {
    icon: '/icon.png',
    shortcut: '/icon.png',
    apple: '/apple-touch-icon.png',
  },

  // Open Graph (Facebook, LinkedIn, WhatsApp)
  openGraph: {
    title: 'TradeMate Quotes — Professional Quotes in Minutes',
    description:
      'Create AI-powered quotes in minutes. Save time, look professional, and win more work.',
    url: 'https://tradematequotes.com',
    siteName: 'TradeMate Quotes',
    images: [{ url: '/opengraph-image', width: 1200, height: 630 }],
    locale: 'en_GB',
    type: 'website',
  },

  // Twitter Card
  twitter: {
    card: 'summary_large_image',
    title: 'TradeMate Quotes — Professional Quotes in Minutes',
    description:
      'AI-powered quoting for tradespeople. Save time and impress clients with branded PDFs.',
    images: ['/twitter-image'],
  },

  // PWA
  manifest: '/site.webmanifest',
};

// Move themeColor to viewport to avoid the Next.js warning
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