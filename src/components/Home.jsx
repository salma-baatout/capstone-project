import React from 'react'
import Header from "./Header";
import Hero from './Hero';
import Highlights from './Highlights';
import Testimonials from './Testimonials';
import About from './About';
import Footer from './Footer';

const Home = () => {
  return (
    <div>

<Header/>
<Hero/>
<Highlights/>
<Testimonials/>

      <div id="about">
        <About />
      </div>

<Footer/>

    </div>
  )
}

export default Home