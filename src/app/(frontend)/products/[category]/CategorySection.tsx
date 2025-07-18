'use client'

import { useEffect, useRef } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import type { Category } from '@/payload-types'

type Media = {
  url: string
  width?: number
  height?: number
  alt?: string
}

type CategorySectionProps = {
  categoryDoc: Category
  currentCategorySlug: string
}

export default function CategorySection({
  categoryDoc,
  currentCategorySlug,
}: CategorySectionProps) {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Add animation classes when section comes into view
            entry.target.classList.remove('opacity-0', 'translate-y-10')
            entry.target.classList.add('opacity-100', 'translate-y-0')

            // Animate children
            const children = entry.target.querySelectorAll('.category-card')
            children.forEach((child, index) => {
              setTimeout(() => {
                child.classList.remove('opacity-0', 'translate-y-10')
                child.classList.add('opacity-100', 'translate-y-0')
              }, index * 200)
            })

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

    return () => observer.disconnect()
  }, [])

  return (
    <section
      ref={sectionRef}
      className="py-20 bg-white scroll-mt-16 opacity-0 translate-y-10 transition-all duration-1000"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
            {categoryDoc.title} <span className="text-red-500">Categories</span>
          </h2>
          <p className="text-xl text-gray-600 mx-auto">
            Browse through our extensive product categories to find the perfect solution for your
            needs.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {categoryDoc.subcategories?.map((subcategory, index) => {
            if (typeof subcategory === 'string') return null
            return (
              <Link
                key={subcategory.id}
                href={`/products/${currentCategorySlug}/${subcategory.slug}`}
                className="category-card group opacity-0 translate-y-10 transition-all duration-700"
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="bg-white rounded-lg border border-gray-200 hover:border-gray-300 transition-all duration-300 overflow-hidden hover:shadow-md cursor-pointer group">
                  {/* Image Container */}
                  <div className="relative h-48 bg-gray-50 flex items-center justify-center p-6">
                    {typeof subcategory.SubcategoryImage === 'object' &&
                    subcategory.SubcategoryImage !== null &&
                    'url' in subcategory.SubcategoryImage ? (
                      <Image
                        src={(subcategory.SubcategoryImage as Media).url}
                        alt={subcategory.title}
                        width={200}
                        height={200}
                        className="w-full h-full object-contain transition-transform duration-300 hover:scale-105"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center">
                        <div className="text-2xl font-bold text-gray-400">{subcategory.title}</div>
                      </div>
                    )}
                  </div>

                  {/* Content Container */}
                  <div className="p-4 text-center bg-white">
                    <h3 className="text-lg font-medium text-gray-700 mb-2">{subcategory.title}</h3>

                    {/* Subtle divider line */}
                    <div className="w-0 h-0.5 bg-red-500 mx-auto group-hover:w-8 transition-all duration-300"></div>
                  </div>
                </div>
              </Link>
            )
          })}
        </div>
      </div>
    </section>
  )
}
