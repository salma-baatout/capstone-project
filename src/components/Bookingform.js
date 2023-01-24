import React from 'react'
import {useState } from 'react';
import { Link} from "react-router-dom";
import DatePicker from 'react-datepicker';
import FormContext from './context';
import "react-datepicker/dist/react-datepicker.css";

function Bookingform() {
  const [time, setTime] = useState('');
  const [date, setDate] = useState(new Date());
  const [persons, setPersons] = useState('');
  const [occasion, setOccasion] = useState('');
  const [site,setSite] = useState('');
  const [availableTimes] = useState(['8:00 PM', '9:00 PM', '10:00 PM', '11:00 PM']);

  return (
    <div>
    <FormContext.Provider value={{ date, time, persons, occasion }}>
    <form>
    <div className="form-group">
      <label className='label'>
        Date:</label>
        <DatePicker
        className='calendar'
          selected={date}
          onChange={(date) => setDate(date)}
        />

    </div>

      <div className="form-group">
      <label className='label'>
        Time:</label >
        <select value={time} onChange={e => setTime(e.target.value)}>
          <option value="" disabled>Select a time</option>
          {availableTimes.map(item => (
            <option key={item} value={item}>{item}</option>
          ))}
        </select>

      
      </div>
      <div className="form-group">
      <label className='label'>
        Occasion:</label>
        <select
          value={occasion}
          onChange={(e) => setOccasion(e.target.value)}>
          <option value="" disabled>Select an occasion</option>
          <option value="birthday">Birthday</option>
          <option value="anniversary">Anniversary</option>
          <option value="other">Other</option>
        </select>
        </div>
      

      <div className="form-group">
      <label className='label'>
        Indoor/Outdoor:</label>
        <select
          value={site}
          onChange={(e) => setSite(e.target.value)}>
          <option value="" disabled>Select a choice</option>
          <option value="birthday">Indoor Table</option>
          <option value="anniversary">Outdoor Table</option>
        </select>

</div>

<div className="form-group">
      <label className='label'>
        Number of persons:</label>
        <input
          type="number"
          value={persons}
          onChange={(e) => setPersons(e.target.value)}
        />

      </div>
      <Link to="/">
      <button type="submit" className='btnReserve'>Back</button>
      </Link>
      <Link to='/PersonalInfo'>
      <button type="submit" className='btnReserve'>Reserve</button>
      </Link>

    </form>
    </FormContext.Provider>


    </div>
  );
}

export default Bookingform;






