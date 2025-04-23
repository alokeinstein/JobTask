import React from 'react'
import HeroSection from './Container1/HeroSection'
import OurHairCategories from './Container2/OurHairCategories'
import FreshArrivals from './Container3/FreshArrivals'
import TryOur3DVirtualHair from './Container4/TryOur3DVirtualHair'
import TestimonialSlider from './Container6/Testimonials'
import StylingCenters from './Container5/StylingCenters'

const Home = () => {
  return (
    <div>
      <HeroSection/>
      <OurHairCategories/>
      <FreshArrivals/>
      <TryOur3DVirtualHair/>
      <StylingCenters/>
      <TestimonialSlider/>
    </div>
  )
}

export default Home
