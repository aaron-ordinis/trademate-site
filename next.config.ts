import type { NextConfig } from "next";

// Content Security Policy (adjust if you add/remove services)
const csp = [
  "default-src 'self'",
  "script-src 'self' 'unsafe-inline' https://js.stripe.com https://maps.googleapis.com",
  "connect-src 'self' https://api.stripe.com https://maps.googleapis.com https://maps.gstatic.com",
  "img-src 'self' data: https:",
  "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
  "font-src 'self' data: https://fonts.gstatic.com",
  "object-src 'none'",
  "frame-src 'self' https://js.stripe.com",
  "frame-ancestors 'self'",
  "form-action 'self' https://checkout.stripe.com",
  "base-uri 'self'"
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
              "xr-spatial-tracking=()"
            ].join(", ")
          }
        ]
      },
      // Aggressive cache for static assets
      {
        source: "/:all*(svg|jpg|jpeg|png|gif|ico|webp|avif|woff2|woff|ttf|eot)",
        headers: [
          { key: "Cache-Control", value: "public, max-age=31536000, immutable" }
        ]
      }
    ];
  }
  // No redirects for vercel.app
};

export default nextConfig;