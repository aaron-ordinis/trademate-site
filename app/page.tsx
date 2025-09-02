'use client';

import Image from 'next/image';

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-white to-slate-50 text-slate-900">
      {/* Nav */}
      <header className="mx-auto max-w-5xl px-4 py-6 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Image src="/logo.png" alt="TradeMate" width={40} height={40} />
          <span className="font-semibold tracking-tight">TradeMate Quotes</span>
        </div>
        <a
          href="#download"
          className="rounded-full border px-4 py-2 text-sm hover:bg-slate-100"
        >
          Download
        </a>
      </header>

      {/* Hero */}
      <section className="mx-auto max-w-5xl px-4 pt-6 pb-10 text-center">
        <div className="flex justify-center mb-4">
          {/* updated mascot to logo.png */}
          <Image src="/logo.png" alt="TradeMate Logo" width={80} height={80} />
        </div>
        <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
          Professional Quotes in Minutes — Powered by AI
        </h1>
        <p className="mt-4 text-lg text-slate-600">
          Save time, win more work, and impress clients with branded, polished PDFs.
        </p>

        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
          <a
            href="#pricing"
            className="rounded-full bg-slate-900 text-white px-6 py-3 text-sm font-medium hover:opacity-90"
          >
            See Pricing
          </a>
          <a
            href="#why"
            className="rounded-full border px-6 py-3 text-sm font-medium hover:bg-slate-100"
          >
            Why TradeMate?
          </a>
        </div>
      </section>

      {/* Why Use */}
      <section id="why" className="mx-auto max-w-5xl px-4 py-10">
        <div className="rounded-2xl border bg-white p-6 sm:p-8 shadow-sm">
          <h2 className="text-2xl font-bold mb-2">Why Use TradeMate?</h2>
          <p className="text-slate-600 mb-4">
            Because your time is valuable — and your quotes should look professional without the hassle.
          </p>
          <ul className="grid sm:grid-cols-2 gap-3 text-slate-800">
            <li>✅ <b>Save Hours</b> — create quotes in minutes</li>
            <li>✅ <b>Look Professional</b> — branded PDFs that build trust</li>
            <li>✅ <b>Stay Organised</b> — jobs, prices, and quotes in one place</li>
            <li>✅ <b>Win More Work</b> — reply faster than competitors</li>
            <li>✅ <b>Focus on Earning</b> — less paperwork, more time on the tools</li>
          </ul>
        </div>
      </section>

      {/* Features (short) */}
      <section className="mx-auto max-w-5xl px-4 py-4">
        <div className="grid sm:grid-cols-3 gap-4">
          <FeatureCard title="AI-Powered">
            Generate clear, itemised quotes from simple job notes.
          </FeatureCard>
          <FeatureCard title="Branded PDFs">
            Your logo, your details — look polished and consistent.
          </FeatureCard>
          <FeatureCard title="Fast Workflow">
            Duplicate, edit, and send in a few taps.
          </FeatureCard>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="mx-auto max-w-5xl px-4 py-12">
        <h2 className="text-2xl font-bold text-center mb-6">Choose Your Plan</h2>
        <div className="grid sm:grid-cols-2 gap-6">
          <PricingCard
            badge="Free"
            price="£0"
            period="forever"
            cta="Start Free"
            href="#download"
            features={[
              'Create 1 AI-powered quote per day',
              'Includes “Made with TradeMate” branding',
              'Organise jobs & pricing in one place',
              'Basic tools',
            ]}
          />
          <PricingCard
            badge="Premium"
            highlight
            price="£4.99"
            period="per month (or £47.99/yr)"
            cta="Go Premium"
            href="#download"
            features={[
              'Generate unlimited AI-powered quotes',
              'Branded PDFs with your logo (no TradeMate watermark)',
              'Edit & duplicate quotes in seconds',
              'Priority support + future updates',
            ]}
          />
        </div>
      </section>

      {/* How It Works */}
      <section className="mx-auto max-w-5xl px-4 py-10">
        <div className="rounded-2xl border bg-white p-6 sm:p-8 shadow-sm">
          <h2 className="text-2xl font-bold mb-2">How Easy Is It?</h2>
          <p className="text-slate-600 mb-4">3 simple steps — from job to quote in minutes.</p>
          <ol className="space-y-3 text-slate-800">
            <li>1️⃣ <b>Create Your Business Profile</b> — add your logo and details once.</li>
            <li>2️⃣ <b>Insert the Job Description</b> — AI drafts a clear, professional quote.</li>
            <li>3️⃣ <b>Share with Customers</b> — export a polished PDF and send instantly.</li>
          </ol>
        </div>
      </section>

      {/* Download */}
      <section id="download" className="mx-auto max-w-5xl px-4 pb-16">
        <div className="rounded-2xl border bg-white p-6 sm:p-8 shadow-sm text-center">
          <h3 className="text-xl font-semibold mb-4">Get TradeMate Quotes</h3>
          <p className="text-slate-600 mb-6">Start free. Upgrade anytime.</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              className="inline-flex items-center justify-center gap-2 rounded-full border px-6 py-3 hover:bg-slate-100"
              href="https://apps.apple.com" target="_blank" rel="noreferrer"
            >
               Apple App Store
            </a>
            <a
              className="inline-flex items-center justify-center gap-2 rounded-full border px-6 py-3 hover:bg-slate-100"
              href="https://play.google.com" target="_blank" rel="noreferrer"
            >
              ▶ Google Play Store
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t">
        <div className="mx-auto max-w-5xl px-4 py-6 text-sm text-slate-500 flex flex-col sm:flex-row items-center justify-between gap-3">
          <span>© TradeMate {new Date().getFullYear()}</span>
          <nav className="flex items-center gap-4">
            <a className="hover:underline" href="/privacy">Privacy</a>
            <a className="hover:underline" href="/terms">Terms</a>
            <a className="hover:underline" href="/cookies">Cookies</a>
            <a className="hover:underline" href="mailto:hello@tradematequotes.com">Contact</a>
          </nav>
        </div>
      </footer>
    </main>
  );
}

