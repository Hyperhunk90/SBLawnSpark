import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { 
  FaPhone, 
  FaPlay, 
  FaPause, 
  FaCheckCircle, 
  FaStar,
  FaMapMarkerAlt,
  FaLeaf
} from 'react-icons/fa'
import DeerMascot from '../ui/DeerMascot'

const HeroSection = () => {
  const [isVideoPlaying, setIsVideoPlaying] = useState(true)
  const [videoRef, setVideoRef] = useState(null)

  useEffect(() => {
    if (videoRef && isVideoPlaying) {
      videoRef.play()
    } else if (videoRef && !isVideoPlaying) {
      videoRef.pause()
    }
  }, [isVideoPlaying, videoRef])

  const toggleVideo = () => {
    setIsVideoPlaying(!isVideoPlaying)
  }

  const features = [
    'Licensed & Insured Professionals',
    'Free Estimates & Competitive Pricing',
    '100% Satisfaction Guarantee',
    'Eco-Friendly Practices'
  ]

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <video
          ref={setVideoRef}
          className="w-full h-full object-cover"
          loop
          muted
          playsInline
          autoPlay
          poster="/assets/images/lawn_care_before_after_1.png"
        >
          <source src="/assets/videos/lawn-care-hero.mp4" type="video/mp4" />
        </video>
        
        {/* Video Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary-charcoal/80 via-primary-charcoal/70 to-black/60" />
        
        {/* Video Controls */}
        <button
          onClick={toggleVideo}
          className="absolute bottom-6 right-6 z-20 bg-white/20 backdrop-blur-sm text-white p-3 rounded-full hover:bg-white/30 transition-all duration-300"
          aria-label={isVideoPlaying ? 'Pause video' : 'Play video'}
        >
          {isVideoPlaying ? <FaPause size={20} /> : <FaPlay size={20} />}
        </button>
      </div>

      {/* Hero Content */}
      <div className="relative z-10 container">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Main Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-white"
          >
            {/* Location Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-flex items-center gap-2 bg-gradient-to-r from-primary-orange to-accent-gold text-primary-charcoal px-4 py-2 rounded-full text-sm font-bold mb-6 shadow-lg"
            >
              <FaMapMarkerAlt />
              Serving Walker, LA & Surrounding Areas
            </motion.div>

            {/* Main Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-5xl lg:text-6xl font-bold mb-6 leading-tight text-white"
            >
              Premier Lawn Care in{' '}
              <span className="text-accent-gold">Walker, Louisiana</span>
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl lg:text-2xl mb-8 text-gray-200 leading-relaxed"
            >
              Expert lawn care and landscaping services by{' '}
              <strong className="text-accent-gold">Shane Dantone</strong>. 
              From routine maintenance to Christmas light installation, 
              we make your outdoor spaces shine.
            </motion.p>

            {/* Features List */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8"
            >
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <FaCheckCircle className="text-accent-lime text-lg flex-shrink-0" />
                  <span className="text-gray-200">{feature}</span>
                </motion.div>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <a
                href="tel:(225) 369-4434"
                className="btn btn-primary btn-lg flex items-center justify-center gap-3 group"
              >
                <FaPhone className="group-hover:rotate-12 transition-transform" />
                Call (225) 369-4434
              </a>
              
              <Link
                to="/quote"
                className="btn btn-outline btn-lg text-white border-white hover:bg-white hover:text-primary-charcoal"
              >
                Get Free Quote
              </Link>
            </motion.div>
          </motion.div>

          {/* Right Column - Stats & Testimonial Card */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="hidden lg:block"
          >
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
              {/* Stats */}
              <div className="grid grid-cols-2 gap-6 mb-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-accent-yellow mb-2">
                    100%
                  </div>
                  <div className="text-sm text-gray-200">
                    Satisfaction Rate
                  </div>
                </div>
                
                <div className="text-center">
                  <div className="text-3xl font-bold text-accent-yellow mb-2">
                    2024
                  </div>
                  <div className="text-sm text-gray-200">
                    Established
                  </div>
                </div>
                
                <div className="text-center">
                  <div className="flex justify-center text-accent-yellow mb-2">
                    {[...Array(5)].map((_, i) => (
                      <FaStar key={i} className="text-lg" />
                    ))}
                  </div>
                  <div className="text-sm text-gray-200">
                    5-Star Reviews
                  </div>
                </div>
                
                <div className="text-center">
                  <div className="text-3xl font-bold text-accent-yellow mb-2">
                    7+
                  </div>
                  <div className="text-sm text-gray-200">
                    Service Areas
                  </div>
                </div>
              </div>

              {/* Featured Testimonial */}
              <div className="border-t border-white/20 pt-6">
                <div className="flex text-accent-yellow mb-3">
                  {[...Array(5)].map((_, i) => (
                    <FaStar key={i} />
                  ))}
                </div>
                <blockquote className="text-gray-200 mb-4 italic">
                  "Shane and his team transformed our yard completely. Professional, 
                  reliable, and the results speak for themselves!"
                </blockquote>
                <div className="text-sm text-gray-300">
                  — Local Walker Homeowner
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.2 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10"
      >
        <div className="animate-bounce">
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-pulse" />
          </div>
        </div>
      </motion.div>

      {/* Decorative Elements */}
      <div className="absolute top-20 right-10 z-10">
        <DeerMascot size={80} />
      </div>
      
      <div className="absolute bottom-20 left-10 z-10 opacity-20">
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        >
          <FaLeaf className="text-4xl text-accent-yellow" />
        </motion.div>
      </div>
    </section>
  )
}

export default HeroSection