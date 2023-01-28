import React from 'react'
import FormContext from '../contexts/context';
import {useContext} from 'react';
import { Link} from "react-router-dom";
import personalContext from '../contexts/personalContext';

const PersonalInfo = () => {
  const {name,setName,email,setEmail,phone,setPhone}=useContext(personalContext);
 const {date, time, persons, occasion,site}= useContext(FormContext);

  return (
<div className='persocontainer'>
    <div className='personal'>

        <div>
          <h2>Your reservation</h2>
          <p>Date: {date?.toLocaleDateString()}</p>
          <p>Time: {time}</p>
          <p>Number of persons: {persons}</p>
          <p>Occasion: {occasion}</p>
          <p>Site: {site}</p>

        </div>

        <div>
        <h2>Personal Information</h2>
        <personalContext.Provider value={{name,email,phone }}>
    <form>
      <label htmlFor="username">
        Name:
        <input className='input' type="text" id="username" required minLength="2" value={name} onChange={e => setName(e.target.value)} />
      </label>
      <br />
      <label>
        Email:
        <input className='input' type="email" value={email} onChange={e => setEmail(e.target.value)} />
      </label>
      <br />
      <label>
        Phone:
        <input className='input' type="tel" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$" value={phone} onChange={e => setPhone(e.target.value)} />
      </label>
      </form>
      </personalContext.Provider>
      </div>

      <div>
      <Link to='/Bookingpage'>
      <button type="submit" className='btnReserve'>Back</button>
      </Link>
      <Link to="/checkout">
      <button type="submit" className='btnReserve'>Checkout</button>
      </Link>
      </div>

      </div>
      </div>
  )
}

export default PersonalInfo