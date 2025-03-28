import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {BrowserRouter,Routes,Route} from "react-router-dom"

import Home from './Landing Page/Home/Home';
import Notfound from './Landing Page/Notfound';
import Footer from './Landing Page/Footer';
import Nav from "./Landing Page/Nav"
import About from "./Landing Page/about/About"
import Product from './Landing Page/product/Product';
import Pricing from './Landing Page/pricing/Pricing';
import Support from './Landing Page/support/Support';
import Signup from "./Landing Page/signup/Signup"


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  <Nav/>
  <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/about' element={<About/>}/>
    <Route path='/product' element={<Product/>}/>
    <Route path='/pricing' element={<Pricing/>}/>
    <Route path='/support' element={<Support/>}/>
    <Route path='/signup' element={<Signup/>}/>
    <Route path='*' element={<Notfound/>}/>
    
  </Routes>
  <Footer/>
  </BrowserRouter>
);