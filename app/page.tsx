'use client';

import Image from 'next/image';
import { useMemo } from 'react';

export default function Home() {
  // Current year memo to avoid re-render churn
  const year = useMemo(() => new Date().getFullYear(), []);

  return (
    <main className="min-h-screen bg-[radial-gradient(1000px_600px_at_50%_-10%,#e8eefc,transparent)] from-white to-slate-50 text-slate-900">
      {/* ===== Header / Nav ===== */}
      <header className="sticky top-0 z-30 backdrop-blur supports-[backdrop-filter]:bg-white/60 bg-white/90 border-b">
        <div className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between">
          <a href="/" className="flex items-center gap-3">
            <Image src="/logo.png" alt="TradeMate logo" width={36} height={36} priority />
            <span className="font-semibold tracking-tight">TradeMate Quotes</span>
          </a>

          <nav className="hidden sm:flex items-center gap-6 text-sm text-slate-600">
            <a className="hover:text-slate-900" href="#why">Why TradeMate</a>
            <a className="hover:text-slate-900" href="#features">Features</a>
            <a className="hover:text-slate-900" href="#pricing">Pricing</a>
            <a className="hover:text-slate-900" href="/faqs">FAQs</a>
          </nav>

          <a
            href="#download"
            className="rounded-full border px-4 py-2 text-sm font-medium hover:bg-slate-100"
            aria-label="Go to download section"
          >
            Download
          </a>
        </div>
      </header>

      {/* ===== Hero ===== */}
      <section className="mx-auto max-w-6xl px-4 pt-12 pb-14 text-center">
        <div className="mx-auto mb-5 flex h-20 w-20 items-center justify-center rounded-2xl border bg-white shadow-sm">
          <Image src="/logo.png" alt="TradeMate app mark" width={56} height={56} priority />
        </div>

        <h1 className="mx-auto max-w-3xl text-4xl sm:text-6xl font-extrabold tracking-tight leading-tight">
          Professional Quotes in Minutes — <span className="bg-gradient-to-r from-slate-900 to-slate-600 bg-clip-text text-transparent">Powered by AI</span>
        </h1>
        <p className="mx-auto mt-5 max-w-2xl text-lg text-slate-600">
          Save time, win more work, and impress clients with branded, polished PDFs. Built for trades — electricians, plumbers, builders and more.
        </p>

        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
          <a
            href="#pricing"
            className="rounded-full bg-slate-900 text-white px-7 py-3 text-sm font-semibold shadow hover:opacity-90"
          >
            View Pricing
          </a>
          <a
            href="#why"
            className="rounded-full border px-7 py-3 text-sm font-semibold hover:bg-white"
          >
            Why TradeMate?
          </a>
          <a
            href="/faqs"
            className="rounded-full border px-7 py-3 text-sm font-semibold hover:bg-white"
          >
            FAQs
          </a>
        </div>

        {/* Social proof */}
        <div className="mx-auto mt-8 max-w-3xl grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs text-slate-500">
          <Badge>Unlimited quotes on Premium</Badge>
          <Badge>No card for Free plan</Badge>
          <Badge>Export polished PDFs</Badge>
          <Badge>Stripe secure payments</Badge>
        </div>
      </section>

      {/* ===== Why Use ===== */}
      <section id="why" className="mx-auto max-w-6xl px-4 py-10">
        <div className="rounded-3xl border bg-white/90 p-6 sm:p-10 shadow-sm">
          <h2 className="text-2xl sm:text-3xl font-extrabold mb-2">Why TradeMate?</h2>
          <p className="text-slate-600 mb-6">
            Because your time is valuable — and your quotes should look professional without the hassle.
          </p>

          <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 text-slate-800">
            <Li><b>Save Hours</b> — create quotes in minutes</Li>
            <Li><b>Look Professional</b> — branded PDFs that build trust</Li>
            <Li><b>Stay Organised</b> — jobs, prices, and quotes in one place</Li>
            <Li><b>Win More Work</b> — reply faster than competitors</Li>
            <Li><b>Focus on Earning</b> — less paperwork, more time on the tools</Li>
            <Li><b>Easy to Learn</b> — designed for mobile and kept simple</Li>
          </ul>
        </div>
      </section>

      {/* ===== Features ===== */}
      <section id="features" className="mx-auto max-w-6xl px-4 py-6">
        <div className="grid sm:grid-cols-3 gap-5">
          <FeatureCard title="AI-Powered">
            Turn quick job notes into clear, itemised quotes — automatically, in your tone.
          </FeatureCard>
          <FeatureCard title="Branded PDFs">
            Your logo, your details, your templates. Export crisp PDFs that look pro.
          </FeatureCard>
          <FeatureCard title="Fast Workflow">
            Duplicate, edit, and send in a few taps. Spend time on the job, not admin.
          </FeatureCard>
        </div>
      </section>

      {/* ===== Pricing ===== */}
      <section id="pricing" className="mx-auto max-w-6xl px-4 py-14">
        <h2 className="text-2xl sm:text-3xl font-extrabold text-center mb-2">Choose Your Plan</h2>
        <p className="text-center text-slate-600 mb-8">Prices include VAT where applicable.</p>

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

      {/* ===== How It Works ===== */}
      <section className="mx-auto max-w-6xl px-4 py-10">
        <div className="rounded-3xl border bg-white/90 p-6 sm:p-10 shadow-sm">
          <h2 className="text-2xl sm:text-3xl font-extrabold mb-2">How easy is it?</h2>
          <p className="text-slate-600 mb-5">Three simple steps — from job to quote in minutes.</p>

          <ol className="grid sm:grid-cols-3 gap-4 text-slate-800">
            <Step n="1">Create your business profile — add your logo & details once.</Step>
            <Step n="2">Add the job description — AI drafts a clear, professional quote.</Step>
            <Step n="3">Export & share — send a polished PDF instantly.</Step>
          </ol>
        </div>
      </section>

      {/* ===== Download ===== */}
      <section id="download" className="mx-auto max-w-6xl px-4 pb-16">
        <div className="rounded-3xl border bg-white p-6 sm:p-10 shadow-sm text-center">
          <h3 className="text-xl sm:text-2xl font-semibold mb-2">Get TradeMate Quotes</h3>
          <p className="text-slate-600 mb-6">Start free. Upgrade anytime.</p>

          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              className="inline-flex items-center justify-center gap-2 rounded-full border px-6 py-3 hover:bg-slate-50"
              href="https://apps.apple.com"
              target="_blank"
              rel="noreferrer"
              aria-label="Open Apple App Store"
            >
               Apple App Store
            </a>
            <a
              className="inline-flex items-center justify-center gap-2 rounded-full border px-6 py-3 hover:bg-slate-50"
              href="https://play.google.com"
              target="_blank"
              rel="noreferrer"
              aria-label="Open Google Play Store"
            >
               Google Play Store
            </a>
          </div>
        </div>
      </section>

      {/* ===== Footer ===== */}
      <footer className="border-t bg-white/80">
        <div className="mx-auto max-w-6xl px-4 py-8 grid gap-6 sm:grid-cols-3 items-start">
          <div className="flex items-center gap-3">
            <Image src="/logo.png" alt="TradeMate logo" width={28} height={28} />
            <span className="font-semibold">TradeMate Quotes</span>
          </div>

          <nav className="flex flex-wrap gap-x-5 gap-y-2 text-sm text-slate-600">
            <a className="hover:text-slate-900" href="/privacy">Privacy</a>
            <a className="hover:text-slate-900" href="/terms">Terms</a>
            <a className="hover:text-slate-900" href="/cookies">Cookies</a>
            <a className="hover:text-slate-900" href="/faqs">FAQs</a>
            <a className="hover:text-slate-900" href="mailto:hello@tradematequotes.com">Contact</a>
          </nav>

          <div className="text-sm text-slate-500 sm:text-right">
            © {year} TradeMate • All rights reserved
          </div>
        </div>
      </footer>
    </main>
  );
}

