'use client'

import Image from 'next/image'
import Link from 'next/link'

export default function BuildingSolutionPage() {
  return (
    <div className="pt-0 bg-gray-50 min-h-screen">
      {/* Hero Section - Full Screen, No Overlay */}
      <section className="relative w-full h-screen flex items-center justify-center">
        <Image
          src="/images/buildsec.webp"
          alt="Building Security Solution"
          fill
          className="object-cover w-full h-full"
          priority
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
          <h1 className="text-4xl md:text-6xl font-extrabold text-white drop-shadow-lg tracking-tight mb-4">
            Building Security Solutions
          </h1>
          <p className="text-lg md:text-2xl text-white font-medium max-w-2xl mx-auto drop-shadow">
            Integrated surveillance, access control, and alarms for modern buildings.
          </p>
        </div>
      </section>

      {/* Solution Details */}
      <section className="container mx-auto px-4 py-12">
        <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12 flex flex-col md:flex-row gap-8 items-center">
          <div className="flex-1">
            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-blue-900">Solution Details</h2>
            <p className="text-gray-700 mb-4">
              Dahua’s Building Security Solution integrates advanced video surveillance, access control, and alarm systems to provide a safe and intelligent environment for residents, visitors, and property managers.
            </p>
            <ul className="list-disc ml-6 text-gray-700 space-y-2">
              <li>24/7 video monitoring of entrances, lobbies, and perimeters</li>
              <li>Smart access control for residents, staff, and visitors</li>
              <li>Integrated fire and intrusion alarms</li>
              <li>Remote management via mobile and web</li>
              <li>AI-powered analytics for real-time alerts</li>
            </ul>
          </div>
          <div className="flex-1 flex justify-center">
            <Image
              src="/images/building.webp"
              alt="Building Security Details"
              width={400}
              height={260}
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
                AI-powered Face Recognition & Video Analytics
              </li>
              <li className="flex items-center">
                <span className="bg-white/20 rounded-full p-2 mr-3">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 11c0-1.104.896-2 2-2s2 .896 2 2-.896 2-2 2-2-.896-2-2zm0 0V7m0 4v4m0 0a4 4 0 100-8 4 4 0 000 8z" />
                  </svg>
                </span>
                Smart Access Control & Visitor Management
              </li>
              <li className="flex items-center">
                <span className="bg-white/20 rounded-full p-2 mr-3">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7v4a1 1 0 001 1h3m10-5v4a1 1 0 01-1 1h-3m-4 4h4m-2 0v4" />
                  </svg>
                </span>
                Integrated Alarm & Fire Detection Systems
              </li>
              <li className="flex items-center">
                <span className="bg-white/20 rounded-full p-2 mr-3">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A2 2 0 0020 6.382V5a2 2 0 00-2-2H6a2 2 0 00-2 2v1.382a2 2 0 00.447 1.342L9 10m6 0v4m0 0a2 2 0 11-4 0v-4" />
                  </svg>
                </span>
                Mobile App & Remote Monitoring
              </li>
            </ul>
          </div>
          <div className="flex-1 flex justify-center">
            <Image
              src="/images/keytech.avif"
              alt="Key Technology"
              width={400}
              height={260}
              className="rounded-xl shadow-md object-cover"
            />
          </div>
        </div>
      </section>

      {/* System Structure */}
      <section className="container mx-auto px-4 py-12">
        <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-blue-900">System Structure</h2>
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="flex-1">
              <Image
                src="/images/system.png"
                alt="System Structure"
                width={500}
                height={320}
                className="rounded-xl shadow-md object-contain bg-gray-100"
              />
            </div>
            <div className="flex-1">
              <ul className="list-disc ml-6 text-gray-700 space-y-2">
                <li>Entrance: Face recognition camera, access control terminal</li>
                <li>Lobby: Video intercom, visitor management</li>
                <li>Perimeter: Smart cameras, intrusion detection</li>
                <li>Parking: ANPR camera, barrier control</li>
                <li>Control Room: NVR, management software, alarm panel</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="container mx-auto px-4 py-12">
        <div className="bg-gradient-to-r from-blue-700 to-blue-400 rounded-2xl p-10 text-center shadow-lg">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Secure Your Building with Dahua
          </h2>
          <p className="text-white mb-6">
            Contact our experts for a customized building security solution.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-blue-700 text-white font-bold px-8 py-3 rounded-lg shadow transition
              hover:bg-gradient-to-r hover:from-blue-700 hover:to-blue-400"
          >
            Get Free Consultation
          </Link>
        </div>
      </section>
    </div>
  )
}