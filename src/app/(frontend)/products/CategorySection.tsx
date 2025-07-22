'use client'

import { useEffect, useRef } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import type { Category } from '@/payload-types'

type Media = {
  url: string
  alt?: string
}

export default function CategorySection({ categories }: { categories: any }) {
  const sectionRef = useRef<HTMLElement>(null)
  const featuresSectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Add animation classes when section comes into view
            entry.target.classList.remove('opacity-0', 'translate-y-10')
            entry.target.classList.add('opacity-100', 'translate-y-0')

            // Animate children based on section type
            if (entry.target.id === 'categories') {
              const children = entry.target.querySelectorAll('.category-card')
              children.forEach((child, index) => {
                setTimeout(() => {
                  child.classList.remove('opacity-0', 'translate-y-10')
                  child.classList.add('opacity-100', 'translate-y-0')
                }, index * 200)
              })
            } else if (entry.target.id === 'features') {
              // Animate features section elements
              const heading = entry.target.querySelector('.features-heading')
              const features = entry.target.querySelectorAll('.feature-item')

              heading?.classList.remove('opacity-0')
              heading?.classList.add('opacity-100')

              features.forEach((feature, index) => {
                setTimeout(
                  () => {
                    feature.classList.remove('opacity-0', 'translate-y-10')
                    feature.classList.add('opacity-100', 'translate-y-0')
                  },
                  200 + index * 200,
                )
              })
            }

            // Disconnect once animation is done
            observer.unobserve(entry.target)
          }
        })
      },
      {
        threshold: 0.1,
        rootMargin: '0px',
      },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }
    if (featuresSectionRef.current) {
      observer.observe(featuresSectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <>
    
      <section
        ref={sectionRef}
        id="categories"
        className="py-20 bg-white scroll-mt-16 opacity-0 translate-y-10 transition-all duration-1000"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
              Product Categories
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Browse through our extensive product categories to find the perfect security solution
              for your needs.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {categories.docs.map((cat: Category, index: number) => (
              <Link
                href={`/products/${cat.slug}`}
                key={cat.id}
                className="category-card group opacity-0 translate-y-10 transition-all duration-700"
              >
                <div className="bg-white rounded-lg border border-gray-200 hover:border-gray-300 transition-all duration-300 overflow-hidden hover:shadow-md cursor-pointer group">
                  {/* Image Container */}
                  <div className="relative h-48 bg-gray-50 flex items-center justify-center p-6">
                    {typeof cat.categoryImage === 'object' &&
                    cat.categoryImage !== null &&
                    'url' in cat.categoryImage &&
                    (cat.categoryImage as Media).url ? (
                      <Image
                        src={(cat.categoryImage as Media).url ?? ''}
                        alt={cat.title}
                        width={200}
                        height={200}
                        className="w-full h-full object-contain transition-transform duration-300 hover:scale-105"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center">
                        <div className="text-2xl font-bold text-gray-400">{cat.title}</div>
                      </div>
                    )}
                  </div>

                  {/* Content Container */}
                  <div className="p-4 text-center bg-white">
                    <h3 className="text-lg font-medium text-gray-700 mb-2">{cat.title}</h3>

                    {/* Subtle divider line */}
                    <div className="w-0 h-0.5 bg-red-500 mx-auto group-hover:w-8 transition-all duration-300"></div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section ref={featuresSectionRef} id="features" className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16 opacity-0 transition-opacity duration-700 features-heading">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
              Why Choose <span className="text-red-500">Our Products?</span>
            </h2>
            <p className="text-xl text-gray-600  mx-auto">
              Our products are designed with cutting-edge technology and proven reliability to
              ensure your security needs are met.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="feature-item text-center group opacity-0 translate-y-10 transition-all duration-700">
              <div className="w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-6 transition-transform duration-300 group-hover:scale-110 shadow-lg">
                <svg
                  className="w-10 h-10 text-white"
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
              <h3 className="text-2xl font-bold mb-4 text-gray-900">Quality Assured</h3>
              <p className="text-gray-600 leading-relaxed">
                All products undergo rigorous testing to ensure reliability and performance that
                exceeds industry standards.
              </p>
            </div>

            <div className="feature-item text-center group opacity-0 translate-y-10 transition-all duration-700">
              <div className="w-20 h-20 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-6 transition-transform duration-300 group-hover:scale-110 shadow-lg">
                <svg
                  className="w-10 h-10 text-white"
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
              <h3 className="text-2xl font-bold mb-4 text-gray-900">Innovative Technology</h3>
              <p className="text-gray-600 leading-relaxed">
                We leverage the latest technological advances to provide cutting-edge security
                solutions for modern challenges.
              </p>
            </div>

            <div className="feature-item text-center group opacity-0 translate-y-10 transition-all duration-700">
              <div className="w-20 h-20 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-6 transition-transform duration-300 group-hover:scale-110 shadow-lg">
                <svg
                  className="w-10 h-10 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                  />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900">Proven Reliability</h3>
              <p className="text-gray-600 leading-relaxed">
                Our products are trusted by professionals worldwide for their consistent performance
                and long-term durability.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
