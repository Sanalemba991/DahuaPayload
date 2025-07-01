export const dynamic = 'force-dynamic'
import configPromise from '@payload-config'
import { getPayload } from 'payload'
import type { Product } from '@/payload-types'
import { draftMode } from 'next/headers'
import Image from 'next/image'
import Link from 'next/link'

type Args = {
  category: string
  subcategory: string
}
export default async function Product({ params }: { params: Promise<Args> }) {
  const { isEnabled: draft } = await draftMode()
  const { subcategory, category } = await params
  const payload = await getPayload({ config: configPromise })
  const subcategoryId = (
    await payload.find({
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
  ).docs[0].id

  const products = (
    await payload.find({
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
  ).docs
  console.log(products)
  return (
    <>
      <div className="min-h-screen flex flex-col bg-white">
        <div className="flex-grow">
          <div className="text-center mb-8">
            <div className="w-full bg-white py-8 border-b border-gray-100">
              <h1 className="text-4xl sm:text-5xl font-bold mb-3">
                <span className="text-black">Hikvision </span>
                <span className="text-red-600">Solutionsmo</span>
              </h1>
            </div>

            <div className="w-full bg-gradient-to-r from-red-700 to-red-800">
              <div className="w-full mx-auto py-8 px-4">
                <div className="w-full px-4">
                  <p className="text-base sm:text-lg text-white leading-relaxed font-light tracking-wide">
                    jhjkh
                  </p>
                </div>
              </div>

              <div className="h-0.5 bg-gradient-to-r from-red-500/20 via-white/20 to-red-500/20"></div>
            </div>

            <div className="mt-8 flex items-center justify-center gap-3">
              <div className="w-12 h-0.5 bg-gradient-to-r from-transparent via-red-600 to-transparent rounded-full"></div>
              <div className="w-2 h-2 bg-red-600 rounded-full animate-pulse"></div>
              <div className="w-12 h-0.5 bg-gradient-to-r from-transparent via-red-600 to-transparent rounded-full"></div>
            </div>
          </div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {products?.map((product) => {
                if (typeof product === 'string') return null
                return (
                  <div key={product.id} className="p-4 ">
                    <Link href={`/products/${category}/${subcategory}/${product.slug}`}>
                      {product.title}

                      <div className="group relative">
                        <div
                          className="bg-white rounded-2xl p-6 transition-all duration-300 
                                        shadow-[0_0_20px_rgba(0,0,0,0.05)] 
                                        hover:shadow-[0_0_25px_rgba(0,0,0,0.2)]
                                        border border-slate-100 hover:border-red-100"
                        >
                          <div className="relative h-48 mb-6 bg-gradient-to-b from-red-50/50 to-transparent rounded-xl p-4">
                            <div className="absolute inset-0 bg-red-50/30 rounded-xl transform rotate-3 scale-95 transition-transform duration-300 group-hover:rotate-6"></div>
                            <div className="absolute inset-0 bg-white/80 rounded-xl transform -rotate-3 scale-95 transition-transform duration-300 group-hover:-rotate-6"></div>
                            {typeof product.heroImage === 'object' &&
                            product.heroImage !== null &&
                            'url' in product.heroImage ? (
                              <Image
                                src={product.heroImage.url ?? '/placeholder.jpg'}
                                alt={product.title}
                                width={500}
                                height={384}
                                className="relative h-full w-full object-contain p-4 transform transition-transform duration-300 group-hover:scale-110"
                              />
                            ) : (
                              <div className="relative h-full w-full flex items-center justify-center">
                                <div className="text-2xl font-bold text-red-600/80">
                                  {product.title}
                                </div>
                              </div>
                            )}
                            {/* 
                          <img
                            src={(product.heroImage as Media)?.url ?? undefined}
                            alt={product.title}
                            className="relative h-full w-full object-contain p-4 transform transition-transform duration-300 group-hover:scale-110"
                          /> */}

                            {/* {product.heroImage && typeof product.heroImage !== 'string' && (
                            <img src={product.heroImage.url!} alt="" />
                          )} */}
                          </div>

                          {/* Content */}
                          <div className="relative">
                            <h2 className="text-xl font-semibold text-slate-800 mb-3 text-center">
                              {product.title}
                            </h2>

                            <p className="text-gray-600 text-sm mb-4 text-center line-clamp-2">
                              {product.description}
                            </p>

                            {/* Button */}
                            <div className="flex items-center justify-center space-x-2 text-red-600">
                              <span className="relative">
                                <span className="absolute inset-x-0 bottom-0 h-0.5 bg-red-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
                                <span className="font-medium">View Details</span>
                              </span>
                              <svg
                                className="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M13 7l5 5m0 0l-5 5m5-5H6"
                                />
                              </svg>
                            </div>

                            {/* Corner Accent */}
                            <div className="absolute -top-2 -right-2 w-8 h-8">
                              <div className="absolute inset-0 transform rotate-45 translate-x-4 -translate-y-4 bg-red-600/0 group-hover:bg-red-600/10 transition-all duration-300"></div>
                            </div>
                          </div>
                        </div>

                        {/* Hover Effects */}
                        <div className="absolute inset-0 -z-10 bg-red-600 rounded-2xl opacity-0 group-hover:opacity-5 transform scale-90 group-hover:scale-100 transition-all duration-300"></div>
                      </div>
                    </Link>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
