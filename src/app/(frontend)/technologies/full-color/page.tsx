'use client'

import React, { useState } from 'react'
import Image from 'next/image'
export default function FullColorPage() {
  const [isPlaying, setIsPlaying] = useState(false)

  const handlePlayVideo = () => {
    setIsPlaying(true)
  }

  return (
    <div style={{ paddingTop: '80px', backgroundColor: '#f8f9fa' }}>
      {/* Hero Section */}
      <div
        style={{
          backgroundImage: 'url("/images/dahuacolor.webp")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          position: 'relative',
          height: 'clamp(350px, 50vh, 450px)',
          backgroundColor: '#cccccc',
          display: 'flex',
          alignItems: 'center',
        }}
      >
        {/* Text Overlay */}
        <div
          style={{
            position: 'relative',
            zIndex: 2,
            paddingLeft: 'clamp(20px, 5vw, 50px)',
            maxWidth: 'clamp(300px, 90vw, 600px)',
            width: '100%',
          }}
        >
          <h1
            style={{
              fontSize: 'clamp(1.8rem, 5vw, 3rem)',
              fontWeight: 'bold',
              color: 'white',
              textShadow: '3px 3px 8px rgba(0,0,0,0.9)',
              marginBottom: '15px',
              lineHeight: '1.2',
            }}
          >
            Smart Dual Illuminators Technology
          </h1>
          <p
            style={{
              fontSize: 'clamp(1rem, 2.5vw, 1.3rem)',
              color: 'rgba(255,255,255,0.95)',
              textShadow: '2px 2px 6px rgba(0,0,0,0.9)',
              fontWeight: '300',
            }}
          >
            24/7 Full Color Vision
          </p>
        </div>

        {/* Overlay removed for a more vibrant image */}
      </div>

      {/* Video Section */}
      <div
        style={{
          backgroundColor: 'white',
          padding: 'clamp(30px, 6vw, 50px) 0',
        }}
      >
        <div
          style={{
            maxWidth: '1200px',
            margin: '0 auto',
            padding: '0 clamp(15px, 3vw, 20px)',
          }}
        >
          {/* Video Container */}
          <div
            style={{
              position: 'relative',
              width: '100%',
              paddingBottom: '56.25%',
              height: 0,
              overflow: 'hidden',
              borderRadius: '12px',
              boxShadow: '0 15px 40px rgba(0,0,0,0.12)',
              marginBottom: 'clamp(25px, 4vw, 40px)',
              backgroundColor: '#000',
            }}
          >
            {!isPlaying ? (
              <div
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '100%',
                  height: '100%',
                  backgroundImage:
                    'linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.3)), url("https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200&h=700&fit=crop")',
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer',
                  borderRadius: '12px',
                }}
                onClick={handlePlayVideo}
              >
                {/* Play Button */}
                <div
                  style={{
                    width: 'clamp(60px, 8vw, 80px)',
                    height: 'clamp(60px, 8vw, 80px)',
                    backgroundColor: 'rgba(255, 255, 255, 0.95)',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease',
                    boxShadow: '0 8px 25px rgba(0,0,0,0.25)',
                  }}
                >
                  <div
                    style={{
                      width: 0,
                      height: 0,
                      borderLeft: 'clamp(15px, 2.5vw, 24px) solid #1e293b',
                      borderTop: 'clamp(10px, 1.8vw, 16px) solid transparent',
                      borderBottom: 'clamp(10px, 1.8vw, 16px) solid transparent',
                      marginLeft: 'clamp(3px, 0.8vw, 6px)',
                    }}
                  />
                </div>

                {/* Video Title */}
                <div
                  style={{
                    position: 'absolute',
                    bottom: 'clamp(15px, 3vw, 25px)',
                    left: 'clamp(15px, 3vw, 25px)',
                    color: 'white',
                    maxWidth: '85%',
                  }}
                >
                  <h3
                    style={{
                      fontSize: 'clamp(1.1rem, 3vw, 1.6rem)',
                      fontWeight: '700',
                      marginBottom: '8px',
                      textShadow: '2px 2px 4px rgba(0,0,0,0.8)',
                    }}
                  >
                    Full Color Demo
                  </h3>
                  <p
                    style={{
                      fontSize: 'clamp(0.85rem, 2vw, 1rem)',
                      opacity: 0.9,
                      textShadow: '1px 1px 2px rgba(0,0,0,0.8)',
                    }}
                  >
                    24/7 color vision technology
                  </p>
                </div>
              </div>
            ) : (
              <iframe
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '100%',
                  height: '100%',
                  borderRadius: '12px',
                }}
                src="https://www.youtube.com/embed/kMTVBhFPxVs?autoplay=1&rel=0&modestbranding=1"
                title="Full Color Technology Demo"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            )}
          </div>

          {/* Description */}
          <div
            style={{
              textAlign: 'center',
              maxWidth: '800px',
              margin: '0 auto',
            }}
          >
            <h2
              style={{
                fontSize: 'clamp(1.6rem, 4vw, 2.2rem)',
                fontWeight: '700',
                color: '#1e293b',
                marginBottom: '20px',
              }}
            >
              Revolutionary Color Vision
            </h2>
            <p
              style={{
                fontSize: 'clamp(0.95rem, 2.2vw, 1.1rem)',
                lineHeight: '1.7',
                color: '#64748b',
              }}
            >
              Full Color Technology delivers unprecedented color accuracy in any lighting condition.
              Advanced sensors with intelligent processing ensure every detail is captured in
              true-to-life colors, 24 hours a day.
            </p>
          </div>
        </div>
      </div>

      {/* Key Features Section */}
      <div
        style={{
          backgroundColor: '#f1f5f9',
          padding: 'clamp(40px, 8vw, 60px) 0',
        }}
      >
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 clamp(15px, 3vw, 20px)' }}>
          <h2
            style={{
              fontSize: 'clamp(1.8rem, 5vw, 2.5rem)',
              fontWeight: '700',
              color: '#1e293b',
              textAlign: 'center',
              marginBottom: 'clamp(30px, 6vw, 50px)',
            }}
          >
            Key Features
          </h2>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
              gap: 'clamp(20px, 4vw, 30px)',
            }}
          >
            {/* Feature 1 */}
            <div
              style={{
                backgroundColor: 'white',
                borderRadius: '16px',
                padding: 'clamp(20px, 4vw, 30px)',
                boxShadow: '0 8px 25px rgba(0,0,0,0.08)',
                textAlign: 'center',
              }}
            >
              <div
                style={{
                  width: 'clamp(50px, 8vw, 70px)',
                  height: 'clamp(50px, 8vw, 70px)',
                  backgroundColor: '#3b82f6',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 20px auto',
                  fontSize: 'clamp(1.3rem, 2.5vw, 1.8rem)',
                }}
              >
                🌙
              </div>
              <h3
                style={{
                  fontSize: 'clamp(1.1rem, 2.5vw, 1.3rem)',
                  fontWeight: '600',
                  color: '#1e293b',
                  marginBottom: '12px',
                }}
              >
                Ultra Low Light
              </h3>
              <p
                style={{
                  color: '#64748b',
                  lineHeight: '1.6',
                  fontSize: 'clamp(0.85rem, 1.8vw, 0.95rem)',
                }}
              >
                Full color images in 0.0005 lux with F1.0 large aperture technology.
              </p>
            </div>

            {/* Feature 2 */}
            <div
              style={{
                backgroundColor: 'white',
                borderRadius: '16px',
                padding: 'clamp(20px, 4vw, 30px)',
                boxShadow: '0 8px 25px rgba(0,0,0,0.08)',
                textAlign: 'center',
              }}
            >
              <div
                style={{
                  width: 'clamp(50px, 8vw, 70px)',
                  height: 'clamp(50px, 8vw, 70px)',
                  backgroundColor: '#10b981',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 20px auto',
                  fontSize: 'clamp(1.3rem, 2.5vw, 1.8rem)',
                }}
              >
                🎨
              </div>
              <h3
                style={{
                  fontSize: 'clamp(1.1rem, 2.5vw, 1.3rem)',
                  fontWeight: '600',
                  color: '#1e293b',
                  marginBottom: '12px',
                }}
              >
                True Color Accuracy
              </h3>
              <p
                style={{
                  color: '#64748b',
                  lineHeight: '1.6',
                  fontSize: 'clamp(0.85rem, 1.8vw, 0.95rem)',
                }}
              >
                AI-enhanced processing with intelligent white balance and color correction.
              </p>
            </div>

            {/* Feature 3 */}
            <div
              style={{
                backgroundColor: 'white',
                borderRadius: '16px',
                padding: 'clamp(20px, 4vw, 30px)',
                boxShadow: '0 8px 25px rgba(0,0,0,0.08)',
                textAlign: 'center',
              }}
            >
              <div
                style={{
                  width: 'clamp(50px, 8vw, 70px)',
                  height: 'clamp(50px, 8vw, 70px)',
                  backgroundColor: '#f59e0b',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 20px auto',
                  fontSize: 'clamp(1.3rem, 2.5vw, 1.8rem)',
                }}
              >
                💡
              </div>
              <h3
                style={{
                  fontSize: 'clamp(1.1rem, 2.5vw, 1.3rem)',
                  fontWeight: '600',
                  color: '#1e293b',
                  marginBottom: '12px',
                }}
              >
                Smart Light Supplement
              </h3>
              <p
                style={{
                  color: '#64748b',
                  lineHeight: '1.6',
                  fontSize: 'clamp(0.85rem, 1.8vw, 0.95rem)',
                }}
              >
                Intelligent warm LED lighting activates automatically in low-light conditions.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Day & Night Comparison - Simplified */}
      <div
        style={{
          backgroundColor: 'white',
          padding: 'clamp(40px, 8vw, 60px) 0',
        }}
      >
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 clamp(15px, 3vw, 20px)' }}>
          <h2
            style={{
              fontSize: 'clamp(1.8rem, 5vw, 2.5rem)',
              fontWeight: '700',
              color: '#1e293b',
              textAlign: 'center',
              marginBottom: 'clamp(30px, 6vw, 50px)',
            }}
          >
            Day & Night Performance
          </h2>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: 'clamp(25px, 5vw, 40px)',
              alignItems: 'center',
            }}
          >
            {/* Daytime */}
            <div style={{ textAlign: 'center' }}>
              <Image
                src="https://images.unsplash.com/photo-1557804506-669a67965ba0?w=500&h=300&fit=crop"
                alt="Daytime Performance"
                style={{
                  width: '100%',
                  height: 'clamp(200px, 25vw, 280px)', // Reduced height
                  objectFit: 'cover',
                  borderRadius: '12px',
                  boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
                  marginBottom: '20px',
                }}
              />
              <h3
                style={{
                  fontSize: 'clamp(1.2rem, 3vw, 1.5rem)',
                  fontWeight: '600',
                  color: '#1e293b',
                  marginBottom: '12px',
                }}
              >
                Daytime Excellence
              </h3>
              <p
                style={{
                  color: '#64748b',
                  fontSize: 'clamp(0.85rem, 2vw, 1rem)',
                  lineHeight: '1.6',
                }}
              >
                4K resolution with 120dB True WDR for exceptional detail in all conditions.
              </p>
            </div>

            {/* Nighttime */}
            <div style={{ textAlign: 'center' }}>
              <Image
                src="https://images.unsplash.com/photo-1519098901909-b1553a1190af?w=500&h=300&fit=crop"
                alt="Nighttime Performance"
                style={{
                  width: '100%',
                  height: 'clamp(200px, 25vw, 280px)',
                  objectFit: 'cover',
                  borderRadius: '12px',
                  boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
                  marginBottom: '20px',
                }}
              />
              <h3
                style={{
                  fontSize: 'clamp(1.2rem, 3vw, 1.5rem)',
                  fontWeight: '600',
                  color: '#1e293b',
                  marginBottom: '12px',
                }}
              >
                Night Vision Plus
              </h3>
              <p
                style={{
                  color: '#64748b',
                  fontSize: 'clamp(0.85rem, 2vw, 1rem)',
                  lineHeight: '1.6',
                }}
              >
                Full color vision in near-darkness with smart light supplement technology.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Technical Specifications - Compact */}
      <div
        style={{
          backgroundColor: '#1e293b',
          color: 'white',
          padding: 'clamp(40px, 8vw, 60px) 0',
        }}
      >
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 clamp(15px, 3vw, 20px)' }}>
          <h2
            style={{
              fontSize: 'clamp(1.8rem, 5vw, 2.5rem)',
              fontWeight: '700',
              textAlign: 'center',
              marginBottom: 'clamp(30px, 6vw, 50px)',
            }}
          >
            Technical Specifications
          </h2>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))', // Smaller min width
              gap: 'clamp(20px, 4vw, 30px)',
              textAlign: 'center',
            }}
          >
            <div>
              <div
                style={{
                  fontSize: 'clamp(1.5rem, 3.5vw, 2.2rem)', // Smaller numbers
                  fontWeight: '800',
                  color: '#60a5fa',
                  marginBottom: '8px',
                }}
              >
                0.0005 Lux
              </div>
              <p
                style={{ color: 'rgba(255,255,255,0.8)', fontSize: 'clamp(0.8rem, 1.8vw, 0.9rem)' }}
              >
                Min Illumination
              </p>
            </div>

            <div>
              <div
                style={{
                  fontSize: 'clamp(1.5rem, 3.5vw, 2.2rem)',
                  fontWeight: '800',
                  color: '#34d399',
                  marginBottom: '8px',
                }}
              >
                F1.0
              </div>
              <p
                style={{ color: 'rgba(255,255,255,0.8)', fontSize: 'clamp(0.8rem, 1.8vw, 0.9rem)' }}
              >
                Large Aperture
              </p>
            </div>

            <div>
              <div
                style={{
                  fontSize: 'clamp(1.5rem, 3.5vw, 2.2rem)',
                  fontWeight: '800',
                  color: '#fbbf24',
                  marginBottom: '8px',
                }}
              >
                4K
              </div>
              <p
                style={{ color: 'rgba(255,255,255,0.8)', fontSize: 'clamp(0.8rem, 1.8vw, 0.9rem)' }}
              >
                Ultra HD
              </p>
            </div>

            <div>
              <div
                style={{
                  fontSize: 'clamp(1.5rem, 3.5vw, 2.2rem)',
                  fontWeight: '800',
                  color: '#f472b6',
                  marginBottom: '8px',
                }}
              >
                120dB
              </div>
              <p
                style={{ color: 'rgba(255,255,255,0.8)', fontSize: 'clamp(0.8rem, 1.8vw, 0.9rem)' }}
              >
                True WDR
              </p>
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
              Ready to see the difference with Full Color? Our experts will help you choose the best
              solution for your needs.
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
