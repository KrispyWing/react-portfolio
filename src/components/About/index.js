import React from 'react';
import headShot from '../../assets/cover/headshot.jpg';

function About() {
  return (
  <section>
    <div>
      <div>
        <img className='headshot' src={headShot} alt="headshot of Kris"></img>        
      </div>
      <p></p>
    </div>
  </section>
  )
}

export default About;