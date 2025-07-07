'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import { Category, Product } from '@/payload-types'
import Link from 'next/link'
type Media = {
  url: string
}

export default function ProductGrid({
  products,
  categories,
}: {
  products: Product[]
  categories: Category[]
}) {
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [hoveredProduct, setHoveredProduct] = useState<string | null>(null)

  // Debug logging
  if (process.env.NODE_ENV === 'development') {
    console.log('ProductGrid - Products:', products)
    console.log('ProductGrid - Categories:', categories)
  }

  // Ensure we have valid arrays
  const validProducts = Array.isArray(products) ? products : []
  const validCategories = Array.isArray(categories) ? categories : []

  const filteredProducts =
    selectedCategory === 'all'
      ? validProducts
      : validProducts.filter((product) => {
          if (!product.categories) return false

          // Handle both array and single category cases
          if (Array.isArray(product.categories)) {
            return product.categories.some(
              (cat) =>
                typeof cat === 'object' &&
                cat !== null &&
                'id' in cat &&
                cat.id === selectedCategory,
            )
          } else if (
            typeof product.categories === 'object' &&
            product.categories !== null &&
            'id' in product.categories
          ) {
            return product.categories.id === selectedCategory
          }

          return false
        })

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="flex flex-col items-center mb-12">
          <h2 className="text-4xl font-bold mb-8 text-center text-gray-900">
            Industry-Leading <span className="text-red-600">Products</span>
          </h2>

          <div className="flex flex-wrap justify-center gap-2">
            <button
              key={'all'}
              className={`px-4 py-2 rounded-full text-sm transition-all
                  ${
                    selectedCategory === 'all'
                      ? 'bg-red-600 text-white shadow-lg'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200 hover:text-gray-900 border border-gray-300'
                  }
                `}
              onClick={() => setSelectedCategory('all')}
            >
              All
            </button>
            {validCategories
              .filter((category) => category && category.id && category.title) // Filter out invalid categories
              .map((category) => (
                <button
                  key={category.id}
                  className={`px-4 py-2 rounded-full text-sm transition-all
                  ${
                    selectedCategory === category.id
                      ? 'bg-red-600 text-white shadow-lg'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200 hover:text-gray-900 border border-gray-300'
                  }
                `}
                  onClick={() => setSelectedCategory(category.id)}
                >
                  {category.title}
                </button>
              ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          <AnimatePresence mode="sync">
            {filteredProducts
              .filter((product) => product && product.id) // Filter out invalid products
              .map((product) => (
                <motion.div
                  layout
                  key={product.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10, scale: 0.95 }}
                  transition={{ duration: 0.4 }}
                  className="relative overflow-hidden rounded-lg aspect-[3/4] group shadow-md border border-gray-200 hover:shadow-lg transition-shadow bg-white"
                  onMouseEnter={() => setHoveredProduct(product.id)}
                  onMouseLeave={() => setHoveredProduct(null)}
                >
                  {/* Image Container - Takes up 70% of the card */}
                  <Link
                    href={`/products/${(() => {
                      if (!product.categories) return 'unknown'

                      if (Array.isArray(product.categories)) {
                        const firstCategory = product.categories[0] as Category
                        return firstCategory?.slug || 'unknown'
                      } else {
                        const category = product.categories as Category
                        return category?.slug || 'unknown'
                      }
                    })()}/${product.slug || 'unknown'}`}
                  >
                    <div className="relative w-full h-[70%] bg-gray-50">
                      <Image
                        src={(product.heroImage as Media)?.url || '/dahua.webp'}
                        alt={product.title || 'Product'}
                        width={400}
                        height={400}
                        className="object-contain w-full h-full"
                        onError={(e) => {
                          const target = e.target as HTMLImageElement
                          target.src = '/dahua.webp'
                        }}
                      />
                    </div>
                  </Link>
                  {/* Content Area - Takes up 40% of the card */}
                  <div className="relative h-[30%] p-4 flex flex-col justify-between bg-white">
                    <div>
                      <h3 className="text-sm font-bold text-gray-900 mb-2 line-clamp-2 leading-tight">
                        {product.title || 'Untitled Product'}
                      </h3>
                      <p className="text-gray-600 text-xs line-clamp-2 mb-3">
                        {product.description || 'No description available'}
                      </p>
                    </div>

                    <motion.div
                      initial={{ opacity: 0, y: 5 }}
                      animate={{
                        opacity: hoveredProduct === product.id ? 1 : 0,
                        y: hoveredProduct === product.id ? 0 : 5,
                      }}
                      transition={{ duration: 0.3 }}
                      className="mt-auto"
                    ></motion.div>
                  </div>
                </motion.div>
              ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  )
}
