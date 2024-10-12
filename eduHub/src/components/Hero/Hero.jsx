import React from 'react'
import './Hero.css'
import dark_arrow from'../../AssetsEduHub/dark-arrow.png'
const Hero = () => {
  return (
    <div className='hero container'> 
    {/* gives same space from left and right same as the navbar container */}
      <div className="hero-text">
        <h1>We Ensure better education for a better world </h1>
        <p>"EduHub is committed to providing high-quality education and resources to help students excel. With expert educators and innovative learning tools, we aim to create a supportive environment where learners can grow and succeed in their academic journeys."</p>
        <button className="btn">Explore More <img src={dark_arrow} alt="" /></button>
      </div>
    </div>
  )
}

export default Hero
