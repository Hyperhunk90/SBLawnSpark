import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { 
  FaPhone, 
  FaCalendarAlt, 
  FaCheckCircle,
  FaLeaf,
  FaStar,
  FaMapMarkerAlt
} from 'react-icons/fa'

const CTASection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  const benefits = [
    'Free estimates & consultations',
    'Licensed & insured professionals',
    '100% satisfaction guarantee',
    'Eco-friendly practices',
    'Flexible scheduling',
    'Competitive pricing'
  ]

  return (
    <section className="section bg-gradient-to-br from-primary-charcoal via-primary-charcoal/95 to-primary-charcoal text-white relative overflow-hidden" ref={ref}>
      {/* Background Decorations */}
      <div className="absolute top-10 right-10 opacity-10">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        >
          <FaLeaf className="text-8xl" />
        </motion.div>
      </div>
      
      <div className="absolute bottom-10 left-10 opacity-10">
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        >
          <FaLeaf className="text-6xl" />
        </motion.div>
      </div>

      <div className="container relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-accent-gold/20 to-primary-orange/20 text-accent-gold px-4 py-2 rounded-full text-sm font-bold mb-6 border border-accent-gold/30">
              <FaMapMarkerAlt />
              Serving Walker, LA & Surrounding Areas
            </div>

            <h2 className="text-4xl lg:text-5xl font-bold mb-6 leading-tight">
              Ready to Transform Your{' '}
              <span className="text-accent-gold">Louisiana Lawn?</span>
            </h2>

            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Join hundreds of satisfied customers across Livingston Parish who trust 
              <strong className="text-white"> Shane Dantone</strong> and Southern Buck Lawn 
              for all their landscaping needs.
            </p>

            {/* Benefits Grid */}
            <div className="grid sm:grid-cols-2 gap-3 mb-8">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <FaCheckCircle className="text-accent-lime text-lg flex-shrink-0" />
                  <span className="text-gray-200">{benefit}</span>
                </motion.div>
              ))}
            </div>

            {/* Call to Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <a
                href="tel:(225) 369-4434"
                className="btn btn-primary btn-lg flex items-center justify-center gap-3 group"
              >
                <FaPhone className="group-hover:rotate-12 transition-transform" />
                Call Now: (225) 369-4434
              </a>
              
              <Link
                to="/quote"
                className="btn btn-outline btn-lg text-white border-white hover:bg-white hover:text-primary-charcoal flex items-center justify-center gap-3"
              >
                <FaCalendarAlt />
                Schedule Free Estimate
              </Link>
            </motion.div>

            {/* Trust Indicators */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="flex flex-wrap items-center gap-6 mt-8 pt-6 border-t border-white/20"
            >
              <div className="flex items-center gap-2">
                <div className="flex text-accent-yellow">
                  {[...Array(5)].map((_, i) => (
                    <FaStar key={i} className="text-lg" />
                  ))}
                </div>
                <span className="text-gray-300 text-sm">5-Star Reviews</span>
              </div>
              
              <div className="text-gray-300 text-sm">
                📍 Local Walker, LA Business
              </div>
              
              <div className="text-gray-300 text-sm">
                🛡️ Licensed & Insured
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column - Contact Card */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative"
          >
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 relative">
              {/* Decorative Elements */}
              <div className="absolute -top-4 -right-4 bg-accent-yellow text-primary-charcoal rounded-full w-12 h-12 flex items-center justify-center font-bold text-lg">
                FREE
              </div>

              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-white mb-2">
                  Get Your Free Quote Today
                </h3>
                <p className="text-gray-300">
                  No obligation consultation with Shane Dantone
                </p>
              </div>

              {/* Contact Methods */}
              <div className="space-y-4 mb-6">
                <a
                  href="tel:(225) 369-4434"
                  className="flex items-center gap-4 bg-white/5 rounded-lg p-4 hover:bg-white/10 transition-colors group"
                >
                  <div className="bg-primary-orange rounded-full p-3 group-hover:scale-110 transition-transform">
                    <FaPhone className="text-white" />
                  </div>
                  <div>
                    <div className="text-white font-semibold">Call Directly</div>
                    <div className="text-accent-yellow text-lg font-bold">
                      (225) 369-4434
                    </div>
                  </div>
                </a>

                <Link
                  to="/quote"
                  className="flex items-center gap-4 bg-white/5 rounded-lg p-4 hover:bg-white/10 transition-colors group"
                >
                  <div className="bg-accent-yellow rounded-full p-3 group-hover:scale-110 transition-transform">
                    <FaCalendarAlt className="text-primary-charcoal" />
                  </div>
                  <div>
                    <div className="text-white font-semibold">Online Quote</div>
                    <div className="text-gray-300">Fast & Easy Form</div>
                  </div>
                </Link>
              </div>

              {/* Service Areas */}
              <div className="border-t border-white/20 pt-4">
                <div className="text-center text-sm text-gray-300">
                  <div className="font-medium text-white mb-2">Serving:</div>
                  <div className="flex flex-wrap justify-center gap-2">
                    {['Walker', 'Denham Springs', 'Watson', 'Baton Rouge', 'Gonzales', 'Prairieville'].map((area) => (
                      <span key={area} className="bg-white/10 px-2 py-1 rounded text-xs">
                        {area}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Section - Emergency Contact */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center mt-16 pt-8 border-t border-white/20"
        >
          <h4 className="text-xl font-bold mb-4 text-accent-yellow">
            Need Emergency Lawn Care Services?
          </h4>
          <p className="text-gray-300 mb-4 max-w-2xl mx-auto">
            Storm damage cleanup, urgent landscaping needs, or seasonal preparation? 
            We offer emergency services throughout Walker, Louisiana and surrounding areas.
          </p>
          <a
            href="tel:(225) 369-4434"
            className="btn btn-outline btn-sm text-white border-accent-yellow text-accent-yellow hover:bg-accent-yellow hover:text-primary-charcoal"
          >
            Emergency Services: (225) 369-4434
          </a>
        </motion.div>
      </div>
    </section>
  )
}

export default CTASection