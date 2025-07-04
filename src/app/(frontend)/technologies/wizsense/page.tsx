import React from 'react'
import Image from 'next/image'
export default function WizSensePage() {
  return (
    <div style={{ paddingTop: '80px', backgroundColor: '#f8f9fa' }}>
      {/* Top Background Image Section - Add your own image */}
      <div
        style={{
          backgroundImage: 'url("/images/wizsens.webp")', // Add your image path here
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          position: 'relative',
          height: '550px', // Height for the image section
          backgroundColor: '#cccccc', // Fallback color if image doesn't load
          display: 'flex',
          alignItems: 'center', // Center vertically
        }}
      >
        {/* Text Overlay on Left Side */}
        <div
          style={{
            position: 'relative',
            zIndex: 2,
            paddingLeft: '50px', // Left padding
            maxWidth: '600px', // Limit text width
          }}
        >
          <h1
            style={{
              fontSize: '3.5rem',
              fontWeight: 'bold',
              color: 'white',
              textShadow: '3px 3px 8px rgba(0,0,0,0.9)',
              marginBottom: '20px',
              lineHeight: '1.2',
            }}
          >
            WizSense Technology
          </h1>
          <p
            style={{
              fontSize: '1.3rem',
              color: 'rgba(255,255,255,0.95)',
              textShadow: '2px 2px 6px rgba(0,0,0,0.9)',
              fontWeight: '300',
              lineHeight: '1.6',
            }}
          >
            Revolutionary AI-powered surveillance technology that transforms ordinary security
            cameras into intelligent monitoring systems with advanced detection capabilities.
          </p>
        </div>

        {/* Light overlay only on text area for better readability */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '50%', // Only cover left half where text is
            height: '100%',
            background: 'linear-gradient(to right, rgba(0,0,0,0.3), rgba(0,0,0,0))', // Light overlay
            zIndex: 1,
          }}
        />
      </div>

      {/* Video Section - Moved up */}
      <div style={{ padding: '80px 0', backgroundColor: '#1a1a1a' }}>
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2
              style={{
                fontSize: '2.5rem',
                fontWeight: 'bold',
                textAlign: 'center',
                marginBottom: '20px',
                color: 'white',
              }}
            >
              See WizSense in Action
            </h2>
            <p
              style={{
                textAlign: 'center',
                color: '#ccc',
                fontSize: '1.1rem',
                marginBottom: '50px',
              }}
            >
              Watch how WizSense Technology revolutionizes security monitoring
            </p>

            {/* Video Container */}
            <div
              style={{
                position: 'relative',
                paddingBottom: '56.25%', // 16:9 aspect ratio
              }}
            >
              <iframe
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '100%',
                  height: '100%',
                  borderRadius: '15px',
                  boxShadow: '0 20px 40px rgba(0,0,0,0.3)',
                }}
                src="https://www.youtube.com/embed/kQOFsrFDvC0" // Replace with actual WizSense video
                title="WizSense Technology Demo"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      </div>

      {/* Advanced Features Section - Moved down */}
      <div style={{ padding: '80px 0', backgroundColor: 'white' }}>
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2
              style={{
                fontSize: '2.5rem',
                fontWeight: 'bold',
                textAlign: 'center',
                marginBottom: '60px',
                color: '#333',
              }}
            >
              Advanced Features
            </h2>

            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                gap: '40px',
                marginBottom: '60px',
              }}
            >
              {/* Feature 1 */}
              <div
                style={{
                  background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                  borderRadius: '15px',
                  padding: '40px',
                  color: 'white',
                  textAlign: 'center',
                  boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
                }}
              >
                <div
                  style={{
                    width: '60px',
                    height: '60px',
                    backgroundColor: 'rgba(255,255,255,0.2)',
                    borderRadius: '50%',
                    margin: '0 auto 20px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  🧠
                </div>
                <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '15px' }}>
                  AI-Powered Detection
                </h3>
                <p style={{ fontSize: '1rem', lineHeight: '1.6', opacity: 0.9 }}>
                  Advanced deep learning algorithms that can distinguish between humans, vehicles,
                  and other objects with 99.7% accuracy.
                </p>
              </div>

              {/* Feature 2 */}
              <div
                style={{
                  background: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
                  borderRadius: '15px',
                  padding: '40px',
                  color: 'white',
                  textAlign: 'center',
                  boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
                }}
              >
                <div
                  style={{
                    width: '60px',
                    height: '60px',
                    backgroundColor: 'rgba(255,255,255,0.2)',
                    borderRadius: '50%',
                    margin: '0 auto 20px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  ⚡
                </div>
                <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '15px' }}>
                  Real-Time Processing
                </h3>
                <p style={{ fontSize: '1rem', lineHeight: '1.6', opacity: 0.9 }}>
                  Instant threat detection and alert notifications with minimal latency for
                  immediate response capabilities.
                </p>
              </div>

              {/* Feature 3 */}
              <div
                style={{
                  background: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
                  borderRadius: '15px',
                  padding: '40px',
                  color: 'white',
                  textAlign: 'center',
                  boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
                }}
              >
                <div
                  style={{
                    width: '60px',
                    height: '60px',
                    backgroundColor: 'rgba(255,255,255,0.2)',
                    borderRadius: '50%',
                    margin: '0 auto 20px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  🎯
                </div>
                <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '15px' }}>
                  Smart Analytics
                </h3>
                <p style={{ fontSize: '1rem', lineHeight: '1.6', opacity: 0.9 }}>
                  Comprehensive behavioral analysis including crowd detection, loitering, and
                  intrusion detection.
                </p>
              </div>
            </div>

            {/* Additional Features Grid */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
                gap: '30px',
              }}
            >
              <div
                style={{
                  backgroundColor: '#f8f9fa',
                  padding: '30px',
                  borderRadius: '10px',
                  textAlign: 'center',
                }}
              >
                <h4 style={{ fontWeight: 'bold', marginBottom: '10px', color: '#333' }}>
                  False Alarm Reduction
                </h4>
                <p style={{ color: '#666', fontSize: '0.9rem' }}>
                  Up to 95% reduction in false alarms through intelligent filtering
                </p>
              </div>

              <div
                style={{
                  backgroundColor: '#f8f9fa',
                  padding: '30px',
                  borderRadius: '10px',
                  textAlign: 'center',
                }}
              >
                <h4 style={{ fontWeight: 'bold', marginBottom: '10px', color: '#333' }}>
                  Metadata Search
                </h4>
                <p style={{ color: '#666', fontSize: '0.9rem' }}>
                  Advanced search capabilities by object type, color, and size
                </p>
              </div>

              <div
                style={{
                  backgroundColor: '#f8f9fa',
                  padding: '30px',
                  borderRadius: '10px',
                  textAlign: 'center',
                }}
              >
                <h4 style={{ fontWeight: 'bold', marginBottom: '10px', color: '#333' }}>
                  Heat Mapping
                </h4>
                <p style={{ color: '#666', fontSize: '0.9rem' }}>
                  Visual representation of activity patterns and traffic flow
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Related Products Section */}
      <div style={{ padding: '80px 0', backgroundColor: 'white' }}>
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2
              style={{
                fontSize: '2.5rem',
                fontWeight: 'bold',
                textAlign: 'center',
                marginBottom: '60px',
                color: '#333',
              }}
            >
              WizSense Camera Products
            </h2>

            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                gap: '40px',
              }}
            >
              {/* Product 1 - WizSense Dome Camera */}
              <div
                style={{
                  backgroundColor: 'white',
                  borderRadius: '15px',
                  overflow: 'hidden',
                  boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
                  transition: 'transform 0.3s ease',
                }}
              >
                <div
                  style={{
                    height: '280px',
                    backgroundColor: '#f8f9fa',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    padding: '20px',
                    position: 'relative',
                  }}
                >
                  <Image
                    src="/images/domecamera.webp"
                    alt="WizSense Dome Camera"
                    width={600}
                    height={600}
                    className="objectFit contain border-8"
                  />
                </div>
                <div style={{ padding: '30px' }}>
                  <h3
                    style={{
                      fontSize: '1.3rem',
                      fontWeight: 'bold',
                      marginBottom: '15px',
                      color: '#333',
                    }}
                  >
                    WizSense Dome Camera
                  </h3>
                  <p
                    style={{
                      color: '#666',
                      marginBottom: '20px',
                      lineHeight: '1.6',
                      fontSize: '0.95rem',
                    }}
                  >
                    4MP AI-powered dome camera with advanced WizSense analytics and smart detection
                    capabilities.
                  </p>
                  <div
                    style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                    }}
                  ></div>
                </div>
              </div>

              {/* Product 2 - WizSense Bullet Camera */}
              <div
                style={{
                  backgroundColor: 'white',
                  borderRadius: '15px',
                  overflow: 'hidden',
                  boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
                  transition: 'transform 0.3s ease',
                }}
              >
                <div
                  style={{
                    height: '280px',
                    backgroundColor: '#f8f9fa',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    padding: '20px',
                    position: 'relative',
                  }}
                >
                  <Image
                    src="/images/wBulletCamera.webp"
                    alt="WizSense Bullet Camera"
                    width={400}
                    height={400}
                    className="object contain border-8"
                  />
                </div>
                <div style={{ padding: '30px' }}>
                  <h3
                    style={{
                      fontSize: '1.3rem',
                      fontWeight: 'bold',
                      marginBottom: '15px',
                      color: '#333',
                    }}
                  >
                    WizSense Bullet Camera
                  </h3>
                  <p
                    style={{
                      color: '#666',
                      marginBottom: '20px',
                      lineHeight: '1.6',
                      fontSize: '0.95rem',
                    }}
                  >
                    8MP outdoor bullet camera with WizSense AI technology, weatherproof housing,
                    night vision, and motion detection.
                  </p>
                  <div
                    style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                    }}
                  ></div>
                </div>
              </div>

              {/* Product 3 - WizSense PTZ Camera */}
              <div
                style={{
                  backgroundColor: 'white',
                  borderRadius: '15px',
                  overflow: 'hidden',
                  boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
                  transition: 'transform 0.3s ease',
                }}
              >
                <div
                  style={{
                    height: '280px',
                    backgroundColor: '#f8f9fa',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    padding: '20px',
                    position: 'relative',
                  }}
                >
                  <Image
                    src="/images/WizPTZCamera.webp"
                    alt="WizSense PTZ Camera"
                    width={600}
                    height={600}
                    className="object contain border-8"
                  />
                </div>
                <div style={{ padding: '30px' }}>
                  <h3
                    style={{
                      fontSize: '1.3rem',
                      fontWeight: 'bold',
                      marginBottom: '15px',
                      color: '#333',
                    }}
                  >
                    WizSense PTZ Camera
                  </h3>
                  <p
                    style={{
                      color: '#666',
                      marginBottom: '20px',
                      lineHeight: '1.6',
                      fontSize: '0.95rem',
                    }}
                  >
                    Professional PTZ camera with WizSense AI, 30x optical zoom, and auto-tracking
                    capabilities.
                  </p>
                  <div
                    style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                    }}
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        style={{
          background: 'linear-gradient(135deg, #185adb 0%, #39a2fd 100%)',
          padding: '64px 0',
          color: 'white',
          textAlign: 'center',
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
              Ready to upgrade your security with WizSense? Our experts will help you find the best
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
