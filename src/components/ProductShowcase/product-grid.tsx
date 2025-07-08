'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import { Category, Product, Subcategory } from '@/payload-types'
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

  // Animation variants for entire section entrance
  const sectionVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.3,
        staggerChildren: 0.3,
      },
    },
  }

  // Animation variants for title
  const titleVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  }

  // Animation variants for category buttons
  const categoryVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  }

  // Animation variants for product grid container
  const gridVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.3,
      },
    },
  }

  // Animation variants for individual product cards - each will animate independently
  const productVariants = {
    hidden: {
      opacity: 0,
      y: 60,
      scale: 0.8,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
    exit: {
      opacity: 0,
      y: -20,
      scale: 0.95,
      transition: {
        duration: 0.4,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  }

  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={sectionVariants}
      className="py-20 bg-gradient-to-br from-gray-50 to-gray-100 relative overflow-hidden"
    >
      {/* Remove or comment out this block if not needed */}
      {/* <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-20 left-10 w-72 h-72 bg-red-100 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-blue-100 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse delay-1000"></div>
      </div> */}

      <div
        className="container mx-auto px-4 max-w-7xl relative z-10"
        style={{ background: 'transparent' }}
      >
        <div className="flex flex-col items-center mb-16">
          <motion.div variants={titleVariants} className="text-center mb-12">
            <h2 className="text-5xl lg:text-6xl font-bold mb-4 text-gray-900 leading-tight">
              Industry-Leading{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-red-800">
                Products
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Discover our comprehensive range of cutting-edge solutions designed to meet your every
              need
            </p>
          </motion.div>

          <motion.div variants={categoryVariants} className="flex flex-wrap justify-center gap-3">
            <motion.button
              key={'all'}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 backdrop-blur-sm
                  ${
                    selectedCategory === 'all'
                      ? 'bg-gradient-to-r from-red-600 to-red-700 text-white shadow-lg shadow-red-200 border-2 border-red-600'
                      : 'bg-white/80 text-gray-700 hover:bg-white hover:text-gray-900 border-2 border-gray-200 hover:border-gray-300 shadow-sm hover:shadow-md'
                  }
                `}
              onClick={() => setSelectedCategory('all')}
            >
              All Products
            </motion.button>
            {validCategories
              .filter((category) => category && category.id && category.title)
              .map((category) => (
                <motion.button
                  key={category.id}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 backdrop-blur-sm
                  ${
                    selectedCategory === category.id
                      ? 'bg-gradient-to-r from-red-600 to-red-700 text-white shadow-lg shadow-red-200 border-2 border-red-600'
                      : 'bg-white/80 text-gray-700 hover:bg-white hover:text-gray-900 border-2 border-gray-200 hover:border-gray-300 shadow-sm hover:shadow-md'
                  }
                `}
                  onClick={() => setSelectedCategory(category.id)}
                >
                  {category.title}
                </motion.button>
              ))}
          </motion.div>
        </div>

        <motion.div
          variants={gridVariants}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
        >
          <AnimatePresence mode="wait">
            {filteredProducts
              .filter((product) => product && product.id)
              .map((product, index) => (
                <motion.div
                  layout
                  key={product.id}
                  variants={productVariants}
                  initial="hidden"
                  whileInView="visible"
                  exit="exit"
                  viewport={{
                    once: true,
                    amount: 0.3,
                    margin: '-50px',
                  }}
                  className="relative overflow-hidden rounded-2xl aspect-[3/4] group shadow-lg border border-gray-200/50 hover:shadow-2xl transition-all duration-500 bg-white backdrop-blur-sm transform hover:-translate-y-2"
                  onMouseEnter={() => setHoveredProduct(product.id)}
                  onMouseLeave={() => setHoveredProduct(null)}
                >
                  {/* Gradient overlay on hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-red-600/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 pointer-events-none"></div>

                  {/* Image Container */}
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
                    })()}/${(() => {
                      if (!product.subcategories) return 'unknown'

                      if (Array.isArray(product.subcategories)) {
                        const firstCategory = product.subcategories[0] as Subcategory
                        return firstCategory?.slug || 'unknown'
                      } else {
                        const subcategory = product.subcategories as Subcategory
                        return subcategory?.slug || 'unknown'
                      }
                    })()}/${product.slug || 'unknown'}`}
                  >
                    <div className="relative w-full h-[70%] bg-gradient-to-br from-gray-50 to-gray-100 overflow-hidden">
                      <Image
                        src={(product.heroImage as Media)?.url || '/dahua.webp'}
                        alt={product.title || 'Product'}
                        width={400}
                        height={400}
                        className="object-contain w-full h-full transform group-hover:scale-110 transition-transform duration-700 ease-out"
                        onError={(e) => {
                          const target = e.target as HTMLImageElement
                          target.src = '/dahua.webp'
                        }}
                      />
                    </div>
                  </Link>

                  {/* Content Area */}
                  <div className="relative h-[30%] p-6 flex flex-col justify-between bg-white">
                    <div>
                      <h3 className="text-base font-bold text-gray-900 mb-2 line-clamp-2 leading-tight group-hover:text-red-600 transition-colors duration-300">
                        {product.title || 'Untitled Product'}
                      </h3>
                      <p className="text-gray-600 text-sm line-clamp-2 mb-3 leading-relaxed">
                        {product.description || 'No description available'}
                      </p>
                    </div>

                    {/* Hover indicator */}
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{
                        opacity: hoveredProduct === product.id ? 1 : 0,
                        y: hoveredProduct === product.id ? 0 : 10,
                      }}
                      transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
                      className="flex items-center text-red-600 text-sm font-medium"
                    >
                      <span>View Details</span>
                      <svg
                        className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform duration-300"
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
                    </motion.div>
                  </div>
                </motion.div>
              ))}
          </AnimatePresence>
        </motion.div>

        {/* No products message */}
        {filteredProducts.length === 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center py-16"
          >
            <div className="text-gray-400 mb-4">
              <svg
                className="w-16 h-16 mx-auto"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1}
                  d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4"
                />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-700 mb-2">No Products Found</h3>
            <p className="text-gray-500">Try selecting a different category or check back later.</p>
          </motion.div>
        )}
      </div>
    </motion.section>
  )
}
