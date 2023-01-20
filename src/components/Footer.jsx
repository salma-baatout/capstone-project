import React from 'react'

const Footer = () => {
  return (
    <footer className="footer">
      <img src="images/footer.png" alt="footerImage"/>
       <div >
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
      <div >
        <h2>Contact</h2>
        <ul>
          <li>Adress</li>
          <li>Email</li>
          <li>Phone Number</li>
        </ul>
      </div>
      <div>
        <h2>Social Media</h2>
        <ul>
          <li>Instagram</li>
          <li>Facebook</li>
          <li>Twitter</li>
        </ul>
      </div>
    </footer>
  )
}

export default Footer