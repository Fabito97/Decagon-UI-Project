import Button from './Button'
import './Hero.css'
import Image from '../assets/bg-hero.png'

const Hero = () => {
  return (
    <div className='hero'>
      <div className='container'>
        <div className='hero-item hero-content'>
          <h1 className='text-primary'>Hire the best software engineering talent</h1>
          <p className='lead'>Our Engineers adhere to industry best practices and are quick to adapt to your framework and processes.</p>
          <div className='buttons'>
            <Button/>
            <Button className='btn-light'
              text='Speak with our Team' />
          </div>
        </div>
        <div className='hero-item hero-image'>
          <img src={Image} alt="" />
        </div>
      </div>
    </div>
  )
}

export default Hero