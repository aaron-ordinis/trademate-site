export default function CookiesPage() {
  return (
    <main className="min-h-[70vh] bg-gradient-to-b from-white to-slate-50 py-10">
      <div className="mx-auto max-w-3xl px-4">
        <div className="rounded-2xl border bg-white p-6 sm:p-8 shadow-sm">
          <h1 className="text-3xl font-extrabold tracking-tight">Cookie Policy</h1>
          <p className="mt-2 text-sm text-slate-500">
            <strong>Effective date:</strong> {new Date().toLocaleDateString('en-GB')}
          </p>

          <p className="mt-6 text-slate-700 leading-relaxed">
            Cookies are small text files stored on your device. UK law (PECR) requires consent for non-essential cookies.
            Essential cookies do not require consent as they’re necessary to provide the service.
          </p>

          <hr className="my-6" />

          <h2 className="text-xl font-semibold">How we use cookies</h2>
          <ul className="mt-3 list-disc space-y-2 pl-6 text-slate-700 leading-relaxed">
            <li><strong>Essential</strong> — security, load balancing, login sessions (cannot be disabled).</li>
            <li><strong>Preferences</strong> — remember your cookie choice so you’re not asked repeatedly.</li>
            <li><strong>Analytics (optional)</strong> — only if you click “Accept” in the banner; used to improve the site.</li>
            <li><strong>Stripe</strong> — sets necessary cookies for secure checkout and fraud prevention.</li>
            <li><strong>Google Maps/Places</strong> — may set strictly necessary cookies when map/place features are used.</li>
          </ul>

          <h2 className="mt-6 text-xl font-semibold">Your choices</h2>
          <p className="mt-3 text-slate-700 leading-relaxed">
            On first visit you’ll see a cookie banner. You can accept or reject non-essential cookies.
            You can also manage or delete cookies in your browser settings at any time.
          </p>

          <h2 className="mt-6 text-xl font-semibold">Changes &amp; Contact</h2>
          <p className="mt-3 text-slate-700 leading-relaxed">
            We may update this policy when cookies change. Questions:{" "}
            <a href="mailto:hello@tradematequotes.com" className="underline">hello@tradematequotes.com</a>.
          </p>
        </div>
      </div>
    </main>
  );
}