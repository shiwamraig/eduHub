import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import Programs from './components/Programs/Programs'
import Title from './components/Title/Title'
import About from './components/About/About'
import Campus from './components/Campus/Campus'
import Testimonials from './components/Testimonials/Testimonials'
const App = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <div className="container"> 
      {/* gives space from left and right similar to navbar and hero section */}
      <Title SubTitle="Our Program" Title="What we offer" />
      <Programs/>
      <About/>
      <Title SubTitle="Gallery" Title="Campus photos"></Title>
      <Campus/>
      <Title SubTitle='TESTIMONIALS' Title="What Student Says " ></Title>
      <Testimonials/>
      </div>
    </div>
  )
}

export default App
