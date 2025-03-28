import React from 'react';
import Signupbutton from './Signupbutton';
function Account() {
    
    return ( 
        <div className='container text-center text-muted mt-5'>
            <h1 className='mt-5 mb-2'>Open a Zerodha account</h1>
            <h3 className='mb-2 mt-3 fs-5'>Modern platforms and apps, ₹0 investments, and flat ₹20 intraday and F&O trades.</h3>
            <Signupbutton/>
        </div>
     );
}

export default Account;