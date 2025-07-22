'use client'

import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { Brain, AlertTriangle, BarChart3, Users, Car, Zap, Shield, Cpu } from 'lucide-react'

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
    <div className="min-h-screen bg-white overflow-x-hidden">
      {/* Hero Section */}
      <motion.section
        className="relative w-full h-screen flex items-center justify-start overflow-hidden"
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
        <div className="absolute inset-0 bg-opacity-30"></div>
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
              intelligent monitoring systems with advanced detection capabilities and real-time
              analytics for enhanced security applications.
            </motion.p>
          </div>
        </div>
      </motion.section>

      {/* Video Section */}
      <motion.section
        className="mt-16 bg-white p-8 shadow-lg"
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
                WizColor <span className="text-red-500">Technology Demo</span>
              </h2>
              <p className="text-xl text-gray-600 mx-auto mb-12">
                Experience how WizColor Technology revolutionizes intelligent video surveillance
              </p>

              {/* Video Container */}
              <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
                <iframe
                  className="absolute inset-0 w-full h-full rounded-2xl"
                  src="https://www.youtube.com/embed/kMTVBhFPxVs?rel=0&modestbranding=1"
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
                    title: 'Intelligent Behavior Analysis',
                    description:
                      'Advanced AI algorithms automatically detect unusual patterns and behaviors with 99.5% accuracy',
                  },
                  {
                    title: 'Real-time Processing',
                    description:
                      'Instant video analysis with smart filtering reduces false alarms by up to 95%',
                  },
                  {
                    title: 'Smart Insights Dashboard',
                    description:
                      'Comprehensive analytics with heat maps and trend analysis for enhanced security monitoring',
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
              Why Choose <span className="text-red-500">Smart Analytics?</span>
            </h2>
            <p className="text-xl text-gray-600 mb-4">
              Revolutionary advantages that transform video surveillance
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            <FeatureCard
              icon={Brain}
              iconBg="bg-red-50"
              iconColor="text-red-600"
              title="Behavior Analysis"
              description="Revolutionary AI technology that detects unusual patterns and behaviors with 99.5% accuracy using advanced deep learning algorithms."
            />
            <FeatureCard
              icon={AlertTriangle}
              iconBg="bg-blue-50"
              iconColor="text-blue-600"
              title="Real-time Alerts"
              description="Instant notifications for security events with smart filtering that reduces false alarms by up to 95% while maintaining reliability."
            />
            <FeatureCard
              icon={BarChart3}
              iconBg="bg-amber-50"
              iconColor="text-amber-600"
              title="Smart Insights"
              description="Advanced analytics dashboard with heat maps, trend analysis, and behavioral pattern recognition for comprehensive monitoring."
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
                <div className="rounded-xl overflow-hidden mb-6">
                  <Image
                    src="https://images.unsplash.com/photo-1557804506-669a67965ba0?w=500&h=300&fit=crop"
                    alt="People Analytics"
                    width={500}
                    height={300}
                    className="w-full h-64 object-cover"
                  />
                </div>
                <div className="flex items-center justify-center mb-4">
                  <div className="bg-blue-50 p-3 rounded-full mr-4">
                    <Users className="text-blue-600" size={24} />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">People Analytics</h3>
                </div>
                <p className="text-gray-600 leading-relaxed">
                  Track movement patterns, count visitors, analyze crowd behavior, and detect
                  loitering with advanced human recognition algorithms and machine learning.
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
                <div className="rounded-xl overflow-hidden mb-6">
                  <Image
                    src="https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=500&h=300&fit=crop"
                    alt="Vehicle Analytics"
                    width={500}
                    height={300}
                    className="w-full h-64 object-cover"
                  />
                </div>
                <div className="flex items-center justify-center mb-4">
                  <div className="bg-green-50 p-3 rounded-full mr-4">
                    <Car className="text-green-600" size={24} />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">Vehicle Analytics</h3>
                </div>
                <p className="text-gray-600 leading-relaxed">
                  License plate recognition, traffic flow analysis, parking management, and vehicle
                  classification with intelligent tracking capabilities and AI-powered detection.
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Advanced Capabilities */}
      <motion.section
        className="py-20 text-black"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            {/* Section Header */}
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
                Cutting-edge AI features for intelligent video surveillance applications
              </p>
            </motion.div>

            {/* Capabilities Grid */}
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: 'Deep Learning AI',
                  description:
                    'Advanced neural networks powered by deep learning technology enable intelligent pattern recognition with exceptional accuracy.',
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
                        d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                      />
                    </svg>
                  ),
                },
                {
                  title: 'Smart Detection',
                  description:
                    'Multi-object detection and classification with real-time processing capabilities for enhanced security monitoring.',
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
                        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="1.5"
                        d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                      />
                    </svg>
                  ),
                },
                {
                  title: 'Predictive Analytics',
                  description:
                    'Machine learning algorithms predict patterns and trends to provide proactive security insights and threat assessment.',
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
                        d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
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
                  className="bg-white p-8 text-center shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200"
                >
                  {capability.icon}
                  <h3 className="text-2xl font-bold mb-4 text-gray-900">{capability.title}</h3>
                  <p className="text-gray-700 leading-relaxed">{capability.description}</p>
                </motion.div>
              ))}
            </div>

            {/* Technical Specifications */}
            <motion.div
              className="mt-16 bg-white p-8 shadow-lg"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <h3 className="text-2xl font-bold text-center text-gray-900 mb-8">
                Performance Metrics
              </h3>
              <motion.div
                className="grid md:grid-cols-4 gap-8 text-gray-900"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                {[
                  { value: '99.5%', label: 'Accuracy Rate' },
                  { value: '<100ms', label: 'Response Time' },
                  { value: '50+', label: 'AI Algorithms' },
                  { value: '1000+', label: 'Cameras Support' },
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
    </div>
  )
}
