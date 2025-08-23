import { Context } from 'hono'
import { Layout } from '../components/layout'
import { getLocalBusinessSchema } from '../utils/schema'

export const homePage = (c: Context) => {
  const schema = getLocalBusinessSchema()
  
  const content = `
    <!-- Hero Section -->
    <section class="relative min-h-screen flex items-center justify-center overflow-hidden">
      <!-- Video Background -->
      <video autoplay muted loop playsinline class="hero-video">
        <source src="/static/videos/lawn-mowing.mp4" type="video/mp4">
        <!-- Fallback image if video doesn't load -->
        <img src="/static/images/hero-bg.jpg" alt="Lawn Care Service">
      </video>
      
      <div class="hero-overlay"></div>
      
      <div class="relative z-10 text-center px-4">
        <img src="/static/images/logo-large.png" alt="Southern Buck Lawn" class="h-48 md:h-64 mx-auto mb-8 animate-fade-in">
        
        <h1 class="text-5xl md:text-7xl font-bebas text-white mb-4">
          Professional Lawn Care & Landscaping
        </h1>
        
        <p class="text-xl md:text-2xl text-gray-300 mb-8">
          Licensed & Insured | Free Estimates | Walker, LA
        </p>
        
        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="https://forms.gle/Mut7H9YsjZDf6jUn6" target="_blank" class="bg-lime-green text-dark-gray px-8 py-4 rounded-full text-xl font-bold hover:bg-green-400 transition-all transform hover:scale-105">
            <i class="fas fa-clipboard-list mr-2"></i>Get Free Quote
          </a>
          <a href="tel:225-369-4434" class="bg-transparent border-2 border-lime-green text-lime-green px-8 py-4 rounded-full text-xl font-bold hover:bg-lime-green hover:text-dark-gray transition-all transform hover:scale-105">
            <i class="fas fa-phone mr-2"></i>Call 225-369-4434
          </a>
        </div>
        
        <!-- Scroll Indicator -->
        <div class="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <i class="fas fa-chevron-down text-3xl text-lime-green"></i>
        </div>
      </div>
    </section>
    
    <!-- Services Section -->
    <section class="py-20 bg-medium-gray">
      <div class="container mx-auto px-4">
        <h2 class="text-5xl md:text-6xl font-bebas text-center mb-4 scroll-animate">
          <span class="gradient-text">Our Services</span>
        </h2>
        <p class="text-xl text-center text-gray-400 mb-12 scroll-animate">
          Comprehensive Lawn Care & Landscaping Solutions
        </p>
        
        <div class="grid md:grid-cols-3 lg:grid-cols-4 gap-6">
          ${getServicesHTML()}
        </div>
        
        <div class="text-center mt-12">
          <a href="/services" class="bg-lime-green text-dark-gray px-8 py-3 rounded-full text-lg font-bold hover:bg-green-400 transition-all inline-block">
            View All Services <i class="fas fa-arrow-right ml-2"></i>
          </a>
        </div>
      </div>
    </section>
    
    <!-- Meet Shane Section -->
    <section class="py-20 bg-medium-gray">
      <div class="container mx-auto px-4">
        <h2 class="text-5xl md:text-6xl font-bebas text-center mb-12 scroll-animate">
          Meet <span class="gradient-text">Shane Dantone</span>
        </h2>
        
        <div class="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          <div class="scroll-animate">
            <img src="/static/images/team-shane.jpg" alt="Shane Dantone - Owner of Southern Buck Lawn" class="rounded-lg shadow-2xl mx-auto lg:mx-0 max-w-sm">
          </div>
          
          <div class="scroll-animate">
            <h3 class="text-3xl font-bebas text-lime-green mb-4">Owner & Operator</h3>
            <p class="text-gray-300 text-lg mb-4">
              Shane Dantone is a 35-year-old former industrial electrician with 13+ years of hands-on experience. After years in the electrical field, Shane followed his passion for lawn care and landscaping, investing everything into Southern Buck Lawn.
            </p>
            <p class="text-gray-300 text-lg mb-4">
              "I treat every client's yard like it's my own," Shane says. This personal approach, combined with all-new professional equipment, sets Southern Buck Lawn apart from the competition.
            </p>
            <p class="text-gray-300 text-lg mb-6">
              Based right here in Walker, LA on Brett Dr., Shane personally oversees every project to ensure the highest quality results for your property.
            </p>
            <a href="tel:225-369-4434" class="bg-lime-green text-dark-gray px-6 py-3 rounded-full font-bold hover:bg-green-400 transition-all inline-block">
              <i class="fas fa-phone mr-2"></i>Call Shane Today
            </a>
          </div>
        </div>
      </div>
    </section>
    
    <!-- Why Choose Us Section -->
    <section class="py-20 bg-dark-gray">
      <div class="container mx-auto px-4">
        <h2 class="text-5xl md:text-6xl font-bebas text-center mb-12 scroll-animate">
          Why Choose <span class="gradient-text">Southern Buck Lawn</span>?
        </h2>
        
        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div class="bg-medium-gray p-8 rounded-lg scroll-animate">
            <i class="fas fa-user-tie text-4xl text-lime-green mb-4"></i>
            <h3 class="text-2xl font-bebas mb-3">Owner-Operated</h3>
            <p class="text-gray-400">Shane Dantone personally oversees every project, bringing 13+ years of professional experience and treating your lawn as his own.</p>
          </div>
          
          <div class="bg-medium-gray p-8 rounded-lg scroll-animate">
            <i class="fas fa-tools text-4xl text-lime-green mb-4"></i>
            <h3 class="text-2xl font-bebas mb-3">All New Equipment</h3>
            <p class="text-gray-400">We've invested in brand new, professional-grade equipment to deliver the highest quality results for your property.</p>
          </div>
          
          <div class="bg-medium-gray p-8 rounded-lg scroll-animate">
            <i class="fas fa-shield-alt text-4xl text-lime-green mb-4"></i>
            <h3 class="text-2xl font-bebas mb-3">Licensed & Insured</h3>
            <p class="text-gray-400">Fully licensed and insured for your peace of mind. We stand behind our work with complete professionalism.</p>
          </div>
          
          <div class="bg-medium-gray p-8 rounded-lg scroll-animate">
            <i class="fas fa-heart text-4xl text-lime-green mb-4"></i>
            <h3 class="text-2xl font-bebas mb-3">Passion-Driven</h3>
            <p class="text-gray-400">This isn't just a business—it's our passion. We take pride in every cut, every trim, and every landscape we create.</p>
          </div>
          
          <div class="bg-medium-gray p-8 rounded-lg scroll-animate">
            <i class="fas fa-map-marked-alt text-4xl text-lime-green mb-4"></i>
            <h3 class="text-2xl font-bebas mb-3">Local Expertise</h3>
            <p class="text-gray-400">Based in Walker, LA, we understand the unique lawn care needs of our Louisiana climate and soil conditions.</p>
          </div>
          
          <div class="bg-medium-gray p-8 rounded-lg scroll-animate">
            <i class="fas fa-dollar-sign text-4xl text-lime-green mb-4"></i>
            <h3 class="text-2xl font-bebas mb-3">Free Estimates</h3>
            <p class="text-gray-400">Get a detailed, no-obligation quote for your project. We believe in transparent, fair pricing for all our services.</p>
          </div>
        </div>
      </div>
    </section>
    
    <!-- Testimonials Section -->
    <section class="py-20 bg-medium-gray">
      <div class="container mx-auto px-4">
        <h2 class="text-5xl md:text-6xl font-bebas text-center mb-12 scroll-animate">
          What Our <span class="gradient-text">Customers Say</span>
        </h2>
        
        <div class="grid md:grid-cols-3 gap-8">
          <div class="bg-dark-gray p-8 rounded-lg scroll-animate">
            <div class="flex mb-4">
              <i class="fas fa-star text-lime-green"></i>
              <i class="fas fa-star text-lime-green"></i>
              <i class="fas fa-star text-lime-green"></i>
              <i class="fas fa-star text-lime-green"></i>
              <i class="fas fa-star text-lime-green"></i>
            </div>
            <p class="text-gray-300 mb-4">"Shane and his team transformed our yard! Professional, punctual, and the attention to detail is outstanding. Highly recommend Southern Buck Lawn!"</p>
            <p class="text-lime-green font-bold">- Sarah M., Walker</p>
          </div>
          
          <div class="bg-dark-gray p-8 rounded-lg scroll-animate">
            <div class="flex mb-4">
              <i class="fas fa-star text-lime-green"></i>
              <i class="fas fa-star text-lime-green"></i>
              <i class="fas fa-star text-lime-green"></i>
              <i class="fas fa-star text-lime-green"></i>
              <i class="fas fa-star text-lime-green"></i>
            </div>
            <p class="text-gray-300 mb-4">"Best lawn service in the area! They installed our new landscape design and it looks amazing. Fair pricing and excellent work."</p>
            <p class="text-lime-green font-bold">- Mike T., Denham Springs</p>
          </div>
          
          <div class="bg-dark-gray p-8 rounded-lg scroll-animate">
            <div class="flex mb-4">
              <i class="fas fa-star text-lime-green"></i>
              <i class="fas fa-star text-lime-green"></i>
              <i class="fas fa-star text-lime-green"></i>
              <i class="fas fa-star text-lime-green"></i>
              <i class="fas fa-star text-lime-green"></i>
            </div>
            <p class="text-gray-300 mb-4">"Reliable weekly mowing service. Shane treats our lawn like it's his own. You can tell he takes pride in his work!"</p>
            <p class="text-lime-green font-bold">- Jennifer R., Port Vincent</p>
          </div>
        </div>
      </div>
    </section>
    
    <!-- Portfolio Section -->
    <section class="py-20 bg-dark-gray">
      <div class="container mx-auto px-4">
        <h2 class="text-5xl md:text-6xl font-bebas text-center mb-12 scroll-animate">
          Our <span class="gradient-text">Recent Work</span>
        </h2>
        
        <div class="grid md:grid-cols-3 gap-6">
          <div class="relative group overflow-hidden rounded-lg scroll-animate">
            <img src="/static/images/portfolio/lawn-2.jpg" alt="Lawn Transformation Before and After" class="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300">
            <div class="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-4">
              <p class="text-white font-bold">Complete Lawn Transformation</p>
            </div>
          </div>
          
          <div class="relative group overflow-hidden rounded-lg scroll-animate">
            <img src="/static/images/portfolio/landscape-2.jpg" alt="Landscaping Transformation 2017-2019" class="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300">
            <div class="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-4">
              <p class="text-white font-bold">Garden Design & Installation</p>
            </div>
          </div>
          
          <div class="relative group overflow-hidden rounded-lg scroll-animate">
            <img src="/static/images/portfolio/hardscape-2.jpg" alt="Backyard Patio Transformation" class="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300">
            <div class="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-4">
              <p class="text-white font-bold">Complete Backyard Makeover</p>
            </div>
          </div>
        </div>
        
        <div class="text-center mt-12">
          <a href="/portfolio" class="bg-lime-green text-dark-gray px-8 py-3 rounded-full text-lg font-bold hover:bg-green-400 transition-all inline-block">
            View Full Portfolio <i class="fas fa-arrow-right ml-2"></i>
          </a>
        </div>
      </div>
    </section>
    
    <!-- CTA Section -->
    <section class="py-20 bg-lime-green" id="quote-form">
      <div class="container mx-auto px-4 text-center">
        <h2 class="text-5xl md:text-6xl font-bebas text-dark-gray mb-6">
          Ready to Transform Your Lawn?
        </h2>
        <p class="text-xl text-dark-gray/80 mb-8">
          Get your free estimate today! Call now or request a quote online.
        </p>
        
        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="tel:225-369-4434" class="bg-dark-gray text-lime-green px-8 py-4 rounded-full text-xl font-bold hover:bg-black transition-all transform hover:scale-105">
            <i class="fas fa-phone mr-2"></i>Call 225-369-4434
          </a>
          <a href="https://forms.gle/Mut7H9YsjZDf6jUn6" target="_blank" class="bg-white text-dark-gray px-8 py-4 rounded-full text-xl font-bold hover:bg-gray-100 transition-all transform hover:scale-105">
            <i class="fas fa-envelope mr-2"></i>Request Online Quote
          </a>
        </div>
      </div>
    </section>
  `
  
  return c.html(Layout({
    title: 'Southern Buck Lawn | Professional Lawn Care & Landscaping in Walker, LA',
    description: 'Southern Buck Lawn offers professional lawn care and landscaping services in Walker, LA and surrounding areas. Licensed, insured, and owner-operated. Call 225-369-4434 for a free estimate.',
    children: content,
    canonicalUrl: 'https://southernbucklawn.com',
    schema
  }))
}

