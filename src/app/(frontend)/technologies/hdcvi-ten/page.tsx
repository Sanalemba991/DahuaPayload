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
            src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1920&h=1080&fit=crop"
            alt="HDCVI 10.0 Technology"
            className="object-cover w-full h-full absolute inset-0"
            style={{ zIndex: 0 }}
          />
          <div className="absolute inset-0  bg-opacity-40"></div>
        </motion.div>

        <div className="absolute inset-0 flex items-center">
          <div className="max-w-4xl px-10 space-y-6">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-4xl md:text-6xl font-bold text-white leading-tight"
            >
              <span className="block">HDCVI 10.0</span>
              <span className="block text-red-500">AI Over-Coax Era</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="text-lg md:text-xl text-gray-200 max-w-3xl leading-relaxed"
            >
              HDCVI 10.0 represents the pinnacle of high-definition composite video interface
              technology with integrated AI capabilities. This breakthrough innovation blazes a
              trail to the over-coax AI era, delivering exceptional 4K resolution with intelligent
              analytics over traditional coaxial cables.
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
            <p className="text-xl text-gray-600  mx-auto">
              Next-generation HDCVI technology that revolutionizes video surveillance
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
                Next-Generation HDCVI Technology
              </h3>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                HDCVI 10.0 represents the pinnacle of high-definition composite video interface
                technology with integrated AI capabilities. This breakthrough innovation blazes a
                trail to the over-coax AI era, delivering exceptional 4K resolution with intelligent
                analytics over traditional coaxial cables.
              </p>
              <p className="text-gray-600 mb-8 leading-relaxed">
                With advanced AI processors, intelligent compression algorithms, and over-coax data
                transmission, HDCVI 10.0 ensures reliable performance over long distances while
                providing real-time AI analytics for enhanced security applications.
              </p>

              {/* Key Benefits Grid */}
              <div className="grid grid-cols-2 gap-4">
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
                  src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=500&fit=crop"
                  alt="HDCVI 10.0 Technology"
                  className="w-full h-full object-cover"
                />

                {/* Floating Stats */}
                <div className="absolute top-4 right-4 bg-white bg-opacity-90 backdrop-blur-sm p-3 rounded-lg shadow-lg">
                  <div className="text-2xl font-bold text-red-500">4K</div>
                  <div className="text-sm text-gray-600">AI Resolution</div>
                </div>

                <div className="absolute bottom-4 left-4 bg-white bg-opacity-90 backdrop-blur-sm p-3 rounded-lg shadow-lg">
                  <div className="text-2xl font-bold text-red-500">AI</div>
                  <div className="text-sm text-gray-600">Over-Coax</div>
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
              See HDCVI 10.0 in <span className="text-red-500">Action</span>
            </h2>
            <p className="text-xl text-gray-600  mx-auto">
              Experience the revolutionary capabilities of HDCVI 10.0 AI technology
            </p>
          </motion.div>

          {/* Image Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative overflow-hidden rounded-2xl shadow-2xl"
            style={{ paddingBottom: '56.25%' }}
          >
            <div
              className="absolute inset-0 bg-black bg-opacity-40"
              style={{
                backgroundImage:
                  'url("https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=1200&h=675&fit=crop")',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            >
              <div className="absolute bottom-8 left-8 text-white">
                <h3 className="text-2xl font-bold mb-2">HDCVI 10.0 AI Demo</h3>
                <p className="text-lg opacity-90">Over-coax AI Era technology</p>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Technical Specifications */}

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
              Why Choose <span className="text-red-500">HDCVI 10.0?</span>
            </h2>
            <p className="text-xl text-gray-600 mb-4">
              Revolutionary advantages that transform video surveillance
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
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
      </motion.section>

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
            { value: '4K', label: 'Resolution' },
            { value: '<1ms', label: 'Latency' },
            { value: '500m', label: 'Transmission' },
            { value: '24/7', label: 'Operation' },
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
