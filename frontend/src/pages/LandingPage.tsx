import { Link } from 'react-router-dom'
import { Smartphone, Zap, Users, CheckCircle, ArrowRight, Star, Play, ChevronDown } from 'lucide-react'
import { useState, useEffect } from 'react'
import './CSS/LandingPage.css'

export default function LandingPage() {
  const [isVisible, setIsVisible] = useState(false)
  const [activeFeature, setActiveFeature] = useState(0)

  useEffect(() => {
    setIsVisible(true)
    
    // Auto-rotate features
    const interval = setInterval(() => {
      setActiveFeature((prev) => (prev + 1) % 3)
    }, 3000)

    return () => clearInterval(interval)
  }, [])

  const features = [
    {
      icon: <Smartphone className="w-12 h-12" />,
      title: "QR Code Ordering",
      description: "Instant menu access with QR scanning",
      color: "from-blue-500 to-purple-600",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=300&h=200&fit=crop"
    },
    {
      icon: <Zap className="w-12 h-12" />,
      title: "Lightning Fast",
      description: "Orders processed in real-time",
      color: "from-purple-500 to-pink-600",
      image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=300&h=200&fit=crop"
    },
    {
      icon: <Users className="w-12 h-12" />,
      title: "Boost Efficiency",
      description: "Reduce staff workload by 60%",
      color: "from-pink-500 to-orange-600",
      image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=300&h=200&fit=crop"
    }
  ]

  const stats = [
    { number: "500+", label: "Happy Restaurants" },
    { number: "1000+", label: "Orders Processed" },
    { number: "4.8", label: "Customer Rating" },
    { number: "30%", label: "Cost Reduction" }
  ]

  return (
    <div className="landing-container">
      {/* Animated Background */}
      <div className="bg-animation">
        <div className="floating-shapes">
          <div className="shape shape-1"></div>
          <div className="shape shape-2"></div>
          <div className="shape shape-3"></div>
          <div className="shape shape-4"></div>
          <div className="shape shape-5"></div>
        </div>
      </div>

      {/* Navigation */}
      <nav className={`navbar ${isVisible ? 'nav-visible' : ''}`}>
        <div className="nav-container">
          <div className="nav-logo">
            <span className="brand-name">TapTable</span>
          </div>
          
          <div className="nav-links">
            <a href="#features" className="nav-link">Features</a>
            <a href="#how-it-works" className="nav-link">How It Works</a>
            <a href="#pricing" className="nav-link">Pricing</a>
            <Link to="/admin/login" className="login-btn">
              Restaurant Login
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-container">
          <div className={`hero-content ${isVisible ? 'hero-visible' : ''}`}>
            <div className="hero-badge">
              <Star className="w-4 h-4 text-yellow-400" />
              <span>Trusted by 10,000+ Restaurants</span>
            </div>
            
           -<p className="hero-title1">
              THE FUTURE OF DINING
            </p>
            <h1 className="hero-title">
              Digitize your dining<br />
              experience with<br />
              <span className="gradient-text">Smart QR Ordering</span>
            </h1>
            
            <p className="hero-description">
              Eliminate wait times, reduce operational costs, and create seamless dining experiences 
              that your customers will love. Join the digital revolution today.
            </p>
            
            <div className="hero-actions">
              <Link to="/admin/login" className="cta-primary">
                <span>Start Free Trial</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
              
              <button className="cta-secondary">
                <Play className="w-5 h-5" />
                <span>Watch Demo</span>
              </button>
            </div>
            
            {/* Stats */}
            <div className="hero-stats">
              {stats.map((stat, index) => (
                <div key={index} className="stat-item">
                  <div className="stat-number">{stat.number}</div>
                  <div className="stat-label">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
          
          <div className={`hero-visual ${isVisible ? 'visual-visible' : ''}`}>
            <div className="phones-container">
              {/* Single Phone */}
              <div className="phone-mockup">
                <div className="phone-frame">
                  <div className="phone-notch"></div>
                  <div className="phone-screen">
                    <div className="menu-header">
                      <div className="menu-title">TapTable Menu</div>
                      <div className="table-badge-phone">Table 7</div>
                    </div>
                    <div className="menu-grid">
                      <div className="menu-item-image" style={{backgroundImage: 'url(https://images.unsplash.com/photo-1608039755401-742074f0548d?w=400&h=300&fit=crop)', backgroundSize: '130%', backgroundPosition: 'center'}}></div>
                      <div className="menu-item-image" style={{backgroundImage: 'url(https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=400&h=300&fit=crop)', backgroundSize: '130%', backgroundPosition: 'center'}}></div>
                      <div className="menu-item-image" style={{backgroundImage: 'url(https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=400&h=300&fit=crop)', backgroundSize: '130%', backgroundPosition: 'center'}}></div>
                      <div className="menu-item-image" style={{backgroundImage: 'url(https://images.unsplash.com/photo-1603133872878-684f208fb84b?w=400&h=300&fit=crop)', backgroundSize: '130%', backgroundPosition: 'center'}}></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Scroll Indicator */}
        <div className="scroll-indicator">
          <ChevronDown className="w-6 h-6 animate-bounce" />
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="features-section">
        <div className="section-container">
          <div className="section-header">
            <h2 className="section-title">Our Features</h2>
            <p className="section-description">
              Everything you need to revolutionize your restaurant operations
            </p>
          </div>
          
          <div className="features-grid">
            {features.map((feature, index) => (
              <div 
                key={index}
                className={`feature-card ${activeFeature === index ? 'active' : ''}`}
                onMouseEnter={() => setActiveFeature(index)}
              >
                <div className="feature-image" style={{backgroundImage: `url(${feature.image})`, backgroundSize: 'cover', backgroundPosition: 'center'}}></div>
                <h3 className="feature-title">{feature.title}</h3>
                <p className="feature-description">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="how-it-works-section">
        <div className="section-container">
          <div className="section-header">
            <h2 className="section-title">How it works</h2>
            <p className="section-description">
              Get started in a couple steps
            </p>
          </div>
          
          <div className="steps-wrapper">
            <div className="step-card">
              <div className="step-number-badge">1</div>
              <h4 className="step-title">Create your account</h4>
              <p className="step-description">Get started in seconds and access your restaurant dashboard</p>
            </div>
            
            <div className="step-card">
              <div className="step-number-badge">2</div>
              <h4 className="step-title">Set up your menu</h4>
              <p className="step-description">Add items, prices, and photos in a few clicks</p>
            </div>
            
            <div className="step-card">
              <div className="step-number-badge">3</div>
              <h4 className="step-title">Generate QR codes</h4>
              <p className="step-description">Create unique QR codes for each table instantly</p>
            </div>
            
            <div className="step-card">
              <div className="step-number-badge">4</div>
              <h4 className="step-title">Start serving</h4>
              <p className="step-description">Customers scan, order, and pay seamlessly</p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="pricing-section">
        <div className="pricing-container">
          <div className="section-header">
            <h2 className="section-title">Pricing</h2>
            <p className="section-subtitle">No commission. No per-order fee. Flat pricing.</p>
          </div>

          {/* Character Illustration */}
          <div className="pricing-character">
            <img src="https://illustrations.popsy.co/amber/woman-holding-a-plant.svg" alt="Character with shopping bags" className="character-image" />
          </div>

          {/* Billing Period Toggle */}
          <div className="billing-toggle">
            <button className="billing-option active">Monthly</button>
            <button className="billing-option">Quarterly</button>
            <button className="billing-option">6 Months</button>
            <button className="billing-option">Yearly</button>
          </div>

          <div className="pricing-cards">
            {/* Starter Plan */}
            <div className="pricing-card">
              <div className="plan-header">
                <h3 className="plan-name">Starter</h3>
                <div className="plan-price">
                  <span className="price">₹499</span>
                  <span className="period">/month</span>
                </div>
              </div>
              <ul className="plan-features">
                <li><CheckCircle className="w-5 h-5" /> Up to 5 tables</li>
                <li><CheckCircle className="w-5 h-5" /> Basic menu management</li>
                <li><CheckCircle className="w-5 h-5" /> QR code ordering</li>
                <li><CheckCircle className="w-5 h-5" /> Email support</li>
                <li><CheckCircle className="w-5 h-5" /> Basic analytics</li>
              </ul>
              <button className="plan-button secondary">Get Started</button>
            </div>

            {/* Professional Plan */}
            <div className="pricing-card featured">
              <div className="popular-badge">Most Popular</div>
              <div className="plan-header">
                <h3 className="plan-name">Professional</h3>
                <div className="plan-price">
                  <span className="price">₹1499</span>
                  <span className="period">/month</span>
                </div>
              </div>
              <ul className="plan-features">
                <li><CheckCircle className="w-5 h-5" /> Up to 20 tables</li>
                <li><CheckCircle className="w-5 h-5" /> Advanced menu management</li>
                <li><CheckCircle className="w-5 h-5" /> QR code ordering</li>
                <li><CheckCircle className="w-5 h-5" /> Priority support</li>
                <li><CheckCircle className="w-5 h-5" /> Advanced analytics</li>
                <li><CheckCircle className="w-5 h-5" /> Custom branding</li>
                <li><CheckCircle className="w-5 h-5" /> Multiple locations</li>
              </ul>
              <button className="plan-button primary">Start Free Trial</button>
            </div>

            {/* Enterprise Plan */}
            <div className="pricing-card">
              <div className="plan-header">
                <h3 className="plan-name">Enterprise</h3>
                <div className="plan-price">
                  <span className="price">₹2499</span>
                  <span className="period">/month</span>
                </div>
              </div>
              <ul className="plan-features">
                <li><CheckCircle className="w-5 h-5" /> Unlimited tables</li>
                <li><CheckCircle className="w-5 h-5" /> Full menu customization</li>
                <li><CheckCircle className="w-5 h-5" /> White-label solution</li>
                <li><CheckCircle className="w-5 h-5" /> 24/7 dedicated support</li>
                <li><CheckCircle className="w-5 h-5" /> Custom integrations</li>
                <li><CheckCircle className="w-5 h-5" /> Advanced reporting</li>
                <li><CheckCircle className="w-5 h-5" /> On-premise option</li>
              </ul>
              <button className="plan-button secondary">Contact Sales</button>
            </div>
          </div>

          <div className="pricing-footer">
            <p>All plans include 14-day free trial. Cancel anytime.</p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="cta-container">
          <div className="cta-content">
            <h2 className="cta-title">Ready to transform your restaurant?</h2>
            <p className="cta-description">
              Join thousands of restaurants already using TapTable
            </p>
            <Link to="/admin/login" className="cta-button">
              <span>Start Free Trial</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-container">
          <div className="footer-brand">
            <div className="footer-logo">
              <span className="brand-name">TapTable</span>
            </div>
            <p className="footer-description">
              Revolutionizing restaurant experiences with smart QR ordering technology
            </p>
          </div>
          
          <div className="footer-links">
            <div className="link-group">
              <h5>Product</h5>
              <a href="#features">Features</a>
              <a href="#pricing">Pricing</a>
              <a href="#demo">Demo</a>
            </div>
            <div className="link-group">
              <h5>Company</h5>
              <a href="#about">About</a>
              <a href="#contact">Contact</a>
              <a href="#careers">Careers</a>
            </div>
            <div className="link-group">
              <h5>Support</h5>
              <a href="#help">Help Center</a>
              <a href="#docs">Documentation</a>
              <a href="#api">API</a>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; 2024 TapTable. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}