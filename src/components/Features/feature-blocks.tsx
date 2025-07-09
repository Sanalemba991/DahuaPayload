'use client'

import { useRef, useEffect, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { Shield, Monitor, Zap, Search, Users, Cloud } from 'lucide-react'
import React from 'react'

const features = [
  {
    icon: Shield,
    title: 'Advanced Security',
    description:
      'Enterprise-grade protection with end-to-end encryption and multi-layer defense systems',
    color: 'from-blue-500 to-blue-600',
    bgColor: 'bg-blue-50',
    iconColor: 'text-blue-600',
  },
  {
    icon: Monitor,
    title: 'Remote Monitoring',
    description:
      'Access and control your security system from anywhere with real-time dashboard insights',
    color: 'from-emerald-500 to-emerald-600',
    bgColor: 'bg-emerald-50',
    iconColor: 'text-emerald-600',
  },
  {
    icon: Zap,
    title: 'Real-time Alerts',
    description:
      'Instant notifications and automated responses for suspicious activities and threats',
    color: 'from-amber-500 to-amber-600',
    bgColor: 'bg-amber-50',
    iconColor: 'text-amber-600',
  },
  {
    icon: Search,
    title: 'AI-Powered Detection',
    description:
      'Smart identification of people, vehicles, and objects using machine learning algorithms',
    color: 'from-red-500 to-red-600',
    bgColor: 'bg-red-50',
    iconColor: 'text-red-600',
  },
  {
    icon: Users,
    title: 'Multi-User Access',
    description:
      'Secure multi-user management with customizable roles and permissions for team collaboration',
    color: 'from-purple-500 to-purple-600',
    bgColor: 'bg-purple-50',
    iconColor: 'text-purple-600',
  },
  {
    icon: Cloud,
    title: 'Cloud Storage',
    description:
      'Reliable cloud storage solution with automatic backup and easy data recovery options',
    color: 'from-cyan-500 to-cyan-600',
    bgColor: 'bg-cyan-50',
    iconColor: 'text-cyan-600',
  },
]

export default function FeatureBlocks() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.1 })

  const stats = [
    { value: 98, label: 'Customer Satisfaction', symbol: '%' },
    { value: 15, label: 'Years of Excellence', symbol: '+' },
    { value: 500, label: 'Enterprise Clients', symbol: '+' },
    { value: 24, label: 'Hours Support', symbol: '/7' },
  ]

  return (
    <section ref={ref} className="py-20 bg-gray-50 relative overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgb(0,0,0) 1px, transparent 0)`,
            backgroundSize: '24px 24px',
          }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="text-center mb-16 max-w-5xl mx-auto"
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={isInView ? { scale: 1, opacity: 1 } : { scale: 0.8, opacity: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-6"
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 leading-tight">
              Why Choose{' '}
              <span className="bg-gradient-to-r from-red-600 to-red-700 bg-clip-text text-transparent">
                Dahua
              </span>
            </h2>
          </motion.div>

          <motion.div
            initial={{ width: 0 }}
            animate={isInView ? { width: '120px' } : { width: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="h-1 bg-gradient-to-r from-red-600 to-red-700 mx-auto mb-8 rounded-full"
          />

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="max-w-4xl mx-auto text-center space-y-6"
          >
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
              Pioneering the security industry with advanced, state-of-the-art technologies
              engineered for superior performance and unwavering reliability.
            </p>
          </motion.div>
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {features.map((feature, index) => (
            <FeatureBlock feature={feature} index={index} key={index} />
          ))}
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="bg-gradient-to-r from-gray-50 to-gray-100 rounded-3xl p-8 md:p-12 shadow-inner"
        >
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.4, delay: 0.5 + index * 0.05 }}
                className="text-center group"
              >
                <div className="mb-2">
                  <AnimatedCounter
                    to={stat.value}
                    duration={1.5}
                    delay={0.8 + index * 0.1}
                    isInView={isInView}
                    className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold bg-gradient-to-r from-red-600 to-red-700 bg-clip-text text-transparent group-hover:from-red-700 group-hover:to-red-800 transition-all duration-300 block"
                    suffix={stat.symbol}
                  />
                </div>
                <p className="text-sm md:text-base lg:text-lg text-gray-700 font-medium group-hover:text-gray-800 transition-colors duration-300">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

// New component for individual feature block
function FeatureBlock({ feature, index }: { feature: (typeof features)[0]; index: number }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
      transition={{
        duration: 0.5,
        delay: 0.3 + index * 0.1,
        ease: 'easeOut',
      }}
      className="bg-white rounded-lg p-6 flex flex-col items-center text-center hover:shadow-lg transition-all duration-300"
    >
      <motion.div
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.2 }}
        className={`${feature.bgColor} w-16 h-16 rounded-xl flex items-center justify-center mb-4`}
      >
        <feature.icon size={32} className={`${feature.iconColor}`} />
      </motion.div>
      <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
      <p className="text-sm text-gray-600">{feature.description}</p>
    </motion.div>
  )
}

// Enhanced animated counter component
function AnimatedCounter({
  to,
  duration = 1,
  delay = 0,
  isInView,
  className = '',
  suffix = '',
}: {
  to: number
  duration?: number
  delay?: number
  isInView: boolean
  className?: string
  suffix?: string
}) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!isInView) return

    let start = 0
    const end = to
    const totalFrames = Math.round(duration * 60)
    const counter = setTimeout(() => {
      const changePerFrame = end / totalFrames
      const timer = setInterval(() => {
        start = start + changePerFrame
        if (start > end) {
          clearInterval(timer)
          setCount(end)
        } else {
          setCount(Math.floor(start))
        }
      }, 1000 / 60)

      return () => clearInterval(timer)
    }, delay * 1000)

    return () => clearTimeout(counter)
  }, [to, duration, isInView, delay])

  return (
    <span className={className}>
      {count}
      {suffix}
    </span>
  )
}
