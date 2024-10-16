import React from 'react'


const Button = ({
  text = "View & Select Engineers", 
  className = "btn-primary"
}) => {

  return (
    <button className={className}>{text}</button>
  )
}

export default Button