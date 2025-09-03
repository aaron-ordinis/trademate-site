export const revalidate = 0;

import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Delete Account — TradeMate Quotes",
  description:
    "How to permanently delete your TradeMate Quotes account and associated data.",
  robots: { index: true, follow: true },
  openGraph: {
    title: "Delete Account — TradeMate Quotes",
    description:
      "Step-by-step instructions to delete your TradeMate Quotes account from within the app.",
    url: "https://tradematequotes.com/delete-account",
    siteName: "TradeMate Quotes",
    type: "website",
  },
};

export default function DeleteAccountPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-white to-slate-50 text-slate-900">
      <section className="mx-auto max-w-3xl px-4 py-12">
        <header className="mb-6">
          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
            Delete your TradeMate Quotes account
          </h1>
          <p className="mt-3 text-slate-600">
            You can permanently delete your account and associated data directly
            from within the TradeMate Quotes app.
          </p>
        </header>

        <div className="rounded-2xl border bg-white p-6 sm:p-8 shadow-sm space-y-6">
          <div>
            <h2 className="text-xl font-bold mb-2">Delete from the app</h2>
            <ol className="list-decimal pl-5 space-y-2 text-slate-800">
              <li>Open the <b>TradeMate Quotes</b> app.</li>
              <li>Go to <b>Help &amp; Support</b>.</li>
              <li>Tap <b>Delete account permanently</b>.</li>
              <li>Confirm to permanently remove your account and data.</li>
            </ol>
            <p className="mt-3 text-slate-600 text-sm">
              This action can’t be undone. It will sign you out and remove your
              profile, saved logos, and app data stored with us.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-2">Need help?</h3>
            <p className="text-slate-700">
              If you can’t access the app or want us to process the deletion for
              you, email{" "}
              <a
                href="mailto:support@tradematequotes.app?subject=Account%20Deletion%20Request"
                className="text-slate-900 underline underline-offset-4"
              >
                support@tradematequotes.app
              </a>{" "}
              from the email address linked to your account and include “Account
              Deletion Request” in the subject.
            </p>
          </div>

          <div className="rounded-xl bg-slate-50 border p-4">
            <h4 className="font-semibold mb-1">What we may retain</h4>
            <p className="text-sm text-slate-600">
              We may keep minimal records required for legal, security, or tax
              purposes (e.g., payment/transaction logs) as described in our{" "}
              <Link href="/privacy" className="underline underline-offset-4">
                Privacy Policy
              </Link>
              .
            </p>
          </div>

          <div className="text-sm text-slate-500">
            Last updated: {new Date().toLocaleDateString("en-GB")}
          </div>
        </div>

        <nav className="mt-8 flex flex-wrap gap-4 text-sm text-slate-600">
          <Link href="/privacy" className="underline underline-offset-4">
            Privacy Policy
          </Link>
          <span>•</span>
          <Link href="/terms" className="underline underline-offset-4">
            Terms of Use
          </Link>
          <span>•</span>
          <Link href="/faqs" className="underline underline-offset-4">
            FAQs
          </Link>
        </nav>
      </section>
    </main>
  );
}