
import './App.css';
import { useState } from 'react';
import BookingPage from './components/Bookingpage'
import Home from './components/Home'
import {Route,Routes} from 'react-router-dom';
import PersonalInfo from './components/PersonalInfo';
import Checkout from './components/Checkout';
import About from './components/About';
import FormContext from './contexts/context';
import personalContext from './contexts/personalContext';
function App() {

  const [time, setTime] = useState('')
  const [date, setDate] = useState(new Date());
  const [persons, setPersons] = useState('');
  const [occasion, setOccasion] = useState('');
  const [site,setSite] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  //const [availableTimes] = useState(['8:00 PM', '9:00 PM', '10:00 PM', '11:00 PM']);

  return (

<div className='App.css'>
<personalContext.Provider  value={{name,setName,email,setEmail,phone,setPhone}}>
<FormContext.Provider value={{date,setDate, time,setTime, persons,setPersons, site,setSite, occasion,setOccasion }}>
<Routes>
<Route path='/' element={<Home />}></Route>
<Route path='/bookingpage' element={<BookingPage />}></Route>
<Route path='/personalinfo' element={<PersonalInfo />}></Route>
<Route path='/about' element={<About />}></Route>
<Route path='/checkout' element={<Checkout />}></Route>
</Routes>
</FormContext.Provider>
</personalContext.Provider>
</div>

  );
}

export default App;
