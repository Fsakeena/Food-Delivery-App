import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'

const Footer = () => {
  return (
    <div className='footer' id='footer'>
      <div className='footer-content'>
        <div className='footer-content-left'>
            <img src={assets.logo} />
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quo ratione aliquam consequatur. Amet culpa molestias facere assumenda ad quidem quasi ullam 
                debitis repellat reprehenderit qui, atque vel sit laborum nulla.</p>

            <div className='footer-social-icons'>
                <img src={assets.facebook_icon} alt=''/>
                <img src={assets.twitter_icon} alt=''/>
                <img src={assets.linkedin_icon} alt=''/>
            </div>
        </div>

        <div className='footer-content-right'>
            <h2>COMPANY</h2>
            <ul>
                <li>Home</li>
                <li>About Us</li>
                <li>Privacy Policy</li>
            </ul>
        </div>

        <div className='footer-content-center'>
            <h2>GET IN TOUCH</h2>
            <ul>
                <li>076-1205690</li>
                <li>a.f.sakeena@gmail.com</li>
            </ul>
        </div>
      </div>
      <hr/>
      <p className='footer-copyright'>Copyright 2024 &copy; Coding Lovers.com - All Right Reserverd.</p>
    </div>
  )
}

export default Footer
