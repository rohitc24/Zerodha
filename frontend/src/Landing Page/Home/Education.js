import React from 'react';

function Education() {
    return ( 
        <div className="container mt-5 mb-5">
            <div className='row mt-5'>
                <div className='col-6'>
                    <img src='images/education.svg' alt='education'></img>
                </div>
                <div className='col-6 mt-5 text-muted'>
                    <h1>Free and open market education</h1>
                    <p>Varsity, the largest online stock market education book in the world covering everything from the basics to advanced trading.</p>
                    <a href='#' className=' fs-5 mt-2'>Varsity<i class="fa-solid fa-arrow-right p-2"></i></a>
                    <p>TradingQ&A, the most active trading and investment community in India for all your market related queries.</p>
                    <a href='#' className=' fs-5 mt-2'>Trading Q&A<i class="fa-solid fa-arrow-right p-2"></i></a>
                </div>
            </div>
        </div>
     );
}

export default Education;