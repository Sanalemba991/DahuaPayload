'use client'
import Image from 'next/image'
import { useEffect, useState, useRef } from 'react'

export default function AboutPage() {
  const [isVisible, setIsVisible] = useState(false)
  const [typedText, setTypedText] = useState(['', '', ''])
  const sectionRef = useRef(null)

  const texts = [
    'Founded in 2015, Imou is a commercial smart home product provider that aims at the smart IoT market for global consumers.',
    "With more than 1,000 employees worldwide and over 60% R&D personnel engaged in the professional technical team, Imou has applied for over 100 technology patents. Imou's great technological achievements have gradually helped it get recognized by users all around the world. Up to 2022, Imou has scaled its products to more than 25 million users in over 100 countries around the world.",
    'With the support of Imou AI ability and cloud platform, we structured 4 visual-sense centerd product lines: Imou Security, Imou Robots, Imou Lights, and Imou Link. Imou is devoting itself to provide diversified solutions according to different usage scenarios, creating a more convenient and efficient experience for smart product users.',
  ]

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
  return (
    <div className="pt-[80px] bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <section className="relative w-full h-screen flex items-center justify-center mb-10">
        <Image
          src="/images/about.webp" // <-- Replace with your hero image path
          alt="About Dahua Dubai"
          fill
          className="object-cover w-full h-full"
          priority
        />
        {/* Reduced overlay opacity and added gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/20 via-black/30 to-black/20 flex flex-col items-center justify-center text-center">
          <h1
            className="text-white text-4xl md:text-5xl font-bold drop-shadow-lg mb-2"
            style={{ textShadow: '2px 2px 8px #000' }}
          >
            About Us
          </h1>
          <p
            className="text-white text-lg max-w-2xl mx-auto drop-shadow"
            style={{ textShadow: '1px 1px 6px #000' }}
          >
            Your trusted Dahua distributor and security solutions partner in Dubai.
          </p>
        </div>
      </section>

      {/* Company Information Section */}
      <section ref={sectionRef} className="bg-black text-white py-10 px-4">
        <div className="max-w-6xl mx-auto">
          {/* Company Logo */}
          <div
            className={`flex justify-center mb-4 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
          >
            <div className="text-orange-500 text-2xl font-bold">imou</div>
          </div>

          {/* Company Description */}
          <div className="text-center max-w-4xl mx-auto">
            <p
              className={`text-xs leading-relaxed mb-3 min-h-[3rem] transition-all duration-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
            >
              {typedText[0]}
              <span
                className={`${typedText[0].length < texts[0].length ? 'animate-pulse' : 'opacity-0'}`}
              >
                |
              </span>
            </p>

            <p
              className={`text-xs leading-relaxed mb-3 min-h-[6rem] transition-all duration-500 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
            >
              {typedText[1]}
              <span
                className={`${typedText[1].length < texts[1].length && typedText[0].length === texts[0].length ? 'animate-pulse' : 'opacity-0'}`}
              >
                |
              </span>
            </p>

            <p
              className={`text-xs leading-relaxed min-h-[6rem] transition-all duration-500 delay-600 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
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

      {/* Compact Core Values Section */}
      {/* Compact Core Values Section */}
      {/* Compact Core Values Section */}
      <section className="bg-gray-100 py-10 px-4">
        <div className="max-w-4xl mx-auto">
          {/* Core Value */}
          <div className="flex flex-col lg:flex-row items-center mb-10 bg-white rounded-2xl shadow-lg overflow-hidden">
            <div className="lg:w-1/2 p-6 flex flex-col justify-center">
              <h2 className="text-2xl font-bold text-gray-900 mb-3">Core Value</h2>
              <p className="text-gray-700 text-sm leading-relaxed">
                Imou protects your home and loved ones.
              </p>
            </div>
            <div className="lg:w-1/2 relative min-h-[200px]">
              <img
                src="https://picsum.photos/400/200?random=1"
                alt="Smart home security"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Vision */}
          <div className="flex flex-col lg:flex-row-reverse items-center mb-10 bg-white rounded-2xl shadow-lg overflow-hidden">
            <div className="lg:w-1/2 p-6 flex flex-col justify-center text-center lg:text-left">
              <h2 className="text-2xl font-bold text-gray-900 mb-3">Vision</h2>
              <p className="text-gray-700 text-sm leading-relaxed">
                Let people enjoy smart life with convenience and safety.
              </p>
            </div>
            <div className="lg:w-1/2 relative min-h-[200px]">
              <img
                src="https://picsum.photos/400/200?random=2"
                alt="Smart technology"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Mission */}
          <div className="flex flex-col lg:flex-row items-center bg-white rounded-2xl shadow-lg overflow-hidden">
            <div className="lg:w-1/2 p-6 flex flex-col justify-center">
              <h2 className="text-2xl font-bold text-gray-900 mb-3">Mission</h2>
              <div className="text-gray-700 text-sm leading-relaxed space-y-2">
                <p>Provide consumers with first-class products and services.</p>
                <p>Provide employees with an atmosphere of innovation and mutual respect.</p>
                <p>Provide partners with a fair and mutually beneficial cooperation platform.</p>
              </div>
            </div>
            <div className="lg:w-1/2 relative min-h-[200px]">
              <img
                src="https://picsum.photos/400/200?random=3"
                alt="Innovation and partnership"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
