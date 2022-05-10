import React from 'react'
import Navbar from '../components/Navbar.js'
import Footer from '../components/Footer.js'
import HeroImage from '../components/HeroImage'
import TrainingCard from '../components/TrainingCard.js'

const Training = () => {
  return (
    <div>
        <Navbar />
        <HeroImage
        heading='TRAINING.'
        text='Get Ready to go to the Moon!'/>
        <TrainingCard />
        <Footer />
    </div>
  )
}

export default Training