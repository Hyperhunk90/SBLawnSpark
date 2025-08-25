import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { 
  FaUser, 
  FaAward, 
  FaShieldAlt, 
  FaHeart,
  FaTools,
  FaLeaf,
  FaCheckCircle
} from 'react-icons/fa'

const AboutSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  const stats = [
    {
      icon: FaAward,
      number: '13+',
      label: 'Years Experience',
      description: 'Industrial electrician background'
    },
    {
      icon: FaShieldAlt,
      number: '100%',
      label: 'Licensed & Insured',
      description: 'Fully bonded for protection'
    },
    {
      icon: FaLeaf,
      number: '2024',
      label: 'Established',
      description: 'Serving Walker & surrounding areas'
    },
    {
      icon: FaHeart,
      number: '100%',
      label: 'Satisfaction Rate',
      description: 'Customer happiness guaranteed'
    }
  ]

  const values = [
    {
      icon: FaCheckCircle,
      title: 'Quality Craftsmanship',
      description: 'Every project completed with precision and attention to detail'
    },
    {
      icon: FaCheckCircle,
      title: 'Reliable Service',
      description: 'Consistent, dependable service you can count on'
    },
    {
      icon: FaCheckCircle,
      title: 'Local Expertise',
      description: 'Deep understanding of Louisiana climate and soil conditions'
    },
    {
      icon: FaCheckCircle,
      title: 'Eco-Friendly Practices',
      description: 'Sustainable methods that protect our Louisiana environment'
    }
  ]

  return (
    <section className="section bg-dark" ref={ref}>
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Image & Stats */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            {/* Main Image */}
            <div className="relative">
              <div className="relative overflow-hidden rounded-2xl shadow-2xl max-w-xs mx-auto">
                <img
                  src="/assets/images/shane_dantone_headshot.jpg"
                  alt="Shane Dantone - Owner of Southern Buck Lawn Care"
                  className="w-full h-[250px] object-cover object-center"
                />
                
                {/* Overlay with quote */}
                <div className="absolute inset-0 bg-gradient-to-t from-primary-charcoal/80 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 text-white">
                  <blockquote className="text-lg font-medium mb-2">
                    "Your yard isn't just grass and plants - it's where life happens. 
                    I treat every property like my own."
                  </blockquote>
                  <cite className="text-accent-yellow font-semibold">
                    — Shane Dantone, Owner
                  </cite>
                </div>
              </div>

              {/* Floating Stats Card */}
              <div className="absolute -bottom-4 -right-4 bg-white rounded-xl shadow-xl p-3 border border-border-color max-w-[100px]">
                <div className="text-center">
                  <div className="text-xl font-bold text-primary-orange mb-1">13+</div>
                  <div className="text-xs text-text-light">Years in Trade</div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column - Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-primary-orange/20 to-accent-gold/20 text-accent-gold px-4 py-2 rounded-full text-sm font-bold mb-6 border border-accent-gold/30">
              <FaUser />
              Meet Shane Dantone
            </div>

            <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-white">
              Passionate About Creating Beautiful{' '}
              <span className="text-accent-gold">Outdoor Spaces</span>
            </h2>

            <div className="space-y-6 text-lg text-gray-300 leading-relaxed">
              <p>
                Hi, I'm <strong className="text-accent-gold">Shane Dantone</strong>, 
                owner and operator of Southern Buck Lawn. For 13 years, I worked as an 
                industrial electrician, but my true passion has always been outdoors—designing 
                and maintaining beautiful landscapes.
              </p>

              <p>
                Born and raised in Louisiana, I understand the unique challenges our climate 
                presents. From the humid summers to unpredictable weather patterns, I know 
                exactly what it takes to keep your lawn healthy and thriving year-round.
              </p>

              <p>
                When you choose Southern Buck Lawn, you're not just hiring a lawn care service—you're 
                partnering with someone who genuinely cares about making your outdoor space a place 
                where memories are made. <strong className="text-primary-charcoal">We're passionate 
                about making Livingston Parish beautiful, one yard at a time.</strong>
              </p>
            </div>

            {/* Values Grid */}
            <div className="grid sm:grid-cols-2 gap-4 mt-8">
              {values.map((value, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                  className="flex items-start gap-3 p-4 bg-background-light rounded-lg"
                >
                  <value.icon className="text-accent-lime text-lg mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-primary-charcoal mb-1">
                      {value.title}
                    </h4>
                    <p className="text-sm text-text-light mb-0">
                      {value.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-20"
        >
          <div className="bg-gradient-to-r from-primary-charcoal to-primary-charcoal/90 rounded-2xl p-8 lg:p-12 text-white">
            <div className="text-center mb-12">
              <h3 className="text-3xl font-bold mb-4">
                Why Walker Homeowners Trust Southern Buck Lawn
              </h3>
              <p className="text-gray-300 max-w-2xl mx-auto">
                Our commitment to excellence and local expertise sets us apart in the 
                Livingston Parish lawn care industry.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={inView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                  className="text-center group"
                >
                  <div className="bg-white/10 backdrop-blur-sm rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 group-hover:bg-white/20 transition-all duration-300">
                    <stat.icon className="text-2xl text-accent-yellow" />
                  </div>
                  
                  <div className="text-3xl lg:text-4xl font-bold text-accent-yellow mb-2">
                    {stat.number}
                  </div>
                  
                  <div className="font-semibold mb-2">
                    {stat.label}
                  </div>
                  
                  <div className="text-sm text-gray-300">
                    {stat.description}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mt-16"
        >
          <div className="bg-background-light rounded-2xl p-8 max-w-3xl mx-auto">
            <FaTools className="text-4xl text-primary-orange mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-primary-charcoal mb-4">
              Ready to Experience the Southern Buck Difference?
            </h3>
            <p className="text-text-light mb-6">
              Let Shane and the team transform your Walker, Louisiana property into 
              the outdoor space you've always dreamed of.
            </p>
            
            <a
              href="tel:(225) 369-4434"
              className="btn btn-primary btn-lg"
            >
              Call Shane Today: (225) 369-4434
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default AboutSection