import React, { useState } from 'react'
import { Helmet } from 'react-helmet-async'
import { motion } from 'framer-motion'
import { 
  FaUser, 
  FaPhone, 
  FaEnvelope, 
  FaMapMarkerAlt,
  FaHome,
  FaCheckCircle,
  FaStar
} from 'react-icons/fa'

const Quote = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    services: [],
    propertySize: '',
    frequency: '',
    message: ''
  })

  const [isSubmitted, setIsSubmitted] = useState(false)

  const services = [
    'Lawn Mowing & Maintenance',
    'Landscape Design & Installation',
    'Fertilization & Weed Control',
    'Seasonal Cleanup',
    'Christmas Light Installation',
    'Tree & Shrub Trimming',
    'Pest Control',
    'Emergency Services'
  ]

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleServiceChange = (service) => {
    setFormData(prev => ({
      ...prev,
      services: prev.services.includes(service)
        ? prev.services.filter(s => s !== service)
        : [...prev.services, service]
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // In a real implementation, you would send this to your backend
    console.log('Quote request:', formData)
    setIsSubmitted(true)
  }

  if (isSubmitted) {
    return (
      <>
        <Helmet>
          <title>Quote Submitted | Southern Buck Lawn Care | Walker LA</title>
        </Helmet>
        
        <section className="section bg-background-light min-h-screen flex items-center">
          <div className="container text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="bg-white rounded-2xl p-12 shadow-lg max-w-2xl mx-auto"
            >
              <div className="text-6xl text-green-500 mb-6">
                <FaCheckCircle className="mx-auto" />
              </div>
              
              <h1 className="text-3xl font-bold text-primary-charcoal mb-4">
                Thank You for Your Quote Request!
              </h1>
              
              <p className="text-text-light mb-8 text-lg">
                Shane Dantone and the Southern Buck Lawn team will review your request and 
                contact you within 24 hours with a detailed quote.
              </p>
              
              <div className="bg-primary-orange/10 rounded-lg p-6 mb-8">
                <h3 className="font-bold text-primary-charcoal mb-3">What happens next?</h3>
                <ul className="text-left space-y-2">
                  <li className="flex items-center gap-3">
                    <FaCheckCircle className="text-green-500" />
                    We'll review your request within 2 hours
                  </li>
                  <li className="flex items-center gap-3">
                    <FaCheckCircle className="text-green-500" />
                    Shane will call you to discuss your needs
                  </li>
                  <li className="flex items-center gap-3">
                    <FaCheckCircle className="text-green-500" />
                    We'll schedule a free on-site consultation
                  </li>
                  <li className="flex items-center gap-3">
                    <FaCheckCircle className="text-green-500" />
                    You'll receive a detailed written quote
                  </li>
                </ul>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="tel:(225) 369-4434"
                  className="btn btn-primary btn-lg"
                >
                  Call Shane: (225) 369-4434
                </a>
                <a 
                  href="/"
                  className="btn btn-secondary btn-lg"
                >
                  Return Home
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </>
    )
  }

  return (
    <>
      <Helmet>
        <title>Free Quote | Lawn Care Walker LA | Southern Buck Lawn | Shane Dantone</title>
        <meta 
          name="description" 
          content="Get your free lawn care quote in Walker, Louisiana. Professional landscaping services by Shane Dantone. Serving Livingston Parish, Denham Springs, Watson & surrounding areas." 
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
              Get Your Free{' '}
              <span className="text-primary-orange">Lawn Care Quote</span>
            </h1>
            <p className="text-xl text-text-light max-w-3xl mx-auto mb-8">
              Ready to transform your Walker, Louisiana property? Fill out our quick form 
              and Shane Dantone will provide you with a detailed, no-obligation quote.
            </p>
            
            {/* Trust Indicators */}
            <div className="flex flex-wrap justify-center items-center gap-8">
              <div className="flex items-center gap-2">
                <div className="flex text-accent-yellow">
                  {[...Array(5)].map((_, i) => (
                    <FaStar key={i} />
                  ))}
                </div>
                <span className="text-text-light">5-Star Reviews</span>
              </div>
              <div className="text-text-light">✓ Licensed & Insured</div>
              <div className="text-text-light">✓ Free Estimates</div>
            </div>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-12">
            {/* Quote Form */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="lg:col-span-2"
            >
              <form onSubmit={handleSubmit} className="bg-white rounded-2xl p-8 shadow-lg">
                <h2 className="text-2xl font-bold text-primary-charcoal mb-8">
                  Tell Us About Your Project
                </h2>

                {/* Contact Information */}
                <div className="grid md:grid-cols-2 gap-6 mb-8">
                  <div>
                    <label className="block text-primary-charcoal font-medium mb-2">
                      <FaUser className="inline mr-2" />
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full p-3 border border-border-color rounded-lg focus:ring-2 focus:ring-primary-orange focus:border-transparent"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-primary-charcoal font-medium mb-2">
                      <FaPhone className="inline mr-2" />
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      required
                      className="w-full p-3 border border-border-color rounded-lg focus:ring-2 focus:ring-primary-orange focus:border-transparent"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6 mb-8">
                  <div>
                    <label className="block text-primary-charcoal font-medium mb-2">
                      <FaEnvelope className="inline mr-2" />
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full p-3 border border-border-color rounded-lg focus:ring-2 focus:ring-primary-orange focus:border-transparent"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-primary-charcoal font-medium mb-2">
                      <FaMapMarkerAlt className="inline mr-2" />
                      City *
                    </label>
                    <select
                      name="city"
                      value={formData.city}
                      onChange={handleInputChange}
                      required
                      className="w-full p-3 border border-border-color rounded-lg focus:ring-2 focus:ring-primary-orange focus:border-transparent"
                    >
                      <option value="">Select your city</option>
                      <option value="Walker">Walker, LA</option>
                      <option value="Denham Springs">Denham Springs, LA</option>
                      <option value="Watson">Watson, LA</option>
                      <option value="Baton Rouge">Baton Rouge, LA</option>
                      <option value="Gonzales">Gonzales, LA</option>
                      <option value="Prairieville">Prairieville, LA</option>
                      <option value="Other">Other Livingston Parish</option>
                    </select>
                  </div>
                </div>

                <div className="mb-8">
                  <label className="block text-primary-charcoal font-medium mb-2">
                    <FaHome className="inline mr-2" />
                    Property Address
                  </label>
                  <input
                    type="text"
                    name="address"
                    value={formData.address}
                    onChange={handleInputChange}
                    className="w-full p-3 border border-border-color rounded-lg focus:ring-2 focus:ring-primary-orange focus:border-transparent"
                  />
                </div>

                {/* Services */}
                <div className="mb-8">
                  <label className="block text-primary-charcoal font-medium mb-4">
                    Services Needed (select all that apply)
                  </label>
                  <div className="grid sm:grid-cols-2 gap-3">
                    {services.map((service) => (
                      <label key={service} className="flex items-center gap-3 cursor-pointer">
                        <input
                          type="checkbox"
                          checked={formData.services.includes(service)}
                          onChange={() => handleServiceChange(service)}
                          className="w-4 h-4 text-primary-orange rounded focus:ring-primary-orange"
                        />
                        <span className="text-text-dark">{service}</span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Property Details */}
                <div className="grid md:grid-cols-2 gap-6 mb-8">
                  <div>
                    <label className="block text-primary-charcoal font-medium mb-2">
                      Property Size
                    </label>
                    <select
                      name="propertySize"
                      value={formData.propertySize}
                      onChange={handleInputChange}
                      className="w-full p-3 border border-border-color rounded-lg focus:ring-2 focus:ring-primary-orange focus:border-transparent"
                    >
                      <option value="">Select size</option>
                      <option value="Small (less than 1/4 acre)">Small (&lt; 1/4 acre)</option>
                      <option value="Medium (1/4 - 1/2 acre)">Medium (1/4 - 1/2 acre)</option>
                      <option value="Large (1/2 - 1 acre)">Large (1/2 - 1 acre)</option>
                      <option value="Extra Large (over 1 acre)">Extra Large (&gt; 1 acre)</option>
                    </select>
                  </div>
                  
                  <div>
                    <label className="block text-primary-charcoal font-medium mb-2">
                      Service Frequency
                    </label>
                    <select
                      name="frequency"
                      value={formData.frequency}
                      onChange={handleInputChange}
                      className="w-full p-3 border border-border-color rounded-lg focus:ring-2 focus:ring-primary-orange focus:border-transparent"
                    >
                      <option value="">Select frequency</option>
                      <option value="One-time service">One-time service</option>
                      <option value="Weekly">Weekly</option>
                      <option value="Bi-weekly">Bi-weekly</option>
                      <option value="Monthly">Monthly</option>
                      <option value="Seasonal">Seasonal</option>
                    </select>
                  </div>
                </div>

                {/* Message */}
                <div className="mb-8">
                  <label className="block text-primary-charcoal font-medium mb-2">
                    Additional Details
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows="4"
                    placeholder="Tell us more about your project, timeline, or any specific needs..."
                    className="w-full p-3 border border-border-color rounded-lg focus:ring-2 focus:ring-primary-orange focus:border-transparent"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="btn btn-primary btn-lg w-full"
                >
                  Get My Free Quote
                </button>
              </form>
            </motion.div>

            {/* Sidebar */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="space-y-8"
            >
              {/* Contact Card */}
              <div className="bg-primary-charcoal text-white rounded-2xl p-6">
                <h3 className="text-xl font-bold mb-4">Prefer to Call?</h3>
                <p className="text-gray-300 mb-4">
                  Speak directly with Shane for immediate assistance
                </p>
                <a 
                  href="tel:(225) 369-4434"
                  className="btn btn-primary w-full mb-4"
                >
                  <FaPhone className="mr-2" />
                  (225) 369-4434
                </a>
                <div className="text-sm text-gray-400">
                  Mon-Fri: 7AM-6PM | Sat: 8AM-4PM
                </div>
              </div>

              {/* Guarantee */}
              <div className="bg-white rounded-xl p-6 shadow-lg">
                <h3 className="text-xl font-bold text-primary-charcoal mb-4">
                  Our Guarantee
                </h3>
                <ul className="space-y-3 text-sm">
                  <li className="flex items-center gap-3">
                    <FaCheckCircle className="text-green-500" />
                    Free, no-obligation quotes
                  </li>
                  <li className="flex items-center gap-3">
                    <FaCheckCircle className="text-green-500" />
                    Response within 24 hours
                  </li>
                  <li className="flex items-center gap-3">
                    <FaCheckCircle className="text-green-500" />
                    Licensed & insured professionals
                  </li>
                  <li className="flex items-center gap-3">
                    <FaCheckCircle className="text-green-500" />
                    100% satisfaction guarantee
                  </li>
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Quote