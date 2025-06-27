'use client'

import { useRef, useEffect, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { Shield, Monitor, Zap, Search } from 'lucide-react'

const features = [
  {
    icon: Shield,
    title: 'Advanced Security',
    description: 'Enterprise-grade protection with end-to-end encryption',
    color: 'bg-blue-500'
  },
  {
    icon: Monitor,
    title: 'Remote Monitoring',
    description: 'Access your security system from anywhere in the world',
    color: 'bg-green-500'
  },
  {
    icon: Zap,
    title: 'Real-time Alerts',
    description: 'Instant notifications for suspicious activities',
    color: 'bg-yellow-500'
  },
  {
    icon: Search,
    title: 'AI-Powered Detection',
    description: 'Smart identification of people, vehicles, and objects',
    color: 'bg-red-500'
  }
]

export default function FeatureBlocks() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })
  
  // Stats with animated counters
  const stats = [
    { value: 98, label: 'Customer Satisfaction', symbol: '%' },
    { value: 15, label: 'Years of Excellence', symbol: '+' },
    { value: 500, label: 'Enterprise Clients', symbol: '+' },
    { value: 24, label: 'Hours Support', symbol: '/7' }
  ]
  
  return (
    <section ref={ref} className="py-24 bg-gradient-to-b from-gray-900 to-black text-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Why Choose Dahua</h2>
          <div className="h-1 w-24 bg-red-600 mx-auto mb-8"></div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Leading the industry with innovative solutions that combine cutting-edge technology with unmatched reliability.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-24">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all group"
            >
              <div className={`${feature.color} w-12 h-12 rounded-full flex items-center justify-center mb-5 group-hover:scale-110 transition-all`}>
                <feature.icon size={24} className="text-white" />
              </div>
              <h3 className="text-2xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-gray-400">{feature.description}</p>
            </motion.div>
          ))}
        </div>
        
        {/* Stats Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
              className="text-center"
            >
              <AnimatedCounter 
                to={stat.value} 
                duration={1.5} 
                delay={0.8 + index * 0.2} 
                isInView={isInView} 
                className="text-5xl md:text-6xl font-bold text-red-500"
                suffix={stat.symbol}
              />
              <p className="text-lg text-gray-400 mt-2">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

// Animated counter component
function AnimatedCounter({ to, duration = 1, delay = 0, isInView, className = '', suffix = '' }: {
  to: number;
  duration?: number;
  delay?: number;
  isInView: boolean;
  className?: string;
  suffix?: string;
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
  
  return <span className={className}>{count}{suffix}</span>
}