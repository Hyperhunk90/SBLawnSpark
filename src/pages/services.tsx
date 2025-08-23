import { Context } from 'hono'
import { Layout } from '../components/layout'

export const servicesPage = (c: Context) => {
  const content = `
    <!-- Services Header -->
    <section class="pt-32 pb-20 bg-gradient-to-b from-dark-gray to-medium-gray">
      <div class="container mx-auto px-4">
        <h1 class="text-5xl md:text-7xl font-bebas text-center mb-6">
          Our <span class="gradient-text">Services</span>
        </h1>
        <p class="text-xl text-center text-gray-400 max-w-3xl mx-auto">
          From weekly lawn maintenance to complete landscape transformations, Southern Buck Lawn provides comprehensive lawn care and landscaping services throughout Walker, LA and surrounding areas.
        </p>
      </div>
    </section>
    
    <!-- Detailed Services Grid -->
    <section class="py-20 bg-dark-gray">
      <div class="container mx-auto px-4">
        <div class="grid md:grid-cols-2 gap-8">
          <!-- Lawn Care Services -->
          <div class="bg-medium-gray p-8 rounded-lg">
            <h2 class="text-3xl font-bebas text-lime-green mb-6">Lawn Care Services</h2>
            
            <div class="space-y-6">
              <div class="border-l-4 border-lime-green pl-4">
                <h3 class="text-xl font-bold mb-2">Weekly/Bi-Weekly Mowing</h3>
                <p class="text-gray-400">Professional lawn cutting with precision edging, trimming, and debris cleanup. Customized schedules to keep your lawn looking perfect year-round.</p>
              </div>
              
              <div class="border-l-4 border-lime-green pl-4">
                <h3 class="text-xl font-bold mb-2">Lawn Maintenance Packages</h3>
                <p class="text-gray-400">Comprehensive care including mowing, edging, fertilization, and seasonal treatments to maintain a healthy, vibrant lawn.</p>
              </div>
              
              <div class="border-l-4 border-lime-green pl-4">
                <h3 class="text-xl font-bold mb-2">Weed Removal & Control</h3>
                <p class="text-gray-400">Complete weed management solutions including pre-emergent treatments and manual removal for a pristine lawn.</p>
              </div>
              
              <div class="border-l-4 border-lime-green pl-4">
                <h3 class="text-xl font-bold mb-2">Commercial Lawn Maintenance</h3>
                <p class="text-gray-400">Reliable commercial property maintenance for businesses, HOAs, and property managers. Keep your property looking professional.</p>
              </div>
            </div>
          </div>
          
          <!-- Landscaping Services -->
          <div class="bg-medium-gray p-8 rounded-lg">
            <h2 class="text-3xl font-bebas text-lime-green mb-6">Landscaping Services</h2>
            
            <div class="space-y-6">
              <div class="border-l-4 border-lime-green pl-4">
                <h3 class="text-xl font-bold mb-2">Landscape Design & Planning</h3>
                <p class="text-gray-400">Professional 3D landscape design software to visualize your dream outdoor space before installation begins.</p>
              </div>
              
              <div class="border-l-4 border-lime-green pl-4">
                <h3 class="text-xl font-bold mb-2">Shrub Services</h3>
                <p class="text-gray-400">Expert trimming, removal, and planting of shrubs and bushes. Shape and maintain your landscape's natural beauty.</p>
              </div>
              
              <div class="border-l-4 border-lime-green pl-4">
                <h3 class="text-xl font-bold mb-2">Mulching & Re-mulching</h3>
                <p class="text-gray-400">Fresh mulch installation to protect plants, prevent weeds, and enhance your landscape's appearance.</p>
              </div>
              
              <div class="border-l-4 border-lime-green pl-4">
                <h3 class="text-xl font-bold mb-2">Flower Bed Installation</h3>
                <p class="text-gray-400">Design and install beautiful flower beds with seasonal colors and perennials perfect for Louisiana's climate.</p>
              </div>
            </div>
          </div>
          
          <!-- Hardscaping Services -->
          <div class="bg-medium-gray p-8 rounded-lg">
            <h2 class="text-3xl font-bebas text-lime-green mb-6">Hardscaping & Construction</h2>
            
            <div class="space-y-6">
              <div class="border-l-4 border-lime-green pl-4">
                <h3 class="text-xl font-bold mb-2">Hardscapes & Pavers</h3>
                <p class="text-gray-400">Custom paver patios, walkways, and driveways that enhance your property's functionality and curb appeal.</p>
              </div>
              
              <div class="border-l-4 border-lime-green pl-4">
                <h3 class="text-xl font-bold mb-2">Retaining Walls</h3>
                <p class="text-gray-400">Engineered retaining walls for erosion control, terraced gardens, and landscape elevation changes.</p>
              </div>
              
              <div class="border-l-4 border-lime-green pl-4">
                <h3 class="text-xl font-bold mb-2">Fire Pits & Outdoor Kitchens</h3>
                <p class="text-gray-400">Create the perfect outdoor entertainment space with custom fire pits and fully equipped outdoor kitchens.</p>
              </div>
              
              <div class="border-l-4 border-lime-green pl-4">
                <h3 class="text-xl font-bold mb-2">Outdoor Living Design</h3>
                <p class="text-gray-400">Complete backyard transformations including pergolas, seating areas, and custom outdoor living spaces.</p>
              </div>
            </div>
          </div>
          
          <!-- Additional Services -->
          <div class="bg-medium-gray p-8 rounded-lg">
            <h2 class="text-3xl font-bebas text-lime-green mb-6">Additional Services</h2>
            
            <div class="space-y-6">
              <div class="border-l-4 border-lime-green pl-4">
                <h3 class="text-xl font-bold mb-2">Gutter Cleaning</h3>
                <p class="text-gray-400">Professional gutter cleaning and maintenance to protect your home from water damage.</p>
              </div>
              
              <div class="border-l-4 border-lime-green pl-4">
                <h3 class="text-xl font-bold mb-2">Pressure Washing</h3>
                <p class="text-gray-400">High-pressure cleaning for driveways, sidewalks, patios, and home exteriors to restore their original appearance.</p>
              </div>
              
              <div class="border-l-4 border-lime-green pl-4">
                <h3 class="text-xl font-bold mb-2">Seasonal Cleanup</h3>
                <p class="text-gray-400">Complete property cleanup including leaf removal, debris clearing, and storm damage cleanup.</p>
              </div>
              
              <div class="border-l-4 border-lime-green pl-4">
                <h3 class="text-xl font-bold mb-2">Custom Projects</h3>
                <p class="text-gray-400">Have a unique outdoor project in mind? We'll work with you to bring your vision to life.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    
    <!-- Service Process -->
    <section class="py-20 bg-medium-gray">
      <div class="container mx-auto px-4">
        <h2 class="text-4xl md:text-5xl font-bebas text-center mb-12">
          Our <span class="gradient-text">Process</span>
        </h2>
        
        <div class="grid md:grid-cols-4 gap-8">
          <div class="text-center">
            <div class="w-20 h-20 bg-lime-green rounded-full flex items-center justify-center mx-auto mb-4">
              <span class="text-3xl font-bebas text-dark-gray">1</span>
            </div>
            <h3 class="text-xl font-bebas mb-2">Free Consultation</h3>
            <p class="text-gray-400">Contact us for a free on-site evaluation and estimate</p>
          </div>
          
          <div class="text-center">
            <div class="w-20 h-20 bg-lime-green rounded-full flex items-center justify-center mx-auto mb-4">
              <span class="text-3xl font-bebas text-dark-gray">2</span>
            </div>
            <h3 class="text-xl font-bebas mb-2">Custom Plan</h3>
            <p class="text-gray-400">We create a tailored plan to meet your specific needs</p>
          </div>
          
          <div class="text-center">
            <div class="w-20 h-20 bg-lime-green rounded-full flex items-center justify-center mx-auto mb-4">
              <span class="text-3xl font-bebas text-dark-gray">3</span>
            </div>
            <h3 class="text-xl font-bebas mb-2">Professional Service</h3>
            <p class="text-gray-400">Our team executes with precision and attention to detail</p>
          </div>
          
          <div class="text-center">
            <div class="w-20 h-20 bg-lime-green rounded-full flex items-center justify-center mx-auto mb-4">
              <span class="text-3xl font-bebas text-dark-gray">4</span>
            </div>
            <h3 class="text-xl font-bebas mb-2">Ongoing Support</h3>
            <p class="text-gray-400">Regular maintenance to keep your property looking its best</p>
          </div>
        </div>
      </div>
    </section>
    
    <!-- CTA Section -->
    <section class="py-20 bg-lime-green">
      <div class="container mx-auto px-4 text-center">
        <h2 class="text-4xl md:text-5xl font-bebas text-dark-gray mb-6">
          Ready to Get Started?
        </h2>
        <p class="text-xl text-dark-gray/80 mb-8">
          Contact Southern Buck Lawn today for your free estimate
        </p>
        
        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="tel:225-369-4434" class="bg-dark-gray text-lime-green px-8 py-4 rounded-full text-xl font-bold hover:bg-black transition-all">
            <i class="fas fa-phone mr-2"></i>Call 225-369-4434
          </a>
          <a href="https://forms.gle/Mut7H9YsjZDf6jUn6" target="_blank" class="bg-white text-dark-gray px-8 py-4 rounded-full text-xl font-bold hover:bg-gray-100 transition-all">
            <i class="fas fa-envelope mr-2"></i>Request Quote
          </a>
        </div>
      </div>
    </section>
  `
  
  return c.html(Layout({
    title: 'Lawn Care & Landscaping Services | Southern Buck Lawn - Walker, LA',
    description: 'Complete lawn care and landscaping services in Walker, LA. Mowing, landscaping, hardscapes, retaining walls, and more. Licensed & insured. Free estimates. Call 225-369-4434.',
    children: content,
    canonicalUrl: 'https://southernbucklawn.com/services'
  }))
}