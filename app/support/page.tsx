export default function SupportPage() {
  return (
    <main className="mx-auto max-w-3xl px-4 py-10 prose prose-slate">
      <h1>Support</h1>

      <h2>Delete Your Account</h2>
      <p>
        You can delete your TradeMate Quotes account at any time from within the app:
      </p>
      <ol>
        <li>Open the app and sign in.</li>
        <li>Go to <strong>Account → Support</strong>.</li>
        <li>Tap <strong>Delete Account</strong> and confirm.</li>
      </ol>
      <p>
        Deleting your account permanently removes your profile and quote data from our systems.
        We may retain necessary billing records as required by law.
      </p>

      <h2>Contact Support</h2>
      <p>
        Email us at <a href="mailto:hello@tradematequotes.com">hello@tradematequotes.com</a> for help with billing,
        technical issues, or data requests.
      </p>
    </main>
  );
}