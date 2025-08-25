import React from 'react'
import { Helmet } from 'react-helmet-async'
import { motion } from 'framer-motion'
import { 
  FaPhone, 
  FaEnvelope, 
  FaMapMarkerAlt, 
  FaClock,
  FaFacebook,
  FaInstagram,
  FaGoogle
} from 'react-icons/fa'

const Contact = () => {
  return (
    <>
      <Helmet>
        <title>Contact Southern Buck Lawn | Walker LA | (225) 369-4434 | Shane Dantone</title>
        <meta 
          name="description" 
          content="Contact Southern Buck Lawn Care in Walker, Louisiana. Call (225) 369-4434 for free estimates. Located at 28790 Brett Dr, Walker, LA 70785. Serving Livingston Parish." 
        />
        <meta 
          name="keywords" 
          content="contact Southern Buck Lawn, Walker LA lawn care phone number, 225-369-4434, Shane Dantone contact, Livingston Parish landscaping contact" 
        />
      </Helmet>

      <section className="section bg-background-light">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">
              Contact{' '}
              <span className="text-primary-orange">Southern Buck Lawn</span>
            </h1>
            <p className="text-xl text-text-light max-w-3xl mx-auto">
              Ready to transform your Walker, Louisiana property? Get in touch with 
              Shane Dantone and our team for your free consultation and quote.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <h2 className="text-2xl font-bold text-primary-charcoal mb-6">
                  Get In Touch
                </h2>

                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-primary-orange/10 p-3 rounded-lg">
                      <FaPhone className="text-primary-orange text-xl" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-primary-charcoal mb-2">Phone</h3>
                      <a 
                        href="tel:(225) 369-4434"
                        className="text-primary-orange hover:text-primary-charcoal transition-colors text-lg font-bold"
                      >
                        (225) 369-4434
                      </a>
                      <p className="text-text-light text-sm">Call for immediate assistance</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="bg-primary-orange/10 p-3 rounded-lg">
                      <FaEnvelope className="text-primary-orange text-xl" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-primary-charcoal mb-2">Email</h3>
                      <a 
                        href="mailto:info@southernbucklawn.com"
                        className="text-primary-orange hover:text-primary-charcoal transition-colors"
                      >
                        info@southernbucklawn.com
                      </a>
                      <p className="text-text-light text-sm">We'll respond within 24 hours</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="bg-primary-orange/10 p-3 rounded-lg">
                      <FaMapMarkerAlt className="text-primary-orange text-xl" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-primary-charcoal mb-2">Address</h3>
                      <p className="text-text-dark">28790 Brett Dr</p>
                      <p className="text-text-dark">Walker, LA 70785</p>
                      <p className="text-text-light text-sm">Livingston Parish</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="bg-primary-orange/10 p-3 rounded-lg">
                      <FaClock className="text-primary-orange text-xl" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-primary-charcoal mb-2">Business Hours</h3>
                      <div className="text-text-dark space-y-1">
                        <p>Monday - Friday: 7:00 AM - 6:00 PM</p>
                        <p>Saturday: 8:00 AM - 4:00 PM</p>
                        <p>Sunday: Closed</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Social Media */}
                <div className="mt-8 pt-6 border-t border-border-color">
                  <h3 className="font-semibold text-primary-charcoal mb-4">Follow Us</h3>
                  <div className="flex gap-4">
                    <a 
                      href="https://www.facebook.com/SouthernBuckLawn" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="bg-blue-600 text-white p-3 rounded-lg hover:bg-blue-700 transition-colors"
                    >
                      <FaFacebook className="text-xl" />
                    </a>
                    <a 
                      href="https://www.instagram.com/southernbucklawn" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="bg-pink-600 text-white p-3 rounded-lg hover:bg-pink-700 transition-colors"
                    >
                      <FaInstagram className="text-xl" />
                    </a>
                    <a 
                      href="https://g.page/r/CZxYbQyLvADREAE/review" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="bg-red-600 text-white p-3 rounded-lg hover:bg-red-700 transition-colors"
                    >
                      <FaGoogle className="text-xl" />
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Service Areas */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <div className="bg-primary-charcoal text-white rounded-2xl p-8">
                <h2 className="text-2xl font-bold mb-6">
                  Service Areas
                </h2>
                
                <p className="text-gray-300 mb-6">
                  Southern Buck Lawn proudly serves Walker, Louisiana and the surrounding communities:
                </p>

                <div className="grid sm:grid-cols-2 gap-4 mb-8">
                  {[
                    'Walker, LA 70785',
                    'Denham Springs, LA',
                    'Watson, LA',
                    'Baton Rouge, LA',
                    'Gonzales, LA',
                    'Prairieville, LA',
                    'Livingston Parish',
                    'Surrounding Areas'
                  ].map((area, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-accent-yellow rounded-full" />
                      <span className="text-gray-300">{area}</span>
                    </div>
                  ))}
                </div>

                <div className="bg-white/10 rounded-lg p-4">
                  <h3 className="font-bold text-accent-yellow mb-2">
                    Don't see your area?
                  </h3>
                  <p className="text-gray-300 text-sm mb-3">
                    We're always expanding our service area. Give us a call to see if we can serve your location.
                  </p>
                  <a 
                    href="tel:(225) 369-4434"
                    className="btn btn-primary btn-sm"
                  >
                    Call (225) 369-4434
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Contact