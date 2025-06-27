'use client'

import Image from 'next/image'
import Link from 'next/link'

export default function GovernmentSolutionPage() {
  return (
    <div className="pt-[80px] bg-gray-50 min-h-screen">
      {/* Hero Section - Full Screen, No Overlay */}
      <section className="relative w-full h-screen flex items-center justify-center">
        <Image
          src="/images/solution.jpg"
          alt="Government Security Solution"
          fill
          className="object-cover w-full h-full"
          priority
        />
        <div className="absolute inset-x-0 bottom-12 flex flex-col items-center justify-end text-center">
          <h1 className="text-white text-3xl md:text-5xl font-bold drop-shadow-lg mb-2">
            Government Security Solution
          </h1>
          <p className="text-white text-base md:text-xl max-w-2xl mx-auto drop-shadow">
            Ensuring public safety and security for cities, roads, borders, and critical infrastructure.
          </p>
        </div>
      </section>

      {/* Solution Details - Six Images with Description */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-2xl md:text-3xl font-bold mb-10 text-blue-900 text-left px-2">
          Solution Details
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-2">
          <div className="bg-white rounded-xl shadow p-5 flex flex-col items-center text-center">
          <Image src="/images/CitySurveillance.webp" alt="City Surveillance" width={420} height={340} className="rounded-lg mb-4 object-cover" />
            <h3 className="font-semibold text-blue-800 mb-2">City Surveillance</h3>
            <p className="text-gray-600 text-sm">Comprehensive monitoring for urban safety and rapid incident response.</p>
          </div>
          <div className="bg-white rounded-xl shadow p-5 flex flex-col items-center text-center">
            <Image src="/images/traffic.jpg" alt="Traffic Enforcement" width={420} height={340} className="rounded-lg mb-4 object-cover" />
            <h3 className="font-semibold text-blue-800 mb-2">Traffic Enforcement</h3>
            <p className="text-gray-600 text-sm">AI-powered traffic violation detection and automated evidence collection.</p>
          </div>
          <div className="bg-white rounded-xl shadow p-5 flex flex-col items-center text-center">
            <Image src="/images/border.jpg" alt="Border Security" width={420} height={340} className="rounded-lg mb-4 object-cover" />
            <h3 className="font-semibold text-blue-800 mb-2">Border Security</h3>
            <p className="text-gray-600 text-sm">Advanced analytics for perimeter and border protection.</p>
          </div>
          <div className="bg-white rounded-xl shadow p-5 flex flex-col items-center text-center">
            <Image src="/images/Prison.jpg" alt="Prison Monitoring" width={420} height={340} className="rounded-lg mb-4 object-cover" />
            <h3 className="font-semibold text-blue-800 mb-2">Prison Monitoring</h3>
            <p className="text-gray-600 text-sm">AI alerts and surveillance for correctional facility safety.</p>
          </div>
          <div className="bg-white rounded-xl shadow p-5 flex flex-col items-center text-center">
            <Image src="/images/Command.jpg" alt="Command Center" width={420} height={340} className="rounded-lg mb-4 object-cover" />
            <h3 className="font-semibold text-blue-800 mb-2">Command Center</h3>
            <p className="text-gray-600 text-sm">Centralized management for multiple agencies and rapid coordination.</p>
          </div>
          <div className="bg-white rounded-xl shadow p-5 flex flex-col items-center text-center">
            <Image src="/images/integration.png" alt="Integration" width={420} height={340} className="rounded-lg mb-4 object-cover" />
            <h3 className="font-semibold text-blue-800 mb-2">System Integration</h3>
            <p className="text-gray-600 text-sm">Seamless connection with government databases and legacy systems.</p>
          </div>
        </div>
      </section>

      {/* System Structure - Image with Heading and Side Gaps */}
      <section className="w-full bg-white py-12">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-blue-900 text-left">
            System Structure
          </h2>
          <div className="w-full rounded-xl overflow-hidden bg-white shadow">
            <Image
              src="/images/gvmt.png"
              alt="Government System Structure"
              width={1000}
              height={500}
              className="w-full h-auto object-contain"
              priority
            />
          </div>
        </div>
      </section>

      {/* Call to Action - Secure Your Government Facilities */}
      <section className="container mx-auto px-4 py-12">
        <div className="bg-gradient-to-r from-blue-700 to-blue-400 rounded-2xl p-10 text-center shadow-lg">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">
            Secure Your Government Facilities with Dahua
          </h2>
          <Link
            href="/contact"
            className="inline-block bg-blue-700 text-white font-bold px-8 py-3 rounded-lg shadow transition hover:bg-gradient-to-r hover:from-blue-700 hover:to-blue-400"
          >
            Get Free Consultation
          </Link>
        </div>
      </section>
    </div>
  )
}