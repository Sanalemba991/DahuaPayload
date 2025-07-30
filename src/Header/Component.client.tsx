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
        { href: '/technologies/wizsense', label: 'WizSense', desc: 'AI-powered video analytics' },
        { href: '/technologies/wizmind', label: 'WizMind', desc: 'Intelligent monitoring system' },
        {
          href: '/technologies/full-color',
          label: 'Full-color',
          desc: '24/7 colorful surveillance',
        },
        {
          href: '/technologies/auto-tracking',
          label: 'Auto Tracking 3.0',
          desc: 'Smart object tracking',
        },
        {
          href: '/technologies/hdcvi-ten',
          label: 'HDCVI TEN Technology',
          desc: 'High-definition transmission',
        },
        {
          href: '/technologies/predictive-focus',
          label: 'Predictive Focus Algorithm',
          desc: 'Advanced focus algorithm',
        },
      ],
    },
    {
      href: '/solutions',
      label: 'Solutions',
      submenu: [
        { href: '/solutions/building', label: 'Building', desc: 'Commercial security solutions' },
        { href: '/solutions/banking', label: 'Banking', desc: 'Financial institution security' },
        { href: '/solutions/retail', label: 'Retail', desc: 'Store monitoring & analytics' },
        {
          href: '/solutions/transportation',
          label: 'Transportation',
          desc: 'Traffic & transit security',
        },
        { href: '/solutions/government', label: 'Government', desc: 'Public safety solutions' },
      ],
    },
    { href: '/sira', label: 'Sira' },
    { href: '/about-us', label: 'About Us' },
    { href: '/contact', label: 'Contact Us' },
  ]

  return (
    <header className="fixed top-0 left-0 right-0 bg-white text-black shadow-md z-50 border-b border-gray-200">
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

          {/* Desktop navigation - REMOVED UNDERLINE ANIMATIONS */}
          <nav
            ref={navRef}
            className="hidden md:flex items-center gap-8"
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
                      className={`flex items-center gap-1 px-3 py-2 group ${isPathActive(pathname, item.href) ? 'text-red-600' : 'text-gray-800 hover:text-red-600'}`}
                    >
                      <span className="relative">
                        {item.label}
                        <span
                          className={`absolute -bottom-1 left-0 h-0.5 bg-red-600 transition-all duration-300 ${
                            isPathActive(pathname, item.href) ? 'w-full' : 'w-0 group-hover:w-full'
                          }`}
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
                    className={`px-3 py-2 group ${pathname === item.href ? 'text-red-600' : 'text-gray-800 hover:text-red-600'}`}
                  >
                    <span className="relative">
                      {item.label}
                      <span
                        className={`absolute -bottom-1 left-0 h-0.5 bg-red-600 transition-all duration-300 ${
                          pathname === item.href ? 'w-full' : 'w-0 group-hover:w-full'
                        }`}
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

      {/* Mobile menu - USING SECOND CODE VERSION */}
      {mobileOpen && (
        <div className="md:hidden fixed inset-0 z-50 pt-16">
          <div className="absolute inset-0 bg-transparent" onClick={() => setMobileOpen(false)} />

          <div
            className="absolute left-0 right-0 top-0 bg-white shadow-xl overflow-y-auto flex flex-col"
            style={{
              height: 'auto',
              maxHeight: '85vh',
              animation: 'slideInDown 0.3s ease-out forwards',
            }}
          >
            <div className="p-4 border-b border-gray-200 bg-gray-50">
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

            <div className="flex-1 py-2">
              {!mobileSubMenu && (
                <nav className="px-2">
                  {navLinks.map((item) => (
                    <div key={item.href} className="border-b border-gray-100 last:border-b-0">
                      {item.submenu ? (
                        <button
                          className="w-full flex items-center justify-between py-3 px-3 text-gray-800 hover:text-red-600 hover:bg-gray-50 transition-colors duration-200 text-sm"
                          onClick={() =>
                            setMobileSubMenu(
                              item.href.includes('technologies') ? 'technologies' : 'solutions',
                            )
                          }
                        >
                          <span className="font-medium">{item.label}</span>
                          <svg
                            className="w-4 h-4 text-gray-400"
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
                          className={`flex items-center py-3 px-3 text-sm font-medium transition-colors duration-200 ${
                            pathname === item.href
                              ? 'text-red-600 bg-red-50'
                              : 'text-gray-800 hover:text-red-600 hover:bg-gray-50'
                          }`}
                        >
                          {item.label}
                        </Link>
                      )}
                    </div>
                  ))}
                </nav>
              )}

              {/* Enhanced Submenu Display */}
              {(mobileSubMenu === 'technologies' || mobileSubMenu === 'solutions') && (
                <div className="px-2">
                  <button
                    className="flex items-center py-3 px-3 text-gray-600 hover:text-red-600 transition-colors duration-200 mb-2 text-sm"
                    onClick={() => setMobileSubMenu(null)}
                  >
                    <svg
                      className="mr-2 w-4 h-4"
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

                  <div className="border-t border-gray-200 pt-3">
                    <h3 className="px-3 py-2 text-xs font-semibold text-gray-900 uppercase tracking-wide bg-gray-50 rounded">
                      {mobileSubMenu === 'technologies' ? 'Technologies' : 'Solutions'}
                    </h3>

                    <div className="mt-2 space-y-1">
                      {navLinks
                        .find((item) => item.href === `/${mobileSubMenu}`)
                        ?.submenu?.map((subItem) => (
                          <Link
                            key={subItem.href}
                            href={subItem.href}
                            onClick={() => setMobileOpen(false)}
                            className="block p-3 text-gray-800 hover:text-red-600 hover:bg-red-50 transition-colors duration-200 border border-gray-100 rounded-md mx-2 mb-2"
                          >
                            <div className="text-sm font-medium">{subItem.label}</div>
                            <div className="text-xs text-gray-500 mt-1">
                              {(subItem as any).desc || 'Advanced security solution'}
                            </div>
                          </Link>
                        ))}
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Contact info */}
            <div className="border-t border-gray-200 p-4 bg-gray-50">
              <div className="space-y-2">
                <a
                  href={`mailto:${email}`}
                  className="flex items-center text-sm text-gray-600 hover:text-red-600 transition-colors duration-200"
                >
                  <svg
                    className="w-4 h-4 mr-2"
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
                  {email}
                </a>
                <a
                  href={`tel:${telephone}`}
                  className="flex items-center text-sm text-gray-600 hover:text-red-600 transition-colors duration-200"
                >
                  <svg
                    className="w-4 h-4 mr-2"
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
                  {telephone}
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

        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </header>
  )
}

export default HeaderClient
