'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState, useRef, useEffect } from 'react'
import Image from 'next/image'

interface HeaderProps {
  logo: {
    url: string
    alt?: string
  }
  email?: string
  telephone?: string
}

const HeaderClient = ({
  logo,
  email = 'sales@example.com',
  telephone = '+1234567890',
}: HeaderProps) => {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
  const [mobileSubMenu, setMobileSubMenu] = useState<null | 'technologies' | 'solutions'>(null)
  const pathname = usePathname()
  const navRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(e.target as Node)) {
        setActiveDropdown(null)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [mobileOpen])

  const isPathActive = (pathname: string, basePath: string) => {
    return pathname.startsWith(basePath)
  }

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/products', label: 'Products' },
    {
      href: '/technologies',
      label: 'Technologies',
      submenu: [
        { href: '/technologies/wizsense', label: 'WizSense' },
        { href: '/technologies/wizmind', label: 'WizMind' },
        { href: '/technologies/full-color', label: 'Full-color' },
        { href: '/technologies/auto-tracking', label: 'Auto Tracking 3.0' },
        { href: '/technologies/hdcvi-ten', label: 'HDCVI TEN Technology' },
        { href: '/technologies/predictive-focus', label: 'Predictive Focus Algorithm' },
      ],
    },
    {
      href: '/solutions',
      label: 'Solutions',
      submenu: [
        { href: '/solutions/building', label: 'Building' },
        { href: '/solutions/banking', label: 'Banking' },
        { href: '/solutions/retail', label: 'Retail' },
        { href: '/solutions/transportation', label: 'Transportation' },
        { href: '/solutions/government', label: 'Government' },
      ],
    },
    { href: '/sira', label: 'Sira' },
    { href: '/about-us', label: 'About Us' },
    { href: '/contact', label: 'Contact Us' },
  ]

  return (
    <header className="fixed top-0 left-0 right-0 bg-white shadow-md z-50 border-b border-gray-200">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Mobile menu button and logo - Updated layout */}
          <div className="flex w-full md:hidden items-center justify-between">
            {/* Logo on the left */}
            <Link href="/" className="block">
              <Image
                src={logo?.url || '/images/dahualogo-removebg-preview.png.png'}
                alt={logo?.alt || 'Logo'}
                width={100}
                height={30}
                className="h-10 object-contain"
              />
            </Link>

            {/* Menu toggle button on the right */}
            <button
              className="flex items-center z-[100000] relative p-2"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
            >
              <div className="w-6 h-6 relative flex flex-col justify-center items-center">
                <div
                  className="w-5 h-0.5 bg-red-600 rounded-full transition-all duration-300 ease-in-out absolute"
                  style={{
                    transform: mobileOpen ? 'rotate(45deg)' : 'rotate(0) translateY(-6px)',
                  }}
                />
                <div
                  className="w-5 h-0.5 bg-red-600 rounded-full transition-all duration-300 ease-in-out absolute"
                  style={{
                    opacity: mobileOpen ? 0 : 1,
                  }}
                />
                <div
                  className="w-5 h-0.5 bg-red-600 rounded-full transition-all duration-300 ease-in-out absolute"
                  style={{
                    transform: mobileOpen ? 'rotate(-45deg)' : 'rotate(0) translateY(6px)',
                  }}
                />
              </div>
            </button>
          </div>

          {/* Desktop logo */}
          <div className="hidden md:flex items-center justify-start" style={{ width: '150px' }}>
            <Link href="/" className="block">
              <Image
                src={logo?.url || '/images/dahualogo-removebg-preview.png.png'}
                alt={logo?.alt || 'Logo'}
                width={140}
                height={40}
                className="object-contain"
                style={{
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
              />
            </Link>
          </div>

          {/* Desktop navigation */}
          <nav
            ref={navRef}
            className="hidden md:flex items-center gap-12"
            style={{ flex: 1, justifyContent: 'center' }}
          >
            {navLinks.map((item) => (
              <div key={item.href} className="relative">
                {item.submenu ? (
                  <div
                    onMouseEnter={() => setActiveDropdown(item.href)}
                    onMouseLeave={() => setActiveDropdown(null)}
                  >
                    <Link
                      href={item.href}
                      className={`flex items-center gap-1 px-3 py-2 ${isPathActive(pathname, item.href) ? 'text-red-600' : 'text-gray-800 hover:text-red-600'}`}
                    >
                      <span className="relative">
                        {item.label}
                        <span
                          className={`absolute -bottom-0.5 left-0 h-0.5 bg-red-600 transition-all duration-300 ${
                            isPathActive(pathname, item.href) ? 'w-full' : 'w-0 group-hover:w-full'
                          }`}
                          style={{ height: '2px' }}
                        ></span>
                      </span>
                      <svg
                        className="w-4 h-4"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        style={{
                          filter: 'drop-shadow(0 1px 2px rgba(0,0,0,0.8))',
                        }}
                      >
                        <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
                      </svg>
                    </Link>

                    {activeDropdown === item.href && (
                      <div
                        className="fixed left-0 right-0 w-full bg-white shadow-lg py-1 z-10 mt-0"
                        style={{
                          top: '64px',
                          borderTop: '1px solid #e5e7eb',
                          animation: 'fadeIn 0.3s ease-out',
                        }}
                        onMouseEnter={() => setActiveDropdown(item.href)}
                        onMouseLeave={() => setActiveDropdown(null)}
                      >
                        <div className="container mx-auto px-4 py-6">
                          <div className="flex">
                            <div className="flex-1 pr-8">
                              <h3 className="text-lg font-semibold border-b-2 border-red-600 pb-2 inline-block mb-6">
                                {item.label}
                              </h3>
                              <div className="grid grid-cols-2 gap-4">
                                {item.submenu.map((subItem) => (
                                  <Link
                                    key={subItem.href}
                                    href={subItem.href}
                                    className="block p-4 text-gray-800 hover:bg-gray-100 rounded-lg border border-gray-100 bg-gray-50 hover:border-red-600 hover:text-red-600 transition-all"
                                  >
                                    {subItem.label}
                                  </Link>
                                ))}
                              </div>
                            </div>
                            <div className="w-80 pl-8 border-l border-gray-200 flex flex-col items-center justify-center">
                              <div className="w-full h-48 bg-gray-100 rounded-lg mb-4 flex items-center justify-center">
                                <Image
                                  src={
                                    item.href === '/technologies'
                                      ? '/images/wiz.png'
                                      : '/images/aboutus.png'
                                  }
                                  alt={item.label}
                                  width={280}
                                  height={200}
                                  className="object-contain rounded-lg"
                                />
                              </div>
                              <div className="text-center p-4 bg-gray-50 rounded-lg border border-gray-200">
                                <h4 className="font-semibold mb-2">
                                  {item.href === '/technologies'
                                    ? 'Advanced Technology Solutions'
                                    : 'Industry Solutions'}
                                </h4>
                                <p className="text-sm text-gray-600">
                                  {item.href === '/technologies'
                                    ? 'Discover cutting-edge surveillance technologies that deliver superior performance and reliability.'
                                    : 'Comprehensive security solutions tailored for various industries and applications.'}
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    href={item.href}
                    className={`px-3 py-2 ${pathname === item.href ? 'text-red-600' : 'text-gray-800 hover:text-red-600'}`}
                  >
                    <span className="relative">
                      {item.label}
                      <span
                        className={`absolute -bottom-0.5 left-0 h-0.5 bg-red-600 transition-all duration-300 ${
                          pathname === item.href ? 'w-full' : 'w-0 group-hover:w-full'
                        }`}
                        style={{ height: '2px' }}
                      ></span>
                    </span>
                  </Link>
                )}
              </div>
            ))}
          </nav>

          {/* Desktop contact icons */}
          <div
            className="hidden md:flex items-center gap-4"
            style={{ minWidth: '120px', justifyContent: 'flex-end' }}
          >
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
      </div>

      {/* Mobile menu - Updated background */}
      {mobileOpen && (
        <div className="md:hidden fixed inset-0 z-50 pt-16">
          {/* Transparent backdrop */}
          <div className="absolute inset-0 bg-transparent" onClick={() => setMobileOpen(false)} />

          {/* Half-height drawer with white background */}
          <div
            className="absolute left-0 right-0 top-0 bg-white shadow-xl overflow-y-auto"
            style={{
              height: '50vh',
              animation: 'slideInDown 0.3s ease-out forwards',
            }}
          >
            {/* Logo section at top */}
            <div className="p-6 border-b border-gray-200 bg-gray-50">
              <Link href="/" className="block" onClick={() => setMobileOpen(false)}>
                <Image
                  src={logo?.url || '/images/dahualogo-removebg-preview.png.png'}
                  alt={logo?.alt || 'Logo'}
                  width={120}
                  height={36}
                  className="h-9 object-contain"
                />
              </Link>
            </div>

            {/* Navigation menu */}
            <div className="flex-1 py-4">
              {!mobileSubMenu && (
                <nav className="px-4">
                  {navLinks.map((item, index) => (
                    <div key={item.href} className="border-b border-gray-100 last:border-b-0">
                      {item.submenu ? (
                        <button
                          className="w-full flex items-center justify-between py-4 px-2 text-gray-800 hover:text-red-600 hover:bg-gray-50 transition-colors duration-200"
                          onClick={() =>
                            setMobileSubMenu(
                              item.href.includes('technologies') ? 'technologies' : 'solutions',
                            )
                          }
                        >
                          <div className="flex items-center">
                            <svg
                              className="w-5 h-5 mr-3 text-gray-500"
                              fill="currentColor"
                              viewBox="0 0 20 20"
                            >
                              <path
                                fillRule="evenodd"
                                d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                                clipRule="evenodd"
                              />
                            </svg>
                            <span className="text-left font-medium">{item.label}</span>
                          </div>
                          <svg
                            className="w-5 h-5 text-gray-400"
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
                      ) : (
                        <Link
                          href={item.href}
                          onClick={() => setMobileOpen(false)}
                          className={`flex items-center py-4 px-2 font-medium transition-colors duration-200 ${
                            pathname === item.href
                              ? 'text-red-600 bg-red-50'
                              : 'text-gray-800 hover:text-red-600 hover:bg-gray-50'
                          }`}
                        >
                          <svg
                            className="w-5 h-5 mr-3 text-gray-500"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path
                              fillRule="evenodd"
                              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                              clipRule="evenodd"
                            />
                          </svg>
                          {item.label}
                        </Link>
                      )}
                    </div>
                  ))}
                </nav>
              )}

              {/* Technologies Submenu */}
              {mobileSubMenu === 'technologies' && (
                <div className="px-4">
                  <button
                    className="flex items-center py-4 px-2 text-gray-600 hover:text-red-600 transition-colors duration-200 mb-2"
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
                    Back to Menu
                  </button>
                  <div className="border-t border-gray-200 pt-4">
                    <h3 className="px-2 py-2 text-sm font-semibold text-gray-900 uppercase tracking-wide">
                      Technologies
                    </h3>
                    {navLinks
                      .find((item) => item.href === '/technologies')
                      ?.submenu?.map((subItem) => (
                        <Link
                          key={subItem.href}
                          href={subItem.href}
                          onClick={() => setMobileOpen(false)}
                          className="flex items-center py-3 px-2 text-gray-800 hover:text-red-600 hover:bg-gray-50 transition-colors duration-200 border-b border-gray-100 last:border-b-0"
                        >
                          <svg
                            className="w-4 h-4 mr-3 text-gray-500"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path
                              fillRule="evenodd"
                              d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                              clipRule="evenodd"
                            />
                          </svg>
                          {subItem.label}
                        </Link>
                      ))}
                  </div>
                </div>
              )}

              {/* Solutions Submenu */}
              {mobileSubMenu === 'solutions' && (
                <div className="px-4">
                  <button
                    className="flex items-center py-4 px-2 text-gray-600 hover:text-red-600 transition-colors duration-200 mb-2"
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
                    Back to Menu
                  </button>
                  <div className="border-t border-gray-200 pt-4">
                    <h3 className="px-2 py-2 text-sm font-semibold text-gray-900 uppercase tracking-wide">
                      Solutions
                    </h3>
                    {navLinks
                      .find((item) => item.href === '/solutions')
                      ?.submenu?.map((subItem) => (
                        <Link
                          key={subItem.href}
                          href={subItem.href}
                          onClick={() => setMobileOpen(false)}
                          className="flex items-center py-3 px-2 text-gray-800 hover:text-red-600 hover:bg-gray-50 transition-colors duration-200 border-b border-gray-100 last:border-b-0"
                        >
                          <svg
                            className="w-4 h-4 mr-3 text-gray-500"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path
                              fillRule="evenodd"
                              d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                              clipRule="evenodd"
                            />
                          </svg>
                          {subItem.label}
                        </Link>
                      ))}
                  </div>
                </div>
              )}
            </div>

            {/* Contact info at bottom */}
            <div className="border-t border-gray-200 p-4 bg-gray-50">
              <div className="space-y-3">
                <a
                  href={`mailto:${email}`}
                  className="flex items-center text-sm text-gray-600 hover:text-red-600 transition-colors duration-200"
                >
                  <svg
                    className="w-4 h-4 mr-3 flex-shrink-0"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                  <span className="truncate">{email}</span>
                </a>
                <a
                  href={`tel:${telephone}`}
                  className="flex items-center text-sm text-gray-600 hover:text-red-600 transition-colors duration-200"
                >
                  <svg
                    className="w-4 h-4 mr-3 flex-shrink-0"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                  <span>{telephone}</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      )}

      <style jsx>{`
        @keyframes slideInDown {
          from {
            transform: translateY(-100%);
          }
          to {
            transform: translateY(0);
          }
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
      `}</style>
    </header>
  )
}

export default HeaderClient
