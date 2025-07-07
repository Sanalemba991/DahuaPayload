'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import './predictive-focus.css'
export default function PredictiveFocusPage() {
  const [activeTab, setActiveTab] = useState('overview')
  const [isVideoPlaying, setIsVideoPlaying] = useState(false)
  const [videoError, setVideoError] = useState(false)

  const handlePlayVideo = () => {
    setIsVideoPlaying(true)
  }

  const handleVideoError = () => {
    setVideoError(true)
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
          backgroundImage:
            'linear-gradient(135deg, rgba(59, 130, 246, 0.9) 0%, rgba(37, 99, 235, 0.9) 100%), url("https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=1200&h=600&fit=crop")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          color: 'white',
          padding: 'clamp(40px, 8vw, 120px) 0 clamp(50px, 10vw, 140px) 0',
          textAlign: 'center',
          position: 'relative',
          minHeight: 'clamp(350px, 60vh, 700px)',
          display: 'flex',
          alignItems: 'center',
          borderRadius: 'clamp(0px, 1vw, 24px)',
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
          <div
            style={{
              display: 'inline-block',
              backgroundColor: 'rgba(59, 130, 246, 0.2)',
              padding: '8px 20px',
              borderRadius: '25px',
              marginBottom: '20px',
              border: '1px solid rgba(255, 255, 255, 0.3)',
              backdropFilter: 'blur(10px)',
            }}
          >
            <span style={{ fontSize: '0.9rem', fontWeight: '600', letterSpacing: '1px' }}>
              ADVANCED IMAGING TECHNOLOGY
            </span>
          </div>

          <h1
            style={{
              fontSize: 'clamp(2rem, 6vw, 4.5rem)',
              fontWeight: '800',
              marginBottom: '25px',
              textShadow: '2px 2px 4px rgba(0,0,0,0.3)',
              lineHeight: '1.1',
            }}
          >
            Predictive Focus Algorithm
          </h1>

          <p
            style={{
              fontSize: 'clamp(1rem, 2.5vw, 1.4rem)',
              maxWidth: '800px',
              margin: '0 auto 35px auto',
              lineHeight: '1.6',
              color: 'rgba(255,255,255,0.9)',
            }}
          >
            Revolutionary PFA Technology that ensures crystal-clear imaging through intelligent
            predictive focusing algorithms and advanced auto-focus systems.
          </p>

          <button
            style={{
              background: 'linear-gradient(135deg, #3b82f6 0%, #2563eb 100%)',
              border: 'none',
              padding: 'clamp(12px, 3vw, 16px) clamp(24px, 6vw, 35px)',
              borderRadius: '50px',
              color: 'white',
              fontSize: 'clamp(1rem, 2vw, 1.1rem)',
              fontWeight: '600',
              cursor: 'pointer',
              boxShadow: '0 10px 30px rgba(59, 130, 246, 0.4)',
              transition: 'all 0.3s ease',
              textTransform: 'uppercase',
              letterSpacing: '0.5px',
            }}
            onMouseEnter={(e) => {
              const target = e.target as HTMLButtonElement
              target.style.transform = 'translateY(-3px)'
              target.style.boxShadow = '0 15px 40px rgba(59, 130, 246, 0.5)'
            }}
            onMouseLeave={(e) => {
              const target = e.target as HTMLButtonElement
              target.style.transform = 'translateY(0)'
              target.style.boxShadow = '0 10px 30px rgba(59, 130, 246, 0.4)'
            }}
          >
            Explore Technology
          </button>
        </div>

        {/* Floating Focus Icon */}
        <div
          style={{
            position: 'absolute',
            top: 'clamp(20px, 50%, 50%)',
            right: 'clamp(10px, 8vw, 10%)',
            transform: 'translateY(-50%)',
            width: 'clamp(70px, 20vw, 150px)',
            height: 'clamp(70px, 20vw, 150px)',
            border: '3px solid rgba(255, 255, 255, 0.3)',
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            animation: 'pulse 2s infinite',
            fontSize: 'clamp(2rem, 6vw, 4rem)',
            zIndex: 1,
          }}
        >
          🎯
        </div>
      </div>

      {/* Video Section */}
      <div
        style={{
          backgroundColor: '#000',
          padding: 'clamp(30px, 8vw, 80px) 0',
        }}
      >
        <div
          style={{
            maxWidth: '1200px',
            margin: '0 auto',
            padding: '0 clamp(8px, 4vw, 24px)',
          }}
        >
          <div style={{ textAlign: 'center', marginBottom: 'clamp(30px, 6vw, 50px)' }}>
            <h2
              style={{
                fontSize: 'clamp(1.5rem, 5vw, 2.5rem)',
                fontWeight: '700',
                color: 'white',
                marginBottom: 'clamp(12px, 2vw, 20px)',
              }}
            >
              See PFA in Action
            </h2>
            <p
              style={{
                fontSize: 'clamp(1rem, 2vw, 1.2rem)',
                color: 'rgba(255,255,255,0.8)',
                maxWidth: '600px',
                margin: '0 auto',
              }}
            >
              Experience the revolutionary capabilities of Predictive Focus Algorithm technology
            </p>
          </div>

          {/* Video Container */}
          <div
            style={{
              position: 'relative',
              width: '100%',
              maxWidth: '900px',
              margin: '0 auto',
              borderRadius: 'clamp(10px, 3vw, 20px)',
              overflow: 'hidden',
              boxShadow: '0 10px 30px rgba(0,0,0,0.15)',
              backgroundColor: '#000',
            }}
          >
            <div
              style={{ position: 'relative', width: '100%', paddingBottom: '56.25%', height: 0 }}
            >
              {!isVideoPlaying ? (
                <div
                  style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    backgroundImage:
                      'linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url("https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=1920&h=1080&fit=crop")',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease',
                  }}
                  onClick={handlePlayVideo}
                >
                  {/* Play Button */}
                  <div
                    style={{
                      width: 'clamp(50px, 18vw, 120px)',
                      height: 'clamp(50px, 18vw, 120px)',
                      backgroundColor: 'rgba(59, 130, 246, 0.9)',
                      borderRadius: '50%',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      cursor: 'pointer',
                      transition: 'all 0.3s ease',
                      boxShadow: '0 10px 30px rgba(59, 130, 246, 0.4)',
                    }}
                  >
                    <div
                      style={{
                        width: 0,
                        height: 0,
                        borderLeft: 'clamp(14px, 7vw, 35px) solid white',
                        borderTop: 'clamp(8px, 4vw, 18px) solid transparent',
                        borderBottom: 'clamp(8px, 4vw, 18px) solid transparent',
                        marginLeft: 'clamp(2px, 1vw, 6px)',
                      }}
                    />
                  </div>
                  {/* Video Title */}
                  <div
                    style={{
                      position: 'absolute',
                      bottom: 'clamp(16px, 6vw, 50px)',
                      left: 'clamp(16px, 6vw, 50px)',
                      color: 'white',
                    }}
                  >
                    <h3
                      style={{
                        fontSize: 'clamp(1.1rem, 4vw, 2rem)',
                        fontWeight: '600',
                        marginBottom: 'clamp(6px, 2vw, 10px)',
                        textShadow: '2px 2px 4px rgba(0,0,0,0.8)',
                      }}
                    >
                      Predictive Focus Algorithm Demo
                    </h3>
                    <p
                      style={{
                        fontSize: 'clamp(0.9rem, 2vw, 1.2rem)',
                        opacity: 0.9,
                        textShadow: '1px 1px 2px rgba(0,0,0,0.8)',
                      }}
                    >
                      See the technology in action
                    </p>
                  </div>
                  {/* Duration Badge */}
                  <div
                    style={{
                      position: 'absolute',
                      top: 'clamp(10px, 4vw, 30px)',
                      right: 'clamp(10px, 4vw, 30px)',
                      backgroundColor: 'rgba(0, 0, 0, 0.8)',
                      color: 'white',
                      padding: '8px 15px',
                      borderRadius: '20px',
                      fontSize: 'clamp(0.8rem, 2vw, 1rem)',
                      fontWeight: '500',
                      backdropFilter: 'blur(10px)',
                    }}
                  >
                    2:30
                  </div>
                </div>
              ) : videoError ? (
                <div
                  style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    backgroundImage:
                      'linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url("https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=1920&h=1080&fit=crop")',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'white',
                    textAlign: 'center',
                    padding: '40px',
                  }}
                >
                  <div style={{ fontSize: '4rem', marginBottom: '30px' }}>🎬</div>
                  <h3
                    style={{
                      fontSize: 'clamp(1.2rem, 4vw, 2rem)',
                      fontWeight: '600',
                      marginBottom: '20px',
                      textShadow: '2px 2px 4px rgba(0,0,0,0.8)',
                    }}
                  >
                    PFA Technology Demonstration
                  </h3>
                  <p
                    style={{
                      fontSize: 'clamp(1rem, 2vw, 1.2rem)',
                      opacity: 0.9,
                      textShadow: '1px 1px 2px rgba(0,0,0,0.8)',
                      marginBottom: '30px',
                    }}
                  >
                    Video content will be available soon
                  </p>
                  <button
                    onClick={() => window.open('https://www.dahuasecurity.com', '_blank')}
                    style={{
                      background: 'linear-gradient(135deg, #3b82f6 0%, #2563eb 100%)',
                      border: 'none',
                      padding: 'clamp(10px, 2vw, 15px) clamp(18px, 4vw, 30px)',
                      borderRadius: '30px',
                      color: 'white',
                      fontSize: 'clamp(0.9rem, 2vw, 1rem)',
                      fontWeight: '600',
                      cursor: 'pointer',
                      boxShadow: '0 10px 25px rgba(59, 130, 246, 0.4)',
                      transition: 'all 0.3s ease',
                    }}
                  >
                    Visit Dahua Website
                  </button>
                </div>
              ) : (
                <div
                  style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                  }}
                >
                  <video
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                    }}
                    controls
                    autoPlay
                    onError={handleVideoError}
                  >
                    <source
                      src="https://www.dahuasecurity.com/asset/upload/video/Predictive_Focus_Algorithm_(PFA).mp4"
                      type="video/mp4"
                    />
                    <source
                      src="https://www.dahuasecurity.com/asset/upload/video/Predictive_Focus_Algorithm_(PFA).mp4"
                      type="video/mp4"
                    />
                    Your browser does not support the video tag.
                  </video>
                </div>
              )}
            </div>
          </div>

          {/* Video Features */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))',
              gap: 'clamp(12px, 3vw, 24px)',
              marginTop: 'clamp(30px, 6vw, 60px)',
              maxWidth: '800px',
              marginLeft: 'auto',
              marginRight: 'auto',
            }}
          >
            {[
              { icon: '🎯', title: 'Smart Focus', desc: 'AI-powered precision' },
              { icon: '⚡', title: 'Lightning Fast', desc: '0.1s response time' },
              { icon: '🔍', title: 'Crystal Clear', desc: '4K resolution support' },
              { icon: '🚫', title: 'No Hunting', desc: 'Eliminates focus drift' },
            ].map((feature, index) => (
              <div
                key={index}
                style={{
                  textAlign: 'center',
                  padding: 'clamp(16px, 3vw, 25px) clamp(8px, 2vw, 20px)',
                  backgroundColor: 'rgba(255,255,255,0.05)',
                  borderRadius: '15px',
                  border: '1px solid rgba(255,255,255,0.1)',
                  transition: 'all 0.3s ease',
                  cursor: 'pointer',
                  backdropFilter: 'blur(10px)',
                }}
              >
                <div style={{ fontSize: '2rem', marginBottom: '12px' }}>{feature.icon}</div>
                <h4
                  style={{
                    color: 'white',
                    fontSize: '1rem',
                    fontWeight: '600',
                    marginBottom: '6px',
                  }}
                >
                  {feature.title}
                </h4>
                <p
                  style={{
                    color: 'rgba(255,255,255,0.7)',
                    fontSize: '0.95rem',
                    margin: 0,
                  }}
                >
                  {feature.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Tab Navigation */}
      <div
        style={{
          backgroundColor: 'white',
          borderBottom: '1px solid #e5e7eb',
          position: 'sticky',
          top: '80px',
          zIndex: 10,
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
              display: 'flex',
              flexWrap: 'wrap',
              gap: 0,
            }}
          >
            {[
              { id: 'overview', label: 'Overview' },
              { id: 'features', label: 'Key Features' },
              { id: 'technology', label: 'Technology' },
              { id: 'applications', label: 'Applications' },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                style={{
                  padding: 'clamp(12px, 3vw, 20px) clamp(16px, 4vw, 30px)',
                  border: 'none',
                  backgroundColor: 'transparent',
                  color: activeTab === tab.id ? '#3b82f6' : '#6b7280',
                  fontWeight: activeTab === tab.id ? '600' : '500',
                  fontSize: 'clamp(0.95rem, 2vw, 1.1rem)',
                  cursor: 'pointer',
                  borderBottom:
                    activeTab === tab.id ? '3px solid #3b82f6' : '3px solid transparent',
                  transition: 'all 0.3s ease',
                }}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Content Sections */}
      <div
        style={{
          backgroundColor: 'white',
          padding: 'clamp(30px, 8vw, 80px) 0',
        }}
      >
        <div
          style={{
            maxWidth: '1200px',
            margin: '0 auto',
            padding: '0 clamp(8px, 4vw, 24px)',
          }}
        >
          {/* Overview Tab */}
          {activeTab === 'overview' && (
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: '1fr',
                gap: 'clamp(30px, 6vw, 60px)',
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
                  <h2
                    style={{
                      fontSize: 'clamp(1.5rem, 5vw, 2.5rem)',
                      fontWeight: '700',
                      color: '#1e293b',
                      marginBottom: 'clamp(12px, 2vw, 25px)',
                      lineHeight: '1.2',
                    }}
                  >
                    Superior Focus Performance
                  </h2>
                  <p
                    style={{
                      fontSize: 'clamp(1rem, 2vw, 1.2rem)',
                      lineHeight: '1.7',
                      color: '#64748b',
                      marginBottom: 'clamp(12px, 2vw, 25px)',
                    }}
                  >
                    PFA Technology revolutionizes auto-focus systems by predicting focus
                    requirements before they are needed, ensuring your cameras capture every detail
                    with unprecedented clarity.
                  </p>
                  <p
                    style={{
                      fontSize: 'clamp(0.95rem, 1.8vw, 1.1rem)',
                      lineHeight: '1.6',
                      color: '#64748b',
                      marginBottom: 'clamp(18px, 3vw, 30px)',
                    }}
                  >
                    Our advanced algorithms analyze scene conditions, subject movement, and lighting
                    changes to maintain perfect focus in real-time, eliminating focus hunting and
                    delivering consistently sharp images.
                  </p>

                  {/* Stats */}
                  <div
                    style={{
                      display: 'grid',
                      gridTemplateColumns: '1fr 1fr',
                      gap: 'clamp(10px, 2vw, 20px)',
                    }}
                  >
                    <div
                      style={{
                        backgroundColor: '#eff6ff',
                        padding: 'clamp(12px, 2vw, 20px)',
                        borderRadius: '12px',
                        textAlign: 'center',
                      }}
                    >
                      <div
                        style={{
                          fontSize: 'clamp(1.2rem, 3vw, 2rem)',
                          fontWeight: '800',
                          color: '#3b82f6',
                          marginBottom: '5px',
                        }}
                      >
                        99.9%
                      </div>
                      <div
                        style={{
                          fontSize: '0.9rem',
                          color: '#64748b',
                          fontWeight: '500',
                        }}
                      >
                        Focus Accuracy
                      </div>
                    </div>
                    <div
                      style={{
                        backgroundColor: '#eff6ff',
                        padding: 'clamp(12px, 2vw, 20px)',
                        borderRadius: '12px',
                        textAlign: 'center',
                      }}
                    >
                      <div
                        style={{
                          fontSize: 'clamp(1.2rem, 3vw, 2rem)',
                          fontWeight: '800',
                          color: '#3b82f6',
                          marginBottom: '5px',
                        }}
                      >
                        0.1s
                      </div>
                      <div
                        style={{
                          fontSize: '0.9rem',
                          color: '#64748b',
                          fontWeight: '500',
                        }}
                      >
                        Focus Speed
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* Image */}
              <div style={{ position: 'relative', marginTop: 'clamp(20px, 4vw, 0)' }}>
                <Image
                  src="/api/placeholder/600/450"
                  alt="Predictive Focus Technology - Crystal Clear Focus Through Camera Lens"
                  style={{
                    width: '100%',
                    maxWidth: '500px',
                    height: 'clamp(180px, 40vw, 450px)',
                    objectFit: 'cover',
                    borderRadius: 'clamp(10px, 3vw, 20px)',
                    boxShadow: '0 10px 30px rgba(0,0,0,0.15)',
                    margin: '0 auto',
                  }}
                  onError={(e) => {
                    const target = e.target as HTMLImageElement
                    target.src =
                      'https://images.unsplash.com/photo-1606041008023-472dfb5e530f?w=600&h=500&fit=crop'
                  }}
                />
                <div
                  style={{
                    position: 'absolute',
                    top: 'clamp(10px, 4vw, 20px)',
                    left: 'clamp(10px, 4vw, 20px)',
                    backgroundColor: 'rgba(59, 130, 246, 0.9)',
                    color: 'white',
                    padding: '8px 12px',
                    borderRadius: '8px',
                    fontSize: '0.9rem',
                    fontWeight: '600',
                    backdropFilter: 'blur(10px)',
                  }}
                >
                  AUTO-FOCUS ACTIVE
                </div>
                {/* Focus Ring Animation */}
                <div
                  style={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    width: 'clamp(40px, 18vw, 100px)',
                    height: 'clamp(40px, 18vw, 100px)',
                    border: '2px solid rgba(59, 130, 246, 0.6)',
                    borderRadius: '50%',
                    animation: 'focusRing 3s ease-in-out infinite',
                    pointerEvents: 'none',
                  }}
                />
                <div
                  style={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    width: 'clamp(24px, 10vw, 60px)',
                    height: 'clamp(24px, 10vw, 60px)',
                    border: '1px solid rgba(59, 130, 246, 0.8)',
                    borderRadius: '50%',
                    animation: 'focusRing 3s ease-in-out infinite 1.5s',
                    pointerEvents: 'none',
                  }}
                />
              </div>
            </div>
          )}

          {/* Features Tab */}
          {activeTab === 'features' && (
            <div>
              <div style={{ textAlign: 'center', marginBottom: 'clamp(30px, 6vw, 60px)' }}>
                <h2
                  style={{
                    fontSize: 'clamp(1.5rem, 5vw, 2.5rem)',
                    fontWeight: '700',
                    color: '#1e293b',
                    marginBottom: 'clamp(12px, 2vw, 20px)',
                  }}
                >
                  Advanced Features
                </h2>
                <p
                  style={{
                    fontSize: 'clamp(1rem, 2vw, 1.2rem)',
                    color: '#64748b',
                    maxWidth: '600px',
                    margin: '0 auto',
                  }}
                >
                  Cutting-edge capabilities that set PFA Technology apart
                </p>
              </div>

              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
                  gap: 'clamp(16px, 4vw, 30px)',
                }}
              >
                {[
                  {
                    icon: '🎯',
                    title: 'Intelligent Auto-Focus',
                    description: 'Advanced AI-powered focusing system that adapts to any scenario',
                  },
                  {
                    icon: '⚡',
                    title: 'Predictive Adjustment',
                    description: 'Anticipates focus needs before they occur for seamless tracking',
                  },
                  {
                    icon: '🔍',
                    title: 'Enhanced Clarity',
                    description: 'Delivers crystal-clear images with exceptional detail resolution',
                  },
                  {
                    icon: '🚫',
                    title: 'Reduced Focus Hunting',
                    description: 'Eliminates annoying focus hunting for stable, consistent results',
                  },
                  {
                    icon: '🌟',
                    title: 'Multi-Condition Optimization',
                    description:
                      'Performs flawlessly in various lighting and environmental conditions',
                  },
                  {
                    icon: '⚙️',
                    title: 'Real-Time Processing',
                    description:
                      'Instant focus adjustments with minimal latency for live applications',
                  },
                ].map((feature, index) => (
                  <div
                    key={index}
                    style={{
                      backgroundColor: '#f8fafc',
                      padding: 'clamp(18px, 4vw, 30px)',
                      borderRadius: '16px',
                      textAlign: 'center',
                      border: '1px solid #e2e8f0',
                      transition: 'all 0.3s ease',
                      cursor: 'pointer',
                    }}
                  >
                    <div style={{ fontSize: '2rem', marginBottom: '12px' }}>{feature.icon}</div>
                    <h3
                      style={{
                        fontSize: 'clamp(1.1rem, 2vw, 1.3rem)',
                        fontWeight: '600',
                        color: '#1e293b',
                        marginBottom: '10px',
                      }}
                    >
                      {feature.title}
                    </h3>
                    <p style={{ color: '#64748b', lineHeight: '1.6' }}>{feature.description}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Technology Tab */}
          {activeTab === 'technology' && (
            <div>
              <div style={{ textAlign: 'center', marginBottom: 'clamp(30px, 6vw, 60px)' }}>
                <h2
                  style={{
                    fontSize: 'clamp(1.5rem, 5vw, 2.5rem)',
                    fontWeight: '700',
                    color: '#1e293b',
                    marginBottom: 'clamp(12px, 2vw, 20px)',
                  }}
                >
                  How PFA Works
                </h2>
                <p
                  style={{
                    fontSize: 'clamp(1rem, 2vw, 1.2rem)',
                    color: '#64748b',
                    maxWidth: '700px',
                    margin: '0 auto',
                  }}
                >
                  Advanced algorithms and machine learning combine to deliver unparalleled focus
                  performance
                </p>
              </div>

              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
                  gap: 'clamp(16px, 4vw, 30px)',
                  marginBottom: 'clamp(30px, 6vw, 60px)',
                }}
              >
                {[
                  {
                    step: '01',
                    title: 'Scene Analysis',
                    description:
                      'AI analyzes the scene composition, lighting conditions, and subject movement patterns',
                  },
                  {
                    step: '02',
                    title: 'Prediction Algorithm',
                    description:
                      'Advanced algorithms predict where focus will be needed based on real-time data',
                  },
                  {
                    step: '03',
                    title: 'Focus Adjustment',
                    description:
                      "Lens system adjusts proactively, ensuring perfect focus before it's needed",
                  },
                ].map((item, index) => (
                  <div key={index} style={{ textAlign: 'center', position: 'relative' }}>
                    <div
                      style={{
                        width: 'clamp(40px, 12vw, 80px)',
                        height: 'clamp(40px, 12vw, 80px)',
                        backgroundColor: '#3b82f6',
                        color: 'white',
                        borderRadius: '50%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontSize: 'clamp(1rem, 3vw, 1.5rem)',
                        fontWeight: '700',
                        margin: '0 auto 16px auto',
                        boxShadow: '0 6px 18px rgba(59, 130, 246, 0.2)',
                      }}
                    >
                      {item.step}
                    </div>
                    <h3
                      style={{
                        fontSize: 'clamp(1.1rem, 2vw, 1.3rem)',
                        fontWeight: '600',
                        color: '#1e293b',
                        marginBottom: '10px',
                      }}
                    >
                      {item.title}
                    </h3>
                    <p style={{ color: '#64748b', lineHeight: '1.6' }}>{item.description}</p>
                  </div>
                ))}
              </div>

              {/* Technical Specifications */}
              <div
                style={{
                  backgroundColor: '#f8fafc',
                  padding: 'clamp(18px, 4vw, 40px)',
                  borderRadius: '16px',
                  border: '1px solid #e2e8f0',
                }}
              >
                <h3
                  style={{
                    fontSize: 'clamp(1.2rem, 3vw, 1.8rem)',
                    fontWeight: '600',
                    color: '#1e293b',
                    marginBottom: 'clamp(18px, 3vw, 30px)',
                    textAlign: 'center',
                  }}
                >
                  Technical Specifications
                </h3>
                <div
                  style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))',
                    gap: 'clamp(10px, 2vw, 20px)',
                  }}
                >
                  {[
                    { label: 'Focus Speed', value: '0.1 seconds' },
                    { label: 'Accuracy', value: '99.9%' },
                    { label: 'Operating Range', value: '0.3m - ∞' },
                    { label: 'Light Sensitivity', value: '0.01 lux minimum' },
                  ].map((spec, index) => (
                    <div
                      key={index}
                      style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        padding: 'clamp(10px, 2vw, 15px)',
                        backgroundColor: 'white',
                        borderRadius: '8px',
                        border: '1px solid #e5e7eb',
                      }}
                    >
                      <span style={{ fontWeight: '500', color: '#374151' }}>{spec.label}</span>
                      <span style={{ fontWeight: '600', color: '#3b82f6' }}>{spec.value}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Applications Tab */}
          {activeTab === 'applications' && (
            <div>
              <div style={{ textAlign: 'center', marginBottom: 'clamp(30px, 6vw, 60px)' }}>
                <h2
                  style={{
                    fontSize: 'clamp(1.5rem, 5vw, 2.5rem)',
                    fontWeight: '700',
                    color: '#1e293b',
                    marginBottom: 'clamp(12px, 2vw, 20px)',
                  }}
                >
                  Real-World Applications
                </h2>
                <p
                  style={{
                    fontSize: 'clamp(1rem, 2vw, 1.2rem)',
                    color: '#64748b',
                    maxWidth: '700px',
                    margin: '0 auto',
                  }}
                >
                  PFA Technology excels in demanding environments where focus precision is critical
                </p>
              </div>

              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
                  gap: 'clamp(16px, 4vw, 30px)',
                }}
              >
                {[
                  {
                    title: 'Forensic Analysis',
                    description:
                      'Crystal-clear evidence capture with zero focus drift during critical investigations',
                    image:
                      'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=400&h=250&fit=crop',
                    benefits: ['Evidence quality', 'Detail preservation', 'Court admissibility'],
                  },
                  {
                    title: 'Security Monitoring',
                    description:
                      'Continuous sharp surveillance with automatic focus adjustment for moving subjects',
                    image:
                      'https://images.unsplash.com/photo-1557804506-669a67965ba0?w=400&h=250&fit=crop',
                    benefits: ['24/7 clarity', 'Subject tracking', 'Incident documentation'],
                  },
                  {
                    title: 'Traffic Surveillance',
                    description:
                      'Perfect license plate capture and vehicle identification at all distances',
                    image:
                      'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=400&h=250&fit=crop',
                    benefits: ['Plate recognition', 'Speed enforcement', 'Violation capture'],
                  },
                ].map((app, index) => (
                  <div
                    key={index}
                    style={{
                      backgroundColor: 'white',
                      borderRadius: '16px',
                      overflow: 'hidden',
                      boxShadow: '0 6px 18px rgba(0,0,0,0.08)',
                      transition: 'all 0.3s ease',
                      cursor: 'pointer',
                    }}
                  >
                    {app.image && (
                      <Image
                        src={app.image}
                        alt={app.title}
                        style={{
                          width: '100%',
                          height: 'clamp(120px, 30vw, 200px)',
                          objectFit: 'cover',
                        }}
                      />
                    )}
                    <div style={{ padding: 'clamp(14px, 3vw, 25px)' }}>
                      <h3
                        style={{
                          fontSize: 'clamp(1.1rem, 2vw, 1.4rem)',
                          fontWeight: '600',
                          color: '#1e293b',
                          marginBottom: '10px',
                        }}
                      >
                        {app.title}
                      </h3>
                      <p
                        style={{
                          color: '#64748b',
                          lineHeight: '1.6',
                          marginBottom: '14px',
                        }}
                      >
                        {app.description}
                      </p>
                      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                        {app.benefits.map((benefit, idx) => (
                          <span
                            key={idx}
                            style={{
                              backgroundColor: '#eff6ff',
                              color: '#3b82f6',
                              padding: '4px 12px',
                              borderRadius: '20px',
                              fontSize: '0.85rem',
                              fontWeight: '500',
                            }}
                          >
                            {benefit}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Get Free Consultation Section */}
      <section className="container mx-auto px-4 py-12">
        <div className="bg-gradient-to-r from-blue-700 to-blue-400 rounded-2xl p-10 text-center shadow-lg">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Get Free Consultation</h2>
          <p className="text-white mb-6">
            Ready to experience Predictive Focus? Our experts will help you choose the best solution
            for your needs.
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
