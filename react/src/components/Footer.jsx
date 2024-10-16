import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <div className='footer'>
      <div className='container'>

        <div className='footer-contents'>
          <div className='footer-head'>
            <h1>Decagon</h1>
            <div className='socials'>
              <a href="https://twitter.com"><i className="fa-brands fa-twitter"></i></a>
              <a href="https://instagram.com"><i className="fa-brands fa-instagram"></i></a>
              <a href="https://linkedin.com"><i className="fa-brands fa-linkedin"></i></a>
              <a href="https://facebook.com"><i className="fa-brands fa-facebook"></i></a>           
            </div>
          </div>
          <div className='footer-item'>
            <h5>Decagon Institute</h5>
            <ul>
              <li><a href="#">Become a software engineer</a></li>
              <li><a href="#">Our Program</a></li>
              <li><a href="#">Testimonials</a></li>
              <li><a href="#">FAQs</a></li>
            </ul>
          </div>
          <div className='footer-item'>
            <h5>Talent Acquisition</h5>
            <ul>
              <li><a href="#">Decagon Fellowship</a></li>
              <li><a href="#">Hire Tech Talents</a></li>
              <li><a href="#">Speak with our team</a></li>
            </ul>
          </div>
          <div className='footer-item'>
            <h5>Decagon</h5>
            <ul>
              <li><a href="#">About Us</a></li>
              <li><a href="#">Careers</a></li>
              <li><a href="#">Testimonials</a></li>
              <li><a href="#">Contact Us</a></li>
            </ul>
          </div>
        </div>
        <div className='footer-info'>
          <div className='footer-info-terms'>
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
            <span>&copy; 2023.Decagon. All rights reserved.</span>
          </div>
          <span>info@decagon.hq</span>
        </div>
      </div>
    </div>
  )
}

export default Footer