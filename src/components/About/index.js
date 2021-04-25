import React from 'react';
import headShot from '../../assets/cover/headshot.jpg';

function About() {
  return (
  <section>
    <div>
      <div>
        <img className='headshot' src={headShot} alt="headshot of Kris"></img>        
      </div>
      <p>
        I'm Kris Pennimpede from Toronto, Ontario. I am currently enrolled in the University of Toronto Web Programming Bootcamp and will graduate at the end of May.
      </p>
      <p>
        Originally I am from Fort Erie, Ontario but have lived in Toronto since 2005. For the last 16 years I have worked for Livingston Intl which is one the largest custom brokers in North America. 
        I have always had a passion for technology and computers from a young age and decided that now was as good a time as any to follow that passion into a career that I will truly enjoy.
      </p>
    </div>
  </section>
  )
}

export default About;