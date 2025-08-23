import { Context } from 'hono'
import { Layout } from '../components/layout'

export const contactPage = (c: Context) => {
  const content = `
    <!-- Contact Header -->
    <section class="pt-32 pb-20 bg-gradient-to-b from-dark-gray to-medium-gray">
      <div class="container mx-auto px-4">
        <h1 class="text-5xl md:text-7xl font-bebas text-center mb-6">
          Get Your <span class="gradient-text">Free Quote</span>
        </h1>
        <p class="text-xl text-center text-gray-400 max-w-3xl mx-auto">
          Contact Southern Buck Lawn today for professional lawn care and landscaping services in Walker, LA and surrounding areas. Free estimates available!
        </p>
      </div>
    </section>
    
    <!-- Contact Information & Form -->
    <section class="py-20 bg-dark-gray">
      <div class="container mx-auto px-4">
        <div class="grid lg:grid-cols-2 gap-12">
          <!-- Contact Information -->
          <div>
            <h2 class="text-4xl font-bebas text-lime-green mb-8">Let's Get Started</h2>
            
            <div class="space-y-6 mb-8">
              <div class="flex items-start">
                <i class="fas fa-phone text-2xl text-lime-green mr-4 mt-1"></i>
                <div>
                  <h3 class="text-xl font-bold mb-2">Call Us</h3>
                  <a href="tel:225-369-4434" class="text-lime-green text-2xl hover:underline">225-369-4434</a>
                  <p class="text-gray-400 mt-2">Available Monday-Saturday, 7:00 AM - 6:00 PM</p>
                </div>
              </div>
              
              <div class="flex items-start">
                <i class="fas fa-envelope text-2xl text-lime-green mr-4 mt-1"></i>
                <div>
                  <h3 class="text-xl font-bold mb-2">Email Us</h3>
                  <a href="mailto:SBL@southernbucklawn.com" class="text-lime-green hover:underline">SBL@southernbucklawn.com</a>
                  <p class="text-gray-400 mt-2">We'll respond within 24 hours</p>
                </div>
              </div>
              
              <div class="flex items-start">
                <i class="fas fa-map-marker-alt text-2xl text-lime-green mr-4 mt-1"></i>
                <div>
                  <h3 class="text-xl font-bold mb-2">Service Area</h3>
                  <p class="text-gray-300">Brett Dr., Walker, LA</p>
                  <p class="text-gray-400 mt-2">Serving Walker, Denham Springs, Port Vincent, Livingston, and surrounding areas</p>
                </div>
              </div>
            </div>
            
            <!-- Why Choose Us Box -->
            <div class="bg-medium-gray p-6 rounded-lg">
              <h3 class="text-2xl font-bebas text-lime-green mb-4">Why Choose Southern Buck Lawn?</h3>
              <ul class="space-y-3">
                <li class="flex items-center">
                  <i class="fas fa-check-circle text-lime-green mr-3"></i>
                  <span>Owner-operated with personal attention to every detail</span>
                </li>
                <li class="flex items-center">
                  <i class="fas fa-check-circle text-lime-green mr-3"></i>
                  <span>13+ years of professional experience</span>
                </li>
                <li class="flex items-center">
                  <i class="fas fa-check-circle text-lime-green mr-3"></i>
                  <span>All new, professional-grade equipment</span>
                </li>
                <li class="flex items-center">
                  <i class="fas fa-check-circle text-lime-green mr-3"></i>
                  <span>Licensed and fully insured</span>
                </li>
                <li class="flex items-center">
                  <i class="fas fa-check-circle text-lime-green mr-3"></i>
                  <span>Free, no-obligation estimates</span>
                </li>
                <li class="flex items-center">
                  <i class="fas fa-check-circle text-lime-green mr-3"></i>
                  <span>Treating your lawn like it's our own</span>
                </li>
              </ul>
            </div>
          </div>
          
          <!-- Contact Form -->
          <div>
            <div class="bg-medium-gray p-8 rounded-lg">
              <h2 class="text-3xl font-bebas text-center mb-6">Request Your Free Quote</h2>
              
              <form id="contact-form" class="space-y-6">
                <div class="grid md:grid-cols-2 gap-4">
                  <div>
                    <label class="block text-sm font-medium mb-2">First Name *</label>
                    <input type="text" name="firstName" required class="w-full px-4 py-3 bg-dark-gray border border-gray-600 rounded-lg text-white focus:border-lime-green focus:outline-none">
                  </div>
                  <div>
                    <label class="block text-sm font-medium mb-2">Last Name *</label>
                    <input type="text" name="lastName" required class="w-full px-4 py-3 bg-dark-gray border border-gray-600 rounded-lg text-white focus:border-lime-green focus:outline-none">
                  </div>
                </div>
                
                <div>
                  <label class="block text-sm font-medium mb-2">Email Address *</label>
                  <input type="email" name="email" required class="w-full px-4 py-3 bg-dark-gray border border-gray-600 rounded-lg text-white focus:border-lime-green focus:outline-none">
                </div>
                
                <div>
                  <label class="block text-sm font-medium mb-2">Phone Number *</label>
                  <input type="tel" name="phone" required class="w-full px-4 py-3 bg-dark-gray border border-gray-600 rounded-lg text-white focus:border-lime-green focus:outline-none">
                </div>
                
                <div>
                  <label class="block text-sm font-medium mb-2">Property Address</label>
                  <input type="text" name="address" class="w-full px-4 py-3 bg-dark-gray border border-gray-600 rounded-lg text-white focus:border-lime-green focus:outline-none">
                </div>
                
                <div>
                  <label class="block text-sm font-medium mb-2">Service Type *</label>
                  <select name="service" required class="w-full px-4 py-3 bg-dark-gray border border-gray-600 rounded-lg text-white focus:border-lime-green focus:outline-none">
                    <option value="">Select a Service</option>
                    <option value="weekly-mowing">Weekly/Bi-Weekly Mowing</option>
                    <option value="landscaping">Landscaping Design & Installation</option>
                    <option value="hardscape">Hardscapes/Pavers</option>
                    <option value="retaining-wall">Retaining Walls</option>
                    <option value="outdoor-living">Fire Pit/Outdoor Kitchen</option>
                    <option value="commercial">Commercial Maintenance</option>
                    <option value="pressure-washing">Pressure Washing</option>
                    <option value="gutter-cleaning">Gutter Cleaning</option>
                    <option value="other">Other/Multiple Services</option>
                  </select>
                </div>
                
                <div>
                  <label class="block text-sm font-medium mb-2">Message / Project Details</label>
                  <textarea name="message" rows="4" class="w-full px-4 py-3 bg-dark-gray border border-gray-600 rounded-lg text-white focus:border-lime-green focus:outline-none"></textarea>
                </div>
                
                <div>
                  <label class="block text-sm font-medium mb-2">Preferred Contact Method</label>
                  <div class="flex gap-4">
                    <label class="flex items-center">
                      <input type="radio" name="contactMethod" value="phone" checked class="mr-2">
                      <span>Phone</span>
                    </label>
                    <label class="flex items-center">
                      <input type="radio" name="contactMethod" value="email" class="mr-2">
                      <span>Email</span>
                    </label>
                    <label class="flex items-center">
                      <input type="radio" name="contactMethod" value="text" class="mr-2">
                      <span>Text</span>
                    </label>
                  </div>
                </div>
                
                <button type="submit" class="w-full bg-lime-green text-dark-gray py-4 rounded-full text-xl font-bold hover:bg-green-400 transition-all">
                  <i class="fas fa-paper-plane mr-2"></i>Submit Quote Request
                </button>
              </form>
              
              <div id="form-message" class="mt-4 p-4 rounded-lg hidden"></div>
            </div>
            
            <!-- Alternative Quote Option -->
            <div class="mt-6 p-6 bg-lime-green/10 border border-lime-green/30 rounded-lg text-center">
              <p class="text-lg mb-3">Prefer to use Google Forms?</p>
              <a href="https://forms.gle/Mut7H9YsjZDf6jUn6" class="inline-block bg-lime-green text-dark-gray px-6 py-2 rounded-full font-bold hover:bg-green-400 transition-all" target="_blank">
                <i class="fas fa-external-link-alt mr-2"></i>Fill Out Google Form
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
    
    <!-- Service Areas -->
    <section class="py-20 bg-medium-gray">
      <div class="container mx-auto px-4">
        <h2 class="text-4xl font-bebas text-center mb-12">
          Proudly Serving <span class="gradient-text">Louisiana Communities</span>
        </h2>
        
        <div class="grid md:grid-cols-4 gap-6">
          <a href="/lawn-care-walker-la" class="bg-dark-gray p-6 rounded-lg hover:border hover:border-lime-green transition-all">
            <h3 class="text-xl font-bebas text-lime-green mb-2">Walker, LA</h3>
            <p class="text-gray-400">Our home base - providing premium lawn care to Walker residents</p>
          </a>
          
          <a href="/lawn-care-denham-springs-la" class="bg-dark-gray p-6 rounded-lg hover:border hover:border-lime-green transition-all">
            <h3 class="text-xl font-bebas text-lime-green mb-2">Denham Springs, LA</h3>
            <p class="text-gray-400">Complete lawn and landscape services for Denham Springs</p>
          </a>
          
          <a href="/lawn-care-port-vincent-la" class="bg-dark-gray p-6 rounded-lg hover:border hover:border-lime-green transition-all">
            <h3 class="text-xl font-bebas text-lime-green mb-2">Port Vincent, LA</h3>
            <p class="text-gray-400">Professional lawn care serving Port Vincent properties</p>
          </a>
          
          <a href="/lawn-care-livingston-la" class="bg-dark-gray p-6 rounded-lg hover:border hover:border-lime-green transition-all">
            <h3 class="text-xl font-bebas text-lime-green mb-2">Livingston, LA</h3>
            <p class="text-gray-400">Quality landscaping and maintenance in Livingston</p>
          </a>
        </div>
      </div>
    </section>
    
    <script>
      // Form submission
      document.getElementById('contact-form').addEventListener('submit', async (e) => {
        e.preventDefault();
        
        const formData = new FormData(e.target);
        const data = Object.fromEntries(formData.entries());
        
        const messageDiv = document.getElementById('form-message');
        
        try {
          const response = await fetch('/api/contact', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(data)
          });
          
          const result = await response.json();
          
          messageDiv.classList.remove('hidden');
          messageDiv.classList.add('bg-lime-green/20', 'border', 'border-lime-green');
          messageDiv.innerHTML = '<i class="fas fa-check-circle text-lime-green mr-2"></i>Thank you! We\'ll contact you within 24 hours.';
          
          e.target.reset();
        } catch (error) {
          messageDiv.classList.remove('hidden');
          messageDiv.classList.add('bg-red-500/20', 'border', 'border-red-500');
          messageDiv.innerHTML = '<i class="fas fa-exclamation-circle text-red-500 mr-2"></i>Sorry, there was an error. Please call us directly at 225-369-4434.';
        }
      });
    </script>
  `
  
  return c.html(Layout({
    title: 'Contact Southern Buck Lawn | Free Quote | Walker, LA',
    description: 'Contact Southern Buck Lawn for free lawn care and landscaping quotes in Walker, LA. Call 225-369-4434 or fill out our online form. Licensed and insured.',
    children: content,
    canonicalUrl: 'https://southernbucklawn.com/contact'
  }))
}