/* ------- small components ------- */

function FeatureCard(props: { title: string; children: React.ReactNode }) {
  return (
    <div className="rounded-2xl border bg-white p-6 shadow-sm">
      <h3 className="font-semibold text-lg mb-1">{props.title}</h3>
      <p className="text-slate-600">{props.children}</p>
    </div>
  );
}

function PricingCard(props: {
  badge: string;
  price: string;
  period: string;
  cta: string;
  href: string;
  features: string[];
  highlight?: boolean;
}) {
  return (
    <div
      className={`rounded-2xl border p-6 sm:p-8 shadow-sm bg-white ${
        props.highlight ? 'ring-2 ring-slate-900' : ''
      }`}
    >
      <div className="flex items-center justify-between mb-3">
        <span
          className={`text-xs uppercase tracking-wider px-2 py-1 rounded ${
            props.highlight ? 'bg-slate-900 text-white' : 'bg-slate-100 text-slate-700'
          }`}
        >
          {props.badge}
        </span>
      </div>

      <div className="mb-4">
        <span className="text-3xl font-extrabold">{props.price}</span>
        <span className="text-slate-500 ml-2">{props.period}</span>
      </div>

      <ul className="space-y-2 mb-6">
        {props.features.map((f, i) => (
          <li key={i}>✅ {f}</li>
        ))}
      </ul>

      <a
        href={props.href}
        className={`w-full inline-flex justify-center rounded-full px-5 py-3 font-medium ${
          props.highlight ? 'bg-slate-900 text-white hover:opacity-90' : 'border hover:bg-slate-100'
        }`}
      >
        {props.cta}
      </a>
    </div>
  );
}