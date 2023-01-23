import React from 'react'
import { useState } from 'react';

function Bookingform() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [time, setTime] = useState('');
  const [availableTimes, setAvailableTimes] = useState(['8:00', '9:00', '10:00', '11:00']);

  return (
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
      <br />
      <label>
        Time:
        <select value={time} onChange={e => setTime(e.target.value)}>
          <option value="" disabled>Select a time</option>
          {availableTimes.map(item => (
            <option key={item} value={item}>{item}</option>
          ))}
        </select>
      </label>
      <br />
    </form>
  );
}

export default Bookingform;






