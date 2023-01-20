import React from 'react'

const About = () => {
  return (
    <div className='About'>
      <div className='container'>
      <div className='row'>

        <div className='col-md-6'>
      <h1 className='titleAbout'>Little Lemon</h1>
      <p className='textAbout'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reiciendis at optio voluptatibus
        tempore magnam quasi neque veniam molestias non sint? Eaque beatae commodi recusandae cum,
            non alias quas voluptates nobis!</p>
        </div>

        <div className='col-md-6'>

    <img src="images/Mario and Adrian A.jpg" class="overlay"/>
    <img src="images/Mario and Adrian B.jpg" class="underlay"/>
    </div>


      </div>
      </div>
    </div>
  )
}

export default About