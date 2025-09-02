'use client';

import { useEffect, useState } from 'react';

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const choice = localStorage.getItem('tm_cookie_consent');
    if (!choice) setVisible(true);
  }, []);

  function choose(value: 'accept' | 'reject') {
    localStorage.setItem('tm_cookie_consent', value);
    setVisible(false);
    // If you add analytics later, only enable them when value === 'accept'
  }

  if (!visible) return null;

  return (
    <div className="fixed bottom-4 left-1/2 -translate-x-1/2 z-50 max-w-lg w-[92%] rounded-xl border bg-white shadow p-4 text-sm">
      <p className="text-slate-700">
        We use essential cookies to run this site. We’d also like to use analytics cookies
        to improve it. You can accept or reject non-essential cookies. See our{' '}
        <a className="underline" href="/cookies">Cookie Policy</a>.
      </p>
      <div className="mt-3 flex gap-2 justify-end">
        <button
          onClick={() => choose('reject')}
          className="rounded-full border px-4 py-2"
        >
          Reject
        </button>
        <button
          onClick={() => choose('accept')}
          className="rounded-full bg-slate-900 text-white px-4 py-2"
        >
          Accept
        </button>
      </div>
    </div>
  );
}