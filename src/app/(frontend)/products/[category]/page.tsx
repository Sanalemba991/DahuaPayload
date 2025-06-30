import configPromise from '@payload-config'
import { getPayload } from 'payload'
import type { Product } from '@/payload-types'
import Link from 'next/link'
import Image from 'next/image'
import { Metadata } from 'next'
type Media = {
  url: string
}
export async function generateMetadata({
  params,
}: {
  params: Promise<{ category: string }>
}): Promise<Metadata> {
  const payload = await getPayload({ config: configPromise })
  const category = (
    await payload.find({
      collection: 'categories',
      draft: false,
      limit: 1,
      overrideAccess: false,
      pagination: false,
      where: {
        slug: {
          equals: (await params).category,
        },
      },
    })
  ).docs[0]
  if (!category) {
    return {
      title: 'Category Not Found',
    }
  }
  return {
    title: category.title,
    description: category.description ?? '',
    metadataBase: new URL('http://localhost:3002'),
    alternates: {
      canonical: '/',
      languages: {
        'en-US': '/en-US',
      },
    },
  }
}

type Args = {
  category: string
}

export default async function Product({ params }: { params: Promise<Args> }) {
  const { category = '' } = await params
  const payload = await getPayload({ config: configPromise })
  const subcategories = (
    await payload.find({
      collection: 'categories',
      depth: 2,
      limit: 12,
      overrideAccess: false,
      where: {
        slug: {
          equals: category,
        },
      },
    })
  ).docs[0].subcategories

  return (
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
        {/* Header Section */}
        <div className="text-center mb-8">
          {/* White Hero Section with Two-Tone Text */}
          {/* <div className="w-full bg-white py-8 border-b border-gray-100">
            <h1 className="text-4xl sm:text-5xl font-bold mb-3">
              <span className="text-black">Hikvision </span>
              <span className="text-red-600"> Solutionsjjhj</span>
            </h1>
          </div> */}

          {/* Full Width Red Description Section */}

          {/* <div className="w-full bg-gradient-to-r from-red-700 to-red-800">
            <div className="w-full mx-auto py-8 px-4">
              <div className="w-full px-4">
                <p className="text-base sm:text-lg text-white leading-relaxed font-light tracking-wide"></p>
              </div>
            </div>

          
            <div className="h-0.5 bg-gradient-to-r from-red-500/20 via-white/20 to-red-500/20"></div>
          </div> */}

          {/* Decorative divider */}
          <div className="mt-8 flex items-center justify-center gap-3">
            <div className="w-12 h-0.5 bg-gradient-to-r from-transparent via-red-600 to-transparent rounded-full"></div>
            <div className="w-2 h-2 bg-red-600 rounded-full animate-pulse"></div>
            <div className="w-12 h-0.5 bg-gradient-to-r from-transparent via-red-600 to-transparent rounded-full"></div>
          </div>
        </div>

        {/* Subcategories Grid */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {subcategories?.map((cat) => {
              if (typeof cat === 'string') return null
              return (
                <div key={cat.id} className="p-4 ">
                  <Link href={`/products/${category}/${cat.slug}`}>
                    {cat.title}
                    <div className="group relative">
                      {/* Card */}
                      <div
                        className="bg-white rounded-2xl p-6 transition-all duration-300 
                                            shadow-[0_0_20px_rgba(0,0,0,0.05)] 
                                            hover:shadow-[0_0_25px_rgba(0,0,0,0.2)]
                                            border border-slate-100 hover:border-red-100"
                      >
                        {/* Image Wrapper */}
                        <div className="relative h-48 mb-6 bg-gradient-to-b from-red-50/50 to-transparent rounded-xl p-4">
                          <div className="absolute inset-0 bg-red-50/30 rounded-xl transform rotate-3 scale-95 transition-transform duration-300 group-hover:rotate-6"></div>
                          <div className="absolute inset-0 bg-white/80 rounded-xl transform -rotate-3 scale-95 transition-transform duration-300 group-hover:-rotate-6"></div>
                          {typeof cat.SubcategoryImage === 'object' &&
                          cat.SubcategoryImage !== null &&
                          'url' in cat.SubcategoryImage ? (
                            <Image
                              src={(cat.SubcategoryImage as Media).url}
                              alt={cat.title}
                              width={500}
                              height={384}
                              className="relative h-full w-full object-contain p-4 transform transition-transform duration-300 group-hover:scale-110"
                            />
                          ) : (
                            <div className="relative h-full w-full flex items-center justify-center">
                              <div className="text-2xl font-bold text-red-600/80">{cat.title}</div>
                            </div>
                          )}
                        </div>

                        {/* Content */}
                        <div className="relative">
                          <h2 className="text-xl font-semibold text-slate-800 mb-3 text-center">
                            {cat.title}
                          </h2>

                          {cat.description && (
                            <p className="text-gray-600 text-sm mb-4 text-center line-clamp-2">
                              {cat.description}
                            </p>
                          )}

                          {/* Button */}
                          <div className="flex items-center justify-center space-x-2 text-red-600">
                            <span className="relative">
                              <span className="absolute inset-x-0 bottom-0 h-0.5 bg-red-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
                              <span className="font-medium">Learn Mor</span>
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
    // <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
    //   <div className="lg:grid lg:grid-cols-4 lg:gap-12">
    //     <div className="mb-8 lg:mb-0">
    //       <h3>{JSON.stringify(subcategories)}</h3>
    //       <div className="p-8 grid grid-cols-3">
    //         {subcategories?.map((cat) => {
    //           if (typeof cat === 'string') return null
    //           return (
    //             <div key={cat.id} className="p-4 ">
    //               <Link href={`/products/${category}/${cat.slug}`}>{cat.title}</Link>
    //             </div>
    //           )
    //         })}
    //       </div>
    //       {/* <h1>Product Page for {product.title}</h1>
    //       <p>{product.meta?.description}</p>
    //       {product.meta?.title}
    //       {product.heroImage && typeof product.heroImage !== 'string' && (
    //         <img src={product.heroImage.url!} alt="" />
    //       )} */}
    //     </div>
    //   </div>
    // </div>
  )
}
