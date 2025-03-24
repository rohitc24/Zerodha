import React from 'react';

function Card({imgsrc,para,w="50%"}) {
    return (
       <>
       <a href='#' className='text-center'>
       <img src={imgsrc} alt='cardimage' style={{width:w,display:"block"}} className='mt-5 text-center mx-5 mb-2'></img>
       <p className='text-center text-muted' style={{display:"inline-block",fontSize:"14px"}}>
        {para}
       </p>
       </a>
       </>
    );
}

export default Card;