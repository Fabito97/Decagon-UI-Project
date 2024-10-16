import Button from './Button'
import './Contact.css'

import React from 'react'

const Contact = () => {
  return (
    <div className='contact'>
      <div className='container'>

        <div className='contact-box'>
          <h1>Contact Us</h1>
          <p>Do you wish to speak to a Recruiter, Training Consultant, or have general enquiries? Fill the form below and representative will be in touch ith you.</p>

          <form className='contact-form' method='post'>
            <Input label="Name" 
                placeholder="Type in your name"
                type="name" />
            <div className='form-flex'> 
              <Input 
                label="Email" 
                placeholder="Type in your email"
                type="email" />
              <Input label="PhoneNumber" 
                placeholder="Type in your phone number"
                type="phone" />
              <Input label="Company" 
                placeholder="Type in your company name"
                type="name" />
              <Input label="Industry" 
                placeholder="Type in your name"
                type="name" />
            </div>
            <Input label="Job Title" 
                placeholder="Type it here"
                type="name"/>
            <Input label="What programming language do you need engineers in?" 
                placeholder="Type it here"
                type="name" />
            <Input label="How many engineers do you need" 
                placeholder="Type it here"
                type="name" />
            <label htmlFor="">Enquiry (Optional)</label>
            <textarea type="text"></textarea>
            <Button text='Submit'/>
          </form>
        </div>
      </div>
    </div>
  )
}

const Input = ({placeholder, type, label}) => {
  return (
    <div className='form-group'>
      <label htmlFor="name">{label}</label>
      <input 
        placeholder={placeholder}        
        type={type}
      />

    </div>
  )
}

export default Contact