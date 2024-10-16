import './Choose.css'
import React from 'react'

const chooseItems = [
  {
    title: "Find well trained & vetted Engineers",
    content: "Plug into a reliable source of qualityand save valuable time on recuitment.",
  },
  {
    title: "Avoid unplanned talent exist",
    content: "Enjoy a minimum 2-year commitment from our Engineers when you hire through our fellowship program.",
  },
  {
    title: "Talent performance support",
    content: "We offer perfornamce management support to keep your team productive.",
  }
]


const Choose = () => {
  return (
    <div className='choose'>
      <div className='container'>
        <h1>Why Decagon?</h1>
        <div className='choose-items'>
          { chooseItems.map((item, i) => <ChooseItem title={item.title} content={item.content} />)}
        </div>
      </div>
    </div>
  )
}

const ChooseItem = ({title, content}) => {
  return (
    <div className='choose-item'>
        <i className="bx bxs-bank"></i>
        <h3>{title}</h3>
        <p>{content}</p>
    </div>
  )
}

export default Choose