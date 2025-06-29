'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import { Category, Product } from '@/payload-types'
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

  const filteredProducts =
    selectedCategory === 'all'
      ? products
      : products.filter((product) => (product.categories as Category).id === selectedCategory)

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
            {categories.map((category) => (
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
            {filteredProducts.map((product) => (
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
                <div className="relative w-full h-[70%] bg-gray-50">
                  <Image
                    src={(product.heroImage as Media).url}
                    alt={product.title}
                    width={400}
                    height={400}
                    className="object-contain w-full h-full"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement
                      target.src = '/dahua.webp'
                    }}
                  />
                </div>

                {/* Content Area - Takes up 40% of the card */}
                <div className="relative h-[30%] p-4 flex flex-col justify-between bg-white">
                  <div>
                    <h3 className="text-sm font-bold text-gray-900 mb-2 line-clamp-2 leading-tight">
                      {product.title}
                    </h3>
                    <p className="text-gray-600 text-xs line-clamp-2 mb-3">{product.description}</p>
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
