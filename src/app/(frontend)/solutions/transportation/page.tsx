'use client'

import Image from 'next/image'
import Link from 'next/link'

export default function TransportationSolutionPage() {
  return (
    <div className="pt-[80px] bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <section className="relative w-full h-screen flex items-center justify-center">
        <Image
          src="/images/wzmind.webp"
          alt="Transportation Security Solution"
          fill
          className="object-cover w-full h-full"
          priority
        />
        {/* Text moved to bottom of the image */}
        <div className="absolute inset-x-0 bottom-10 flex flex-col items-center justify-center text-center">
          <h1 className="text-white text-4xl md:text-5xl font-bold drop-shadow-lg mb-4">
            Transportation Security Solution
          </h1>
          <p className="text-white text-lg max-w-2xl mx-auto drop-shadow">
            Intelligent, scalable, and reliable security for airports, railways, highways, and public transport.
          </p>
        </div>
      </section>

      {/* Solution Details */}
      <section className="container mx-auto px-4 py-12">
        <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12 flex flex-col md:flex-row gap-8 items-center">
          <div className="flex-1">
            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-blue-900">Solution Details</h2>
            <p className="text-gray-700 mb-4">
              Dahua’s Transportation Security Solution delivers end-to-end protection for all types of transportation infrastructure. From real-time monitoring to AI-powered analytics, our solution ensures the safety of passengers, vehicles, and assets while optimizing traffic flow and incident response.
            </p>
            <ul className="list-disc ml-6 text-gray-700 space-y-2">
              <li>24/7 surveillance of stations, terminals, and platforms</li>
              <li>License plate recognition for vehicle access control</li>
              <li>AI-based incident detection and alerts</li>
              <li>Centralized management for multiple sites</li>
              <li>Remote monitoring via mobile and web</li>
            </ul>
          </div>
          <div className="flex-1 flex justify-center">
            <Image
              src="/images/platforms.jpg"
              alt="Transportation Security Details"
              width={700}
              height={560}
              className="rounded-xl shadow-md object-cover"
            />
          </div>
        </div>
      </section>

      {/* Key Technology */}
      <section className="container mx-auto px-4 py-12">
        <div className="bg-gradient-to-r from-blue-700 to-blue-400 rounded-2xl shadow-lg p-8 md:p-12 flex flex-col md:flex-row gap-8 items-center text-white">
          <div className="flex-1">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Key Technology</h2>
            <ul className="space-y-3">
              <li className="flex items-center">
                <span className="bg-white/20 rounded-full p-2 mr-3">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6 6 0 10-12 0v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                  </svg>
                </span>
                AI-powered Incident Detection & Video Analytics
              </li>
              <li className="flex items-center">
                <span className="bg-white/20 rounded-full p-2 mr-3">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 11c0-1.104.896-2 2-2s2 .896 2 2-.896 2-2 2-2-.896-2-2zm0 0V7m0 4v4m0 0a4 4 0 100-8 4 4 0 000 8z" />
                  </svg>
                </span>
                License Plate Recognition (ANPR)
              </li>
              <li className="flex items-center">
                <span className="bg-white/20 rounded-full p-2 mr-3">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7v4a1 1 0 001 1h3m10-5v4a1 1 0 01-1 1h-3m-4 4h4m-2 0v4" />
                  </svg>
                </span>
                Smart Traffic Flow Monitoring
              </li>
              <li className="flex items-center">
                <span className="bg-white/20 rounded-full p-2 mr-3">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A2 2 0 0020 6.382V5a2 2 0 00-2-2H6a2 2 0 00-2 2v1.382a2 2 0 00.447 1.342L9 10m6 0v4m0 0a2 2 0 11-4 0v-4" />
                  </svg>
                </span>
                Centralized Management Platform
              </li>
            </ul>
          </div>
          <div className="flex-1 flex justify-center">
            <Image
              src="/images/traffic.jpg"
              alt="Transportation Key Technology"
              width={700}
              height={560}
              className="rounded-xl shadow-md object-cover"
            />
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="container mx-auto px-4 py-12">
        <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-blue-900">
            Features of the Dahua-Dubai Transportation Solution
          </h2>
          <ul className="list-disc ml-6 text-gray-700 space-y-3">
            <li>
              <span className="font-semibold text-blue-700">High Definition:</span> 4K cameras for clear monitoring of stations, platforms, and vehicles.
            </li>
            <li>
              <span className="font-semibold text-blue-700">Incident Detection:</span> AI analytics for real-time alerts and rapid response.
            </li>
            <li>
              <span className="font-semibold text-blue-700">License Plate Recognition:</span> Automated vehicle access and parking management.
            </li>
            <li>
              <span className="font-semibold text-blue-700">Traffic Flow Monitoring:</span> Real-time analytics for congestion and safety optimization.
            </li>
            <li>
              <span className="font-semibold text-blue-700">Remote Monitoring:</span> Access live feeds and alerts from anywhere via mobile/web.
            </li>
            <li>
              <span className="font-semibold text-blue-700">Easy Integration:</span> Compatible with third-party traffic and transport systems.
            </li>
          </ul>
        </div>
      </section>

      {/* CTA */}
      <section className="container mx-auto px-4 py-12">
        <div className="bg-gradient-to-r from-blue-700 to-blue-400 rounded-2xl p-10 text-center shadow-lg">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Secure Your Transportation Network with Dahua
          </h2>
          <p className="text-white mb-6">
            Contact our experts for a customized transportation security solution.
          </p>
         <Link
          href="/contact"
          className="inline-block bg-blue-700 text-white font-bold px-8 py-3 rounded-lg shadow transition
            hover:bg-gradient-to-r hover:from-blue-700 hover:to-red-500 hover:text-white"
        >
          Get Free Consultation
        </Link>
        </div>
      </section>
    </div>
  )
}