import React from 'react';
import Hero from "./Hero"
import Brokrage from './Brokrage';
import Account from '../Account';

function Pricing() {
    return ( 
        <div className='container'>
            <Hero/>
            <Brokrage/>
            <Account/>
        </div>
     );
}

export default Pricing;