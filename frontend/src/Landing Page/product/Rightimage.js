import React from 'react';
function Rightimage({title,imgsrc,para,link}) {
    return (
        <div className='container mt-5'>
            <div className='row mb-5'>

                <div className='col'></div>
                <div className='col-4 mt-5'>
                    <h1 className='fs-2 text-muted mt-5'>{title}</h1>
                    <p className='fs-5 text-muted'>
                       {para}
                    </p>
                    <a href='#' className='fs-5'>
                       {link}<i class="fa-solid fa-arrow-right p-2"></i>
                    </a>
                </div>
                <div className='col'></div>

                <div className='col-5'>
                    <img src={imgsrc} alt='kite' ></img>

                </div>
                <div className='col'></div>
            </div>
        </div>
    );
}

export default Rightimage;