'use client'
import React, { useState, useEffect, useRef } from 'react'
import { useInView } from 'react-intersection-observer'
import { Shield, TrendingUp, CheckCircle, Cpu, Factory, Settings } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

const solutionCategories = [
  {
    title: 'Branch Security',
    subtitle: 'Comprehensive Branch Protection',
    description:
      'Complete security solution for banking premises including entrances, counters, and vaults.',
    solutions: [
      'Perimeter Security Systems',
      'Access Control Integration',
      'Video Surveillance Network',
      'Emergency Response Systems',
    ],
    image: '/images/bnksec.png',
  },
  {
    title: 'ATM Security',
    subtitle: 'Intelligent ATM Protection',
    description:
      'Advanced monitoring and protection systems for ATMs with real-time alerts and recording.',
    solutions: [
      'ATM Transaction Recording',
      'Skimming Detection',
      'Vandalism Prevention',
      'Remote Monitoring',
    ],
    image: '/images/face.webp',
  },
  {
    title: 'Vault Management',
    subtitle: 'Smart Vault Solutions',
    description:
      'High-security vault monitoring with advanced access control and surveillance systems.',
    solutions: [
      'Vault Access Control',
      'Motion Detection',
      'Environmental Monitoring',
      'Asset Tracking',
    ],
    image: '/images/nightv.webp',
  },
  {
    title: 'Banking Analytics',
    subtitle: 'Intelligent Business Insights',
    description: 'Smart analytics for customer flow, queue management, and operational efficiency.',
    solutions: [
      'Customer Flow Analysis',
      'Queue Management',
      'Service Time Optimization',
      'Branch Performance Metrics',
    ],
    image: '/images/bnksystem.png',
  },
]

