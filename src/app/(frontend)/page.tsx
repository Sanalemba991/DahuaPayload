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
import Script from 'next/script'

export const dynamic = 'force-dynamic'
export async function generateMetadata(): Promise<Metadata> {
  const payload = await getPayload({ config: configPromise })
  const settings = await payload.findGlobal({ slug: 'site-settings', depth: 5 })
  const ogImageUrl = settings.siteImage as Media

  return {
    title: settings.meta?.title,
    description: settings.meta?.description ?? '',
    metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3002'),
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
  const homePageData = await payload.find({
    collection: 'homepage',
    depth: 1,
    limit: 1,
    overrideAccess: false,
  })

  const HomePage = homePageData.docs?.[0] ?? null
  const heroVideo = HomePage?.heroVideo as Media

  const products = (
    await payload.find({
      collection: 'products',
      overrideAccess: false,
      pagination: false,
      depth: 2,
    })
  ).docs

  const categories = (
    await payload.find({
      collection: 'categories',
      overrideAccess: false,
      pagination: false,
      depth: 1,
    })
  ).docs
  return (
    <>
      <Script id="product-schema-markup" type="application/ld+json" strategy="beforeInteractive">
        {JSON.stringify(HomePage?.schemaMarkup)}
      </Script>
      <div className="relative w-full overflow-hidden">
        <HeroSection homepage={HomePage} videoUrl={heroVideo} />
        <ProductGrid products={products} categories={categories} />
        <FeatureBlocks />
        <TestimonialSlider />
        <CTASection />
      </div>
    </>
  )
}
