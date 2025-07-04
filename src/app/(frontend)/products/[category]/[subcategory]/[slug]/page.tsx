export const dynamic = 'force-dynamic'
import configPromise from '@payload-config'
import { getPayload } from 'payload'
import type { Product } from '@/payload-types'
import { draftMode } from 'next/headers'
import { Metadata } from 'next'
import Image from 'next/image'
import ImageGallery from '@/components/ImageGallery'
import ProductDetails from '@/components/ProductDetails'
import Script from 'next/script'
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string; category: string; subcategory: string }>
}): Promise<Metadata> {
  const payload = await getPayload({ config: configPromise })
  const settings = await payload.findGlobal({ slug: 'site-settings', depth: 5 })
  const product = (
    await payload.find({
      collection: 'products',
      draft: false,
      limit: 1,
      overrideAccess: false,
      pagination: false,
      where: {
        slug: {
          equals: (await params).slug,
        },
      },
    })
  ).docs[0]
  if (!product) {
    return {
      title: 'Product Not Found',
    }
  }
  {
  }
  return {
    title: product.title,
    description: product.meta?.description ?? '',
    metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3002'),
    alternates: {
      canonical: '/',
      languages: {
        'en-US': '/en-US',
      },
    },
    openGraph: {
      title: product.title,
      description: product?.meta?.description ?? '',
      siteName: settings.meta?.title || 'My Site',
      locale: 'en_US',
      type: 'website',
    },
  }
}

type Args = {
  category: string
  subcategory: string
  slug: string
}

export default async function Product({ params }: { params: Promise<Args> }) {
  const { isEnabled: draft } = await draftMode()
  const { slug } = await params
  const payload = await getPayload({ config: configPromise })
  const product = (
    await payload.find({
      collection: 'products',
      draft,
      limit: 1,
      overrideAccess: false,
      pagination: false,
      where: {
        slug: {
          equals: slug,
        },
      },
    })
  ).docs[0]

  return (
    <>
      <Script id="product-schema-markup" type="application/ld+json" strategy="beforeInteractive">
        {JSON.stringify(product.schemaMarkup)}
      </Script>
      <section className="bg-gray-50 py-8 pt-32">
        <div className="relative w-full h-[320px] md:h-[420px]">
          <Image
            src="/images/dahuactct.jpg"
            alt="Dahua Solutions Banner"
            fill
            className="object-cover w-full h-full"
            priority
          />
          <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/40">
            <h1 className="text-white text-4xl md:text-5xl font-bold drop-shadow-lg">
              <span className="text-white">Dahua</span>
              <span className="text-red-500"> Products</span>
            </h1>
            <p className="text-xl max-w-3xl text-white/90">
              Discover our comprehensive range of security products designed to meet all your
              surveillance and safety needs.
            </p>
          </div>
        </div>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* <Breadcrumb title={product.title} /> */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
              <ImageGallery
                image={
                  (typeof product.heroImage === 'string'
                    ? product.heroImage
                    : product.heroImage?.url) ?? ''
                }
                title={product.title}
              />
              <ProductDetails product={product} />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