const IndustryPage = () => {
  const [activeTab, setActiveTab] = useState('overview')

  const overviewRef = useRef<HTMLDivElement>(null)
  const solutionsRef = useRef<HTMLDivElement>(null)

  const { ref: benefitsRef, inView: benefitsInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })
  const { ref: solutionsInViewRef, inView: solutionsInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const scrollToSection = (sectionId: string) => {
    setActiveTab(sectionId)
    const targetRef = sectionId === 'overview' ? overviewRef : solutionsRef

    if (targetRef.current) {
      const navHeight = 80
      const elementPosition = targetRef.current.offsetTop - navHeight
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth',
      })
    }
  }

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 100
      const sections = [
        { id: 'overview', ref: overviewRef },
        { id: 'solutions', ref: solutionsRef },
      ]

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i]
        if (section.ref.current && section.ref.current.offsetTop <= scrollPosition) {
          setActiveTab(section.id)
          break
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  }

  const tabData = [
    { id: 'overview', label: 'Overview', icon: Factory },
    { id: 'solutions', label: 'Solutions', icon: Settings },
  ]

  return (
    <div className="min-h-screen bg-white">
      <style jsx global>{`
        html,
        body {
          overflow-x: hidden;
          max-width: 100%;
        }
        * {
          box-sizing: border-box;
        }
      `}</style>
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
            src="/images/about.webp"
            alt="Banking Security Solution"
            className="object-cover w-full h-full absolute inset-0"
            style={{ zIndex: 0 }}
          />
        </motion.div>
        <div className="absolute inset-0 bg-black/40 flex items-center">
          <div className="max-w-4xl px-10 space-y-6">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-3xl md:text-5xl font-bold text-white leading-tight"
            >
              <span className="block">Banking</span>
              <span className="block text-red-500">Security Solutions</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="text-base md:text-lg text-gray-100 max-w-3xl leading-snug"
            >
              Trusted by financial institutions, our advanced banking security solutions combine
              AI-powered analytics, 24/7 surveillance, and seamless integration—protecting assets,
              customers, and operations for a safer financial future.
            </motion.p>
          </div>
        </div>
      </motion.section>
      {/* Navigation */}
      <nav className="sticky top-0 z-40 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex space-x-4">
            {tabData.map((tab) => {
              const Icon = tab.icon
              return (
                <button
                  key={tab.id}
                  onClick={() => scrollToSection(tab.id)}
                  className={`flex items-center px-4 py-3 border-b-2 transition-colors ${
                    activeTab === tab.id
                      ? 'border-red-600 text-red-600'
                      : 'border-transparent text-gray-500 hover:text-gray-700'
                  }`}
                >
                  <Icon className="w-5 h-5 mr-2" />
                  {tab.label}
                </button>
              )
            })}
          </div>
        </div>
      </nav>

      {/* Overview Section */}
      <section ref={overviewRef} className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 overflow-hidden">
          {/* Key Benefits */}
          <motion.div
            ref={benefitsRef}
            className="bg-gradient-to-r from-red-50 to-gray-50 rounded-xl md:rounded-2xl p-4 md:p-6 lg:p-8 overflow-hidden"
            initial="hidden"
            animate={benefitsInView ? 'visible' : 'hidden'}
            variants={fadeInUp}
          >
            <motion.div className="text-center mb-6 md:mb-8" variants={fadeInUp}>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2 md:mb-4">
                Why Choose Dahua Banking Solutions?
              </h2>
            </motion.div>
            <motion.div
              className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 lg:gap-8 overflow-hidden"
              variants={fadeInUp}
            >
              {[
                {
                  icon: TrendingUp,
                  title: 'Operational Efficiency',
                  description:
                    '60% reduction in security incidents and 45% improvement in operational efficiency',
                  color: 'bg-red-600',
                },
                {
                  icon: Shield,
                  title: 'Industrial Grade Security',
                  description: 'Ruggedized equipment designed for harsh industrial environments',
                  color: 'bg-gray-600',
                },
                {
                  icon: Cpu,
                  title: 'AI-Powered Intelligence',
                  description: 'Advanced analytics for predictive maintenance and quality control',
                  color: 'bg-red-600',
                },
              ].map((benefit, index) => {
                const Icon = benefit.icon
                return (
                  <motion.div
                    key={index}
                    className="text-center overflow-hidden"
                    variants={fadeInUp}
                    whileHover={{ y: -5 }}
                  >
                    <motion.div
                      className={`w-12 h-12 md:w-16 md:h-16 ${benefit.color} rounded-full flex items-center justify-center mx-auto mb-3 md:mb-4`}
                      whileHover={{ scale: 1.1, rotate: 5 }}
                    >
                      <Icon className="w-6 h-6 md:w-8 md:h-8 text-white" />
                    </motion.div>
                    <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-1.5 md:mb-2">
                      {benefit.title}
                    </h3>
                    <p className="text-sm md:text-base text-gray-600">{benefit.description}</p>
                  </motion.div>
                )
              })}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Solutions Section */}
      <section ref={solutionsRef} className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 overflow-hidden">
          <motion.div
            ref={solutionsInViewRef}
            initial="hidden"
            animate={solutionsInView ? 'visible' : 'hidden'}
            variants={fadeInUp}
            className="overflow-hidden"
          >
            <motion.div className="text-center mb-8 md:mb-12 overflow-hidden" variants={fadeInUp}>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2 md:mb-4">
                Industrial Solutions
              </h2>
              <p className="text-lg md:text-xl text-gray-600">
                Comprehensive security and monitoring solutions for industrial applications
              </p>
            </motion.div>

            <div className="space-y-8 md:space-y-12 lg:space-y-16 overflow-hidden">
              {solutionCategories.map((category, index) => (
                <motion.div
                  key={index}
                  className={`grid lg:grid-cols-2 gap-6 md:gap-8 lg:gap-12 items-center overflow-hidden ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}
                  variants={fadeInUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.3 }}
                >
                  <motion.div
                    className={`space-y-4 md:space-y-6 overflow-hidden ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}
                    variants={fadeInUp}
                  >
                    <div className="overflow-hidden">
                      <motion.p
                        className="text-xs md:text-sm font-medium text-red-600 uppercase tracking-wide mb-1.5 md:mb-2"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: 0.2 }}
                      >
                        {category.subtitle}
                      </motion.p>
                      <motion.h3
                        className="text-2xl md:text-3xl font-bold text-gray-900 mb-2 md:mb-4"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                      >
                        {category.title}
                      </motion.h3>
                      <motion.p
                        className="text-sm md:text-base lg:text-lg text-gray-600"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 }}
                      >
                        {category.description}
                      </motion.p>
                    </div>

                    <motion.div
                      className="space-y-2 md:space-y-3 overflow-hidden"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ delay: 0.5 }}
                    >
                      {category.solutions.map((solution, idx) => (
                        <motion.div
                          key={idx}
                          className="flex items-center overflow-hidden"
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.6 + idx * 0.1 }}
                        >
                          <CheckCircle className="w-4 h-4 md:w-5 md:h-5 text-red-500 mr-2 md:mr-3 flex-shrink-0" />
                          <span className="text-sm md:text-base text-gray-700">{solution}</span>
                        </motion.div>
                      ))}
                    </motion.div>
                  </motion.div>

                  <motion.div
                    className={`overflow-hidden ${index % 2 === 1 ? 'lg:col-start-1' : ''}`}
                    variants={fadeInUp}
                  >
                    <motion.img
                      src={category.image}
                      alt={category.title}
                      className="w-full h-48 md:h-64 lg:h-80 object-cover rounded-xl md:rounded-2xl shadow-2xl"
                      transition={{ duration: 0.5 }}
                    />
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default IndustryPage
