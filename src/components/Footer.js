import React from 'react'
import { FaFacebook, FaLinkedin, FaMailBulk, FaPhone, FaSearchLocation, FaTwitter } from 'react-icons/fa'
import './FooterStyles.css'

const Footer = () => {
  return (
    <div className='footer'>
        <div className='footer-container'>
            <div className='left'>
                <div className='location'>
                    <FaSearchLocation size={20} style={{color: '#fff', marginRight:'2rem'}} />
                    <div>
                        <h4>7300 Rolling Oak Lane</h4>
                        <h4>Springfield, VA</h4>
                        <h4>22153</h4>
                    </div>
                </div>
                <div className='phone'>
                    <h4> <FaPhone size={20} style={{color: '#fff', marginRight:'2rem'}} />
                    703 424 3894
                    </h4>
                </div>
                <div className='email'>
                    <h4> <FaMailBulk size={20} style={{color: '#fff', marginRight:'2rem'}} />
                    moon@mairlines.com
                    </h4>
                </div>
            </div>
            <div className='right'>
                <h4>About</h4>
                <p id="about-description">"Lorem ipsum dolor sit amet, 
                    consectetur adipiscing elit, 
                    sed do eiusmod tempor incididunt ut 
                    labore et dolore magna aliqua
                </p>
                <div className='social'>
                    <FaFacebook size={30} style={{color: '#fff', marginRight:'1rem'}}/>
                    <FaLinkedin size={30} style={{color: '#fff', marginRight:'1rem'}}/>
                    <FaTwitter size={30} style={{color: '#fff', marginRight:'1rem'}}/>
                </div>
            </div>
        </div>
        <div className='center'>
                <p>Copyright © 2022 - Moon Arlines, Inc. - All Rights Reserved </p>
            </div>
    </div>
  )
}

export default Footer