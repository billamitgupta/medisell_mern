import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import { BrowserRouter,Route,Routes,Outlet } from 'react-router-dom'; 
import Navbar from './component/Navbar';
import Footer from './component/Footer';
import Body from './component/Body';

import Aboutus from './component/Aboutus';
import Product from './component/Product';
import Company from './component/Company';
import Login from './component/Login';
import Singin from './component/Singin';
import SliderComponent from './component/SliderComponent'

 

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
   
  <BrowserRouter>
  {/* for route /home & /products show {<hero/>}  */}
  <Navbar/>
  <Routes>
  
    <Route path='/home' element={<><Body/><SliderComponent/><Footer/></>}/> 
    <Route path='/' element={<><Body/><SliderComponent/><Footer/></>}/>
    <Route path='/aboutus' element={<Aboutus/>}></Route>
    <Route path='/product' element={<><Product/><Footer/></>}></Route>
    <Route path='/company' element={<><Company/><Footer/></>}></Route>
    <Route path='/login' element={<><Login/></>}></Route>
    <Route path='/signin' element={<><Singin/></>}></Route>
   
    <Route path='/*' element={<p>No route is available</p>}/>
  </Routes>
<Outlet/>
  </BrowserRouter>
);

