import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FaMapMarkerAlt, FaRoute, FaClock, FaPhone } from 'react-icons/fa'

const ServiceAreasSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  const serviceAreas = [
    {
      name: 'Walker, LA',
      description: 'Our home base in beautiful Walker, Louisiana. We provide comprehensive lawn care services throughout the city.',
      distance: 'Local',
      features: ['Lawn Care Walker LA', 'Landscape Design Walker', 'Christmas Light Installation'],
      zipCodes: ['70785'],
      primary: true
    },
    {
      name: 'Denham Springs, LA',
      description: 'Serving the vibrant community of Denham Springs with professional landscaping and maintenance.',
      distance: '8 miles',
      features: ['Lawn Mowing Denham Springs', 'Fertilization Services', 'Seasonal Cleanup'],
      zipCodes: ['70726', '70706'],
      primary: true
    },
    {
      name: 'Watson, LA',
      description: 'Quality lawn care services for Watson residents and businesses.',
      distance: '12 miles',
      features: ['Landscape Watson LA', 'Weed Control', 'Pest Management'],
      zipCodes: ['70786'],
      primary: true
    },
    {
      name: 'Baton Rouge, LA',
      description: 'Extending our premium services to select areas of Baton Rouge.',
      distance: '15 miles',
      features: ['Commercial Landscaping', 'Residential Lawn Care', 'Property Maintenance'],
      zipCodes: ['70810', '70815', '70817'],
      primary: false
    },
    {
      name: 'Gonzales, LA',
      description: 'Professional lawn care and landscaping services in the Gonzales area.',
      distance: '18 miles',
      features: ['Lawn Care Gonzales', 'Landscape Installation', 'Irrigation Services'],
      zipCodes: ['70737'],
      primary: false
    },
    {
      name: 'Prairieville, LA',
      description: 'Comprehensive outdoor maintenance for Prairieville properties.',
      distance: '20 miles',
      features: ['Prairieville Lawn Care', 'Tree Trimming', 'Garden Maintenance'],
      zipCodes: ['70769'],
      primary: false
    }
  ]

  return (
    <section className="section bg-gradient-to-br from-primary-charcoal via-background-dark to-primary-charcoal text-white" ref={ref}>
      <div className="container">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Proudly Serving{' '}
            <span className="text-accent-gold">Livingston Parish</span>
            {' '}& Beyond
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            From our base in Walker, Louisiana, we provide professional lawn care and 
            landscaping services throughout Livingston Parish and surrounding communities.
          </p>
          
          {/* Contact CTA */}
          <div className="inline-flex items-center gap-4 bg-white/10 backdrop-blur-sm rounded-full px-6 py-3">
            <FaPhone className="text-accent-yellow" />
            <span className="text-white">Serving your area:</span>
            <a 
              href="tel:(225) 369-4434" 
              className="text-accent-yellow font-bold hover:text-white transition-colors"
            >
              (225) 369-4434
            </a>
          </div>
        </motion.div>

        {/* Service Areas Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {serviceAreas.map((area, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`relative bg-white/5 backdrop-blur-sm rounded-xl p-6 border transition-all duration-300 hover:bg-white/10 hover:transform hover:scale-105 ${
                area.primary 
                  ? 'border-accent-yellow/30 ring-2 ring-accent-yellow/20' 
                  : 'border-white/20'
              }`}
            >
              {/* Primary Service Badge */}
              {area.primary && (
                <div className="absolute -top-3 -right-3 bg-accent-yellow text-primary-charcoal text-xs font-bold px-3 py-1 rounded-full">
                  PRIMARY
                </div>
              )}

              {/* Header */}
              <div className="flex items-center gap-3 mb-4">
                <div className={`p-3 rounded-lg ${
                  area.primary ? 'bg-accent-yellow/20' : 'bg-white/10'
                }`}>
                  <FaMapMarkerAlt className={`text-xl ${
                    area.primary ? 'text-accent-yellow' : 'text-white'
                  }`} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-1">
                    {area.name}
                  </h3>
                  <div className="flex items-center gap-2 text-sm text-gray-400">
                    <FaRoute className="text-xs" />
                    {area.distance} from Walker
                  </div>
                </div>
              </div>

              {/* Description */}
              <p className="text-gray-300 mb-4 text-sm leading-relaxed">
                {area.description}
              </p>

              {/* Services */}
              <div className="mb-4">
                <h4 className="text-sm font-semibold text-accent-yellow mb-2">
                  Popular Services:
                </h4>
                <ul className="space-y-1">
                  {area.features.map((service, idx) => (
                    <li key={idx} className="text-xs text-gray-300 flex items-center gap-2">
                      <div className="w-1 h-1 bg-accent-lime rounded-full" />
                      {service}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Zip Codes */}
              <div className="border-t border-white/20 pt-3">
                <div className="text-xs text-gray-400">
                  <span className="font-medium">Zip Codes:</span> {area.zipCodes.join(', ')}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Coverage Map Info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 text-center"
        >
          <h3 className="text-2xl font-bold mb-6 text-accent-yellow">
            Why Choose Local Livingston Parish Experts?
          </h3>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-accent-yellow/20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <FaMapMarkerAlt className="text-2xl text-accent-yellow" />
              </div>
              <h4 className="font-semibold mb-2">Local Knowledge</h4>
              <p className="text-sm text-gray-300">
                Deep understanding of Louisiana soil, climate, and growing conditions
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-accent-yellow/20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <FaClock className="text-2xl text-accent-yellow" />
              </div>
              <h4 className="font-semibold mb-2">Quick Response</h4>
              <p className="text-sm text-gray-300">
                Fast response times and flexible scheduling for all service areas
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-accent-yellow/20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <FaRoute className="text-2xl text-accent-yellow" />
              </div>
              <h4 className="font-semibold mb-2">Efficient Service</h4>
              <p className="text-sm text-gray-300">
                Optimized routes ensure timely service and competitive pricing
              </p>
            </div>
          </div>

          <div className="mt-8 pt-6 border-t border-white/20">
            <p className="text-gray-300 mb-4">
              <strong className="text-white">Don't see your area listed?</strong> We're always expanding our service area. 
              Give us a call to see if we can serve your location.
            </p>
            
            <a 
              href="tel:(225) 369-4434"
              className="btn btn-primary btn-lg"
            >
              Call (225) 369-4434 Today
            </a>
          </div>
        </motion.div>

        {/* SEO Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-16 text-center"
        >
          <div className="max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold mb-6 text-white">
              Professional Lawn Care Services Across Louisiana
            </h3>
            <div className="text-gray-300 text-sm leading-relaxed space-y-4">
              <p>
                Southern Buck Lawn provides comprehensive <strong className="text-white">lawn care services in Walker, LA</strong> and surrounding communities. 
                Our expertise in <strong className="text-white">landscape design Walker Louisiana</strong> helps transform residential and commercial properties 
                throughout Livingston Parish.
              </p>
              <p>
                From <strong className="text-white">lawn mowing Denham Springs</strong> to <strong className="text-white">landscaping Watson LA</strong>, 
                we bring professional-grade equipment and years of experience to every project. Our seasonal <strong className="text-white">Christmas light installation Walker LA</strong> service 
                has become a popular choice for homeowners looking to add festive charm to their properties.
              </p>
              <p>
                Whether you need routine maintenance in <strong className="text-white">Prairieville lawn care</strong> or complete landscape renovation in 
                <strong className="text-white">Gonzales landscaping</strong>, our team delivers results that exceed expectations. Contact Shane Dantone 
                and Southern Buck Lawn for all your Louisiana lawn care needs.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default ServiceAreasSection