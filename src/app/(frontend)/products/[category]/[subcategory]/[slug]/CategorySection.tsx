'use client'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { useState } from 'react'
import ProductImageSection from '@/components/ProductImageSection'
import type { Product } from '@/payload-types'

interface ProductDetailsSectionProps {
  product: Product
  selectedImage: string
}

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] },
}

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
}

// Helper function to extract text from Lexical JSON
const extractTextFromLexical = (lexicalData: any): string => {
  if (
    !lexicalData ||
    typeof lexicalData !== 'object' ||
    !lexicalData.root ||
    !lexicalData.root.children
  ) {
    return ''
  }

  let text = ''

  const processNode = (node: any) => {
    if (node.type === 'text' && node.text) {
      text += node.text + ' '
    }
    if (node.children) {
      node.children.forEach(processNode)
    }
  }

  try {
    lexicalData.root.children.forEach(processNode)
    return text.trim()
  } catch (error) {
    console.error('Error processing Lexical data:', error)
    return ''
  }
}

export default function CategorySection({ product, selectedImage }: ProductDetailsSectionProps) {
  const [activeTab, setActiveTab] = useState('specification')

  return (
    <div className="flex-grow">
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Enhanced Product Header */}
          <motion.div
            className="text-center mb-20"
            variants={staggerContainer}
            initial="initial"
            animate="animate"
          >
            <motion.div
              variants={fadeInUp}
              className="inline-block px-4 py-2 bg-gray-100 rounded-full text-sm font-medium text-gray-600 mb-6"
            >
              Security Equipment
            </motion.div>
            <motion.h1
              variants={fadeInUp}
              className="text-5xl md:text-6xl font-bold mb-6 text-gray-900 tracking-tight leading-tight"
            >
              {product.title}
            </motion.h1>
            <motion.p
              variants={fadeInUp}
              className="text-xl text-gray-600  mx-auto leading-relaxed font-light"
            >
              {product.description}
            </motion.p>
          </motion.div>

          {/* Enhanced Main Product Section */}
          <motion.div
            className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden mb-12"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 min-h-[600px]">
              {/* Enhanced Left Side - Product Images */}
              <div className="p-12 bg-gray-50/50 border-r border-gray-100 flex items-center justify-center">
                <div className="w-full max-w-md">
                  <ProductImageSection selectedImage={selectedImage} productTitle={product.title} />
                </div>
              </div>

              {/* Enhanced Right Side - Product Details */}
              <div className="p-12 flex flex-col justify-center">
                <motion.div
                  className="space-y-8"
                  variants={staggerContainer}
                  initial="initial"
                  animate="animate"
                >
                  {/* Product Title and Description */}
                  <motion.div variants={fadeInUp}>
                    <h2 className="text-3xl font-bold text-gray-900 mb-4 leading-tight">
                      {product.title}
                    </h2>
                    <p className="text-lg text-gray-600 font-light leading-relaxed">
                      {product.description}
                    </p>
                  </motion.div>

                  {/* Enhanced Key Features */}
                  <motion.div variants={fadeInUp} className="space-y-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-6">Key Features</h3>
                    <div className="space-y-4">
                      {/* Product content features */}
                      {product.content && (
                        <motion.div className="flex items-start space-x-3" variants={fadeInUp}>
                          <div className="w-1.5 h-1.5 bg-gray-500 rounded-full mt-2.5 flex-shrink-0"></div>
                          <div className="text-gray-700 text-sm leading-relaxed">
                            {typeof product.content === 'string'
                              ? product.content
                              : extractTextFromLexical(product.content)}
                          </div>
                        </motion.div>
                      )}

                      {/* Additional content features */}
                      {product.content1 && (
                        <motion.div className="flex items-start space-x-3" variants={fadeInUp}>
                          <div className="w-1.5 h-1.5 bg-gray-500 rounded-full mt-2.5 flex-shrink-0"></div>
                          <div className="text-gray-700 text-sm leading-relaxed">
                            {typeof product.content1 === 'string'
                              ? product.content1
                              : extractTextFromLexical(product.content1)}
                          </div>
                        </motion.div>
                      )}
                      {product.content2 && (
                        <motion.div className="flex items-start space-x-3" variants={fadeInUp}>
                          <div className="w-1.5 h-1.5 bg-gray-500 rounded-full mt-2.5 flex-shrink-0"></div>
                          <div className="text-gray-700 text-sm leading-relaxed">
                            {typeof product.content2 === 'string'
                              ? product.content2
                              : extractTextFromLexical(product.content2)}
                          </div>
                        </motion.div>
                      )}
                    </div>
                  </motion.div>

                  {/* Enhanced Contact Button */}
                </motion.div>
              </div>
            </div>
          </motion.div>

          {/* Enhanced Tabs Section */}
          <motion.div
            className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            {/* Enhanced Tab Headers */}
            <div className="border-b border-gray-100 bg-gray-50/30">
              <nav className="flex">
                <button
                  className={`relative py-6 px-8 font-semibold text-base transition-all duration-300 ${
                    activeTab === 'specification'
                      ? 'text-gray-900 bg-white border-b-2 border-gray-900'
                      : 'text-gray-500 hover:text-gray-700 hover:bg-gray-50'
                  }`}
                  onClick={() => setActiveTab('specification')}
                >
                  Product Specifications
                </button>
              </nav>
            </div>

            {/* Enhanced Tab Content */}
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, ease: 'easeOut' }}
            >
              {activeTab === 'specification' && (
                <div>
                  {/* Enhanced Table Header */}
                  <div className="bg-gray-50/50 px-8 py-6 border-b border-gray-100">
                    <h3 className="text-2xl font-bold text-gray-900">Technical Specifications</h3>
                    <p className="text-gray-600 mt-2">Detailed product information and features</p>
                  </div>

                  {/* Enhanced Specifications Table */}
                  <div className="divide-y divide-gray-100">
                    {/* Model */}
                    <motion.div
                      className="grid grid-cols-1 md:grid-cols-3 hover:bg-gray-50/50 transition-colors duration-200"
                      whileHover={{ x: 4 }}
                      transition={{ duration: 0.2 }}
                    >
                      <div className="px-8 py-6 bg-gray-50/30 border-r border-gray-100 md:col-span-1">
                        <span className="font-semibold text-gray-900 text-sm uppercase tracking-wide">
                          Model Number
                        </span>
                      </div>
                      <div className="col-span-2 px-8 py-6">
                        <span className="text-gray-900 font-medium text-lg">{product.title}</span>
                      </div>
                    </motion.div>

                    {/* Description */}
                    <motion.div
                      className="grid grid-cols-1 md:grid-cols-3 hover:bg-gray-50/50 transition-colors duration-200"
                      whileHover={{ x: 4 }}
                      transition={{ duration: 0.2 }}
                    >
                      <div className="px-8 py-6 bg-gray-50/30 border-r border-gray-100">
                        <span className="font-semibold text-gray-900 text-sm uppercase tracking-wide">
                          Description
                        </span>
                      </div>
                      <div className="col-span-2 px-8 py-6">
                        <span className="text-gray-700 leading-relaxed">{product.description}</span>
                      </div>
                    </motion.div>

                    {/* Category */}
                    <motion.div
                      className="grid grid-cols-1 md:grid-cols-3 hover:bg-gray-50/50 transition-colors duration-200"
                      whileHover={{ x: 4 }}
                      transition={{ duration: 0.2 }}
                    >
                      <div className="px-8 py-6 bg-gray-50/30 border-r border-gray-100">
                        <span className="font-semibold text-gray-900 text-sm uppercase tracking-wide">
                          Product Category
                        </span>
                      </div>
                      <div className="col-span-2 px-8 py-6">
                        <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-gray-100 text-gray-800">
                          Security Equipment
                        </span>
                      </div>
                    </motion.div>
                  </div>
                </div>
              )}
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
