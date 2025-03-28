import React from 'react';
import Signupbutton from '../Signupbutton';

export default function Hero(){
    return (
        <div className="container mb-5">
        <div className="row">
        <img 
        src="/images/homehero.png" 
        alt="Hero Image" 
        className="mb-5 p-5" 
        style={{ width: "70%",margin: "auto"}} 
        />
        <div className='mt-3 text-center text-muted'>
        <h1>Invest in everything</h1>
        <h4>Online platform to invest in stocks, derivatives, mutual funds, ETFs, bonds, and more.</h4>
        <Signupbutton/>
        </div>
        </div>
        </div>
    );
};