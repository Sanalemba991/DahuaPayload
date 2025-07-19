'use client'

import { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import type { Product } from '@/payload-types'

type Media = {
  url: string
  width?: number
  height?: number
  alt?: string
}

type ProductSectionProps = {
  products: Product[]
  category: string
  subcategory: string
}

export default function ProductSection({ products, category, subcategory }: ProductSectionProps) {
  const sectionRef = useRef<HTMLElement>(null)
  const [selectedProducts, setSelectedProducts] = useState<Set<string>>(new Set())

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.remove('opacity-0', 'translate-y-8')
            entry.target.classList.add('opacity-100', 'translate-y-0')

            const children = entry.target.querySelectorAll('.product-card')
            children.forEach((child, index) => {
              setTimeout(() => {
                child.classList.remove('opacity-0', 'translate-y-8')
                child.classList.add('opacity-100', 'translate-y-0')
              }, index * 60)
            })

            observer.unobserve(entry.target)
          }
        })
      },
      {
        threshold: 0.1,
        rootMargin: '30px',
      },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const handleProductSelect = (productId: string, event: React.MouseEvent) => {
    event.preventDefault()
    event.stopPropagation()

    const newSelection = new Set(selectedProducts)
    if (newSelection.has(productId)) {
      newSelection.delete(productId)
    } else {
      newSelection.add(productId)
    }
    setSelectedProducts(newSelection)
  }

  return (
    <section
      ref={sectionRef}
      className="py-6 bg-white scroll-mt-12 opacity-0 translate-y-8 transition-all duration-800"
      id="products"
    >
      <div className="max-w-6xl mx-auto px-3 sm:px-4 lg:px-6">
        {/* Header */}
        <div className="mb-4">
          <h2 className="text-xl font-semibold text-gray-900">Products</h2>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
          {products.length > 0 ? (
            products.map((product, index) => {
              if (typeof product === 'string') return null
              const isSelected = selectedProducts.has(product.id)

              return (
                <div
                  key={product.id}
                  className="product-card opacity-0 translate-y-8 transition-all duration-600"
                  style={{ transitionDelay: `${index * 60}ms` }}
                >
                  <div className="bg-white border border-gray-200 hover:shadow-sm transition-all duration-300 h-full rounded-sm">
                    <Link
                      href={`/products/${category}/${subcategory}/${product.slug || 'unknown'}`}
                      className="group block h-full"
                    >
                      {/* Image Container - Made bigger */}
                      <div className="relative h-40 sm:h-44 lg:h-48 bg-gray-50 flex items-center justify-center p-4">
                        {typeof product.heroImage === 'object' &&
                        product.heroImage !== null &&
                        'url' in product.heroImage ? (
                          <Image
                            src={(product.heroImage as Media).url}
                            alt={product.title || 'Product Image'}
                            width={160}
                            height={120}
                            className="object-contain max-w-full max-h-full transition-transform duration-300 group-hover:scale-105"
                            priority={index < 4}
                          />
                        ) : (
                          <div className="w-24 h-20 bg-gray-100 flex items-center justify-center">
                            <svg
                              className="w-8 h-8 text-gray-300"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={1.5}
                                d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 002 2z"
                              />
                            </svg>
                          </div>
                        )}
                      </div>

                      {/* Product Info */}
                      <div className="px-3 py-2">
                        {/* Product Model/SKU */}
                        <div className="flex items-center justify-between mb-1">
                          <h3 className="text-sm font-medium text-gray-900 group-hover:text-red-600 truncate transition-colors duration-200">
                            {product.title || 'Model Not Available'}
                          </h3>
                          <svg
                            className="w-3 h-3 text-gray-400 group-hover:text-red-600 ml-1 flex-shrink-0 transition-colors duration-200"
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
                        </div>

                        {/* Product Description */}
                        <p className="text-xs text-gray-600 leading-tight line-clamp-2">
                          {product.meta?.description ||
                            product.title ||
                            'Product description not available'}
                        </p>
                      </div>
                    </Link>
                  </div>
                </div>
              )
            })
          ) : (
            <div className="text-center py-12 col-span-full">
              <div className="inline-flex items-center justify-center bg-gray-100 rounded-full p-6 mb-4">
                <svg
                  className="w-6 h-6 text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"
                  />
                </svg>
              </div>
              <h3 className="text-base font-medium text-gray-900 mb-1">No products found</h3>
              <p className="text-sm text-gray-500">
                Check back later for new products in this category.
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
