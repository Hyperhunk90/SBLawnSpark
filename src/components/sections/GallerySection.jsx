import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FaTimes, FaChevronLeft, FaChevronRight } from 'react-icons/fa'

const GallerySection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })
  
  const [selectedImage, setSelectedImage] = useState(null)

  const galleryItems = [
    {
      src: '/assets/images/lawn_care_before_after_1.png',
      alt: 'Before and after lawn care transformation in Walker, LA',
      category: 'Lawn Care',
      title: 'Lawn Restoration Project',
      description: 'Complete lawn renovation in Walker, Louisiana'
    },
    {
      src: '/assets/images/lawn_care_before_after_2.webp',
      alt: 'Professional lawn mowing and maintenance Walker LA',
      category: 'Maintenance',
      title: 'Weekly Maintenance Program',
      description: 'Regular lawn care maintenance in Livingston Parish'
    },
    {
      src: '/assets/images/landscaping_before_after_1.png',
      alt: 'Landscape design and installation Walker Louisiana',
      category: 'Landscaping',
      title: 'Landscape Design & Installation',
      description: 'Custom landscape design in Walker, LA'
    },
    {
      src: '/assets/images/hardscape_before_after_1.jpg',
      alt: 'Hardscape installation Walker LA',
      category: 'Hardscaping',
      title: 'Hardscape Installation',
      description: 'Professional hardscaping services'
    },
    {
      src: '/assets/images/shrub_trimming_1.jpeg',
      alt: 'Professional shrub trimming and pruning Walker LA',
      category: 'Pruning',
      title: 'Shrub Trimming & Pruning',
      description: 'Expert plant care and maintenance'
    }
  ]

  const categories = ['All', 'Lawn Care', 'Landscaping', 'Maintenance', 'Hardscaping', 'Pruning']
  const [activeCategory, setActiveCategory] = useState('All')

  const filteredGallery = activeCategory === 'All' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === activeCategory)

  const openModal = (image) => {
    setSelectedImage(image)
    document.body.style.overflow = 'hidden'
  }

  const closeModal = () => {
    setSelectedImage(null)
    document.body.style.overflow = 'unset'
  }

  const navigateImage = (direction) => {
    const currentIndex = filteredGallery.findIndex(item => item.src === selectedImage.src)
    let newIndex
    
    if (direction === 'next') {
      newIndex = currentIndex === filteredGallery.length - 1 ? 0 : currentIndex + 1
    } else {
      newIndex = currentIndex === 0 ? filteredGallery.length - 1 : currentIndex - 1
    }
    
    setSelectedImage(filteredGallery[newIndex])
  }

  return (
    <section className="section bg-light" ref={ref}>
      <div className="container">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Our Work in{' '}
            <span className="text-primary-orange">Walker & Beyond</span>
          </h2>
          <p className="text-xl text-text-light max-w-3xl mx-auto mb-8">
            See the transformation Southern Buck Lawn brings to properties across 
            Livingston Parish and surrounding Louisiana communities.
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                activeCategory === category
                  ? 'bg-primary-orange text-white shadow-lg scale-105'
                  : 'bg-white text-text-dark hover:bg-primary-orange/10 hover:text-primary-orange border border-border-color'
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Gallery Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence mode="wait">
            {filteredGallery.map((item, index) => (
              <motion.div
                key={item.src}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group cursor-pointer relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300"
                onClick={() => openModal(item)}
              >
                <div className="aspect-w-4 aspect-h-3 relative">
                  <img
                    src={item.src}
                    alt={item.alt}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-primary-charcoal/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  {/* Content */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <div className="text-xs font-medium text-accent-yellow mb-1 uppercase tracking-wide">
                      {item.category}
                    </div>
                    <h3 className="text-lg font-bold mb-2">
                      {item.title}
                    </h3>
                    <p className="text-sm text-gray-200">
                      {item.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mt-16"
        >
          <div className="bg-white rounded-2xl p-8 shadow-lg max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-primary-charcoal mb-4">
              Ready to Transform Your Property?
            </h3>
            <p className="text-text-light mb-6">
              Let's create your own before and after success story in Walker, Louisiana.
            </p>
            <a
              href="tel:(225) 369-4434"
              className="btn btn-primary btn-lg"
            >
              Get Your Free Quote Today
            </a>
          </div>
        </motion.div>
      </div>

      {/* Image Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90"
            onClick={closeModal}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="relative max-w-4xl max-h-[90vh] w-full"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={closeModal}
                className="absolute -top-12 right-0 text-white hover:text-accent-yellow transition-colors z-10"
              >
                <FaTimes size={24} />
              </button>

              {/* Navigation Buttons */}
              {filteredGallery.length > 1 && (
                <>
                  <button
                    onClick={() => navigateImage('prev')}
                    className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white hover:text-accent-yellow transition-colors z-10 bg-black/50 rounded-full p-3"
                  >
                    <FaChevronLeft size={20} />
                  </button>
                  <button
                    onClick={() => navigateImage('next')}
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white hover:text-accent-yellow transition-colors z-10 bg-black/50 rounded-full p-3"
                  >
                    <FaChevronRight size={20} />
                  </button>
                </>
              )}

              {/* Image */}
              <img
                src={selectedImage.src}
                alt={selectedImage.alt}
                className="w-full h-full object-contain rounded-lg"
              />

              {/* Image Info */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent text-white p-6 rounded-b-lg">
                <div className="text-sm font-medium text-accent-yellow mb-1 uppercase tracking-wide">
                  {selectedImage.category}
                </div>
                <h3 className="text-xl font-bold mb-2">
                  {selectedImage.title}
                </h3>
                <p className="text-gray-200">
                  {selectedImage.description}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}

export default GallerySection