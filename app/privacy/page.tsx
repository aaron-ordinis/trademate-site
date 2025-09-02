export default function PrivacyPage() {
  return (
    <main className="min-h-[70vh] bg-gradient-to-b from-white to-slate-50 py-10">
      <div className="mx-auto max-w-3xl px-4">
        <div className="rounded-2xl border bg-white p-6 sm:p-8 shadow-sm">
          <h1 className="text-3xl font-extrabold tracking-tight">Privacy Policy</h1>
          <p className="mt-2 text-sm text-slate-500">
            <strong>Effective date:</strong> {new Date().toLocaleDateString('en-GB')}
          </p>

          <p className="mt-6 text-slate-700 leading-relaxed">
            TradeMate Quotes (“we”, “us”) is a UK-based app that helps tradespeople create professional
            quotes. Questions about this policy:{" "}
            <a href="mailto:hello@tradematequotes.com" className="underline">hello@tradematequotes.com</a>.
          </p>

          <hr className="my-6" />

          <h2 className="text-xl font-semibold">What data we collect</h2>
          <ul className="mt-3 list-disc space-y-2 pl-6 text-slate-700 leading-relaxed">
            <li><strong>Account data:</strong> name, email, and password (hashed).</li>
            <li><strong>App data:</strong> business profile (company name, logo, address, contact details) and the quote content you create.</li>
            <li>
              <strong>Location data:</strong> <em>approximate</em> location and/or place results when you enable location features
              (e.g., address autocomplete, nearby places) powered by Google Maps/Places APIs. You can disable location
              permissions in your device settings; the app still works, with limited features.
            </li>
            <li><strong>Device/usage data:</strong> basic logs (IP, device type, in-app events) to operate and secure the service.</li>
            <li><strong>Payments:</strong> processed by Stripe. We don’t store full card numbers; we receive limited metadata (e.g., subscription status).</li>
            <li><strong>Support:</strong> information you send us by email or forms.</li>
          </ul>

          <h2 className="mt-6 text-xl font-semibold">Why we use your data (UK GDPR legal bases)</h2>
          <ul className="mt-3 list-disc space-y-2 pl-6 text-slate-700 leading-relaxed">
            <li><strong>Contract</strong> — to provide the app and your account features.</li>
            <li><strong>Legitimate interests</strong> — to prevent fraud, secure the service, and improve features.</li>
            <li><strong>Consent</strong> — for non-essential cookies/analytics and for device location where required by your OS.</li>
            <li><strong>Legal obligation</strong> — to comply with law and tax/financial reporting.</li>
          </ul>

          <h2 className="mt-6 text-xl font-semibold">How we use your data</h2>
          <ul className="mt-3 list-disc space-y-2 pl-6 text-slate-700 leading-relaxed">
            <li>Operate your account and sync your business profile/quotes.</li>
            <li>Provide location-assisted features (address autocomplete, place lookup) via Google Maps Platform.</li>
            <li>Process subscriptions/payments (via Stripe).</li>
            <li>Send essential service emails (receipts, notices). Marketing emails only if you opt in.</li>
            <li>Monitor, secure, and improve the app.</li>
          </ul>

          <h2 className="mt-6 text-xl font-semibold">Sharing your data (processors)</h2>
          <p className="mt-3 text-slate-700 leading-relaxed">
            We share data with trusted processors to run the service:
          </p>
          <ul className="mt-2 list-disc space-y-2 pl-6 text-slate-700 leading-relaxed">
            <li><strong>Stripe</strong> — payments and billing.</li>
            <li><strong>Google Maps Platform (Maps/Places)</strong> — geocoding, address autocomplete, place lookup.</li>
            <li><strong>Hosting/Database</strong> — our cloud infrastructure provider(s).</li>
            <li><strong>Analytics</strong> — only if you consent to non-essential cookies.</li>
          </ul>
          <p className="mt-2 text-slate-700">We do <strong>not</strong> sell your personal data.</p>

          <h2 className="mt-6 text-xl font-semibold">International transfers</h2>
          <p className="mt-3 text-slate-700 leading-relaxed">
            If data is processed outside the UK, we use appropriate safeguards (e.g., UK IDTA/Addendum to SCCs).
          </p>

          <h2 className="mt-6 text-xl font-semibold">Retention</h2>
          <p className="mt-3 text-slate-700 leading-relaxed">
            We keep your data only as long as needed to provide the service and meet legal obligations. You can
            delete your account to remove most data; billing/transaction records may be retained as required by law.
          </p>

          <h2 className="mt-6 text-xl font-semibold">Your rights (UK GDPR)</h2>
          <ul className="mt-3 list-disc space-y-2 pl-6 text-slate-700 leading-relaxed">
            <li>Access, correct, or delete your data — including full account deletion via the Support page in the app.</li>
            <li>Object to or restrict processing in certain cases.</li>
            <li>Data portability.</li>
            <li>Withdraw consent (for non-essential cookies/emails and OS-level location permissions).</li>
            <li>Complain to the UK ICO if you’re unhappy with our response.</li>
          </ul>

          <h2 className="mt-6 text-xl font-semibold">Children</h2>
          <p className="mt-3 text-slate-700 leading-relaxed">TradeMate Quotes is not intended for children under 16.</p>

          <h2 className="mt-6 text-xl font-semibold">Changes</h2>
          <p className="mt-3 text-slate-700 leading-relaxed">We’ll update this policy as needed and post the new version here.</p>

          <h2 className="mt-6 text-xl font-semibold">Contact</h2>
          <p className="mt-3 text-slate-700 leading-relaxed">
            Email: <a href="mailto:hello@tradematequotes.com" className="underline">hello@tradematequotes.com</a>
          </p>
        </div>
      </div>
    </main>
  );
}