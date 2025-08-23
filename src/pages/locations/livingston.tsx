import { Context } from 'hono'
import { Layout } from '../../components/layout'
import { getLocalBusinessSchema } from '../../utils/schema'

export const livingstonPage = (c: Context) => {
  const schema = getLocalBusinessSchema('Livingston')
  
  const content = `
    <!-- Location Header -->
    <section class="pt-32 pb-20 bg-gradient-to-b from-dark-gray to-medium-gray">
      <div class="container mx-auto px-4">
        <h1 class="text-5xl md:text-7xl font-bebas text-center mb-6">
          Lawn Care Services in <span class="gradient-text">Livingston, LA</span>
        </h1>
        <p class="text-xl text-center text-gray-400 max-w-3xl mx-auto">
          Southern Buck Lawn delivers quality lawn care and landscaping services to Livingston Parish. From residential lawns to commercial properties, we keep Livingston looking great.
        </p>
      </div>
    </section>
    
    <!-- About Livingston Section -->
    <section class="py-20 bg-dark-gray">
      <div class="container mx-auto px-4">
        <div class="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 class="text-4xl font-bebas mb-6">
              Quality Lawn Care for <span class="gradient-text">Livingston Parish</span>
            </h2>
            <p class="text-gray-300 mb-4">
              Livingston residents appreciate quality and reliability, and that's exactly what Southern Buck Lawn delivers. We understand the parish's rural charm and work to enhance every property's natural beauty.
            </p>
            <p class="text-gray-300 mb-4">
              From Highway 190 to the back roads, we service all of Livingston with the same dedication and attention to detail. Our all-new equipment and professional approach ensure your Livingston property always looks its best.
            </p>
            <p class="text-gray-300 mb-6">
              Contact us at <a href="tel:225-369-4434" class="text-lime-green hover:underline">225-369-4434</a> for Livingston lawn care services.
            </p>
            
            <div class="bg-medium-gray p-6 rounded-lg">
              <h3 class="text-2xl font-bebas text-lime-green mb-4">Livingston Services:</h3>
              <ul class="space-y-2">
                <li class="flex items-center"><i class="fas fa-check text-lime-green mr-2"></i>Rural property maintenance</li>
                <li class="flex items-center"><i class="fas fa-check text-lime-green mr-2"></i>Large lot mowing</li>
                <li class="flex items-center"><i class="fas fa-check text-lime-green mr-2"></i>Pasture and field management</li>
                <li class="flex items-center"><i class="fas fa-check text-lime-green mr-2"></i>Custom landscaping</li>
              </ul>
            </div>
          </div>
          
          <div class="bg-medium-gray p-8 rounded-lg">
            <h3 class="text-3xl font-bebas text-lime-green mb-6">Livingston Lawn Solutions</h3>
            <div class="space-y-4">
              <div class="border-l-4 border-lime-green pl-4">
                <h4 class="font-bold mb-1">Rural Property Care</h4>
                <p class="text-gray-400 text-sm">Large acreage and rural Livingston properties</p>
              </div>
              <div class="border-l-4 border-lime-green pl-4">
                <h4 class="font-bold mb-1">Residential Services</h4>
                <p class="text-gray-400 text-sm">Complete care for Livingston homes</p>
              </div>
              <div class="border-l-4 border-lime-green pl-4">
                <h4 class="font-bold mb-1">Commercial Maintenance</h4>
                <p class="text-gray-400 text-sm">Reliable service for Livingston businesses</p>
              </div>
            </div>
            
            <div class="mt-8 text-center">
              <a href="/contact" class="bg-lime-green text-dark-gray px-6 py-3 rounded-full font-bold hover:bg-green-400 transition-all inline-block">
                <i class="fas fa-clipboard-list mr-2"></i>Get Livingston Quote
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
          Livingston's Trusted Lawn Care Provider
        </h2>
        <p class="text-xl text-dark-gray/80 mb-8">
          Professional service you can count on in Livingston Parish
        </p>
        
        <a href="tel:225-369-4434" class="bg-dark-gray text-lime-green px-8 py-4 rounded-full text-xl font-bold hover:bg-black transition-all inline-block">
          <i class="fas fa-phone mr-2"></i>Call 225-369-4434
        </a>
      </div>
    </section>
  `
  
  return c.html(Layout({
    title: 'Lawn Care Livingston LA | Southern Buck Lawn | Parish Lawn Services',
    description: 'Lawn care and landscaping services in Livingston, LA. Southern Buck Lawn offers mowing, landscaping, and property maintenance. Free estimates. Call 225-369-4434.',
    children: content,
    canonicalUrl: 'https://southernbucklawn.com/lawn-care-livingston-la',
    schema
  }))
}