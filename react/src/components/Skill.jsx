import './Skill.css'
import React from 'react'

import Avatar1 from '../assets/avatars/avatar-1.png'
import Avatar2 from '../assets/avatars/avatar-2.png'
import Avatar3 from '../assets/avatars/avatar-3.png'
import Avatar4 from '../assets/avatars/avatar-4.png'
import Avatar5 from '../assets/avatars/avatar-5.png'
import Avatar6 from '../assets/avatars/avatar-1.png'
import Avatar7 from '../assets/avatars/avatar-3.png'
import Avatar8 from '../assets/avatars/avatar-2.png'
import Button from './Button'


const engineers = [
  {
    avatar: Avatar1,
    name: 'Mary U.',
    role: 'QA Engineer'
  },
  {
    avatar: Avatar2,
    name: 'Saheed A.',
    role: 'Python Backend'
  },
  {
    avatar: Avatar3,
    name: 'Honoura M.',
    role: '.Net'
  },
  {
    avatar: Avatar4,
    name: 'Odira E.',
    role: 'Java'
  },
  {
    avatar: Avatar5,
    name: 'Muazu A.',
    role: 'Sr. React Native'
  },
  {
    avatar: Avatar6,
    name: 'Abdulhafiz S.',
    role: 'JavaScript'
  },
  {
    avatar: Avatar7,
    name: 'Ikenna E.',
    role: 'Java'
  },
  {
    avatar: Avatar8,
    name: 'Oyinkansola A.',
    role: 'Node'
  },
]

const Skill = () => {
  return (
    <div className='skill'>
      <div className='container'> 
        <h1>Our Engineers are skilled in technologies you need</h1>
        <div className='skill-items'> 
          {engineers.map((eng, i) => 
            <SkillItem key={i}
              avatar={eng.avatar}
              name={eng.name}
              role={eng.role}
            />)}
        </div>

      </div>

        <Button text='View Engineers Profiles' />
      
    </div>
  )
}


const SkillItem = ({avatar, name, role}) => {
  return (
    <div className='skill-avatar'>
      <img style={{borderRadius: "50%"}} src={avatar} alt={name} />
      <h4>{name}</h4>
      <p style={{color: 'green'}}>{role}</p>

    </div>
  )
}

export default Skill
