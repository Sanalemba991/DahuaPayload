'use client'
import Image from 'next/image'
import { useEffect, useState, useRef } from 'react'
import { motion, AnimatePresence, useInView } from 'framer-motion'
export default function AboutPage() {
  const [isVisible, setIsVisible] = useState(false)
  const [typedText, setTypedText] = useState(['', '', ''])
  const [visibleCards, setVisibleCards] = useState({
    coreValue: false,
    vision: false,
    mission: false,
  })
  const [heroVisible, setHeroVisible] = useState(false)
  const lineVariants = {
    hidden: { width: 0 },
    visible: {
      width: '6rem',
      transition: {
        duration: 0.5, // faster
        ease: [0.25, 0.46, 0.45, 0.94],
        delay: 0, // no delay
      },
    },
  }
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, {
    once: true,
    amount: 0.3,
    margin: '0px 0px -100px 0px',
  })

  const heroRef = useRef(null)
  const coreValueRef = useRef(null)
  const visionRef = useRef(null)
  const missionRef = useRef(null)

  const texts = [
    'Established in 2015, Dahua serves as a leading provider of smart home solutions, focusing on the global smart IoT market for consumers worldwide.',
    'Employing over 1,000 professionals across the globe — with more than 60% dedicated to R&D — Dahua has filed over 100 technology patents. These innovations have earned the company global recognition, and by 2022, Dahua’s products have reached over 25 million users across more than 100 countries.',
    'Leveraging Dahua’s AI capabilities and cloud-based platform, we’ve developed four visually focused product lines: Dahua Security, Dahua Robots, Dahua Lights, and Dahua Link. Dahua is committed to delivering diverse solutions tailored to various application scenarios, offering smart users a more seamless, intelligent experience.',
  ]

  // Hero banner animation observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHeroVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    if (heroRef.current) {
      observer.observe(heroRef.current)
    }

    return () => observer.disconnect()
  }, [])

  // Imou section animation observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.3 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (isVisible) {
      const typeText = async () => {
        for (let i = 0; i < texts.length; i++) {
          const text = texts[i]
          for (let j = 0; j <= text.length; j++) {
            await new Promise((resolve) => setTimeout(resolve, 30))
            setTypedText((prev) => {
              const newTyped = [...prev]
              newTyped[i] = text.substring(0, j)
              return newTyped
            })
          }
          await new Promise((resolve) => setTimeout(resolve, 500))
        }
      }
      typeText()
    }
  }, [isVisible])

  // Animation observer for core values section
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const cardName = entry.target.getAttribute('data-card') as
              | 'coreValue'
              | 'vision'
              | 'mission'
              | null
            if (cardName) {
              // Add staggered delay for each card
              const delays: { [key in 'coreValue' | 'vision' | 'mission']: number } = {
                coreValue: 0,
                vision: 300,
                mission: 600,
              }

              setTimeout(() => {
                setVisibleCards((prev) => ({
                  ...prev,
                  [cardName]: true,
                }))
              }, delays[cardName])
            }
          }
        })
      },
      {
        threshold: 0.2,
        rootMargin: '-50px',
      },
    )

    const cards = [coreValueRef.current, visionRef.current, missionRef.current]
    cards.forEach((card) => {
      if (card) observer.observe(card)
    })

    return () => observer.disconnect()
  }, [])

  return (
    <div className=" bg-gray-50 min-h-screen">
    
      {/* Hero Section */}
      <section
        ref={heroRef}
        className={`relative w-full h-screen flex items-center justify-center transition-all duration-1000 ease-out ${
          heroVisible ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-8'
        }`}
      >
        <Image
          src="/images/about.webp"
          alt="About Dahua Dubai"
          fill
          className="object-cover w-full h-full"
          priority
        />
        {/* Enhanced overlay with smooth transition */}
        <div
          className={`absolute inset-0 bg-gradient-to-r from-black/20 via-black/30 to-black/20 flex flex-col items-center justify-center text-center transition-all duration-1500 ease-out ${
            heroVisible
              ? 'opacity-100 transform translate-y-0'
              : 'opacity-0 transform translate-y-12'
          }`}
        >
          <h1
            className={`text-white text-4xl md:text-5xl font-bold drop-shadow-lg mb-2 transition-all duration-1000 delay-300 ease-out ${
              heroVisible
                ? 'opacity-100 transform translate-y-0 scale-100'
                : 'opacity-0 transform translate-y-8 scale-95'
            } text-center`}
            style={{ textShadow: '2px 2px 8px #000' }}
          >
            About Us
          </h1>
          <motion.div
            variants={lineVariants}
            initial="hidden"
            animate={heroVisible ? 'visible' : 'hidden'}
            className="h-1 bg-red-600 mx-auto"
          />
          <div></div>
          <p
            className={`text-white text-lg max-w-2xl mx-auto drop-shadow transition-all duration-1000 delay-500 ease-out ${
              heroVisible
                ? 'opacity-100 transform translate-y-0'
                : 'opacity-0 transform translate-y-8'
            }`}
            style={{ textShadow: '1px 1px 6px #000' }}
          >
            Your trusted Dahua distributor and security solutions partner in Dubai.
          </p>
        </div>
      </section>

      {/* Small gap between hero and company info */}

      {/* Company Information Section */}
      <section
        ref={sectionRef}
        className="text-black py-12 px-4 bg-cover bg-center"
        style={{ backgroundImage: "url('/your-image-path.jpg')" }}
      >
        <div className="max-w-6xl mx-auto">
          {/* Company Logo */}
          <div
            className={`flex justify-center mb-6 transition-all duration-1000 ease-out ${
              isVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-8 scale-95'
            }`}
          >
            <img src="/images/dahualogo-removebg-preview.png.png" className="h-10 w-auto" />
          </div>

          {/* Company Description */}
          <div className="text-center max-w-4xl mx-auto">
            <p
              className={`text-sm leading-relaxed mb-4 min-h-[3rem] transition-all duration-500 ease-out ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
            >
              {typedText[0]}
              <span
                className={`${typedText[0].length < texts[0].length ? 'animate-pulse' : 'opacity-0'}`}
              >
                |
              </span>
            </p>

            <p
              className={`text-sm leading-relaxed mb-4 min-h-[6rem] transition-all duration-500 delay-300 ease-out ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
            >
              {typedText[1]}
              <span
                className={`${typedText[1].length < texts[1].length && typedText[0].length === texts[0].length ? 'animate-pulse' : 'opacity-0'}`}
              >
                |
              </span>
            </p>

            <p
              className={`text-sm leading-relaxed min-h-[6rem] transition-all duration-500 delay-600 ease-out ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
            >
              {typedText[2]}
              <span
                className={`${typedText[2].length < texts[2].length && typedText[1].length === texts[1].length ? 'animate-pulse' : 'opacity-0'}`}
              >
                |
              </span>
            </p>
          </div>
        </div>
      </section>

      {/* Medium gap between company info and core values */}
      <div className="h-12"></div>

      {/* Animated Core Values Section */}
      <section className="bg-gray-50 py-8 px-4">
        <div className="max-w-3xl mx-auto">
          {/* Core Value */}
          <div
            ref={coreValueRef}
            data-card="coreValue"
            className={`flex flex-col lg:flex-row items-center mb-8 bg-white rounded-xl shadow-lg overflow-hidden transform transition-all duration-1000 ease-out ${
              visibleCards.coreValue
                ? 'opacity-100 translate-y-0 scale-100'
                : 'opacity-0 translate-y-12 scale-95'
            }`}
          >
            <div
              className={`lg:w-1/2 p-6 flex flex-col justify-center transform transition-all duration-1200 delay-200 ease-out ${
                visibleCards.coreValue ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
              }`}
            >
              <h2 className="text-xl text-center font-[HarmonyOS_Medium] font-normal text-gray-900 mb-3">
                Core Value
              </h2>
              <p className="text-gray-700 text-base leading-relaxed">
                Dahua protects your home and loved ones.
              </p>
            </div>
            <div
              className={`lg:w-1/2 relative h-[280px] transform transition-all duration-1200 delay-400 ease-out ${
                visibleCards.coreValue
                  ? 'opacity-100 translate-x-0 scale-100'
                  : 'opacity-0 translate-x-8 scale-105'
              }`}
            >
              <img
                src="https://picsum.photos/400/280?random=1"
                alt="Smart home security"
                className="w-full h-full object-cover absolute inset-0 transition-transform duration-700 hover:scale-105"
              />
            </div>
          </div>

          {/* Vision */}
          <div
            ref={visionRef}
            data-card="vision"
            className={`flex flex-col lg:flex-row-reverse items-center mb-8 bg-white rounded-xl shadow-lg overflow-hidden transform transition-all duration-1000 ease-out ${
              visibleCards.vision
                ? 'opacity-100 translate-y-0 scale-100'
                : 'opacity-0 translate-y-12 scale-95'
            }`}
          >
            <div
              className={`lg:w-1/2 p-6 flex flex-col justify-center text-center lg:text-left transform transition-all duration-1200 delay-200 ease-out ${
                visibleCards.vision ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
              }`}
            >
              <h2 className="text-xl text-center font-[HarmonyOS_Medium] font-normal text-gray-900 mb-3">
                Vision
              </h2>
              <p className="text-gray-700 text-base leading-relaxed">
                Let people enjoy smart life with convenience and safety.
              </p>
            </div>
            <div
              className={`lg:w-1/2 relative h-[280px] transform transition-all duration-1200 delay-400 ease-out ${
                visibleCards.vision
                  ? 'opacity-100 translate-x-0 scale-100'
                  : 'opacity-0 -translate-x-8 scale-105'
              }`}
            >
              <img
                src="https://picsum.photos/400/280?random=2"
                alt="Smart technology"
                className="w-full h-full object-cover absolute inset-0 transition-transform duration-700 hover:scale-105"
              />
            </div>
          </div>

          {/* Mission */}
          <div
            ref={missionRef}
            data-card="mission"
            className={`flex flex-col lg:flex-row items-center bg-white rounded-xl shadow-lg overflow-hidden transform transition-all duration-1000 ease-out ${
              visibleCards.mission
                ? 'opacity-100 translate-y-0 scale-100'
                : 'opacity-0 translate-y-12 scale-95'
            }`}
          >
            <div
              className={`lg:w-1/2 p-6 flex flex-col justify-center transform transition-all duration-1200 delay-200 ease-out ${
                visibleCards.mission ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
              }`}
            >
              <h2 className="text-xl text-center font-[HarmonyOS_Medium] font-normal text-gray-900 mb-3">
                Mission
              </h2>
              <div className="text-gray-700 text-base leading-relaxed space-y-2">
                <p
                  className={`transform transition-all duration-800 delay-600 ease-out ${
                    visibleCards.mission ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                  }`}
                >
                  Provide consumers with first-class products and services.
                </p>
                <p
                  className={`transform transition-all duration-800 delay-800 ease-out ${
                    visibleCards.mission ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                  }`}
                >
                  Provide employees with an atmosphere of innovation and mutual respect.
                </p>
                <p
                  className={`transform transition-all duration-800 delay-1000 ease-out ${
                    visibleCards.mission ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                  }`}
                >
                  Provide partners with a fair and mutually beneficial cooperation platform.
                </p>
              </div>
            </div>
            <div
              className={`lg:w-1/2 relative h-[280px] transform transition-all duration-1200 delay-400 ease-out ${
                visibleCards.mission
                  ? 'opacity-100 translate-x-0 scale-100'
                  : 'opacity-0 translate-x-8 scale-105'
              }`}
            >
              <img
                src="https://picsum.photos/400/280?random=3"
                alt="Innovation and partnership"
                className="w-full h-full object-cover absolute inset-0 transition-transform duration-700 hover:scale-105"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
