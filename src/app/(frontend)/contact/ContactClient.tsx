'use client'

import { useState, useEffect } from 'react'
import {
  Mail,
  Phone,
  MapPin,
  Send,
  CheckCircle,
  AlertCircle,
  Star,
  Sparkles,
  MessageCircle,
} from 'lucide-react'
import Script from 'next/script'

interface ContactClientProps {
  telephone: string
  email: string
  schemaMarkup: string
}
interface ShapeProps {
  left: string
  top: string
  delay: number
  duration: number
  size: string
}
const FloatingShape = ({ shape }: { shape: ShapeProps }) => (
  <div
    className={`absolute ${shape.size} bg-gradient-to-br from-blue-200 to-purple-200 rounded-full opacity-20 animate-pulse`}
    style={{
      left: shape.left,
      top: shape.top,
    }}
  />
)
export const ContactClient: React.FC<ContactClientProps> = ({ telephone, email, schemaMarkup }) => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    category: '',
    message: '',
  })
  const [shapes, setShapes] = useState<ShapeProps[]>([])

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'success' | 'error' | null>(null)
  const [focusedField, setFocusedField] = useState<string | null>(null)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])
  useEffect(() => {
    const generatedShapes = Array.from({ length: 15 }, (_, i) => ({
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      delay: i * 0.2,
      duration: 4 + Math.random() * 3,
      size: i % 3 === 0 ? 'w-32 h-32' : i % 2 === 0 ? 'w-20 h-20' : 'w-12 h-12',
    }))
    setShapes(generatedShapes)
  }, [])

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
  ) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
    return shapes
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus(null)
    try {
      await new Promise((resolve) => setTimeout(resolve, 2000))
      setSubmitStatus('success')
      setFormData({
        firstName: '',
        lastName: '',
        phone: '',
        email: '',
        category: '',
        message: '',
      })
    } catch {
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <>
      {schemaMarkup && (
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: schemaMarkup }} />
      )}
      <div className="min-h-screen bg-black relative overflow-hidden">
        {/* Dynamic Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          {shapes.map((shape, i) => (
            <FloatingShape key={i} shape={shape} />
          ))}

          <div
            className="absolute w-96 h-96 bg-gradient-to-r from-blue-300/10 to-purple-300/10 rounded-full blur-3xl pointer-events-none"
            style={{
              left: mousePosition.x - 192,
              top: mousePosition.y - 192,
              transition: 'all 0.5s ease-out',
            }}
          />
        </div>

        {/* Header */}
        <header className="relative z-10 p-6 bg-white/70 backdrop-blur-md border-b border-white/20">
          <div className="max-w-7xl mx-auto flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl flex items-center justify-center shadow-lg">
                <Sparkles className="w-6 h-6 text-white" />
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Brand
              </span>
            </div>
            <nav className="hidden md:flex space-x-8">
              <a
                href="#"
                className="text-gray-600 hover:text-blue-600 font-medium transition-colors"
              >
                Home
              </a>
              <a
                href="#"
                className="text-gray-600 hover:text-blue-600 font-medium transition-colors"
              >
                About
              </a>
              <a
                href="#"
                className="text-gray-600 hover:text-blue-600 font-medium transition-colors"
              >
                Services
              </a>
              <a href="#" className="text-blue-600 font-semibold">
                Contact
              </a>
            </nav>
          </div>
        </header>

        {/* Main Content */}
        <main className="relative z-10 flex-1 py-16 px-6">
          <div className="max-w-7xl mx-auto">
            {/* Hero Section */}
            <div className="text-center mb-20">
              <div className="inline-flex items-center space-x-2 bg-blue-100 px-4 py-2 rounded-full mb-6">
                <MessageCircle className="w-5 h-5 text-blue-600" />
                <span className="text-blue-800 font-medium">Get in Touch</span>
              </div>
              <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
                <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 bg-clip-text text-transparent">
                  Lets Start a
                </span>
                <br />
                <span className="text-gray-100">Conversation</span>
              </h1>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
                Ready to bring your vision to life? Were here to listen, collaborate, and create
                something extraordinary together.
              </p>
            </div>

            <div className="grid lg:grid-cols-12 gap-12">
              {/* Contact Info Section */}
              <div className="lg:col-span-4 space-y-8">
                <div className="bg-neutral-900/90 backdrop-blur-xl rounded-3xl p-8 shadow-xl border border-white/20">
                  <h2 className="text-2xl font-bold text-white mb-8">Contact Information</h2>
                  {[
                    {
                      icon: Phone,
                      title: 'Phone',
                      info: telephone,
                      desc: 'Available Mon-Fri, 9AM-6PM EST',
                      color: 'from-green-500 to-emerald-500',
                    },
                    {
                      icon: Mail,
                      title: 'Email',
                      info: email,
                      desc: 'We respond within 24 hours',
                      color: 'from-blue-500 to-cyan-500',
                    },
                    {
                      icon: MapPin,
                      title: 'Address',
                      info: '931 Abio Martin Drive',
                      desc: 'PA Pennsylvania-18104',
                      color: 'from-purple-500 to-pink-500',
                    },
                  ].map((item, index) => (
                    <div
                      key={index}
                      className="group relative bg-gradient-to-r from-gray-900 to-gray-800 rounded-2xl p-6 border border-gray-700 hover:shadow-lg transition-all duration-500 hover:transform hover:scale-105 mb-6 last:mb-0"
                    >
                      <div className="flex items-start space-x-4">
                        <div
                          className={`w-12 h-12 bg-gradient-to-r ${item.color} rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}
                        >
                          <item.icon className="w-6 h-6 text-white" />
                        </div>
                        <div className="flex-1">
                          <h3 className="font-semibold text-white text-lg mb-1">{item.title}</h3>
                          <p className="text-gray-200 font-medium mb-1">{item.info}</p>
                          <p className="text-gray-400 text-sm">{item.desc}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                {/* Trust Badge */}
                <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-8 text-white shadow-xl">
                  <div className="text-center">
                    <Star className="w-12 h-12 mx-auto mb-4 text-yellow-300" />
                    <h3 className="text-xl font-bold mb-2">Trusted by 1000+</h3>
                    <p className="text-blue-100">
                      Companies worldwide trust us with their projects
                    </p>
                  </div>
                </div>
              </div>

              {/* Contact Form */}
              <div className="lg:col-span-8">
                <div className="bg-neutral-900/90 backdrop-blur-xl rounded-3xl p-10 shadow-xl border border-white/20">
                  <h2 className="text-3xl font-bold text-white mb-2">Send us a Message</h2>
                  <p className="text-gray-300 mb-8">
                    Fill out the form below and we will get back to you as soon as possible.
                  </p>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    {submitStatus && (
                      <div
                        className={`p-6 rounded-2xl flex items-center space-x-4 ${
                          submitStatus === 'success'
                            ? 'bg-green-50 border border-green-200 text-green-800'
                            : 'bg-red-50 border border-red-200 text-red-800'
                        } animate-pulse`}
                      >
                        {submitStatus === 'success' ? (
                          <CheckCircle className="w-6 h-6 flex-shrink-0" />
                        ) : (
                          <AlertCircle className="w-6 h-6 flex-shrink-0" />
                        )}
                        <div>
                          <p className="font-semibold">
                            {submitStatus === 'success'
                              ? 'Message sent successfully!'
                              : 'Something went wrong'}
                          </p>
                          <p className="text-sm mt-1">
                            {submitStatus === 'success'
                              ? "We'll get back to you within 24 hours."
                              : 'Please try again or contact us directly.'}
                          </p>
                        </div>
                      </div>
                    )}

                    <div className="grid md:grid-cols-2 gap-6">
                      {[
                        { name: 'firstName', placeholder: 'First Name *', type: 'text' },
                        { name: 'lastName', placeholder: 'Last Name *', type: 'text' },
                      ].map((field) => (
                        <div key={field.name} className="relative group">
                          <input
                            type={field.type}
                            name={field.name}
                            value={formData[field.name as keyof typeof formData]}
                            onChange={handleInputChange}
                            onFocus={() => setFocusedField(field.name)}
                            onBlur={() => setFocusedField(null)}
                            placeholder={field.placeholder}
                            required
                            style={{
                              color: '#fff',
                              backgroundColor: '#18181b',
                              caretColor: '#2563eb',
                            }}
                            className="w-full px-6 py-4 bg-neutral-900 border-2 border-gray-700 rounded-2xl placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:shadow-lg focus:shadow-blue-500/20 transition-all duration-300"
                          />
                          {focusedField === field.name && (
                            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-2xl -z-10 blur-sm" />
                          )}
                        </div>
                      ))}
                    </div>

                    {[
                      { name: 'phone', placeholder: 'Phone Number *', type: 'tel' },
                      { name: 'email', placeholder: 'Email Address *', type: 'email' },
                    ].map((field) => (
                      <div key={field.name} className="relative group">
                        <input
                          type={field.type}
                          name={field.name}
                          value={formData[field.name as keyof typeof formData]}
                          onChange={handleInputChange}
                          onFocus={() => setFocusedField(field.name)}
                          onBlur={() => setFocusedField(null)}
                          placeholder={field.placeholder}
                          required
                          style={{
                            color: '#fff',
                            backgroundColor: '#18181b',
                            caretColor: '#2563eb',
                          }}
                          className="w-full px-6 py-4 bg-neutral-900 border-2 border-gray-700 rounded-2xl placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:shadow-lg focus:shadow-blue-500/20 transition-all duration-300"
                        />
                        {focusedField === field.name && (
                          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-2xl -z-10 blur-sm" />
                        )}
                      </div>
                    ))}

                    <div className="relative group">
                      <select
                        name="category"
                        value={formData.category}
                        onChange={handleInputChange}
                        onFocus={() => setFocusedField('category')}
                        onBlur={() => setFocusedField(null)}
                        required
                        style={{
                          color: '#fff',
                          backgroundColor: '#18181b',
                        }}
                        className="w-full px-6 py-4 bg-neutral-900 border-2 border-gray-700 rounded-2xl focus:outline-none focus:border-blue-500 focus:shadow-lg focus:shadow-blue-500/20 transition-all duration-300 appearance-none"
                      >
                        <option value="">Select Category *</option>
                        <option value="General Inquiry">General Inquiry</option>
                        <option value="Sales">Sales</option>
                        <option value="Support">Support</option>
                        <option value="Partnership">Partnership</option>
                        <option value="Other">Other</option>
                      </select>
                      {focusedField === 'category' && (
                        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-2xl -z-10 blur-sm" />
                      )}
                    </div>

                    <div className="relative group">
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        onFocus={() => setFocusedField('message')}
                        onBlur={() => setFocusedField(null)}
                        rows={6}
                        placeholder="Tell us about your project, goals, or any questions you have..."
                        style={{
                          color: '#fff',
                          backgroundColor: '#18181b',
                          caretColor: '#2563eb',
                        }}
                        className="w-full px-6 py-4 bg-neutral-900 border-2 border-gray-700 rounded-2xl placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:shadow-lg focus:shadow-blue-500/20 transition-all duration-300 resize-none"
                      />
                      {focusedField === 'message' && (
                        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-2xl -z-10 blur-sm" />
                      )}
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-5 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-2xl hover:from-blue-700 hover:to-purple-700 focus:outline-none focus:ring-4 focus:ring-blue-500/30 disabled:opacity-60 disabled:cursor-not-allowed transition-all duration-300 transform hover:scale-105 hover:shadow-xl flex items-center justify-center space-x-3 group"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                          <span>Sending Message...</span>
                        </>
                      ) : (
                        <>
                          <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                          <span>Send Message</span>
                        </>
                      )}
                    </button>

                    <div className="flex items-center justify-center space-x-2 text-gray-400 text-sm">
                      <Star className="w-4 h-4 text-blue-500" />
                      <span>Your privacy is protected. We never share your information.</span>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  )
}
