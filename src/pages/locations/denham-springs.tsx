import { Context } from 'hono'
import { Layout } from '../../components/layout'
import { getLocalBusinessSchema } from '../../utils/schema'

export const denhamSpringsPage = (c: Context) => {
  const schema = getLocalBusinessSchema('Denham Springs')
  
  const content = `
    <!-- Location Header -->
    <section class="pt-32 pb-20 bg-gradient-to-b from-dark-gray to-medium-gray">
      <div class="container mx-auto px-4">
        <h1 class="text-5xl md:text-7xl font-bebas text-center mb-6">
          Lawn Care Services in <span class="gradient-text">Denham Springs, LA</span>
        </h1>
        <p class="text-xl text-center text-gray-400 max-w-3xl mx-auto">
          Southern Buck Lawn provides professional lawn care and landscaping services throughout Denham Springs. From Antique Village to River Road, we keep Denham Springs properties looking their best.
        </p>
      </div>
    </section>
    
    <!-- About Denham Springs Section -->
    <section class="py-20 bg-dark-gray">
      <div class="container mx-auto px-4">
        <div class="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 class="text-4xl font-bebas mb-6">
              Professional Lawn Care for <span class="gradient-text">Denham Springs</span>
            </h2>
            <p class="text-gray-300 mb-4">
              Denham Springs residents trust Southern Buck Lawn for reliable, professional lawn care services. We understand the unique needs of Denham Springs properties, from the historic downtown area to the newer subdivisions along Range Avenue.
            </p>
            <p class="text-gray-300 mb-4">
              Our team regularly services properties throughout Denham Springs, providing everything from weekly mowing to complete landscape transformations. We're familiar with local HOA requirements and community standards.
            </p>
            <p class="text-gray-300 mb-6">
              Whether you're near Denham Springs High School, along Florida Boulevard, or in the Watson area, we provide prompt, professional service. Call <a href="tel:225-369-4434" class="text-lime-green hover:underline">225-369-4434</a> for your free estimate.
            </p>
            
            <div class="bg-medium-gray p-6 rounded-lg">
              <h3 class="text-2xl font-bebas text-lime-green mb-4">Denham Springs Service Areas:</h3>
              <ul class="grid grid-cols-2 gap-2">
                <li class="flex items-center"><i class="fas fa-check text-lime-green mr-2"></i>Downtown Denham Springs</li>
                <li class="flex items-center"><i class="fas fa-check text-lime-green mr-2"></i>Antique Village Area</li>
                <li class="flex items-center"><i class="fas fa-check text-lime-green mr-2"></i>River Road</li>
                <li class="flex items-center"><i class="fas fa-check text-lime-green mr-2"></i>Range Avenue</li>
                <li class="flex items-center"><i class="fas fa-check text-lime-green mr-2"></i>Watson</li>
                <li class="flex items-center"><i class="fas fa-check text-lime-green mr-2"></i>Florida Blvd Corridor</li>
              </ul>
            </div>
          </div>
          
          <div class="bg-medium-gray p-8 rounded-lg">
            <h3 class="text-3xl font-bebas text-lime-green mb-6">Denham Springs Services</h3>
            <div class="space-y-4">
              <div class="border-l-4 border-lime-green pl-4">
                <h4 class="font-bold mb-1">HOA Community Maintenance</h4>
                <p class="text-gray-400 text-sm">Meeting Denham Springs HOA standards</p>
              </div>
              <div class="border-l-4 border-lime-green pl-4">
                <h4 class="font-bold mb-1">Commercial Properties</h4>
                <p class="text-gray-400 text-sm">Serving Denham Springs businesses along Range Ave</p>
              </div>
              <div class="border-l-4 border-lime-green pl-4">
                <h4 class="font-bold mb-1">Flood Recovery Landscaping</h4>
                <p class="text-gray-400 text-sm">Helping Denham Springs properties recover and thrive</p>
              </div>
              <div class="border-l-4 border-lime-green pl-4">
                <h4 class="font-bold mb-1">Year-Round Maintenance</h4>
                <p class="text-gray-400 text-sm">Keeping Denham Springs lawns perfect all seasons</p>
              </div>
            </div>
            
            <div class="mt-8 text-center">
              <a href="/contact" class="bg-lime-green text-dark-gray px-6 py-3 rounded-full font-bold hover:bg-green-400 transition-all inline-block">
                <i class="fas fa-clipboard-list mr-2"></i>Get Denham Springs Quote
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
    
    <!-- CTA Section -->
    <section class="py-20 bg-lime-green">
      <div class="container mx-auto px-4 text-center">
        <h2 class="text-4xl md:text-5xl font-bebas text-dark-gray mb-6">
          Denham Springs Deserves the Best Lawn Care
        </h2>
        <p class="text-xl text-dark-gray/80 mb-8">
          Join your Denham Springs neighbors who trust Southern Buck Lawn
        </p>
        
        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="tel:225-369-4434" class="bg-dark-gray text-lime-green px-8 py-4 rounded-full text-xl font-bold hover:bg-black transition-all">
            <i class="fas fa-phone mr-2"></i>Call 225-369-4434
          </a>
        </div>
      </div>
    </section>
  `
  
  return c.html(Layout({
    title: 'Lawn Care Denham Springs LA | Southern Buck Lawn | Landscaping Services',
    description: 'Professional lawn care and landscaping in Denham Springs, LA. Southern Buck Lawn offers weekly mowing, landscape design, and more. Free estimates. Call 225-369-4434.',
    children: content,
    canonicalUrl: 'https://southernbucklawn.com/lawn-care-denham-springs-la',
    schema
  }))
}