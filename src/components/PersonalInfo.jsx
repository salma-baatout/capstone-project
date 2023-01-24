import React from 'react'
import FormContext from './context';
import {useState,useContext} from 'react';
import { Link} from "react-router-dom";

const PersonalInfo = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const {  date, time, persons, occasion } = useContext(FormContext);
  return (
    <div>
        <div>personal information
          <h2>Booking information</h2>
          <p>Date: {date}</p>
          <p>Time: {time}</p>
          <p>Number of persons: {persons}</p>
          <p>Occasion: {occasion}</p>
        </div>
        <div>
    <FormContext.Provider value={{ name, email, phone }}>
    <form>
      <label>
        Name:
        <input type="text" value={name} onChange={e => setName(e.target.value)} />
      </label>
      <br />
      <label>
        Email:
        <input type="email" value={email} onChange={e => setEmail(e.target.value)} />
      </label>
      <br />
      <label>
        Phone:
        <input type="tel" value={phone} onChange={e => setPhone(e.target.value)} />
      </label>
      </form>
    </FormContext.Provider>
</div>
      <div>
      <Link to="/checkout">
      <button type="submit" className='btnReserve'>Checkout</button>
      </Link>
      <Link to='/Bookingpage'>
      <button type="submit" className='btnReserve'>Back</button>
      </Link>
      </div>
        </div>
  )
}

export default PersonalInfo