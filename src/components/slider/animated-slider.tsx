'use client'

import * as React from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { useEffect, useState } from 'react'
import { Homepage } from '@/payload-types'

export default function AnimatedHeroSlider({ homepage }: { homepage: Homepage }) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlaying] = useState(true)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  
  // Handle mouse movement for parallax effect
  const handleMouseMove = (e: React.MouseEvent) => {
    const { clientX, clientY } = e
    const x = (clientX / window.innerWidth - 0.5) * 2
    const y = (clientY / window.innerHeight - 0.5) * 2
    setMousePosition({ x, y })
  }

  const slides = (homepage?.sliderImage || []).map((slide) => ({
    image: {
      url: typeof slide.image === 'object' && slide.image && 'url' in slide.image 
        ? (slide.image.url || null) 
        : null,
    },
    link: (slide as { link?: string })?.link || '',
    id: slide.id || null,
  }))

  useEffect(() => {
    if (slides.length === 0) return
    
    const timer = setInterval(() => {
      if (isAutoPlaying) {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length)
      }
    }, 5000)

    return () => clearInterval(timer)
  }, [isAutoPlaying, slides.length])

  if (slides.length === 0) {
    return <section className="relative w-full h-full overflow-hidden"></section>
  }

  return (
    <section 
      className="relative w-full h-full overflow-hidden bg-gradient-to-b from-black/20 to-black/80"
      onMouseMove={handleMouseMove}
    >
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-gray-900 to-black opacity-70"></div>
      
      <AnimatePresence initial={false}>
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="absolute inset-0"
        >
          {slides[currentIndex]?.image?.url && (
            <div className="relative h-full w-full">
              <motion.div
                style={{
                  x: mousePosition.x * -20,
                  y: mousePosition.y * -20,
                }}
                className="absolute inset-0 h-[110%] w-[110%] left-[-5%] top-[-5%]"
              >
                <Image
                  src={slides[currentIndex].image.url || '/dahua.webp'}
                  alt={`slide${slides[currentIndex]?.id || ''}`}
                  fill
                  className="object-cover"
                  priority
                />
              </motion.div>
            </div>
          )}
          
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
          
          <div className="absolute inset-0 flex flex-col items-center justify-center text-white z-10">
            <motion.div
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ 
                duration: 0.8, 
                delay: 0.2,
                ease: [0.25, 1, 0.5, 1]
              }}
              className="text-center max-w-4xl mx-auto px-4"
            >
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 tracking-tighter">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300">
                  {slides[currentIndex]?.id || 'Dahua Vision Technology'}
                </span>
              </h1>
              
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: "150px" }}
                transition={{ duration: 1, delay: 0.5 }}
                className="h-1 bg-gradient-to-r from-red-500 to-orange-500 mx-auto mb-8"
              />
              
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                className="text-xl md:text-2xl max-w-2xl mx-auto text-gray-200"
              >
                {slides[currentIndex]?.link || 'Advanced security solutions for every need'}
              </motion.p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1.2 }}
              className="mt-10"
            >
              <button className="px-8 py-3 bg-gradient-to-r from-red-500 to-red-700 rounded-full text-white text-lg font-medium 
                transition-all hover:shadow-lg hover:shadow-red-500/30 hover:-translate-y-1">
                Explore Solutions
              </button>
            </motion.div>
          </div>
        </motion.div>
      </AnimatePresence>
      
      {/* Slide indicators */}
      <div className="absolute bottom-8 left-0 right-0 flex justify-center gap-3 z-20">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full transition-all ${
              currentIndex === index 
                ? "w-10 bg-red-500" 
                : "bg-gray-400/50 hover:bg-gray-300"
            }`}
          />
        ))}
      </div>
    </section>
  )
}
