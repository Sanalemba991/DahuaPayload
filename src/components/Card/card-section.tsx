'use client'

import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../Cardsection/card'
import { Database, ThumbsUp, User, Microscope, type LucideProps } from 'lucide-react'
import type { ForwardRefExoticComponent, RefAttributes } from 'react'
import Image from 'next/image'
// Products data - replace with your actual data
const products = [
  {
    id: 1,
    title: 'Security Cameras',
    image: '/dahua.webp',
    description: 'Advanced surveillance solutions for comprehensive security.',
  },
  {
    id: 2,
    title: 'Video Management',
    image: '/dahua.webp',
    description: 'Integrated software for seamless control and monitoring.',
  },
  {
    id: 3,
    title: 'Access Control',
    image: '/dahua.webp',
    description: 'Secure entry systems with advanced authentication.',
  },
  {
    id: 4,
    title: 'Smart Home Systems',
    image: '/dahua.webp',
    description: 'Connected solutions for modern living spaces.',
  },
]

const specs = [
  {
    title: 'Quality',
    description:
      'We prioritize precision and quality in every project, ensuring that our products meet the highest standards',
    icon: ThumbsUp,
  },
  {
    title: 'Integrity',
    description:
      'We conduct our business with honesty and transparency, building trust with our clients and partners',
    icon: Database,
  },
  {
    title: 'Innovation',
    description:
      'We embrace new technologies and processes to enhance our services and deliver cutting-edge solutions.',
    icon: Microscope,
  },
  {
    title: 'Customer Focus',
    description:
      ' we specialize in custom steel fabrication tailored to bring your architectural vision to life.',
    icon: User,
  },
]

const SpecCard = ({
  title,
  description,
  icon: Icon,
  index,
}: {
  title: string
  description: string
  icon: ForwardRefExoticComponent<Omit<LucideProps, 'ref'> & RefAttributes<SVGSVGElement>>
  index: number
}) => (
  <motion.div
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    whileHover={{ scale: 1.1, transition: { duration: 0.1, ease: 'easeIn' } }}
    transition={{ duration: 0.3, delay: index * 0.15 }}
  >
    <Card className="h-full cursor-pointer pb-16 transition-all duration-300 hover:shadow-lg">
      <CardHeader>
        <Icon className="mb-2 h-16 w-16 text-primary" />
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <CardDescription>{description}</CardDescription>
      </CardContent>
    </Card>
  </motion.div>
)

export default function CardSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.1 })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.8, ease: [0.23, 1, 0.32, 1] } },
  }

  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-100 dark:from-gray-900 dark:to-black">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-red-600 to-orange-600">
            Our Featured Solutions
          </h2>
          <div className="h-1 w-24 bg-gradient-to-r from-red-500 to-orange-500 mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Discover our cutting-edge security technology designed to protect what matters most.
          </p>
        </motion.div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {products.map((product) => (
            <motion.div
              key={product.id}
              variants={itemVariants}
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
              className="bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all group"
            >
              <div className="relative h-64 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent z-10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <Image
                  src={product.image}
                  alt={product.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <motion.div
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  className="absolute inset-0 flex items-center justify-center z-20"
                >
                  <button className="px-6 py-2 bg-red-600 text-white rounded-full transform transition-transform opacity-0 group-hover:opacity-100 hover:scale-105">
                    View Details
                  </button>
                </motion.div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{product.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">{product.description}</p>
                <div className="flex justify-between items-center">
                  <div className="text-red-600 font-medium">Learn more</div>
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M4.16667 10H15.8333"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M10.8333 5L15.8333 10L10.8333 15"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.h2
          className="mb-12 text-center text-3xl font-bold text-primary sm:text-4xl"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Our Values and Goals
        </motion.h2>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {specs.map((spec, index) => (
            <SpecCard key={spec.title} {...spec} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
