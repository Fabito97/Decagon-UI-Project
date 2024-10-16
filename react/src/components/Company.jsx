import Happy from '../assets/clients/happy-clients.png'
import Access from '..//assets/clients/access.jpg'
import Nestle from '../assets/clients/nestle.jpg'
import Union from '../assets/clients/union.png'
import Carbon from '../assets/clients/carbon.png'
import Sterling from '../assets/clients/sterling.png'

import './Company.css'

import image from '../assets/clients/access.jpg' 

export const Company = () => {
  return (
    <div className='clients container'>
      <div><img src={Happy} alt="" /></div>
      <div><img src={Carbon} alt="" /></div>
      <div><img src={Access} alt="" /></div>
      <div><img src={Union} alt="" /></div>
      <div><img src={Nestle} alt="" /></div>
      <div><img src={Sterling} alt="" /></div>      
    </div>
  );
};


