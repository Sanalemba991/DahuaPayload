import React from 'react'
import Image from 'next/image'

export default function TechnologiesPage() {
  return (
    <div style={{ paddingTop: '80px' }}>
      {/* Add padding for fixed navbar */}
      {/* Top Background Image Section - Add your own image */}
      <div
        style={{
          backgroundImage: 'url("/images/dahuacolor.webp")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          position: 'relative',
          height: '600px',
          backgroundColor: '#cccccc',
        }}
      ></div>
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl font-bold mb-8 text-center">Our Technologies</h1>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* WizSense Technology */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="relative h-48 w-full overflow-hidden">
                <Image
                  src="/images/aisurv.jpg"
                  width={400}
                  height={400}
                  alt="WizSense Technology"
                  fill
                  className="object-cover object-center w-full h-full"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
              <div className="p-3">
                <h3 className="text-lg font-bold mb-1">WizSense Technology</h3>
                <p className="text-black text-sm leading-relaxed">
                  AI-powered intelligent surveillance with human and vehicle detection capabilities.
                </p>
                <a
                  href="/technologies/wizsense"
                  className="text-red-600 font-medium hover:underline mt-2 inline-block text-xs"
                >
                  Learn More →
                </a>
              </div>
            </div>

            {/* WizMind Technology */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="relative h-48 w-full overflow-hidden">
                <Image
                  src="/images/videoana.jpeg"
                  alt="WizMind Technology"
                  fill
                  className="object-cover object-center w-full h-full"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
              <div className="p-3">
                <h3 className="text-lg font-bold mb-1">WizMind Technology</h3>
                <p className="text-black text-sm leading-relaxed">
                  Advanced deep learning algorithms for intelligent video analytics and behavior
                  analysis.
                </p>
                <a
                  href="/technologies/wizmind"
                  className="text-red-600 font-medium hover:underline mt-2 inline-block text-xs"
                >
                  Learn More →
                </a>
              </div>
            </div>

            {/* Full-color Technology */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="relative h-48 w-full overflow-hidden">
                <Image
                  src="/images/dahuacolor.jpg"
                  alt="Full-color Technology"
                  fill
                  className="object-cover object-center w-full h-full"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
              <div className="p-3">
                <h3 className="text-lg font-bold mb-1">Full-color Technology</h3>
                <p className="text-black text-sm leading-relaxed">
                  24/7 full-color imaging with Smart Dual Illuminators for enhanced night
                  visibility.
                </p>
                <a
                  href="/technologies/full-color"
                  className="text-red-600 font-medium hover:underline mt-2 inline-block text-xs"
                >
                  Learn More →
                </a>
              </div>
            </div>

            {/* Auto Tracking 3.0 */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="relative h-48 w-full overflow-hidden">
                <Image
                  src="/images/autotrck.jpg"
                  alt="Auto Tracking 3.0"
                  fill
                  className="object-cover object-center w-full h-full"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
              <div className="p-3">
                <h3 className="text-lg font-bold mb-1">Auto Tracking 3.0</h3>
                <p className="text-black text-sm leading-relaxed">
                  Intelligent PTZ tracking with enhanced accuracy and seamless target following.
                </p>
                <a
                  href="/technologies/auto-tracking"
                  className="text-red-600 font-medium hover:underline mt-2 inline-block text-xs"
                >
                  Learn More →
                </a>
              </div>
            </div>

            {/* HDCVI TEN */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="relative h-48 w-full overflow-hidden">
                <Image
                  src="/images/ultra.webp"
                  alt="HDCVI TEN Technology"
                  fill
                  className="object-cover object-center w-full h-full"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
              <div className="p-3">
                <h3 className="text-lg font-bold mb-1">HDCVI TEN Technology</h3>
                <p className="text-black text-sm leading-relaxed">
                  4K resolution over coax with long-distance transmission and cost-effective
                  upgrades.
                </p>
                <a
                  href="/technologies/hdcvi-ten"
                  className="text-red-600 font-medium hover:underline mt-2 inline-block text-xs"
                >
                  Learn More →
                </a>
              </div>
            </div>

            {/* PFA Technology */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="relative h-48 w-full overflow-hidden">
                <Image
                  src="/images/deep.jpg"
                  alt="PFA Technology"
                  fill
                  className="object-cover object-center w-full h-full"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
              <div className="p-3">
                <h3 className="text-lg font-bold mb-1">PFA Technology</h3>
                <p className="text-black text-sm leading-relaxed">
                  Predictive Focus Algorithm ensuring sharp imaging with automatic focus
                  optimization.
                </p>
                <a
                  href="/technologies/predictive-focus"
                  className="text-red-600 font-medium hover:underline mt-2 inline-block text-xs"
                >
                  Learn More →
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Get Free Consultation Section */}
      <div
        style={{
          background: 'linear-gradient(135deg, #185adb 0%, #39a2fd 100%)',
          padding: '64px 0',
          color: 'white',
          textAlign: 'center',
          marginTop: '60px',
        }}
      >
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <h2
              style={{
                fontSize: '2.2rem',
                fontWeight: 'bold',
                marginBottom: '28px',
              }}
            >
              Get Free Consultation
            </h2>
            <p
              style={{
                fontSize: '1.15rem',
                marginBottom: '36px',
                opacity: 0.95,
              }}
            >
              Want to know which technology fits your needs? Our experts are ready to help you
              choose the best solution.
            </p>
            <a
              href="/contact"
              className="inline-block bg-[#185adb] hover:bg-[#39a2fd] text-white font-bold px-10 py-4 rounded-full text-lg shadow transition-colors duration-200"
              style={{
                textDecoration: 'none',
                boxShadow: '0 2px 8px rgba(24,90,219,0.10)',
                display: 'inline-block',
              }}
            >
              Get Free Consultation
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
