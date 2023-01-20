import React from 'react'

const Highlights = () => {
  return (
<div>
      <div className='HighContainer'>
        <div className="container">
          <div className='titleandbutton'>
          <h1 className='header-title'>This weeks specials !</h1>
          <button class="menu-button">Online menu</button>
          </div>
          <div className="row">
            <div className="col-md-4">
            <div className='product'>
            <img className='HighlPic' src="images/greek salad.jpg" alt="salad" />
            <div className='dish'>
            <span className='HighTitle'>Greek Salad</span>
            <span className='price'>12.99$</span>
            </div>
            <p className='textHigh'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur vero, repudiandae minima labore at eos laudantium omnis, numquam enim magni rem vitae ipsum dolores iusto aperiam sequi. Amet, nihil quibusdam.</p>
            <a href="#delivery" class="delivery">Order a delivery</a>
            </div>
            </div>

            <div className="col-md-4">
            <div className='product'>
            <img className='HighlPic' src="images/bruchetta.png" alt="bruchetta" />
            <div className='dish'>
            <span className='HighTitle'>Bruchetta</span>
            <span className='price'>12.99$</span>
            </div>
            <p className='textHigh'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur vero, repudiandae minima labore at eos laudantium omnis, numquam enim magni rem vitae ipsum dolores iusto aperiam sequi. Amet, nihil quibusdam.</p>
            <a href="#delivery" class="delivery">Order a delivery</a>
            </div>
            </div>

            <div className="col-md-4">
            <div className='product'>
            <img className='HighlPic' src="images/lemondessert.jpg" alt="dessert" />
            <div className='dish'>
            <span className='HighTitle'>Lemon dessert</span>
            <span className='price'>12.99$</span>
            </div>
            <p className='textHigh'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur vero, repudiandae minima labore at eos laudantium omnis, numquam enim magni rem vitae ipsum dolores iusto aperiam sequi. Amet, nihil quibusdam.</p>
            <a href="#delivery" class="delivery">Order a delivery</a>
            </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}

export default Highlights