import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { FaBars, FaTimes, FaPhone, FaMapMarkerAlt } from 'react-icons/fa'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setIsMenuOpen(false)
  }, [location])

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'Christmas Lights', path: '/christmas-lights' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' }
  ]

  return (
    <>
      {/* Top Bar */}
      <div className="bg-gradient-to-r from-primary-charcoal to-background-dark text-white py-2 border-b border-accent-gold/20">
        <div className="container flex-between text-sm">
          <div className="flex items-center gap-4">
            <a 
              href="tel:(225) 369-4434" 
              className="flex items-center gap-2 text-white hover:text-accent-gold transition-colors"
            >
              <FaPhone className="text-xs" />
              (225) 369-4434
            </a>
            <div className="flex items-center gap-2">
              <FaMapMarkerAlt className="text-xs" />
              Serving Walker, LA & Surrounding Areas
            </div>
          </div>
          <div className="hidden md:block">
            <span className="text-accent-gold">Licensed & Insured</span> • Free Estimates
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled 
            ? 'bg-background-card/95 backdrop-blur-lg shadow-2xl py-2 border-b border-accent-gold/20' 
            : 'bg-background-card/90 backdrop-blur-lg py-4 border-b border-accent-gold/10'
        }`}
        style={{ marginTop: isScrolled ? '0' : '40px' }}
      >
        <nav className="container flex-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3">
            <img 
              src="/assets/images/Southern_Buck_Logo.png" 
              alt="Southern Buck Lawn Care Logo" 
              className={`transition-all duration-300 ${
                isScrolled ? 'h-12' : 'h-16'
              }`}
            />
            <div className="flex flex-column">
              <h1 className="text-2xl font-bold text-white mb-0">
                Southern Buck Lawn
              </h1>
              <p className="text-sm text-accent-gold mb-0">
                Professional Lawn Care Services
              </p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`font-medium transition-colors relative ${
                  location.pathname === item.path
                    ? 'text-accent-gold'
                    : 'text-white hover:text-accent-gold'
                }`}
              >
                {item.name}
                {location.pathname === item.path && (
                  <motion.div
                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-accent-gold"
                    layoutId="activeTab"
                    initial={false}
                    transition={{ type: "spring", stiffness: 500, damping: 30 }}
                  />
                )}
              </Link>
            ))}
            
            <Link 
              to="/quote" 
              className="btn btn-primary btn-sm"
            >
              Get Free Quote
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </nav>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="lg:hidden bg-background-card border-t border-accent-gold/20"
            >
              <div className="container py-4">
                <div className="flex flex-column gap-4">
                  {navItems.map((item) => (
                    <Link
                      key={item.name}
                      to={item.path}
                      className={`font-medium py-2 transition-colors ${
                        location.pathname === item.path
                          ? 'text-accent-gold'
                          : 'text-white'
                      }`}
                    >
                      {item.name}
                    </Link>
                  ))}
                  
                  <Link 
                    to="/quote" 
                    className="btn btn-primary w-full mt-4"
                  >
                    Get Free Quote
                  </Link>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* Spacer to prevent content from going under fixed header */}
      <div className={`${isScrolled ? 'h-20' : 'h-32'} transition-all duration-300`} />
    </>
  )
}

export default Header