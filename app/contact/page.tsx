export default function ContactPage() {
  return (
    <main className="mx-auto max-w-3xl px-4 py-10 prose prose-slate">
      <h1>Contact Us</h1>
      <p>
        We’re here to help with questions about TradeMate Quotes, billing, technical issues,
        or feedback.
      </p>

      <h2>Email</h2>
      <p>
        Reach us directly at:{" "}
        <a href="mailto:hello@tradematequotes.com">hello@tradematequotes.com</a>
      </p>

      <h2>Business Information</h2>
      <p>
        <strong>[Your Company Name]</strong><br />
        [Registered Address]<br />
        Company Number: [Company Number]<br />
        VAT Number (if applicable): [VAT Number]
      </p>

      <h2>Support &amp; Deletion</h2>
      <p>
        For help deleting your account, please visit our{" "}
        <a href="/support">Support page</a>.
      </p>
    </main>
  );
}