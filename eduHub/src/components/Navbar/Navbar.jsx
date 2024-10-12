import React, { useEffect, useState } from 'react'
import './Navbar.css'
import logo from '../../AssetsEduHub/logo.png'

const Navbar = () => {
  const [sticky,setSticky] = useState(false)
  
  useEffect(()=>{
    window.addEventListener('scroll',()=>{
      window.scrollY>50 ? setSticky(true):setSticky(false)
    })
  },[])

  return (
    <nav className= {`container ${sticky?'dark-nav':''}`}> 
        <img src={logo} alt="" className='logo' />
        <ul>
            <li>Home</li>
            <li>Program</li>
            <li>About Us</li>
            <li>Campus</li>
            <li>Testimonials</li>
            <li><button className='btn'>Contact Us</button></li>
        </ul>
    </nav>
  )
}

export default Navbar

/* 

1. Your Navbar component uses something called state (with the useState hook) to track whether the navbar should be sticky
(when it changes color or sticks to the top while scrolling).
The browser waits for a user action like scrolling.

2. The useEffect hook in your component sets up a scroll listener. This means the component is always watching for when the user scrolls down the page.
As soon as the user scrolls more than 50 pixels down,  the value of the state variable sticky changes from false to true.
This is the dynamic part.

3. When the sticky state changes (because of the scroll), React re-renders the component. Re-rendering means React updates only the parts of the page that need to change 
(it doesn’t reload the whole page, which makes it very efficient).

*/