'use client'

import React from 'react' // removed useState
import Image from 'next/image'
import { motion } from 'framer-motion'
import { Brain, AlertTriangle, BarChart3, Users, Car } from 'lucide-react'

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

export default function SmartAnalyticsPage() {
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
            src="/images/dahuacolor.webp"
            alt="Smart Analytics"
            className="object-cover w-full h-full absolute inset-0"
            style={{ zIndex: 0 }}
          />
        </motion.div>
        <div className="absolute inset-0 flex items-center">
          <div className="max-w-4xl px-10 space-y-6">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-3xl md:text-5xl font-bold text-white leading-tight"
            >
              <span className="block">AI-Powered</span>
              <span className="block text-red-500">Smart Analytics</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="text-base md:text-lg text-gray-100 max-w-3xl leading-snug"
            >
              Intelligent Video Analysis & Insights that transform ordinary surveillance into
              intelligent monitoring systems with advanced detection capabilities.
            </motion.p>
          </div>
        </div>
      </motion.section>

      {/* Video Section */}
      <motion.section
        className="py-20 bg-white bg-opacity-95"
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
                WizColor <span className="text-red-500">Technology</span>
              </h2>
              <p className="text-xl text-gray-600 mx-auto">
                Experience how WizColor Technology revolutionizes intelligent video surveillance
              </p>

              {/* Video Wrapper */}
              <div className="relative" style={{ paddingBottom: '56.25%' }}>
                <iframe
                  className="absolute inset-0 w-full h-full"
                  src="https://www.youtube.com/embed/kMTVBhFPxVs?autoplay=1&rel=0&modestbranding=1"
                  title="WizColor Technology Demo"
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
                    title: 'AI-Powered Analytics',
                    description:
                      'Advanced deep learning algorithms for intelligent video analysis and monitoring',
                  },
                  {
                    title: 'Neural Networks',
                    description:
                      'Sophisticated neural networks that continuously learn and adapt to scenarios',
                  },
                  {
                    title: 'Enterprise Solutions',
                    description:
                      'Scalable AI technology for smart cities, retail, and industrial applications',
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
              Key <span className="text-red-600">Features</span>
            </h2>
            <p className="text-xl text-gray-600 mb-4">
              Advanced AI capabilities that revolutionize video surveillance
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            <FeatureCard
              icon={Brain}
              iconBg="bg-purple-50"
              iconColor="text-purple-600"
              title="Behavior Analysis"
              description="Advanced AI detects unusual patterns and behaviors with 99.5% accuracy using deep learning algorithms."
            />
            <FeatureCard
              icon={AlertTriangle}
              iconBg="bg-red-50"
              iconColor="text-red-600"
              title="Real-time Alerts"
              description="Instant notifications for security events with smart filtering to reduce false alarms by up to 95%."
            />
            <FeatureCard
              icon={BarChart3}
              iconBg="bg-cyan-50"
              iconColor="text-cyan-600"
              title="Smart Insights"
              description="Comprehensive analytics dashboard with heat maps, trend analysis, and behavioral pattern recognition."
            />
          </div>
        </div>
      </motion.div>

      {/* Analytics Capabilities */}
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
                Analytics <span className="text-red-500">Capabilities</span>
              </h2>
              <p className="text-xl text-gray-600 mx-auto">
                Comprehensive analysis for people and vehicles with precision tracking
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-12 items-center">
              {/* People Analytics */}
              <motion.div
                className="text-center"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.3 }}
              >
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="bg-white rounded-xl overflow-hidden shadow-lg mb-6"
                >
                  <Image
                    src="https://images.unsplash.com/photo-1557804506-669a67965ba0?w=500&h=300&fit=crop"
                    alt="People Analytics"
                    width={500}
                    height={300}
                    className="w-full h-64 object-cover"
                    unoptimized={true}
                    loader={({ src }) => src}
                  />
                </motion.div>
                <div className="flex items-center justify-center mb-4">
                  <div className="bg-blue-50 p-3 rounded-full mr-4">
                    <Users className="text-blue-600" size={24} />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">People Analytics</h3>
                </div>
                <p className="text-gray-600 leading-relaxed">
                  Track movement patterns, count visitors, analyze crowd behavior, and detect
                  loitering with advanced human recognition algorithms.
                </p>
              </motion.div>

              {/* Vehicle Analytics */}
              <motion.div
                className="text-center"
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.5 }}
              >
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="bg-white rounded-xl overflow-hidden shadow-lg mb-6"
                >
                  <Image
                    src="https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=500&h=300&fit=crop"
                    alt="Vehicle Analytics"
                    width={500}
                    height={300}
                    className="w-full h-64 object-cover"
                    unoptimized={true}
                    loader={({ src }) => src}
                  />
                </motion.div>
                <div className="flex items-center justify-center mb-4">
                  <div className="bg-green-50 p-3 rounded-full mr-4">
                    <Car className="text-green-600" size={24} />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">Vehicle Analytics</h3>
                </div>
                <p className="text-gray-600 leading-relaxed">
                  License plate recognition, traffic flow analysis, parking management, and vehicle
                  classification with intelligent tracking capabilities.
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Performance Metrics */}
      <motion.section
        className="py-20"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl font-bold text-gray-800 mb-4">
                Performance <span className="text-gray-600">Metrics</span>
              </h2>
              <p className="text-xl text-gray-600 mb-16">
                Industry-leading performance benchmarks that set new standards
              </p>
            </motion.div>

            <div className="grid md:grid-cols-4 gap-8">
              {[
                { value: '99.5%', label: 'Accuracy Rate', color: 'text-gray-800' },
                { value: '<100ms', label: 'Response Time', color: 'text-gray-800' },
                { value: '50+', label: 'AI Algorithms', color: 'text-gray-800' },
                { value: '1000+', label: 'Cameras Support', color: 'text-gray-800' },
              ].map((metric, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className={`text-4xl font-bold ${metric.color} mb-2`}>{metric.value}</div>
                  <p className="text-gray-600">{metric.label}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </motion.section>
    </div>
  )
}
