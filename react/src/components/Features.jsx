import Button from './Button'
import './Features.css'

import React from 'react'

const featureItems = [
  {
    title: "Decagon Fellowship",
    content: "Get skilled Engineering talent on a 2 year commitment.",
  },
  {
    title: "Direct Hire",
    content: "Avoid recruitment delay by hiring vetted engineers",
  },
  {
    title: "Customized Training",
    content: "We help train selected Engineers in your organisations stack and frameworks",
  },
  {
    title: "Customized Solutions",
    content: "Do you have specific needs regarding your Software Engineering team? Our team of experts are available to discuss with you.",
  },
]

const Features = () => {
  return (
    <div className='features'>
      <div className='feature-item'>
        <div className='feature-item-wrapper'>
          <h1>Our Offerings</h1>
          <ul>
            {featureItems.map((item) => <FeatureItem key={item.title}
              title={item.title}
              content={item.content}
            />)}
          </ul>
          <div className='buttons'>
            <Button className='btn-light'/>
            <Button className='btn-outline' text='Contact Us'/>
          </div>
        </div>
      </div>
      <div className='feature-item'>      
      </div>
      
    </div> 
  )
}

const FeatureItem = ({title, content}) => {
  return (
    <li>
      <h3>{title}</h3>
      <span>{content}</span>
    </li>
  )
}

export default Features