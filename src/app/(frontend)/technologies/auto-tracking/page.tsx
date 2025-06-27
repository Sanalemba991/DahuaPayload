'use client'

import React, { useState } from 'react'
import Image from 'next/image'
export default function AutoTrackingPage() {
  const [isPlaying, setIsPlaying] = useState(false)

  const handlePlayVideo = () => {
    setIsPlaying(true)
  }

  return (
    <div style={{ paddingTop: '80px', backgroundColor: '#f8f9fa' }}>
      {/* Hero Section with Custom Background Image */}
      <div
        style={{
          backgroundImage: 'url("/images/autotrack.webp")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          color: 'white',
          padding: '120px 0 140px 0',
          textAlign: 'center',
          position: 'relative',
          minHeight: '70vh',
          display: 'flex',
          alignItems: 'center',
        }}
      >
        <div
          style={{
            maxWidth: '1200px',
            margin: '0 auto',
            padding: '0 20px',
            position: 'relative',
            zIndex: 2,
          }}
        >
          <h1
            style={{
              fontSize: 'clamp(3rem, 6vw, 4.5rem)',
              fontWeight: '800',
              marginBottom: '30px',
              color: 'white',
              textShadow: '2px 2px 4px rgba(0,0,0,0.8)',
              letterSpacing: '-0.02em',
            }}
          >
            Auto Tracking 3.0
          </h1>
          <p
            style={{
              fontSize: 'clamp(1.1rem, 2.5vw, 1.4rem)',
              maxWidth: '800px',
              margin: '0 auto 40px auto',
              lineHeight: '1.7',
              color: 'rgba(255,255,255,0.95)',
              textShadow: '1px 1px 2px rgba(0,0,0,0.8)',
            }}
          >
            Intelligent automated tracking system that seamlessly follows moving targets with
            precision and reliability, powered by advanced AI algorithms.
          </p>

          {/* CTA Button */}
          <button
            style={{
              background: 'linear-gradient(135deg, #10b981 0%, #059669 100%)',
              border: 'none',
              padding: '15px 35px',
              borderRadius: '50px',
              color: 'white',
              fontSize: '1.1rem',
              fontWeight: '600',
              cursor: 'pointer',
              boxShadow: '0 10px 30px rgba(16, 185, 129, 0.3)',
              transition: 'all 0.3s ease',
              textTransform: 'uppercase',
              letterSpacing: '0.5px',
            }}
            onMouseEnter={(e) => {
              const target = e.target as HTMLButtonElement
              target.style.transform = 'translateY(-3px)'
              target.style.boxShadow = '0 15px 40px rgba(16, 185, 129, 0.4)'
            }}
            onMouseLeave={(e) => {
              const target = e.target as HTMLButtonElement
              target.style.transform = 'translateY(0)'
              target.style.boxShadow = '0 10px 30px rgba(16, 185, 129, 0.3)'
            }}
          >
            Scroll Down For Demo
          </button>
        </div>
      </div>

      {/* Full Width Video Section */}
      <div
        style={{
          backgroundColor: 'white',
          padding: '60px 0 0 0',
        }}
      >
        <div
          style={{
            maxWidth: '1400px',
            margin: '0 auto',
            padding: '0 20px',
          }}
        >
          {/* Video Container - Full Width */}
          <div
            style={{
              position: 'relative',
              width: '100%',
              paddingBottom: '56.25%',
              height: 0,
              overflow: 'hidden',
              borderRadius: '15px',
              boxShadow: '0 20px 60px rgba(0,0,0,0.15)',
              marginBottom: '50px',
              backgroundColor: '#000',
            }}
          >
            {!isPlaying ? (
              // Custom Video Thumbnail with Play Button
              <div
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '100%',
                  height: '100%',
                  backgroundImage:
                    'linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.3)), url("https://images.unsplash.com/photo-1574947600450-a5c56c04b8e8?w=1400&h=800&fit=crop")',
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer',
                  borderRadius: '15px',
                }}
                onClick={handlePlayVideo}
              >
                {/* Play Button */}
                <div
                  style={{
                    width: '100px',
                    height: '100px',
                    backgroundColor: 'rgba(255, 255, 255, 0.9)',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease',
                    boxShadow: '0 10px 30px rgba(0,0,0,0.3)',
                  }}
                  onMouseEnter={(e) => {
                    const target = e.target as HTMLDivElement
                    target.style.transform = 'scale(1.1)'
                    target.style.backgroundColor = 'white'
                  }}
                  onMouseLeave={(e) => {
                    const target = e.target as HTMLDivElement
                    target.style.transform = 'scale(1)'
                    target.style.backgroundColor = 'rgba(255, 255, 255, 0.9)'
                  }}
                >
                  <div
                    style={{
                      width: 0,
                      height: 0,
                      borderLeft: '30px solid #1e293b',
                      borderTop: '20px solid transparent',
                      borderBottom: '20px solid transparent',
                      marginLeft: '8px',
                    }}
                  />
                </div>

                {/* Video Title Overlay */}
                <div
                  style={{
                    position: 'absolute',
                    bottom: '30px',
                    left: '30px',
                    color: 'white',
                  }}
                >
                  <h3
                    style={{
                      fontSize: '2rem',
                      fontWeight: '700',
                      marginBottom: '10px',
                      textShadow: '2px 2px 4px rgba(0,0,0,0.8)',
                    }}
                  >
                    Auto Tracking 3.0 Demo
                  </h3>
                  <p
                    style={{
                      fontSize: '1.2rem',
                      opacity: 0.9,
                      textShadow: '1px 1px 2px rgba(0,0,0,0.8)',
                    }}
                  >
                    See intelligent tracking in action
                  </p>
                </div>
              </div>
            ) : (
              // Actual Video Player with your specified video
              <iframe
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '100%',
                  height: '100%',
                  borderRadius: '15px',
                }}
                src="https://www.youtube.com/embed/AVIXb5OYskY?autoplay=1&rel=0&modestbranding=1"
                title="Auto Tracking 3.0 Demo"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            )}
          </div>

          {/* Description Below Video */}
          <div
            style={{
              textAlign: 'center',
              maxWidth: '1000px',
              margin: '0 auto',
              paddingBottom: '60px',
            }}
          >
            <h2
              style={{
                fontSize: '2.5rem',
                fontWeight: '700',
                color: '#1e293b',
                marginBottom: '25px',
              }}
            >
              Intelligent Target Tracking
            </h2>
            <p
              style={{
                fontSize: '1.2rem',
                lineHeight: '1.8',
                color: '#64748b',
                marginBottom: '30px',
              }}
            >
              Auto Tracking 3.0 represents the pinnacle of automated surveillance technology,
              utilizing advanced AI algorithms to seamlessly track moving targets with exceptional
              precision. The system automatically detects, locks onto, and follows objects of
              interest while maintaining optimal framing and focus.
            </p>
            <p
              style={{
                fontSize: '1.1rem',
                lineHeight: '1.7',
                color: '#64748b',
              }}
            >
              With intelligent prediction algorithms and smooth pan-tilt-zoom movements, Auto
              Tracking 3.0 ensures continuous monitoring of critical targets without manual
              intervention, perfect for security applications and automated surveillance.
            </p>
          </div>
        </div>
      </div>

      {/* Key Features Section */}
      <div
        style={{
          backgroundColor: '#f1f5f9',
          padding: '80px 0',
        }}
      >
        <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '0 20px' }}>
          <h2
            style={{
              fontSize: '3rem',
              fontWeight: '700',
              color: '#1e293b',
              textAlign: 'center',
              marginBottom: '60px',
            }}
          >
            Key Features
          </h2>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
              gap: '40px',
            }}
          >
            {/* Feature 1 */}
            <div
              style={{
                backgroundColor: 'white',
                borderRadius: '20px',
                padding: '40px',
                boxShadow: '0 10px 30px rgba(0,0,0,0.08)',
                textAlign: 'center',
              }}
            >
              <div
                style={{
                  width: '80px',
                  height: '80px',
                  backgroundColor: '#10b981',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 25px auto',
                  fontSize: '2rem',
                }}
              >
                🎯
              </div>
              <h3
                style={{
                  fontSize: '1.5rem',
                  fontWeight: '600',
                  color: '#1e293b',
                  marginBottom: '15px',
                }}
              >
                Precision Tracking
              </h3>
              <p
                style={{
                  color: '#64748b',
                  lineHeight: '1.6',
                  fontSize: '1rem',
                }}
              >
                Advanced AI algorithms ensure accurate target detection and smooth tracking with
                minimal lag and maximum precision.
              </p>
            </div>

            {/* Feature 2 */}
            <div
              style={{
                backgroundColor: 'white',
                borderRadius: '20px',
                padding: '40px',
                boxShadow: '0 10px 30px rgba(0,0,0,0.08)',
                textAlign: 'center',
              }}
            >
              <div
                style={{
                  width: '80px',
                  height: '80px',
                  backgroundColor: '#3b82f6',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 25px auto',
                  fontSize: '2rem',
                }}
              >
                🤖
              </div>
              <h3
                style={{
                  fontSize: '1.5rem',
                  fontWeight: '600',
                  color: '#1e293b',
                  marginBottom: '15px',
                }}
              >
                AI-Powered Intelligence
              </h3>
              <p
                style={{
                  color: '#64748b',
                  lineHeight: '1.6',
                  fontSize: '1rem',
                }}
              >
                Deep learning technology enables intelligent target classification and predictive
                movement analysis for enhanced tracking performance.
              </p>
            </div>

            {/* Feature 3 */}
            <div
              style={{
                backgroundColor: 'white',
                borderRadius: '20px',
                padding: '40px',
                boxShadow: '0 10px 30px rgba(0,0,0,0.08)',
                textAlign: 'center',
              }}
            >
              <div
                style={{
                  width: '80px',
                  height: '80px',
                  backgroundColor: '#f59e0b',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 25px auto',
                  fontSize: '2rem',
                }}
              >
                ⚡
              </div>
              <h3
                style={{
                  fontSize: '1.5rem',
                  fontWeight: '600',
                  color: '#1e293b',
                  marginBottom: '15px',
                }}
              >
                Real-time Response
              </h3>
              <p
                style={{
                  color: '#64748b',
                  lineHeight: '1.6',
                  fontSize: '1rem',
                }}
              >
                Ultra-fast processing enables immediate response to target movements with smooth
                pan-tilt-zoom operations and minimal delay.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Tracking Modes Section */}
      <div
        style={{
          backgroundColor: 'white',
          padding: '80px 0',
        }}
      >
        <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '0 20px' }}>
          <h2
            style={{
              fontSize: '3rem',
              fontWeight: '700',
              color: '#1e293b',
              textAlign: 'center',
              marginBottom: '60px',
            }}
          >
            Tracking Modes
          </h2>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: '50px',
              alignItems: 'center',
            }}
          >
            {/* Auto Mode */}
            <div
              style={{
                textAlign: 'center',
              }}
            >
              <Image
                src="/images/tracka.png"
                alt="Auto Tracking Mode"
                style={{
                  width: '100%',
                  height: '350px',
                  objectFit: 'cover',
                  borderRadius: '15px',
                  boxShadow: '0 15px 40px rgba(0,0,0,0.1)',
                  marginBottom: '25px',
                }}
              />
              <h3
                style={{
                  fontSize: '1.8rem',
                  fontWeight: '600',
                  color: '#1e293b',
                  marginBottom: '15px',
                }}
              >
                Automatic Mode
              </h3>
              <p
                style={{
                  color: '#64748b',
                  fontSize: '1.1rem',
                  lineHeight: '1.6',
                }}
              >
                Fully automated tracking that detects and follows targets without manual
                intervention using intelligent algorithms.
              </p>
            </div>

            {/* Manual Mode */}
            <div
              style={{
                textAlign: 'center',
              }}
            >
              <Image
                src="/images/autotrack.webp"
                alt="Manual Tracking Mode"
                style={{
                  width: '100%',
                  height: '350px',
                  objectFit: 'cover',
                  borderRadius: '15px',
                  boxShadow: '0 15px 40px rgba(0,0,0,0.1)',
                  marginBottom: '25px',
                }}
              />
              <h3
                style={{
                  fontSize: '1.8rem',
                  fontWeight: '600',
                  color: '#1e293b',
                  marginBottom: '15px',
                }}
              >
                Manual Selection
              </h3>
              <p
                style={{
                  color: '#64748b',
                  fontSize: '1.1rem',
                  lineHeight: '1.6',
                }}
              >
                Operator-initiated tracking allows manual target selection with automated following
                once the target is identified.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Advanced Capabilities */}
      <div
        style={{
          backgroundColor: '#1e293b',
          color: 'white',
          padding: '80px 0',
        }}
      >
        <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '0 20px' }}>
          <h2
            style={{
              fontSize: '3rem',
              fontWeight: '700',
              textAlign: 'center',
              marginBottom: '60px',
            }}
          >
            Advanced Capabilities
          </h2>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: '40px',
            }}
          >
            {/* Capability 1 */}
            <div
              style={{
                backgroundColor: 'rgba(255,255,255,0.05)',
                borderRadius: '15px',
                padding: '35px',
                textAlign: 'center',
                border: '1px solid rgba(255,255,255,0.1)',
              }}
            >
              <h3
                style={{
                  fontSize: '1.4rem',
                  fontWeight: '600',
                  marginBottom: '15px',
                  color: '#10b981',
                }}
              >
                Multi-Target Support
              </h3>
              <p
                style={{
                  color: 'rgba(255,255,255,0.8)',
                  lineHeight: '1.6',
                }}
              >
                Simultaneously track multiple targets with priority-based switching and intelligent
                target management.
              </p>
            </div>

            {/* Capability 2 */}
            <div
              style={{
                backgroundColor: 'rgba(255,255,255,0.05)',
                borderRadius: '15px',
                padding: '35px',
                textAlign: 'center',
                border: '1px solid rgba(255,255,255,0.1)',
              }}
            >
              <h3
                style={{
                  fontSize: '1.4rem',
                  fontWeight: '600',
                  marginBottom: '15px',
                  color: '#3b82f6',
                }}
              >
                Predictive Analytics
              </h3>
              <p
                style={{
                  color: 'rgba(255,255,255,0.8)',
                  lineHeight: '1.6',
                }}
              >
                Advanced algorithms predict target movement patterns for smoother tracking and
                reduced latency.
              </p>
            </div>

            {/* Capability 3 */}
            <div
              style={{
                backgroundColor: 'rgba(255,255,255,0.05)',
                borderRadius: '15px',
                padding: '35px',
                textAlign: 'center',
                border: '1px solid rgba(255,255,255,0.1)',
              }}
            >
              <h3
                style={{
                  fontSize: '1.4rem',
                  fontWeight: '600',
                  marginBottom: '15px',
                  color: '#f59e0b',
                }}
              >
                Zone Protection
              </h3>
              <p
                style={{
                  color: 'rgba(255,255,255,0.8)',
                  lineHeight: '1.6',
                }}
              >
                Configure protected zones and automatic return-to-preset functionality for enhanced
                security coverage.
              </p>
            </div>

            {/* Capability 4 */}
            <div
              style={{
                backgroundColor: 'rgba(255,255,255,0.05)',
                borderRadius: '15px',
                padding: '35px',
                textAlign: 'center',
                border: '1px solid rgba(255,255,255,0.1)',
              }}
            >
              <h3
                style={{
                  fontSize: '1.4rem',
                  fontWeight: '600',
                  marginBottom: '15px',
                  color: '#f472b6',
                }}
              >
                Smart Calibration
              </h3>
              <p
                style={{
                  color: 'rgba(255,255,255,0.8)',
                  lineHeight: '1.6',
                }}
              >
                Automatic calibration and scene learning optimize tracking performance for any
                environment.
              </p>
            </div>
          </div>

          {/* Technical Specifications */}
          <div
            style={{
              marginTop: '80px',
              backgroundColor: 'rgba(255,255,255,0.05)',
              borderRadius: '20px',
              padding: '50px',
              border: '1px solid rgba(255,255,255,0.1)',
            }}
          >
            <h3
              style={{
                fontSize: '2rem',
                fontWeight: '700',
                textAlign: 'center',
                marginBottom: '40px',
              }}
            >
              Technical Specifications
            </h3>

            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
                gap: '30px',
              }}
            >
              <div style={{ textAlign: 'center' }}>
                <div
                  style={{
                    fontSize: '2.5rem',
                    fontWeight: '800',
                    color: '#10b981',
                    marginBottom: '10px',
                  }}
                >
                  360°
                </div>
                <p style={{ color: 'rgba(255,255,255,0.8)' }}>Pan Range</p>
              </div>

              <div style={{ textAlign: 'center' }}>
                <div
                  style={{
                    fontSize: '2.5rem',
                    fontWeight: '800',
                    color: '#3b82f6',
                    marginBottom: '10px',
                  }}
                >
                  120°/s
                </div>
                <p style={{ color: 'rgba(255,255,255,0.8)' }}>Max Speed</p>
              </div>

              <div style={{ textAlign: 'center' }}>
                <div
                  style={{
                    fontSize: '2.5rem',
                    fontWeight: '800',
                    color: '#f59e0b',
                    marginBottom: '10px',
                  }}
                >
                  32X
                </div>
                <p style={{ color: 'rgba(255,255,255,0.8)' }}>Optical Zoom</p>
              </div>

              <div style={{ textAlign: 'center' }}>
                <div
                  style={{
                    fontSize: '2.5rem',
                    fontWeight: '800',
                    color: '#f472b6',
                    marginBottom: '10px',
                  }}
                >
                  50ms
                </div>
                <p style={{ color: 'rgba(255,255,255,0.8)' }}>Response Time</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Consultation Section */}
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
              Ready to enhance your surveillance with Auto Tracking 3.0? Our experts will help you
              choose the best solution for your needs.
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
