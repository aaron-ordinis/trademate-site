import type { NextConfig } from "next";

// Content Security Policy (adjust if you add/remove services)
const csp = [
  "default-src 'self'",
  // Stripe + Google Maps scripts
  "script-src 'self' 'unsafe-inline' https://js.stripe.com https://m.stripe.network https://maps.googleapis.com https://maps.gstatic.com",
  // XHR/WebSocket/Fetch destinations
  "connect-src 'self' https://api.stripe.com https://m.stripe.network https://maps.googleapis.com https://maps.gstatic.com",
  // Images (allow data and blob for inline/icons/maps tiles)
  "img-src 'self' data: blob: https:",
  // Styles (Tailwind/Next often inject inline styles; Google Fonts CSS)
  "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
  // Fonts
  "font-src 'self' data: https://fonts.gstatic.com",
  // Workers (some libs use blob workers)
  "worker-src 'self' blob:",
  // No plugins
  "object-src 'none'",
  // Frames (Stripe)
  "frame-src 'self' https://js.stripe.com",
  // Disallow framing by other sites
  "frame-ancestors 'self'",
  // Where forms may post (Stripe checkout + your site)
  "form-action 'self' https://checkout.stripe.com",
  // Prevent base URL changes
  "base-uri 'self'",
].join("; ");

const nextConfig: NextConfig = {
  reactStrictMode: true,
  swcMinify: true,

  async headers() {
    return [
      // Security headers on all routes
      {
        source: "/:path*",
        headers: [
          { key: "X-Frame-Options", value: "SAMEORIGIN" },
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          { key: "Content-Security-Policy", value: csp },
          {
            key: "Permissions-Policy",
            value: [
              "geolocation=()",
              "camera=()",
              "microphone=()",
              "payment=(self)",
              "accelerometer=()",
              "autoplay=(self)",
              "clipboard-read=(self)",
              "clipboard-write=(self)",
              "encrypted-media=(self)",
              "fullscreen=(self)",
              "xr-spatial-tracking=()",
            ].join(", "),
          },
        ],
      },
      // Aggressive cache for static assets
      {
        source: "/:all*(svg|jpg|jpeg|png|gif|ico|webp|avif|woff2|woff|ttf|eot)",
        headers: [
          { key: "Cache-Control", value: "public, max-age=31536000, immutable" },
        ],
      },
    ];
  },
    async redirects() {
      return [
        {
          source: "/:path*",
          destination: "https://tradematequotes.com/:path*",
          permanent: true,
        },
      ];
    },
  // No redirects for vercel.app
};

export default nextConfig;