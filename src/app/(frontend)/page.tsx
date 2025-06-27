import { getPayload } from 'payload'
import config from '@/payload.config'
import HeroSection from '@/components/Hero/hero-section'
import ProductGrid from '@/components/ProductShowcase/product-grid'
import FeatureBlocks from '@/components/Features/feature-blocks'
import TestimonialSlider from '@/components/Testimonials/testimonial-slider'
import CTASection from '@/components/CTA/cta-section'
import { Metadata } from 'next'
import configPromise from '@payload-config'

export async function generateMetadata(): Promise<Metadata> {
  const payload = await getPayload({ config: configPromise })
  const settings = await payload.findGlobal({ slug: 'site-settings', depth: 3 })

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
  }
}

export default async function HomePage() {
  const payloadConfig = await config
  const payload = await getPayload({ config: payloadConfig })
  const HomePage = await payload.findGlobal({
    slug: 'homepage',
    depth: 1,
    overrideAccess: false,
  })
  const products = (
    await payload.find({
      collection: 'products',
      overrideAccess: false,
      pagination: false,
    })
  ).docs
  const categories = (
    await payload.find({
      collection: 'categories',
      overrideAccess: false,
      pagination: false,
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
