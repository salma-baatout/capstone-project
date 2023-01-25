
import './App.css';
import BookingPage from './components/Bookingpage'
import Home from './components/Home'
import {Route,Routes} from 'react-router-dom';
import PersonalInfo from './components/PersonalInfo';
import About from './components/About';
function App() {

  return (

<div className='App.css'>

<Routes>
<Route path='/' element={<Home />}></Route>
<Route path='/bookingpage' element={<BookingPage />}></Route>
<Route path='/personalinfo' element={<PersonalInfo />}></Route>
<Route path='/about' element={<About />}></Route>

</Routes>

</div>

  );
}

export default App;
