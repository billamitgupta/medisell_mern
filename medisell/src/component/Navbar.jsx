import React from 'react'
import '../style/navbar.css'


function Navbar() {
  return (
   <nav className='nav'>
    {/* Image */}
    <span className='logo'><img src="/Users/shekhargupta/Desktop/medi_sell/medisell/public/logo.gif" alt=""  /></span>
    <ul className='navcon'>
        <li>Home</li>
        <li>AboutUs</li>
        <li>Product</li>
    </ul>
    <span className='login'><button >Login</button></span>
   </nav>
  )
}

export default Navbar
