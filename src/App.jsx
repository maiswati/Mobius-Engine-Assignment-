import React from 'react'
import './App.css'
import HeroSection from './components/HeroSection'
import AboutSection from './components/AboutSection'
import Features from './components/Features'
import Process from './components/Process'
import PricingSection from './components/PricingSection'
import ContactUs from './components/ContactUs'
import Footer from './components/Footer'
import ContactInfo from './components/ContactInfo';
const App = () => {
  return (
    <div className='max-w-[1500px] mx-auto px-4'>
        <HeroSection/>
        <AboutSection/>
        <Features/>
        <Process/>
        <PricingSection/>
        <ContactUs/>
        <ContactInfo/>
        <Footer/>
    </div>
  )
}

export default App
