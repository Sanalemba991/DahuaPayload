'use client'

import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { Target, Zap, Bot, Shield, Settings, Eye } from 'lucide-react'

function FeatureCard({
  icon: Icon,
  iconBg,
  iconColor,
  title,
  description,
}: {
  icon: React.ElementType
  iconBg: string
  iconColor: string
  title: string
  description: string
}) {
  return (
    <motion.div
      whileHover={{ y: -10, scale: 1.05 }}
      className="bg-white rounded-xl p-8 flex flex-col items-center text-center hover:shadow-xl transition-all duration-300"
    >
      <div className={`${iconBg} w-16 h-16 rounded-full flex items-center justify-center mb-6`}>
        <Icon size={32} className={iconColor} />
      </div>
      <h3 className="text-xl font-bold text-gray-900 mb-4">{title}</h3>
      <p className="text-gray-600 leading-relaxed">{description}</p>
    </motion.div>
  )
}

export default function AutoTrackingPage() {
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <motion.section
        className="relative w-full h-screen flex items-center justify-start"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <motion.div
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5, ease: 'easeOut' }}
          className="w-full h-full"
        >
          <img
            src="/images/autotrack.webp"
            alt="Auto Tracking 3.0"
            className="object-cover w-full h-full absolute inset-0"
            style={{ zIndex: 0 }}
          />
        </motion.div>
        <div className="absolute inset-0  bg-opacity-30"></div>
        <div className="absolute inset-0 flex items-center">
          <div className="max-w-4xl px-10 space-y-6">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-3xl md:text-5xl font-bold text-white leading-tight"
            >
              <span className="block">Auto Tracking</span>
              <span className="block text-red-500">3.0</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="text-base md:text-lg text-gray-100 max-w-3xl leading-snug"
            >
              Intelligent automated tracking system that seamlessly follows moving targets with
              precision and reliability, powered by advanced AI algorithms.
            </motion.p>
          </div>
        </div>
      </motion.section>

      {/* Video Section */}
      <motion.section
        className="mt-16 bg-white  p-8 shadow-lg"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            {/* Header */}
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Auto Tracking <span className="text-red-500">3.0 Demo</span>
              </h2>
              <p className="text-xl text-gray-600 mx-auto mb-12">
                See intelligent tracking in action with precision target following
              </p>

              {/* Video Container */}
              <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
                <iframe
                  className="absolute inset-0 w-full h-full rounded-2xl"
                  src="https://www.youtube.com/embed/AVIXb5OYskY?rel=0&modestbranding=1"
                  title="Auto Tracking 3.0 Demo"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            </motion.div>

            {/* Video Description */}
            <div className="mt-12 text-center">
              <motion.div
                className="grid md:grid-cols-3 gap-8 text-gray-900"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                {[
                  {
                    title: 'Intelligent Target Tracking',
                    description:
                      'Advanced AI algorithms automatically detect and follow moving targets with exceptional precision',
                  },
                  {
                    title: 'Seamless Movement',
                    description:
                      'Smooth pan-tilt-zoom operations ensure continuous monitoring without manual intervention',
                  },
                  {
                    title: 'Predictive Analytics',
                    description:
                      'Smart prediction algorithms anticipate target movement for enhanced tracking performance',
                  },
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.7 + index * 0.1 }}
                  >
                    <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                    <p className="text-gray-600 text-sm">{item.description}</p>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Key Features Section */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="py-24 bg-gradient-to-b from-white to-gray-50"
      >
        <div className="max-w-6xl mx-auto px-4">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Key <span className="text-red-500">Features</span>
            </h2>
            <p className="text-xl text-gray-600 mb-4">
              Advanced capabilities that deliver precision tracking and intelligent automation
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            <FeatureCard
              icon={Target}
              iconBg="bg-emerald-50"
              iconColor="text-emerald-600"
              title="Precision Tracking"
              description="Advanced AI algorithms ensure accurate target detection and smooth tracking with minimal lag and maximum precision."
            />
            <FeatureCard
              icon={Bot}
              iconBg="bg-blue-50"
              iconColor="text-blue-600"
              title="AI-Powered Intelligence"
              description="Deep learning technology enables intelligent target classification and predictive movement analysis for enhanced tracking performance."
            />
            <FeatureCard
              icon={Zap}
              iconBg="bg-amber-50"
              iconColor="text-amber-600"
              title="Real-time Response"
              description="Ultra-fast processing enables immediate response to target movements with smooth pan-tilt-zoom operations and minimal delay."
            />
          </div>
        </div>
      </motion.div>

      {/* Tracking Modes */}
      <motion.section
        className="py-20 bg-white"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Tracking{' '}
                <span
                  className="text-red
                -500"
                >
                  Modes
                </span>
              </h2>
              <p className="text-xl text-gray-600 mx-auto">
                Flexible tracking options for different operational requirements
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-12 items-center">
              {/* Auto Mode */}
              <motion.div
                className="text-center"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.3 }}
              >
                <div className="rounded-xl overflow-hidden mb-6">
                  <Image
                    src="/images/tracka.png"
                    alt="Auto Tracking Mode"
                    width={500}
                    height={300}
                    className="w-full h-64 object-cover"
                  />
                </div>
                <div className="flex items-center justify-center mb-4">
                  <div className="bg-emerald-50 p-3 rounded-full mr-4">
                    <Settings className="text-red-600" size={24} />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">Automatic Mode</h3>
                </div>
                <p className="text-gray-600 leading-relaxed">
                  Fully automated tracking that detects and follows targets without manual
                  intervention using intelligent algorithms and machine learning.
                </p>
              </motion.div>

              {/* Manual Mode */}
              <motion.div
                className="text-center"
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.5 }}
              >
                <div className="rounded-xl overflow-hidden mb-6">
                  <Image
                    src="/images/autotrack.webp"
                    alt="Manual Tracking Mode"
                    width={500}
                    height={300}
                    className="w-full h-64 object-cover"
                  />
                </div>
                <div className="flex items-center justify-center mb-4">
                  <div className="bg-blue-50 p-3 rounded-full mr-4">
                    <Eye className="text-blue-600" size={24} />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">Manual Selection</h3>
                </div>
                <p className="text-gray-600 leading-relaxed">
                  Operator-initiated tracking allows manual target selection with automated
                  following once the target is identified and locked.
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Advanced Capabilities */}
      <motion.section
        className="py-20  text-black"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            {/* Section Header - Changed to grey */}
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl font-bold mb-4 text-gray-900">
                Advanced <span className="text-gray-700">Capabilities</span>
              </h2>
              <p className="text-xl text-gray-600">
                Cutting-edge features for professional surveillance applications
              </p>
            </motion.div>

            {/* Capabilities Grid - Changed to black/grey */}
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: 'Behavior Analysis',
                  description:
                    'Advanced AI detects unusual patterns and behaviors with 99.5% accuracy using deep learning algorithms.',
                  icon: (
                    <svg
                      className="w-10 h-10 mx-auto mb-4 text-red-500"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="1.5"
                        d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"
                      />
                    </svg>
                  ),
                },
                {
                  title: 'Real-time Alerts',
                  description:
                    'Instant notifications for security events with smart filtering to reduce false alarms by up to 95%.',
                  icon: (
                    <svg
                      className="w-10 h-10 mx-auto mb-4 text-red-500"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="1.5"
                        d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                      />
                    </svg>
                  ),
                },
                {
                  title: 'Smart Insights',
                  description:
                    'Comprehensive analytics dashboard with heat maps, trend analysis, and behavioral pattern recognition.',
                  icon: (
                    <svg
                      className="w-10 h-10 mx-auto mb-4 text-red-500"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="1.5"
                        d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                      />
                    </svg>
                  ),
                },
              ].map((capability, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white  p-8 text-center shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200"
                >
                  {capability.icon}
                  <h3 className="text-2xl font-bold mb-4 text-gray-900">{capability.title}</h3>
                  <p className="text-gray-700 leading-relaxed">{capability.description}</p>
                </motion.div>
              ))}
            </div>

            {/* Technical Specifications - Changed to black/grey */}
            <motion.div
              className="mt-16 bg-white p-8 shadow-lg"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <h3 className="text-2xl font-bold text-center text-gray-900 mb-8">
                Technical Specifications
              </h3>
              <motion.div
                className="grid md:grid-cols-4 gap-8 text-gray-900"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                {[
                  { value: '360°', label: 'Pan Range' },
                  { value: '120°/s', label: 'Max Speed' },
                  { value: '32X', label: 'Optical Zoom' },
                  { value: '50ms', label: 'Response Time' },
                ].map((spec, index) => (
                  <div className="text-center" key={index}>
                    <div className="text-3xl font-bold text-gray-900 mb-2">{spec.value}</div>
                    <p className="text-gray-700">{spec.label}</p>
                  </div>
                ))}
              </motion.div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Consultation Section */}
    </div>
  )
}
