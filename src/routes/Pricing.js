import React from 'react'
import Navbar from '../components/Navbar.js'
import Footer from '../components/Footer.js'
import HeroImage from '../components/HeroImage.js'
import PricingCards from '../components/PricingCards.js'

const Pricing = () => {
  return (
    <div>
        <Navbar />
        <HeroImage
            heading='PRICING.'
            text=' Choose your package' />
        <PricingCards />
        <Footer />
    </div>
  )
}

export default Pricing