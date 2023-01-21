import React from 'react'

const Footer = () => {
  return (
    
      <div className='container'>
        <div className='row'>
              <div className='col-md-3 spacr'>
              <img src="images/footer.png" alt="footerImage"/>
              </div>
              <div className='col-md-3 spacr spacl' >
              <h2>Doormat Navigation</h2>
              <ul>
              <li>Home</li>
              <li>About</li>
              <li>Menu</li>
              <li>Reservations</li>
              <li>Order Online</li>
              <li>Menu</li>
              <li>Login</li>
              </ul>
              </div>
              <div className='col-md-3 spacr spacl'>
              <h2>Contact</h2>
              <ul>
              <li>Adress</li>
              <li>Email</li>
              <li>Phone Number</li>
              </ul>
              </div>
              <div className='col-md-3 spacl'>
              <h2>Social Media</h2>
              <ul>
              <li>Instagram</li>
              <li>Facebook</li>
              <li>Twitter</li>
              </ul>
             </div>


        </div>
      </div>


    
  )
}

export default Footer