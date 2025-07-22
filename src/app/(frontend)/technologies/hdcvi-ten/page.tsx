'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Camera, Zap, Shield, Cpu, Video, Signal } from 'lucide-react'

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
      className="bg-white rounded-xl p-6 sm:p-8 flex flex-col items-center text-center hover:shadow-xl transition-all duration-300"
    >
      <div
        className={`${iconBg} w-12 h-12 sm:w-16 sm:h-16 rounded-full flex items-center justify-center mb-4 sm:mb-6`}
      >
        <Icon size={24} className={`${iconColor} sm:w-8 sm:h-8`} />
      </div>
      <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3 sm:mb-4">{title}</h3>
      <p className="text-sm sm:text-base text-gray-600 leading-relaxed">{description}</p>
    </motion.div>
  )
}

export default function HDCVITenPage() {
  const [isPlaying, setIsPlaying] = useState(false)

  const handlePlayVideo = () => {
    setIsPlaying(true)
  }

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
            src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1920&h=1080&fit=crop"
            alt="HDCVI 10.0 Technology"
            className="object-cover w-full h-full absolute inset-0"
            style={{ zIndex: 0 }}
          />
          <div className="absolute inset-0  bg-opacity-30"></div>
        </motion.div>

        <div className="absolute inset-0 flex items-center">
          <div className="max-w-4xl px-4 sm:px-6 lg:px-10 space-y-4 sm:space-y-6">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight"
            >
              <span className="block">HDCVI 10.0</span>
              <span className="block text-red-500">AI Over-Coax Era</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="text-base sm:text-lg md:text-xl text-gray-100 max-w-3xl leading-snug"
            >
              HDCVI 10.0 represents the pinnacle of high-definition composite video interface
              technology with integrated AI capabilities. This breakthrough innovation blazes a
              trail to the over-coax AI era, delivering exceptional 4K resolution with intelligent
              analytics over traditional coaxial cables.
            </motion.p>
          </div>
        </div>
      </motion.section>

      {/* Video Section */}
      <motion.section
        className="mt-16 bg-white p-6 sm:p-8 shadow-lg"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            {/* Header */}
            <motion.div
              className="text-center mb-12 sm:mb-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                See HDCVI 10.0 in <span className="text-red-500">Action</span>
              </h2>
              <p className="text-lg sm:text-xl text-gray-600 mx-auto mb-8 sm:mb-12 px-4">
                Experience the revolutionary capabilities of HDCVI 10.0 AI technology
              </p>

              {/* Video Container - Enhanced for mobile */}
              <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
                <div
                  className="absolute inset-0 bg-black bg-opacity-40 rounded-2xl"
                  style={{
                    backgroundImage:
                      'url("https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=1200&h=675&fit=crop")',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                  }}
                >
                  <div className="absolute bottom-4 sm:bottom-8 left-4 sm:left-8 text-white">
                    <h3 className="text-lg sm:text-2xl font-bold mb-1 sm:mb-2">
                      HDCVI 10.0 AI Demo
                    </h3>
                    <p className="text-sm sm:text-lg opacity-90">Over-coax AI Era technology</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Video Description */}
            <div className="mt-8 sm:mt-12 text-center">
              <motion.div
                className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 text-gray-900"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                {[
                  {
                    title: '4K AI Resolution',
                    description:
                      'Ultra-high definition video with integrated AI analytics delivers crystal clear monitoring with intelligent detection',
                  },
                  {
                    title: 'Over-Coax Transmission',
                    description:
                      'Revolutionary AI data transmission over existing coaxial infrastructure reduces installation costs significantly',
                  },
                  {
                    title: 'Smart Integration',
                    description:
                      'Seamless upgrade path with AI capabilities while maintaining compatibility with existing security systems',
                  },
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.7 + index * 0.1 }}
                    className="p-4"
                  >
                    <h3 className="text-base sm:text-lg font-semibold mb-2">{item.title}</h3>
                    <p className="text-gray-600 text-sm sm:text-base">{item.description}</p>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Overview Section */}
      <motion.section
        className="py-12 sm:py-16 lg:py-24 bg-white"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <motion.div
            className="text-center mb-12 sm:mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Technology <span className="text-red-500">Overview</span>
            </h2>
            <div className="w-16 sm:w-24 h-1 bg-gradient-to-r from-red-400 to-red-600 mx-auto mb-4 sm:mb-6"></div>
            <p className="text-lg sm:text-xl text-gray-600 mx-auto max-w-3xl px-4">
              Next-generation HDCVI technology that revolutionizes video surveillance
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center p-4 sm:p-8 lg:p-20">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4 sm:mb-6">
                Next-Generation HDCVI Technology
              </h3>
              <p className="text-base sm:text-lg text-gray-600 mb-4 sm:mb-6 leading-relaxed">
                HDCVI 10.0 represents the pinnacle of high-definition composite video interface
                technology with integrated AI capabilities. This breakthrough innovation blazes a
                trail to the over-coax AI era, delivering exceptional 4K resolution with intelligent
                analytics over traditional coaxial cables.
              </p>
              <p className="text-sm sm:text-base text-gray-600 mb-6 sm:mb-8 leading-relaxed">
                With advanced AI processors, intelligent compression algorithms, and over-coax data
                transmission, HDCVI 10.0 ensures reliable performance over long distances while
                providing real-time AI analytics for enhanced security applications.
              </p>

              {/* Key Benefits Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                {[
                  { title: '4K AI Resolution', desc: 'Ultra-high definition with AI analytics' },
                  { title: 'Over-Coax AI', desc: 'AI data transmission over coax' },
                  { title: 'Cost Effective', desc: 'Uses existing coaxial infrastructure' },
                  { title: 'Easy Integration', desc: 'Seamless upgrade with AI features' },
                ].map((benefit, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                    className="bg-red-50 p-3 sm:p-4 rounded-lg border border-red-200"
                  >
                    <h4 className="font-semibold text-red-800 mb-2 text-sm sm:text-base">
                      {benefit.title}
                    </h4>
                    <p className="text-xs sm:text-sm text-gray-600">{benefit.desc}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Right Image - Full Height */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="relative h-64 sm:h-96 lg:h-full"
            >
              <motion.div className="relative overflow-hidden rounded-2xl shadow-2xl h-full">
                <img
                  src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=500&fit=crop"
                  alt="HDCVI 10.0 Technology"
                  className="w-full h-full object-cover"
                />

                {/* Floating Stats */}
                <div className="absolute top-2 sm:top-4 right-2 sm:right-4 bg-white bg-opacity-90 backdrop-blur-sm p-2 sm:p-3 rounded-lg shadow-lg">
                  <div className="text-lg sm:text-2xl font-bold text-red-500">4K</div>
                  <div className="text-xs sm:text-sm text-gray-600">AI Resolution</div>
                </div>

                <div className="absolute bottom-2 sm:bottom-4 left-2 sm:left-4 bg-white bg-opacity-90 backdrop-blur-sm p-2 sm:p-3 rounded-lg shadow-lg">
                  <div className="text-lg sm:text-2xl font-bold text-red-500">AI</div>
                  <div className="text-xs sm:text-sm text-gray-600">Over-Coax</div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Key Features Section */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="py-16 sm:py-24 bg-gradient-to-b from-white to-gray-50"
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12 sm:mb-16"
          >
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Why Choose <span className="text-red-500">HDCVI 10.0?</span>
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 mb-4 px-4">
              Revolutionary advantages that transform video surveillance
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            <FeatureCard
              icon={Zap}
              iconBg="bg-red-50"
              iconColor="text-red-600"
              title="AI Over-Coax Era"
              description="Revolutionary technology that blazes a trail to the over-coax AI era, delivering intelligent analytics over existing infrastructure."
            />
            <FeatureCard
              icon={Shield}
              iconBg="bg-red-50"
              iconColor="text-red-600"
              title="Smart Installation"
              description="Easy upgrade with AI capabilities while maintaining existing coaxial infrastructure and reducing installation complexity."
            />
            <FeatureCard
              icon={Cpu}
              iconBg="bg-red-50"
              iconColor="text-red-600"
              title="Enhanced Intelligence"
              description="Advanced AI processing delivers superior performance with intelligent analytics and real-time decision making."
            />
          </div>
        </div>
      </motion.div>

      {/* Advanced Capabilities */}
      <motion.section
        className="py-16 sm:py-20 text-black"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            {/* Section Header */}
            <motion.div
              className="text-center mb-12 sm:mb-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 text-gray-900">
                Advanced <span className="text-gray-700">Capabilities</span>
              </h2>
              <p className="text-lg sm:text-xl text-gray-600">
                Cutting-edge AI features for intelligent video surveillance applications
              </p>
            </motion.div>

            {/* Capabilities Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {[
                {
                  title: 'Deep Learning AI',
                  description:
                    'Advanced neural networks powered by deep learning technology enable intelligent pattern recognition with exceptional accuracy.',
                  icon: (
                    <svg
                      className="w-8 h-8 sm:w-10 sm:h-10 mx-auto mb-4 text-red-500"
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
                      className="w-8 h-8 sm:w-10 sm:h-10 mx-auto mb-4 text-red-500"
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
                      className="w-8 h-8 sm:w-10 sm:h-10 mx-auto mb-4 text-red-500"
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
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white p-6 sm:p-8 text-center shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 rounded-xl"
                >
                  {capability.icon}
                  <h3 className="text-xl sm:text-2xl font-bold mb-4 text-gray-900">
                    {capability.title}
                  </h3>
                  <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
                    {capability.description}
                  </p>
                </motion.div>
              ))}
            </div>

            {/* Technical Specifications */}
            <motion.div
              className="mt-12 sm:mt-16 bg-white p-6 sm:p-8 shadow-lg rounded-lg"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <h3 className="text-xl sm:text-2xl font-bold text-center text-gray-900 mb-6 sm:mb-8">
                Technical Specifications
              </h3>
              <motion.div
                className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-8 text-gray-900"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                {[
                  { value: '4K', label: 'Resolution' },
                  { value: '<1ms', label: 'Latency' },
                  { value: '500m', label: 'Transmission' },
                  { value: '24/7', label: 'Operation' },
                ].map((spec, index) => (
                  <div className="text-center" key={index}>
                    <div className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">
                      {spec.value}
                    </div>
                    <p className="text-sm sm:text-base text-gray-700">{spec.label}</p>
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
