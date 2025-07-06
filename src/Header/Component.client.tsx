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
  const [mobileOpen, setMobileOpen] = useState(false)
  const [mobileSubMenu, setMobileSubMenu] = useState<null | 'technologies' | 'solutions'>(null)
  const [logoError, setLogoError] = useState(false)
  const navRef = useRef<HTMLDivElement>(null)
  // More robust logo URL construction with fallback
  const logoUrl = React.useMemo(() => {
    if (!logo?.url) return '/images/dahualogo-removebg-preview.png.png' // Fallback to existing Dahua logo

    // If this is the problematic logo file, use fallback immediately
    if (logo.url.includes('logodahu-1.jpg')) {
      console.log('Detected problematic logo file, using fallback immediately')
      setLogoError(true)
      return '/images/dahualogo-removebg-preview.png.png'
    }

    if (logo.url.startsWith('http')) {
      return logo.url
    }

    const serverUrl = process.env.NEXT_PUBLIC_SERVER_URL || 'https://dahua.lovosis.com'
    return `${serverUrl}${logo.url}`
  }, [logo?.url])

  const handleClickOutside = useCallback((event: MouseEvent) => {
    if (navRef.current && !navRef.current.contains(event.target as Node)) {
      setActiveDropdown(null)
    }
  }, [])

  const handleLogoError = useCallback(() => {
    console.error('Logo failed to load:', logoUrl)
    console.log('Setting logoError to true, will use fallback logo')
    setLogoError(true)
  }, [logoUrl])

  console.log('Resolved Logo URL:', logoUrl ?? '')
  console.log('Logo error state:', logoError)

  // Auto-fallback after 3 seconds if logo hasn't loaded
  useEffect(() => {
    if (!logoError && logo?.url && !logo.url.includes('dahualogo-removebg-preview')) {
      const fallbackTimer = setTimeout(() => {
        console.log('Logo taking too long to load, falling back to default')
        setLogoError(true)
      }, 3000)

      return () => clearTimeout(fallbackTimer)
    }
  }, [logo?.url, logoError])

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [handleClickOutside])

  return (
    <>
      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes slideInLeft {
          from {
            transform: translateX(-100%);
          }
          to {
            transform: translateX(0);
          }
        }

        @keyframes slideInRight {
          from {
            transform: translateX(100%);
            opacity: 0;
          }
          to {
            transform: translateX(0);
            opacity: 1;
          }
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
      <header
        className="fixed top-0 right-0 z-50 hadow-md"
        style={{
          backgroundColor: 'white',
          // backdropFilter: 'blur(1px) saturate(1.5)',
          // WebkitBackdropFilter: 'blur(15px) saturate(1.5)',
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,

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
              padding: '0 15px',

              margin: '0 auto',
            }}
          >
            <div className="flex w-full md:hidden items-center justify-between">
              {/* Animated Hamburger on the left */}
              <button
                className="flex items-center md:hidden z-[100000] relative"
                style={{
                  background: 'none',
                  border: 'none',
                  cursor: 'pointer',
                  padding: '8px',
                  borderRadius: '6px',
                  transition: 'all 0.3s ease',
                }}
                aria-label="Toggle menu"
                onClick={() => setMobileOpen((prev) => !prev)}
              >
                <div className="w-6 h-6 relative flex flex-col justify-center items-center">
                  <div
                    className="w-5 h-0.5 bg-red-600 rounded-full transition-all duration-300 ease-in-out absolute"
                    style={{
                      transform: mobileOpen ? 'rotate(45deg)' : 'rotate(0) translateY(-6px)',
                      transformOrigin: 'center',
                    }}
                  />
                  <div
                    className="w-5 h-0.5 bg-red-600 rounded-full transition-all duration-300 ease-in-out absolute"
                    style={{
                      opacity: mobileOpen ? 0 : 1,
                      transform: mobileOpen ? 'scale(0)' : 'scale(1)',
                    }}
                  />
                  <div
                    className="w-5 h-0.5 bg-red-600 rounded-full transition-all duration-300 ease-in-out absolute"
                    style={{
                      transform: mobileOpen ? 'rotate(-45deg)' : 'rotate(0) translateY(6px)',
                      transformOrigin: 'center',
                    }}
                  />
                </div>
              </button>
              {/* Logo on the right */}
              {(logo?.url || logoError) && (
                <Link href="/" style={{ display: 'block' }}>
                  {logoError ? (
                    <img
                      src="/images/dahualogo-removebg-preview.png.png"
                      alt={logo?.alt || 'Site Logo'}
                      width={100}
                      height={30}
                      style={{ objectFit: 'contain' }}
                      className="object-contain"
                    />
                  ) : (
                    <Image
                      priority={true}
                      src={logoUrl}
                      alt={logo?.alt || 'Site Logo'}
                      width={100}
                      height={30}
                      onError={handleLogoError}
                      className="object-contain"
                      onLoad={() => console.log('Logo loaded successfully')}
                    />
                  )}
                </Link>
              )}
            </div>
            {/* Logo - Left Side */}
            <div
              style={{ width: '150px', marginLeft: '16px' }}
              className="hidden md:flex items-center justify-start"
            >
              <Link href="/" style={{ display: 'block' }}>
                {(logo?.url || logoError) &&
                  (logoError ? (
                    <img
                      src="/images/dahualogo-removebg-preview.png.png"
                      alt={logo?.alt || 'Site Logo'}
                      width={140}
                      height={40}
                      style={{
                        objectFit: 'contain',
                        filter: 'brightness(1.2) contrast(1.1)',
                        transition: 'all 0.3s ease',
                        cursor: 'pointer',
                      }}
                      onMouseEnter={(e) => {
                        ;(e.target as HTMLImageElement).style.filter =
                          'brightness(1.3) contrast(1.2) drop-shadow(0 2px 8px rgba(59, 130, 246, 0.4))'
                        ;(e.target as HTMLImageElement).style.transform = 'scale(1.05)'
                      }}
                      onMouseLeave={(e) => {
                        ;(e.target as HTMLImageElement).style.filter =
                          'brightness(1.2) contrast(1.1)'
                        ;(e.target as HTMLImageElement).style.transform = 'scale(1)'
                      }}
                    />
                  ) : (
                    <Image
                      priority={true}
                      src={logoUrl}
                      alt={logo?.alt || 'Site Logo'}
                      width={140}
                      height={40}
                      onError={handleLogoError}
                      style={{
                        objectFit: 'contain',
                        filter: 'brightness(1.2) contrast(1.1)',
                        transition: 'all 0.3s ease',
                        cursor: 'pointer',
                      }}
                      onMouseEnter={(e) => {
                        ;(e.target as HTMLImageElement).style.filter =
                          'brightness(1.3) contrast(1.2) drop-shadow(0 2px 8px rgba(59, 130, 246, 0.4))'
                        ;(e.target as HTMLImageElement).style.transform = 'scale(1.05)'
                      }}
                      onMouseLeave={(e) => {
                        ;(e.target as HTMLImageElement).style.filter =
                          'brightness(1.2) contrast(1.1)'
                        ;(e.target as HTMLImageElement).style.transform = 'scale(1)'
                      }}
                      onLoad={() => console.log('Desktop logo loaded successfully')}
                    />
                  ))}
              </Link>
            </div>

            {/* Main Navigation - Center */}
            <div
              className="hidden md:flex items-center gap-8"
              style={{
                flex: 1,
                justifyContent: 'center',
              }}
            >
              <Link
                href="/"
                style={{
                  color: 'black',
                  fontWeight: 'bold',
                  fontSize: '16px',
                  filter: 'brightness(1.1)',
                  transition: 'all 0.3s ease',
                }}
                onMouseEnter={(e) => {
                  ;(e.target as HTMLElement).style.textShadow = '0 0px 0px rgba(3, 58, 8, 0.6)'
                  ;(e.target as HTMLElement).style.color = 'red'
                }}
                onMouseLeave={(e) => {
                  ;(e.target as HTMLElement).style.textShadow = '0 0px 0px rgba(0,0,0,0.8)'
                  ;(e.target as HTMLElement).style.color = 'red'
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
                  filter: 'brightness(1.1)',
                  transition: 'all 0.3s ease',
                }}
                onMouseEnter={(e) => {
                  ;(e.target as HTMLElement).style.textShadow = '0 0px 0px rgba(3, 58, 8, 0.6)'
                  ;(e.target as HTMLElement).style.color = 'red'
                }}
                onMouseLeave={(e) => {
                  ;(e.target as HTMLElement).style.textShadow = '0 0px 0px rgba(0,0,0,0.8)'
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
                    color: 'black',
                    fontWeight: 'bold',
                    fontSize: '16px',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '5px',
                    padding: '15px 0',
                    filter: 'brightness(1.1)',
                    transition: 'all 0.3s ease',
                  }}
                  onMouseEnter={(e) => {
                    ;(e.target as HTMLElement).style.textShadow = '0 0px 0px rgba(3, 58, 8, 0.6)'
                    ;(e.target as HTMLElement).style.color = 'red'
                  }}
                  onMouseLeave={(e) => {
                    ;(e.target as HTMLElement).style.textShadow = '0 0px 0px rgba(0,0,0,0.8)'
                    ;(e.target as HTMLElement).style.color = 'red'
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
                    color: 'black',
                    fontWeight: 'bold',
                    fontSize: '16px',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '5px',
                    padding: '15px 0',
                    filter: 'brightness(1.1)',
                    transition: 'all 0.3s ease',
                  }}
                  onMouseEnter={(e) => {
                    ;(e.target as HTMLElement).style.textShadow = '0 0px 0px rgba(3, 58, 8, 0.6)'
                    ;(e.target as HTMLElement).style.color = 'red'
                  }}
                  onMouseLeave={(e) => {
                    ;(e.target as HTMLElement).style.textShadow = '0 0px 0px rgba(0,0,0,0.8)'
                    ;(e.target as HTMLElement).style.color = 'red'
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
                  color: 'black',
                  fontWeight: 'bold',
                  fontSize: '16px',
                  filter: 'brightness(1.1)',
                  transition: 'all 0.3s ease',
                }}
                onMouseEnter={(e) => {
                  ;(e.target as HTMLElement).style.textShadow = '0 0px 0px rgba(3, 58, 8, 0.6)'
                  ;(e.target as HTMLElement).style.color = 'red'
                }}
                onMouseLeave={(e) => {
                  ;(e.target as HTMLElement).style.textShadow = '0 0px 0px rgba(0,0,0,0.8)'
                  ;(e.target as HTMLElement).style.color = 'red'
                }}
              >
                Sira
              </Link>
              <Link
                href="/about-us"
                style={{
                  color: 'black',
                  fontWeight: 'bold',
                  fontSize: '16px',
                  filter: 'brightness(1.1)',
                  transition: 'all 0.3s ease',
                }}
                onMouseEnter={(e) => {
                  ;(e.target as HTMLElement).style.textShadow = '0 0px 0px rgba(3, 58, 8, 0.6)'
                  ;(e.target as HTMLElement).style.color = 'red'
                }}
                onMouseLeave={(e) => {
                  ;(e.target as HTMLElement).style.textShadow = '0 0px 0px rgba(0,0,0,0.8)'
                  ;(e.target as HTMLElement).style.color = 'red'
                }}
              >
                About Us
              </Link>
              <Link
                href="/contact"
                style={{
                  color: 'black',
                  fontWeight: 'bold',
                  fontSize: '16px',
                  filter: 'brightness(1.1)',
                  transition: 'all 0.3s ease',
                }}
                onMouseEnter={(e) => {
                  ;(e.target as HTMLElement).style.textShadow = '0 0px 0px rgba(3, 58, 8, 0.6)'
                  ;(e.target as HTMLElement).style.color = 'red'
                }}
                onMouseLeave={(e) => {
                  ;(e.target as HTMLElement).style.textShadow = '0 0px 0px rgba(0,0,0,0.8)'
                  ;(e.target as HTMLElement).style.color = 'red'
                }}
              >
                Contact Us
              </Link>
            </div>

            <div
              className="mobile-right"
              style={{
                display: 'flex',
                justifyContent: 'flex-end',
              }}
            >
              <div className="px-4 py-3 border-none border-gray-200 dark:border-gray-700 text-black hidden md:block  ">
                <div className="space-y-2">
                  <a
                    href="mailto:sales@unvdubai.com"
                    className="flex items-center text-gray-700 dark:text-gray-300 text-sm"
                  >
                    <svg
                      className="w-4 h-4 mr-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      ></path>
                    </svg>
                    sales@unvdubai.com
                  </a>
                  <a
                    href="tel:+971552929644"
                    className="flex items-center text-gray-700 dark:text-gray-300 text-sm"
                  >
                    <svg
                      className="w-4 h-4 mr-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      ></path>
                    </svg>
                    +971552929644
                  </a>
                </div>
              </div>
            </div>
          </div>
          {mobileOpen && (
            <div
              className="fixed inset-0 z-[99999] md:hidden"
              style={{
                animation: 'fadeIn 0.3s ease-out forwards',
              }}
            >
              {/* Full Screen Background */}
              <div
                className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-black"
                style={{
                  backdropFilter: 'blur(10px)',
                  WebkitBackdropFilter: 'blur(10px)',
                }}
              />

              {/* Main Menu Container */}
              <div
                className="relative h-full flex flex-col"
                style={{
                  animation: 'slideInLeft 0.4s ease-out forwards',
                }}
              >
                {/* Header with Close Button */}
                {/* <div className="flex items-center justify-between p-6 pt-20">
                  <div className="text-white text-2xl font-bold">Menu</div>
                </div> */}

                {/* Menu Content */}
                <div className="flex-1 flex flex-col justify-center px-8">
                  {!mobileSubMenu && (
                    <ul className="flex flex-col gap-2 text-center mt-4">
                      <li
                        style={{
                          animation: 'fadeInUp 0.5s ease-out forwards',
                          animationDelay: '0.1s',
                          opacity: 0,
                        }}
                      >
                        <Link
                          href="/"
                          onClick={() => setMobileOpen(false)}
                          className="text-white text-2xl font-light hover:text-red-400 transition-colors duration-300 block py-4"
                        >
                          Home
                        </Link>
                      </li>
                      <li
                        style={{
                          animation: 'fadeInUp 0.5s ease-out forwards',
                          animationDelay: '0.2s',
                          opacity: 0,
                        }}
                      >
                        <Link
                          href="/products"
                          onClick={() => setMobileOpen(false)}
                          className="text-white text-2xl font-light hover:text-red-400 transition-colors duration-300 block py-2"
                        >
                          Products
                        </Link>
                      </li>
                      <li
                        style={{
                          animation: 'fadeInUp 0.5s ease-out forwards',
                          animationDelay: '0.3s',
                          opacity: 0,
                        }}
                      >
                        <button
                          className="text-white text-2xl font-light hover:text-red-400 transition-colors duration-300 flex items-center justify-center w-full py-2"
                          onClick={() => setMobileSubMenu('technologies')}
                        >
                          Technologies
                          <svg
                            className="ml-3 w-6 h-6"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M9 5l7 7-7 7"
                            />
                          </svg>
                        </button>
                      </li>
                      <li
                        style={{
                          animation: 'fadeInUp 0.5s ease-out forwards',
                          animationDelay: '0.4s',
                          opacity: 0,
                        }}
                      >
                        <button
                          className="text-white text-2xl font-light hover:text-red-400 transition-colors duration-300 flex items-center justify-center w-full py-2"
                          onClick={() => setMobileSubMenu('solutions')}
                        >
                          Solutions
                          <svg
                            className="ml-3 w-6 h-6"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M9 5l7 7-7 7"
                            />
                          </svg>
                        </button>
                      </li>
                      <li
                        style={{
                          animation: 'fadeInUp 0.5s ease-out forwards',
                          animationDelay: '0.5s',
                          opacity: 0,
                        }}
                      >
                        <Link
                          href="/sira"
                          onClick={() => setMobileOpen(false)}
                          className="text-white text-2xl font-light hover:text-red-400 transition-colors duration-300 block py-2"
                        >
                          Sira
                        </Link>
                      </li>
                      <li
                        style={{
                          animation: 'fadeInUp 0.5s ease-out forwards',
                          animationDelay: '0.6s',
                          opacity: 0,
                        }}
                      >
                        <Link
                          href="/about-us"
                          onClick={() => setMobileOpen(false)}
                          className="text-white text-2xl font-light hover:text-red-400 transition-colors duration-300 block py-2"
                        >
                          About Us
                        </Link>
                      </li>
                      <li
                        style={{
                          animation: 'fadeInUp 0.5s ease-out forwards',
                          animationDelay: '0.7s',
                          opacity: 0,
                        }}
                      >
                        <Link
                          href="/contact"
                          onClick={() => setMobileOpen(false)}
                          className="text-white text-2xl font-light hover:text-red-400 transition-colors duration-300 block py-2"
                        >
                          Contact Us
                        </Link>
                      </li>
                    </ul>
                  )}

                  {/* Technologies Submenu */}
                  {mobileSubMenu === 'technologies' && (
                    <div
                      style={{
                        animation: 'slideInRight 0.3s ease-out forwards',
                      }}
                    >
                      <button
                        className="text-white text-xl mb-8 flex items-center hover:text-red-400 transition-colors duration-300"
                        onClick={() => setMobileSubMenu(null)}
                      >
                        <svg
                          className="mr-2 w-5 h-5"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M15 19l-7-7 7-7"
                          />
                        </svg>
                        Back
                      </button>
                      <ul className="flex flex-col gap-2 text-center">
                        <li>
                          <Link
                            href="/technologies/wizsense"
                            onClick={() => setMobileOpen(false)}
                            className="text-white text-xl font-light hover:text-red-400 transition-colors duration-300 block py-3"
                          >
                            WizSense Technology
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="/technologies/wizmind"
                            onClick={() => setMobileOpen(false)}
                            className="text-white text-xl font-light hover:text-red-400 transition-colors duration-300 block py-3"
                          >
                            WizMind Technology
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="/technologies/full-color"
                            onClick={() => setMobileOpen(false)}
                            className="text-white text-xl font-light hover:text-red-400 transition-colors duration-300 block py-3"
                          >
                            Full-color Technology
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="/technologies/auto-tracking"
                            onClick={() => setMobileOpen(false)}
                            className="text-white text-xl font-light hover:text-red-400 transition-colors duration-300 block py-3"
                          >
                            Auto Tracking 3.0
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="/technologies/hdcvi-ten"
                            onClick={() => setMobileOpen(false)}
                            className="text-white text-xl font-light hover:text-red-400 transition-colors duration-300 block py-3"
                          >
                            HDCVI TEN Technology
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="/technologies/predictive-focus"
                            onClick={() => setMobileOpen(false)}
                            className="text-white text-xl font-light hover:text-red-400 transition-colors duration-300 block py-3"
                          >
                            Predictive Focus Algorithm
                          </Link>
                        </li>
                      </ul>
                    </div>
                  )}

                  {/* Solutions Submenu */}
                  {mobileSubMenu === 'solutions' && (
                    <div
                      style={{
                        animation: 'slideInRight 0.3s ease-out forwards',
                      }}
                    >
                      <button
                        className="text-white text-xl mb-8 flex items-center hover:text-red-400 transition-colors duration-300"
                        onClick={() => setMobileSubMenu(null)}
                      >
                        <svg
                          className="mr-2 w-5 h-5"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M15 19l-7-7 7-7"
                          />
                        </svg>
                        Back
                      </button>
                      <ul className="flex flex-col gap-2 text-center">
                        <li>
                          <Link
                            href="/solutions/building"
                            onClick={() => setMobileOpen(false)}
                            className="text-white text-2xl font-light hover:text-red-400 transition-colors duration-300 block py-3"
                          >
                            Building
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="/solutions/banking"
                            onClick={() => setMobileOpen(false)}
                            className="text-white text-2xl font-light hover:text-red-400 transition-colors duration-300 block py-3"
                          >
                            Banking
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="/solutions/retail"
                            onClick={() => setMobileOpen(false)}
                            className="text-white text-2xl font-light hover:text-red-400 transition-colors duration-300 block py-3"
                          >
                            Retail
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="/solutions/transportation"
                            onClick={() => setMobileOpen(false)}
                            className="text-white text-2xl font-light hover:text-red-400 transition-colors duration-300 block py-3"
                          >
                            Transportation
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="/solutions/government"
                            onClick={() => setMobileOpen(false)}
                            className="text-white text-2xl font-light hover:text-red-400 transition-colors duration-300 block py-3"
                          >
                            Government
                          </Link>
                        </li>
                      </ul>
                    </div>
                  )}
                </div>

                {/* Footer Contact Info */}
                <div className="p-8 pb-12 border-t border-gray-700">
                  <div className="text-center space-y-4">
                    <div className="text-gray-300 text-sm">Get in touch</div>
                    <div className="space-y-2">
                      <a
                        href="mailto:sales@unvdubai.com"
                        className="flex items-center justify-center text-white text-lg hover:text-red-400 transition-colors duration-300"
                      >
                        <svg
                          className="w-5 h-5 mr-3"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                          />
                        </svg>
                        sales@unvdubai.com
                      </a>
                      <a
                        href="tel:+971552929644"
                        className="flex items-center justify-center text-white text-lg hover:text-red-400 transition-colors duration-300"
                      >
                        <svg
                          className="w-5 h-5 mr-3"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                          />
                        </svg>
                        +971552929644
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </nav>
      </header>
    </>
  )
}
