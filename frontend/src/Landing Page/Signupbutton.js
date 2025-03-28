import React from 'react';
import { useNavigate } from 'react-router-dom';
function Signupbutton() {
    const navigate=useNavigate()
    const handleclick=()=>{
        navigate("/signup")
    }
    return ( 
        <button className='btn btn-primary btn-outline-dark fs-5 mt-3' style={{color:"white",padding:"10px 50px"}} onClick={handleclick}> Sign Up For Free</button>
     );
}

export default Signupbutton;