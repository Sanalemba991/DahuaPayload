import configPromise from '@payload-config'
import { getPayload } from 'payload'
import type { Product } from '@/payload-types'
import { draftMode } from 'next/headers'
import { Metadata } from 'next'
import Link from 'next/link'
import { RichText } from '@/components/RichText'
import Image from 'next/image'

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string; category: string; subcategory: string }>
}): Promise<Metadata> {
  const payload = await getPayload({ config: configPromise })

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

  return {
    title: product.title,
    description: product.meta?.description ?? '',
    metadataBase: new URL('http://localhost:3000'),
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

  const selectedImage =
    typeof product.heroImage === 'object' &&
    product.heroImage !== null &&
    'url' in product.heroImage
      ? (product.heroImage.url ?? '/placeholder.jpg') // <- THIS ENSURES it's never null
      : '/placeholder.jpg'
  return (
    <>
      <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-50">
        <div className="py-4 px-2 sm:py-8 sm:px-4 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden mb-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
                {/* Image Gallery Section - Enhanced */}
                <div className="p-4 sm:p-6 bg-gray-50">
                  <div className="relative h-72 sm:h-[400px] rounded-xl overflow-hidden border border-gray-100 shadow-lg bg-white group flex items-center justify-center">
                    <Image
                      src={selectedImage}
                      alt={product.title}
                      width={500}
                      height={384}
                      className="w-full h-full object-contain p-4 sm:p-4 transition-all duration-500 transform hover:scale-105"
                    />
                    {/* Slider Navigation Arrows - visible on both mobile and desktop */}
                    <div className="flex absolute inset-0 items-center justify-between p-4 opacity-0 group-hover:opacity-100 transition-opacity">
                      <button className="p-2 rounded-full bg-white/90 shadow-md hover:shadow-lg transition-all text-gray-800 hover:text-red-600">
                        <svg
                          className="w-5 h-5 sm:w-6 sm:h-6"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M15 19l-7-7 7-7"
                          />
                        </svg>
                      </button>
                      <button className="p-2 rounded-full bg-white/90 shadow-md hover:shadow-lg transition-all text-gray-800 hover:text-red-600">
                        <svg
                          className="w-5 h-5 sm:w-6 sm:h-6"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 5l7 7-7 7"
                          />
                        </svg>
                      </button>
                    </div>
                  </div>
                  <div className="grid grid-cols-4 gap-3 sm:gap-4 mt-4 sm:mt-6"></div>
                </div>
                {/* Product Details Section */}
                <div className="p-2 sm:p-6 lg:p-8">
                  <div className="space-y-4 sm:space-y-6">
                    <div>
                      <h1 className="text-xl sm:text-3xl font-bold text-gray-900 mb-2 sm:mb-3 break-words">
                        {product.title}
                      </h1>
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
              <h2 className="text-lg text-black sm:text-xl font-semibold mb-2 sm:mb-4">
                Key Features
              </h2>
              <ul className="list-disc pl-4 sm:pl-5 space-y-1 sm:space-y-2 text-black">
                <RichText data={product.content} />
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
