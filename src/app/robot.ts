import type { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  const url = '${process.env.NEXT_PUBLIC_SERVER_URL}'

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
