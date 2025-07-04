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
  const navRef = useRef<HTMLDivElement>(null)
  const logoUrl =
    logo?.url?.startsWith('http') || !logo?.url
      ? logo?.url
      : `${process.env.NEXT_PUBLIC_SERVER_URL}${logo?.url ?? ''}`

  const handleClickOutside = useCallback((event: MouseEvent) => {
    if (navRef.current && !navRef.current.contains(event.target as Node)) {
      setActiveDropdown(null)
    }
  }, [])
  console.log('Resolved Logo URL:', logoUrl ?? '')
  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [handleClickOutside])

  return (
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
            padding: '0 5px',
            maxWidth: '1200px',
            margin: '0 auto',
          }}
        >
          <div className="flex w-full md:hidden items-center justify-between">
            {/* Hamburger on the left */}
            <button
              className="flex items-center md:hidden"
              style={{
                background: 'none',
                border: 'none',
                fontSize: 28,
                color: '#fff',
                cursor: 'pointer',
              }}
              aria-label="Toggle menu"
              onClick={() => setMobileOpen((prev) => !prev)}
            >
              &#9776;
            </button>
            {/* Logo on the right */}
            {logo?.url && (
              <Link href="/" style={{ display: 'block' }}>
                <Image
                  priority={true}
                  src={
                    logo.url.startsWith('http')
                      ? logo.url
                      : `${process.env.NEXT_PUBLIC_SERVER_URL}${logo.url}`
                  }
                  alt={logo.alt || 'Site Logo'}
                  width={100}
                  height={30}
                />
              </Link>
            )}
          </div>
          {/* Logo - Left Side */}
          <div
            style={{ width: '150px', marginLeft: '32px' }}
            className="hidden md:flex items-center justify-start"
          >
            <Link href="/" style={{ display: 'block' }}>
              {logo?.url && (
                <Image
                  priority={true}
                  src={
                    logo?.url?.startsWith('http')
                      ? logo.url
                      : `${process.env.NEXT_PUBLIC_SERVER_URL}${logo.url}`
                  }
                  alt={logo.alt || 'Site Logo'}
                  width={140}
                  height={40}
                  style={{
                    objectFit: 'contain',
                    filter: 'brightness(1.2) contrast(1.1)',
                    transition: 'all 0.3s ease',
                    cursor: 'pointer',
                  }}
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
            className=""
            style={{
              width: '150px',
              display: 'flex',
              justifyContent: 'flex-end',
            }}
          >
            <div className="px-4 py-3 border-none border-gray-200 dark:border-gray-700 text-black">
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
            className="fixed inset-0 z-[99999] flex md:hidden"
            style={{ pointerEvents: 'none' }} // allow clicks to pass through except nav
          >
            {/* Transparent nav links */}
            <div
              className="flex flex-col gap-6 px-6 py-4 rounded-xl shadow-lg"
              style={{
                background: 'rgba(0,0,0,0.6)',
                pointerEvents: 'auto',
                maxWidth: 260,
                minWidth: 200,
                margin: '70px 0 0 0', // <-- changed from '70px 0 0 16px' to remove left gap
                alignSelf: 'flex-start',
                borderTopLeftRadius: 0, // <-- add
              }}
            >
              {!mobileSubMenu && (
                <ul className="flex flex-col gap-6">
                  <li>
                    <Link href="/" onClick={() => setMobileOpen(false)}>
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link href="/products" onClick={() => setMobileOpen(false)}>
                      Products
                    </Link>
                  </li>
                  <li>
                    <button
                      className="w-full text-left flex items-center justify-between"
                      onClick={() => setMobileSubMenu('technologies')}
                    >
                      Technologies
                      <span className="ml-2 text-gray-300">
                        <svg width="16" height="16" fill="none" viewBox="0 0 24 24">
                          <path
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M9 6l6 6-6 6"
                          />
                        </svg>
                      </span>
                    </button>
                  </li>
                  <li>
                    <button
                      className="w-full text-left flex items-center justify-between"
                      onClick={() => setMobileSubMenu('solutions')}
                    >
                      Solutions
                      <span className="ml-2 text-gray-300">
                        <svg width="16" height="16" fill="none" viewBox="0 0 24 24">
                          <path
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M9 6l6 6-6 6"
                          />
                        </svg>
                      </span>
                    </button>
                  </li>
                  <li>
                    <Link href="/sira" onClick={() => setMobileOpen(false)}>
                      Sira
                    </Link>
                  </li>
                  <li>
                    <Link href="/about-us" onClick={() => setMobileOpen(false)}>
                      About Us
                    </Link>
                  </li>
                  <li>
                    <Link href="/contact" onClick={() => setMobileOpen(false)}>
                      Contact Us
                    </Link>
                  </li>
                </ul>
              )}

              {/* Technologies Submenu */}
              {mobileSubMenu === 'technologies' && (
                <ul className="flex flex-col gap-6">
                  <li>
                    <button className="w-full text-left" onClick={() => setMobileSubMenu(null)}>
                      &larr; Back
                    </button>
                  </li>
                  <li>
                    <Link href="/technologies/wizsense" onClick={() => setMobileOpen(false)}>
                      WizSense Technology
                    </Link>
                  </li>
                  <li>
                    <Link href="/technologies/wizmind" onClick={() => setMobileOpen(false)}>
                      WizMind Technology
                    </Link>
                  </li>
                  <li>
                    <Link href="/technologies/full-color" onClick={() => setMobileOpen(false)}>
                      Full-color Technology
                    </Link>
                  </li>
                  <li>
                    <Link href="/technologies/auto-tracking" onClick={() => setMobileOpen(false)}>
                      Auto Tracking 3.0
                    </Link>
                  </li>
                  <li>
                    <Link href="/technologies/hdcvi-ten" onClick={() => setMobileOpen(false)}>
                      HDCVI TEN Technology
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/technologies/predictive-focus"
                      onClick={() => setMobileOpen(false)}
                    >
                      Predictive Focus Algorithm
                    </Link>
                  </li>
                </ul>
              )}

              {/* Solutions Submenu */}
              {mobileSubMenu === 'solutions' && (
                <ul className="flex flex-col gap-6">
                  <li>
                    <button className="w-full text-left" onClick={() => setMobileSubMenu(null)}>
                      &larr; Back
                    </button>
                  </li>
                  <li>
                    <Link href="/solutions/building" onClick={() => setMobileOpen(false)}>
                      Building
                    </Link>
                  </li>
                  <li>
                    <Link href="/solutions/banking" onClick={() => setMobileOpen(false)}>
                      Banking
                    </Link>
                  </li>
                  <li>
                    <Link href="/solutions/retail" onClick={() => setMobileOpen(false)}>
                      Retail
                    </Link>
                  </li>
                  <li>
                    <Link href="/solutions/transportation" onClick={() => setMobileOpen(false)}>
                      Transportation
                    </Link>
                  </li>
                  <li>
                    <Link href="/solutions/government" onClick={() => setMobileOpen(false)}>
                      Government
                    </Link>
                  </li>
                </ul>
              )}
            </div>
            {/* Click outside to close */}
            <div
              className="flex-1"
              onClick={() => setMobileOpen(false)}
              style={{ cursor: 'pointer', pointerEvents: 'auto' }}
            />
          </div>
        )}
      </nav>
    </header>
  )
}
