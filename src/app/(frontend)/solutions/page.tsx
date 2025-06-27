'use client'

import React, { useEffect, useRef } from 'react'
import Link from 'next/link'
import Image from 'next/image'

const solutionsData = [
  {
    id: 'building',
    title: 'Building Security',
    description:
      'Comprehensive security solutions for residential and commercial buildings with smart access control systems.',
    image: '/images/building.webp',
  },
  {
    id: 'banking',
    title: 'Banking & Finance',
    description:
      'Advanced security solutions for banks and financial institutions with AI-powered threat detection.',
    image: '/images/banking.webp',
  },
  {
    id: 'retail',
    title: 'Retail Security',
    description:
      'Smart retail solutions for loss prevention, customer analytics, and inventory management systems.',
    image: '/images/retail.jpg',
  },
  {
    id: 'transportation',
    title: 'Transportation',
    description:
      'Intelligent transportation systems for airports, railways, and highways with traffic monitoring.',
    image: '/images/transport.webp',
  },
  {
    id: 'government',
    title: 'Government & Public Safety',
    description:
      'Comprehensive public safety solutions for cities and government facilities with smart integration.',
    image: '/images/safety.webp',
  },
]

export default function SolutionsPage() {
  const solutionRefs = useRef<(HTMLDivElement | null)[]>([])
  useEffect(() => {
    const currentRefs = solutionRefs.current // Capture refs

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-in')
          }
        })
      },
      { threshold: 0.2 },
    )

    currentRefs.forEach((ref) => {
      if (ref) observer.observe(ref)
    })

    return () => {
      currentRefs.forEach((ref) => {
        if (ref) observer.unobserve(ref)
      })
    }
  }, [])

  // useEffect(() => {

  //   const observer = new IntersectionObserver(
  //     (entries) => {
  //       entries.forEach((entry) => {
  //         if (entry.isIntersecting) {
  //           entry.target.classList.add('animate-in')
  //         }
  //       })
  //     },
  //     { threshold: 0.2 },
  //   )

  //   // Observe all solution cards
  //   solutionRefs.current.forEach((ref) => {
  //     if (ref) observer.observe(ref)
  //   })

  //   return () => {
  //     solutionRefs.current.forEach((ref) => {
  //       if (ref) observer.unobserve(ref)
  //     })
  //   }
  // }, [])

  return (
    <>
      <div className="pt-[80px]">
        {/* Top Banner Image */}
        <div className="relative w-full h-[320px] md:h-[420px]">
          <Image
            src="/images/solution.jpg"
            alt="Dahua Solutions Banner"
            fill
            className="object-cover w-full h-full"
            priority
          />
          <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/40">
            <h1 className="text-white text-4xl md:text-5xl font-bold drop-shadow-lg">
              Dahua Solutions
            </h1>
            <p className="text-white text-lg mt-2 drop-shadow">Your Security, Our Priority</p>
          </div>
        </div>
        {/* Hero section with background image */}
        <section
          className="relative h-[70vh] min-h-[500px] bg-center bg-cover bg-no-repeat"
          style={{ backgroundImage: 'url("/images/solution.jpg")' }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-60">
            <div className="container mx-auto h-full flex flex-col items-center justify-center px-6 text-white text-center">
              <h1
                className="text-4xl md:text-6xl font-bold mb-6 opacity-0 animate-fade-in"
                style={{
                  animation: 'fadeIn 0.8s ease-out 0.2s forwards',
                }}
              >
                Security Solutions
              </h1>
              <p
                className="text-xl max-w-3xl opacity-0 animate-fade-in"
                style={{
                  animation: 'fadeIn 0.8s ease-out 0.5s forwards',
                }}
              >
                Comprehensive security solutions tailored for every industry. Protecting what
                matters most with cutting-edge technology.
              </p>
              <div className="flex flex-wrap justify-center gap-3 mt-10">
                {solutionsData.map((solution, index) => (
                  <Link
                    href={`#${solution.id}`}
                    key={solution.id}
                    className="bg-white/20 px-5 py-2 rounded-full text-white font-medium shadow-lg opacity-0 hover:scale-105 transition-all duration-300"
                    style={{
                      animation: `fadeIn 0.5s ease-out ${0.7 + index * 0.1}s forwards`,
                    }}
                  >
                    {solution.title}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>
        {/* Introduction */}
        <section className="py-16 bg-gray-50">
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
        </section>
        {/* Solutions Section */}
        <section className="py-16">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              {solutionsData.map((solution, index) => (
                <div
                  id={solution.id}
                  key={solution.id}
                  ref={(el) => {
                    solutionRefs.current[index] = el
                  }}
                  className={`transform opacity-0 translate-y-12 solution-card transition-all duration-700 ease-out`}
                >
                  <div className="bg-white rounded-xl shadow-xl overflow-hidden h-full flex flex-col">
                    {/* Card Header with Image */}
                    <div className="h-64 relative bg-gray-200">
                      <Image
                        src={solution.image}
                        alt={solution.title}
                        fill
                        className="object-cover w-full h-full"
                        priority={index < 2}
                      />
                    </div>

                    {/* Card Content */}
                    <div className="p-5">
                      <h3 className="text-2xl font-bold mb-2 text-gray-900">{solution.title}</h3>
                      <p className="text-gray-700">{solution.description}</p>
                    </div>
                    {/* Card Footer */}
                    <div className="p-4 border-t border-gray-100">
                      <Link
                        href={`/solutions/${solution.id}`}
                        className="inline-flex items-center font-semibold text-sm transition-colors duration-300 text-blue-600 hover:text-blue-800"
                      >
                        Learn more about {solution.title}
                        <svg
                          className="ml-2 w-4 h-4"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M14 5l7 7m0 0l-7 7m7-7H3"
                          />
                        </svg>
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        {/* Why Choose Dahua */}
        <section className="py-20 bg-gradient-to-br from-gray-900 to-blue-900 text-white">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Why Choose Dahua Solutions?</h2>
              <p className="text-xl text-blue-100 max-w-3xl mx-auto">
                We combine industry expertise with cutting-edge technology to deliver security
                solutions that protect what matters most to your business.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-black bg-opacity-10 backdrop-blur-sm rounded-xl p-8 transform hover:translate-y-[-8px] transition-transform duration-300">
                <div className="w-16 h-16 bg-red-500 rounded-full flex items-center justify-center mb-6">
                  <svg
                    className="w-8 h-8 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-4">Advanced Technology</h3>
                <p className="text-blue-100">
                  State-of-the-art AI-powered security systems with continuous innovation and
                  upgrades.
                </p>
              </div>

              <div className="bg-black bg-opacity-10 backdrop-blur-sm rounded-xl p-8 transform hover:translate-y-[-8px] transition-transform duration-300">
                <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mb-6">
                  <svg
                    className="w-8 h-8 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-4">Expert Support Team</h3>
                <p className="text-blue-100">
                  Dedicated support team in Dubai with deep understanding of regional requirements.
                </p>
              </div>

              <div className="bg-black bg-opacity-10 backdrop-blur-sm rounded-xl p-8 transform hover:translate-y-[-8px] transition-transform duration-300">
                <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mb-6">
                  <svg
                    className="w-8 h-8 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-4">Customized Solutions</h3>
                <p className="text-blue-100">
                  Tailored security systems designed to meet your specific industry requirements.
                </p>
              </div>
            </div>
          </div>
        </section>
        {/* CTA Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-6">
            <div className="max-w-5xl mx-auto bg-gradient-to-r from-black to-red-700 rounded-2xl p-12 shadow-2xl text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
                Ready to Secure Your Business?
              </h2>
              <p className="text-xl mb-10 text-white text-opacity-90">
                Contact our team of experts for a personalized security solution tailored to your
                needs.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Link
                  href="/technologies"
                  className="border-2 border-white text-white font-bold py-4 px-8 rounded-lg hover:bg-black hover:text-red-600 transform hover:scale-105 transition-all n-duratio300"
                >
                  Get a Free Consultation
                </Link>
                <Link
                  href="/technologies"
                  className="border-2 border-white text-white font-bold py-4 px-8 rounded-lg hover:bg-black hover:text-red-600 transform hover:scale-105 transition-all duration-300"
                >
                  Explore Technologies;
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
      {/* Custom Styles for Animations */}
      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
        .solution-card.animate-in {
          opacity: 1;
          transform: translateY(0) translateX(0);
        }
      `}</style>{' '}
    </>
  )
}
