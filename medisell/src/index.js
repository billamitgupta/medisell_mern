import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter,Route,Routes } from 'react-router-dom'; 
import Navbar from './component/Navbar';
import Footer from './component/Footer';
import Body from './component/Body';
import Card1 from './component/Card1';

 

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
   
  <BrowserRouter>
  {/* for route /home & /products show {<hero/>}  */}
  <Navbar/>
  <Routes>

    <Route path='/userdata' element={<App/>}/> 
    <Route path='/' element={<Body/>}/>
    <Route path='/*' element={<p>No route is available</p>}/>
  </Routes>
  <Card1/>
<Footer/>
   
  </BrowserRouter>
);

