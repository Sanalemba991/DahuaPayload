'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'

const categories = ['All', 'Cameras', 'Recorders', 'Access Control', 'Smart Home']

const products = [
  {
    id: 1,
    name: 'IPC-HDW2449T-S-PRO',
    category: 'Cameras',
    image: '/images/dahua1.png',
    description: '4MP WizColor Fixed-focal Eyeball WizSense Network Camera',
  },
  {
    id: 2,
    name: ' DH-SD3E405DB-GNY-A-PV1 4M',
    category: 'Cameras',
    image: '/images/dahua2.png',
    description: '4MP PTZ WizSense camera with 5x zoom and smart deterrence.',
  },
  {
    id: 3,
    name: 'DHI-NVR1108HS-S3/H',
    category: 'Recorders',
    image: '/images/dahua3.png',
    description: 'P2P remote surveillance, video play on mobile device.',
  },
  {
    id: 4,
    name: 'HFW2849T-AS-IL 8MP',
    category: 'Smart Home',
    image: '/images/dahua4.png',
    description: '8-MP 1/2.7" CMOS image sensor, low luminance, and high definition image.',
  },
  {
    id: 5,
    name: '3MP 4G Dome Camera',
    category: 'Cameras',
    image: '/images/dahua5.png',
    description: '3MP 4G Dome Camera with remote monitoring and mobile connectivity.',
  },
  {
    id: 6,
    name: 'ASA3213GL-MW',
    category: 'Access Control',
    image: '/images/dahua6.png',
    description: ' Face verification accuracy 99.5%; face comparison speed 0.3 s per person.',
  },
  {
    id: 7,
    name: 'DHI-ITSE0400-TA-G02',
    category: 'Recorders',
    image: '/images/dahua7.png',
    description: 'Supports 4-ch and 8-ch video access, combining 4 images into 1 composite image.',
  },
  {
    id: 8,
    name: 'DH-IPC-HDW2449T-S-IL',
    category: 'Smart Home',
    image: '/images/dahua8.png',
    description: 'Dahua 4MP Samart Dual Light Dome Network CCTV Camera DH-IPC-HDW2449T-S-IL',
  },
]

export default function ProductGrid() {
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [hoveredProduct, setHoveredProduct] = useState<number | null>(null)

  const filteredProducts =
    selectedCategory === 'All'
      ? products
      : products.filter((product) => product.category === selectedCategory)

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="flex flex-col items-center mb-12">
          <h2 className="text-4xl font-bold mb-8 text-center text-gray-900">
            Industry-Leading <span className="text-red-600">Products</span>
          </h2>

          <div className="flex flex-wrap justify-center gap-2">
            {categories.map((category) => (
              <button
                key={category}
                className={`px-4 py-2 rounded-full text-sm transition-all
                  ${
                    selectedCategory === category
                      ? 'bg-red-600 text-white shadow-lg'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200 hover:text-gray-900 border border-gray-300'
                  }
                `}
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          <AnimatePresence mode="sync">
            {filteredProducts.map((product) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.5 }}
                className="relative overflow-hidden rounded-lg aspect-[3/4] group shadow-md border border-gray-200 hover:shadow-lg transition-shadow bg-white"
                onMouseEnter={() => setHoveredProduct(product.id)}
                onMouseLeave={() => setHoveredProduct(null)}
              >
                {/* Image Container - Takes up 70% of the card */}
                <div className="relative h-3/5 w-full bg-gray-50">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                    className="transition-transform duration-700 group-hover:scale-105 p-2"
                    style={{
                      objectFit: 'contain', // Shows full image
                      objectPosition: 'center',
                    }}
                    onError={(e) => {
                      const target = e.target as HTMLImageElement
                      target.src = '/dahua.webp'
                    }}
                  />
                </div>

                {/* Content Area - Takes up 40% of the card */}
                <div className="relative h-2/5 p-4 flex flex-col justify-between bg-white">
                  <div>
                    <h3 className="text-sm font-bold text-gray-900 mb-2 line-clamp-2 leading-tight">
                      {product.name}
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
