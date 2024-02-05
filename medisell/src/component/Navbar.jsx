import React from 'react'
import '../style/navbar.css'
import Button from '@mui/material/Button';
import { Outlet,Link } from 'react-router-dom'
import logo from '../../src/image/logo.gif'


function Navbar() {
  return (
    < >
   <nav className='display: flex bg-violet-300 rounded-md w-full ' >
    {/* Image */}
    <img style={{ height:'7vh', width:'7vh',marginTop:"1vh", marginLeft:'1vh' }}  src={logo} alt=""  />
    <ul className='display: flex text-lg text-sky-700 mt-3 decoration-8 md:w-2/4' style={{marginLeft:'45vh'}}>
        <li className='text-1xl font-sans'><Link to="/">Home</Link></li>
        <li><Link to="/product">Company</Link></li>
        <li><Link to="/product">Product</Link></li>
        <li><Link to="/aboutus">AboutUs</Link></li>
    </ul>
   <div className='my-2 px-28 display: flex md:w-2/4 '>
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
