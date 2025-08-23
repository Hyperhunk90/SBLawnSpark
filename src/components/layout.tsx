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
        
        <!-- Favicon -->
        <link rel="icon" type="image/x-icon" href="/favicon.ico">
        
        <!-- Fonts -->
        <link rel="preconnect" href="https://fonts.googleapis.com">
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
        <link href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Roboto:wght@300;400;500;700&display=swap" rel="stylesheet">
        
        <!-- Tailwind CSS -->
        <script src="https://cdn.tailwindcss.com"></script>
        
        <!-- Font Awesome -->
        <link href="https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@6.4.0/css/all.min.css" rel="stylesheet">
        
        <!-- Custom Tailwind Config -->
        <script>
          tailwind.config = {
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
        </script>
        
        <!-- Custom Styles -->
        <style>
          * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
          }
          
          body {
            font-family: 'Roboto', sans-serif;
            background-color: #1a1a1a;
            color: white;
          }
          
          h1, h2, h3, h4, h5, h6 {
            font-family: 'Bebas Neue', cursive;
          }
          
          .hero-video {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            object-fit: cover;
            z-index: -1;
          }
          
          .hero-overlay {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0, 0, 0, 0.5);
            z-index: -1;
          }
          
          .scroll-animate {
            opacity: 0;
            transform: translateY(30px);
            transition: all 0.6s ease-out;
          }
          
          .scroll-animate.visible {
            opacity: 1;
            transform: translateY(0);
          }
          
          .gradient-text {
            background: linear-gradient(90deg, #7CFC00, #90EE90);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
          }
          
          /* Mobile Menu Styles */
          .mobile-menu {
            transform: translateX(-100%);
            transition: transform 0.3s ease-in-out;
          }
          
          .mobile-menu.active {
            transform: translateX(0);
          }
        </style>
        
        ${schema ? `
        <!-- Schema.org Markup -->
        <script type="application/ld+json">
        ${schema}
        </script>
        ` : ''}
    </head>
    <body>
        <!-- Navigation -->
        <nav class="fixed w-full z-50 bg-dark-gray/95 backdrop-blur-sm border-b border-lime-green/20">
            <div class="container mx-auto px-4">
                <div class="flex justify-between items-center h-20">
                    <!-- Logo -->
                    <a href="/" class="flex items-center">
                        <img src="/static/images/logo.png" alt="Southern Buck Lawn" class="h-16">
                    </a>
                    
                    <!-- Desktop Menu -->
                    <div class="hidden md:flex items-center space-x-6">
                        <a href="/" class="text-white hover:text-lime-green transition-colors">Home</a>
                        <a href="/services" class="text-white hover:text-lime-green transition-colors">Services</a>
                        <a href="/portfolio" class="text-white hover:text-lime-green transition-colors">Portfolio</a>
                        <a href="/contact" class="text-white hover:text-lime-green transition-colors">Contact</a>
                        <a href="tel:225-369-4434" class="bg-lime-green text-dark-gray px-6 py-2 rounded-full font-bold hover:bg-green-400 transition-colors">
                            <i class="fas fa-phone mr-2"></i>Call Now
                        </a>
                    </div>
                    
                    <!-- Mobile Menu Button -->
                    <button id="mobile-menu-btn" class="md:hidden text-white text-2xl">
                        <i class="fas fa-bars"></i>
                    </button>
                </div>
            </div>
        </nav>
        
        <!-- Mobile Menu -->
        <div id="mobile-menu" class="mobile-menu fixed top-0 left-0 w-full h-full bg-dark-gray z-40 md:hidden">
            <div class="flex flex-col h-full pt-20 px-6">
                <button id="mobile-menu-close" class="absolute top-6 right-6 text-white text-2xl">
                    <i class="fas fa-times"></i>
                </button>
                <a href="/" class="text-white text-2xl py-4 border-b border-gray-700">Home</a>
                <a href="/services" class="text-white text-2xl py-4 border-b border-gray-700">Services</a>
                <a href="/portfolio" class="text-white text-2xl py-4 border-b border-gray-700">Portfolio</a>
                <a href="/contact" class="text-white text-2xl py-4 border-b border-gray-700">Contact</a>
                <a href="tel:225-369-4434" class="bg-lime-green text-dark-gray text-center text-xl px-6 py-4 rounded-full font-bold mt-8">
                    <i class="fas fa-phone mr-2"></i>Call Now: 225-369-4434
                </a>
            </div>
        </div>
        
        <!-- Main Content -->
        ${children}
        
        <!-- Footer -->
        <footer class="bg-black border-t border-lime-green/20 py-12">
            <div class="container mx-auto px-4">
                <div class="grid md:grid-cols-4 gap-8">
                    <!-- Company Info -->
                    <div>
                        <img src="/static/images/logo.png" alt="Southern Buck Lawn" class="h-20 mb-4">
                        <p class="text-gray-400">Professional Lawn Care & Landscaping</p>
                        <p class="text-gray-400">Licensed & Insured</p>
                    </div>
                    
                    <!-- Contact Info -->
                    <div>
                        <h3 class="text-lime-green text-2xl mb-4">Contact Us</h3>
                        <p class="text-white mb-2">
                            <i class="fas fa-phone mr-2 text-lime-green"></i>
                            <a href="tel:225-369-4434" class="hover:text-lime-green">225-369-4434</a>
                        </p>
                        <p class="text-white mb-2">
                            <i class="fas fa-envelope mr-2 text-lime-green"></i>
                            <a href="mailto:SBL@southernbucklawn.com" class="hover:text-lime-green">SBL@southernbucklawn.com</a>
                        </p>
                        <p class="text-white">
                            <i class="fas fa-map-marker-alt mr-2 text-lime-green"></i>
                            Brett Dr., Walker, LA
                        </p>
                    </div>
                    
                    <!-- Service Areas -->
                    <div>
                        <h3 class="text-lime-green text-2xl mb-4">Service Areas</h3>
                        <ul class="text-white space-y-2">
                            <li><a href="/lawn-care-walker-la" class="hover:text-lime-green">Walker, LA</a></li>
                            <li><a href="/lawn-care-denham-springs-la" class="hover:text-lime-green">Denham Springs, LA</a></li>
                            <li><a href="/lawn-care-port-vincent-la" class="hover:text-lime-green">Port Vincent, LA</a></li>
                            <li><a href="/lawn-care-livingston-la" class="hover:text-lime-green">Livingston, LA</a></li>
                        </ul>
                    </div>
                    
                    <!-- Quick Links -->
                    <div>
                        <h3 class="text-lime-green text-2xl mb-4">Quick Links</h3>
                        <ul class="text-white space-y-2">
                            <li><a href="/services" class="hover:text-lime-green">Our Services</a></li>
                            <li><a href="/portfolio" class="hover:text-lime-green">Portfolio</a></li>
                            <li><a href="/contact" class="hover:text-lime-green">Get a Quote</a></li>
                        </ul>
                    </div>
                </div>
                
                <div class="border-t border-gray-800 mt-8 pt-8 text-center">
                    <p class="text-gray-400">© 2024 Southern Buck Lawn. All rights reserved.</p>
                    <p class="text-gray-400 mt-2">Website: <a href="https://southernbucklawn.com" class="text-lime-green hover:underline">SouthernBuckLawn.com</a></p>
                </div>
            </div>
        </footer>
        
        <!-- Scripts -->
        <script>
          // Mobile Menu Toggle
          const mobileMenuBtn = document.getElementById('mobile-menu-btn');
          const mobileMenuClose = document.getElementById('mobile-menu-close');
          const mobileMenu = document.getElementById('mobile-menu');
          
          if (mobileMenuBtn) {
            mobileMenuBtn.addEventListener('click', () => {
              mobileMenu.classList.add('active');
            });
          }
          
          if (mobileMenuClose) {
            mobileMenuClose.addEventListener('click', () => {
              mobileMenu.classList.remove('active');
            });
          }
          
          // Scroll Animation
          const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
          };
          
          const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
              if (entry.isIntersecting) {
                entry.target.classList.add('visible');
              }
            });
          }, observerOptions);
          
          document.querySelectorAll('.scroll-animate').forEach(el => {
            observer.observe(el);
          });
        </script>
    </body>
    </html>
  `
}