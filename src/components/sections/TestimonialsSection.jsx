import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FaStar, FaQuoteLeft, FaGoogle, FaFacebook } from 'react-icons/fa'

const TestimonialsSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  const testimonials = [
    {
      name: 'Tom D.',
      location: 'Walker, LA',
      rating: 5,
      text: 'They did an incredible job with an incredibly daunting project. Shane and his team transformed our overgrown yard into something beautiful. Highly recommend Southern Buck Lawn!',
      service: 'Complete Yard Transformation',
      source: 'Google Reviews'
    },
    {
      name: 'Michael D.',
      location: 'Denham Springs, LA',
      rating: 5,
      text: 'Very honest, hard working and dependable people. Well worth the money spent. Shane treats every yard like his own and it shows in the quality of work.',
      service: 'Weekly Lawn Maintenance',
      source: 'Google Reviews'
    },
    {
      name: 'Sarah M.',
      location: 'Watson, LA',
      rating: 5,
      text: 'Southern Buck Lawn exceeded our expectations! Professional, reliable, and the results speak for themselves. Our neighbors keep asking who does our lawn care.',
      service: 'Landscape Design',
      source: 'Facebook'
    },
    {
      name: 'James R.',
      location: 'Livingston Parish',
      rating: 5,
      text: 'Shane is passionate about what he does and it shows. From the first consultation to the finished project, everything was perfect. Will definitely use them again.',
      service: 'Fertilization Program',
      source: 'Google Reviews'
    },
    {
      name: 'Lisa K.',
      location: 'Prairieville, LA',
      rating: 5,
      text: 'Best lawn care service in the area! They installed our Christmas lights last year and did such a great job. Professional, affordable, and reliable.',
      service: 'Christmas Light Installation',
      source: 'Facebook'
    },
    {
      name: 'Robert H.',
      location: 'Gonzales, LA',
      rating: 5,
      text: 'Southern Buck Lawn has been taking care of our commercial property for months now. Always on time, great communication, and fair pricing. Highly recommended!',
      service: 'Commercial Maintenance',
      source: 'Google Reviews'
    }
  ]

  return (
    <section className="section bg-dark" ref={ref}>
      <div className="container">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-white">
            What Our Customers Say About{' '}
            <span className="text-accent-gold">Southern Buck Lawn</span>
          </h2>
          <p className="text-xl text-text-light max-w-3xl mx-auto mb-8">
            Don't just take our word for it. See what homeowners across Walker, Louisiana 
            and surrounding areas are saying about our lawn care services.
          </p>
          
          {/* Trust Indicators */}
          <div className="flex flex-wrap justify-center items-center gap-8 mb-8">
            <div className="flex items-center gap-3">
              <FaGoogle className="text-2xl text-primary-orange" />
              <div>
                <div className="flex text-accent-yellow">
                  {[...Array(5)].map((_, i) => (
                    <FaStar key={i} className="text-lg" />
                  ))}
                </div>
                <div className="text-sm text-text-light">5.0 on Google</div>
              </div>
            </div>
            
            <div className="flex items-center gap-3">
              <FaFacebook className="text-2xl text-blue-600" />
              <div>
                <div className="flex text-accent-yellow">
                  {[...Array(5)].map((_, i) => (
                    <FaStar key={i} className="text-lg" />
                  ))}
                </div>
                <div className="text-sm text-text-light">5.0 on Facebook</div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-background-light rounded-xl p-6 relative hover:shadow-lg transition-shadow duration-300"
            >
              {/* Quote Icon */}
              <div className="absolute -top-3 -left-3 bg-primary-orange text-white p-3 rounded-full">
                <FaQuoteLeft className="text-sm" />
              </div>

              {/* Rating */}
              <div className="flex text-accent-yellow mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <FaStar key={i} className="text-lg" />
                ))}
              </div>

              {/* Testimonial Text */}
              <blockquote className="text-text-dark mb-6 leading-relaxed">
                "{testimonial.text}"
              </blockquote>

              {/* Service */}
              <div className="bg-white rounded-lg p-3 mb-4">
                <div className="text-sm text-primary-orange font-medium">
                  Service: {testimonial.service}
                </div>
              </div>

              {/* Author Info */}
              <div className="flex items-center justify-between">
                <div>
                  <div className="font-semibold text-primary-charcoal">
                    {testimonial.name}
                  </div>
                  <div className="text-sm text-text-light">
                    {testimonial.location}
                  </div>
                </div>
                
                <div className="text-right">
                  <div className="text-xs text-text-light">
                    {testimonial.source}
                  </div>
                  <div className="text-xs text-accent-lime font-medium">
                    ✓ Verified Review
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Review CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-primary-charcoal to-primary-charcoal/90 rounded-2xl p-8 text-white max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">
              Join Our Happy Customers Across Louisiana
            </h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Experience the Southern Buck difference for yourself. We're committed to 
              earning your 5-star review through exceptional service and results.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
              <a
                href="tel:(225) 369-4434"
                className="btn btn-primary btn-lg"
              >
                Call (225) 369-4434
              </a>
              <a
                href="https://g.page/r/CZxYbQyLvADREAE/review"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline btn-lg text-white border-white hover:bg-white hover:text-primary-charcoal"
              >
                <FaGoogle className="mr-2" />
                Leave Us a Review
              </a>
            </div>
            
            <div className="text-sm text-gray-400">
              Proudly serving Walker, Denham Springs, Watson, Baton Rouge, Gonzales, 
              Prairieville, and all of Livingston Parish
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default TestimonialsSection