function getServicesHTML() {
  const services = [
    { icon: 'fa-grass', name: 'Weekly/Bi-Weekly Mowing', desc: 'Professional lawn cutting services' },
    { icon: 'fa-tree', name: 'Shrub Trimming', desc: 'Expert pruning and shaping' },
    { icon: 'fa-seedling', name: 'Mulching', desc: 'Fresh mulch installation' },
    { icon: 'fa-leaf', name: 'Weed Removal', desc: 'Complete weed control' },
    { icon: 'fa-home', name: 'Gutter Cleaning', desc: 'Clear and maintain gutters' },
    { icon: 'fa-tools', name: 'Lawn Maintenance', desc: 'Complete lawn care packages' },
    { icon: 'fa-drafting-compass', name: 'Landscape Design', desc: '3D planning and design' },
    { icon: 'fa-chess-board', name: 'Hardscapes/Pavers', desc: 'Patios and walkways' }
  ]
  
  return services.map(service => `
    <div class="bg-dark-gray p-6 rounded-lg hover:bg-black transition-colors scroll-animate group">
      <i class="fas ${service.icon} text-3xl text-lime-green mb-4 group-hover:scale-110 transition-transform"></i>
      <h3 class="text-xl font-bebas mb-2">${service.name}</h3>
      <p class="text-gray-400 text-sm">${service.desc}</p>
    </div>
  `).join('')
}