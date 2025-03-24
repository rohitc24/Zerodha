import React from 'react';
function Hero() {
    return ( 
       <div className='container text-center mt-5 p-5 border-bottom'>
            <h1>
            Zerodha Products
            </h1>
            <h3 className='text-muted fs-5'>
            Sleek, modern, and intuitive trading platforms
            </h3>
            <h3 className='text-muted fs-5'>
            Check out our  &nbsp;
            <a href='#' className='mb-5'>
            investment offerings<i class="fa-solid fa-arrow-right p-2"></i>
            </a>
            </h3>
       </div>
     );
}

export default Hero;