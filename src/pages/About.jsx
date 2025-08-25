import React from 'react'
import { Helmet } from 'react-helmet-async'
import AboutSection from '../components/sections/AboutSection'
import CTASection from '../components/sections/CTASection'

const About = () => {
  return (
    <>
      <Helmet>
        <title>About Shane Dantone | Southern Buck Lawn Owner | Walker LA Lawn Care</title>
        <meta 
          name="description" 
          content="Meet Shane Dantone, owner of Southern Buck Lawn Care in Walker, Louisiana. 13+ years experience, licensed & insured. Passionate about creating beautiful outdoor spaces in Livingston Parish." 
        />
        <meta 
          name="keywords" 
          content="Shane Dantone Southern Buck Lawn, Walker LA lawn care owner, Livingston Parish landscaper, licensed lawn care professional Walker Louisiana" 
        />
      </Helmet>

      <div className="pt-8">
        <AboutSection />
        <CTASection />
      </div>
    </>
  )
}

export default About