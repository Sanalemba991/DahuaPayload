'use client'

import React, { useRef } from 'react'
import Image from 'next/image'
import { motion, useScroll, useTransform } from 'framer-motion'

export default function ImageContentSection() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  })
  
  const imageScale = useTransform(scrollYProgress, [0, 1], [1.2, 1])
  const textY = useTransform(scrollYProgress, [0, 0.5], [100, 0])
  const opacity = useTransform(scrollYProgress, [0, 0.3], [0, 1])
  
  return (
    <section ref={ref} className="py-24 bg-white dark:bg-gray-900 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div 
            style={{ scale: imageScale }}
            className="relative h-[500px] rounded-2xl overflow-hidden shadow-2xl"
          >
            <div className="absolute inset-0 bg-gradient-to-tr from-red-600/30 to-orange-500/30 mix-blend-multiply z-10"></div>
            <Image
              src="/dahua.webp"
              alt="Security Technology"
              fill
              className="object-cover"
            />
            <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-black/80 to-transparent z-10"></div>
            
            <motion.div 
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="absolute bottom-8 left-8 z-20"
            >
              <span className="px-4 py-1 bg-red-600 text-white text-sm font-medium rounded-full">Featured</span>
              <h3 className="text-2xl font-bold text-white mt-3">Advanced Technology</h3>
            </motion.div>
          </motion.div>
          
          <motion.div style={{ y: textY, opacity }}>
            <span className="text-red-600 font-semibold uppercase tracking-wider">Our Expertise</span>
            <h2 className="text-4xl md:text-5xl font-bold mt-2 mb-8">
              Experience Next-Level Security Innovation
            </h2>
            
            <div className="space-y-6">
              {[
                {
                  title: "Smart AI Detection",
                  description: "Our advanced AI algorithms provide accurate detection and reduce false alarms.",
                  icon: "🔍"
                },
                {
                  title: "4K Ultra HD Quality",
                  description: "Crystal-clear image quality ensures you never miss important details.",
                  icon: "🎥"
                },
                {
                  title: "Remote Monitoring",
                  description: "Access your security system from anywhere using our mobile app.",
                  icon: "📱"
                }
              ].map((feature, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className="flex items-start gap-4"
                >
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-red-100 dark:bg-red-900/30 flex items-center justify-center text-2xl">
                    {feature.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                    <p className="text-gray-600 dark:text-gray-300">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="mt-10 px-8 py-4 bg-gradient-to-r from-red-600 to-red-700 text-white rounded-xl shadow-lg hover:shadow-red-500/30 transition-all"
            >
              Discover Our Solutions
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
