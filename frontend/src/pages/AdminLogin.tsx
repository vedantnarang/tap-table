import { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { useAuth } from '../contexts/AuthContext'
import { Lock, Mail, User, Eye, EyeOff, ArrowRight, Sparkles, Phone, Store } from 'lucide-react'
import './CSS/AdminLogin.css'

export default function AdminLogin() {
    const [isLogin, setIsLogin] = useState(true)
    const [showPassword, setShowPassword] = useState(false)

    // Login state
    const [emailOrPhone, setEmailOrPhone] = useState('')
    const [password, setPassword] = useState('')
    const [loginError, setLoginError] = useState('')

    // Register state
    const [ownerName, setOwnerName] = useState('')
    const [restaurantName, setRestaurantName] = useState('')
    const [registerEmail, setRegisterEmail] = useState('')
    const [registerPhone, setRegisterPhone] = useState('')
    const [registerPassword, setRegisterPassword] = useState('')
    const [registerError, setRegisterError] = useState('')

    const [loading, setLoading] = useState(false)
    const { login, register } = useAuth()
    const navigate = useNavigate()

    const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        setLoginError('')
        setLoading(true)

        // Basic validation for email or phone
        if (!emailOrPhone.trim()) {
            setLoginError('Email or phone number is required.')
            setLoading(false)
            return
        }
        if (!password) {
            setLoginError('Password is required.')
            setLoading(false)
            return
        }

        // For now, just log the values (not connecting to database yet)
        console.log('Login attempt:', { emailOrPhone, password })
        setLoginError('Login functionality will be connected to database later.')
        setLoading(false)
        // TODO: Connect to backend API
        // try {
        //   await login(emailOrPhone, password)
        //   navigate('/admin/dashboard')
        // } catch {
        //   setLoginError('Invalid credentials.')
        // } finally {
        //   setLoading(false)
        // }
    }

    const handleRegister = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        setRegisterError('')
        setLoading(true)
        // 1. Validation (Keep your existing validation!)
        if (!ownerName.trim()) {
            setRegisterError('Owner name is required.')
            setLoading(false)
            return
        }
        if (!restaurantName.trim()) {
            setRegisterError('Restaurant/Cafe name is required.')
            setLoading(false)
            return
        }
        if (!/\S+@\S+\.\S+/.test(registerEmail)) {
            setRegisterError('Please enter a valid email.')
            setLoading(false)
            return
        }
        if (!registerPhone.trim() || !/^[0-9]{10}$/.test(registerPhone)) {
            setRegisterError('Please enter a valid 10-digit phone number.')
            setLoading(false)
            return
        }
        if (!registerPassword || registerPassword.length < 6) {
            setRegisterError('Password must be at least 6 characters.')
            setLoading(false)
            return
        }
        // 2. Prepare Data for Backend
        // Note: We map 'restaurantName' to 'restrauntName' because that's what your backend auth.js expects in req.body destructuring!
        const restaurantData = {
            restrauntName: restaurantName, 
            ownerName: ownerName,
            phoneNumber: registerPhone,
            email: registerEmail,
            password: registerPassword
        }
        try {
            const response = await fetch('http://localhost:5000/auth/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(restaurantData),
            })
            const data = await response.json()
            if (!response.ok) {
                throw new Error(data.message || 'Registration failed')
            }
            console.log('Registration success:', data)
            alert('Registration Successful! Please Login.')
            switchToLogin() 
        } catch (error: any) {
            console.error('Registration Error:', error)
            setRegisterError(error.message || 'Failed to connect to server.')
        } finally {
            setLoading(false)
        }
    }

    const switchToRegister = () => {
        setIsLogin(false)
        setLoginError('')
        setEmailOrPhone('')
        setPassword('')
    }

    const switchToLogin = () => {
        setIsLogin(true)
        setRegisterError('')
        setOwnerName('')
        setRestaurantName('')
        setRegisterEmail('')
        setRegisterPhone('')
        setRegisterPassword('')
    }

    return (
        <div className="login-container">
            {/* Animated Background */}
            <div className="login-bg-animation">
                <div className="floating-orbs">
                    <div className="orb orb-1"></div>
                    <div className="orb orb-2"></div>
                    <div className="orb orb-3"></div>
                    <div className="orb orb-4"></div>
                    <div className="orb orb-5"></div>
                </div>
                <div className="gradient-mesh"></div>
            </div>

            {/* Main Content */}
            <div className="login-content">
                {/* Back to Home Link */}
                <Link to="/" className="back-home-link">
                    <ArrowRight className="w-4 h-4 rotate-180" />
                    <span>Back to Home</span>
                </Link>

                <div className="login-card">
                    {/* Logo Section */}
                    <div className="login-header">
                        <Link to="/" className="logo-link">
                            <div className="logo-container">
                                <div className="logo-icon">
                                    <span className="logo-text">T</span>
                                    <div className="logo-glow"></div>
                                </div>
                                <span className="brand-name">TapTable</span>
                            </div>
                        </Link>

                        <div className="header-content">
                            <h1 className="login-title">
                                {isLogin ? (
                                    <>
                                        Welcome Back
                                        <Sparkles className="title-sparkle" />
                                    </>
                                ) : (
                                    <>
                                        Join TapTable
                                        <Sparkles className="title-sparkle" />
                                    </>
                                )}
                            </h1>
                            <p className="login-subtitle">
                                {isLogin
                                    ? 'Access your restaurant dashboard'
                                    : 'Transform your restaurant experience'
                                }
                            </p>
                        </div>
                    </div>

                    {/* Form Toggle */}
                    <div className="form-toggle">
                        <button
                            type="button"
                            onClick={switchToLogin}
                            className={`toggle-btn ${isLogin ? 'active' : ''}`}
                        >
                            Login
                        </button>
                        <button
                            type="button"
                            onClick={switchToRegister}
                            className={`toggle-btn ${!isLogin ? 'active' : ''}`}
                        >
                            Register
                        </button>
                        <div className={`toggle-indicator ${isLogin ? 'left' : 'right'}`}></div>
                    </div>

                    {/* Forms Container */}
                    <div className="forms-container">
                        <div className={`form-wrapper ${isLogin ? 'active' : ''}`}>
                            <form onSubmit={handleLogin} className="auth-form">
                                <div className="input-group">
                                    <label className="input-label">Email or Mobile Phone</label>
                                    <div className="input-wrapper">
                                        <Mail className="input-icon" />
                                        <input
                                            type="text"
                                            value={emailOrPhone}
                                            onChange={e => setEmailOrPhone(e.target.value)}
                                            className="form-input text-black"
                                            placeholder="email@example.com or 9876543210"
                                            required
                                        />
                                        <div className="input-border"></div>
                                    </div>
                                </div>

                                <div className="input-group">
                                    <label className="input-label">Password</label>
                                    <div className="input-wrapper">
                                        <Lock className="input-icon" />
                                        <input
                                            type={showPassword ? 'text' : 'password'}
                                            value={password}
                                            onChange={e => setPassword(e.target.value)}
                                            className="form-input text-black"
                                            placeholder="Enter your password"
                                            required
                                        />
                                        <button
                                            type="button"
                                            onClick={() => setShowPassword(!showPassword)}
                                            className="password-toggle"
                                        >
                                            {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                                        </button>
                                        <div className="input-border"></div>
                                    </div>
                                </div>

                                {loginError && (
                                    <div className="error-message">
                                        <div className="error-icon">⚠️</div>
                                        <span>{loginError}</span>
                                    </div>
                                )}

                                <button
                                    type="submit"
                                    disabled={loading}
                                    className="submit-btn"
                                >
                                    <span className="btn-text">
                                        {loading ? 'Signing In...' : 'Sign In'}
                                    </span>
                                    <ArrowRight className="btn-icon" />
                                    <div className="btn-glow"></div>
                                </button>
                            </form>
                        </div>

                        <div className={`form-wrapper ${!isLogin ? 'active' : ''}`}>
                            <form onSubmit={handleRegister} className="auth-form">
                                <div className="input-group">
                                    <label className="input-label">Owner Name</label>
                                    <div className="input-wrapper">
                                        <User className="input-icon" />
                                        <input
                                            type="text"
                                            value={ownerName}
                                            onChange={e => setOwnerName(e.target.value)}
                                            className="form-input text-black"
                                            placeholder="John Doe"
                                            required
                                        />
                                        <div className="input-border"></div>
                                    </div>
                                </div>

                                <div className="input-group">
                                    <label className="input-label">Restaurant/Cafe Name</label>
                                    <div className="input-wrapper">
                                        <Store className="input-icon" />
                                        <input
                                            type="text"
                                            value={restaurantName}
                                            onChange={e => setRestaurantName(e.target.value)}
                                            className="form-input text-black"
                                            placeholder="Amazing Bistro"
                                            required
                                        />
                                        <div className="input-border"></div>
                                    </div>
                                </div>

                                <div className="input-group">
                                    <label className="input-label">Email Address</label>
                                    <div className="input-wrapper">
                                        <Mail className="input-icon" />
                                        <input
                                            type="email"
                                            value={registerEmail}
                                            onChange={e => setRegisterEmail(e.target.value)}
                                            className="form-input text-black"
                                            placeholder="owner@restaurant.com"
                                            required
                                        />
                                        <div className="input-border"></div>
                                    </div>
                                </div>

                                <div className="input-group">
                                    <label className="input-label">Phone Number</label>
                                    <div className="input-wrapper">
                                        <Phone className="input-icon" />
                                        <input
                                            type="tel"
                                            value={registerPhone}
                                            onChange={e => setRegisterPhone(e.target.value)}
                                            className="form-input text-black"
                                            placeholder="9876543210"
                                            pattern="[0-9]{10}"
                                            required
                                        />
                                        <div className="input-border"></div>
                                    </div>
                                </div>

                                <div className="input-group">
                                    <label className="input-label">Password</label>
                                    <div className="input-wrapper">
                                        <Lock className="input-icon" />
                                        <input
                                            type={showPassword ? 'text' : 'password'}
                                            value={registerPassword}
                                            onChange={e => setRegisterPassword(e.target.value)}
                                            className="form-input text-black"
                                            placeholder="Create secure password"
                                            minLength={6}
                                            required
                                        />
                                        <button
                                            type="button"
                                            onClick={() => setShowPassword(!showPassword)}
                                            className="password-toggle"
                                        >
                                            {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                                        </button>
                                        <div className="input-border"></div>
                                    </div>
                                </div>

                                {registerError && (
                                    <div className="error-message">
                                        <div className="error-icon">⚠️</div>
                                        <span>{registerError}</span>
                                    </div>
                                )}

                                <button
                                    type="submit"
                                    disabled={loading}
                                    className="submit-btn"
                                >
                                    <span className="btn-text">
                                        {loading ? 'Creating Account...' : 'Create Account'}
                                    </span>
                                    <ArrowRight className="btn-icon" />
                                    <div className="btn-glow"></div>
                                </button>
                            </form>
                        </div>
                    </div>

                    {/* Demo Credentials */}
                    {isLogin && (
                        <div className="demo-section">
                            <div className="demo-header">
                                <Sparkles className="w-4 h-4" />
                                <span>Demo Access</span>
                            </div>
                            <div className="demo-content">
                                <div className="demo-credential">
                                    <span className="demo-label">Email:</span>
                                    <code className="demo-value">demo@taptable.com</code>
                                </div>
                                <div className="demo-credential">
                                    <span className="demo-label">Password:</span>
                                    <code className="demo-value">demo123</code>
                                </div>
                            </div>
                        </div>
                    )}
                </div>

                {/* Features Preview */}
                <div className="features-preview">
                    <div className="feature-item">
                        <div className="feature-icon">📱</div>
                        <span>QR Menu System</span>
                    </div>
                    <div className="feature-item">
                        <div className="feature-icon">⚡</div>
                        <span>Real-time Orders</span>
                    </div>
                    <div className="feature-item">
                        <div className="feature-icon">📊</div>
                        <span>Analytics Dashboard</span>
                    </div>
                </div>
            </div>
        </div>
    )
}
