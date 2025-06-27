import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

// Define the Graph type locally instead of importing
type Graph = {
  '@context': string
  '@graph': Array<{
    '@type': string
    '@id': string
    [key: string]: unknown
  }>
  [key: string]: unknown
}

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const generateStructuredData = (customData: Graph) => {
  const defaultStructuredData: Graph = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Organization',
        '@id': `${process.env.BASE_URL}/#organization`,
        name: process.env.APP_NAME,
      },
      {
        '@type': 'WebSite',
        '@id': `${process.env.BASE_URL}/#website`,
        url: `${process.env.BASE_URL}`,
        publisher: { '@id': `${process.env.BASE_URL}/#organization` },
        inLanguage: 'en-GB',
      },
    ],
  }
  return {
    ...defaultStructuredData,
    ...customData,
  }
}

// Usage of the Image component with the suggested code change
// <Image
//   src="/dahua.webp" // Use an existing image
//   alt="Description"
//   // other props
// />
