import React from 'react'
import { Link } from 'react-router-dom'
import { 
  FaPhone, 
  FaEnvelope, 
  FaMapMarkerAlt, 
  FaClock, 
  FaFacebook, 
  FaInstagram, 
  FaGoogle,
  FaStar,
  FaShieldAlt,
  FaAward,
  FaCertificate
} from 'react-icons/fa'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const serviceAreas = [
    'Walker, LA',
    'Denham Springs, LA',
    'Watson, LA',
    'Baton Rouge, LA',
    'Gonzales, LA',
    'Prairieville, LA',
    'Livingston Parish'
  ]

  const services = [
    'Lawn Care',
    'Landscape Design',
    'Lawn Mowing',
    'Fertilization',
    'Weed Control',
    'Seasonal Cleanup',
    'Christmas Light Installation'
  ]

  return (
    <footer className="bg-primary-charcoal text-white">
      {/* Trust Badges Section */}
      <div className="bg-background-light py-8">
        <div className="container">
          <div className="grid grid-4 gap-6 text-center">
            <div className="flex flex-column items-center gap-2">
              <FaShieldAlt className="text-3xl text-primary-orange" />
              <h4 className="text-lg font-semibold text-primary-charcoal mb-1">
                Licensed & Insured
              </h4>
              <p className="text-sm text-text-light mb-0">
                Fully bonded for your protection
              </p>
            </div>
            
            <div className="flex flex-column items-center gap-2">
              <div className="flex items-center gap-1 text-accent-yellow">
                {[...Array(5)].map((_, i) => (
                  <FaStar key={i} className="text-lg" />
                ))}
              </div>
              <h4 className="text-lg font-semibold text-primary-charcoal mb-1">
                5-Star Reviews
              </h4>
              <p className="text-sm text-text-light mb-0">
                Trusted by local homeowners
              </p>
            </div>
            
            <div className="flex flex-column items-center gap-2">
              <FaAward className="text-3xl text-primary-orange" />
              <h4 className="text-lg font-semibold text-primary-charcoal mb-1">
                Quality Guarantee
              </h4>
              <p className="text-sm text-text-light mb-0">
                100% satisfaction promise
              </p>
            </div>
            
            <div className="flex flex-column items-center gap-2">
              <FaCertificate className="text-3xl text-primary-orange" />
              <h4 className="text-lg font-semibold text-primary-charcoal mb-1">
                Local Experts
              </h4>
              <p className="text-sm text-text-light mb-0">
                Serving Louisiana since 2024
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="py-12">
        <div className="container">
          <div className="grid grid-4 gap-8">
            {/* Company Info */}
            <div className="col-span-1">
              <div className="flex items-center gap-3 mb-6">
                <img 
                  src="/assets/images/Southern_Buck_Logo.png" 
                  alt="Southern Buck Lawn Care Logo" 
                  className="h-12"
                />
                <div>
                  <h3 className="text-xl font-bold text-white mb-1">
                    Southern Buck Lawn
                  </h3>
                  <p className="text-accent-yellow text-sm mb-0">
                    Professional Lawn Care
                  </p>
                </div>
              </div>
              
              <p className="text-gray-300 mb-6">
                Expert lawn care and landscaping services in Walker, Louisiana and surrounding areas. 
                Licensed professionals committed to making your outdoor spaces beautiful.
              </p>
              
              {/* Social Media */}
              <div className="flex items-center gap-4">
                <a 
                  href="https://www.facebook.com/SouthernBuckLawn" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-white hover:text-accent-yellow transition-colors"
                  aria-label="Follow us on Facebook"
                >
                  <FaFacebook size={24} />
                </a>
                <a 
                  href="https://www.instagram.com/southernbucklawn" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-white hover:text-accent-yellow transition-colors"
                  aria-label="Follow us on Instagram"
                >
                  <FaInstagram size={24} />
                </a>
                <a 
                  href="https://g.page/r/CZxYbQyLvADREAE/review" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-white hover:text-accent-yellow transition-colors"
                  aria-label="Leave us a Google review"
                >
                  <FaGoogle size={24} />
                </a>
              </div>
            </div>

            {/* Services */}
            <div>
              <h4 className="text-xl font-semibold mb-6 text-accent-yellow">
                Our Services
              </h4>
              <ul className="space-y-3">
                {services.map((service, index) => (
                  <li key={index}>
                    <Link 
                      to="/services" 
                      className="text-gray-300 hover:text-white transition-colors"
                    >
                      {service}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Service Areas */}
            <div>
              <h4 className="text-xl font-semibold mb-6 text-accent-yellow">
                Service Areas
              </h4>
              <ul className="space-y-3">
                {serviceAreas.map((area, index) => (
                  <li key={index} className="text-gray-300">
                    {area}
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="text-xl font-semibold mb-6 text-accent-yellow">
                Contact Us
              </h4>
              
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <FaPhone className="text-primary-orange mt-1" />
                  <div>
                    <a 
                      href="tel:(225) 369-4434" 
                      className="text-white hover:text-accent-yellow transition-colors block"
                    >
                      (225) 369-4434
                    </a>
                    <p className="text-gray-400 text-sm mb-0">Call for free quote</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <FaEnvelope className="text-primary-orange mt-1" />
                  <div>
                    <a 
                      href="mailto:info@southernbucklawn.com" 
                      className="text-white hover:text-accent-yellow transition-colors block"
                    >
                      info@southernbucklawn.com
                    </a>
                    <p className="text-gray-400 text-sm mb-0">Email us anytime</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <FaMapMarkerAlt className="text-primary-orange mt-1" />
                  <div>
                    <p className="text-white mb-1">28790 Brett Dr</p>
                    <p className="text-white mb-1">Walker, LA 70785</p>
                    <p className="text-gray-400 text-sm mb-0">Livingston Parish</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <FaClock className="text-primary-orange mt-1" />
                  <div>
                    <p className="text-white mb-1">Mon-Fri: 7:00 AM - 6:00 PM</p>
                    <p className="text-white mb-1">Saturday: 8:00 AM - 4:00 PM</p>
                    <p className="text-gray-400 text-sm mb-0">Sunday: Closed</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Google Reviews Widget */}
      <div className="bg-primary-charcoal/50 py-8 border-t border-gray-700">
        <div className="container text-center">
          <h4 className="text-xl font-semibold mb-4 text-accent-yellow">
            What Our Customers Say
          </h4>
          <div className="flex justify-center items-center gap-2 mb-4">
            <div className="flex text-accent-yellow">
              {[...Array(5)].map((_, i) => (
                <FaStar key={i} className="text-xl" />
              ))}
            </div>
            <span className="text-white text-lg font-semibold ml-2">5.0</span>
            <span className="text-gray-400">based on Google reviews</span>
          </div>
          <a 
            href="https://g.page/r/CZxYbQyLvADREAE/review" 
            target="_blank" 
            rel="noopener noreferrer"
            className="btn btn-outline btn-sm"
          >
            <FaGoogle className="mr-2" />
            Read Our Reviews
          </a>
        </div>
      </div>

      {/* Copyright */}
      <div className="bg-text-dark py-6 border-t border-gray-700">
        <div className="container flex-between text-sm text-gray-400">
          <div>
            <p className="mb-0">
              © {currentYear} Southern Buck Lawn Care. All rights reserved. | 
              Owner: Shane Dantone | Licensed & Insured
            </p>
          </div>
          <div className="hidden md:block">
            <p className="mb-0">
              Proudly serving Walker, LA and surrounding Louisiana communities
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer