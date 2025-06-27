'use client'

import React, { useState } from 'react'
import Image from 'next/image'
export default function HDCVITenPage() {
  const [isPlaying, setIsPlaying] = useState(false)

  const handlePlayVideo = () => {
    setIsPlaying(true)
  }

  return (
    <div
      style={{
        paddingTop: '80px',
        backgroundColor: '#f8f9fa',
        paddingLeft: 'clamp(8px, 4vw, 24px)',
        paddingRight: 'clamp(8px, 4vw, 24px)',
        boxSizing: 'border-box',
      }}
    >
      {/* Hero Section */}
      <div
        style={{
          backgroundImage: 'url("/images/hdcvi.webp")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          color: 'white',
          padding: 'clamp(40px, 8vw, 120px) 0 clamp(50px, 10vw, 140px) 0',
          textAlign: 'center',
          position: 'relative',
          minHeight: 'clamp(350px, 60vh, 700px)',
          display: 'flex',
          alignItems: 'center',
        }}
      >
        <div
          style={{
            maxWidth: '1200px',
            margin: '0 auto',
            width: '100%',
            padding: '0 clamp(8px, 4vw, 24px)',
            position: 'relative',
            zIndex: 2,
          }}
        >
          <h1
            style={{
              fontSize: 'clamp(2rem, 6vw, 4rem)',
              fontWeight: '800',
              marginBottom: 'clamp(18px, 4vw, 30px)',
              color: 'white',
              textShadow: '3px 3px 6px rgba(0,0,0,0.8)',
              letterSpacing: '-0.02em',
              lineHeight: '1.1',
            }}
          >
            {/* Add your title here */}
          </h1>
          <p
            style={{
              fontSize: 'clamp(1rem, 2.5vw, 1.3rem)',
              maxWidth: '850px',
              margin: '0 auto clamp(25px, 5vw, 40px) auto',
              lineHeight: '1.7',
              color: 'rgba(255,255,255,0.95)',
              textShadow: '2px 2px 4px rgba(0,0,0,0.8)',
            }}
          >
            {/* Add your subtitle here */}
          </p>
        </div>
      </div>

      {/* Overview Section */}
      <div
        style={{
          backgroundColor: 'white',
          padding: 'clamp(40px, 8vw, 100px) 0',
          position: 'relative',
          marginTop: '-1px',
        }}
      >
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundImage:
              'radial-gradient(circle at 25% 25%, rgba(245, 158, 11, 0.05) 2px, transparent 2px)',
            backgroundSize: '60px 60px',
            opacity: 0.6,
          }}
        />
        <div
          style={{
            maxWidth: '1400px',
            margin: '0 auto',
            padding: '0 clamp(8px, 4vw, 24px)',
            position: 'relative',
            zIndex: 2,
          }}
        >
          <div
            style={{
              textAlign: 'center',
              marginBottom: 'clamp(40px, 8vw, 80px)',
            }}
          >
            <h2
              style={{
                fontSize: 'clamp(1.5rem, 5vw, 3.5rem)',
                fontWeight: '800',
                color: '#1e293b',
                marginBottom: 'clamp(18px, 4vw, 30px)',
                background: 'linear-gradient(135deg, #f59e0b 0%, #d97706 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                display: 'inline-block',
                padding: '0 10px',
                lineHeight: '1.1',
              }}
            >
              Technology Overview
            </h2>
            <div
              style={{
                width: '100px',
                height: '4px',
                background: 'linear-gradient(135deg, #f59e0b 0%, #d97706 100%)',
                margin: '0 auto',
                borderRadius: '2px',
              }}
            />
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr',
              gap: 'clamp(30px, 6vw, 80px)',
              alignItems: 'center',
            }}
          >
            {/* Responsive: 2 columns on large screens */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: '1fr',
                gap: 'clamp(20px, 4vw, 40px)',
              }}
            >
              <div>
                <h3
                  style={{
                    fontSize: 'clamp(1.2rem, 3vw, 2.2rem)',
                    fontWeight: '700',
                    color: '#1e293b',
                    marginBottom: 'clamp(12px, 2vw, 25px)',
                    lineHeight: '1.3',
                  }}
                >
                  Next-Generation HDCVI Technology
                </h3>
                <p
                  style={{
                    fontSize: 'clamp(1rem, 2vw, 1.2rem)',
                    lineHeight: '1.8',
                    color: '#64748b',
                    marginBottom: 'clamp(12px, 2vw, 25px)',
                  }}
                >
                  HDCVI 10.0 represents the pinnacle of high-definition composite video interface
                  technology with integrated AI capabilities. This breakthrough innovation blazes a
                  trail to the over-coax AI era, delivering exceptional 4K resolution with
                  intelligent analytics over traditional coaxial cables.
                </p>
                <p
                  style={{
                    fontSize: 'clamp(0.95rem, 1.8vw, 1.1rem)',
                    lineHeight: '1.7',
                    color: '#64748b',
                    marginBottom: 'clamp(18px, 3vw, 35px)',
                  }}
                >
                  With advanced AI processors, intelligent compression algorithms, and over-coax
                  data transmission, HDCVI 10.0 ensures reliable performance over long distances
                  while providing real-time AI analytics for enhanced security applications.
                </p>
                {/* Key Benefits */}
                <div
                  style={{
                    display: 'grid',
                    gridTemplateColumns: '1fr',
                    gap: 'clamp(10px, 2vw, 20px)',
                  }}
                >
                  {/* 2 columns on medium+ screens */}
                  <div
                    style={{
                      display: 'grid',
                      gridTemplateColumns: '1fr 1fr',
                      gap: 'clamp(10px, 2vw, 20px)',
                    }}
                  >
                    <div
                      style={{
                        backgroundColor: '#fffbeb',
                        padding: 'clamp(12px, 2vw, 20px)',
                        borderRadius: '12px',
                        border: '1px solid #fed7aa',
                      }}
                    >
                      <h4
                        style={{
                          fontSize: 'clamp(1rem, 2vw, 1.1rem)',
                          fontWeight: '600',
                          color: '#f59e0b',
                          marginBottom: '8px',
                        }}
                      >
                        4K AI Resolution
                      </h4>
                      <p
                        style={{
                          fontSize: 'clamp(0.85rem, 1.5vw, 0.95rem)',
                          color: '#64748b',
                          lineHeight: '1.5',
                        }}
                      >
                        Ultra-high definition with AI analytics
                      </p>
                    </div>
                    <div
                      style={{
                        backgroundColor: '#fffbeb',
                        padding: 'clamp(12px, 2vw, 20px)',
                        borderRadius: '12px',
                        border: '1px solid #fed7aa',
                      }}
                    >
                      <h4
                        style={{
                          fontSize: 'clamp(1rem, 2vw, 1.1rem)',
                          fontWeight: '600',
                          color: '#f59e0b',
                          marginBottom: '8px',
                        }}
                      >
                        Over-Coax AI
                      </h4>
                      <p
                        style={{
                          fontSize: 'clamp(0.85rem, 1.5vw, 0.95rem)',
                          color: '#64748b',
                          lineHeight: '1.5',
                        }}
                      >
                        AI data transmission over coax
                      </p>
                    </div>
                    <div
                      style={{
                        backgroundColor: '#fffbeb',
                        padding: 'clamp(12px, 2vw, 20px)',
                        borderRadius: '12px',
                        border: '1px solid #fed7aa',
                      }}
                    >
                      <h4
                        style={{
                          fontSize: 'clamp(1rem, 2vw, 1.1rem)',
                          fontWeight: '600',
                          color: '#f59e0b',
                          marginBottom: '8px',
                        }}
                      >
                        Cost Effective
                      </h4>
                      <p
                        style={{
                          fontSize: 'clamp(0.85rem, 1.5vw, 0.95rem)',
                          color: '#64748b',
                          lineHeight: '1.5',
                        }}
                      >
                        Uses existing coaxial infrastructure
                      </p>
                    </div>
                    <div
                      style={{
                        backgroundColor: '#fffbeb',
                        padding: 'clamp(12px, 2vw, 20px)',
                        borderRadius: '12px',
                        border: '1px solid #fed7aa',
                      }}
                    >
                      <h4
                        style={{
                          fontSize: 'clamp(1rem, 2vw, 1.1rem)',
                          fontWeight: '600',
                          color: '#f59e0b',
                          marginBottom: '8px',
                        }}
                      >
                        Easy Integration
                      </h4>
                      <p
                        style={{
                          fontSize: 'clamp(0.85rem, 1.5vw, 0.95rem)',
                          color: '#64748b',
                          lineHeight: '1.5',
                        }}
                      >
                        Seamless upgrade with AI features
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Right Image */}
            <div
              style={{
                position: 'relative',
                marginTop: 'clamp(30px, 6vw, 0)',
              }}
            >
              <Image
                src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=500&fit=crop"
                alt="HDCVI 10.0 Technology"
                style={{
                  width: '100%',
                  maxWidth: '500px',
                  height: 'clamp(220px, 40vw, 400px)',
                  objectFit: 'cover',
                  borderRadius: 'clamp(10px, 3vw, 20px)',
                  boxShadow: '0 15px 40px rgba(0,0,0,0.15)',
                  margin: '0 auto',
                }}
              />
              {/* Floating Stats */}
              <div
                style={{
                  position: 'absolute',
                  top: '20px',
                  right: '20px',
                  backgroundColor: 'rgba(255,255,255,0.95)',
                  padding: '10px 16px',
                  borderRadius: '10px',
                  boxShadow: '0 6px 18px rgba(0,0,0,0.1)',
                  backdropFilter: 'blur(8px)',
                  fontSize: 'clamp(1rem, 3vw, 1.3rem)',
                }}
              >
                <div
                  style={{
                    fontWeight: '800',
                    color: '#f59e0b',
                    lineHeight: '1',
                  }}
                >
                  4K
                </div>
                <div
                  style={{
                    fontSize: '0.9em',
                    color: '#64748b',
                    fontWeight: '500',
                  }}
                >
                  AI Resolution
                </div>
              </div>
              <div
                style={{
                  position: 'absolute',
                  bottom: '20px',
                  left: '20px',
                  backgroundColor: 'rgba(255,255,255,0.95)',
                  padding: '10px 16px',
                  borderRadius: '10px',
                  boxShadow: '0 6px 18px rgba(0,0,0,0.1)',
                  backdropFilter: 'blur(8px)',
                  fontSize: 'clamp(1rem, 3vw, 1.3rem)',
                }}
              >
                <div
                  style={{
                    fontWeight: '800',
                    color: '#f59e0b',
                    lineHeight: '1',
                  }}
                >
                  AI
                </div>
                <div
                  style={{
                    fontSize: '0.9em',
                    color: '#64748b',
                    fontWeight: '500',
                  }}
                >
                  Over-Coax
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Video Section */}
      <div
        style={{
          backgroundColor: '#f8fafc',
          padding: 'clamp(40px, 8vw, 100px) 0',
          marginTop: '-1px',
        }}
      >
        <div
          style={{
            maxWidth: '1200px',
            margin: '0 auto',
            padding: '0 clamp(8px, 4vw, 24px)',
          }}
        >
          <div
            style={{
              textAlign: 'center',
              marginBottom: 'clamp(30px, 6vw, 60px)',
            }}
          >
            <h2
              style={{
                fontSize: 'clamp(1.5rem, 5vw, 3.5rem)',
                fontWeight: '800',
                color: '#1e293b',
                marginBottom: 'clamp(12px, 2vw, 20px)',
              }}
            >
              See HDCVI 10.0 in Action
            </h2>
            <p
              style={{
                fontSize: 'clamp(1rem, 2vw, 1.2rem)',
                color: '#64748b',
                maxWidth: '600px',
                margin: '0 auto',
              }}
            >
              Experience the revolutionary capabilities of HDCVI 10.0 AI technology
            </p>
          </div>
          {/* Video Container */}
          <div
            style={{
              position: 'relative',
              width: '100%',
              paddingBottom: '56.25%',
              height: 0,
              overflow: 'hidden',
              borderRadius: 'clamp(10px, 3vw, 20px)',
              boxShadow: '0 10px 30px rgba(0,0,0,0.15)',
              backgroundColor: '#000',
              margin: '0',
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
                    'linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url("https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=1200&h=675&fit=crop")',
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer',
                  borderRadius: 'clamp(10px, 3vw, 20px)',
                }}
                onClick={handlePlayVideo}
              >
                {/* Play Button */}
                <div
                  style={{
                    width: 'clamp(60px, 18vw, 120px)',
                    height: 'clamp(60px, 18vw, 120px)',
                    backgroundColor: 'rgba(245, 158, 11, 0.9)',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease',
                    boxShadow: '0 8px 25px rgba(245, 158, 11, 0.4)',
                    border: '3px solid rgba(255,255,255,0.8)',
                  }}
                >
                  <div
                    style={{
                      width: 0,
                      height: 0,
                      borderLeft: 'clamp(18px, 7vw, 35px) solid white',
                      borderTop: 'clamp(12px, 4vw, 25px) solid transparent',
                      borderBottom: 'clamp(12px, 4vw, 25px) solid transparent',
                      marginLeft: 'clamp(4px, 2vw, 10px)',
                    }}
                  />
                </div>
                {/* Video Title Overlay */}
                <div
                  style={{
                    position: 'absolute',
                    bottom: 'clamp(12px, 4vw, 40px)',
                    left: 'clamp(12px, 4vw, 40px)',
                    color: 'white',
                  }}
                >
                  <h3
                    style={{
                      fontSize: 'clamp(1.1rem, 4vw, 2.2rem)',
                      fontWeight: '700',
                      marginBottom: 'clamp(6px, 2vw, 12px)',
                      textShadow: '2px 2px 4px rgba(0,0,0,0.8)',
                    }}
                  >
                    HDCVI 10.0 AI Demo
                  </h3>
                  <p
                    style={{
                      fontSize: 'clamp(0.9rem, 2vw, 1.3rem)',
                      opacity: 0.9,
                      textShadow: '1px 1px 2px rgba(0,0,0,0.8)',
                    }}
                  >
                    Over-coax AI Era technology
                  </p>
                </div>
              </div>
            ) : (
              <video
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '100%',
                  height: '100%',
                  borderRadius: 'clamp(10px, 3vw, 20px)',
                  objectFit: 'cover',
                }}
                controls
                autoPlay
                src="https://www.dahuasecurity.com/asset/upload/uploads/media/20220407/.mp4"
              >
                Your browser does not support the video tag.
              </video>
            )}
          </div>
        </div>
      </div>

      {/* Technical Specifications */}
      <div
        style={{
          backgroundColor: '#1e293b',
          color: 'white',
          padding: 'clamp(40px, 8vw, 100px) 0',
          marginTop: '-1px',
        }}
      >
        <div
          style={{
            maxWidth: '1400px',
            margin: '0 auto',
            padding: '0 clamp(8px, 4vw, 24px)',
          }}
        >
          <h2
            style={{
              fontSize: 'clamp(1.5rem, 5vw, 3.5rem)',
              fontWeight: '800',
              textAlign: 'center',
              marginBottom: 'clamp(30px, 6vw, 80px)',
            }}
          >
            Technical Specifications
          </h2>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
              gap: 'clamp(18px, 4vw, 40px)',
            }}
          >
            {/* Spec Card 1 */}
            <div
              style={{
                backgroundColor: 'rgba(255,255,255,0.05)',
                borderRadius: '20px',
                padding: '40px',
                textAlign: 'center',
                border: '1px solid rgba(255,255,255,0.1)',
                backdropFilter: 'blur(10px)',
              }}
            >
              <div
                style={{
                  fontSize: '3rem',
                  fontWeight: '800',
                  color: '#f59e0b',
                  marginBottom: '15px',
                }}
              >
                4K
              </div>
              <h3
                style={{
                  fontSize: '1.5rem',
                  fontWeight: '600',
                  marginBottom: '15px',
                }}
              >
                Ultra HD AI Resolution
              </h3>
              <p
                style={{
                  color: 'rgba(255,255,255,0.8)',
                  lineHeight: '1.6',
                }}
              >
                Crystal clear 3840×2160 resolution with integrated AI analytics.
              </p>
            </div>

            {/* Spec Card 2 */}
            <div
              style={{
                backgroundColor: 'rgba(255,255,255,0.05)',
                borderRadius: '20px',
                padding: '40px',
                textAlign: 'center',
                border: '1px solid rgba(255,255,255,0.1)',
                backdropFilter: 'blur(10px)',
              }}
            >
              <div
                style={{
                  fontSize: '3rem',
                  fontWeight: '800',
                  color: '#f59e0b',
                  marginBottom: '15px',
                }}
              >
                AI
              </div>
              <h3
                style={{
                  fontSize: '1.5rem',
                  fontWeight: '600',
                  marginBottom: '15px',
                }}
              >
                Over-Coax AI Data
              </h3>
              <p
                style={{
                  color: 'rgba(255,255,255,0.8)',
                  lineHeight: '1.6',
                }}
              >
                AI analytics data transmitted over existing coaxial cables.
              </p>
            </div>

            {/* Spec Card 3 */}
            <div
              style={{
                backgroundColor: 'rgba(255,255,255,0.05)',
                borderRadius: '20px',
                padding: '40px',
                textAlign: 'center',
                border: '1px solid rgba(255,255,255,0.1)',
                backdropFilter: 'blur(10px)',
              }}
            >
              <div
                style={{
                  fontSize: '3rem',
                  fontWeight: '800',
                  color: '#f59e0b',
                  marginBottom: '15px',
                }}
              >
                30fps
              </div>
              <h3
                style={{
                  fontSize: '1.5rem',
                  fontWeight: '600',
                  marginBottom: '15px',
                }}
              >
                Real-time Processing
              </h3>
              <p
                style={{
                  color: 'rgba(255,255,255,0.8)',
                  lineHeight: '1.6',
                }}
              >
                Smooth 30fps video with real-time AI analytics processing.
              </p>
            </div>

            {/* Spec Card 4 */}
            <div
              style={{
                backgroundColor: 'rgba(255,255,255,0.05)',
                borderRadius: '20px',
                padding: '40px',
                textAlign: 'center',
                border: '1px solid rgba(255,255,255,0.1)',
                backdropFilter: 'blur(10px)',
              }}
            >
              <div
                style={{
                  fontSize: '3rem',
                  fontWeight: '800',
                  color: '#f59e0b',
                  marginBottom: '15px',
                }}
              >
                RG59
              </div>
              <h3
                style={{
                  fontSize: '1.5rem',
                  fontWeight: '600',
                  marginBottom: '15px',
                }}
              >
                Cable Compatibility
              </h3>
              <p
                style={{
                  color: 'rgba(255,255,255,0.8)',
                  lineHeight: '1.6',
                }}
              >
                Compatible with RG59 and RG6 coaxial infrastructure.
              </p>
            </div>

            {/* Spec Card 5 */}
            <div
              style={{
                backgroundColor: 'rgba(255,255,255,0.05)',
                borderRadius: '20px',
                padding: '40px',
                textAlign: 'center',
                border: '1px solid rgba(255,255,255,0.1)',
                backdropFilter: 'blur(10px)',
              }}
            >
              <div
                style={{
                  fontSize: '3rem',
                  fontWeight: '800',
                  color: '#f59e0b',
                  marginBottom: '15px',
                }}
              >
                PoC
              </div>
              <h3
                style={{
                  fontSize: '1.5rem',
                  fontWeight: '600',
                  marginBottom: '15px',
                }}
              >
                Power over Coax
              </h3>
              <p
                style={{
                  color: 'rgba(255,255,255,0.8)',
                  lineHeight: '1.6',
                }}
              >
                Single cable solution for power, video, and AI data.
              </p>
            </div>

            {/* Spec Card 6 */}
            <div
              style={{
                backgroundColor: 'rgba(255,255,255,0.05)',
                borderRadius: '20px',
                padding: '40px',
                textAlign: 'center',
                border: '1px solid rgba(255,255,255,0.1)',
                backdropFilter: 'blur(10px)',
              }}
            >
              <div
                style={{
                  fontSize: '3rem',
                  fontWeight: '800',
                  color: '#f59e0b',
                  marginBottom: '15px',
                }}
              >
                IP67
              </div>
              <h3
                style={{
                  fontSize: '1.5rem',
                  fontWeight: '600',
                  marginBottom: '15px',
                }}
              >
                Weather Resistance
              </h3>
              <p
                style={{
                  color: 'rgba(255,255,255,0.8)',
                  lineHeight: '1.6',
                }}
              >
                Robust outdoor performance with IP67 weatherproof rating.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Advantages Section */}
      <div
        style={{
          backgroundColor: 'white',
          padding: 'clamp(40px, 8vw, 100px) 0',
          marginTop: '-1px',
        }}
      >
        <div
          style={{
            maxWidth: '1400px',
            margin: '0 auto',
            padding: '0 clamp(8px, 4vw, 24px)',
          }}
        >
          <h2
            style={{
              fontSize: 'clamp(1.5rem, 5vw, 3.5rem)',
              fontWeight: '800',
              color: '#1e293b',
              textAlign: 'center',
              marginBottom: 'clamp(30px, 6vw, 80px)',
            }}
          >
            Why Choose HDCVI 10.0?
          </h2>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
              gap: 'clamp(18px, 4vw, 50px)',
            }}
          >
            {/* Advantage 1 */}
            <div
              style={{
                textAlign: 'center',
                padding: '30px',
              }}
            >
              <div
                style={{
                  width: '100px',
                  height: '100px',
                  backgroundColor: '#f59e0b',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 30px auto',
                  fontSize: '2.5rem',
                  boxShadow: '0 15px 40px rgba(245, 158, 11, 0.3)',
                }}
              >
                🚀
              </div>
              <h3
                style={{
                  fontSize: '1.8rem',
                  fontWeight: '700',
                  color: '#1e293b',
                  marginBottom: '20px',
                }}
              >
                AI Over-Coax Era
              </h3>
              <p
                style={{
                  color: '#64748b',
                  fontSize: '1.1rem',
                  lineHeight: '1.7',
                }}
              >
                Revolutionary technology that blazes a trail to the over-coax AI era, delivering
                intelligent analytics over existing infrastructure.
              </p>
            </div>

            {/* Advantage 2 */}
            <div
              style={{
                textAlign: 'center',
                padding: '30px',
              }}
            >
              <div
                style={{
                  width: '100px',
                  height: '100px',
                  backgroundColor: '#f59e0b',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 30px auto',
                  fontSize: '2.5rem',
                  boxShadow: '0 15px 40px rgba(245, 158, 11, 0.3)',
                }}
              >
                💡
              </div>
              <h3
                style={{
                  fontSize: '1.8rem',
                  fontWeight: '700',
                  color: '#1e293b',
                  marginBottom: '20px',
                }}
              >
                Smart Installation
              </h3>
              <p
                style={{
                  color: '#64748b',
                  fontSize: '1.1rem',
                  lineHeight: '1.7',
                }}
              >
                Easy upgrade with AI capabilities while maintaining existing coaxial infrastructure
                and reducing installation complexity.
              </p>
            </div>

            {/* Advantage 3 */}
            <div
              style={{
                textAlign: 'center',
                padding: '30px',
              }}
            >
              <div
                style={{
                  width: '100px',
                  height: '100px',
                  backgroundColor: '#f59e0b',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 30px auto',
                  fontSize: '2.5rem',
                  boxShadow: '0 15px 40px rgba(245, 158, 11, 0.3)',
                }}
              >
                ⚡
              </div>
              <h3
                style={{
                  fontSize: '1.8rem',
                  fontWeight: '700',
                  color: '#1e293b',
                  marginBottom: '20px',
                }}
              >
                Enhanced Intelligence
              </h3>
              <p
                style={{
                  color: '#64748b',
                  fontSize: '1.1rem',
                  lineHeight: '1.7',
                }}
              >
                Advanced AI processing delivers superior performance with intelligent analytics and
                real-time decision making.
              </p>
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
              Ready to upgrade to HDCVI 10.0? Our experts will help you choose the best solution for
              your needs.
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
