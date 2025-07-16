import { withPayload } from '@payloadcms/next/withPayload'

const NEXT_PUBLIC_SERVER_URL = process.env.VERCEL_PROJECT_PRODUCTION_URL
  ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
  : undefined || process.env.NEXT_PUBLIC_SERVER_URL || 'http://localhost:3002'

// Content Security Policy - environment-specific configuration
const isDev = process.env.NODE_ENV === 'development'

const cspHeader = `
    default-src 'self';
    script-src 'self' 'unsafe-eval' 'unsafe-inline' https://vercel.live https://cdn.jsdelivr.net https://unpkg.com;
    style-src 'self' 'unsafe-inline' https://cdn.jsdelivr.net https://unpkg.com;
    img-src 'self' blob: data: ${isDev ? '* http://localhost:* https://localhost:*' : 'https: https://dahua.lovosis.com https://*.vercel.app https://images.unsplash.com https://lovosis.com https://unv-dubai-uae.com https://www.dahuasecurity.com https://www.google.com https://maps.google.com https://www.youtube.com https://youtube.com https://i.ytimg.com https://totalengg.in https://facebook.com https://www.facebook.com https://instagram.com https://www.instagram.com https://linkedin.com https://www.linkedin.com'};
    font-src 'self' https://cdn.jsdelivr.net https://unpkg.com;
    object-src 'none';
    base-uri 'self';
    form-action 'self';
    frame-ancestors 'none';
    frame-src 'self' https://www.youtube.com https://youtube.com https://www.google.com https://maps.google.com;
    worker-src 'self' blob: https://cdn.jsdelivr.net https://unpkg.com;
    connect-src 'self' https://dahua.lovosis.com https://*.vercel.app wss://dahua.lovosis.com https://www.dahuasecurity.com https://www.google.com https://maps.google.com https://www.youtube.com https://totalengg.in https://facebook.com https://www.facebook.com https://instagram.com https://www.instagram.com https://linkedin.com https://www.linkedin.com https://cdn.jsdelivr.net https://unpkg.com ${isDev ? 'ws://localhost:* http://localhost:* https://localhost:*' : ''};
    media-src 'self' https://dahua.lovosis.com https://images.unsplash.com https://www.dahuasecurity.com ${isDev ? '* http://localhost:* https://localhost:*' : ''};
    ${isDev ? '' : 'upgrade-insecure-requests;'}
`
/** @type {import('next').NextConfig} */
const nextConfig = {
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'Content-Security-Policy',
            value: cspHeader.replace(/\n/g, ''),
          },
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'Referrer-Policy',
            value: 'origin-when-cross-origin',
          },
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block',
          },
        ],
      },
    ]
  },
  images: {
    domains: ['images.unsplash.com'], // Add other domains as needed
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },
  reactStrictMode: true,
}

export default withPayload(nextConfig)
