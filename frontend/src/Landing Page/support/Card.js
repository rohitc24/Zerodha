import React from 'react';
function Card({title,classsname,paras}) {
    return (
        <div className='mt-5 mb-5'>

            <h3 className='fs-5'>
                <i class={classsname} style={{margin:"5px",fontSize:"20px"}} ></i>
                {title}
            </h3>
           <ul className='lh-lg' style={{listStyle:"none"}}>
           {paras.map((para)=><li><a href='#'>{para}</a></li>)}
           
           </ul>
        </div>
    );
}

export default Card;