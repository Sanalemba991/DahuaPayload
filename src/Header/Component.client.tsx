'use client'
import { Media } from '@/payload-types'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React, { useState, useRef, useCallback, useEffect } from 'react'

interface HeaderClientProps {
  logo: Media
  favicon: Media
  telephone: string
  email: string
}

export const HeaderClient: React.FC<HeaderClientProps> = ({
  logo,
  email = 'sales@unvdubai.com',
  telephone = '+971552929644',
}) => {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [mobileSubMenu, setMobileSubMenu] = useState<null | 'technologies' | 'solutions'>(null)
  const [logoError, setLogoError] = useState(false)
  const [isClient, setIsClient] = useState(false)
  const navRef = useRef<HTMLDivElement>(null)
  const pathname = usePathname()

  // Ensure client-side rendering
  useEffect(() => {
    setIsClient(true)
  }, [])
  // More robust logo URL construction with fallback
  const logoUrl = React.useMemo(() => {
    if (!logo?.url) return '/images/dahualogo-removebg-preview.png.png' // Fallback to existing Dahua logo

    // If this is the problematic logo file, use fallback immediately
    if (logo.url.includes('logodahu-1.jpg')) {
      if (process.env.NODE_ENV === 'development') {
        console.log('Detected problematic logo file, using fallback immediately')
      }
      setLogoError(true)
      return '/images/dahualogo-removebg-preview.png.png'
    }

    if (logo.url.startsWith('http')) {
      return logo.url
    }

    const serverUrl = process.env.NEXT_PUBLIC_SERVER_URL || 'https://dahua.lovosis.com'
    return `${serverUrl}${logo.url}`
  }, [logo?.url])

  const handleLogoError = useCallback(() => {
    if (process.env.NODE_ENV === 'development') {
      console.error('Logo failed to load:', logoUrl)
      console.log('Setting logoError to true, will use fallback logo')
    }
    setLogoError(true)
  }, [logoUrl])

  // Debug logging only in development
  if (process.env.NODE_ENV === 'development') {
    console.log('Logo data:', logo)
  }

  // Auto-fallback after 3 seconds if logo hasn't loaded
  useEffect(() => {
    if (!isClient || !logo?.url) return

    if (!logoError && logo?.url && !logo.url.includes('dahualogo-removebg')) {
      const fallbackTimer = setTimeout(() => {
        if (process.env.NODE_ENV === 'development') {
          console.log('Logo taking too long to load, falling back to default')
        }
        setLogoError(true)
      }, 3000)

      return () => {
        clearTimeout(fallbackTimer)
      }
    }
  }, [logo?.url, logoError, isClient])

  // Handle mobile menu body scroll prevention
  useEffect(() => {
    if (!isClient) return

    if (mobileOpen) {
      // Prevent body scroll
      document.body.style.overflow = 'hidden'
      document.body.style.position = 'fixed'
      document.body.style.width = '100%'
    } else {
      // Restore body scroll
      document.body.style.overflow = ''
      document.body.style.position = ''
      document.body.style.width = ''
    }

    // Cleanup on unmount
    return () => {
      document.body.style.overflow = ''
      document.body.style.position = ''
      document.body.style.width = ''
    }
  }, [mobileOpen, isClient])

  // Handle click outside with modern event listener options
  useEffect(() => {
    if (!isClient) return

    const controller = new AbortController()

    const handleClickOutside = (event: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(event.target as Node)) {
        setActiveDropdown(null)
      }
    }

    // Use AbortController for cleaner event listener management
    document.addEventListener('mousedown', handleClickOutside, {
      passive: true,
      signal: controller.signal,
    })

    return () => {
      controller.abort()
    }
  }, [isClient])

  // First, add this helper function at the top of your component
  const isPathActive = (pathname: string, basePath: string) => {
    return pathname.startsWith(basePath)
  }

  return (
    <>
      <header
        className="fixed top-0 left-0 right-0 z-50 bg-white shadow-md border-b border-gray-200 header-container"
        style={{
          minHeight: 'unset',
          padding: '0',
          fontFamily: 'Segoe UI, Arial, Helvetica, sans-serif',
          letterSpacing: '0.01em',
        }}
      >
        <nav
          ref={navRef}
          style={{
            width: '100%',
            padding: '8px 0',
            margin: '0 auto',
          }}
        >
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              padding: '0 25px',
              maxWidth: '1600px',
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
                      onLoad={() => {
                        if (process.env.NODE_ENV === 'development') {
                          console.log('Logo loaded successfully')
                        }
                      }}
                    />
                  )}
                </Link>
              )}
            </div>
            {/* Logo - Left Side */}
            <div
              style={{ width: '150px', marginLeft: '0' }}
              className="hidden md:flex items-center justify-start"
            >
              <Link href="/" style={{ display: 'block' }}>
                <Image
                  priority={true}
                  src={
                    logoError || !logo?.url ? '/images/dahualogo-removebg-preview.png.png' : logoUrl
                  }
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
                    ;(e.target as HTMLImageElement).style.filter = 'brightness(1.2) contrast(1.1)'
                    ;(e.target as HTMLImageElement).style.transform = 'scale(1)'
                  }}
                  onLoad={() => {
                    if (process.env.NODE_ENV === 'development') {
                      console.log('Desktop logo loaded successfully')
                    }
                  }}
                />
              </Link>
            </div>

            {/* Main Navigation - Center */}
            <div
              className="hidden md:flex items-center gap-12"
              style={{
                flex: 1,
                justifyContent: 'center',
                padding: '0 16px',
              }}
            >
              <Link
                href="/"
                className={`nav-link group${pathname === '/' ? ' active' : ''}`}
                style={{
                  color: 'black',
                  fontWeight: 'normal',
                  fontSize: '18px',
                  fontFamily: 'Open Sans, sans-serif',
                  letterSpacing: '0.01em',
                  transition: 'all 0.3s ease',
                  padding: '8px 0',
                  position: 'relative',
                }}
                onClick={(e) => {
                  e.preventDefault()
                  window.location.href = '/'
                }}
              >
                <span className="relative">
                  Home
                  <span
                    className={`absolute -bottom-0.5 left-0 h-0.5 bg-red-600 transition-all duration-300 ${
                      pathname === '/' ? 'w-full' : 'w-0 group-hover:w-full'
                    }`}
                    style={{ height: '2px' }}
                  ></span>
                </span>
              </Link>
              <Link
                href="/products"
                className={`nav-link group${pathname.startsWith('/products') ? ' active' : ''}`}
                style={{
                  color: 'black',
                  fontWeight: 'normal',
                  fontSize: '18px',
                  fontFamily: 'Open Sans, sans-serif',
                  letterSpacing: '0.01em',
                  transition: 'all 0.3s ease',
                  padding: '8px 0',
                  position: 'relative',
                }}
                onClick={(e) => {
                  e.preventDefault()
                  window.location.href = '/products'
                }}
              >
                <span className="relative">
                  Products
                  <span
                    className={`absolute -bottom-0.5 left-0 h-0.5 bg-red-600 transition-all duration-300 ${
                      pathname.startsWith('/products') ? 'w-full' : 'w-0 group-hover:w-full'
                    }`}
                    style={{ height: '2px' }}
                  ></span>
                </span>
              </Link>
              {/* Technologies Link */}
              <div
                style={{ position: 'relative' }}
                onMouseEnter={() => setActiveDropdown('technologies')}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <Link
                  href="/technologies"
                  className={`nav-link group${isPathActive(pathname, '/technologies') ? ' active' : ''}`}
                  style={{
                    color: 'black',
                    fontWeight: 'normal',
                    fontSize: '18px',
                    fontFamily: 'Open Sans, sans-serif',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '5px',
                    padding: '8px 0',
                    transition: 'all 0.3s ease',
                  }}
                  onClick={(e) => {
                    e.preventDefault()
                    window.location.href = '/technologies'
                  }}
                >
                  <span className="relative">
                    Technologies
                    <span
                      className={`absolute -bottom-0.5 left-0 h-0.5 bg-red-600 transition-all duration-300 ${
                        isPathActive(pathname, '/technologies')
                          ? 'w-full'
                          : 'w-0 group-hover:w-full'
                      }`}
                      style={{ height: '2px' }}
                    ></span>
                  </span>
                  <svg
                    style={{
                      width: '12px',
                      height: '12px',
                      fill: 'white',
                      filter: 'drop-shadow(0 1px 2px rgba(0,0,0,0.8))',
                      marginLeft: '5px',
                    }}
                    viewBox="0 0 20 20"
                  >
                    <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
                  </svg>
                </Link>

                {/* Technologies Dropdown Menu with Curved Image */}
                {activeDropdown === 'technologies' && (
                  <div
                    className="dropdown-menu"
                    style={{
                      position: 'fixed',
                      top: '56px',
                      left: '0',
                      right: '0',
                      width: '100vw',
                      zIndex: 10000,
                      overflow: 'hidden',
                      backgroundColor: 'white',
                      boxShadow:
                        '0 10px 25px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
                      borderTop: '1px solid #e5e7eb',
                      transition:
                        'opacity 0.8s cubic-bezier(0.4,0,0.2,1), visibility 0.8s cubic-bezier(0.4,0,0.2,1), transform 0.8s cubic-bezier(0.4,0,0.2,1)',
                      opacity: activeDropdown === 'technologies' ? 1 : 0,
                      visibility: activeDropdown === 'technologies' ? 'visible' : 'hidden',
                      transform:
                        activeDropdown === 'technologies' ? 'translateY(0)' : 'translateY(-10px)',
                    }}
                    onMouseEnter={() => setActiveDropdown('technologies')}
                    onMouseLeave={() => setActiveDropdown(null)}
                  >
                    <div
                      style={{
                        display: 'flex',
                        maxWidth: '1200px',
                        margin: '0 auto',
                        padding: '40px 20px',
                      }}
                    >
                      {/* Left Side - Menu Items */}
                      <div style={{ flex: 1, paddingRight: '60px' }}>
                        <h3
                          style={{
                            fontSize: '18px',
                            fontWeight: '600',
                            color: '#1f2937',
                            marginBottom: '30px',
                            borderBottom: '2px solid #dc2626',
                            paddingBottom: '10px',
                            display: 'inline-block',
                          }}
                        >
                          Technologies
                        </h3>
                        <div
                          style={{
                            display: 'grid',
                            gridTemplateColumns: 'repeat(2, 1fr)',
                            gap: '20px',
                          }}
                        >
                          <a
                            href="/technologies/wizsense"
                            className="staggered-appear"
                            style={{
                              display: 'block',
                              padding: '15px 20px',
                              color: '#1f2937',
                              textDecoration: 'none',
                              fontSize: '15px',
                              fontWeight: '500',
                              transition: 'all 0.3s ease',
                              border: '1px solid #f3f4f6',
                              borderRadius: '8px',
                              backgroundColor: '#fafafa',
                            }}
                            onMouseEnter={(e) => {
                              ;(e.target as HTMLElement).style.backgroundColor = '#f3f4f6'
                              ;(e.target as HTMLElement).style.borderColor = '#dc2626'
                              ;(e.target as HTMLElement).style.color = '#dc2626'
                            }}
                            onMouseLeave={(e) => {
                              ;(e.target as HTMLElement).style.backgroundColor = '#fafafa'
                              ;(e.target as HTMLElement).style.borderColor = '#f3f4f6'
                              ;(e.target as HTMLElement).style.color = '#1f2937'
                            }}
                          >
                            WizSense Technology
                          </a>
                          <a
                            href="/technologies/wizmind"
                            className="staggered-appear"
                            style={{
                              display: 'block',
                              padding: '15px 20px',
                              color: '#1f2937',
                              textDecoration: 'none',
                              fontSize: '15px',
                              fontWeight: '500',
                              transition: 'all 0.3s ease',
                              border: '1px solid #f3f4f6',
                              borderRadius: '8px',
                              backgroundColor: '#fafafa',
                            }}
                            onMouseEnter={(e) => {
                              ;(e.target as HTMLElement).style.backgroundColor = '#f3f4f6'
                              ;(e.target as HTMLElement).style.borderColor = '#dc2626'
                              ;(e.target as HTMLElement).style.color = '#dc2626'
                            }}
                            onMouseLeave={(e) => {
                              ;(e.target as HTMLElement).style.backgroundColor = '#fafafa'
                              ;(e.target as HTMLElement).style.borderColor = '#f3f4f6'
                              ;(e.target as HTMLElement).style.color = '#1f2937'
                            }}
                          >
                            WizMind Technology
                          </a>
                          <a
                            href="/technologies/full-color"
                            className="staggered-appear"
                            style={{
                              display: 'block',
                              padding: '15px 20px',
                              color: '#1f2937',
                              textDecoration: 'none',
                              fontSize: '15px',
                              fontWeight: '500',
                              transition: 'all 0.3s ease',
                              border: '1px solid #f3f4f6',
                              borderRadius: '8px',
                              backgroundColor: '#fafafa',
                            }}
                            onMouseEnter={(e) => {
                              ;(e.target as HTMLElement).style.backgroundColor = '#f3f4f6'
                              ;(e.target as HTMLElement).style.borderColor = '#dc2626'
                              ;(e.target as HTMLElement).style.color = '#dc2626'
                            }}
                            onMouseLeave={(e) => {
                              ;(e.target as HTMLElement).style.backgroundColor = '#fafafa'
                              ;(e.target as HTMLElement).style.borderColor = '#f3f4f6'
                              ;(e.target as HTMLElement).style.color = '#1f2937'
                            }}
                          >
                            Full-color Technology
                          </a>
                          <a
                            href="/technologies/auto-tracking"
                            className="staggered-appear"
                            style={{
                              display: 'block',
                              padding: '15px 20px',
                              color: '#1f2937',
                              textDecoration: 'none',
                              fontSize: '15px',
                              fontWeight: '500',
                              transition: 'all 0.3s ease',
                              border: '1px solid #f3f4f6',
                              borderRadius: '8px',
                              backgroundColor: '#fafafa',
                            }}
                            onMouseEnter={(e) => {
                              ;(e.target as HTMLElement).style.backgroundColor = '#f3f4f6'
                              ;(e.target as HTMLElement).style.borderColor = '#dc2626'
                              ;(e.target as HTMLElement).style.color = '#dc2626'
                            }}
                            onMouseLeave={(e) => {
                              ;(e.target as HTMLElement).style.backgroundColor = '#fafafa'
                              ;(e.target as HTMLElement).style.borderColor = '#f3f4f6'
                              ;(e.target as HTMLElement).style.color = '#1f2937'
                            }}
                          >
                            Auto Tracking 3.0
                          </a>
                          <a
                            href="/technologies/hdcvi-ten"
                            className="staggered-appear"
                            style={{
                              display: 'block',
                              padding: '15px 20px',
                              color: '#1f2937',
                              textDecoration: 'none',
                              fontSize: '15px',
                              fontWeight: '500',
                              transition: 'all 0.3s ease',
                              border: '1px solid #f3f4f6',
                              borderRadius: '8px',
                              backgroundColor: '#fafafa',
                            }}
                            onMouseEnter={(e) => {
                              ;(e.target as HTMLElement).style.backgroundColor = '#f3f4f6'
                              ;(e.target as HTMLElement).style.borderColor = '#dc2626'
                              ;(e.target as HTMLElement).style.color = '#dc2626'
                            }}
                            onMouseLeave={(e) => {
                              ;(e.target as HTMLElement).style.backgroundColor = '#fafafa'
                              ;(e.target as HTMLElement).style.borderColor = '#f3f4f6'
                              ;(e.target as HTMLElement).style.color = '#1f2937'
                            }}
                          >
                            HDCVI TEN Technology
                          </a>
                          <a
                            href="/technologies/predictive-focus"
                            className="staggered-appear"
                            style={{
                              display: 'block',
                              padding: '15px 20px',
                              color: '#1f2937',
                              textDecoration: 'none',
                              fontSize: '15px',
                              fontWeight: '500',
                              transition: 'all 0.3s ease',
                              border: '1px solid #f3f4f6',
                              borderRadius: '8px',
                              backgroundColor: '#fafafa',
                            }}
                            onMouseEnter={(e) => {
                              ;(e.target as HTMLElement).style.backgroundColor = '#f3f4f6'
                              ;(e.target as HTMLElement).style.borderColor = '#dc2626'
                              ;(e.target as HTMLElement).style.color = '#dc2626'
                            }}
                            onMouseLeave={(e) => {
                              ;(e.target as HTMLElement).style.backgroundColor = '#fafafa'
                              ;(e.target as HTMLElement).style.borderColor = '#f3f4f6'
                              ;(e.target as HTMLElement).style.color = '#1f2937'
                            }}
                          >
                            Predictive Focus Algorithm
                          </a>
                        </div>
                      </div>

                      {/* Right Side - Featured Content */}
                      <div
                        style={{
                          width: '350px',
                          padding: '0 20px',
                          borderLeft: '1px solid #e5e7eb',
                          display: 'flex',
                          flexDirection: 'column',
                          alignItems: 'center',
                          justifyContent: 'center',
                        }}
                      >
                        <Image
                          src="/images/wiz.png"
                          alt="Technologies"
                          width={280}
                          height={200}
                          style={{
                            objectFit: 'contain',
                            opacity: '0.95',
                            filter: 'drop-shadow(0 8px 25px rgba(0,0,0,0.15))',
                            borderRadius: '8px',
                          }}
                          onError={(e) => {
                            ;(e.target as HTMLImageElement).style.display = 'none'
                          }}
                        />
                        <div
                          style={{
                            textAlign: 'center',
                            marginTop: '20px',
                            padding: '20px',
                            backgroundColor: '#f9fafb',
                            borderRadius: '8px',
                            border: '1px solid #e5e7eb',
                          }}
                        >
                          <h4
                            style={{
                              fontSize: '16px',
                              fontWeight: '600',
                              color: '#1f2937',
                              marginBottom: '10px',
                            }}
                          >
                            Advanced Technology Solutions
                          </h4>
                          <p
                            style={{
                              fontSize: '14px',
                              color: '#6b7280',
                              lineHeight: '1.5',
                            }}
                          >
                            Discover cutting-edge surveillance technologies that deliver superior
                            performance and reliability.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
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
                  className={`nav-link group${isPathActive(pathname, '/solutions') ? ' active' : ''}`}
                  style={{
                    color: 'black',
                    fontWeight: 'normal',
                    fontSize: '18px',
                    fontFamily: 'Open Sans, sans-serif',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '5px',
                    padding: '8px 0',
                    transition: 'all 0.3s ease',
                  }}
                  onClick={async (e) => {
                    e.preventDefault()
                    try {
                      setActiveDropdown(null) // Close dropdown first
                      await new Promise((resolve) => setTimeout(resolve, 100)) // Small delay for animation
                      await window.location.assign('/solutions') // Navigate to new page
                    } catch (error) {
                      console.error('Navigation failed:', error)
                    }
                  }}
                >
                  <span className="relative">
                    Solutions
                    <span
                      className={`absolute -bottom-0.5 left-0 h-0.5 bg-red-600 transition-all duration-300 ${
                        isPathActive(pathname, '/solutions') ? 'w-full' : 'w-0 group-hover:w-full'
                      }`}
                      style={{ height: '2px' }}
                    ></span>
                  </span>
                  <svg
                    style={{
                      width: '12px',
                      height: '12px',
                      fill: 'white',
                      filter: 'drop-shadow(0 1px 2px rgba(0,0,0,0.8))',
                      marginLeft: '5px',
                    }}
                    viewBox="0 0 20 20"
                  >
                    <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
                  </svg>
                </Link>

                {/* Solutions Dropdown Menu */}
                {activeDropdown === 'solutions' && (
                  <div
                    className="dropdown-menu"
                    style={{
                      position: 'fixed',
                      top: '56px',
                      left: '0',
                      right: '0',
                      width: '100vw',
                      zIndex: 10000,
                      overflow: 'hidden',
                      backgroundColor: 'white',
                      boxShadow:
                        '0 10px 25px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
                      borderTop: '1px solid #e5e7eb',
                      transition:
                        'opacity 0.8s cubic-bezier(0.4,0,0.2,1), visibility 0.8s cubic-bezier(0.4,0,0.2,1), transform 0.8s cubic-bezier(0.4,0,0.2,1)',
                      opacity: activeDropdown === 'solutions' ? 1 : 0,
                      visibility: activeDropdown === 'solutions' ? 'visible' : 'hidden',
                      transform:
                        activeDropdown === 'solutions' ? 'translateY(0)' : 'translateY(-10px)',
                    }}
                    onMouseEnter={() => setActiveDropdown('solutions')} // Show on hover
                    onMouseLeave={() => setActiveDropdown(null)} // Hide on mouse leave
                    onClick={() => setActiveDropdown(null)} // Hide on click
                  >
                    <div
                      style={{
                        display: 'flex',
                        maxWidth: '1200px',
                        margin: '0 auto',
                        padding: '40px 20px',
                      }}
                    >
                      {/* Left Side - Menu Items */}
                      <div style={{ flex: 1, paddingRight: '60px' }}>
                        <h3
                          style={{
                            fontSize: '18px',
                            fontWeight: '600',
                            color: '#1f2937',
                            marginBottom: '30px',
                            borderBottom: '2px solid #dc2626',
                            paddingBottom: '10px',
                            display: 'inline-block',
                          }}
                        >
                          Solutions
                        </h3>
                        <div
                          style={{
                            display: 'grid',
                            gridTemplateColumns: 'repeat(2, 1fr)',
                            gap: '20px',
                          }}
                        >
                          <Link
                            href="/solutions/building"
                            className="staggered-appear"
                            style={{
                              display: 'block',
                              padding: '15px 20px',
                              color: '#1f2937',
                              textDecoration: 'none',
                              fontSize: '15px',
                              fontWeight: '500',
                              transition: 'all 0.3s ease',
                              border: '1px solid #f3f4f6',
                              borderRadius: '8px',
                              backgroundColor: '#fafafa',
                            }}
                            onMouseEnter={(e) => {
                              e.currentTarget.style.backgroundColor = '#f3f4f6'
                              e.currentTarget.style.borderColor = '#dc2626'
                              e.currentTarget.style.color = '#dc2626'
                            }}
                            onMouseLeave={(e) => {
                              e.currentTarget.style.backgroundColor = '#fafafa'
                              e.currentTarget.style.borderColor = '#f3f4f6'
                              e.currentTarget.style.color = '#1f2937'
                            }}
                            onClick={() => setMobileOpen(false)}
                          >
                            Building Solutions
                          </Link>
                          <Link
                            href="/solutions/banking"
                            className="staggered-appear"
                            style={{
                              display: 'block',
                              padding: '15px 20px',
                              color: '#1f2937',
                              textDecoration: 'none',
                              fontSize: '15px',
                              fontWeight: '500',
                              transition: 'all 0.3s ease',
                              border: '1px solid #f3f4f6',
                              borderRadius: '8px',
                              backgroundColor: '#fafafa',
                            }}
                            onMouseEnter={(e) => {
                              e.currentTarget.style.backgroundColor = '#f3f4f6'
                              e.currentTarget.style.borderColor = '#dc2626'
                              e.currentTarget.style.color = '#dc2626'
                            }}
                            onMouseLeave={(e) => {
                              e.currentTarget.style.backgroundColor = '#fafafa'
                              e.currentTarget.style.borderColor = '#f3f4f6'
                              e.currentTarget.style.color = '#1f2937'
                            }}
                            onClick={() => setMobileOpen(false)}
                          >
                            Banking Solutions
                          </Link>
                          <Link
                            href="/solutions/retail"
                            className="staggered-appear"
                            style={{
                              display: 'block',
                              padding: '15px 20px',
                              color: '#1f2937',
                              textDecoration: 'none',
                              fontSize: '15px',
                              fontWeight: '500',
                              transition: 'all 0.3s ease',
                              border: '1px solid #f3f4f6',
                              borderRadius: '8px',
                              backgroundColor: '#fafafa',
                            }}
                            onMouseEnter={(e) => {
                              e.currentTarget.style.backgroundColor = '#f3f4f6'
                              e.currentTarget.style.borderColor = '#dc2626'
                              e.currentTarget.style.color = '#dc2626'
                            }}
                            onMouseLeave={(e) => {
                              e.currentTarget.style.backgroundColor = '#fafafa'
                              e.currentTarget.style.borderColor = '#f3f4f6'
                              e.currentTarget.style.color = '#1f2937'
                            }}
                            onClick={() => setMobileOpen(false)}
                          >
                            Retail Solutions
                          </Link>
                          <Link
                            href="/solutions/transportation"
                            className="staggered-appear"
                            style={{
                              display: 'block',
                              padding: '15px 20px',
                              color: '#1f2937',
                              textDecoration: 'none',
                              fontSize: '15px',
                              fontWeight: '500',
                              transition: 'all 0.3s ease',
                              border: '1px solid #f3f4f6',
                              borderRadius: '8px',
                              backgroundColor: '#fafafa',
                            }}
                            onMouseEnter={(e) => {
                              e.currentTarget.style.backgroundColor = '#f3f4f6'
                              e.currentTarget.style.borderColor = '#dc2626'
                              e.currentTarget.style.color = '#dc2626'
                            }}
                            onMouseLeave={(e) => {
                              e.currentTarget.style.backgroundColor = '#fafafa'
                              e.currentTarget.style.borderColor = '#f3f4f6'
                              e.currentTarget.style.color = '#1f2937'
                            }}
                            onClick={() => setMobileOpen(false)}
                          >
                            Transportation Solutions
                          </Link>
                          <Link
                            href="/solutions/government"
                            className="staggered-appear"
                            style={{
                              display: 'block',
                              padding: '15px 20px',
                              color: '#1f2937',
                              textDecoration: 'none',
                              fontSize: '15px',
                              fontWeight: '500',
                              transition: 'all 0.3s ease',
                              border: '1px solid #f3f4f6',
                              borderRadius: '8px',
                              backgroundColor: '#fafafa',
                            }}
                            onMouseEnter={(e) => {
                              e.currentTarget.style.backgroundColor = '#f3f4f6'
                              e.currentTarget.style.borderColor = '#dc2626'
                              e.currentTarget.style.color = '#dc2626'
                            }}
                            onMouseLeave={(e) => {
                              e.currentTarget.style.backgroundColor = '#fafafa'
                              e.currentTarget.style.borderColor = '#f3f4f6'
                              e.currentTarget.style.color = '#1f2937'
                            }}
                            onClick={() => setMobileOpen(false)}
                          >
                            Government Solutions
                          </Link>
                        </div>
                      </div>

                      {/* Right Side - Featured Content */}
                      <div
                        style={{
                          width: '350px',
                          padding: '0 20px',
                          borderLeft: '1px solid #e5e7eb',
                          display: 'flex',
                          flexDirection: 'column',
                          alignItems: 'center',
                          justifyContent: 'center',
                        }}
                      >
                        <Image
                          src="/images/aboutus.png"
                          alt="Solutions"
                          width={280}
                          height={200}
                          style={{
                            objectFit: 'contain',
                            opacity: '0.95',
                            filter: 'drop-shadow(0 8px 25px rgba(0,0,0,0.15))',
                            borderRadius: '8px',
                          }}
                          onError={(e) => {
                            ;(e.target as HTMLImageElement).style.display = 'none'
                          }}
                        />
                        <div
                          style={{
                            textAlign: 'center',
                            marginTop: '20px',
                            padding: '20px',
                            backgroundColor: '#f9fafb',
                            borderRadius: '8px',
                            border: '1px solid #e5e7eb',
                          }}
                        >
                          <h4
                            style={{
                              fontSize: '16px',
                              fontWeight: '600',
                              color: '#1f2937',
                              marginBottom: '10px',
                            }}
                          >
                            Industry Solutions
                          </h4>
                          <p
                            style={{
                              fontSize: '14px',
                              color: '#6b7280',
                              lineHeight: '1.5',
                            }}
                          >
                            Comprehensive security solutions tailored for various industries and
                            applications.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              <Link
                href="/sira"
                className="nav-link group" // Added 'group' class here
                style={{
                  color: 'black',
                  fontWeight: 'normal',
                  fontSize: '18px',
                  fontFamily: 'Open Sans, sans-serif',
                  letterSpacing: '0.01em',
                  padding: '8px 0',
                  transition: 'all 0.3s ease',
                  position: 'relative',
                }}
                onClick={(e) => {
                  e.preventDefault()
                  window.location.href = '/sira'
                }}
              >
                <span className="relative">
                  Sira
                  <span
                    className={`absolute -bottom-0.5 left-0 h-0.5 bg-red-600 transition-all duration-300 ${
                      pathname === '/sira' ? 'w-full' : 'w-0 group-hover:w-full'
                    }`}
                    style={{ height: '2px' }}
                  ></span>
                </span>
              </Link>
              <Link
                href="/about-us"
                className="nav-link group" // Added 'group' class here
                style={{
                  color: 'black',
                  fontWeight: 'normal',
                  fontSize: '18px',
                  fontFamily: 'Open Sans, sans-serif',
                  letterSpacing: '0.01em',
                  padding: '8px 0',
                  transition: 'all 0.3s ease',
                  position: 'relative',
                }}
                onClick={(e) => {
                  e.preventDefault()
                  window.location.href = '/about-us'
                }}
              >
                <span className="relative">
                  About Us
                  <span
                    className={`absolute -bottom-0.5 left-0 h-0.5 bg-red-600 transition-all duration-300 ${
                      pathname === '/about-us' ? 'w-full' : 'w-0 group-hover:w-full'
                    }`}
                    style={{ height: '2px' }}
                  ></span>
                </span>
              </Link>
              <Link
                href="/contact"
                className="nav-link group" // Added 'group' class here
                style={{
                  color: 'black',
                  fontWeight: 'normal',
                  fontSize: '18px',
                  fontFamily: 'Open Sans, sans-serif',
                  letterSpacing: '0.01em',
                  padding: '8px 0',
                  transition: 'all 0.3s ease',
                  position: 'relative',
                }}
                onClick={(e) => {
                  e.preventDefault()
                  window.location.href = '/contact'
                }}
              >
                <span className="relative">
                  Contact Us
                  <span
                    className={`absolute -bottom-0.5 left-0 h-0.5 bg-red-600 transition-all duration-300 ${
                      pathname === '/contact' ? 'w-full' : 'w-0 group-hover:w-full'
                    }`}
                    style={{ height: '2px' }}
                  ></span>
                </span>
              </Link>
            </div>

            {/* Right Side - Contact Information */}
            <div
              className="hidden md:flex items-center gap-4"
              style={{
                minWidth: '120px',
                justifyContent: 'flex-end',
                marginLeft: '20px',
                zIndex: 100,
              }}
            >
              {/* Email (Icon Only) */}
              <a
                href={`mailto:${email}`}
                className="flex items-center justify-center text-black hover:text-red-600 transition-colors duration-300"
                style={{
                  backgroundColor: '#f8f9fa',
                  padding: '8px',
                  borderRadius: '50%',
                  boxShadow: '0 1px 2px rgba(0,0,0,0.05)',
                  width: '40px',
                  height: '40px',
                }}
                title={email}
              >
                <svg
                  className="w-6 h-6 text-black"
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
              </a>

              {/* Phone (Icon Only) */}
              <a
                href={`tel:${telephone}`}
                className="flex items-center justify-center text-black hover:text-red-600 transition-colors duration-300"
                style={{
                  backgroundColor: '#f8f9fa',
                  padding: '8px',
                  borderRadius: '50%',
                  boxShadow: '0 1px 2px rgba(0,0,0,0.05)',
                  width: '40px',
                  height: '40px',
                }}
                title={telephone}
              >
                <svg
                  className="w-6 h-6 text-black"
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
              </a>
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
              <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-black mobile-menu-bg" />

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

                {/* Mobile Footer Contact Info */}
                <div className="w-full bg-black/20 border-t border-gray-600 p-4 md:hidden">
                  <div className="flex flex-col items-center gap-3">
                    <a
                      href="mailto:sales@unvdubai.com"
                      className="flex items-center justify-center text-white text-sm font-medium gap-2 hover:text-red-400 transition-colors duration-300"
                    >
                      <svg
                        className="w-4 h-4"
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
                      className="flex items-center justify-center text-white text-sm font-medium gap-2 hover:text-red-400 transition-colors duration-300"
                    >
                      <svg
                        className="w-4 h-4"
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

                {/* Footer Contact Info */}
              </div>
            </div>
          )}
        </nav>
      </header>
      <style jsx global>{`
        .dropdown-menu .staggered-appear {
          opacity: 0;
          transform: translateY(10px);
          animation: staggeredFadeIn 0.5s forwards;
        }
        .dropdown-menu .staggered-appear:nth-child(1) {
          animation-delay: 0.1s;
        }
        .dropdown-menu .staggered-appear:nth-child(2) {
          animation-delay: 0.2s;
        }
        .dropdown-menu .staggered-appear:nth-child(3) {
          animation-delay: 0.3s;
        }
        .dropdown-menu .staggered-appear:nth-child(4) {
          animation-delay: 0.4s;
        }
        .dropdown-menu .staggered-appear:nth-child(5) {
          animation-delay: 0.5s;
        }
        .dropdown-menu .staggered-appear:nth-child(6) {
          animation-delay: 0.6s;
        }
        @keyframes staggeredFadeIn {
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @media (max-width: 900px) {
          .header-contact-info {
            display: none !important;
          }
        }
      `}</style>
    </>
  )
}
