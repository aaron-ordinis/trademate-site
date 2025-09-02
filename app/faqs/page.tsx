// app/faqs/page.tsx
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'FAQs — TradeMate Quotes',
  description:
    'Answers to common questions about TradeMate Quotes: pricing, features, data, privacy, location, Stripe billing and account deletion.',
  alternates: { canonical: 'https://tradematequotes.com/faqs' },
};

type QA = { q: string; a: React.ReactNode };

const FAQS: QA[] = [
  {
    q: 'What is TradeMate Quotes?',
    a: 'A simple app for tradespeople to create professional, branded quotes in minutes — then export polished PDFs you can send to customers.',
  },
  {
    q: 'How much does it cost?',
    a: (
      <>
        The Free plan lets you generate <b>1 AI quote per day</b>.
        Premium is <b>£4.99/mo</b> or <b>£47.99/yr</b> and unlocks unlimited quotes,
        branded PDFs without watermark, editing/duplicating, multiple templates and priority support.
        Prices include VAT where applicable.
      </>
    ),
  },
  {
    q: 'Do you store my card details?',
    a: (
      <>
        No. Payments are processed by <b>Stripe</b>. We do not store full card numbers — only minimal
        billing metadata (e.g. subscription status) so your plan works.
      </>
    ),
  },
  {
    q: 'Do you use my location?',
    a: (
      <>
        Location is optional and only used when you enable features powered by <b>Google Maps/Places</b> (like address autocomplete).
        You can disable location permissions in your device settings; the app still works, but some features may be limited.
      </>
    ),
  },
  {
    q: 'How do I delete my account and data?',
    a: (
      <>
        In the app, go to <b>Support → Delete account</b>. This permanently deletes your account, logos and ALL data. This action cannot be undone.
      </>
    ),
  },
  {
    q: 'Where can I read the legal docs?',
    a: (
      <>
        <a className="text-slate-900 underline" href="/privacy">Privacy Policy</a>,{' '}
        <a className="text-slate-900 underline" href="/terms">Terms</a>,{' '}
        <a className="text-slate-900 underline" href="/cookies">Cookie Policy</a>.
      </>
    ),
  },
  {
    q: 'How do I get help?',
    a: (
      <>
        Email <a className="text-slate-900 underline" href="mailto:hello@tradematequotes.com">hello@tradematequotes.com</a>
        {' '}or use <b>Support</b> inside the app to contact us or report a bug.
      </>
    ),
  },
];

export default function FaqPage() {
  // Build JSON-LD for FAQ rich results
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: FAQS.map(item => ({
      '@type': 'Question',
      name: item.q,
      acceptedAnswer: {
        '@type': 'Answer',
        text:
          typeof item.a === 'string'
            ? item.a
            : undefined, // keep simple; rich HTML isn’t required
      },
    })),
  };

  return (
    <main className="min-h-screen bg-gradient-to-b from-white to-slate-50 text-slate-900">
      <section className="mx-auto max-w-4xl px-4 py-12">
        <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-2">Frequently Asked Questions</h1>
        <p className="text-slate-600 mb-8">
          Quick answers about pricing, features, privacy and billing.
        </p>

        <div className="space-y-4">
          {FAQS.map((item, i) => (
            <details
              key={i}
              className="group rounded-2xl border bg-white p-5 sm:p-6 shadow-sm open:shadow-md transition-shadow"
            >
              <summary className="cursor-pointer select-none list-none font-semibold text-lg flex items-center justify-between">
                <span>{item.q}</span>
                <span className="ml-4 text-slate-400 group-open:rotate-180 transition-transform">▾</span>
              </summary>
              <div className="mt-3 text-slate-700 leading-relaxed">{item.a}</div>
            </details>
          ))}
        </div>

        {/* Contact box */}
        <div className="mt-10 rounded-2xl border bg-white p-6 sm:p-8 shadow-sm">
          <h2 className="text-xl font-bold mb-2">Still need help?</h2>
          <p className="text-slate-600">
            Email us at{' '}
            <a className="text-slate-900 underline" href="mailto:hello@tradematequotes.com">
              hello@tradematequotes.com
            </a>
            {' '}or open the Support section in the app.
          </p>
        </div>
      </section>

      {/* JSON-LD for rich results */}
      <script
        type="application/ld+json"
        // @ts-ignore – we know this is safe JSON
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </main>
  );
}