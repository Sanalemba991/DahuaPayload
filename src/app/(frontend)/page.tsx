import { getPayload } from 'payload'
import config from '@/payload.config'
import HeroSection from '@/components/Hero/hero-section'
import ProductGrid from '@/components/ProductShowcase/product-grid'
import FeatureBlocks from '@/components/Features/feature-blocks'
import TestimonialSlider from '@/components/Testimonials/testimonial-slider'
import CTASection from '@/components/CTA/cta-section'
import { Metadata } from 'next'
import configPromise from '@payload-config'
import { Media } from '@/payload-types'

// Force dynamic rendering to ensure fresh data on each request
export const dynamic = 'force-dynamic'
// Alternative: Use revalidate for ISR (Incremental Static Regeneration)
// export const revalidate = 60 // revalidate every 60 seconds

// If you prefer better performance with ISR, comment out the line above and uncomment the line below:
// export const revalidate = 60 // This will cache the page for 60 seconds before regenerating

export async function generateMetadata(): Promise<Metadata> {
  const payload = await getPayload({ config: configPromise })
  const settings = await payload.findGlobal({ slug: 'site-settings', depth: 5 })
  const ogImageUrl = settings.siteImage as Media

  return {
    title: settings.meta?.title,
    description: settings.meta?.description ?? '',
    metadataBase: new URL('http://localhost:3000'),
    alternates: {
      canonical: '/',
      languages: {
        'en-US': '/en-US',
      },
    },
    openGraph: {
      title: settings.meta?.title ?? '',
      description: settings.meta?.description ?? '',
      url: settings.slug ?? '',
      siteName: settings.meta?.title || 'My Site',
      alternateLocale: '',
      countryName: 'U.A.E',
      phoneNumbers: '+971503308608',
      emails: 'sales@unvdubai.com',
      images: [
        {
          url: ogImageUrl?.sizes?.ogImage?.url ?? '',
          alt: settings.meta?.title || 'Site image',
        },
      ],
      locale: 'en_US',
      type: 'website',
    },
    twitter: {
      description: 'new description',
      images: [
        {
          url: ogImageUrl?.sizes?.ogImage?.url ?? '',
          alt: settings.meta?.title || 'Site image',
        },
      ],
    },
  }
}

export default async function HomePage() {
  const payloadConfig = await config
  const payload = await getPayload({ config: payloadConfig })

  // Fetch homepage data
  const HomePage = await payload.findGlobal({
    slug: 'homepage',
    depth: 1,
    overrideAccess: false,
  })

  // Fetch products with fresh data
  const products = (
    await payload.find({
      collection: 'products',
      overrideAccess: false,
      pagination: false,
      depth: 2, // Increase depth to get related data
    })
  ).docs

  // Fetch categories with fresh data
  const categories = (
    await payload.find({
      collection: 'categories',
      overrideAccess: false,
      pagination: false,
      depth: 1,
    })
  ).docs
  return (
    <div className="relative w-full overflow-hidden">
      <HeroSection homepage={HomePage} />
      <ProductGrid products={products} categories={categories} />
      <FeatureBlocks />
      <TestimonialSlider />
      <CTASection />
    </div>
  )
}
