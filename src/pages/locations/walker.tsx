import { Context } from 'hono'
import { Layout } from '../../components/layout'
import { getLocalBusinessSchema } from '../../utils/schema'

export const walkerPage = (c: Context) => {
  const schema = getLocalBusinessSchema('Walker')
  
  const content = `
    <!-- Location Header -->
    <section class="pt-32 pb-20 bg-gradient-to-b from-dark-gray to-medium-gray">
      <div class="container mx-auto px-4">
        <h1 class="text-5xl md:text-7xl font-bebas text-center mb-6">
          Lawn Care Services in <span class="gradient-text">Walker, LA</span>
        </h1>
        <p class="text-xl text-center text-gray-400 max-w-3xl mx-auto">
          Southern Buck Lawn is proudly based in Walker, Louisiana, providing professional lawn care and landscaping services to residential and commercial properties throughout the area.
        </p>
      </div>
    </section>
    
    <!-- About Walker Section -->
    <section class="py-20 bg-dark-gray">
      <div class="container mx-auto px-4">
        <div class="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 class="text-4xl font-bebas mb-6">
              Your Local <span class="gradient-text">Walker Lawn Care Experts</span>
            </h2>
            <p class="text-gray-300 mb-4">
              As a Walker-based business, Southern Buck Lawn understands the unique lawn care challenges our community faces. From the humid Louisiana climate to our specific soil conditions, we have the local expertise to keep your Walker property looking its best year-round.
            </p>
            <p class="text-gray-300 mb-4">
              Owner Shane Dantone lives and works right here in Walker, treating every lawn with the same care and attention he gives his own property on Brett Dr. This local, personal touch sets us apart from larger, impersonal lawn care companies.
            </p>
            <p class="text-gray-300 mb-6">
              Whether you're near Walker High School, along Florida Blvd, or anywhere else in the Walker area, we're just a quick call away at <a href="tel:225-369-4434" class="text-lime-green hover:underline">225-369-4434</a>.
            </p>
            
            <div class="bg-medium-gray p-6 rounded-lg">
              <h3 class="text-2xl font-bebas text-lime-green mb-4">Walker Service Areas Include:</h3>
              <ul class="grid grid-cols-2 gap-2">
                <li class="flex items-center"><i class="fas fa-check text-lime-green mr-2"></i>Downtown Walker</li>
                <li class="flex items-center"><i class="fas fa-check text-lime-green mr-2"></i>North Walker</li>
                <li class="flex items-center"><i class="fas fa-check text-lime-green mr-2"></i>South Walker</li>
                <li class="flex items-center"><i class="fas fa-check text-lime-green mr-2"></i>Walker Heights</li>
                <li class="flex items-center"><i class="fas fa-check text-lime-green mr-2"></i>Florida Blvd Area</li>
                <li class="flex items-center"><i class="fas fa-check text-lime-green mr-2"></i>Pete's Highway</li>
              </ul>
            </div>
          </div>
          
          <div class="bg-medium-gray p-8 rounded-lg">
            <h3 class="text-3xl font-bebas text-lime-green mb-6">Services for Walker Residents</h3>
            <div class="space-y-4">
              <div class="border-l-4 border-lime-green pl-4">
                <h4 class="font-bold mb-1">Residential Lawn Care</h4>
                <p class="text-gray-400 text-sm">Weekly mowing, edging, and maintenance for Walker homes</p>
              </div>
              <div class="border-l-4 border-lime-green pl-4">
                <h4 class="font-bold mb-1">Commercial Property Maintenance</h4>
                <p class="text-gray-400 text-sm">Keep your Walker business looking professional</p>
              </div>
              <div class="border-l-4 border-lime-green pl-4">
                <h4 class="font-bold mb-1">Landscape Design & Installation</h4>
                <p class="text-gray-400 text-sm">Custom landscaping perfect for Walker's climate</p>
              </div>
              <div class="border-l-4 border-lime-green pl-4">
                <h4 class="font-bold mb-1">Hardscaping & Outdoor Living</h4>
                <p class="text-gray-400 text-sm">Patios, fire pits, and outdoor kitchens for Walker homes</p>
              </div>
              <div class="border-l-4 border-lime-green pl-4">
                <h4 class="font-bold mb-1">Storm Cleanup</h4>
                <p class="text-gray-400 text-sm">Quick response for Walker property storm damage</p>
              </div>
            </div>
            
            <div class="mt-8 text-center">
              <a href="tel:225-369-4434" class="bg-lime-green text-dark-gray px-6 py-3 rounded-full font-bold hover:bg-green-400 transition-all inline-block">
                <i class="fas fa-phone mr-2"></i>Call for Walker Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
    
    <!-- Why Walker Chooses Us -->
    <section class="py-20 bg-medium-gray">
      <div class="container mx-auto px-4">
        <h2 class="text-4xl font-bebas text-center mb-12">
          Why Walker Chooses <span class="gradient-text">Southern Buck Lawn</span>
        </h2>
        
        <div class="grid md:grid-cols-3 gap-8">
          <div class="text-center">
            <i class="fas fa-map-pin text-5xl text-lime-green mb-4"></i>
            <h3 class="text-2xl font-bebas mb-3">Truly Local</h3>
            <p class="text-gray-400">Based right here on Brett Dr. in Walker, we're your neighbors committed to our community</p>
          </div>
          
          <div class="text-center">
            <i class="fas fa-clock text-5xl text-lime-green mb-4"></i>
            <h3 class="text-2xl font-bebas mb-3">Quick Response</h3>
            <p class="text-gray-400">Being local means we can respond quickly to Walker residents' lawn care needs</p>
          </div>
          
          <div class="text-center">
            <i class="fas fa-cloud-sun text-5xl text-lime-green mb-4"></i>
            <h3 class="text-2xl font-bebas mb-3">Walker Weather Expert</h3>
            <p class="text-gray-400">We understand Walker's unique weather patterns and adjust our care accordingly</p>
          </div>
        </div>
      </div>
    </section>
    
    <!-- Walker Testimonials -->
    <section class="py-20 bg-dark-gray">
      <div class="container mx-auto px-4">
        <h2 class="text-4xl font-bebas text-center mb-12">
          What Walker Residents Say
        </h2>
        
        <div class="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <div class="bg-medium-gray p-6 rounded-lg">
            <div class="flex mb-3">
              <i class="fas fa-star text-lime-green"></i>
              <i class="fas fa-star text-lime-green"></i>
              <i class="fas fa-star text-lime-green"></i>
              <i class="fas fa-star text-lime-green"></i>
              <i class="fas fa-star text-lime-green"></i>
            </div>
            <p class="text-gray-300 mb-3">"Best lawn service in Walker! Shane is professional, reliable, and takes pride in his work. My yard has never looked better."</p>
            <p class="text-lime-green font-bold">- John D., Walker Resident</p>
          </div>
          
          <div class="bg-medium-gray p-6 rounded-lg">
            <div class="flex mb-3">
              <i class="fas fa-star text-lime-green"></i>
              <i class="fas fa-star text-lime-green"></i>
              <i class="fas fa-star text-lime-green"></i>
              <i class="fas fa-star text-lime-green"></i>
              <i class="fas fa-star text-lime-green"></i>
            </div>
            <p class="text-gray-300 mb-3">"Southern Buck Lawn transformed our Walker property. Great prices and even better service. Highly recommend to all Walker neighbors!"</p>
            <p class="text-lime-green font-bold">- Mary S., Walker Business Owner</p>
          </div>
        </div>
      </div>
    </section>
    
    <!-- CTA Section -->
    <section class="py-20 bg-lime-green">
      <div class="container mx-auto px-4 text-center">
        <h2 class="text-4xl md:text-5xl font-bebas text-dark-gray mb-6">
          Ready for the Best Lawn Care in Walker?
        </h2>
        <p class="text-xl text-dark-gray/80 mb-8">
          Join your Walker neighbors who trust Southern Buck Lawn for all their lawn care needs
        </p>
        
        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="tel:225-369-4434" class="bg-dark-gray text-lime-green px-8 py-4 rounded-full text-xl font-bold hover:bg-black transition-all">
            <i class="fas fa-phone mr-2"></i>Call 225-369-4434
          </a>
          <a href="https://forms.gle/Mut7H9YsjZDf6jUn6" target="_blank" class="bg-white text-dark-gray px-8 py-4 rounded-full text-xl font-bold hover:bg-gray-100 transition-all">
            <i class="fas fa-envelope mr-2"></i>Get Walker Quote
          </a>
        </div>
        
        <p class="mt-8 text-dark-gray">
          Serving Walker, LA from our location on Brett Dr.
        </p>
      </div>
    </section>
  `
  
  return c.html(Layout({
    title: 'Lawn Care Walker LA | Southern Buck Lawn | Local Lawn Service',
    description: 'Professional lawn care services in Walker, LA. Southern Buck Lawn is your local Walker lawn care expert. Weekly mowing, landscaping, and more. Call 225-369-4434.',
    children: content,
    canonicalUrl: 'https://southernbucklawn.com/lawn-care-walker-la',
    schema
  }))
}