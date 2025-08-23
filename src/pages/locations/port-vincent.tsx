import { Context } from 'hono'
import { Layout } from '../../components/layout'
import { getLocalBusinessSchema } from '../../utils/schema'

export const portVincentPage = (c: Context) => {
  const schema = getLocalBusinessSchema('Port Vincent')
  
  const content = `
    <!-- Location Header -->
    <section class="pt-32 pb-20 bg-gradient-to-b from-dark-gray to-medium-gray">
      <div class="container mx-auto px-4">
        <h1 class="text-5xl md:text-7xl font-bebas text-center mb-6">
          Lawn Care Services in <span class="gradient-text">Port Vincent, LA</span>
        </h1>
        <p class="text-xl text-center text-gray-400 max-w-3xl mx-auto">
          Southern Buck Lawn brings professional lawn care and landscaping services to Port Vincent properties. From waterfront homes to inland estates, we maintain Port Vincent's beautiful landscapes.
        </p>
      </div>
    </section>
    
    <!-- About Port Vincent Section -->
    <section class="py-20 bg-dark-gray">
      <div class="container mx-auto px-4">
        <div class="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 class="text-4xl font-bebas mb-6">
              Trusted Lawn Care in <span class="gradient-text">Port Vincent</span>
            </h2>
            <p class="text-gray-300 mb-4">
              Port Vincent's unique location near the Amite River means properties here face specific lawn care challenges. Southern Buck Lawn understands the local soil conditions, drainage needs, and climate factors that affect Port Vincent lawns.
            </p>
            <p class="text-gray-300 mb-4">
              From Highway 16 to the waterfront properties, we provide comprehensive lawn care services tailored to Port Vincent's needs. Our owner-operated approach means every Port Vincent property gets personal attention.
            </p>
            <p class="text-gray-300 mb-6">
              Ready for professional lawn care in Port Vincent? Call <a href="tel:225-369-4434" class="text-lime-green hover:underline">225-369-4434</a> today.
            </p>
            
            <div class="bg-medium-gray p-6 rounded-lg">
              <h3 class="text-2xl font-bebas text-lime-green mb-4">Port Vincent Specialties:</h3>
              <ul class="space-y-2">
                <li class="flex items-center"><i class="fas fa-check text-lime-green mr-2"></i>Waterfront property maintenance</li>
                <li class="flex items-center"><i class="fas fa-check text-lime-green mr-2"></i>Large estate lawn care</li>
                <li class="flex items-center"><i class="fas fa-check text-lime-green mr-2"></i>Drainage solutions</li>
                <li class="flex items-center"><i class="fas fa-check text-lime-green mr-2"></i>Custom landscape design</li>
              </ul>
            </div>
          </div>
          
          <div class="bg-medium-gray p-8 rounded-lg">
            <h3 class="text-3xl font-bebas text-lime-green mb-6">Port Vincent Services</h3>
            <div class="space-y-4">
              <div class="border-l-4 border-lime-green pl-4">
                <h4 class="font-bold mb-1">Waterfront Property Care</h4>
                <p class="text-gray-400 text-sm">Specialized care for Port Vincent's river properties</p>
              </div>
              <div class="border-l-4 border-lime-green pl-4">
                <h4 class="font-bold mb-1">Large Acreage Maintenance</h4>
                <p class="text-gray-400 text-sm">Efficient care for Port Vincent's larger properties</p>
              </div>
              <div class="border-l-4 border-lime-green pl-4">
                <h4 class="font-bold mb-1">Custom Landscaping</h4>
                <p class="text-gray-400 text-sm">Beautiful designs for Port Vincent homes</p>
              </div>
            </div>
            
            <div class="mt-8 text-center">
              <a href="/contact" class="bg-lime-green text-dark-gray px-6 py-3 rounded-full font-bold hover:bg-green-400 transition-all inline-block">
                <i class="fas fa-clipboard-list mr-2"></i>Get Port Vincent Quote
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
          Port Vincent's Premier Lawn Care Service
        </h2>
        <p class="text-xl text-dark-gray/80 mb-8">
          Experience the Southern Buck Lawn difference in Port Vincent
        </p>
        
        <a href="tel:225-369-4434" class="bg-dark-gray text-lime-green px-8 py-4 rounded-full text-xl font-bold hover:bg-black transition-all inline-block">
          <i class="fas fa-phone mr-2"></i>Call 225-369-4434
        </a>
      </div>
    </section>
  `
  
  return c.html(Layout({
    title: 'Lawn Care Port Vincent LA | Southern Buck Lawn | Landscaping Services',
    description: 'Professional lawn care in Port Vincent, LA. Southern Buck Lawn provides mowing, landscaping, and property maintenance. Waterfront specialists. Call 225-369-4434.',
    children: content,
    canonicalUrl: 'https://southernbucklawn.com/lawn-care-port-vincent-la',
    schema
  }))
}