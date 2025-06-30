import type { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  const url = 'http://localhost:3002'

  return {
    rules: [
      {
        userAgent: 'GoogleBot',
        allow: '/',
        disallow: '/admin',
      },
      {
        userAgent: ['AhrefsBot', 'BingBot'],
        disallow: ['/'],
      },
    ],
    sitemap: `${url}/sitemap.xml`,
  }
}
