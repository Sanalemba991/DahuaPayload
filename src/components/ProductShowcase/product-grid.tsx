'use client'

import { useState, useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import Image from 'next/image'
import { Product } from '@/payload-types'
import Link from 'next/link'

type Media = {
  url: string
}

const sectionVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  },
}

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 30,
    scale: 0.95,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.7,
      ease: [0.175, 0.885, 0.32, 1.275],
      delay: 0.2,
    },
  },
  hover: {
    y: -4,
    scale: 1.02,
    boxShadow: '0 10px 20px rgba(0, 0, 0, 0.08)',
    transition: {
      duration: 0.3,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  },
}

type SingleProductProps = {
  products: Product[]
}

export default function SingleProduct({ products }: SingleProductProps) {
  const sectionRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 })

  const validProducts = Array.isArray(products) ? products : []
  const featuredProduct = validProducts.length > 0 ? validProducts[0] : null

  const getProductPath = (product: Product) => {
    return {
      categorySlug: 'unknown',
      subcategorySlug: 'unknown',
      productSlug: product.slug || 'unknown',
    }
  }

  return (
    <motion.section
      ref={sectionRef}
      variants={sectionVariants}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      className="py-6 bg-white scroll-mt-12"
      id="featured-product"
    >
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-center">
          {featuredProduct ? (
            <motion.div
              variants={cardVariants}
              initial="hidden"
              animate={isInView ? 'visible' : 'hidden'}
              whileHover="hover"
              className="w-full max-w-xs"
            >
              <Link
                href={`/products/${getProductPath(featuredProduct).categorySlug}/${
                  getProductPath(featuredProduct).subcategorySlug
                }/${getProductPath(featuredProduct).productSlug}`}
                className="block"
              >
                <div className="relative h-40 bg-gray-50 flex items-center justify-center p-4">
                  {typeof featuredProduct.heroImage === 'object' &&
                  featuredProduct.heroImage !== null &&
                  'url' in featuredProduct.heroImage ? (
                    <Image
                      src={(featuredProduct.heroImage as Media).url}
                      alt={featuredProduct.title || 'Product Image'}
                      width={160}
                      height={120}
                      className="object-contain max-w-full max-h-full transition-transform duration-300 group-hover:scale-105"
                      priority
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

                <div className="px-3 py-2 bg-white border border-t-0 border-gray-200">
                  <div className="flex items-center justify-between mb-1">
                    <h3 className="text-sm font-medium text-gray-900 truncate">
                      {featuredProduct.title || 'Product'}
                    </h3>
                    <svg
                      className="w-3 h-3 text-gray-400 ml-1"
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
                  <p className="text-xs text-gray-600 line-clamp-2">
                    {featuredProduct.meta?.description || 'Product description'}
                  </p>
                </div>
              </Link>
            </motion.div>
          ) : (
            <div className="text-center py-8 text-sm text-gray-500">
              No featured product available
            </div>
          )}
        </div>
      </div>
    </motion.section>
  )
}
