import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import HeroImage from '../components/HeroImage'
import Form from '../components/Form'

const Contact = () => {
  return (
    <div>
        <Navbar/>
        <HeroImage 
        heading='Contact'
        text='Contact us if you are ready to see the Earth from the Moon' />
        <Form />
        <Footer />
    </div>
  )
}

export default Contact