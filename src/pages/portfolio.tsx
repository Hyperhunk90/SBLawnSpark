import { Context } from 'hono'
import { Layout } from '../components/layout'

export const portfolioPage = (c: Context) => {
  const content = `
    <!-- Portfolio Header -->
    <section class="pt-32 pb-20 bg-gradient-to-b from-dark-gray to-medium-gray">
      <div class="container mx-auto px-4">
        <h1 class="text-5xl md:text-7xl font-bebas text-center mb-6">
          Our <span class="gradient-text">Portfolio</span>
        </h1>
        <p class="text-xl text-center text-gray-400 max-w-3xl mx-auto">
          Browse through our recent projects showcasing the quality and attention to detail that Southern Buck Lawn brings to every property in Walker, LA and surrounding areas.
        </p>
      </div>
    </section>
    
    <!-- Portfolio Filter -->
    <section class="py-8 bg-dark-gray sticky top-20 z-30">
      <div class="container mx-auto px-4">
        <div class="flex flex-wrap justify-center gap-4">
          <button class="portfolio-filter active bg-lime-green text-dark-gray px-6 py-2 rounded-full font-bold" data-filter="all">
            All Projects
          </button>
          <button class="portfolio-filter bg-medium-gray text-white px-6 py-2 rounded-full hover:bg-lime-green hover:text-dark-gray transition-all" data-filter="lawn">
            Lawn Care
          </button>
          <button class="portfolio-filter bg-medium-gray text-white px-6 py-2 rounded-full hover:bg-lime-green hover:text-dark-gray transition-all" data-filter="landscape">
            Landscaping
          </button>
          <button class="portfolio-filter bg-medium-gray text-white px-6 py-2 rounded-full hover:bg-lime-green hover:text-dark-gray transition-all" data-filter="hardscape">
            Hardscapes
          </button>
          <button class="portfolio-filter bg-medium-gray text-white px-6 py-2 rounded-full hover:bg-lime-green hover:text-dark-gray transition-all" data-filter="outdoor">
            Outdoor Living
          </button>
        </div>
      </div>
    </section>
    
    <!-- Portfolio Grid -->
    <section class="py-20 bg-medium-gray">
      <div class="container mx-auto px-4">
        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8" id="portfolio-grid">
          <!-- Lawn Care Projects -->
          <div class="portfolio-item" data-category="lawn">
            <div class="bg-dark-gray rounded-lg overflow-hidden group">
              <div class="relative h-64 overflow-hidden">
                <img src="/static/images/portfolio/lawn-1.jpg" alt="Weekly Lawn Maintenance" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300">
                <div class="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
              </div>
              <div class="p-6">
                <h3 class="text-2xl font-bebas text-lime-green mb-2">Weekly Lawn Maintenance</h3>
                <p class="text-gray-400 mb-4">Complete lawn care package including mowing, edging, and trimming for a residential property in Walker, LA.</p>
                <div class="flex flex-wrap gap-2">
                  <span class="bg-lime-green/20 text-lime-green px-3 py-1 rounded-full text-sm">Mowing</span>
                  <span class="bg-lime-green/20 text-lime-green px-3 py-1 rounded-full text-sm">Edging</span>
                  <span class="bg-lime-green/20 text-lime-green px-3 py-1 rounded-full text-sm">Walker, LA</span>
                </div>
              </div>
            </div>
          </div>
          
          <div class="portfolio-item" data-category="lawn">
            <div class="bg-dark-gray rounded-lg overflow-hidden group">
              <div class="relative h-64 overflow-hidden">
                <img src="/static/images/portfolio/lawn-2.jpg" alt="Commercial Property Maintenance" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300">
                <div class="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
              </div>
              <div class="p-6">
                <h3 class="text-2xl font-bebas text-lime-green mb-2">Commercial Property Care</h3>
                <p class="text-gray-400 mb-4">Large-scale commercial property maintenance with bi-weekly service schedule in Denham Springs.</p>
                <div class="flex flex-wrap gap-2">
                  <span class="bg-lime-green/20 text-lime-green px-3 py-1 rounded-full text-sm">Commercial</span>
                  <span class="bg-lime-green/20 text-lime-green px-3 py-1 rounded-full text-sm">Denham Springs</span>
                </div>
              </div>
            </div>
          </div>
          
          <!-- Landscaping Projects -->
          <div class="portfolio-item" data-category="landscape">
            <div class="bg-dark-gray rounded-lg overflow-hidden group">
              <div class="relative h-64 overflow-hidden">
                <img src="/static/images/portfolio/landscape-1.jpg" alt="Complete Landscape Renovation" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300">
                <div class="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
              </div>
              <div class="p-6">
                <h3 class="text-2xl font-bebas text-lime-green mb-2">Complete Landscape Renovation</h3>
                <p class="text-gray-400 mb-4">Full property transformation with new plants, shrubs, and mulch beds in Port Vincent, LA.</p>
                <div class="flex flex-wrap gap-2">
                  <span class="bg-lime-green/20 text-lime-green px-3 py-1 rounded-full text-sm">Design</span>
                  <span class="bg-lime-green/20 text-lime-green px-3 py-1 rounded-full text-sm">Installation</span>
                  <span class="bg-lime-green/20 text-lime-green px-3 py-1 rounded-full text-sm">Port Vincent</span>
                </div>
              </div>
            </div>
          </div>
          
          <div class="portfolio-item" data-category="landscape">
            <div class="bg-dark-gray rounded-lg overflow-hidden group">
              <div class="relative h-64 overflow-hidden">
                <img src="/static/images/portfolio/landscape-2.jpg" alt="Flower Bed Installation" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300">
                <div class="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
              </div>
              <div class="p-6">
                <h3 class="text-2xl font-bebas text-lime-green mb-2">Seasonal Flower Bed Design</h3>
                <p class="text-gray-400 mb-4">Custom flower bed installation with seasonal colors and perennials in Livingston, LA.</p>
                <div class="flex flex-wrap gap-2">
                  <span class="bg-lime-green/20 text-lime-green px-3 py-1 rounded-full text-sm">Flower Beds</span>
                  <span class="bg-lime-green/20 text-lime-green px-3 py-1 rounded-full text-sm">Livingston</span>
                </div>
              </div>
            </div>
          </div>
          
          <!-- Hardscape Projects -->
          <div class="portfolio-item" data-category="hardscape">
            <div class="bg-dark-gray rounded-lg overflow-hidden group">
              <div class="relative h-64 overflow-hidden">
                <img src="/static/images/portfolio/hardscape-1.jpg" alt="Paver Patio Installation" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300">
                <div class="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
              </div>
              <div class="p-6">
                <h3 class="text-2xl font-bebas text-lime-green mb-2">Custom Paver Patio</h3>
                <p class="text-gray-400 mb-4">Beautiful paver patio installation with integrated seating area in Walker, LA.</p>
                <div class="flex flex-wrap gap-2">
                  <span class="bg-lime-green/20 text-lime-green px-3 py-1 rounded-full text-sm">Pavers</span>
                  <span class="bg-lime-green/20 text-lime-green px-3 py-1 rounded-full text-sm">Patio</span>
                  <span class="bg-lime-green/20 text-lime-green px-3 py-1 rounded-full text-sm">Walker</span>
                </div>
              </div>
            </div>
          </div>
          
          <div class="portfolio-item" data-category="hardscape">
            <div class="bg-dark-gray rounded-lg overflow-hidden group">
              <div class="relative h-64 overflow-hidden">
                <img src="/static/images/portfolio/retaining-wall.jpg" alt="Retaining Wall Construction" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300">
                <div class="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
              </div>
              <div class="p-6">
                <h3 class="text-2xl font-bebas text-lime-green mb-2">Retaining Wall System</h3>
                <p class="text-gray-400 mb-4">Engineered retaining wall for erosion control and landscape elevation in Denham Springs.</p>
                <div class="flex flex-wrap gap-2">
                  <span class="bg-lime-green/20 text-lime-green px-3 py-1 rounded-full text-sm">Retaining Wall</span>
                  <span class="bg-lime-green/20 text-lime-green px-3 py-1 rounded-full text-sm">Denham Springs</span>
                </div>
              </div>
            </div>
          </div>
          
          <!-- Outdoor Living Projects -->
          <div class="portfolio-item" data-category="outdoor">
            <div class="bg-dark-gray rounded-lg overflow-hidden group">
              <div class="relative h-64 overflow-hidden">
                <img src="/static/images/portfolio/fire-pit.jpg" alt="Custom Fire Pit" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300">
                <div class="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
              </div>
              <div class="p-6">
                <h3 class="text-2xl font-bebas text-lime-green mb-2">Custom Fire Pit Area</h3>
                <p class="text-gray-400 mb-4">Stone fire pit with surrounding seating area perfect for Louisiana evenings in Walker.</p>
                <div class="flex flex-wrap gap-2">
                  <span class="bg-lime-green/20 text-lime-green px-3 py-1 rounded-full text-sm">Fire Pit</span>
                  <span class="bg-lime-green/20 text-lime-green px-3 py-1 rounded-full text-sm">Walker</span>
                </div>
              </div>
            </div>
          </div>
          
          <div class="portfolio-item" data-category="outdoor">
            <div class="bg-dark-gray rounded-lg overflow-hidden group">
              <div class="relative h-64 overflow-hidden">
                <img src="/static/images/portfolio/outdoor-kitchen.jpg" alt="Outdoor Kitchen" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300">
                <div class="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
              </div>
              <div class="p-6">
                <h3 class="text-2xl font-bebas text-lime-green mb-2">Outdoor Kitchen Installation</h3>
                <p class="text-gray-400 mb-4">Complete outdoor kitchen with grill station, prep area, and bar seating in Port Vincent.</p>
                <div class="flex flex-wrap gap-2">
                  <span class="bg-lime-green/20 text-lime-green px-3 py-1 rounded-full text-sm">Outdoor Kitchen</span>
                  <span class="bg-lime-green/20 text-lime-green px-3 py-1 rounded-full text-sm">Port Vincent</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    
    <!-- CTA Section -->
    <section class="py-20 bg-lime-green">
      <div class="container mx-auto px-4 text-center">
        <h2 class="text-4xl md:text-5xl font-bebas text-dark-gray mb-6">
          Let's Create Something Beautiful Together
        </h2>
        <p class="text-xl text-dark-gray/80 mb-8">
          Ready to transform your outdoor space? Contact us today!
        </p>
        
        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="tel:225-369-4434" class="bg-dark-gray text-lime-green px-8 py-4 rounded-full text-xl font-bold hover:bg-black transition-all">
            <i class="fas fa-phone mr-2"></i>Call 225-369-4434
          </a>
          <a href="https://forms.gle/Mut7H9YsjZDf6jUn6" target="_blank" class="bg-white text-dark-gray px-8 py-4 rounded-full text-xl font-bold hover:bg-gray-100 transition-all">
            <i class="fas fa-envelope mr-2"></i>Get Free Quote
          </a>
        </div>
      </div>
    </section>
    
    <script>
      // Portfolio Filter
      document.addEventListener('DOMContentLoaded', () => {
        const filters = document.querySelectorAll('.portfolio-filter');
        const items = document.querySelectorAll('.portfolio-item');
        
        filters.forEach(filter => {
          filter.addEventListener('click', () => {
            // Update active class
            filters.forEach(f => {
              f.classList.remove('active', 'bg-lime-green', 'text-dark-gray');
              f.classList.add('bg-medium-gray', 'text-white');
            });
            filter.classList.add('active', 'bg-lime-green', 'text-dark-gray');
            filter.classList.remove('bg-medium-gray', 'text-white');
            
            // Filter items
            const category = filter.dataset.filter;
            items.forEach(item => {
              if (category === 'all' || item.dataset.category === category) {
                item.style.display = 'block';
              } else {
                item.style.display = 'none';
              }
            });
          });
        });
      });
    </script>
  `
  
  return c.html(Layout({
    title: 'Portfolio - Lawn Care & Landscaping Projects | Southern Buck Lawn',
    description: 'View our portfolio of completed lawn care and landscaping projects in Walker, Denham Springs, Port Vincent, and Livingston LA. Quality work by Southern Buck Lawn.',
    children: content,
    canonicalUrl: 'https://southernbucklawn.com/portfolio'
  }))
}