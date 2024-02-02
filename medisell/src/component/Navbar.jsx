import React from 'react'
import '../style/navbar.css'
import Button from '@mui/material/Button';
import { Outlet,Link } from 'react-router-dom'
import logo from '/Users/shekhargupta/Desktop/medi_sell/medisell/src/image/logo.gif'


function Navbar() {
  return (
    <>
   <nav className='nav' style={{width:"100%",height:"100%"}}>
    {/* Image */}
    <img style={{ height:'7vh', width:'7vh',marginTop:"1vh", marginLeft:'1vh' }}  src={logo} alt=""  />
    <ul className='navcon' style={{marginLeft:'45vh'}}>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/product">Company</Link></li>
        <li><Link to="/product">Product</Link></li>
        <li><Link to="/aboutus">AboutUs</Link></li>
    </ul>
   <Link to="/signin"> <Button sx={{marginTop:1 ,left:"25vh"}} variant="contained" disableElevation>
      SignIn
    </Button></Link>
    <Link to="/login"><Button sx={{marginTop:1 ,left:"28vh"}} variant="contained" disableElevation>
      Login
    </Button></Link>
   </nav>
   <Outlet/>
   </>
  )
}

export default Navbar
