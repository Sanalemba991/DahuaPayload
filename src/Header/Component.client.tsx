'use client'
import { Media } from '@/payload-types'
import Image from 'next/image'
import Link from 'next/link'
import React, { useState, useRef, useCallback, useEffect } from 'react'

interface HeaderClientProps {
  logo: Media
  favicon: Media
  telephone: string
  email: string
}

export const HeaderClient: React.FC<HeaderClientProps> = ({ logo }) => {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
  const navRef = useRef<HTMLDivElement>(null)
  const logoUrl =
    logo?.url?.startsWith('http') || !logo?.url
      ? logo.url
      : `${process.env.NEXT_PUBLIC_SERVER_URL}${logo.url}`
  // Close dropdown when clicking outside
  const handleClickOutside = useCallback((event: MouseEvent) => {
    if (navRef.current && !navRef.current.contains(event.target as Node)) {
      setActiveDropdown(null)
    }
  }, [])
  console.log('Resolved Logo URL:', logoUrl)
  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [handleClickOutside])

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 shadow-md"
      style={{
        backgroundColor: 'white',
        // backdropFilter: 'blur(1px) saturate(1.5)',
        // WebkitBackdropFilter: 'blur(15px) saturate(1.5)',
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 9999,
        borderBottom: '1px solid rgba(255, 255, 255, 0.2)',
      }}
    >
      <nav
        ref={navRef}
        style={{
          width: '100%',
          padding: '15px 0',
          margin: '0 auto',
        }}
      >
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            padding: '0 5px',
            maxWidth: '1200px',
            margin: '0 auto',
          }}
        >
          {/* Logo - Left Side */}
          <div style={{ width: '150px' }}>
            <Link href="/" style={{ display: 'block' }}>
              {logo?.url && (
                <Image
                  priority={true}
                  src={
                    logo.url.startsWith('http')
                      ? logo.url
                      : `${process.env.NEXT_PUBLIC_SERVER_URL}${logo.url}`
                  }
                  alt={logo.alt || 'Site Logo'}
                  width={140}
                  height={40}
                  // style={{
                  //   objectFit: 'contain',
                  //   filter: 'brightness(1.2) contrast(1.1)',
                  //   transition: 'all 0.3s ease',
                  //   cursor: 'pointer',
                  // }}
                  onError={(e) => {
                    const target = e.target as HTMLImageElement
                    target.style.display = 'none'
                    const fallback = document.createElement('span')
                    fallback.style.color = 'white'
                    fallback.style.fontWeight = 'bold'
                    fallback.style.fontSize = '20px'
                    fallback.style.textShadow = '0 2px 4px rgba(0,0,0,0.8)'
                    fallback.textContent = 'DAHUA'
                    target.parentNode?.appendChild(fallback)
                  }}
                  onMouseEnter={(e) => {
                    ;(e.target as HTMLImageElement).style.filter =
                      'brightness(1.3) contrast(1.2) drop-shadow(0 2px 8px rgba(59, 130, 246, 0.4))'
                    ;(e.target as HTMLImageElement).style.transform = 'scale(1.05)'
                  }}
                  onMouseLeave={(e) => {
                    ;(e.target as HTMLImageElement).style.filter = 'brightness(1.2) contrast(1.1)'
                    ;(e.target as HTMLImageElement).style.transform = 'scale(1)'
                  }}
                />
              )}
            </Link>
          </div>

          {/* Main Navigation - Center */}
          <div
            style={{
              display: 'flex',
              gap: '25px',
              alignItems: 'center',
              justifyContent: 'center',
              flex: 1,
            }}
          >
            <Link
              href="/"
              style={{
                color: 'white',
                fontWeight: 'bold',
                fontSize: '16px',
                textShadow: '0 1px 3px rgba(0,0,0,0.8)',
                filter: 'brightness(1.1)',
                transition: 'all 0.3s ease',
              }}
              onMouseEnter={(e) => {
                ;(e.target as HTMLElement).style.textShadow = '0 2px 8px rgba(59, 130, 246, 0.6)'
                ;(e.target as HTMLElement).style.color = '#93c5fd'
              }}
              onMouseLeave={(e) => {
                ;(e.target as HTMLElement).style.textShadow = '0 1px 3px rgba(0,0,0,0.8)'
                ;(e.target as HTMLElement).style.color = 'white'
              }}
            >
              Home
            </Link>
            <Link
              href="/products"
              style={{
                color: 'black',
                fontWeight: 'bold',
                fontSize: '16px',
                textShadow: '0 1px 3px rgba(0,0,0,0.8)',
                filter: 'brightness(1.1)',
                transition: 'all 0.3s ease',
              }}
              onMouseEnter={(e) => {
                ;(e.target as HTMLElement).style.textShadow = '0 2px 8px rgba(59, 130, 246, 0.6)'
                ;(e.target as HTMLElement).style.color = '#93c5fd'
              }}
              onMouseLeave={(e) => {
                ;(e.target as HTMLElement).style.textShadow = '0 1px 3px rgba(0,0,0,0.8)'
                ;(e.target as HTMLElement).style.color = 'red'
              }}
            >
              Products
            </Link>

            {/* Technologies with Dropdown and Curved Image */}
            <div
              style={{ position: 'relative' }}
              onMouseEnter={() => setActiveDropdown('technologies')}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <Link
                href="/technologies"
                style={{
                  color: 'white',
                  fontWeight: 'bold',
                  fontSize: '16px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '5px',
                  padding: '15px 0',
                  textShadow: '0 1px 3px rgba(0,0,0,0.8)',
                  filter: 'brightness(1.1)',
                  transition: 'all 0.3s ease',
                }}
                onMouseEnter={(e) => {
                  ;(e.target as HTMLElement).style.textShadow = '0 2px 8px rgba(59, 130, 246, 0.6)'
                  ;(e.target as HTMLElement).style.color = '#93c5fd'
                }}
                onMouseLeave={(e) => {
                  ;(e.target as HTMLElement).style.textShadow = '0 1px 3px rgba(0,0,0,0.8)'
                  ;(e.target as HTMLElement).style.color = 'white'
                }}
              >
                Technologies
                <svg
                  style={{
                    width: '12px',
                    height: '12px',
                    fill: 'white',
                    filter: 'drop-shadow(0 1px 2px rgba(0,0,0,0.8))',
                  }}
                  viewBox="0 0 20 20"
                >
                  <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
                </svg>
              </Link>

              {/* Technologies Dropdown Menu with Curved Image */}
              {activeDropdown === 'technologies' && (
                <>
                  <div
                    style={{
                      position: 'absolute',
                      top: '100%',
                      left: '0',
                      right: '0',
                      height: '10px',
                      backgroundColor: 'transparent',
                    }}
                  />

                  <div
                    style={{
                      position: 'absolute',
                      top: 'calc(100% + 10px)',
                      left: '0',
                      backgroundColor: 'rgba(255, 255, 255, 0.98)',
                      backdropFilter: 'blur(20px) saturate(1.8)',
                      WebkitBackdropFilter: 'blur(20px) saturate(1.8)',
                      width: '500px',
                      boxShadow: '0 12px 40px rgba(0,0,0,0.25), 0 4px 12px rgba(0,0,0,0.15)',
                      borderRadius: '12px',
                      zIndex: 10000,
                      border: '1px solid rgba(255, 255, 255, 0.4)',
                      overflow: 'hidden',
                    }}
                    onMouseEnter={() => setActiveDropdown('technologies')}
                    onMouseLeave={() => setActiveDropdown(null)}
                  >
                    <div style={{ display: 'flex' }}>
                      {/* Left Side - Menu Items */}
                      <div style={{ width: '280px', padding: '20px' }}>
                        <a
                          href="/technologies/wizsense"
                          style={{
                            display: 'block',
                            padding: '12px 0',
                            color: '#1f2937',
                            textDecoration: 'none',
                            fontSize: '14px',
                            fontWeight: '500',
                            transition: 'all 0.3s ease',
                          }}
                          onMouseEnter={(e) => {
                            ;(e.target as HTMLElement).style.color = '#1e40af'
                            ;(e.target as HTMLElement).style.transform = 'translateX(4px)'
                          }}
                          onMouseLeave={(e) => {
                            ;(e.target as HTMLElement).style.color = '#1f2937'
                            ;(e.target as HTMLElement).style.transform = 'translateX(0)'
                          }}
                        >
                          WizSense Technology
                        </a>
                        <a
                          href="/technologies/wizmind"
                          style={{
                            display: 'block',
                            padding: '12px 0',
                            color: '#1f2937',
                            textDecoration: 'none',
                            fontSize: '14px',
                            fontWeight: '500',
                            transition: 'all 0.3s ease',
                          }}
                          onMouseEnter={(e) => {
                            ;(e.target as HTMLElement).style.color = '#1e40af'
                            ;(e.target as HTMLElement).style.transform = 'translateX(4px)'
                          }}
                          onMouseLeave={(e) => {
                            ;(e.target as HTMLElement).style.color = '#1f2937'
                            ;(e.target as HTMLElement).style.transform = 'translateX(0)'
                          }}
                        >
                          WizMind Technology
                        </a>
                        <a
                          href="/technologies/full-color"
                          style={{
                            display: 'block',
                            padding: '12px 0',
                            color: '#1f2937',
                            textDecoration: 'none',
                            fontSize: '14px',
                            fontWeight: '500',
                            transition: 'all 0.3s ease',
                          }}
                          onMouseEnter={(e) => {
                            ;(e.target as HTMLElement).style.color = '#1e40af'
                            ;(e.target as HTMLElement).style.transform = 'translateX(4px)'
                          }}
                          onMouseLeave={(e) => {
                            ;(e.target as HTMLElement).style.color = '#1f2937'
                            ;(e.target as HTMLElement).style.transform = 'translateX(0)'
                          }}
                        >
                          Full-color Technology
                        </a>
                        <a
                          href="/technologies/auto-tracking"
                          style={{
                            display: 'block',
                            padding: '12px 0',
                            color: '#1f2937',
                            textDecoration: 'none',
                            fontSize: '14px',
                            fontWeight: '500',
                            transition: 'all 0.3s ease',
                          }}
                          onMouseEnter={(e) => {
                            ;(e.target as HTMLElement).style.color = '#1e40af'
                            ;(e.target as HTMLElement).style.transform = 'translateX(4px)'
                          }}
                          onMouseLeave={(e) => {
                            ;(e.target as HTMLElement).style.color = '#1f2937'
                            ;(e.target as HTMLElement).style.transform = 'translateX(0)'
                          }}
                        >
                          Auto Tracking 3.0
                        </a>
                        <a
                          href="/technologies/hdcvi-ten"
                          style={{
                            display: 'block',
                            padding: '12px 0',
                            color: '#1f2937',
                            textDecoration: 'none',
                            fontSize: '14px',
                            fontWeight: '500',
                            transition: 'all 0.3s ease',
                          }}
                          onMouseEnter={(e) => {
                            ;(e.target as HTMLElement).style.color = '#1e40af'
                            ;(e.target as HTMLElement).style.transform = 'translateX(4px)'
                          }}
                          onMouseLeave={(e) => {
                            ;(e.target as HTMLElement).style.color = '#1f2937'
                            ;(e.target as HTMLElement).style.transform = 'translateX(0)'
                          }}
                        >
                          HDCVI TEN Technology
                        </a>
                        <a
                          href="/technologies/predictive-focus"
                          style={{
                            display: 'block',
                            padding: '12px 0',
                            color: '#1f2937',
                            textDecoration: 'none',
                            fontSize: '14px',
                            fontWeight: '500',
                            transition: 'all 0.3s ease',
                          }}
                          onMouseEnter={(e) => {
                            ;(e.target as HTMLElement).style.color = '#1e40af'
                            ;(e.target as HTMLElement).style.transform = 'translateX(4px)'
                          }}
                          onMouseLeave={(e) => {
                            ;(e.target as HTMLElement).style.color = '#1f2937'
                            ;(e.target as HTMLElement).style.transform = 'translateX(0)'
                          }}
                        >
                          Predictive Focus Algorithm
                        </a>
                      </div>

                      {/* Right Side - Full Image */}
                      <div
                        style={{
                          width: '220px',
                          height: '280px',
                          position: 'relative',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                        }}
                      >
                        <Image
                          src="/images/wiz.png"
                          alt="Technologies"
                          width={200}
                          height={150}
                          style={{
                            objectFit: 'contain',
                            opacity: '0.95',
                            filter: 'drop-shadow(0 8px 25px rgba(0,0,0,0.15))',
                          }}
                          onError={(e) => {
                            ;(e.target as HTMLImageElement).style.display = 'none'
                          }}
                        />
                      </div>
                    </div>
                  </div>
                </>
              )}
            </div>

            {/* Solutions with Dropdown and Curved Image */}
            <div
              style={{ position: 'relative' }}
              onMouseEnter={() => setActiveDropdown('solutions')}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <Link
                href="/solutions"
                style={{
                  color: 'white',
                  fontWeight: 'bold',
                  fontSize: '16px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '5px',
                  padding: '15px 0',
                  textShadow: '0 1px 3px rgba(0,0,0,0.8)',
                  filter: 'brightness(1.1)',
                  transition: 'all 0.3s ease',
                }}
                onMouseEnter={(e) => {
                  ;(e.target as HTMLElement).style.textShadow = '0 2px 8px rgba(59, 130, 246, 0.6)'
                  ;(e.target as HTMLElement).style.color = '#93c5fd'
                }}
                onMouseLeave={(e) => {
                  ;(e.target as HTMLElement).style.textShadow = '0 1px 3px rgba(0,0,0,0.8)'
                  ;(e.target as HTMLElement).style.color = 'white'
                }}
              >
                Solutions
                <svg
                  style={{
                    width: '12px',
                    height: '12px',
                    fill: 'white',
                    filter: 'drop-shadow(0 1px 2px rgba(0,0,0,0.8))',
                  }}
                  viewBox="0 0 20 20"
                >
                  <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
                </svg>
              </Link>

              {/* Solutions Dropdown Menu with Curved Image */}
              {activeDropdown === 'solutions' && (
                <>
                  <div
                    style={{
                      position: 'absolute',
                      top: '100%',
                      left: '0',
                      right: '0',
                      height: '10px',
                      backgroundColor: 'transparent',
                    }}
                  />

                  <div
                    style={{
                      position: 'absolute',
                      top: 'calc(100% + 10px)',
                      left: '0',
                      backgroundColor: 'rgba(255, 255, 255, 0.98)',
                      backdropFilter: 'blur(20px) saturate(1.8)',
                      WebkitBackdropFilter: 'blur(20px) saturate(1.8)',
                      width: '450px',
                      boxShadow: '0 12px 40px rgba(0,0,0,0.25), 0 4px 12px rgba(0,0,0,0.15)',
                      borderRadius: '12px',
                      zIndex: 10000,
                      border: '1px solid rgba(255, 255, 255, 0.4)',
                      overflow: 'hidden',
                    }}
                    onMouseEnter={() => setActiveDropdown('solutions')}
                    onMouseLeave={() => setActiveDropdown(null)}
                  >
                    <div style={{ display: 'flex' }}>
                      {/* Left Side - Menu Items */}
                      <div style={{ width: '250px', padding: '20px' }}>
                        <Link
                          href="/solutions/building"
                          style={{
                            display: 'block',
                            padding: '14px 0',
                            color: '#1f2937',
                            textDecoration: 'none',
                            fontSize: '14px',
                            fontWeight: '500',
                            transition: 'all 0.3s ease',
                          }}
                          onMouseEnter={(e) => {
                            ;(e.target as HTMLElement).style.color = '#1e40af'
                            ;(e.target as HTMLElement).style.transform = 'translateX(4px)'
                          }}
                          onMouseLeave={(e) => {
                            ;(e.target as HTMLElement).style.color = '#1f2937'
                            ;(e.target as HTMLElement).style.transform = 'translateX(0)'
                          }}
                        >
                          Building
                        </Link>
                        <Link
                          href="/solutions/banking"
                          style={{
                            display: 'block',
                            padding: '14px 0',
                            color: '#1f2937',
                            textDecoration: 'none',
                            fontSize: '14px',
                            fontWeight: '500',
                            transition: 'all 0.3s ease',
                          }}
                          onMouseEnter={(e) => {
                            ;(e.target as HTMLElement).style.color = '#1e40af'
                            ;(e.target as HTMLElement).style.transform = 'translateX(4px)'
                          }}
                          onMouseLeave={(e) => {
                            ;(e.target as HTMLElement).style.color = '#1f2937'
                            ;(e.target as HTMLElement).style.transform = 'translateX(0)'
                          }}
                        >
                          Banking
                        </Link>
                        <Link
                          href="/solutions/retail"
                          style={{
                            display: 'block',
                            padding: '14px 0',
                            color: '#1f2937',
                            textDecoration: 'none',
                            fontSize: '14px',
                            fontWeight: '500',
                            transition: 'all 0.3s ease',
                          }}
                          onMouseEnter={(e) => {
                            ;(e.target as HTMLElement).style.color = '#1e40af'
                            ;(e.target as HTMLElement).style.transform = 'translateX(4px)'
                          }}
                          onMouseLeave={(e) => {
                            ;(e.target as HTMLElement).style.color = '#1f2937'
                            ;(e.target as HTMLElement).style.transform = 'translateX(0)'
                          }}
                        >
                          Retail
                        </Link>
                        <Link
                          href="/solutions/transportation"
                          style={{
                            display: 'block',
                            padding: '14px 0',
                            color: '#1f2937',
                            textDecoration: 'none',
                            fontSize: '14px',
                            fontWeight: '500',
                            transition: 'all 0.3s ease',
                          }}
                          onMouseEnter={(e) => {
                            ;(e.target as HTMLElement).style.color = '#1e40af'
                            ;(e.target as HTMLElement).style.transform = 'translateX(4px)'
                          }}
                          onMouseLeave={(e) => {
                            ;(e.target as HTMLElement).style.color = '#1f2937'
                            ;(e.target as HTMLElement).style.transform = 'translateX(0)'
                          }}
                        >
                          Transportation
                        </Link>
                        <Link
                          href="/solutions/government"
                          style={{
                            display: 'block',
                            padding: '14px 0',
                            color: '#1f2937',
                            textDecoration: 'none',
                            fontSize: '14px',
                            fontWeight: '500',
                            transition: 'all 0.3s ease',
                          }}
                          onMouseEnter={(e) => {
                            ;(e.target as HTMLElement).style.color = '#1e40af'
                            ;(e.target as HTMLElement).style.transform = 'translateX(4px)'
                          }}
                          onMouseLeave={(e) => {
                            ;(e.target as HTMLElement).style.color = '#1f2937'
                            ;(e.target as HTMLElement).style.transform = 'translateX(0)'
                          }}
                        >
                          Government
                        </Link>
                      </div>

                      {/* Right Side - Full Image */}
                      <div
                        style={{
                          width: '200px',
                          height: '250px',
                          position: 'relative',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                        }}
                      >
                        <Image
                          src="/images/aboutus.png"
                          alt="Solutions"
                          width={180}
                          height={130}
                          style={{
                            objectFit: 'contain',
                            opacity: '0.95',
                            filter: 'drop-shadow(0 8px 25px rgba(0,0,0,0.15))',
                          }}
                          onError={(e) => {
                            ;(e.target as HTMLImageElement).style.display = 'none'
                          }}
                        />
                      </div>
                    </div>
                  </div>
                </>
              )}
            </div>

            <Link
              href="/sira"
              style={{
                color: 'white',
                fontWeight: 'bold',
                fontSize: '16px',
                textShadow: '0 1px 3px rgba(0,0,0,0.8)',
                filter: 'brightness(1.1)',
                transition: 'all 0.3s ease',
              }}
              onMouseEnter={(e) => {
                ;(e.target as HTMLElement).style.textShadow = '0 2px 8px rgba(59, 130, 246, 0.6)'
                ;(e.target as HTMLElement).style.color = '#93c5fd'
              }}
              onMouseLeave={(e) => {
                ;(e.target as HTMLElement).style.textShadow = '0 1px 3px rgba(0,0,0,0.8)'
                ;(e.target as HTMLElement).style.color = 'white'
              }}
            >
              Sira
            </Link>
            <Link
              href="/about-us"
              style={{
                color: 'white',
                fontWeight: 'bold',
                fontSize: '16px',
                textShadow: '0 1px 3px rgba(0,0,0,0.8)',
                filter: 'brightness(1.1)',
                transition: 'all 0.3s ease',
              }}
              onMouseEnter={(e) => {
                ;(e.target as HTMLElement).style.textShadow = '0 2px 8px rgba(59, 130, 246, 0.6)'
                ;(e.target as HTMLElement).style.color = '#93c5fd'
              }}
              onMouseLeave={(e) => {
                ;(e.target as HTMLElement).style.textShadow = '0 1px 3px rgba(0,0,0,0.8)'
                ;(e.target as HTMLElement).style.color = 'white'
              }}
            >
              About Us
            </Link>
            <Link
              href="/contact"
              style={{
                color: 'white',
                fontWeight: 'bold',
                fontSize: '16px',
                textShadow: '0 1px 3px rgba(0,0,0,0.8)',
                filter: 'brightness(1.1)',
                transition: 'all 0.3s ease',
              }}
              onMouseEnter={(e) => {
                ;(e.target as HTMLElement).style.textShadow = '0 2px 8px rgba(59, 130, 246, 0.6)'
                ;(e.target as HTMLElement).style.color = '#93c5fd'
              }}
              onMouseLeave={(e) => {
                ;(e.target as HTMLElement).style.textShadow = '0 1px 3px rgba(0,0,0,0.8)'
                ;(e.target as HTMLElement).style.color = 'white'
              }}
            >
              Contact Us
            </Link>
          </div>

          {/* Contact Us - Right Side */}
          <div
            className=""
            style={{
              width: '150px',
              display: 'flex',
              justifyContent: 'flex-end',
            }}
          >
            {/* <Link
              href="/contact"
              style={{
                backgroundColor: 'rgba(220, 38, 38, 0.95)',
                color: 'white',
                padding: '10px 18px',
                borderRadius: '6px',
                fontWeight: 'bold',
                whiteSpace: 'nowrap',
                transition: 'all 0.3s ease',
                backdropFilter: 'blur(8px)',
                WebkitBackdropFilter: 'blur(8px)',
                textShadow: '0 1px 2px rgba(0,0,0,0.5)',
                boxShadow: '0 2px 8px rgba(220, 38, 38, 0.3)',
              }}
              onMouseEnter={(e) => {
                ;(e.target as HTMLElement).style.backgroundColor = 'rgba(220, 38, 38, 1)'
                ;(e.target as HTMLElement).style.transform = 'translateY(-2px)'
                ;(e.target as HTMLElement).style.boxShadow = '0 4px 12px rgba(220, 38, 38, 0.4)'
              }}
              onMouseLeave={(e) => {
                ;(e.target as HTMLElement).style.backgroundColor = 'rgba(220, 38, 38, 0.95)'
                ;(e.target as HTMLElement).style.transform = 'translateY(0)'
                ;(e.target as HTMLElement).style.boxShadow = '0 2px 8px rgba(220, 38, 38, 0.3)'
              }}
            >
              Contact Us
            </Link> */}
          </div>
        </div>
      </nav>
    </header>
  )
}
