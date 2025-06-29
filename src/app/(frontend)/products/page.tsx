import Link from 'next/link'
import Image from 'next/image'
import { getPayload } from 'payload'
import configPromise from '@payload-config'
import { Category } from '@/payload-types'

type Media = {
  url: string
  alt?: string
}

export default async function prodcuts() {
  const payload = await getPayload({ config: configPromise })

  const categories = await payload.find({
    collection: 'categories',
    depth: 1,
    limit: 12,
    overrideAccess: false,
  })

  return (
    <>
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
        {/* Hero Section with Image */}
        {/* <section className="relative h-[50vh] md:h-[60vh] bg-center bg-cover bg-no-repeat bg-gray-900">
          <div className="absolute inset-0 z-0">
            <Image
              src="/images/dahuactct.jpg"
              alt="Dahua Products Hero"
              fill
              className="object-cover "
              priority
            />
          </div>

          <div className="absolute inset-0 bg-black bg-opacity-50 z-10">
            <div className="relative z-20 container mx-auto h-full flex flex-col items-center justify-center px-6 text-white text-center">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                <span className="text-white">Dahua</span>
                <span className="text-red-500"> Products</span>
              </h1>
              <p className="text-xl max-w-3xl text-white/90">
                Discover our comprehensive range of security products designed to meet all your
                surveillance and safety needs.
              </p>
            </div>
          </div>
        </section> */}

        <div className="flex-grow">
          {/* <section className="py-16 bg-white">
            <div className="container mx-auto px-4 max-w-6xl">
              <div className="flex flex-col items-center mb-12">
                <h2 className="text-4xl font-bold mb-8 text-center text-gray-900">
                  Our Product <span className="text-red-600">Range</span>
                </h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {products.map((prod) => (
                  <div
                    key={prod.id}
                    className="relative overflow-hidden rounded-lg aspect-[3/4] group shadow-md border border-gray-200 hover:shadow-lg transition-shadow bg-white"
                  >
                    <div className="relative h-3/5 w-full bg-gray-50">
                      <Image
                        src={(prod.heroImage as Media).url}
                        alt={prod.title}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                        className="transition-transform duration-700 group-hover:scale-105 p-2"
                        style={{
                          objectFit: 'contain',
                          objectPosition: 'center',
                        }}
                      />
                    </div>

                    <div className="relative h-2/5 p-4 flex flex-col justify-center bg-white">
                      <div>
                        <h3 className="text-sm font-bold text-gray-900 mb-2 line-clamp-2 leading-tight">
                          {prod.title}
                        </h3>
                        <p className="text-gray-600 text-xs line-clamp-3">{prod.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section> */}

          {/* Subcategories Grid - Only if categories exist */}

          <section className="py-16 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
                  Product Categories
                </h2>
                <p className="text-lg  text-gray-700  mx-auto">
                  Browse through our extensive product categories to find the perfect security
                  solution for your needs.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {categories.docs.map((cat: Category) => (
                  <Link href={`/products/${cat.slug}`} key={cat.id} className="group">
                    <div className="group relative">
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
                          {typeof cat.categoryImage === 'object' &&
                          cat.categoryImage !== null &&
                          'url' in cat.categoryImage &&
                          (cat.categoryImage as Media).url ? (
                            <Image
                              src={(cat.categoryImage as Media).url!}
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
                              <span className="font-medium">Learn More</span>
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
                        </div>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </section>

          {/* Why Choose Our Products */}
          <section className="py-16 bg-white">
            <div className="container mx-auto px-6">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold mb-6 text-black">
                  Why Choose Dahua Products?
                </h2>
                <p className="text-lg text-gray-700 max-w-3xl mx-auto">
                  Our products are designed with cutting-edge technology and proven reliability to
                  ensure your security needs are met.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg
                      className="w-8 h-8 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-gray-900">Quality Assured</h3>
                  <p className="text-gray-700">
                    All products undergo rigorous testing to ensure reliability and performance.
                  </p>
                </div>

                <div className="text-center">
                  <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg
                      className="w-8 h-8 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M13 10V3L4 14h7v7l9-11h-7z"
                      />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-gray-900">Latest Technology</h3>
                  <p className="text-gray-700">
                    Incorporating AI and smart features for enhanced security capabilities.
                  </p>
                </div>

                <div className="text-center">
                  <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg
                      className="w-8 h-8 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192L5.636 18.364M12 2.25v19.5"
                      />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-gray-900">24/7 Support</h3>
                  <p className="text-gray-700">
                    Comprehensive support and maintenance services for all our products.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* CTA Section - Updated to match Solutions page style */}
          <section className="py-16 bg-white">
            <div className="container mx-auto px-6">
              <div className="max-w-4xl mx-auto bg-gradient-to-r from-black via-red-900 to-red-600 rounded-2xl p-12 shadow-xl text-center">
                <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
                  Ready to Secure Your Business?
                </h2>
                <p className="text-xl mb-8 text-white/90">
                  Contact our team of experts for a personalized security solution tailored to your
                  needs.
                </p>
                <div className="flex flex-col sm:flex-row justify-center gap-4">
                  <Link
                    href="/contact"
                    className="bg-transparent border-2 border-white text-white font-bold py-4 px-8 rounded-lg hover:bg-red hover:text-red-600 transform hover:scale-105 transition-all duration-300"
                  >
                    Get a Free Consultation
                  </Link>
                  <Link
                    href="/technologies"
                    className="bg-transparent border-2 border-white text-white font-bold py-4 px-8 rounded-lg hover:bg-red hover:text-red-600 transform hover:scale-105 transition-all duration-300"
                  >
                    Explore Technologies
                  </Link>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  )
}
