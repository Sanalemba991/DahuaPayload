'use client'

import Image from 'next/image'
import Link from 'next/link'

export default function BankingSolutionPage() {
  return (
    <div className="pt-0 bg-gray-50 min-h-screen">
      {/* Hero Section - Full Screen */}
       <section className="relative w-full h-screen flex items-center justify-center mb-10">
              <Image
                src="/images/about.webp" // <-- Replace with your hero image path
                alt="Banking Security Solution"
                fill
                className="object-cover w-full h-full"
                priority
              />
        
      </section>

      {/* Solution Details */}
      <section className="container mx-auto px-4 py-12">
        <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12 flex flex-col md:flex-row gap-8 items-center">
          <div className="flex-1">
            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-blue-900">Solution Details</h2>
            <p className="text-gray-700 mb-4">
              Dahua’s Banking & Finance Solution delivers comprehensive security for branches, ATMs, and vaults. It integrates high-definition surveillance, smart analytics, and seamless system compatibility to protect assets, staff, and customers while optimizing operations.
            </p>
            <ul className="list-disc ml-6 text-gray-700 space-y-2">
              <li>24/7 monitoring of branches, ATMs, and cash areas</li>
              <li>AI-powered threat detection and facial recognition</li>
              <li>Smart transaction recording for dispute resolution</li>
              <li>Queue management and flow statistics for better service</li>
              <li>Easy integration with third-party banking systems</li>
            </ul>
          </div>
          <div className="flex-1 flex justify-center">
            <Image
              src="/images/bnksec.png"
              alt="Banking Security Details"
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
                  {/* ...SVG icon... */}
                </span>
                AI-powered Facial Recognition & Video Analytics
              </li>
              <li className="flex items-center">
                <span className="bg-white/20 rounded-full p-2 mr-3">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 11c0-1.104.896-2 2-2s2 .896 2 2-.896 2-2 2-2-.896-2-2zm0 0V7m0 4v4m0 0a4 4 0 100-8 4 4 0 000 8z" />
                  </svg>
                </span>
                Smart Transaction Recording & ATM Monitoring
              </li>
              <li className="flex items-center">
                <span className="bg-white/20 rounded-full p-2 mr-3">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7v4a1 1 0 001 1h3m10-5v4a1 1 0 01-1 1h-3m-4 4h4m-2 0v4" />
                  </svg>
                </span>
                Queue Management & Flow Statistics
              </li>
              <li className="flex items-center">
                <span className="bg-white/20 rounded-full p-2 mr-3">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A2 2 0 0020 6.382V5a2 2 0 00-2-2H6a2 2 0 00-2 2v1.382a2 2 0 00.447 1.342L9 10m6 0v4m0 0a2 2 0 11-4 0v-4" />
                  </svg>
                </span>
                Seamless Integration with Third-Party Systems
              </li>
            </ul>
          </div>
          <div className="flex-1 flex justify-center">
            <Image
              src="/images/face.webp"
              alt="Key Technology"
              width={700}
              height={660}
              className="rounded-xl shadow-md object-cover"
            />
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="container mx-auto px-4 py-12">
        <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-blue-900">
            Features of the Dahua-Dubai Banking & Finance Solution
          </h2>
          <ul className="list-disc ml-6 text-gray-700 space-y-3">
            <li>
              <span className="font-semibold text-blue-700">High Definition:</span> 4K resolution provides high-quality images for better security monitoring.
            </li>
            <li>
              <span className="font-semibold text-blue-700">High Cost-Efficiency:</span> The multi-function product can reuse existing cables and is easy to install, significantly reducing investment costs.
            </li>
            <li>
              <span className="font-semibold text-blue-700">Flow Statistics:</span> Output traffic flow statistics within the premises, providing decision-making data for management.
            </li>
            <li>
              <span className="font-semibold text-blue-700">Integrated and Compatible:</span> End-to-end system that is compatible with third-party systems for seamless integration.
            </li>
            <li>
              <span className="font-semibold text-blue-700">Smart Transaction Recording:</span> Records transaction information and provides strong evidence in case of customer disputes or misunderstandings.
            </li>
            <li>
              <span className="font-semibold text-blue-700">Queue Management:</span> Measures and analyzes queues to improve management decisions, decrease waiting times, and enhance customer satisfaction.
            </li>
          </ul>
        </div>
      </section>

      {/* System Structure */}
      <section className="container mx-auto px-4 py-12">
        <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12 flex flex-col md:flex-row gap-8 items-center">
          <div className="flex-1">
            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-blue-900">System Structure</h2>
            <ul className="list-disc ml-6 text-gray-700 space-y-2">
              <li>Branch Entrance: Face recognition camera, access control terminal</li>
              <li>ATM Area: Smart cameras, transaction recording</li>
              <li>Lobby: Queue management, people counting</li>
              <li>Vault: Intrusion detection, 24/7 monitoring</li>
              <li>Control Room: NVR, management software, alarm panel</li>
            </ul>
          </div>
          <div className="flex-1 flex justify-center">
            <Image
              src="/images/bnksystem.png"
              alt="Banking System Structure"
              width={700}
              height={620}
              className="rounded-xl shadow-md object-contain bg-gray-100"
            />
          </div>
        </div>
      </section>

      {/* System Technology */}
      <section className="container mx-auto px-4 py-12">
        <div className="bg-gradient-to-r from-blue-700 to-blue-400 rounded-2xl shadow-lg p-8 md:p-12 flex flex-col md:flex-row gap-8 items-center text-white">
          <div className="flex-1">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">System Technology</h2>
            <ul className="space-y-3">
              <li>4K Ultra HD Cameras with Night Vision</li>
              <li>AI-based Intrusion & Threat Detection</li>
              <li>Integrated Access Control & Alarm Systems</li>
              <li>Centralized Management Platform</li>
              <li>Mobile App for Remote Monitoring</li>
              <li>Seamless Integration with Core Banking Systems</li>
            </ul>
          </div>
          <div className="flex-1 flex justify-center">
            <Image
              src="/images/nightv.webp"
              alt="System Technology"
              width={700}
              height={660}
              className="rounded-xl shadow-md object-cover"
            />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="container mx-auto px-4 py-12">
        <div className="bg-gradient-to-r from-blue-700 to-blue-400 rounded-2xl p-10 text-center shadow-lg">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Secure Your Bank with Dahua
          </h2>
          <p className="text-white mb-6">
            Contact our experts for a customized banking security solution.
          </p>
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