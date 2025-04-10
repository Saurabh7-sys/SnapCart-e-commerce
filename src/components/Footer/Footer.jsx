import React from 'react'
import './footer.css'
import { FaInstagram, FaFacebook, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <>
      <footer>
        <span className='socials'>
          <a href="https://www.instagram.com" target='_blank' rel="noopener noreferrer">
            <FaInstagram size={"20px"} />
          </a>
          <a href="https://www.facebook.com" target='_blank' rel="noopener noreferrer">
            <FaFacebook size={"20px"} />
          </a>
          <a href="https://www.linkedin.com" target='_blank' rel="noopener noreferrer">
            <FaLinkedin size={"20px"} />
          </a>
        </span>


        <div className="footer-links">
          <section className="quick-links">
            <ul className='links'>
              <li>FAQ</li>
              <li>Shipping & Returns</li>
              <li>Privacy Policy</li>
              <li>Terms & Conditions</li>
            </ul>
          </section>
          <section className="customer-support">
            <ul className='support-links'>
              <li>Email</li>
              <li>Phone</li>
              <li>Live Chat</li>
            </ul>
          </section>
        </div>


        <div className='copyright'>
          <p>We’re dedicated to offering you a seamless, secure, and convenient shopping experience. Explore today and let us help you find exactly what you need, with customer care that goes the extra mile!</p>
          <p> © 2025 SnapCart. All rights reserved.</p>
          <p>Created by: <a href="https://www.linkedin.com/in/saurabh-shelar-851ab5216" target='_blank' rel="noopener noreferrer">Saurabh Shelar</a></p>
        </div>
      </footer>
    </>
  )
}

export default Footer
