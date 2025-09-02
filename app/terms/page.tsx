export default function TermsPage() {
  return (
    <main className="min-h-[70vh] bg-gradient-to-b from-white to-slate-50 py-10">
      <div className="mx-auto max-w-3xl px-4">
        <div className="rounded-2xl border bg-white p-6 sm:p-8 shadow-sm">
          <h1 className="text-3xl font-extrabold tracking-tight">Terms &amp; Conditions</h1>
          <p className="mt-2 text-sm text-slate-500">
            <strong>Effective date:</strong> {new Date().toLocaleDateString('en-GB')}
          </p>

          <p className="mt-6 text-slate-700 leading-relaxed">
            These Terms govern your use of the TradeMate Quotes website and mobile app (“Service”).
            By using the Service you agree to these Terms.
          </p>

          <hr className="my-6" />

          <h2 className="text-xl font-semibold">Who we are</h2>
          <p className="mt-3 text-slate-700 leading-relaxed">
            TradeMate Quotes is operated by <strong>[Your Company Name]</strong>, a UK business.
            Contact: <a href="mailto:hello@tradematequotes.com" className="underline">hello@tradematequotes.com</a>.
          </p>

          <h2 className="mt-6 text-xl font-semibold">Accounts</h2>
          <ul className="mt-3 list-disc space-y-2 pl-6 text-slate-700 leading-relaxed">
            <li>Provide accurate information and keep your password secure.</li>
            <li>You are responsible for activity under your account.</li>
            <li>Business use only; you are responsible for the accuracy of quotes you send.</li>
          </ul>

          <h2 className="mt-6 text-xl font-semibold">Licence &amp; Acceptable Use</h2>
          <ul className="mt-3 list-disc space-y-2 pl-6 text-slate-700 leading-relaxed">
            <li>Limited, non-exclusive, non-transferable licence to use the Service.</li>
            <li>No unlawful, harmful, infringing, or abusive activity.</li>
            <li>No reverse engineering, scraping, or attempts to disrupt the Service.</li>
          </ul>

          <h2 className="mt-6 text-xl font-semibold">Plans, Billing &amp; Cancellations</h2>
          <ul className="mt-3 list-disc space-y-2 pl-6 text-slate-700 leading-relaxed">
            <li><strong>Free Plan:</strong> limited usage; includes “Made with TradeMate” branding.</li>
            <li><strong>Premium Plan:</strong> £4.99/month or £47.99/year (tax inclusive unless stated).</li>
            <li><strong>Auto-renew:</strong> renews unless cancelled 24 hours before the period ends.</li>
            <li>
              <strong>Where purchased:</strong> App Store/Google Play → manage in your platform settings.
              Web (Stripe) → manage via our Stripe Customer Portal.
            </li>
            <li>
              <strong>Refunds:</strong> Store purchases follow Apple/Google policies. Web (Stripe) purchases → email us
              within 14 days and we’ll review fairly.
            </li>
          </ul>

          <h2 className="mt-6 text-xl font-semibold">Payments</h2>
          <p className="mt-3 text-slate-700 leading-relaxed">
            Card payments are processed by Stripe. We do not store full card numbers. Stripe’s terms and privacy policy apply.
          </p>

          <h2 className="mt-6 text-xl font-semibold">Intellectual Property</h2>
          <p className="mt-3 text-slate-700 leading-relaxed">
            The Service, branding, and content are owned by <strong>[Your Company Name]</strong>.
            You keep rights to the content you create (e.g., quotes). You grant us a licence to process it to operate the Service.
          </p>

          <h2 className="mt-6 text-xl font-semibold">Availability &amp; Changes</h2>
          <p className="mt-3 text-slate-700 leading-relaxed">
            We aim for high availability but do not guarantee uninterrupted service. We may update, suspend, or discontinue features.
          </p>

          <h2 className="mt-6 text-xl font-semibold">Disclaimers</h2>
          <p className="mt-3 text-slate-700 leading-relaxed">
            The Service is provided “as is” without warranties. We don’t provide legal/tax advice. You’re responsible for your pricing/taxes/terms in quotes.
          </p>

          <h2 className="mt-6 text-xl font-semibold">Liability</h2>
          <p className="mt-3 text-slate-700 leading-relaxed">
            To the maximum extent permitted by law, we are not liable for indirect or consequential losses. Our total liability
            is limited to fees you paid in the previous 12 months.
          </p>

          <h2 className="mt-6 text-xl font-semibold">Termination</h2>
          <p className="mt-3 text-slate-700 leading-relaxed">
            You may stop using the Service at any time. We may suspend/terminate accounts for breach or misuse. Premium access
            continues until the end of the paid period.
          </p>

          <h2 className="mt-6 text-xl font-semibold">Governing Law</h2>
          <p className="mt-3 text-slate-700 leading-relaxed">
            Laws of England &amp; Wales apply. Courts of England &amp; Wales have exclusive jurisdiction.
          </p>

          <h2 className="mt-6 text-xl font-semibold">Contact</h2>
          <p className="mt-3 text-slate-700 leading-relaxed">
            Email: <a href="mailto:hello@tradematequotes.com" className="underline">hello@tradematequotes.com</a>
          </p>
        </div>
      </div>
    </main>
  );
}