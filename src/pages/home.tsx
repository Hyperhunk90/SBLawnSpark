import { Context } from 'hono'
import { Layout } from '../components/layout'
import { getLocalBusinessSchema } from '../utils/schema'

export const homePage = (c: Context) => {
  const schema = getLocalBusinessSchema()

  const content = `
    <!-- Hero Section -->
    <section class="hero">
      <!-- Optimized Hero Background -->
      <img src="/static/images/hero-bg.jpg" 
           alt="Professional Lawn Care Service" 
           class="hero-bg"
           width="1920" 
           height="1080"
           loading="eager"
           fetchpriority="high">

      <div class="hero-overlay"></div>

      <div class="hero-content">
        <img src="/static/images/logo-large.png" 
             alt="Southern Buck Lawn Logo" 
             class="hero-logo"
             width="400" 
             height="300"
             loading="eager"
             fetchpriority="high">

        <h1 class="hero-title">
          Professional Lawn Care & Landscaping
        </h1>

        <p class="hero-subtitle">
          Licensed & Insured | Free Estimates | Walker, LA
        </p>

        <div class="hero-buttons">
          <a href="https://forms.gle/Mut7H9YsjZDf6jUn6" target="_blank" class="hero-btn btn-primary">
            <i class="fas fa-clipboard-list"></i>Get Free Quote
          </a>
          <a href="tel:225-369-4434" class="hero-btn btn-secondary">
            <i class="fas fa-phone"></i>Call 225-369-4434
          </a>
        </div>
      </div>
    </section>

    <!-- Meet Shane Section -->
    <section class="section-py bg-medium">
      <div class="container">
        <h2 style="font-size:3rem;text-align:center;margin-bottom:3rem;font-family:'Bebas Neue',cursive">
          Meet <span class="gradient-text">Shane Dantone</span>
        </h2>

        <div style="display:grid;grid-template-columns:1fr;gap:3rem;align-items:center;max-width:1200px;margin:0 auto">
          <div style="grid-column:1;text-align:center">
            <img src="/static/images/team-shane.jpg" 
                 alt="Shane Dantone - Owner of Southern Buck Lawn" 
                 style="border-radius:0.5rem;box-shadow:0 25px 50px -12px rgba(0,0,0,0.25);margin:0 auto;max-width:400px;width:100%;height:auto"
                 width="400" 
                 height="400"
                 loading="lazy">
          </div>

          <div style="grid-column:1">
            <h3 style="font-size:2rem;color:#7CFC00;margin-bottom:1rem;font-family:'Bebas Neue',cursive">Owner & Operator</h3>
            <p style="color:#d1d5db;font-size:1.125rem;margin-bottom:1rem;line-height:1.7">
              Shane Dantone is a 35-year-old former industrial electrician with 13+ years of hands-on experience. After years in the electrical field, Shane followed his passion for lawn care and landscaping, investing everything into Southern Buck Lawn.
            </p>
            <p style="color:#d1d5db;font-size:1.125rem;margin-bottom:1rem;line-height:1.7">
              "I treat every client's yard like it's my own," Shane says. This personal approach, combined with all-new professional equipment, sets Southern Buck Lawn apart from the competition.
            </p>
            <p style="color:#d1d5db;font-size:1.125rem;margin-bottom:1.5rem;line-height:1.7">
              Based right here in Walker, LA on Brett Dr., Shane personally oversees every project to ensure the highest quality results for your property.
            </p>
            <a href="tel:225-369-4434" style="background:#7CFC00;color:#1a1a1a;padding:0.75rem 1.5rem;border-radius:9999px;font-weight:bold;text-decoration:none;display:inline-flex;align-items:center;gap:0.5rem;transition:all 0.3s ease">
              <i class="fas fa-phone"></i>Call Shane Today
            </a>
          </div>
        </div>
      </div>
    </section>

    <!-- Services Section -->
    <section class="section-py bg-dark">
      <div class="container">
        <h2 style="font-size:3rem;text-align:center;margin-bottom:1rem;font-family:'Bebas Neue',cursive">
          <span class="gradient-text">Our Services</span>
        </h2>
        <p style="font-size:1.25rem;text-align:center;color:#9CA3AF;margin-bottom:3rem">
          Comprehensive Lawn Care & Landscaping Solutions
        </p>

        <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(280px,1fr));gap:1.5rem">
          ${getServicesHTML()}
        </div>

        <div style="text-align:center;margin-top:3rem">
          <a href="/services" style="background:#7CFC00;color:#1a1a1a;padding:0.75rem 2rem;border-radius:9999px;font-size:1.125rem;font-weight:bold;text-decoration:none;display:inline-flex;align-items:center;gap:0.5rem;transition:all 0.3s ease">
            View All Services <i class="fas fa-arrow-right"></i>
          </a>
        </div>
      </div>
    </section>

    <!-- Why Choose Us Section -->
    <section class="section-py bg-medium">
      <div class="container">
        <h2 style="font-size:3rem;text-align:center;margin-bottom:3rem;font-family:'Bebas Neue',cursive">
          Why Choose <span class="gradient-text">Southern Buck Lawn</span>?
        </h2>

        <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(300px,1fr));gap:2rem">
          <div style="background:#2a2a2a;padding:2rem;border-radius:0.5rem;transition:all 0.3s ease">
            <i class="fas fa-user-tie" style="font-size:2.5rem;color:#7CFC00;margin-bottom:1rem;display:block"></i>
            <h3 style="font-size:1.5rem;margin-bottom:0.75rem;font-family:'Bebas Neue',cursive">Owner-Operated</h3>
            <p style="color:#9CA3AF">Shane Dantone personally oversees every project, bringing 13+ years of professional experience and treating your lawn as his own.</p>
          </div>

          <div style="background:#2a2a2a;padding:2rem;border-radius:0.5rem;transition:all 0.3s ease">
            <i class="fas fa-tools" style="font-size:2.5rem;color:#7CFC00;margin-bottom:1rem;display:block"></i>
            <h3 style="font-size:1.5rem;margin-bottom:0.75rem;font-family:'Bebas Neue',cursive">All New Equipment</h3>
            <p style="color:#9CA3AF">We've invested in brand new, professional-grade equipment to deliver the highest quality results for your property.</p>
          </div>

          <div style="background:#2a2a2a;padding:2rem;border-radius:0.5rem;transition:all 0.3s ease">
            <i class="fas fa-shield-alt" style="font-size:2.5rem;color:#7CFC00;margin-bottom:1rem;display:block"></i>
            <h3 style="font-size:1.5rem;margin-bottom:0.75rem;font-family:'Bebas Neue',cursive">Licensed & Insured</h3>
            <p style="color:#9CA3AF">Fully licensed and insured for your peace of mind. We stand behind our work with complete professionalism.</p>
          </div>

          <div style="background:#2a2a2a;padding:2rem;border-radius:0.5rem;transition:all 0.3s ease">
            <i class="fas fa-heart" style="font-size:2.5rem;color:#7CFC00;margin-bottom:1rem;display:block"></i>
            <h3 style="font-size:1.5rem;margin-bottom:0.75rem;font-family:'Bebas Neue',cursive">Passion-Driven</h3>
            <p style="color:#9CA3AF">This isn't just a business—it's our passion. We take pride in every cut, every trim, and every landscape we create.</p>
          </div>

          <div style="background:#2a2a2a;padding:2rem;border-radius:0.5rem;transition:all 0.3s ease">
            <i class="fas fa-map-marked-alt" style="font-size:2.5rem;color:#7CFC00;margin-bottom:1rem;display:block"></i>
            <h3 style="font-size:1.5rem;margin-bottom:0.75rem;font-family:'Bebas Neue',cursive">Local Expertise</h3>
            <p style="color:#9CA3AF">Based in Walker, LA, we understand the unique lawn care needs of our Louisiana climate and soil conditions.</p>
          </div>

          <div style="background:#2a2a2a;padding:2rem;border-radius:0.5rem;transition:all 0.3s ease">
            <i class="fas fa-dollar-sign" style="font-size:2.5rem;color:#7CFC00;margin-bottom:1rem;display:block"></i>
            <h3 style="font-size:1.5rem;margin-bottom:0.75rem;font-family:'Bebas Neue',cursive">Free Estimates</h3>
            <p style="color:#9CA3AF">Get a detailed, no-obligation quote for your project. We believe in transparent, fair pricing for all our services.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Portfolio Section -->
    <section class="section-py bg-dark">
      <div class="container">
        <h2 style="font-size:3rem;text-align:center;margin-bottom:3rem;font-family:'Bebas Neue',cursive">
          Our <span class="gradient-text">Recent Work</span>
        </h2>

        <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(350px,1fr));gap:1.5rem">
          <div style="position:relative;overflow:hidden;border-radius:0.5rem;height:300px">
            <img src="/static/images/portfolio/lawn-2.jpg" 
                 alt="Lawn Transformation Before and After" 
                 style="width:100%;height:100%;object-fit:cover;transition:transform 0.3s ease"
                 width="400" 
                 height="300"
                 loading="lazy">
            <div style="position:absolute;inset:0;background:linear-gradient(to top,rgba(0,0,0,0.7),transparent);display:flex;align-items:end;padding:1rem">
              <p style="color:white;font-weight:bold;font-size:1.125rem">Complete Lawn Transformation</p>
            </div>
          </div>

          <div style="position:relative;overflow:hidden;border-radius:0.5rem;height:300px">
            <img src="/static/images/portfolio/landscape-2.jpg" 
                 alt="Landscaping Transformation 2017-2019" 
                 style="width:100%;height:100%;object-fit:cover;transition:transform 0.3s ease"
                 width="400" 
                 height="300"
                 loading="lazy">
            <div style="position:absolute;inset:0;background:linear-gradient(to top,rgba(0,0,0,0.7),transparent);display:flex;align-items:end;padding:1rem">
              <p style="color:white;font-weight:bold;font-size:1.125rem">Garden Design & Installation</p>
            </div>
          </div>

          <div style="position:relative;overflow:hidden;border-radius:0.5rem;height:300px">
            <img src="/static/images/portfolio/hardscape-2.jpg" 
                 alt="Backyard Patio Transformation" 
                 style="width:100%;height:100%;object-fit:cover;transition:transform 0.3s ease"
                 width="400" 
                 height="300"
                 loading="lazy">
            <div style="position:absolute;inset:0;background:linear-gradient(to top,rgba(0,0,0,0.7),transparent);display:flex;align-items:end;padding:1rem">
              <p style="color:white;font-weight:bold;font-size:1.125rem">Complete Backyard Makeover</p>
            </div>
          </div>
        </div>

        <div style="text-align:center;margin-top:3rem">
          <a href="/portfolio" style="background:#7CFC00;color:#1a1a1a;padding:0.75rem 2rem;border-radius:9999px;font-size:1.125rem;font-weight:bold;text-decoration:none;display:inline-flex;align-items:center;gap:0.5rem;transition:all 0.3s ease">
            View Full Portfolio <i class="fas fa-arrow-right"></i>
          </a>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="section-py bg-lime">
      <div class="container" style="text-align:center">
        <h2 style="font-size:3rem;color:#1a1a1a;margin-bottom:1.5rem;font-family:'Bebas Neue',cursive">
          Ready to Transform Your Lawn?
        </h2>
        <p style="font-size:1.25rem;color:rgba(26,26,26,0.8);margin-bottom:2rem">
          Get your free estimate today! Call now or request a quote online.
        </p>

        <div style="display:flex;flex-direction:column;gap:1rem;justify-content:center;align-items:center;max-width:600px;margin:0 auto">
          <a href="tel:225-369-4434" style="background:#1a1a1a;color:#7CFC00;padding:1rem 2rem;border-radius:9999px;font-size:1.25rem;font-weight:bold;text-decoration:none;display:inline-flex;align-items:center;gap:0.5rem;transition:all 0.3s ease;min-width:280px;justify-content:center">
            <i class="fas fa-phone"></i>Call 225-369-4434
          </a>
          <a href="https://forms.gle/Mut7H9YsjZDf6jUn6" target="_blank" style="background:white;color:#1a1a1a;padding:1rem 2rem;border-radius:9999px;font-size:1.25rem;font-weight:bold;text-decoration:none;display:inline-flex;align-items:center;gap:0.5rem;transition:all 0.3s ease;min-width:280px;justify-content:center">
            <i class="fas fa-envelope"></i>Request Online Quote
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
    <div style="background:#2a2a2a;padding:1.5rem;border-radius:0.5rem;transition:all 0.3s ease;text-align:center">
      <i class="fas ${service.icon}" style="font-size:2.5rem;color:#7CFC00;margin-bottom:1rem;display:block"></i>
      <h3 style="font-size:1.25rem;margin-bottom:0.5rem;font-family:'Bebas Neue',cursive">${service.name}</h3>
      <p style="color:#9CA3AF;font-size:0.875rem">${service.desc}</p>
    </div>
  `).join('')
}