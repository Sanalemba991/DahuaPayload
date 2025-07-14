'use client'

import React, { useEffect, useRef } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'

const solutionsData = [
  {
    id: 'building',
    title: 'Building Security',
    subtitle: 'Smart Building Protection',
    description:
      'Comprehensive security solutions for residential and commercial buildings with smart access control systems.',
    image: '/images/building.webp',
    buttonText: 'Learn more',
    buttonLink: '/solutions/building',
    alignLeft: true,
  },
  {
    id: 'banking',
    title: 'Banking & Finance',
    subtitle: 'Secure Financial Operations',
    description:
      'Advanced security solutions for banks and financial institutions with AI-powered threat detection.',
    image: '/images/banking.webp',
    buttonText: 'Explore Solutions',
    buttonLink: '/solutions/banking',
    alignLeft: false,
  },
  {
    id: 'retail',
    title: 'Retail Security',
    subtitle: 'Intelligent Retail Protection',
    description:
      'Smart retail solutions for loss prevention, customer analytics, and inventory management systems.',
    image: '/images/retail.jpg',
    buttonText: 'View Details',
    buttonLink: '/solutions/retail',
    alignLeft: true,
  },
  {
    id: 'transportation',
    title: 'Transportation',
    subtitle: 'Smart Transit Security',
    description:
      'Intelligent transportation systems for airports, railways, and highways with traffic monitoring.',
    image: '/images/transport.webp',
    buttonText: 'Learn More',
    buttonLink: '/solutions/transportation',
    alignLeft: false,
  },
  {
    id: 'government',
    title: 'Government & Public Safety',
    subtitle: 'Critical Infrastructure Protection',
    description:
      'Comprehensive public safety solutions for cities and government facilities with smart integration.',
    image: '/images/safety.webp',
    buttonText: 'Discover More',
    buttonLink: '/solutions/government',
    alignLeft: true,
  },
]

