'use client'

import React, { useState } from 'react'
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
    <div className="min-h-screen bg-gray-50">
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
          <div className="absolute inset-0 bg-opacity-40"></div>
        </motion.div>

        <div className="absolute inset-0 flex items-center">
          <div className="max-w-4xl px-10 space-y-6">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-4xl md:text-6xl font-bold text-white leading-tight"
            >
              <span className="block">AI-Powered</span>
              <span className="block text-red-500">Smart Analytics</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="text-lg md:text-xl text-gray-200 max-w-3xl leading-relaxed"
            >
              Intelligent Video Analysis & Insights that transform ordinary surveillance into
              intelligent monitoring systems with advanced detection capabilities and real-time
              analytics for enhanced security applications.
            </motion.p>
          </div>
        </div>
      </motion.section>

      {/* Overview Section */}
      <motion.section
        className="py-24 bg-white"
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
              Technology <span className="text-red-500">Overview</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-red-400 to-red-600 mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 mx-auto">
              Next-generation AI analytics that revolutionizes video surveillance
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-16 items-center p-20">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <h3 className="text-3xl font-bold text-gray-900 mb-6">
                Next-Generation AI Analytics
              </h3>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Smart Analytics represents the pinnacle of intelligent video analysis technology
                with integrated AI capabilities. This breakthrough innovation transforms ordinary
                surveillance into intelligent monitoring systems, delivering exceptional accuracy
                with real-time behavioral analysis.
              </p>
              <p className="text-gray-600 mb-8 leading-relaxed">
                With advanced neural networks, intelligent pattern recognition, and deep learning
                algorithms, Smart Analytics ensures reliable performance with 99.5% accuracy while
                providing real-time insights for enhanced security applications.
              </p>

              {/* Key Benefits Grid */}
              <div className="grid grid-cols-2 gap-4">
                {[
                  { title: '99.5% Accuracy', desc: 'Ultra-precise detection with AI' },
                  { title: 'Real-time Analysis', desc: 'Instant behavioral recognition' },
                  { title: 'Smart Alerts', desc: 'Reduces false alarms by 95%' },
                  { title: 'Easy Integration', desc: 'Seamless system compatibility' },
                ].map((benefit, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                    className="bg-amber-50 p-4 rounded-lg border border-red-200"
                  >
                    <h4 className="font-semibold text-red-800 mb-2">{benefit.title}</h4>
                    <p className="text-sm text-gray-600">{benefit.desc}</p>
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
              className="relative h-full"
            >
              <motion.div className="relative overflow-hidden rounded-2xl shadow-2xl h-full">
                <img
                  src="https://images.unsplash.com/photo-1557804506-669a67965ba0?w=600&h=500&fit=crop"
                  alt="Smart Analytics Technology"
                  className="w-full h-full object-cover"
                />

                {/* Floating Stats */}
                <div className="absolute top-4 right-4 bg-white bg-opacity-90 backdrop-blur-sm p-3 rounded-lg shadow-lg">
                  <div className="text-2xl font-bold text-red-500">99.5%</div>
                  <div className="text-sm text-gray-600">Accuracy</div>
                </div>

                <div className="absolute bottom-4 left-4 bg-white bg-opacity-90 backdrop-blur-sm p-3 rounded-lg shadow-lg">
                  <div className="text-2xl font-bold text-red-500">AI</div>
                  <div className="text-sm text-gray-600">Analytics</div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Video Section */}
      <motion.section
        className="py-20 bg-gray-100"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="max-w-5xl mx-auto px-4">
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
          </motion.div>

          {/* Video Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative overflow-hidden rounded-2xl shadow-2xl"
            style={{ paddingBottom: '56.25%' }}
          >
            <iframe
              className="absolute inset-0 w-full h-full"
              src="https://www.youtube.com/embed/kMTVBhFPxVs?autoplay=0&rel=0&modestbranding=1"
              title="WizColor Technology Demo"
              frameBorder="0"
              allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </motion.div>
        </div>
      </motion.section>

      {/* Key Features Section */}
      <motion.section
        className="py-12 bg-gradient-to-b from-white to-gray-50"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="max-w-6xl mx-auto px-4">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
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
              iconBg="bg-red-50"
              iconColor="text-red-600"
              title="Real-time Alerts"
              description="Instant notifications for security events with smart filtering that reduces false alarms by up to 95% while maintaining reliability."
            />
            <FeatureCard
              icon={BarChart3}
              iconBg="bg-red-50"
              iconColor="text-red-600"
              title="Smart Insights"
              description="Advanced analytics dashboard with heat maps, trend analysis, and behavioral pattern recognition for comprehensive monitoring."
            />
          </div>
        </div>
      </motion.section>

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

      {/* Technical Specifications */}
      <motion.div
        className="mt-16 bg-white p-8 shadow-lg"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.4 }}
      >
        <h3 className="text-2xl font-bold text-center text-gray-900 mb-8">Performance Metrics</h3>
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
  )
}
