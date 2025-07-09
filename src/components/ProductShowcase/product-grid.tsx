'use client'

import { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence, useInView } from 'framer-motion'
import Image from 'next/image'
import { Category, Product, Subcategory } from '@/payload-types'
import Link from 'next/link'

type Media = {
  url: string
}

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.9 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: [0.16, 1, 0.3, 1],
    },
  },
  exit: {
    opacity: 0,
    y: 10,
    scale: 0.95,
    transition: {
      duration: 0.3,
      ease: 'easeIn',
    },
  },
}

const hoverVariants = {
  hover: {
    y: -8,
    scale: 1.03,
    boxShadow: '0 15px 30px rgba(0, 0, 0, 0.12)',
    transition: {
      duration: 0.3,
      ease: 'easeOut',
    },
  },
}

// Animation variants for section elements
const sectionVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  },
}

const titleVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.9,
      ease: [0.23, 1, 0.32, 1],
      delay: 0.1,
    },
  },
}

const lineVariants = {
  hidden: { width: 0 },
  visible: {
    width: '6rem',
    transition: {
      duration: 0.7,
      ease: [0.25, 0.46, 0.45, 0.94],
      delay: 0.3,
    },
  },
}

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 60,
    rotateX: 15,
    scale: 0.9,
  },
  visible: {
    opacity: 1,
    y: 0,
    rotateX: 0,
    scale: 1,
    transition: {
      duration: 1,
      ease: [0.175, 0.885, 0.32, 1.275],
      delay: 0.5,
    },
  },
  hover: {
    y: -8,
    scale: 1.03,
    boxShadow: '0 15px 30px rgba(0, 0, 0, 0.12)',
    transition: {
      duration: 0.3,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  },
}

const floatingAnimation = {
  y: [0, -3, 0],
  transition: {
    duration: 3,
    ease: 'easeInOut',
    repeat: Infinity,
  },
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
  const sectionRef = useRef(null)
  const gridRef = useRef(null)

  // Trigger animation when section comes into view
  const isInView = useInView(sectionRef, {
    once: true,
    amount: 0.3,
    margin: '0px 0px -100px 0px',
  })

  // Debug logging
  if (process.env.NODE_ENV === 'development') {
    console.log('ProductGrid - Products:', products)
    console.log('ProductGrid - Categories:', categories)
    console.log('ProductGrid - isInView:', isInView)
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
    <motion.section
      ref={sectionRef}
      variants={sectionVariants}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      className="py-16 bg-white relative"
    >
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="flex flex-col items-center mb-12">
          <motion.h2
            variants={titleVariants}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            className="text-4xl md:text-5xl font-bold mb-8 text-center text-gray-900"
          >
            Industry-Leading <span className="text-red-600">Products</span>
          </motion.h2>

          <motion.div
            variants={lineVariants}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            className="h-1 bg-red-600 mx-auto"
          />

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 20 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-wrap justify-center gap-2 mt-8"
          >
            <motion.button
              key={'all'}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-4 py-2 rounded-full text-sm transition-all duration-300 ${
                selectedCategory === 'all'
                  ? 'bg-red-600 text-white shadow-lg'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200 hover:text-gray-900 border border-gray-300'
              }`}
              onClick={() => setSelectedCategory('all')}
            >
              All
            </motion.button>
            {validCategories
              .filter((category) => category && category.id && category.title)
              .map((category) => (
                <motion.button
                  key={category.id}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`px-4 py-2 rounded-full text-sm transition-all duration-300 ${
                    selectedCategory === category.id
                      ? 'bg-red-600 text-white shadow-lg'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200 hover:text-gray-900 border border-gray-300'
                  }`}
                  onClick={() => setSelectedCategory(category.id)}
                >
                  {category.title}
                </motion.button>
              ))}
          </motion.div>
        </div>

        <motion.div
          ref={gridRef}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'show' : 'hidden'}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredProducts
              .filter((product) => product && product.id)
              .map((product, index) => (
                <motion.div
                  layout
                  key={product.id}
                  variants={{
                    ...itemVariants,
                    show: {
                      ...itemVariants.show,
                      transition: {
                        ...itemVariants.show.transition,
                        delay: index * 0.1,
                      },
                    },
                  }}
                  whileHover={{
                    y: -8,
                    scale: 1.03,
                    boxShadow: '0 15px 30px rgba(0, 0, 0, 0.12)',
                    transition: {
                      duration: 0.3,
                      ease: 'easeOut',
                    },
                  }}
                  animate={isInView ? 'show' : 'hidden'}
                  exit="exit"
                  className="relative overflow-hidden rounded-lg aspect-[3/4] group shadow-md border border-gray-200 bg-white"
                  onMouseEnter={() => setHoveredProduct(product.id)}
                  onMouseLeave={() => setHoveredProduct(null)}
                  custom={index}
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
                    <motion.div
                      className="relative w-full h-[70%] bg-gray-50"
                      whileHover={{ scale: 1.02 }}
                      transition={{ duration: 0.3 }}
                    >
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
                    </motion.div>
                  </Link>
                  {/* Content Area - Takes up 30% of the card */}
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
        </motion.div>
      </div>
    </motion.section>
  )
}
