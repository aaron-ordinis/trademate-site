import type { NextConfig } from "next";

// Build a single CSP string (easier to maintain)
// Adjust domains if you add services later (Hotjar, GA, etc.)
const csp = [
  // Only allow this site as the document origin
  "default-src 'self'",

  // JS you run. We allow Stripe + Google Maps scripts.
// If you remove Stripe/Maps from the site, you can delete their hosts.
  "script-src 'self' 'unsafe-inline' https://js.stripe.com https://maps.googleapis.com",

  // XHR/WebSocket destinations (APIs you call from the browser)
  "connect-src 'self' https://api.stripe.com https://maps.googleapis.com https://maps.gstatic.com",

  // Images (allow https + data: for inline icons)
  "img-src 'self' data: https:",

  // Styles. Next.js + Tailwind often inject inline styles; fonts.googleapis allowed.
  "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",

  // Fonts
  "font-src 'self' data: https://fonts.gstatic.com",

  // No plugins/Flash
  "object-src 'none'",

  // Restrict where iframes can come from (Stripe embeds)
  "frame-src 'self' https://js.stripe.com",

  // Disallow framing by other sites (clickjacking)
  "frame-ancestors 'self'",

  // Where forms may post (Stripe Checkout + your site)
  "form-action 'self' https://checkout.stripe.com",

  // Don’t allow this page to change its base URL
  "base-uri 'self'"
].join("; ");

const nextConfig: NextConfig = {
  async headers() {
    return [
      // Global security headers
      {
        source: "/:path*",
        headers: [
          { key: "X-Frame-Options", value: "SAMEORIGIN" },
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },

          // Content Security Policy
          { key: "Content-Security-Policy", value: csp },

          // Permissions Policy (lock down powerful APIs on the marketing site)
          // If you later add geolocation/camera on the website itself, loosen these.
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
              "xr-spatial-tracking=()"
            ].join(", ")
          }
        ]
      },

      // Cache static assets aggressively
      {
        source: "/:all*(svg|jpg|jpeg|png|gif|ico|webp|avif|woff2|woff|ttf|eot)",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable"
          }
        ]
      }
    ];
  },

  // SEO-friendly redirect for your custom domain
  async redirects() {
    return [
      {
        source: "https://www.tradematequotes.com/:path*",
        destination: "https://tradematequotes.com/:path*",
        permanent: true
      }
    ];
  }
};

export default nextConfig;