// app/products/[category]/[subcategory]/page.tsx
export const dynamic = 'force-dynamic'
import configPromise from '@payload-config'
import { getPayload } from 'payload'
import type { Product } from '@/payload-types'
import { draftMode } from 'next/headers'
import Image from 'next/image'
import { Metadata } from 'next'
import CategorySection from './CategorySection'

type Args = {
  category: string
  subcategory: string
  params: Promise<{ slug?: string }>
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ Subcategory: string; Category: string }>
}): Promise<Metadata> {
  const { Subcategory, Category } = await params

  const payload = await getPayload({ config: configPromise })

  const categoryDoc = await payload
    .find({
      collection: 'categories',
      where: { slug: { equals: Subcategory } },
      limit: 1,
      pagination: false,
    })
    .then((res) => res.docs?.[0])

  const title = categoryDoc?.meta?.title || categoryDoc?.title || 'Category Page'
  const description =
    categoryDoc?.meta?.description || `Explore products in the ${categoryDoc?.title} category.`

  const image = categoryDoc?.meta?.image
  const isImageObject = typeof image === 'object' && image !== null && 'url' in image

  const imageUrl = isImageObject
    ? `${process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3002'}${image.url}`
    : undefined

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url: `${process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3002'}/products/${Category}/${Subcategory}`,
      siteName: 'Lovosis ,Technology L.L.C',
      locale: 'en_US',
      type: 'website',
      images: isImageObject
        ? [
            {
              url: imageUrl!,
              width: image.width || 1200,
              height: image.height || 630,
              alt: image.alt || title,
            },
          ]
        : [],
    },
    twitter: {
      card: imageUrl ? 'summary_large_image' : 'summary',
      title,
      description,
      images: imageUrl ? [imageUrl] : [],
    },
    metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3002'),
  }
}

export default async function Product({ params }: { params: Promise<Args> }) {
  const { isEnabled: draft } = await draftMode()
  const { subcategory, category } = await params
  const payload = await getPayload({ config: configPromise })

  const subcategoryResult = await payload.find({
    collection: 'subcategories',
    draft,
    overrideAccess: false,
    pagination: false,
    where: {
      slug: {
        equals: subcategory,
      },
    },
    depth: 3,
  })

  if (!subcategoryResult.docs || subcategoryResult.docs.length === 0) {
    return (
      <div className="pt-[90px] min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Subcategory Not Found</h1>
          <p className="text-gray-600">
            The subcategory &ldquo;{subcategory}&rdquo; could not be found.
          </p>
        </div>
      </div>
    )
  }

  const subcategoryId = subcategoryResult.docs[0].id

  const productsResult = await payload.find({
    collection: 'products',
    draft,
    overrideAccess: false,
    pagination: false,
    where: {
      subcategories: {
        equals: subcategoryId,
      },
    },
  })

  const products = productsResult.docs || []

  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3002'

  const productSchemas = products
    .filter((product) => product && product.title && product.slug)
    .map((product) => ({
      '@type': 'Product',
      name: product.title,
      url: `${baseUrl}/products/${category}/${subcategory}/${product.slug}`,
      offers: {
        '@type': 'Offer',
        priceCurrency: 'USD',
        price: product.pricep ? String(product.pricep) : '0.00',
        availability: 'https://schema.org/InStock',
      },
    }))

  const filteredProductSchemas = productSchemas.filter((item) => item['@type'] !== 'Product')
  const schemaMarkup = {
    '@context': 'https://schema.org',
    '@graph': [
      ...filteredProductSchemas,
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            item: {
              '@id': baseUrl,
              '@type': 'WebPage',
              name: 'Home',
            },
          },
          {
            '@type': 'ListItem',
            position: 2,
            item: {
              '@id': `${baseUrl}/products/${category}`,
              '@type': 'WebPage',
              name: category,
            },
          },
          {
            '@type': 'ListItem',
            position: 3,
            item: {
              '@id': `${baseUrl}/products/${category}/${subcategory}`,
              '@type': 'WebPage',
              name: subcategory,
            },
          },
        ],
      },
    ],
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaMarkup) }}
        key="product-schema"
      />

      <div className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="relative w-full h-screen flex items-center justify-start overflow-hidden">
          <div className="w-full h-full">
            <Image
              src="/images/dahuactct.jpg"
              alt={`${subcategoryResult.docs[0].title} Products Banner`}
              fill
              priority
              className="object-cover animate-zoom-in"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/50 flex items-center animate-fade-in">
            <div className="max-w-4xl px-10 space-y-8">
              <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight">
                <span className="block opacity-0 animate-slide-in-left">
                  {subcategoryResult.docs[0].title}
                </span>
                <span className="block text-red-500 opacity-0 animate-slide-in-right [animation-delay:1500ms]">
                  Products
                </span>
              </h1>
            </div>
          </div>
        </section>

        {/* Product Section */}
        <CategorySection products={products} category={category} subcategory={subcategory} />
      </div>
    </>
  )
}
