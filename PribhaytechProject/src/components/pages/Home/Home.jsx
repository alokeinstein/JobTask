import React from 'react'
import HeroSection from './Container1/HeroSection'
import CoursesSection from './Container2/CoursesSection'
import LearningPath from './Container3/LearningPath'
import BenefitsSection from './Container4/BenefitsSection'
import TestimonialsSection from './Container5/Testimonials'
import StatisticsSection from './Container6/StatisticsSection'
import Contact from '../ContactUs/Contact'
// import MapSection from './Container7/MapSection'

const Home = () => {
  return (
    <>
    <HeroSection/>
    <CoursesSection/>
    <LearningPath/>
    <BenefitsSection/>
    <TestimonialsSection/>
    <StatisticsSection/>
    <Contact/>
    {/* <MapSection/> */}
    </>
  )
}

export default Home
