export const dynamic = 'force-dynamic'
import Link from 'next/link'
import Image from 'next/image'
import { getPayload } from 'payload'
import configPromise from '@payload-config'
import { Category } from '@/payload-types'
import { Metadata } from 'next'
import CategorySection from './CategorySection'

type Media = {
  url: string
  alt?: string
}

export async function generateMetadata(): Promise<Metadata> {
  const payload = await getPayload({ config: configPromise })

  const settings = await payload.findGlobal({
    slug: 'site-settings',
    depth: 1,
  })

  return {
    title: settings.meta?.title || 'Products',
    description: settings.meta?.description || 'Explore our product categories.',
    metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3002'),
    alternates: {
      canonical: '/products',
    },
    openGraph: {
      title: settings.meta?.title || 'Products',
      description: settings.meta?.description || '',
      siteName: settings.meta?.title || 'My Site',
      locale: 'en_US',
      type: 'website',
      url: '/products',
    },
  }
}

export default async function Products() {
  const payload = await getPayload({ config: configPromise })
  const categories = await payload.find({
    collection: 'categories',
    depth: 1,
    limit: 12,
    overrideAccess: false,
  })

  return (
    <>
      <link href="https://unpkg.com/aos@2.3.1/dist/aos.css" rel="stylesheet" />
      <div className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="relative w-full h-screen flex items-center justify-start overflow-hidden">
          <div className="w-full h-full">
            <Image
              src="/images/dahuactct.jpg"
              alt="Dahua Products Banner"
              fill
              priority
              className="object-cover animate-zoom-in"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/50 flex items-center animate-fade-in">
            <div className="max-w-4xl px-10 space-y-8">
              <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight">
                <span className="block opacity-0 animate-slide-in-left">Dahua</span>
                <span className="block text-red-500 opacity-0 animate-slide-in-right [animation-delay:1500ms]">
                  Products
                </span>
              </h1>
              <p className="text-lg md:text-xl text-gray-100 max-w-3xl leading-relaxed opacity-0 animate-fade-in [animation-delay:2500ms]">
                Discover our comprehensive range of security products designed to meet all your
                surveillance and safety needs.
              </p>
              <div className="flex gap-4 opacity-0 animate-fade-in [animation-delay:2500ms] [animation-fill-mode:forwards]">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-3 px-7 py-3 border-2 border-white text-white bg-transparent hover:bg-red-600 hover:border-red-600 hover:text-white transition-all duration-300 font-semibold group text-base"
                >
                  Contact Us
                  <svg
                    className="w-5 h-5 transition-transform group-hover:translate-x-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Categories Section - Now a client component */}
        <CategorySection categories={categories} />
      </div>
    </>
  )
}
