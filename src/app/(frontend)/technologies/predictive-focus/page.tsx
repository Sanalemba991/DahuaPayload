'use client'

import React, { useState, useRef } from 'react'
import { motion } from 'framer-motion'
import {
  Focus,
  Zap,
  Camera,
  Crosshair,
  Target,
  Eye,
  Shield,
  Cpu,
  Database,
  Settings,
} from 'lucide-react'

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
      whileHover={xDisable ? {} : { y: -5, scale: 1.02 }}
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

export default function PredictiveFocusPage() {
  const overviewRef = useRef<HTMLDivElement>(null)

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
            src="https://images.unsplash.com/photo-1606041008023-472dfb5e530f?w=1920&h=1080&fit=crop"
            alt="Predictive Focus Algorithm Technology"
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
              <span className="block">Predictive Focus</span>
              <span className="block text-red-500">Algorithm Technology</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="text-base md:text-lg text-gray-100 max-w-3xl leading-snug"
            >
              Next-generation AI-powered focusing technology that predicts focus requirements before
              they are needed, ensuring crystal-clear capture with unprecedented accuracy and
              intelligent video analytics.
            </motion.p>
          </div>
        </div>
      </motion.section>

      {/* Technology Demo Section */}
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
                PFA <span className="text-red-500">Technology Demo</span>
              </h2>
              <p className="text-xl text-gray-600 mx-auto">
                Experience how Predictive Focus Algorithm technology revolutionizes auto-focus
                systems
              </p>
            </motion.div>

            {/* Video Container */}
            <motion.div
              className="relative bg-black rounded-2xl overflow-hidden shadow-2xl"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <div className="relative" style={{ paddingBottom: '56.25%' }}>
                <div className="absolute inset-0 bg-black">
                  <video
                    className="w-full h-full object-cover"
                    controls
                    src="https://www.dahuasecurity.com/asset/upload/video/Predictive_Focus_Algorithm_(PFA).mp4"
                  />
                </div>
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
                    title: 'AI-Powered Prediction',
                    description:
                      'Advanced algorithms that predict focus requirements before they are needed',
                  },
                  {
                    title: 'Real-time Processing',
                    description:
                      'Instant focus adjustment with 0.1s response time for moving subjects',
                  },
                  {
                    title: 'Enterprise Ready',
                    description:
                      'Scalable technology for security, surveillance, and industrial applications',
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

      {/* Technical Specifications */}
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
              Technical <span className="text-red-600">Specifications</span>
            </h2>
            <p className="text-xl text-gray-600 mb-4">
              Advanced performance metrics and precision capabilities
            </p>
          </motion.div>

          <section className="py-16">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <div className="grid md:grid-cols-2 gap-8 mb-12">
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                    className="bg-white p-8 rounded-lg shadow-sm"
                  >
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">
                      Superior Focus Performance
                    </h3>
                    <p className="text-gray-600">
                      Lightning-fast focus acquisition with 99.9% accuracy that adapts to any
                      scenario for professional imaging and surveillance applications.
                    </p>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="bg-white p-8 rounded-lg shadow-sm"
                  >
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">
                      Intelligent Prediction
                    </h3>
                    <p className="text-gray-600">
                      Advanced AI algorithms that analyze scene conditions and predict focus changes
                      with 4K resolution support and low-light capabilities.
                    </p>
                  </motion.div>
                </div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className="grid md:grid-cols-4 gap-6"
                >
                  <div className="bg-white p-6 rounded-lg shadow-sm text-center">
                    <h4 className="text-3xl font-bold text-red-600 mb-2">0.1s</h4>
                    <p className="text-gray-600">Focus Speed</p>
                  </div>
                  <div className="bg-white p-6 rounded-lg shadow-sm text-center">
                    <h4 className="text-3xl font-bold text-red-600 mb-2">99.9%</h4>
                    <p className="text-gray-600">Accuracy</p>
                  </div>
                  <div className="bg-white p-6 rounded-lg shadow-sm text-center">
                    <h4 className="text-3xl font-bold text-red-600 mb-2">4K</h4>
                    <p className="text-gray-600">Resolution</p>
                  </div>
                  <div className="bg-white p-6 rounded-lg shadow-sm text-center">
                    <h4 className="text-3xl font-bold text-red-600 mb-2">0.01</h4>
                    <p className="text-gray-600">Low Light (lux)</p>
                  </div>
                </motion.div>
              </div>
            </div>
          </section>
        </div>
      </motion.div>

      {/* Security Ecosystem Section */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="py-24 bg-white"
      >
        <div className="max-w-6xl mx-auto px-4">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Complete Focus <span className="text-red-600">Ecosystem</span>
            </h2>
            <p className="text-xl text-gray-600 mb-4">
              Integrated AI-powered focusing solutions for comprehensive imaging and surveillance
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            <motion.div
              whileHover={{ y: -5 }}
              className="bg-gradient-to-br from-red-50 to-red-100 p-8 rounded-lg shadow-sm text-center"
            >
              <div className="text-4xl mb-4">📹</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Smart Cameras</h3>
              <p className="text-gray-600">
                AI-powered cameras with predictive focus and advanced imaging capabilities.
              </p>
            </motion.div>

            <motion.div
              whileHover={{ y: -5 }}
              className="bg-gradient-to-br from-purple-50 to-purple-100 p-8 rounded-lg shadow-sm text-center"
            >
              <div className="text-4xl mb-4">💻</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Focus Management</h3>
              <p className="text-gray-600">
                Centralized software for predictive focus control and imaging optimization.
              </p>
            </motion.div>

            <motion.div
              whileHover={{ y: -5 }}
              className="bg-gradient-to-br from-green-50 to-green-100 p-8 rounded-lg shadow-sm text-center"
            >
              <div className="text-4xl mb-4">🎯</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Tracking Systems</h3>
              <p className="text-gray-600">
                Advanced subject tracking with predictive focus for moving targets.
              </p>
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* Advanced Capabilities Section */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="py-24 bg-gradient-to-b from-gray-50 to-white"
      >
        <div className="max-w-6xl mx-auto px-4">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Advanced <span className="text-red-600">Capabilities</span>
            </h2>
            <p className="text-xl text-gray-600 mb-4">
              Cutting-edge AI features that redefine intelligent focusing technology
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            <motion.div
              whileHover={{ y: -5 }}
              className="bg-white p-8 rounded-lg shadow-sm border-l-4 border-red-500"
            >
              <h3 className="text-xl font-bold text-gray-900 mb-3">Predictive Analysis</h3>
              <p className="text-gray-600">
                Advanced algorithms that predict focus requirements before they are needed for
                seamless operation.
              </p>
            </motion.div>

            <motion.div
              whileHover={{ y: -5 }}
              className="bg-white p-8 rounded-lg shadow-sm border-l-4 border-red-500"
            >
              <h3 className="text-xl font-bold text-gray-900 mb-3">Real-time Processing</h3>
              <p className="text-gray-600">
                Lightning-fast focus adjustment with minimal latency for critical imaging scenarios.
              </p>
            </motion.div>

            <motion.div
              whileHover={{ y: -5 }}
              className="bg-white p-8 rounded-lg shadow-sm border-l-4 border-red-500"
            >
              <h3 className="text-xl font-bold text-gray-900 mb-3">Scalable Architecture</h3>
              <p className="text-gray-600">
                Flexible deployment from single cameras to large-scale enterprise imaging solutions.
              </p>
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* Applications Section */}
      <motion.section
        className="py-20 bg-gray-100"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Real-World <span className="text-red-500">Applications</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              PFA Technology excels in demanding environments where focus precision is critical
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'Forensic Analysis',
                description:
                  'Crystal-clear evidence capture with zero focus drift during critical investigations',
                image:
                  'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=400&h=250&fit=crop',
              },
              {
                title: 'Security Monitoring',
                description:
                  'Continuous sharp surveillance with automatic focus adjustment for moving subjects',
                image:
                  'https://images.unsplash.com/photo-1557804506-669a67965ba0?w=400&h=250&fit=crop',
              },
              {
                title: 'Traffic Surveillance',
                description:
                  'Perfect license plate capture and vehicle identification at all distances',
                image:
                  'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=400&h=250&fit=crop',
              },
            ].map((app, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="h-48 overflow-hidden">
                  <img src={app.image} alt={app.title} className="w-full h-full object-cover" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{app.title}</h3>
                  <p className="text-gray-600 mb-4">{app.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>
    </div>
  )
}
