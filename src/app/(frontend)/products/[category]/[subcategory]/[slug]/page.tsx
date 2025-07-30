export const dynamic = 'force-dynamic'
import configPromise from '@payload-config'
import { getPayload } from 'payload'
import type { Product } from '@/payload-types'
import { draftMode } from 'next/headers'
import { Metadata } from 'next'
import Image from 'next/image'
import Script from 'next/script'
import CategorySection from './CategorySection'

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string; category: string; subcategory: string }>
}): Promise<Metadata> {
  const payload = await getPayload({ config: configPromise })

  const productResult = await payload.find({
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

  const product = productResult.docs[0]

  if (!product) {
    return {
      title: 'Product Not Found',
    }
  }

  return {
    title: product.title,
    description: product.meta?.description ?? '',
    metadataBase: new URL('http://localhost:3002'),
    alternates: {
      canonical: '/',
      languages: {
        'en-US': '/en-US',
      },
    },
    openGraph: {
      title: product.title,
      description: product?.meta?.description ?? '',
      siteName: 'https://totalengg.in',
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
  const productResult = await payload.find({
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

  const product = productResult.docs[0]

  if (!product) {
    return (
      <div className="pt-[90px] min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Product Not Found</h1>
          <p className="text-gray-600">The product could not be found</p>
        </div>
      </div>
    )
  }

  const selectedImage =
    typeof product.heroImage === 'object' &&
    product.heroImage !== null &&
    'url' in product.heroImage
      ? (product.heroImage.url ?? '/placeholder.jpg')
      : '/placeholder.jpg'

  return (
    <>
      <Script id="product-schema-markup" type="application/ld+json" strategy="beforeInteractive">
        {JSON.stringify(product.schemaMarkup)}
      </Script>

      <div className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="relative w-full h-screen flex items-center justify-start overflow-hidden">
          <div className="w-full h-full">
            <Image
              src="/images/dahuactct.jpg"
              alt={`${product.title} Products Banner`}
              fill
              priority
              className="object-cover animate-zoom-in"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/50 flex items-center animate-fade-in">
            <div className="max-w-4xl px-10 space-y-8">
              <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight">
                <span className="block opacity-0 animate-slide-in-left">{product.title}</span>
                <span className="block text-red-500 opacity-0 animate-slide-in-right [animation-delay:1500ms]">
                  Product Details
                </span>
              </h1>
            </div>
          </div>
        </section>

        <CategorySection product={product} selectedImage={selectedImage} />
      </div>
    </>
  )
}
