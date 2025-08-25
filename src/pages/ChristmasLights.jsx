import React from 'react'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { 
  FaSnowflake, 
  FaLightbulb, 
  FaHome, 
  FaTree,
  FaCalendarAlt,
  FaPhone,
  FaCheckCircle,
  FaStar,
  FaMapMarkerAlt
} from 'react-icons/fa'

const ChristmasLights = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  const services = [
    {
      icon: FaHome,
      title: 'Residential Christmas Light Installation',
      description: 'Professional Christmas light installation for homes across Walker, LA and surrounding areas.',
      features: [
        'Custom design consultation',
        'Premium LED light installation',
        'Roofline and landscape lighting',
        'Safe installation and removal',
        'Storage service available'
      ]
    },
    {
      icon: FaTree,
      title: 'Tree & Landscape Lighting',
      description: 'Beautiful tree wrapping and landscape accent lighting to enhance your property.',
      features: [
        'Professional tree wrapping',
        'Shrub and garden lighting',
        'Pathway illumination',
        'Feature lighting design',
        'Energy-efficient LED options'
      ]
    },
    {
      icon: FaLightbulb,
      title: 'Commercial Holiday Lighting',
      description: 'Eye-catching commercial Christmas lighting to attract customers and spread holiday cheer.',
      features: [
        'Business storefront lighting',
        'Large-scale installations',
        'Timer and smart controls',
        'Maintenance during season',
        'Professional design service'
      ]
    }
  ]

  const whyChooseUs = [
    'Licensed & insured professionals',
    'Premium quality LED lights',
    'Free design consultation',
    'Professional installation & removal',
    'Storage service available',
    'Fully insured for your protection'
  ]

  return (
    <>
      <Helmet>
        <title>Christmas Light Installation Walker LA | Holiday Lighting Services | Southern Buck Lawn</title>
        <meta 
          name="description" 
          content="Professional Christmas light installation in Walker, Louisiana. Serving Livingston Parish, Denham Springs, Watson & surrounding areas. Get your quote early for 2024 holiday season! Call (225) 369-4434." 
        />
        <meta 
          name="keywords" 
          content="Christmas light installation Walker LA, holiday lighting Walker Louisiana, Christmas lights Denham Springs, holiday decorating Livingston Parish, Christmas light installation Watson LA, holiday lighting Baton Rouge, Christmas lights Gonzales LA, holiday decorating Prairieville" 
        />
        
        {/* Christmas Lights Service Schema */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "Christmas Light Installation Walker LA",
            "provider": {
              "@type": "LocalBusiness",
              "name": "Southern Buck Lawn",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "28790 Brett Dr",
                "addressLocality": "Walker",
                "addressRegion": "LA",
                "postalCode": "70785"
              },
              "telephone": "(225) 369-4434"
            },
            "areaServed": [
              "Walker, LA",
              "Denham Springs, LA",
              "Watson, LA",
              "Baton Rouge, LA",
              "Gonzales, LA",
              "Prairieville, LA",
              "Livingston Parish, LA"
            ],
            "serviceType": "Christmas Light Installation",
            "description": "Professional Christmas light installation and removal services for residential and commercial properties in Walker, Louisiana and surrounding areas."
          })}
        </script>
      </Helmet>

      {/* Hero Section */}
      <section className="section bg-gradient-to-br from-primary-charcoal via-red-900 to-green-900 text-white relative overflow-hidden min-h-[80vh] flex items-center">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 opacity-10">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute text-4xl"
              initial={{ 
                x: Math.random() * window.innerWidth, 
                y: Math.random() * window.innerHeight,
                opacity: 0 
              }}
              animate={{ 
                y: [null, -20, 0],
                opacity: [0, 1, 0]
              }}
              transition={{
                duration: 3 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 5
              }}
            >
              <FaSnowflake />
            </motion.div>
          ))}
        </div>

        <div className="container relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              {/* Location Badge */}
              <div className="inline-flex items-center gap-2 bg-red-600/90 text-white px-4 py-2 rounded-full text-sm font-medium mb-6">
                <FaMapMarkerAlt />
                Christmas Light Installation Walker, LA
              </div>

              <h1 className="text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                Professional{' '}
                <span className="text-yellow-400">Christmas Light</span>
                {' '}Installation
              </h1>

              <p className="text-xl text-gray-200 mb-8 leading-relaxed">
                Get ahead of the holiday rush! <strong className="text-white">Shane Dantone</strong> and 
                Southern Buck Lawn provide premium Christmas light installation services throughout 
                Walker, Louisiana and surrounding areas. Book early for guaranteed service!
              </p>

              {/* Key Benefits */}
              <div className="grid sm:grid-cols-2 gap-3 mb-8">
                {whyChooseUs.slice(0, 4).map((benefit, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                    className="flex items-center gap-3"
                  >
                    <FaCheckCircle className="text-green-400 text-lg flex-shrink-0" />
                    <span className="text-gray-200">{benefit}</span>
                  </motion.div>
                ))}
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
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
              </div>
            </motion.div>

            {/* Right Column - Seasonal Info */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="hidden lg:block"
            >
              <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
                <h3 className="text-2xl font-bold mb-6 text-yellow-400">
                  🎄 2024 Holiday Season
                </h3>
                
                <div className="space-y-4 mb-6">
                  <div className="flex justify-between items-center py-2 border-b border-white/20">
                    <span>Early Bird Booking:</span>
                    <span className="text-green-400 font-bold">Now Open!</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-white/20">
                    <span>Installation Starts:</span>
                    <span className="text-yellow-400">November 15th</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-white/20">
                    <span>Removal Service:</span>
                    <span className="text-blue-400">January 15th</span>
                  </div>
                </div>

                <div className="bg-yellow-400/20 rounded-lg p-4 mb-6">
                  <h4 className="font-bold text-yellow-400 mb-2">Early Bird Special!</h4>
                  <p className="text-sm text-gray-200">
                    Book before October 31st and save 15% on your Christmas light installation!
                  </p>
                </div>

                <div className="text-center">
                  <div className="flex text-yellow-400 justify-center mb-2">
                    {[...Array(5)].map((_, i) => (
                      <FaStar key={i} />
                    ))}
                  </div>
                  <p className="text-sm text-gray-300">
                    "Best Christmas light installation in Walker!"
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section bg-background-light" ref={ref}>
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              Christmas Light Installation Services in{' '}
              <span className="text-primary-orange">Walker, Louisiana</span>
            </h2>
            <p className="text-xl text-text-light max-w-3xl mx-auto">
              From simple roofline lighting to elaborate landscape displays, we create stunning 
              holiday lighting that makes your property the talk of the neighborhood.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const IconComponent = service.icon
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className="card hover:shadow-2xl"
                >
                  <div className="card-header">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="bg-red-100 p-4 rounded-xl">
                        <IconComponent className="text-2xl text-red-600" />
                      </div>
                      <h3 className="text-xl font-bold text-primary-charcoal">
                        {service.title}
                      </h3>
                    </div>
                  </div>

                  <div className="card-body">
                    <p className="text-text-light mb-6">
                      {service.description}
                    </p>

                    <ul className="space-y-2">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center gap-3 text-sm">
                          <FaCheckCircle className="text-green-500 text-xs flex-shrink-0" />
                          <span className="text-text-light">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="card-footer">
                    <Link
                      to="/quote"
                      className="btn btn-outline w-full hover:btn-primary transition-all duration-300"
                    >
                      Get Quote
                    </Link>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section bg-gradient-to-r from-red-600 to-green-600 text-white">
        <div className="container text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold mb-6">
              Don't Wait - Book Your Christmas Light Installation Today!
            </h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              The best dates fill up fast! Secure your preferred installation date with 
              Southern Buck Lawn and make this holiday season magical for your Walker, Louisiana home.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:(225) 369-4434"
                className="btn btn-primary btn-lg bg-white text-primary-charcoal hover:bg-gray-100"
              >
                <FaPhone className="mr-2" />
                Call Shane: (225) 369-4434
              </a>
              <Link
                to="/quote"
                className="btn btn-outline btn-lg border-white text-white hover:bg-white hover:text-green-600"
              >
                <FaCalendarAlt className="mr-2" />
                Schedule Consultation
              </Link>
            </div>
            
            <div className="mt-8 text-sm opacity-90">
              Serving Walker, Denham Springs, Watson, Baton Rouge, Gonzales, Prairieville & all of Livingston Parish
            </div>
          </motion.div>
        </div>
      </section>
    </>
  )
}

export default ChristmasLights