/* ================== Small components ================== */

function Badge({ children }: { children: React.ReactNode }) {
  return (
    <div className="rounded-full border px-3 py-1 bg-white/70 text-slate-600 shadow-sm text-center">
      {children}
    </div>
  );
}

function Li({ children }: { children: React.ReactNode }) {
  return (
    <li className="flex items-start gap-2 rounded-2xl border p-4 bg-white shadow-sm">
      <span aria-hidden>✅</span>
      <span>{children}</span>
    </li>
  );
}

function Step({ n, children }: { n: string; children: React.ReactNode }) {
  return (
    <li className="rounded-2xl border bg-white p-5 shadow-sm">
      <div className="mb-2 inline-flex h-8 w-8 items-center justify-center rounded-full bg-slate-900 text-white text-sm font-bold">
        {n}
      </div>
      <p>{children}</p>
    </li>
  );
}

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
  const ring = props.highlight ? 'ring-2 ring-slate-900' : '';
  const badgeStyle = props.highlight ? 'bg-slate-900 text-white' : 'bg-slate-100 text-slate-700';
  const ctaStyle = props.highlight
    ? 'bg-slate-900 text-white hover:opacity-90'
    : 'border hover:bg-slate-50';

  return (
    <div className={`rounded-3xl border p-6 sm:p-8 shadow-sm bg-white ${ring}`}>
      <div className="flex items-center justify-between mb-3">
        <span className={`text-xs uppercase tracking-wider px-2 py-1 rounded ${badgeStyle}`}>
          {props.badge}
        </span>
      </div>

      <div className="mb-4">
        <span className="text-3xl sm:text-4xl font-extrabold">{props.price}</span>
        <span className="text-slate-500 ml-2">{props.period}</span>
      </div>

      <ul className="space-y-2 mb-6">
        {props.features.map((f, i) => (
          <li key={i} className="flex items-start gap-2">
            <span aria-hidden>✅</span>
            <span className="text-slate-700">{f}</span>
          </li>
        ))}
      </ul>

      <a
        href={props.href}
        className={`w-full inline-flex justify-center rounded-full px-5 py-3 font-semibold ${ctaStyle}`}
      >
        {props.cta}
      </a>
    </div>
  );
}