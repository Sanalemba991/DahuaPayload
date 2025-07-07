export const dynamic = 'force-dynamic'
import configPromise from '@payload-config'
import { getPayload } from 'payload'
import type { Product } from '@/payload-types'
import { draftMode } from 'next/headers'
import { Metadata } from 'next'
import Link from 'next/link'
import { RichText } from '@/components/RichText'
import Image from 'next/image'
import Script from 'next/script'
import ProductImageSection from '@/components/ProductImageSection'

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
  {
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
    console.error(`Product not found: ${slug}`)
    return (
      <div className="pt-[90px] min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Product Not Found</h1>
          <p className="text-gray-600">The product "{slug}" could not be found.</p>
        </div>
      </div>
    )
  }

  const selectedImage =
    typeof product.heroImage === 'object' &&
    product.heroImage !== null &&
    'url' in product.heroImage
      ? (product.heroImage.url ?? '/placeholder.jpg') // <- THIS ENSURES it's never null
      : '/placeholder.jpg'
  return (
    <>
      <Script id="product-schema-markup" type="application/ld+json" strategy="beforeInteractive">
        {JSON.stringify(product.schemaMarkup)}
      </Script>

      <div className="pt-[80px] min-h-screen flex flex-col bg-white">
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

        <div className="flex-grow">
          <section className="py-16 bg-gray-50">
            <div className="py-4 px-2 sm:py-8 sm:px-4 lg:px-8">
              <div className="max-w-6xl mx-auto">
                <div className="text-center mb-12">
                  <h2 className="text-2xl md:text-4xl font-bold mb-6 text-gray-900 animate-bounce">
                    {product.title}
                  </h2>
                  <p className="text-lg text-gray-700 mx-auto animate-pulse">
                    Browse through our extensive product categories to find the perfect security
                    solution for your needs.
                  </p>
                </div>
                <div className="bg-white rounded-2xl shadow-lg overflow-hidden mb-8">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
                    {/* Image Gallery Section - Enhanced */}
                    <ProductImageSection
                      selectedImage={selectedImage}
                      productTitle={product.title}
                    />
                    {/* Product Details Section */}
                    <div className="p-2 sm:p-6 lg:p-8">
                      <div className="space-y-4 sm:space-y-6">
                        <div>
                          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2 sm:mb-3 break-words">
                            {product.title}
                          </h2>
                          <p className="text-base sm:text-base text-gray-600 leading-relaxed">
                            {product.description}
                          </p>
                        </div>

                        <div className="pt-3 sm:pt-4">
                          <Link
                            href="/Contact"
                            className="group relative w-full inline-flex items-center justify-center px-4 sm:px-6 py-2 sm:py-3 bg-red-600 text-white text-base sm:text-base font-medium rounded-lg hover:bg-red-700 transition-all duration-200 shadow-md hover:shadow-lg"
                          >
                            <svg
                              className="w-5 h-5 sm:w-5 sm:h-5 mr-2"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                              />
                            </svg>
                            Contact Us About This Product
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-2xl shadow-lg overflow-hidden p-3 sm:p-6">
                  <h2 className="text-lg text-black sm:text-xl font-semibold mb-4 sm:mb-6">
                    Key Features
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
                    {/* Content 1 */}
                    {product.content && (
                      <div className="bg-gray-50 rounded-lg p-4">
                        <ul className="list-disc pl-4 space-y-1 sm:space-y-2 text-black text-sm sm:text-base">
                          <RichText data={product.content} />
                        </ul>
                      </div>
                    )}

                    {/* Content 2 */}
                    {product.content1 && (
                      <div className="bg-gray-50 rounded-lg p-4">
                        <ul className="list-disc pl-4 space-y-1 sm:space-y-2 text-black text-sm sm:text-base">
                          <RichText data={product.content1} />
                        </ul>
                      </div>
                    )}

                    {/* Content 3 */}
                    {product.content2 && (
                      <div className="bg-gray-50 rounded-lg p-4">
                        <ul className="list-disc pl-4 space-y-1 sm:space-y-2 text-black text-sm sm:text-base">
                          <RichText data={product.content2} />
                        </ul>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  )
}
