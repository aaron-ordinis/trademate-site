/* eslint-disable @next/next/no-img-element */
import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const size = { width: 800, height: 418 };
export const contentType = 'image/png';

const SITE = process.env.NEXT_PUBLIC_SITE_URL ?? 'http://localhost:3000';

function toBase64(ab: ArrayBuffer) {
  let binary = '';
  const bytes = new Uint8Array(ab);
  for (let i = 0; i < bytes.byteLength; i++) binary += String.fromCharCode(bytes[i]);
  return btoa(binary);
}

async function getLogoDataUrl() {
  const res = await fetch(`${SITE}/logo.png`, { cache: 'force-cache' });
  if (!res.ok) return null;
  const buf = await res.arrayBuffer();
  return `data:image/png;base64,${toBase64(buf)}`;
}

export default async function TwitterImage() {
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
          padding: 40,
          background:
            'linear-gradient(180deg, #ffffff 0%, #f8fafc 55%, #eef2f7 100%)',
          color: '#0f172a',
          fontFamily:
            'ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Ubuntu, Cantarell, Noto Sans, sans-serif',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
          {logo ? (
            <img src={logo} alt="" width={64} height={64} />
          ) : (
            <div
              style={{
                width: 64,
                height: 64,
                backgroundColor: '#0f172a',
                color: '#fff',
                borderRadius: '14px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: 26,
                fontWeight: 800,
              }}
            >
              TM
            </div>
          )}
          <div style={{ fontSize: 28, fontWeight: 800 }}>TradeMate Quotes</div>
        </div>

        <div>
          <div style={{ fontSize: 40, fontWeight: 900, lineHeight: 1.1 }}>
            Quotes in Minutes
          </div>
          <div style={{ marginTop: 8, fontSize: 20, color: '#334155' }}>
            AI-powered • Branded PDFs
          </div>
        </div>

        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            fontSize: 18,
            color: '#1f2937',
          }}
        >
          <div>Free & Premium</div>
          <div style={{ opacity: 0.75 }}>{new URL(SITE).host}</div>
        </div>
      </div>
    ),
    size
  );
}