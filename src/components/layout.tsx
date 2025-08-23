import { Context } from 'hono'

export const Layout = ({ 
  title, 
  description, 
  children,
  canonicalUrl,
  schema
}: { 
  title: string, 
  description: string, 
  children: string,
  canonicalUrl?: string,
  schema?: string 
}) => {
  return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>${title}</title>
        <meta name="description" content="${description}">
        <meta property="og:title" content="${title}">
        <meta property="og:description" content="${description}">
        <meta property="og:type" content="website">
        <meta property="og:image" content="/static/images/og-image.jpg">
        <meta name="twitter:card" content="summary_large_image">
        ${canonicalUrl ? `<link rel="canonical" href="${canonicalUrl}">` : ''}

        <!-- Performance Optimizations -->
        <link rel="preconnect" href="https://fonts.googleapis.com">
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
        <link rel="dns-prefetch" href="//cdn.tailwindcss.com">
        <link rel="dns-prefetch" href="//cdn.jsdelivr.net">

        <!-- Preload critical resources -->
        <link rel="preload" href="/static/images/hero-bg.jpg" as="image" fetchpriority="high">
        <link rel="preload" href="/static/images/logo-large.png" as="image" fetchpriority="high">
        <link rel="preload" href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Roboto:wght@300;400;500;700&display=swap" as="style">

        <!-- Favicon -->
        <link rel="icon" type="image/x-icon" href="/favicon.ico">

        <!-- Critical CSS Inlined -->
        <style>
          /* Critical Above-the-fold CSS */
          *{margin:0;padding:0;box-sizing:border-box}
          body{font-family:system-ui,-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif;background-color:#1a1a1a;color:white;line-height:1.6;-webkit-font-smoothing:antialiased}
          nav{position:fixed;width:100%;z-index:50;background:rgba(26,26,26,0.95);backdrop-filter:blur(12px);border-bottom:1px solid rgba(124,252,0,0.2);top:0}
          .nav-container{max-width:1200px;margin:0 auto;padding:0 1rem;display:flex;justify-content:space-between;align-items:center;height:80px}
          .logo img{height:64px;width:auto}
          .nav-links{display:none;align-items:center;gap:1.5rem}
          .nav-link{color:white;text-decoration:none;transition:color 0.3s ease;font-weight:500}
          .nav-link:hover{color:#7CFC00}
          .call-btn{background:#7CFC00;color:#1a1a1a;padding:0.5rem 1.5rem;border-radius:9999px;font-weight:bold;text-decoration:none;transition:all 0.3s ease;display:inline-flex;align-items:center;gap:0.5rem}
          .call-btn:hover{background:#90EE90;transform:scale(1.05)}
          .hero{position:relative;min-height:100vh;display:flex;align-items:center;justify-content:center;overflow:hidden}
          .hero-bg{position:absolute;top:0;left:0;width:100%;height:100%;object-fit:cover;z-index:-2}
          .hero-overlay{position:absolute;top:0;left:0;width:100%;height:100%;background:rgba(0,0,0,0.5);z-index:-1}
          .hero-content{position:relative;z-index:10;text-align:center;padding:0 1rem;max-width:1200px}
          .hero-logo{height:192px;width:auto;margin:0 auto 2rem;max-width:100%}
          .hero-title{font-size:3rem;font-weight:900;color:white;margin-bottom:1rem;line-height:1.1;text-shadow:2px 2px 4px rgba(0,0,0,0.5)}
          .hero-subtitle{font-size:1.25rem;color:#d1d5db;margin-bottom:2rem;font-weight:400}
          .hero-buttons{display:flex;flex-direction:column;gap:1rem;justify-content:center;align-items:center;max-width:600px;margin:0 auto}
          .hero-btn{display:inline-flex;align-items:center;gap:0.5rem;padding:1rem 2rem;border-radius:9999px;font-size:1.25rem;font-weight:bold;text-decoration:none;transition:all 0.3s ease;text-align:center;min-width:250px;justify-content:center}
          .btn-primary{background:#7CFC00;color:#1a1a1a}
          .btn-secondary{background:transparent;border:2px solid #7CFC00;color:#7CFC00}
          .btn-primary:hover,.btn-secondary:hover{transform:scale(1.05)}
          .btn-primary:hover{background:#90EE90}
          .btn-secondary:hover{background:#7CFC00;color:#1a1a1a}
          .mobile-toggle{display:block;color:white;font-size:1.5rem;background:none;border:none;cursor:pointer;padding:0.5rem}
          .mobile-menu{transform:translateX(-100%);transition:transform 0.3s ease-in-out;position:fixed;top:0;left:0;width:100%;height:100%;background:#1a1a1a;z-index:40}
          .mobile-menu.active{transform:translateX(0)}
          .gradient-text{background:linear-gradient(90deg,#7CFC00,#90EE90);-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text}
          .container{max-width:1200px;margin:0 auto;padding:0 1rem}
          .section-py{padding:5rem 0}
          .bg-dark{background-color:#1a1a1a}
          .bg-medium{background-color:#2a2a2a}
          .bg-lime{background-color:#7CFC00}
          .text-lime{color:#7CFC00}
          .text-dark{color:#1a1a1a}
          h1,h2,h3,h4,h5,h6{line-height:1.2;margin-bottom:1rem}
          h1{font-size:2.5rem}h2{font-size:2rem}h3{font-size:1.5rem}
          @media(min-width:768px){.nav-links{display:flex}.mobile-toggle{display:none}.hero-title{font-size:4.5rem}.hero-subtitle{font-size:1.5rem}.hero-buttons{flex-direction:row}.hero-logo{height:256px}h1{font-size:3.5rem}h2{font-size:2.5rem}}
          @media(min-width:1024px){.hero-title{font-size:5rem}.nav-container{padding:0 2rem}}
          .loading{opacity:0;transform:translateY(20px)}
          .loaded{opacity:1;transform:translateY(0);transition:all 0.6s ease}
          .nav-link:focus,.hero-btn:focus,.call-btn:focus{outline:2px solid #7CFC00;outline-offset:2px}
        </style>

        <!-- Load fonts asynchronously -->
        <link rel="preload" href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Roboto:wght@300;400;500;700&display=swap" as="style" onload="this.onload=null;this.rel='stylesheet'">
        <noscript><link href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Roboto:wght@300;400;500;700&display=swap" rel="stylesheet"></noscript>

        <!-- Defer non-critical CSS -->
        <link rel="preload" href="https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@6.4.0/css/all.min.css" as="style" onload="this.onload=null;this.rel='stylesheet'">
        <noscript><link href="https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@6.4.0/css/all.min.css" rel="stylesheet"></noscript>

        <!-- Optimized Tailwind Config -->
        <script>
          // Load Tailwind after page load to prevent render blocking
          window.addEventListener('load', function() {
            if (!window.tailwindLoaded) {
              var script = document.createElement('script');
              script.src = 'https://cdn.tailwindcss.com';
              script.onload = function() { window.tailwindLoaded = true; };
              document.head.appendChild(script);
            }
          });

          // Tailwind config
          tailwind = {
            config: {
              theme: {
                extend: {
                  colors: {
                    'lime-green': '#7CFC00',
                    'dark-gray': '#1a1a1a',
                    'medium-gray': '#2a2a2a'
                  },
                  fontFamily: {
                    'bebas': ['Bebas Neue', 'cursive'],
                    'roboto': ['Roboto', 'sans-serif']
                  }
                }
              }
            }
          }
        </script>

        ${schema ? `
        <!-- Schema.org Markup -->
        <script type="application/ld+json">
        ${schema}
        </script>
        ` : ''}
    </head>
    <body>
        <!-- Navigation -->
        <nav>
            <div class="nav-container">
                <!-- Logo -->
                <a href="/" class="logo">
                    <img src="/static/images/logo.png" alt="Southern Buck Lawn" width="120" height="64">
                </a>

                <!-- Desktop Menu -->
                <div class="nav-links">
                    <a href="/" class="nav-link">Home</a>
                    <a href="/services" class="nav-link">Services</a>
                    <a href="/portfolio" class="nav-link">Portfolio</a>
                    <a href="/contact" class="nav-link">Contact</a>
                    <a href="tel:225-369-4434" class="call-btn">
                        <i class="fas fa-phone"></i>Call Now
                    </a>
                </div>

                <!-- Mobile Menu Button -->
                <button id="mobile-menu-btn" class="mobile-toggle">
                    <i class="fas fa-bars"></i>
                </button>
            </div>
        </nav>

        <!-- Mobile Menu -->
        <div id="mobile-menu" class="mobile-menu">
            <div style="display:flex;flex-direction:column;height:100%;padding-top:5rem;padding-left:1.5rem;padding-right:1.5rem">
                <button id="mobile-menu-close" style="position:absolute;top:1.5rem;right:1.5rem;color:white;font-size:1.5rem;background:none;border:none;cursor:pointer">
                    <i class="fas fa-times"></i>
                </button>
                <a href="/" style="color:white;font-size:1.5rem;padding:1rem 0;border-bottom:1px solid #374151;text-decoration:none">Home</a>
                <a href="/services" style="color:white;font-size:1.5rem;padding:1rem 0;border-bottom:1px solid #374151;text-decoration:none">Services</a>
                <a href="/portfolio" style="color:white;font-size:1.5rem;padding:1rem 0;border-bottom:1px solid #374151;text-decoration:none">Portfolio</a>
                <a href="/contact" style="color:white;font-size:1.5rem;padding:1rem 0;border-bottom:1px solid #374151;text-decoration:none">Contact</a>
                <a href="tel:225-369-4434" style="background:#7CFC00;color:#1a1a1a;text-align:center;font-size:1.25rem;padding:1rem 1.5rem;border-radius:9999px;font-weight:bold;margin-top:2rem;text-decoration:none">
                    <i class="fas fa-phone"></i> Call Now: 225-369-4434
                </a>
            </div>
        </div>

        <!-- Main Content -->
        ${children}

        <!-- Footer -->
        <footer style="background:#000;border-top:1px solid rgba(124,252,0,0.2);padding:3rem 0">
            <div class="container">
                <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(250px,1fr));gap:2rem">
                    <!-- Company Info -->
                    <div>
                        <img src="/static/images/logo.png" alt="Southern Buck Lawn" style="height:80px;margin-bottom:1rem" width="150" height="80">
                        <p style="color:#9CA3AF">Professional Lawn Care & Landscaping</p>
                        <p style="color:#9CA3AF">Licensed & Insured</p>
                    </div>

                    <!-- Contact Info -->
                    <div>
                        <h3 style="color:#7CFC00;font-size:1.5rem;margin-bottom:1rem">Contact Us</h3>
                        <p style="color:white;margin-bottom:0.5rem">
                            <i class="fas fa-phone" style="color:#7CFC00;margin-right:0.5rem"></i>
                            <a href="tel:225-369-4434" style="color:white;text-decoration:none">225-369-4434</a>
                        </p>
                        <p style="color:white;margin-bottom:0.5rem">
                            <i class="fas fa-envelope" style="color:#7CFC00;margin-right:0.5rem"></i>
                            <a href="mailto:SBL@southernbucklawn.com" style="color:white;text-decoration:none">SBL@southernbucklawn.com</a>
                        </p>
                        <p style="color:white">
                            <i class="fas fa-map-marker-alt" style="color:#7CFC00;margin-right:0.5rem"></i>
                            Brett Dr., Walker, LA
                        </p>
                    </div>

                    <!-- Service Areas -->
                    <div>
                        <h3 style="color:#7CFC00;font-size:1.5rem;margin-bottom:1rem">Service Areas</h3>
                        <ul style="color:white;list-style:none">
                            <li style="margin-bottom:0.5rem"><a href="/lawn-care-walker-la" style="color:white;text-decoration:none">Walker, LA</a></li>
                            <li style="margin-bottom:0.5rem"><a href="/lawn-care-denham-springs-la" style="color:white;text-decoration:none">Denham Springs, LA</a></li>
                            <li style="margin-bottom:0.5rem"><a href="/lawn-care-port-vincent-la" style="color:white;text-decoration:none">Port Vincent, LA</a></li>
                            <li style="margin-bottom:0.5rem"><a href="/lawn-care-livingston-la" style="color:white;text-decoration:none">Livingston, LA</a></li>
                        </ul>
                    </div>

                    <!-- Quick Links -->
                    <div>
                        <h3 style="color:#7CFC00;font-size:1.5rem;margin-bottom:1rem">Quick Links</h3>
                        <ul style="color:white;list-style:none">
                            <li style="margin-bottom:0.5rem"><a href="/services" style="color:white;text-decoration:none">Our Services</a></li>
                            <li style="margin-bottom:0.5rem"><a href="/portfolio" style="color:white;text-decoration:none">Portfolio</a></li>
                            <li style="margin-bottom:0.5rem"><a href="/contact" style="color:white;text-decoration:none">Get a Quote</a></li>
                        </ul>
                    </div>
                </div>

                <div style="border-top:1px solid #374151;margin-top:2rem;padding-top:2rem;text-align:center">
                    <p style="color:#9CA3AF">© 2024 Southern Buck Lawn. All rights reserved.</p>
                    <p style="color:#9CA3AF;margin-top:0.5rem">Website: <a href="https://southernbucklawn.com" style="color:#7CFC00;text-decoration:none">SouthernBuckLawn.com</a></p>
                </div>
            </div>
        </footer>

        <!-- Optimized JavaScript -->
        <script>
          // Mobile Menu Toggle - Critical functionality
          document.addEventListener('DOMContentLoaded', function() {
            const mobileMenuBtn = document.getElementById('mobile-menu-btn');
            const mobileMenuClose = document.getElementById('mobile-menu-close');
            const mobileMenu = document.getElementById('mobile-menu');

            if (mobileMenuBtn && mobileMenu) {
              mobileMenuBtn.addEventListener('click', function() {
                mobileMenu.classList.add('active');
              });
            }

            if (mobileMenuClose && mobileMenu) {
              mobileMenuClose.addEventListener('click', function() {
                mobileMenu.classList.remove('active');
              });
            }

            // Close mobile menu when clicking outside
            document.addEventListener('click', function(e) {
              if (mobileMenu && mobileMenu.classList.contains('active') && 
                  !mobileMenu.contains(e.target) && !mobileMenuBtn.contains(e.target)) {
                mobileMenu.classList.remove('active');
              }
            });
          });

          // Lazy load non-critical scripts
          window.addEventListener('load', function() {
            // Add loading animations
            const elements = document.querySelectorAll('.loading');
            elements.forEach(el => {
              el.classList.add('loaded');
              el.classList.remove('loading');
            });
          });
        </script>
    </body>
    </html>
  `
}