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

        <!-- Favicon -->
        <link rel="icon" type="image/x-icon" href="/favicon.ico">

        <!-- Performance: Preconnect to external domains -->
        <link rel="preconnect" href="https://fonts.googleapis.com">
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
        <link rel="preconnect" href="https://cdn.tailwindcss.com">
        <link rel="preconnect" href="https://cdn.jsdelivr.net">

        <!-- Performance: Load fonts with display=swap for faster rendering -->
        <link href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Roboto:wght@300;400;500;700&display=swap" rel="stylesheet">

        <!-- Tailwind CSS - Load normally for full styling -->
        <script src="https://cdn.tailwindcss.com"></script>

        <!-- Font Awesome - Load with defer for performance -->
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

        <!-- Original Beautiful Styles -->
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
            overflow-x: hidden;
          }

          h1, h2, h3, h4, h5, h6 {
            font-family: 'Bebas Neue', cursive;
            letter-spacing: 1px;
          }

          /* Hero Video Styling */
          .hero-video {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            object-fit: cover;
            z-index: -2;
          }

          .hero-overlay {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: linear-gradient(135deg, rgba(0, 0, 0, 0.7) 0%, rgba(0, 0, 0, 0.4) 100%);
            z-index: -1;
          }

          /* Smooth Animations */
          .scroll-animate {
            opacity: 0;
            transform: translateY(50px);
            transition: all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94);
          }

          .scroll-animate.visible {
            opacity: 1;
            transform: translateY(0);
          }

          .fade-in {
            animation: fadeInUp 1s ease-out forwards;
          }

          @keyframes fadeInUp {
            from {
              opacity: 0;
              transform: translateY(30px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }

          .gradient-text {
            background: linear-gradient(90deg, #7CFC00, #90EE90);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
          }

          /* Enhanced Button Animations */
          .btn-hover {
            transition: all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94);
            position: relative;
            overflow: hidden;
          }

          .btn-hover:hover {
            transform: translateY(-2px);
            box-shadow: 0 10px 20px rgba(124, 252, 0, 0.3);
          }

          .btn-hover::before {
            content: '';
            position: absolute;
            top: 0;
            left: -100%;
            width: 100%;
            height: 100%;
            background: linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent);
            transition: left 0.5s;
          }

          .btn-hover:hover::before {
            left: 100%;
          }

          /* Mobile Menu Styles */
          .mobile-menu {
            transform: translateX(-100%);
            transition: transform 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
            backdrop-filter: blur(20px);
          }

          .mobile-menu.active {
            transform: translateX(0);
          }

          /* Card Hover Effects */
          .card-hover {
            transition: all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
          }

          .card-hover:hover {
            transform: translateY(-8px) scale(1.02);
            box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
          }

          /* Smooth Scrolling */
          html {
            scroll-behavior: smooth;
          }

          /* Loading Animation */
          .loading-spinner {
            border: 3px solid #2a2a2a;
            border-top: 3px solid #7CFC00;
            border-radius: 50%;
            width: 40px;
            height: 40px;
            animation: spin 1s linear infinite;
          }

          @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
          }

          /* Parallax Effect */
          .parallax {
            transform: translateZ(0);
            will-change: transform;
          }

          /* Glow Effects */
          .glow {
            box-shadow: 0 0 20px rgba(124, 252, 0, 0.3);
          }

          .text-glow {
            text-shadow: 0 0 10px rgba(124, 252, 0, 0.5);
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
        <!-- Navigation with Glass Effect -->
        <nav class="fixed w-full z-50 transition-all duration-300" id="navbar">
            <div class="bg-dark-gray/80 backdrop-blur-md border-b border-lime-green/20">
                <div class="container mx-auto px-4">
                    <div class="flex justify-between items-center h-20">
                        <!-- Logo -->
                        <a href="/" class="flex items-center transition-transform duration-300 hover:scale-105">
                            <img src="/static/images/logo.png" alt="Southern Buck Lawn" class="h-16" loading="eager">
                        </a>

                        <!-- Desktop Menu -->
                        <div class="hidden md:flex items-center space-x-8">
                            <a href="/" class="text-white hover:text-lime-green transition-colors duration-300 font-medium">Home</a>
                            <a href="/services" class="text-white hover:text-lime-green transition-colors duration-300 font-medium">Services</a>
                            <a href="/portfolio" class="text-white hover:text-lime-green transition-colors duration-300 font-medium">Portfolio</a>
                            <a href="/contact" class="text-white hover:text-lime-green transition-colors duration-300 font-medium">Contact</a>
                            <a href="tel:225-369-4434" class="bg-lime-green text-dark-gray px-6 py-2 rounded-full font-bold btn-hover">
                                <i class="fas fa-phone mr-2"></i>Call Now
                            </a>
                        </div>

                        <!-- Mobile Menu Button -->
                        <button id="mobile-menu-btn" class="md:hidden text-white text-2xl transition-transform duration-300 hover:scale-110">
                            <i class="fas fa-bars"></i>
                        </button>
                    </div>
                </div>
            </div>
        </nav>

        <!-- Mobile Menu -->
        <div id="mobile-menu" class="mobile-menu fixed top-0 left-0 w-full h-full bg-dark-gray/95 z-40 md:hidden">
            <div class="flex flex-col h-full pt-24 px-6">
                <button id="mobile-menu-close" class="absolute top-6 right-6 text-white text-2xl transition-transform duration-300 hover:scale-110 hover:text-lime-green">
                    <i class="fas fa-times"></i>
                </button>
                <a href="/" class="text-white text-2xl py-4 border-b border-gray-700 transition-colors duration-300 hover:text-lime-green">Home</a>
                <a href="/services" class="text-white text-2xl py-4 border-b border-gray-700 transition-colors duration-300 hover:text-lime-green">Services</a>
                <a href="/portfolio" class="text-white text-2xl py-4 border-b border-gray-700 transition-colors duration-300 hover:text-lime-green">Portfolio</a>
                <a href="/contact" class="text-white text-2xl py-4 border-b border-gray-700 transition-colors duration-300 hover:text-lime-green">Contact</a>
                <a href="tel:225-369-4434" class="bg-lime-green text-dark-gray text-center text-xl px-6 py-4 rounded-full font-bold mt-8 btn-hover">
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
                    <div class="scroll-animate">
                        <img src="/static/images/logo.png" alt="Southern Buck Lawn" class="h-20 mb-4" loading="lazy">
                        <p class="text-gray-400">Professional Lawn Care & Landscaping</p>
                        <p class="text-gray-400">Licensed & Insured</p>
                    </div>

                    <!-- Contact Info -->
                    <div class="scroll-animate">
                        <h3 class="text-lime-green text-2xl mb-4 font-bebas">Contact Us</h3>
                        <p class="text-white mb-2">
                            <i class="fas fa-phone mr-2 text-lime-green"></i>
                            <a href="tel:225-369-4434" class="hover:text-lime-green transition-colors duration-300">225-369-4434</a>
                        </p>
                        <p class="text-white mb-2">
                            <i class="fas fa-envelope mr-2 text-lime-green"></i>
                            <a href="mailto:SBL@southernbucklawn.com" class="hover:text-lime-green transition-colors duration-300">SBL@southernbucklawn.com</a>
                        </p>
                        <p class="text-white">
                            <i class="fas fa-map-marker-alt mr-2 text-lime-green"></i>
                            Brett Dr., Walker, LA
                        </p>
                    </div>

                    <!-- Service Areas -->
                    <div class="scroll-animate">
                        <h3 class="text-lime-green text-2xl mb-4 font-bebas">Service Areas</h3>
                        <ul class="text-white space-y-2">
                            <li><a href="/lawn-care-walker-la" class="hover:text-lime-green transition-colors duration-300">Walker, LA</a></li>
                            <li><a href="/lawn-care-denham-springs-la" class="hover:text-lime-green transition-colors duration-300">Denham Springs, LA</a></li>
                            <li><a href="/lawn-care-port-vincent-la" class="hover:text-lime-green transition-colors duration-300">Port Vincent, LA</a></li>
                            <li><a href="/lawn-care-livingston-la" class="hover:text-lime-green transition-colors duration-300">Livingston, LA</a></li>
                        </ul>
                    </div>

                    <!-- Quick Links -->
                    <div class="scroll-animate">
                        <h3 class="text-lime-green text-2xl mb-4 font-bebas">Quick Links</h3>
                        <ul class="text-white space-y-2">
                            <li><a href="/services" class="hover:text-lime-green transition-colors duration-300">Our Services</a></li>
                            <li><a href="/portfolio" class="hover:text-lime-green transition-colors duration-300">Portfolio</a></li>
                            <li><a href="/contact" class="hover:text-lime-green transition-colors duration-300">Get a Quote</a></li>
                        </ul>
                    </div>
                </div>

                <div class="border-t border-gray-800 mt-8 pt-8 text-center">
                    <p class="text-gray-400">© 2024 Southern Buck Lawn. All rights reserved.</p>
                    <p class="text-gray-400 mt-2">Website: <a href="https://southernbucklawn.com" class="text-lime-green hover:underline transition-all duration-300">SouthernBuckLawn.com</a></p>
                </div>
            </div>
        </footer>

        <!-- Enhanced JavaScript -->
        <script>
          // Mobile Menu Toggle with Animation
          const mobileMenuBtn = document.getElementById('mobile-menu-btn');
          const mobileMenuClose = document.getElementById('mobile-menu-close');
          const mobileMenu = document.getElementById('mobile-menu');

          if (mobileMenuBtn) {
            mobileMenuBtn.addEventListener('click', () => {
              mobileMenu.classList.add('active');
              document.body.style.overflow = 'hidden';
            });
          }

          if (mobileMenuClose) {
            mobileMenuClose.addEventListener('click', () => {
              mobileMenu.classList.remove('active');
              document.body.style.overflow = '';
            });
          }

          // Close mobile menu when clicking links
          document.querySelectorAll('#mobile-menu a').forEach(link => {
            link.addEventListener('click', () => {
              mobileMenu.classList.remove('active');
              document.body.style.overflow = '';
            });
          });

          // Enhanced Scroll Animation
          const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
          };

          const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry, index) => {
              if (entry.isIntersecting) {
                setTimeout(() => {
                  entry.target.classList.add('visible');
                }, index * 100);
              }
            });
          }, observerOptions);

          document.querySelectorAll('.scroll-animate').forEach(el => {
            observer.observe(el);
          });

          // Navbar Background on Scroll
          const navbar = document.getElementById('navbar');
          let scrolled = false;

          window.addEventListener('scroll', () => {
            if (window.scrollY > 50 && !scrolled) {
              navbar.classList.add('glow');
              scrolled = true;
            } else if (window.scrollY <= 50 && scrolled) {
              navbar.classList.remove('glow');
              scrolled = false;
            }
          });

          // Smooth Scroll for Anchor Links
          document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
              e.preventDefault();
              const target = document.querySelector(this.getAttribute('href'));
              if (target) {
                target.scrollIntoView({
                  behavior: 'smooth',
                  block: 'start'
                });
              }
            });
          });

          // Parallax Effect (Simple)
          window.addEventListener('scroll', () => {
            const scrolled = window.pageYOffset;
            const parallaxElements = document.querySelectorAll('.parallax');
            parallaxElements.forEach(element => {
              const speed = element.dataset.speed || 0.5;
              element.style.transform = `translateY(${scrolled * speed}px)`;
            });
          });

          // Video Error Handling
          document.addEventListener('DOMContentLoaded', () => {
            const videos = document.querySelectorAll('video');
            videos.forEach(video => {
              video.addEventListener('error', () => {
                console.log('Video failed to load, showing fallback image');
                const fallback = video.nextElementSibling;
                if (fallback && fallback.tagName === 'IMG') {
                  fallback.style.display = 'block';
                  video.style.display = 'none';
                }
              });
            });
          });
        </script>
    </body>
    </html>
  `
}