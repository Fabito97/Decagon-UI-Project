import TalentImg from '../assets/talent-small.png'
import Button from './Button'
import './Talent.css'

export const Talent = () => {
  return (
    <div className='talent container'>
      <div className='talent-showcase'>
        <img src={TalentImg} alt="" />
      </div>
      <div>
        <h2>Our Talent Pool</h2>
        <p>Browse through our list of vetted-Engineers and make your selection. Our recruiters are also available to help you get the best match.</p>
        <Button className='btn-light'/>
      </div>
    </div>
  )
}

