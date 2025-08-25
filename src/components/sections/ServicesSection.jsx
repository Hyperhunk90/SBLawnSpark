import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { 
  FaLeaf, 
  FaTree, 
  FaSeedling, 
  FaBug, 
  FaCut,
  FaSnowflake,
  FaArrowRight,
  FaCheck
} from 'react-icons/fa'

const ServicesSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  const services = [
    {
      icon: FaCut,
      title: 'Lawn Mowing & Maintenance',
      description: 'Professional lawn mowing, edging, and trimming services to keep your grass healthy and beautiful.',
      features: ['Weekly/Bi-weekly service', 'Precision cutting', 'Edge trimming', 'Debris cleanup'],
      popular: true
    },
    {
      icon: FaTree,
      title: 'Landscape Design & Installation',
      description: 'Custom landscape design and installation services to transform your outdoor living space.',
      features: ['Custom design plans', 'Plant selection', 'Hardscape installation', 'Irrigation systems'],
      popular: false
    },
    {
      icon: FaSeedling,
      title: 'Fertilization & Weed Control',
      description: 'Professional fertilization and weed control programs to maintain a lush, healthy lawn.',
      features: ['Seasonal fertilization', 'Pre/post-emergent weed control', 'Soil analysis', 'Eco-friendly options'],
      popular: true
    },
    {
      icon: FaBug,
      title: 'Pest & Disease Management',
      description: 'Comprehensive pest control and disease prevention to protect your lawn and plants.',
      features: ['Insect control', 'Disease prevention', 'Fungus treatment', 'Integrated pest management'],
      popular: false
    },
    {
      icon: FaLeaf,
      title: 'Seasonal Cleanup',
      description: 'Complete seasonal cleanup services including leaf removal, pruning, and preparation.',
      features: ['Leaf removal', 'Pruning & trimming', 'Debris cleanup', 'Seasonal preparation'],
      popular: true
    },
    {
      icon: FaSnowflake,
      title: 'Christmas Light Installation',
      description: 'Professional Christmas light installation and removal services for the holiday season.',
      features: ['Design consultation', 'Professional installation', 'Quality LED lights', 'Safe removal'],
      popular: true,
      seasonal: true
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  }

  return (
    <section className="section bg-light">
      <div className="container">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
          ref={ref}
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Professional Lawn Care Services in{' '}
            <span className="text-primary-orange">Walker, Louisiana</span>
          </h2>
          <p className="text-xl text-text-light max-w-3xl mx-auto mb-8">
            From routine maintenance to complete landscape transformations, we provide 
            comprehensive lawn care services tailored to the unique needs of Louisiana properties.
          </p>
          
          {/* Service Areas Quick Links */}
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            {['Walker', 'Denham Springs', 'Watson', 'Baton Rouge', 'Gonzales', 'Prairieville'].map((area) => (
              <span 
                key={area}
                className="bg-white text-text-dark px-4 py-2 rounded-full text-sm font-medium shadow-sm border border-border-color"
              >
                {area}, LA
              </span>
            ))}
          </div>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service, index) => {
            const IconComponent = service.icon
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                className={`card relative group hover:shadow-2xl ${
                  service.popular ? 'ring-2 ring-primary-orange ring-opacity-20' : ''
                }`}
              >
                {/* Popular Badge */}
                {service.popular && (
                  <div className="absolute -top-3 -right-3 bg-primary-orange text-white text-xs font-bold px-3 py-1 rounded-full">
                    POPULAR
                  </div>
                )}
                
                {/* Seasonal Badge */}
                {service.seasonal && (
                  <div className="absolute -top-3 left-4 bg-accent-yellow text-primary-charcoal text-xs font-bold px-3 py-1 rounded-full">
                    SEASONAL
                  </div>
                )}

                <div className="card-header">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="bg-primary-orange/10 p-4 rounded-xl group-hover:bg-primary-orange/20 transition-colors">
                      <IconComponent className="text-2xl text-primary-orange" />
                    </div>
                    <h3 className="text-xl font-bold text-primary-charcoal mb-0">
                      {service.title}
                    </h3>
                  </div>
                </div>

                <div className="card-body">
                  <p className="text-text-light mb-6">
                    {service.description}
                  </p>

                  {/* Features List */}
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-3 text-sm">
                        <FaCheck className="text-accent-lime text-xs flex-shrink-0" />
                        <span className="text-text-light">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="card-footer">
                  <Link
                    to="/quote"
                    className="btn btn-outline w-full group-hover:btn-primary transition-all duration-300"
                  >
                    Get Quote
                    <FaArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </motion.div>
            )
          })}
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mt-16"
        >
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-border-color max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-primary-charcoal mb-4">
              Ready to Transform Your Lawn?
            </h3>
            <p className="text-text-light mb-6 max-w-2xl mx-auto">
              Contact Shane Dantone and the Southern Buck Lawn team for a free consultation 
              and personalized quote for your Walker, Louisiana property.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:(225) 369-4434"
                className="btn btn-primary btn-lg"
              >
                Call (225) 369-4434
              </a>
              <Link
                to="/services"
                className="btn btn-secondary btn-lg"
              >
                View All Services
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default ServicesSection