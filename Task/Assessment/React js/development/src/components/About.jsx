import React from 'react'
import aboutimage from '../images/about.png'

function About() {
  return (
    <div id='about'>
      <div className="about-image">
        <img src={aboutimage} alt="" />
      </div>
      <div className="about-text">
        <h1>LEARN MORE ABOUT US</h1>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eius facere voluptatibus, inventore dignissimos, earum reprehenderit magnam, numquam sit soluta explicabo quisquam molestiae architecto doloribus nisi.</p>
        <button>READ MORE</button>
      </div>
    </div>
  )
}

export default About
