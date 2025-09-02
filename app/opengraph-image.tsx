/* eslint-disable @next/next/no-img-element */
import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

const SITE = process.env.NEXT_PUBLIC_SITE_URL ?? 'http://localhost:3000';

// Convert ArrayBuffer → base64 (Edge-safe, no Buffer)
function toBase64(ab: ArrayBuffer) {
  let binary = '';
  const bytes = new Uint8Array(ab);
  const len = bytes.byteLength;
  for (let i = 0; i < len; i++) binary += String.fromCharCode(bytes[i]);
  return btoa(binary);
}

async function getLogoDataUrl() {
  const res = await fetch(`${SITE}/logo.png`, { cache: 'force-cache' });
  if (!res.ok) return null;
  const buf = await res.arrayBuffer();
  return `data:image/png;base64,${toBase64(buf)}`;
}

export default async function OpengraphImage() {
  const logo = await getLogoDataUrl();

  return new ImageResponse(
    (
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          padding: 64,
          background:
            'linear-gradient(180deg, #ffffff 0%, #f8fafc 50%, #eef2f7 100%)',
          color: '#0f172a',
          fontFamily:
            'ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Ubuntu, Cantarell, Noto Sans, sans-serif',
        }}
      >
        {/* Brand row */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 20 }}>
          {logo ? (
            <img src={logo} alt="" width={84} height={84} />
          ) : (
            // Fallback if logo can’t be fetched
            <div
              style={{
                width: 84,
                height: 84,
                backgroundColor: '#0f172a',
                color: '#fff',
                borderRadius: '16px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: 32,
                fontWeight: 800,
              }}
            >
              TM
            </div>
          )}
          <div style={{ fontSize: 40, fontWeight: 800 }}>TradeMate Quotes</div>
        </div>

        {/* Headline */}
        <div>
          <div
            style={{
              fontSize: 68,
              fontWeight: 900,
              lineHeight: 1.05,
              letterSpacing: '-0.02em',
            }}
          >
            Professional Quotes in Minutes
          </div>
          <div
            style={{
              marginTop: 14,
              fontSize: 30,
              color: '#334155',
              fontWeight: 500,
            }}
          >
            AI-powered • Branded PDFs • Faster responses
          </div>
        </div>

        {/* Footer stripe */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            fontSize: 26,
            color: '#1f2937',
          }}
        >
          <div>£0 Free • £4.99/mo Premium</div>
          <div style={{ opacity: 0.75 }}>{new URL(SITE).host}</div>
        </div>
      </div>
    ),
    size
  );
}