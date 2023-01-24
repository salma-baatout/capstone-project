import React from 'react'
import { Link} from "react-router-dom";

const Hero = () => {
  return (
      <div className='hero'>
      <div className='container'>
      <div className='row'>

        <div className='col-md-9'>
      <h1 className='titleHome'>Little Lemon</h1>
      <p className='textHome'>We are a family owned Mediterranean restaurant, focused on traditioanl recipes served with a modern twist</p>
      <Link to="/Bookingpage">
          <button className='btnHome'>Reserve a table</button>
          </Link>
        </div>

        <div className='col-md-3'>
        <img className='homePic' src="images/restauranfood.jpg" alt="homePic" />
        </div>

      </div>
      </div>
    </div>
  )
}

export default Hero