'use client'
import React, { useState, useEffect, useRef } from 'react'
import Image from 'next/image'
import { useInView } from 'react-intersection-observer'
import { Shield, Cpu, Eye, Database, Settings } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

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

const features = [
  {
    icon: Cpu,
    iconBg: 'bg-indigo-50',
    iconColor: 'text-indigo-600',
    title: 'Deep Learning',
    description:
      'Advanced neural networks that continuously learn and improve detection accuracy with 99.7% precision.',
  },
  {
    icon: Shield,
    iconBg: 'bg-pink-50',
    iconColor: 'text-pink-600',
    title: 'Real-time Processing',
    description:
      'Instant analysis and response with minimal latency for critical security events and threat detection.',
  },
  {
    icon: Database,
    iconBg: 'bg-cyan-50',
    iconColor: 'text-cyan-600',
    title: 'Scalable Architecture',
    description:
      'Flexible deployment from single cameras to large-scale enterprise solutions with AI analytics.',
  },
  {
    icon: Eye,
    iconBg: 'bg-gray-50',
    iconColor: 'text-gray-600',
    title: 'AI Algorithms',
    description: '50+ specialized AI algorithms for comprehensive video analytics and monitoring',
  },
]

export default function WizMindPage() {
  const [activeTab, setActiveTab] = useState('overview')
  const overviewRef = useRef<HTMLDivElement>(null)
  const featuresRef = useRef<HTMLDivElement>(null)

  const { ref: benefitsRef, inView: benefitsInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const scrollToSection = (sectionId: string) => {
    setActiveTab(sectionId)
    const targetRef = sectionId === 'overview' ? overviewRef : featuresRef
    if (targetRef.current) {
      const navHeight = 80
      const elementPosition = targetRef.current.offsetTop - navHeight
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth',
      })
    }
  }

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  }

  const tabData = [
    { id: 'overview', label: 'Overview', icon: Eye },
    { id: 'features', label: 'Features', icon: Settings },
  ]

  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
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
            src="/images/wzmind.webp"
            alt="WizMind Technology"
            className="object-cover w-full h-full absolute inset-0"
            style={{ zIndex: 0 }}
          />
        </motion.div>
        <div className="absolute inset-0  flex items-center">
          <div className="max-w-4xl px-10 space-y-6">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-3xl md:text-5xl font-bold text-white leading-tight"
            >
              <span className="block">WizMind</span>
              <span className="block text-red-500">Technology</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="text-base md:text-lg text-gray-100 max-w-3xl leading-snug"
            >
              Next-generation AI surveillance technology powered by deep learning algorithms,
              delivering unprecedented intelligence and accuracy in video analytics and security
              monitoring.
            </motion.p>
          </div>
        </div>
      </motion.section>

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
                WizMind <span className="text-red-500">Technology Demo</span>
              </h2>
              <p className="text-xl text-gray-600 mx-auto">
                Experience how WizMind AI technology revolutionizes intelligent video surveillance
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
              {/* Video Wrapper */}
              <div className="relative" style={{ paddingBottom: '56.25%' }}>
                <iframe
                  className="absolute inset-0 w-full h-full"
                  src="https://www.youtube.com/embed/moTVRuAF0uI?si=oBPJEAC9z2efdWfx"
                  title="WizMind Technology Demo"
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

      {/* Thermal Imaging Section */}
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
              Thermal Imaging <span className="text-red-600">Technology</span>
            </h2>
            <p className="text-xl text-gray-600 mb-4">
              Advanced heat detection and temperature monitoring for comprehensive surveillance
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
                      Advanced Heat Detection
                    </h3>
                    <p className="text-gray-600">
                      See beyond visible light with thermal imaging that detects heat signatures and
                      temperature variations for 24/7 surveillance in any weather condition.
                    </p>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="bg-white p-8 rounded-lg shadow-sm"
                  >
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">
                      Fire Prevention & Safety
                    </h3>
                    <p className="text-gray-600">
                      Early fire detection and industrial equipment monitoring with precise
                      temperature measurement capabilities up to ±2°C accuracy.
                    </p>
                  </motion.div>
                </div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className="grid md:grid-cols-3 gap-6"
                >
                  <div className="bg-white p-6 rounded-lg shadow-sm text-center">
                    <h4 className="text-3xl font-bold text-red-600 mb-2">±2°C</h4>
                    <p className="text-gray-600">Temperature Accuracy</p>
                  </div>
                  <div className="bg-white p-6 rounded-lg shadow-sm text-center">
                    <h4 className="text-3xl font-bold text-red-600 mb-2">5km</h4>
                    <p className="text-gray-600">Detection Range</p>
                  </div>
                  <div className="bg-white p-6 rounded-lg shadow-sm text-center">
                    <h4 className="text-3xl font-bold text-red-600 mb-2">24/7</h4>
                    <p className="text-gray-600">Continuous Operation</p>
                  </div>
                </motion.div>
              </div>
            </div>
          </section>
        </div>
      </motion.div>

      {/* Ecosystem Section */}
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
              Complete Security <span className="text-red-600">Ecosystem</span>
            </h2>
            <p className="text-xl text-gray-600 mb-4">
              Integrated AI-powered solutions for comprehensive surveillance and security management
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            <motion.div
              whileHover={{ y: -5 }}
              className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-lg shadow-sm text-center"
            >
              <div className="text-4xl mb-4">📹</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Smart Cameras</h3>
              <p className="text-gray-600">
                AI-powered cameras with advanced analytics and multi-sensor capabilities.
              </p>
            </motion.div>

            <motion.div
              whileHover={{ y: -5 }}
              className="bg-gradient-to-br from-purple-50 to-purple-100 p-8 rounded-lg shadow-sm text-center"
            >
              <div className="text-4xl mb-4">💻</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Management Platform</h3>
              <p className="text-gray-600">
                Centralized software for device management and video analytics.
              </p>
            </motion.div>

            <motion.div
              whileHover={{ y: -5 }}
              className="bg-gradient-to-br from-green-50 to-green-100 p-8 rounded-lg shadow-sm text-center"
            >
              <div className="text-4xl mb-4">🗄️</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Storage Systems</h3>
              <p className="text-gray-600">
                Scalable NVRs with redundancy and high-capacity options.
              </p>
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* Features Section */}
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
              Cutting-edge AI features that redefine intelligent video surveillance
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            <motion.div
              whileHover={{ y: -5 }}
              className="bg-white p-8 rounded-lg shadow-sm border-l-4 border-red-500"
            >
              <h3 className="text-xl font-bold text-gray-900 mb-3">Deep Learning</h3>
              <p className="text-gray-600">
                Advanced neural networks that continuously learn and improve detection accuracy.
              </p>
            </motion.div>

            <motion.div
              whileHover={{ y: -5 }}
              className="bg-white p-8 rounded-lg shadow-sm border-l-4 border-red-500"
            >
              <h3 className="text-xl font-bold text-gray-900 mb-3">Real-time Processing</h3>
              <p className="text-gray-600">
                Instant analysis and response with minimal latency for critical security events.
              </p>
            </motion.div>

            <motion.div
              whileHover={{ y: -5 }}
              className="bg-white p-8 rounded-lg shadow-sm border-l-4 border-red-500"
            >
              <h3 className="text-xl font-bold text-gray-900 mb-3">Scalable Architecture</h3>
              <p className="text-gray-600">
                Flexible deployment from single cameras to large-scale enterprise solutions.
              </p>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </div>
  )
}
