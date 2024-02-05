import React from 'react'
import '../style/navbar.css'
import Button from '@mui/material/Button';
import { Outlet,Link } from 'react-router-dom'
import logo from '../../src/image/logo.gif'


function Navbar() {
  return (
    < >
   <nav className='display: flex  md: bg-violet-300 rounded-md ' >
    {/* Image */}
    <img className='h-12  flex  justify-start '  src={logo} alt=""  />
    <ul className='display: flex  justify-center lg:mx-72 md:mx-52 text-lg text-sky-700 mt-3 ' >
        <li className='text-1xl font-sans'><Link to="/">Home</Link></li>
        <li><Link to="/product">Company</Link></li>
        <li><Link to="/product">Product</Link></li>
        <li><Link to="/aboutus">AboutUs</Link></li>
    </ul>
   <div className='my-2  display:flex justify-end flex   '>
   <div>
   <Link to="/signin"> <Button  variant="contained" disableElevation>
      SignIn
    </Button></Link>
   </div>
    <div className='px-5'><Link to="/login"><Button   variant="contained" disableElevation>
      Login
    </Button></Link></div>
   </div>
   </nav>
   <Outlet/>
   </>
  )
}

export default Navbar
