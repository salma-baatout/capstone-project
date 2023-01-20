import React from 'react'


const Hero = () => {
  return (
      <div className='hero'>
      <div className='container'>
      <div className='row'>

        <div className='col-md-9'>
      <h1 className='titleHome'>Little Lemon</h1>
      <p className='textHome'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reiciendis at optio voluptatibus
        tempore magnam quasi neque veniam molestias non sint? Eaque beatae commodi recusandae cum,
            non alias quas voluptates nobis!</p>
          <button className='btnHome'>Reserve a table</button>
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