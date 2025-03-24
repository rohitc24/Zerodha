import React from 'react';
function Leftimage({title,imgsrc,para,links,w="90%"}) {
    return ( 
        <div className='container mt-5'>
            <div className='row mt-5'>
                <div className='col'></div>
                <div className='col-6 text-center mt-5'>
                    <img src={imgsrc} alt='kite' style={{width:w}}></img>

                </div>
                <div className='col'></div>
                <div className='col-4 mt-5'>
                    <h1 className='fs-2 text-muted'>{title}</h1>
                    <p className='fs-5 text-muted'>
                    {para}
                    </p>
                    {
                        links.map((link)=>(<a href='#'className='fs-5'>
                           {link} <i class="fa-solid fa-arrow-right p-2"></i>
                           &nbsp;  &nbsp; &nbsp;&nbsp;  &nbsp; &nbsp;&nbsp;  &nbsp; &nbsp;
                        </a>))
                    }
                    
                    <div className='images'>
                        <img src='images/googleplayBadge.svg' alt='googleplay' className=' ' style={{width:"40%"}}></img>
                        <img src='images/appstoreBadge.svg' alt='googleplay'
                        className='mx-4' style={{width:"40%"}}></img>

                    </div>
                </div>
                <div className='col'></div>
            </div>
        </div>
     );
}

export default Leftimage;  