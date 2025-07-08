'use client'
import { Homepage, Media } from '@/payload-types'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { useState, useRef, useEffect } from 'react'

interface Herosectionprops {
  videoUrl: Media
  homepage: Homepage
}

export const HeroSection: React.FC<Herosectionprops> = ({ videoUrl }) => {
  const [videoError, setVideoError] = useState(false)
  const [currentContent, setCurrentContent] = useState(0)
  const videoRef = useRef<HTMLVideoElement>(null)

  const heroContent = [
    {
      title: 'AI-Powered',
      subtitle: 'Surveillance Systems',
      description:
        'Advanced artificial intelligence meets cutting-edge security technology for smarter protection and automated threat detection. Our intelligent systems learn and adapt to provide comprehensive monitoring solutions that enhance safety while reducing false alarms.',
      cta: 'Discover AI Solutions',
    },
    {
      title: 'Full-Color',
      subtitle: 'Night Vision',
      description:
        'Crystal-clear monitoring 24/7 with industry-leading full-color night vision technology that never sleeps. Experience unprecedented visibility in complete darkness with advanced sensor technology that captures vivid, detailed imagery.',
      cta: 'View Night Vision Tech',
    },
    {
      title: 'Smart Analytics',
      subtitle: 'Real-Time Insights',
      description:
        'Intelligent video analytics that detect, analyze, and respond to threats instantly with precision accuracy. Our advanced algorithms process data points to identify suspicious activities and provide actionable insights for security teams.',
      cta: 'Explore Analytics',
    },
    {
      title: 'Enterprise-Grade',
      subtitle: 'Security Solutions',
      description:
        'Comprehensive security infrastructure designed for businesses of all sizes with scalable deployment options. From small offices to large corporate campuses, our flexible solutions adapt to your specific needs while maintaining reliability.',
      cta: 'Browse Enterprise Solutions',
    },
  ]

  useEffect(() => {
    const videoElement = videoRef.current
    if (!videoElement) return

    const handleError = () => {
      console.error('Video failed to load')
      setVideoError(true)
    }

    const handleLoad = () => console.log('Video loaded successfully')

    videoElement.addEventListener('error', handleError)
    videoElement.addEventListener('loadeddata', handleLoad)

    return () => {
      videoElement.removeEventListener('error', handleError)
      videoElement.removeEventListener('loadeddata', handleLoad)
    }
  }, [])

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentContent((prev) => (prev + 1) % heroContent.length)
    }, 4000)

    return () => clearInterval(interval)
  }, [heroContent.length])

  return (
    <section className="relative h-screen w-full overflow-hidden bg-black">
      {!videoError ? (
        <video
          ref={videoRef}
          autoPlay
          playsInline
          muted
          loop
          onError={() => setVideoError(true)}
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src={videoUrl?.url ?? '/dahua-video.mp4'} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      ) : (
        <div
          className="absolute inset-0 bg-gradient-to-br from-gray-900 to-black"
          style={{
            backgroundImage: "url('/dahua.webp')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundBlendMode: 'overlay',
          }}
        ></div>
      )}

      <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-black/30 to-transparent z-10"></div>

      <div className="relative z-20 container mx-auto px-4 md:px-14 h-full flex flex-col justify-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl"
        >
          <motion.h1
            key={currentContent}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.6 }}
            className="text-5xl md:text-7xl font-bold text-white mb-4"
          >
            {heroContent[currentContent].title}
            <span className="text-red-600 block">{heroContent[currentContent].subtitle}</span>
          </motion.h1>

          <motion.p
            key={`desc-${currentContent}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl text-gray-300 mb-8 max-w-3xl leading-relaxed"
          >
            {heroContent[currentContent].description}
          </motion.p>

          <motion.div
            className="flex flex-wrap gap-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Link
              href="/products"
              className="group inline-flex items-center text-white text-lg font-medium transition-all duration-300 hover:text-red-600"
            >
              <motion.span
                key={`cta-${currentContent}`}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 10 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="transition-colors duration-300 group-hover:text-red-600"
              >
                {heroContent[currentContent].cta}
              </motion.span>
              <motion.span className="ml-3 text-xl transition-all duration-300 group-hover:translate-x-1 group-hover:text-red-600">
                →
              </motion.span>
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default HeroSection
