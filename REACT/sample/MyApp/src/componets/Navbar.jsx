import React from 'react'
import "./Navbar.css"

const Navbar = () => {
  return (
   <div className='navbar'>
    <h1>my website</h1>


    <div className='navbar-container' >
      <div className='nav-links'>
        <a href="/">Home</a>
        <a href="/about">About</a>
        <a href="/contact">Contact</a>
      </div>
    </div>
   </div>
  )
}

export default Navbar