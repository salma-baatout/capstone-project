
import './App.css';
import Header from "./components/Header";
import Hero from './components/Hero';
import Highlights from './components/Highlights';
import Testimonials from './components/Testimonials';
import About from './components/About';
import Footer from './components/Footer';
import BookingPage from './components/Bookingpage'

import {Route,Routes} from 'react';

function App() {
  return (
<div className='App.css'>
  <Routes>
  <Route path="/bookingpage" element={<BookingPage />}></Route>
  </Routes>
<Header/>
<Hero/>
<Highlights/>
<Testimonials/>
<About/>
<Footer/>


    </div>

  );
}

export default App;
