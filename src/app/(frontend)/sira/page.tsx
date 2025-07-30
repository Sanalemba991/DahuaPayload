'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import {
  Shield,
  Monitor,
  Zap,
  Search,
  Users,
  Cloud,
  Wrench,
  ArrowUp,
  FileCheck,
} from 'lucide-react'
import React from 'react'

const benefits = [
  {
    icon: Shield,
    iconBg: 'bg-blue-50',
    iconColor: 'text-blue-600',
    title: 'Enhanced Security',
    description:
      'Certified companies ensure flawless safety systems, providing comprehensive protection against unauthorized access and intrusion.',
  },
  {
    icon: Wrench,
    iconBg: 'bg-green-50',
    iconColor: 'text-green-600',
    title: 'Regular Maintenance',
    description:
      'With a SIRA-approved provider, prioritizing regular maintenance throughout the year ensures the uninterrupted functionality of your CCTV system.',
  },
  {
    icon: ArrowUp,
    iconBg: 'bg-yellow-50',
    iconColor: 'text-yellow-500',
    title: 'Up-to-Date Solutions',
    description:
      'SIRA-approved services keep your security system current. Utilizing the latest models and equipment, they deliver an efficient surveillance solution for your premises.',
  },
  {
    icon: FileCheck,
    iconBg: 'bg-purple-50',
    iconColor: 'text-purple-500',
    title: 'Compliance Assurance',
    description:
      'Choosing a SIRA-certified distributor guarantees that your security systems comply with all local regulations and standards, reducing legal and financial risks.',
  },
]

// Reusable FeatureCard component
function FeatureCard({
  icon: Icon,
  iconBg,
  iconColor,
  title,
  description,
  xDisable = false,
}: {
  icon: React.ElementType
  iconBg: string
  iconColor: string
  title: string
  description: string
  xDisable?: boolean
}) {
  return (
    <motion.div
      whileHover={xDisable ? {} : { y: -10, scale: 1.05 }}
      className="bg-white rounded-lg p-6 flex flex-col items-center text-center hover:shadow-lg transition-all duration-300"
    >
      <div className={`${iconBg} w-16 h-16 rounded-xl flex items-center justify-center mb-4`}>
        <Icon size={32} className={iconColor} />
      </div>
      <h3 className="text-xl font-bold text-gray-900 mb-3">{title}</h3>
      <p className="text-sm text-gray-600">{description}</p>
    </motion.div>
  )
}

export default function SiraPage() {
  return (
    <main className="bg-gray-50 min-h-screen overflow-x-hidden">
      {/* Hero Section - Full Viewport Height */}
      <section className="relative w-full h-screen flex items-center justify-start overflow-hidden">
        <Image
          src="/images/red.jpg"
          alt="SIRA Hero"
          fill
          className="object-cover w-full h-full"
          priority
          quality={100}
        />
        <div className="absolute inset-0 bg-opacity-40 flex items-center px-4 sm:px-6 lg:px-10">
          <div className="max-w-4xl space-y-4 sm:space-y-6">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold"
            >
              <span className="block text-white">SIRA Certified</span>
              <span className="block text-red-500">Security Solutions</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="text-lg sm:text-xl md:text-2xl text-gray-100 max-w-3xl leading-relaxed"
            >
              Dubai trusted standard for professional security systems installation and maintenance.
              Ensure compliance and maximum protection with SIRA-approved solutions.
            </motion.p>
            <motion.div
              className="flex flex-wrap gap-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <Link
                href="/contact"
                className="group inline-flex items-center text-white text-base sm:text-lg font-medium transition-all duration-300 hover:text-red-600"
              >
                <span className="hover:text-red-600">Contact Us</span>
                <motion.span
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 10 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  className="transition-colors duration-300 group-hover:text-red-600"
                ></motion.span>
                <motion.span className="ml-3 text-xl transition-all duration-300 group-hover:translate-x-1 group-hover:text-red-600">
                  →
                </motion.span>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* SIRA Certification Section with Scroll Animation */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 py-16 sm:py-20 overflow-hidden">
        <div className="flex flex-col lg:flex-row gap-8 sm:gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, margin: '-100px' }}
            className="lg:w-1/2 w-full"
          >
            <div className="relative h-80 sm:h-96 w-full rounded-xl overflow-hidden shadow-2xl">
              <Image
                src="/images/sira-certificate.jpg"
                alt="SIRA Certification"
                fill
                className="object-cover"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, margin: '-100px' }}
            className="lg:w-1/2 space-y-4 sm:space-y-6 mt-8 lg:mt-0"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
              <span className="text-red-600">SIRA</span> Certification
            </h2>
            <div className="space-y-3 sm:space-y-4 text-gray-700">
              <p className="text-base sm:text-lg leading-relaxed">
                The Security Industry Regulatory Agency (SIRA) is Dubai premier security authority,
                established in 2016 by decree of HH Sheikh Mohammed Bin Rashid Al Maktoum.
              </p>
              <p className="text-base sm:text-lg leading-relaxed">
                SIRA regulates all security-related activities including guarding services, security
                system sales, installation, and consulting. Only SIRA-approved companies are
                authorized to operate in these sectors.
              </p>
              <p className="text-base sm:text-lg leading-relaxed">
                With approximately 400 certified CCTV providers and fewer than 2,000 total certified
                security providers in Dubai, SIRA maintains stringent standards to ensure the
                highest levels of safety and security.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Compliance Standards Section */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="bg-gray-100 py-16 sm:py-20 overflow-hidden"
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, margin: '-50px' }}
            className="text-center mb-12 sm:mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">
              SIRA <span className="text-red-600">Compliance</span> Standards
            </h2>
            <p className="text-lg sm:text-xl text-gray-600">
              SIRA sets comprehensive guidelines for security best practices across all types of
              installations.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {benefits.map((benefit, idx) => (
              <motion.div
                key={benefit.title}
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{
                  duration: 0.6,
                  delay: idx * 0.1,
                }}
                viewport={{ once: true, margin: '-50px' }}
              >
                <FeatureCard
                  icon={benefit.icon}
                  iconBg={benefit.iconBg}
                  iconColor={benefit.iconColor}
                  title={benefit.title}
                  description={benefit.description}
                  xDisable={true}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>
    </main>
  )
}
