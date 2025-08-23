export const getLocalBusinessSchema = (location: string = 'Walker') => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Southern Buck Lawn",
    "description": "Professional lawn care and landscaping services in Walker, LA and surrounding areas. Licensed, insured, and owner-operated.",
    "url": "https://southernbucklawn.com",
    "telephone": "225-369-4434",
    "email": "SBL@southernbucklawn.com",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Brett Dr",
      "addressLocality": "Walker",
      "addressRegion": "LA",
      "addressCountry": "US"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "30.4868",
      "longitude": "-90.8623"
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday"
      ],
      "opens": "07:00",
      "closes": "18:00"
    },
    "priceRange": "$$",
    "image": "https://southernbucklawn.com/static/images/logo.png",
    "serviceArea": {
      "@type": "GeoCircle",
      "geoMidpoint": {
        "@type": "GeoCoordinates",
        "latitude": "30.4868",
        "longitude": "-90.8623"
      },
      "geoRadius": "20 miles"
    },
    "areaServed": [
      {
        "@type": "City",
        "name": "Walker",
        "addressRegion": "LA"
      },
      {
        "@type": "City",
        "name": "Denham Springs",
        "addressRegion": "LA"
      },
      {
        "@type": "City",
        "name": "Port Vincent",
        "addressRegion": "LA"
      },
      {
        "@type": "City",
        "name": "Livingston",
        "addressRegion": "LA"
      }
    ],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Lawn Care & Landscaping Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Weekly/Bi-Weekly Mowing",
            "description": "Professional lawn cutting with precision edging and trimming"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Landscaping Design & Installation",
            "description": "Custom landscape design with 3D planning software"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Hardscaping",
            "description": "Pavers, retaining walls, fire pits, and outdoor kitchens"
          }
        }
      ]
    },
    "founder": {
      "@type": "Person",
      "name": "Shane Dantone",
      "jobTitle": "Owner"
    },
    "sameAs": [
      "https://southernbucklawn.com"
    ]
  }
  
  return JSON.stringify(schema, null, 2)
}