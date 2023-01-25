import React from 'react'
import Bookingform from './Bookingform'
import { Link} from "react-router-dom";

const BookingPage = () => {

  return (
    <div className='container'>
      <div className='row'>

<div className='col-md-8'>
<div>
<Link to="/">
<img className='homeIcon' src="images/home icon.png" alt="homeicon" />
</Link>
</div>

<div className='scrolling-title'>
<h1 className='reserveTitle'>Reservation details</h1>
</div>


<div className='form'>

<Bookingform/>

</div>
</div>



<div className='col-md-4'>
<img className='bookingpic' src="images/restaurant.jpg" alt="tables" />
</div>

</div>
</div>
)
}

export default BookingPage