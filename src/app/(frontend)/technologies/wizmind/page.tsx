'use client'
import React from 'react'
import Image from 'next/image'

export default function WizMindPage() {
  return (
    <div style={{ paddingTop: '90px', backgroundColor: '#f8f9fa' }}>
      {/* Hero Section */}
      <div
        style={{
          backgroundImage: 'url("/images/wzmind.webp")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          position: 'relative',
          color: 'white',
          padding: '60px 20px',
          minHeight: '400px',
        }}
      >
        {/* Light overlay only on text area for better readability */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'linear-gradient(to bottom, rgba(0,0,0,0.2), rgba(0,0,0,0.3))',
            zIndex: 1,
          }}
        ></div>

        <div className="container mx-auto px-4" style={{ position: 'relative', zIndex: 2 }}>
          <div className="max-w-6xl mx-auto text-center">
            <h1
              style={{
                fontSize: 'clamp(2rem, 5vw, 3.5rem)',
                fontWeight: 'bold',
                marginBottom: '20px',
                background: 'linear-gradient(45deg, #ff4444, #ff6b6b)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                textShadow: '2px 2px 4px rgba(0,0,0,0.8)',
              }}
            >
              WizMind Technology
            </h1>
            <p
              style={{
                fontSize: 'clamp(1rem, 3vw, 1.4rem)',
                color: 'rgba(255,255,255,0.95)',
                maxWidth: '900px',
                margin: '0 auto',
                lineHeight: '1.7',
                fontWeight: '300',
                textShadow: '2px 2px 6px rgba(0,0,0,0.8)',
              }}
            >
              Next-generation AI surveillance technology powered by deep learning algorithms,
              delivering unprecedented intelligence and accuracy in video analytics and security
              monitoring.
            </p>
          </div>
        </div>
      </div>

      {/* Main Content with Responsive Layout */}
      <div className="responsive-container">
        {/* Main Content Area */}
        <div className="main-content">
          {/* What is WizMind Section */}
          <div className="content-card">
            <h2 className="section-title">What is WizMind?</h2>

            <div className="text-content">
              <p style={{ marginBottom: '20px' }}>
                <strong>WizMind</strong> represents Dahua most advanced AI technology platform,
                combining deep learning, neural networks, and machine learning to deliver
                intelligent video surveillance solutions that think, learn, and adapt.
              </p>

              <p style={{ marginBottom: '20px' }}>
                Built on years of AI research and development, WizMind technology transforms
                traditional security cameras into intelligent monitoring systems capable of
                understanding complex scenarios and making autonomous decisions.
              </p>

              <p>
                From facial recognition to behavioral analysis, WizMind provides comprehensive
                AI-powered security solutions for smart cities, retail, transportation, and
                enterprise applications.
              </p>
            </div>

            {/* Key Stats - Mobile Responsive Grid */}
            <div className="stats-grid">
              <div className="stat-card stat-purple">
                <h3>99.7%</h3>
                <p>Accuracy Rate</p>
              </div>
              <div className="stat-card stat-pink">
                <h3>50+</h3>
                <p>AI Algorithms</p>
              </div>
              <div className="stat-card stat-blue">
                <h3>24/7</h3>
                <p>Monitoring</p>
              </div>
            </div>
          </div>

          {/* Image Gallery Section */}
          <div className="content-card">
            <h3 className="sub-section-title">WizMind in Action</h3>

            {/* Image Grid - Mobile Responsive */}
            <div className="image-grid">
              {/* Image 1 */}
              <div className="image-card">
                <Image
                  src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=250&fit=crop"
                  alt="AI Facial Recognition"
                  className="image-responsive"
                />
                <div className="image-overlay">
                  <h4>Facial Recognition</h4>
                </div>
              </div>

              {/* Image 2 */}
              <div className="image-card">
                <Image
                  src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=250&fit=crop"
                  alt="Behavior Analysis"
                  className="image-responsive"
                />
                <div className="image-overlay">
                  <h4>Behavior Analysis</h4>
                </div>
              </div>

              {/* Image 3 */}
              <div className="image-card">
                <Image
                  src="https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?w=400&h=250&fit=crop"
                  alt="Smart City Monitoring"
                  className="image-responsive"
                />
                <div className="image-overlay">
                  <h4>Smart City Solutions</h4>
                </div>
              </div>

              {/* Image 4 */}
              <div className="image-card">
                <Image
                  src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=400&h=250&fit=crop"
                  alt="Vehicle Detection"
                  className="image-responsive"
                />
                <div className="image-overlay">
                  <h4>Vehicle Recognition</h4>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Sidebar - Mobile Responsive */}
        <div className="sidebar">
          {/* Video Section */}
          <div className="sidebar-card">
            <h3 className="sidebar-title">WizMind Demo</h3>

            <div className="video-container">
              <iframe
                className="video-iframe"
                src="https://www.youtube.com/embed/moTVRuAF0uI?si=oBPJEAC9z2efdWfx"
                title="WizMind Technology Demo"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>

            <p className="video-description">
              Watch how WizMind AI technology revolutionizes intelligent video surveillance
            </p>
          </div>

          {/* Quick Facts */}
          <div className="sidebar-card">
            <h3 className="sidebar-title">Quick Facts</h3>

            <div className="facts-container">
              <div className="fact-item fact-purple">
                <h4>Launch Year</h4>
                <p>2019</p>
              </div>

              <div className="fact-item fact-pink">
                <h4>Supported Models</h4>
                <p>200+ Camera Models</p>
              </div>

              <div className="fact-item fact-blue">
                <h4>Global Deployments</h4>
                <p>100+ Countries</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Thermal Imaging Section */}
      <div className="thermal-section">
        <div className="thermal-content">
          <h3 className="thermal-title">Thermal Imaging Technology</h3>

          <div className="thermal-grid">
            <div>
              <h4 className="thermal-subtitle">Advanced Heat Detection</h4>
              <p className="thermal-text">
                See beyond visible light with thermal imaging that detects heat signatures and
                temperature variations for 24/7 surveillance in any weather condition.
              </p>
            </div>

            <div>
              <h4 className="thermal-subtitle">Fire Prevention & Safety</h4>
              <p className="thermal-text">
                Early fire detection and industrial equipment monitoring with precise temperature
                measurement capabilities up to ±2°C accuracy.
              </p>
            </div>
          </div>

          <div className="thermal-stats">
            <div className="thermal-stat">
              <h5>±2°C</h5>
              <p>Accuracy</p>
            </div>
            <div className="thermal-stat">
              <h5>5km</h5>
              <p>Range</p>
            </div>
            <div className="thermal-stat">
              <h5>24/7</h5>
              <p>Operation</p>
            </div>
          </div>
        </div>
      </div>

      {/* Ecosystem Section */}
      <div className="ecosystem-section">
        <h3 className="ecosystem-title">Complete Security Ecosystem</h3>

        <div className="ecosystem-grid">
          <div className="ecosystem-card">
            <div className="ecosystem-icon">📹</div>
            <h4>Smart Cameras</h4>
            <p>AI-powered cameras with advanced analytics and multi-sensor capabilities.</p>
          </div>

          <div className="ecosystem-card">
            <div className="ecosystem-icon">💻</div>
            <h4>Management Platform</h4>
            <p>Centralized software for device management and video analytics.</p>
          </div>

          <div className="ecosystem-card">
            <div className="ecosystem-icon">🗄️</div>
            <h4>Storage Systems</h4>
            <p>Scalable NVRs with redundancy and high-capacity options.</p>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="features-section">
        <h3 className="features-title">Advanced Capabilities</h3>

        <div className="features-grid">
          <div className="feature-card feature-purple">
            <h4>Deep Learning</h4>
            <p>Advanced neural networks that continuously learn and improve detection accuracy.</p>
          </div>

          <div className="feature-card feature-pink">
            <h4>Real-time Processing</h4>
            <p>Instant analysis and response with minimal latency for critical security events.</p>
          </div>

          <div className="feature-card feature-blue">
            <h4>Scalable Architecture</h4>
            <p>Flexible deployment from single cameras to large-scale enterprise solutions.</p>
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
              Ready to experience the power of WizMind? Our experts will help you choose the best AI
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

      {/* CSS Styles */}
      <style jsx>{`
        .responsive-container {
          display: flex;
          flex-direction: row;
          gap: 40px;
          padding: 60px 20px;
          max-width: 1400px;
          margin: 0 auto;
          background-color: #f5f7fa;
        }

        .main-content {
          flex: 2;
          width: 100%;
        }

        .sidebar {
          flex: 1;
          min-width: 280px;
          width: 100%;
        }

        .content-card {
          background-color: white;
          border-radius: 20px;
          padding: clamp(20px, 5vw, 50px);
          margin-bottom: 40px;
          box-shadow: 0 15px 35px rgba(0, 0, 0, 0.08);
        }

        .sidebar-card {
          background-color: white;
          border-radius: 20px;
          padding: clamp(20px, 4vw, 30px);
          margin-bottom: 30px;
          box-shadow: 0 15px 35px rgba(0, 0, 0, 0.08);
        }

        .section-title {
          font-size: clamp(1.8rem, 4vw, 2.8rem);
          font-weight: bold;
          margin-bottom: 30px;
          color: #2d3748;
          text-align: center;
        }

        .sub-section-title {
          font-size: clamp(1.5rem, 3.5vw, 2.2rem);
          font-weight: bold;
          margin-bottom: 40px;
          color: #2d3748;
          text-align: center;
        }

        .sidebar-title {
          font-size: clamp(1.2rem, 3vw, 1.5rem);
          font-weight: bold;
          margin-bottom: 20px;
          color: #2d3748;
          text-align: center;
        }

        .text-content {
          font-size: clamp(0.9rem, 2.5vw, 1.1rem);
          line-height: 1.8;
          color: #4a5568;
          margin-bottom: 40px;
        }

        .stats-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
          gap: clamp(15px, 3vw, 30px);
          margin-top: 40px;
        }

        .stat-card {
          text-align: center;
          padding: clamp(15px, 3vw, 20px);
          border-radius: 15px;
          color: white;
        }

        .stat-card h3 {
          font-size: clamp(1.5rem, 4vw, 2.5rem);
          font-weight: bold;
          margin-bottom: 5px;
        }

        .stat-card p {
          opacity: 0.9;
          font-size: clamp(0.8rem, 2vw, 1rem);
        }

        .stat-purple {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
        }

        .stat-pink {
          background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
        }

        .stat-blue {
          background: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%);
        }

        .image-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: clamp(15px, 3vw, 25px);
        }

        .image-card {
          position: relative;
          border-radius: 15px;
          overflow: hidden;
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
          transition: transform 0.3s ease;
        }

        .image-card:hover {
          transform: translateY(-5px);
        }

        .image-responsive {
          width: 100%;
          height: clamp(150px, 20vw, 200px);
          object-fit: cover;
        }

        .image-overlay {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          background: linear-gradient(transparent, rgba(0, 0, 0, 0.8));
          color: white;
          padding: clamp(10px, 3vw, 20px);
        }

        .image-overlay h4 {
          font-size: clamp(0.9rem, 2.5vw, 1.1rem);
          font-weight: bold;
        }

        .video-container {
          position: relative;
          padding-bottom: 56.25%;
          height: 0;
          overflow: hidden;
          border-radius: 12px;
          box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);
        }

        .video-iframe {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          border-radius: 12px;
        }

        .video-description {
          font-size: clamp(0.8rem, 2vw, 0.9rem);
          color: #6b7280;
          text-align: center;
          margin-top: 15px;
          line-height: 1.5;
        }

        .facts-container {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }

        .fact-item {
          padding: 15px;
          background-color: #f1f5f9;
          border-radius: 10px;
          border-left: 4px solid;
        }

        .fact-purple {
          border-left-color: #667eea;
        }

        .fact-pink {
          border-left-color: #f093fb;
        }

        .fact-blue {
          border-left-color: #4facfe;
        }

        .fact-item h4 {
          font-size: clamp(0.9rem, 2.5vw, 1rem);
          font-weight: bold;
          color: #2d3748;
          margin-bottom: 5px;
        }

        .fact-item p {
          color: #4a5568;
          font-size: clamp(0.8rem, 2vw, 0.9rem);
        }

        .thermal-section {
          background-image:
            linear-gradient(rgba(255, 107, 107, 0.9), rgba(238, 90, 36, 0.9)),
            url('https://images.unsplash.com/photo-1574263867128-c2d1b4d1a18e?w=1200&h=800&fit=crop');
          background-size: cover;
          background-position: center;
          padding: clamp(40px, 8vw, 80px) 20px;
          margin-bottom: 40px;
          color: white;
          width: 100vw;
          margin-left: calc(-50vw + 50%);
          position: relative;
        }

        .thermal-content {
          max-width: 1400px;
          margin: 0 auto;
        }

        .thermal-title {
          font-size: clamp(1.8rem, 4vw, 2.5rem);
          font-weight: bold;
          margin-bottom: 30px;
          text-align: center;
          text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
        }

        .thermal-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: clamp(20px, 4vw, 30px);
          margin-bottom: 40px;
        }

        .thermal-subtitle {
          font-size: clamp(1.2rem, 3vw, 1.5rem);
          font-weight: bold;
          margin-bottom: 15px;
        }

        .thermal-text {
          font-size: clamp(0.9rem, 2.5vw, 1.1rem);
          line-height: 1.6;
          opacity: 0.95;
        }

        .thermal-stats {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
          gap: 20px;
          text-align: center;
        }

        .thermal-stat {
          background-color: rgba(255, 255, 255, 0.2);
          padding: clamp(15px, 3vw, 20px);
          border-radius: 15px;
        }

        .thermal-stat h5 {
          font-size: clamp(1.2rem, 3vw, 1.8rem);
          font-weight: bold;
          margin-bottom: 5px;
        }

        .thermal-stat p {
          opacity: 0.9;
          font-size: clamp(0.8rem, 2vw, 1rem);
        }

        .ecosystem-section {
          background-image:
            linear-gradient(rgba(17, 153, 142, 0.9), rgba(56, 239, 125, 0.9)),
            url('https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1200&h=800&fit=crop');
          background-size: cover;
          background-position: center;
          border-radius: 20px;
          padding: clamp(30px, 6vw, 60px);
          margin: 0 20px 40px 20px;
          color: white;
          box-shadow: 0 15px 35px rgba(0, 0, 0, 0.15);
        }

        .ecosystem-title {
          font-size: clamp(1.8rem, 4vw, 2.5rem);
          font-weight: bold;
          margin-bottom: 30px;
          text-align: center;
          text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
        }

        .ecosystem-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: clamp(20px, 4vw, 30px);
        }

        .ecosystem-card {
          background-color: rgba(255, 255, 255, 0.15);
          padding: clamp(20px, 4vw, 30px);
          border-radius: 15px;
          text-align: center;
        }

        .ecosystem-icon {
          font-size: clamp(2rem, 5vw, 3rem);
          margin-bottom: 15px;
        }

        .ecosystem-card h4 {
          font-size: clamp(1rem, 2.5vw, 1.3rem);
          font-weight: bold;
          margin-bottom: 10px;
        }

        .ecosystem-card p {
          opacity: 0.9;
          line-height: 1.5;
          font-size: clamp(0.8rem, 2vw, 1rem);
        }

        .features-section {
          background-color: white;
          border-radius: 20px;
          padding: clamp(30px, 6vw, 50px);
          box-shadow: 0 15px 35px rgba(0, 0, 0, 0.08);
          margin: 0 20px;
        }

        .features-title {
          font-size: clamp(1.5rem, 3.5vw, 2.2rem);
          font-weight: bold;
          margin-bottom: 40px;
          color: #2d3748;
          text-align: center;
        }

        .features-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: clamp(20px, 4vw, 30px);
        }

        .feature-card {
          padding: clamp(20px, 4vw, 30px);
          background-color: #f8fafc;
          border-left: 4px solid;
        }

        .feature-purple {
          border-left-color: #667eea;
        }

        .feature-pink {
          border-left-color: #f093fb;
        }

        .feature-blue {
          border-left-color: #4facfe;
        }

        .feature-card h4 {
          font-size: clamp(1.1rem, 2.5vw, 1.3rem);
          font-weight: bold;
          margin-bottom: 15px;
          color: #2d3748;
        }

        .feature-card p {
          color: #4a5568;
          line-height: 1.6;
          font-size: clamp(0.9rem, 2vw, 1rem);
        }

        /* Mobile Responsive */
        @media (max-width: 768px) {
          .responsive-container {
            flex-direction: column !important;
            gap: 30px !important;
            padding: 40px 20px !important;
          }
        }

        @media (max-width: 480px) {
          .responsive-container {
            padding: 30px 15px !important;
          }

          .thermal-section {
            margin-left: calc(-50vw + 50%) !important;
          }
        }
      `}</style>
    </div>
  )
}
