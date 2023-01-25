import React from 'react'
import Header from "./Header";
import Hero from './Hero';
import Highlights from './Highlights';
import Testimonials from './Testimonials';
import About from './About';
import Footer from './Footer';
import FormContext from './context';
const Home = () => {
  return (
    <div>

<Header/>
<Hero/>
<Highlights/>
<Testimonials/>
<About/>
<Footer/>

    </div>
  )
}

export default Home