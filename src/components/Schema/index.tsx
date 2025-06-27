import type { Product, Media } from '@/payload-types'

export const articleSchema = (props: Product) => {
  return {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: props.title,
    image_url: props.heroImage as Media,
    descriptions: props.description,
    datePublished: new Date(props.createdAt),
    dateModified: new Date(props.updatedAt),
  }
}

export const imageSchema = () => {
  return {
    '@context': 'https://schema.org',
    '@type': 'ImageObject',
    contentUrl: '',
  }
}
