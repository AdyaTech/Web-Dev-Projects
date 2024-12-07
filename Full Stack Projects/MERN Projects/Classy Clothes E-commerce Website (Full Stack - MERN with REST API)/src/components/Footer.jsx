import React from 'react'
import {assets} from '../assets/assets'
import { FaXTwitter } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    <footer>
      <div className='footer'>
        <div className='logo'>
        <img src={assets.logo} className='w-180 h-30' alt="" />
          <p>Small artisan label that offers a thoughtfully curated collection of high quality everyday attire.</p>
          <div className='icon-container'>
            <div className='socialicon'><FaXTwitter size={20} /></div>
            <div className='socialicon'><FaFacebookF size={20} /></div>
            <div className='socialicon'><FaLinkedinIn size={20} /></div>
          </div>
        </div>

        <div className='footer-links'>
          <h3>Company</h3>
          <ul>
            <li>About</li>
            <li>Terms of Use</li>
            <li>Privacy Policy</li>
            <li>How it Works</li>
            
          </ul>
        </div>

        <div className='footer-links'>
          <h3>Support</h3>
          <ul>
            <li>Support Carrer</li>
            <li>24h Service</li>
            <li>Quick Chat</li>
          </ul>
        </div>

        <div className='footer-links'>
          <h3>Contact</h3>
          <ul>
            <li>Whatsapp</li>
            <li>Support 24h</li>
          </ul>
        </div>
      </div>

      <div className='copyright'>
        <p>© 2024, Classy Clothes</p>
        <p>Design by <span>AdyaTech</span></p>
        <p>Code by <span>AdyaTech</span></p>
      </div>
    </footer>
  )
}


export default Footer
