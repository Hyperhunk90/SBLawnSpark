import React from 'react'
import { Helmet } from 'react-helmet-async'
import ServicesSection from '../components/sections/ServicesSection'
import CTASection from '../components/sections/CTASection'

const Services = () => {
  return (
    <>
      <Helmet>
        <title>Lawn Care Services Walker LA | Landscaping & Maintenance | Southern Buck Lawn</title>
        <meta 
          name="description" 
          content="Complete lawn care and landscaping services in Walker, Louisiana. Lawn mowing, fertilization, landscape design, weed control, seasonal cleanup. Serving Livingston Parish. Call (225) 369-4434." 
        />
        <meta 
          name="keywords" 
          content="lawn care services Walker LA, landscaping Walker Louisiana, lawn mowing Walker, fertilization services, weed control, landscape design, seasonal cleanup, Livingston Parish lawn care" 
        />
      </Helmet>

      <div className="pt-8">
        <ServicesSection />
        <CTASection />
      </div>
    </>
  )
}

export default Services