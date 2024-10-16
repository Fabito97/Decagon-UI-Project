import React from 'react'
import './Testimonial.css'
import TestimonialBg from '../assets/testimonial-bg.png'
import Button from './Button'

const Testimonial = () => {
  return (
    <div className='testimonials container'>
      <h1>Testimonials</h1>
      <div className='testimonial-videos'>
        <img src={TestimonialBg} alt="" /> <br/>
        <div>
          <Button text='Previous'/>
          <Button text='Next' />
        </div>
      </div>
 
    </div>
  )
}

export default Testimonial