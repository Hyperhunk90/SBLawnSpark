import React from 'react'
import { Helmet } from 'react-helmet-async'
import HeroSection from '../components/sections/HeroSection'
import ServicesSection from '../components/sections/ServicesSection'
import AboutSection from '../components/sections/AboutSection'
import TestimonialsSection from '../components/sections/TestimonialsSection'
import GallerySection from '../components/sections/GallerySection'
import CTASection from '../components/sections/CTASection'
import ServiceAreasSection from '../components/sections/ServiceAreasSection'

const Home = () => {
  return (
    <>
      <Helmet>
        <title>Southern Buck Lawn Care - Professional Lawn Care Services in Walker, LA | Shane Dantone</title>
        <meta 
          name="description" 
          content="Expert lawn care & landscaping services in Walker, Louisiana. Serving Livingston Parish, Denham Springs, Watson, Baton Rouge, Gonzales & Prairieville. Christmas light installation available. Licensed & insured. Call (225) 369-4434 for your free quote!" 
        />
        <meta 
          name="keywords" 
          content="lawn care Walker LA, landscape design Walker Louisiana, lawn mowing Walker, landscaping Livingston Parish, lawn care Denham Springs, landscape Watson LA, lawn service Baton Rouge, landscaping Gonzales, lawn care Prairieville, Christmas lights installation Walker LA, Shane Dantone Southern Buck Lawn" 
        />
        
        {/* Local Business Schema */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "@id": "https://southernbucklawn.com/#business",
            "name": "Southern Buck Lawn",
            "alternateName": "Southern Buck Lawn Care",
            "description": "Professional lawn care and landscaping services in Walker, Louisiana and surrounding areas including Livingston Parish, Denham Springs, Watson, Baton Rouge, Gonzales, and Prairieville.",
            "url": "https://southernbucklawn.com",
            "telephone": "(225) 369-4434",
            "email": "info@southernbucklawn.com",
            "founder": {
              "@type": "Person",
              "name": "Shane Dantone"
            },
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "28790 Brett Dr",
              "addressLocality": "Walker",
              "addressRegion": "LA",
              "postalCode": "70785",
              "addressCountry": "US"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": 30.4891,
              "longitude": -90.8643
            },
            "areaServed": [
              {
                "@type": "City",
                "name": "Walker",
                "containedInPlace": {
                  "@type": "State",
                  "name": "Louisiana"
                }
              },
              {
                "@type": "City",
                "name": "Denham Springs",
                "containedInPlace": {
                  "@type": "State",
                  "name": "Louisiana"
                }
              },
              {
                "@type": "City",
                "name": "Watson",
                "containedInPlace": {
                  "@type": "State",
                  "name": "Louisiana"
                }
              },
              {
                "@type": "City",
                "name": "Baton Rouge",
                "containedInPlace": {
                  "@type": "State",
                  "name": "Louisiana"
                }
              },
              {
                "@type": "City",
                "name": "Gonzales",
                "containedInPlace": {
                  "@type": "State",
                  "name": "Louisiana"
                }
              },
              {
                "@type": "City",
                "name": "Prairieville",
                "containedInPlace": {
                  "@type": "State",
                  "name": "Louisiana"
                }
              },
              {
                "@type": "AdministrativeArea",
                "name": "Livingston Parish"
              }
            ],
            "serviceType": [
              "Lawn Care",
              "Landscape Design",
              "Lawn Mowing",
              "Fertilization",
              "Weed Control",
              "Seasonal Cleanup",
              "Christmas Light Installation",
              "Landscaping",
              "Yard Maintenance"
            ],
            "priceRange": "$$",
            "paymentAccepted": ["Cash", "Check", "Credit Card"],
            "currenciesAccepted": "USD",
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "Lawn Care Services",
              "itemListElement": [
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Lawn Care Walker LA",
                    "description": "Professional lawn mowing, fertilization, and maintenance services in Walker, Louisiana"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Landscape Design Walker",
                    "description": "Custom landscape design and installation services in Walker, Louisiana"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Christmas Light Installation Walker LA",
                    "description": "Professional Christmas light installation and removal services in Walker, Louisiana"
                  }
                }
              ]
            },
            "openingHours": "Mo-Fr 07:00-18:00, Sa 08:00-16:00",
            "image": "https://southernbucklawn.com/assets/images/Southern_Buck_Logo.png",
            "logo": "https://southernbucklawn.com/assets/images/Southern_Buck_Logo.png",
            "sameAs": [
              "https://www.facebook.com/SouthernBuckLawn",
              "https://www.instagram.com/southernbucklawn"
            ]
          })}
        </script>
        
        {/* FAQ Schema */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "What areas does Southern Buck Lawn serve?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "We serve Walker, Louisiana and surrounding areas including Livingston Parish, Denham Springs, Watson, Baton Rouge, Gonzales, and Prairieville."
                }
              },
              {
                "@type": "Question",
                "name": "Do you offer Christmas light installation?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes! We provide professional Christmas light installation and removal services throughout our service areas in Louisiana."
                }
              },
              {
                "@type": "Question",
                "name": "Are you licensed and insured?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes, Southern Buck Lawn is fully licensed and insured for your protection and peace of mind."
                }
              },
              {
                "@type": "Question",
                "name": "How can I get a free quote?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "You can call us at (225) 369-4434 or fill out our online quote form to receive your free estimate."
                }
              }
            ]
          })}
        </script>
      </Helmet>

      <HeroSection />
      <ServicesSection />
      <AboutSection />
      <ServiceAreasSection />
      <GallerySection />
      <TestimonialsSection />
      <CTASection />
    </>
  )
}

export default Home