export default function SolutionsPage() {
  const solutionRefs = useRef<(HTMLDivElement | null)[]>([])
  const categoryRefs = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    const currentSolutionRefs = solutionRefs.current
    const currentCategoryRefs = categoryRefs.current

    // Solutions observer
    const solutionObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-in')
          }
        })
      },
      { threshold: 0.1 },
    )

    // Categories observer
    const categoryObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const category = entry.target
            const index = parseInt((category as HTMLElement).dataset.categoryIndex || '0')

            const delay = window.innerWidth <= 768 ? index * 100 : index * 150

            setTimeout(() => {
              category.classList.add('category-in-view')
            }, delay)

            categoryObserver.unobserve(category)
          }
        })
      },
      { threshold: 0.1, rootMargin: '50px 0px -50px 0px' },
    )

    // Observe solutions
    currentSolutionRefs.forEach((ref) => {
      if (ref) solutionObserver.observe(ref)
    })

    // Observe categories
    currentCategoryRefs.forEach((ref) => {
      if (ref) categoryObserver.observe(ref)
    })

    return () => {
      currentSolutionRefs.forEach((ref) => {
        if (ref) solutionObserver.unobserve(ref)
      })
      currentCategoryRefs.forEach((ref) => {
        if (ref) categoryObserver.unobserve(ref)
      })
    }
  }, [])

  // Smooth scroll to section
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <>
      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in {
          opacity: 0;
          animation: fadeIn 0.8s ease-out forwards;
        }

        .solution-card {
          opacity: 0;
          transform: translateY(50px);
          transition: all 0.7s ease-out;
        }

        .solution-card.animate-in {
          opacity: 1;
          transform: translateY(0);
        }

        /* Category animations */
        .category-slide {
          opacity: 1;
          will-change: transform, opacity;
          transition: all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94);
          transform: translateZ(0);
        }

        .category-slide-from-left {
          opacity: 0.3;
          transform: translateX(-100px) scale(0.95) translateZ(0);
        }

        .category-slide-from-left.category-in-view {
          opacity: 1;
          transform: translateX(0) scale(1) translateZ(0);
        }

        .category-slide-from-right {
          opacity: 0.3;
          transform: translateX(100px) scale(0.95) translateZ(0);
        }

        .category-slide-from-right.category-in-view {
          opacity: 1;
          transform: translateX(0) scale(1) translateZ(0);
        }

        .category-overlay-fade {
          opacity: 0.8;
          will-change: opacity;
          transition: opacity 0.6s ease-out;
        }

        .category-slide.category-in-view .category-overlay-fade {
          opacity: 1;
          transition-delay: 0.1s;
        }

        .category-content-reveal {
          opacity: 0.5;
          will-change: transform, opacity;
          transition: all 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        }

        .category-slide-from-left .category-content-reveal {
          transform: translateX(-30px) translateZ(0);
        }

        .category-slide-from-right .category-content-reveal {
          transform: translateX(30px) translateZ(0);
        }

        .category-slide.category-in-view .category-content-reveal {
          opacity: 1;
          transform: translateX(0) translateZ(0);
          transition-delay: 0.2s;
        }

        .category-title-animate {
          opacity: 0.6;
          transform: translateY(20px) translateZ(0);
          will-change: transform, opacity;
          transition: all 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        }

        .category-subtitle-animate {
          opacity: 0.6;
          transform: translateY(15px) translateZ(0);
          will-change: transform, opacity;
          transition: all 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        }

        .category-description-animate {
          opacity: 0.6;
          transform: translateY(15px) translateZ(0);
          will-change: transform, opacity;
          transition: all 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        }

        .category-button-animate {
          opacity: 0.6;
          transform: translateY(15px) translateZ(0);
          will-change: transform, opacity;
          transition: all 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        }

        .category-slide.category-in-view .category-title-animate {
          opacity: 1;
          transform: translateY(0) translateZ(0);
          transition-delay: 0.3s;
        }

        .category-slide.category-in-view .category-subtitle-animate {
          opacity: 1;
          transform: translateY(0) translateZ(0);
          transition-delay: 0.4s;
        }

        .category-slide.category-in-view .category-description-animate {
          opacity: 1;
          transform: translateY(0) translateZ(0);
          transition-delay: 0.5s;
        }

        .category-slide.category-in-view .category-button-animate {
          opacity: 1;
          transform: translateY(0) translateZ(0);
          transition-delay: 0.6s;
        }

        /* Fallback for when animations don't work */
        .category-slide {
          min-height: 70vh;
          display: flex;
          align-items: center;
        }

        /* Mobile responsiveness */
        @media (max-width: 768px) {
          .category-slide {
            opacity: 1;
            transform: none;
            will-change: opacity;
          }

          .category-slide-from-left,
          .category-slide-from-right {
            opacity: 1;
            transform: none;
          }

          .category-slide-from-left.category-in-view,
          .category-slide-from-right.category-in-view {
            opacity: 1;
            transform: none;
          }

          .category-slide-from-left .category-content-reveal,
          .category-slide-from-right .category-content-reveal {
            opacity: 1;
            transform: none;
          }

          .category-slide.category-in-view .category-content-reveal {
            opacity: 1;
            transform: none;
          }

          .category-title-animate,
          .category-subtitle-animate,
          .category-description-animate,
          .category-button-animate {
            opacity: 1;
            transform: none;
          }

          .category-slide.category-in-view .category-title-animate {
            transition-delay: 0.2s;
          }

          .category-slide.category-in-view .category-subtitle-animate {
            transition-delay: 0.25s;
          }

          .category-slide.category-in-view .category-description-animate {
            transition-delay: 0.3s;
          }

          .category-slide.category-in-view .category-button-animate {
            transition-delay: 0.35s;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .category-slide,
          .category-content-reveal,
          .category-title-animate,
          .category-subtitle-animate,
          .category-description-animate,
          .category-button-animate {
            opacity: 1 !important;
            transform: none !important;
            transition-duration: 0.01s !important;
            transition-delay: 0s !important;
          }
        }
      `}</style>

      <div className="">
        {/* Hero section with background image */}
        <section className="relative w-full h-screen flex items-center justify-start overflow-hidden">
          <motion.div
            initial={{ scale: 1.1 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1.5, ease: 'easeOut' }}
            className="w-full h-full"
          >
            <Image
              src="/images/solution.jpg"
              alt="SIRA Hero"
              fill
              className="object-cover w-full h-full"
              priority
              quality={100}
            />
          </motion.div>
          <div className="absolute inset-0  bg-opacity-40 flex items-center">
            <div className="max-w-4xl px-10 space-y-6">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-lg md:text-xl text-gray-100 max-w-3xl leading-relaxed"
              >
                <span className="block text-white">Security </span>
                <span className="block text-red-500"> Solutions</span>
              </motion.h1>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.8 }}
                className="text-base md:text-lg text-gray-100 max-w-3xl leading-snug"
              >
                Trusted by businesses across Dubai, we specialize in expert security system
                installations that are fully compliant with SIRA regulations—ensuring your property
                is protected, secure, and future-ready.
              </motion.p>

              <motion.div
                className="flex flex-wrap gap-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              ></motion.div>
            </div>
          </div>
        </section>

        {/* Introduction */}
        <motion.section
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="py-16 bg-gray-50"
        >
          <div className="container mx-auto px-6">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
                Complete Security Solutions
              </h2>
              <p className="text-lg text-gray-700 mb-8">
                Dahua-Dubai offers industry-leading security solutions for various sectors across
                Dubai UAE & Middle East. Our tailored systems are designed to address the unique
                security challenges of each industry.
              </p>
            </div>
          </div>
        </motion.section>

        {/* Solutions Section */}
        <section id="solutions" className="py-16 bg-white">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold mb-6">
                <span className="text-gray-900">Industry&nbsp;</span>
                <span className="text-red-600">Solutions</span>
              </h2>
              <p className="text-lg text-gray-600 mx-auto">
                Discover our specialized security solutions designed for different industries
              </p>
            </div>
            <div className="w-full flex flex-col gap-8">
              {solutionsData.map((solution, index) => (
                <div
                  key={solution.id}
                  id={solution.id}
                  ref={(el) => {
                    solutionRefs.current[index] = el
                    categoryRefs.current[index] = el
                  }}
                  className={`relative bg-cover bg-center h-[70vh] w-full category-slide ${
                    solution.alignLeft ? 'category-slide-from-left' : 'category-slide-from-right'
                  }`}
                  style={{
                    backgroundImage: `url('${solution.image}')`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                  }}
                  data-category-index={index}
                >
                  <div
                    className={`absolute inset-0 category-overlay-fade ${
                      solution.alignLeft
                        ? 'bg-gradient-to-r from-black/70 to-transparent'
                        : 'bg-gradient-to-l from-black/70 to-transparent'
                    }`}
                  ></div>
                  <div
                    className={`absolute inset-0 flex flex-col justify-center px-6 md:px-12 text-white category-content-reveal ${
                      solution.alignLeft ? 'items-start' : 'items-end text-right'
                    }`}
                  >
                    <div className={`max-w-lg ${solution.alignLeft ? '' : 'text-right'}`}>
                      <h2 className="text-3xl md:text-6xl font-bold mb-3 drop-shadow-lg category-title-animate">
                        <span className="text-white">
                          {solution.title.split(' ').slice(0, 1).join(' ')}{' '}
                        </span>
                        <span className="text-red-600">
                          {solution.title.split(' ').slice(1).join(' ')}
                        </span>
                      </h2>
                      <p className="text-lg md:text-xl mb-3 text-gray-200 category-subtitle-animate">
                        {solution.subtitle}
                      </p>
                      <p className="text-sm md:text-base mb-6 opacity-90 leading-relaxed text-gray-300 category-description-animate">
                        {solution.description}
                      </p>
                      <div className="group inline-block">
                        <Link
                          href={solution.buttonLink}
                          className="group inline-flex items-center text-cyan-300 text-lg font-medium transition-all duration-300 hover:text-red-600 category-button-animate"
                        >
                          <motion.span
                            key={`solution-cta-${solution.id}`}
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: 10 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            className="transition-colors duration-300 group-hover:text-red-600"
                          >
                            {solution.buttonText}
                          </motion.span>
                          <motion.span className="ml-2 text-lg transition-all duration-300 group-hover:translate-x-1 group-hover:text-red-600">
                            &rarr;
                          </motion.span>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </>
  )
}
