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
        I'm Kris Pennimpede from Toronto, Ontario. I completed the Web Development Coding Bootcamp at the University of Toronto in May, 2021. 
        Check out my projects page to see some of the projects I have completed which demonstrate my abilities to work with all aspects of the MERN stack. 
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
