import React from 'react'

const Footer = () => {
  return (
    
      <div className='container'>
        <div className='row'>
              <div className='col-md-3 spacr'>
              <img src="images/footer.png" alt="footerImage"/>
              </div>
              <div className='col-md-3 spacr spacl' >
              <h3>Doormat Navigation</h3>
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
              <h3>Contact</h3>
              <ul>
              <li>Adress</li>
              <li>Email</li>
              <li>Phone Number</li>
              </ul>
              </div>
              <div className='col-md-3 spacl'>
              <h3>Social Media</h3>
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