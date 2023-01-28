import React from 'react'
import personalContext from '../contexts/personalContext';
import FormContext from '../contexts/context';
import {useContext} from 'react';
import { Link } from 'react-router-dom';
const Checkout = () => {
  const {name}= useContext(personalContext);
  const {date, time}= useContext(FormContext);
  return (
    <div className='persocontainer'>
      <div className='personal'>
      <h2>Congratulations !</h2>
          <p className='clientName'>{name}</p>
          <h2>Your reservation is confirmed on </h2>
          <p className='clientName'> {date?.toLocaleDateString()}</p>
          <p className='clientName'>at {time}</p>
          <div>
          <Link to="/">
          <img className='homeIcon' src="images/home icon.png" alt="homeicon" />
          </Link>
          </div>
    </div>
   </div>
  )
}
export default Checkout