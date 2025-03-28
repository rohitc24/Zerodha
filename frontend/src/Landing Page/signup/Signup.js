import React from 'react';
import Hero from "./Hero"
import Signupform from './Signupform';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './Login';
function signup() {
    return ( 
        <>
        
       
         <Hero/>
         <Signupform/>       
         
         
         </>
        
     );
}

export default signup;