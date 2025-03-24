import React from 'react';
function Hero() {
    return (
        <div className=' bg-primary text-light mb-5 p-5' >
            <div className='row mb-5'>
                <div className='col-1 mt-5'>

                </div>

                <div className='col-3 mt-3'>
                    <h1 className='text-light fs-5 '>
                        Support Portal
                    </h1>
                </div>
                <div className='col-4 mt-5'>

                </div>
                <div className='col mt-3 '>
                    <a href='#' className='text-light fw-medium text-decoration-underline fs-5'>Track Tickets</a>
                </div>
            </div>
            <div className='row mb-5'>
                <div className='col-1 mt-5'>

                </div>

                <div className='col-5 mt-3 text-light'>
                    <h1 className='fs-5 mx-3'>
                        Search for an answer or browse help topics to create a ticket
                    </h1>

                    <input type='search' placeholder='E.g:How can i build this type website?....' style={{ outline: "none", padding: "10px 50px",borderRadius:"10px",border:"none" }} className='mx-3 fs-3 mt-3 mb-3'></input>
                    
                    <br />
                    <a href='#' className='text-light mx-3 text-decoration-underline'>Track account opening</a>

                    <a href='#' className='text-light mx-3 text-decoration-underline'>Track segment activation </a>

                    <a href='#' className='text-light mx-5 text-decoration-underline'>Intraday margins </a>

                    <a href='#' className='text-light mx-3 text-decoration-underline'>Kite user manual</a>
                    <br />


                </div>
                <div className='col-1 mt-5'>

                </div>
                <div className='col mt-3 '>
                    <h1>
                        Featured
                    </h1>
                    <ol>

                        <li><a href='#'className='text-light mx-2 text-decoration-underline'>Exclusion of F&O contracts on 5 securities from May 27, 2025</a></li>

                        <li><a href='#'className='text-light mx-2 text-decoration-underline'>Rights Entitlements listing in March 2025</a></li>
                    </ol>


                </div>
            </div>
        </div>
    );
}

export default Hero;