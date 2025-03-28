import React, { useState } from 'react';
import axios from "axios"
import { TextField, Button, } from "@mui/material"
import { useNavigate } from 'react-router-dom'
function Signupform() {
    let [formdata,setformdata]=useState({email:"",username:"",password:""})
    let navigate=useNavigate()
    const handlechange=(e)=>{
        setformdata({...formdata,[e.target.name]:e.target.value})
    }
    const handlesubmit= async (e)=>{
        e.preventDefault();
        // console.log(formdata)
        await axios.post("http://localhost:5000/signup",formdata)
        .then((res)=>console.log(res.data))
        .catch((e)=>console.log(e))
        window.location.href = "http://localhost:5173/dashboard"

    }

    return (
        <div className='container'>
            <div className='row'>
                <div className='col-8'>
                    <img src='/images/account_open.svg' alt='accountopen' />
                </div>
                <div className='col border text-center p-5 bg-info' style={{ height: "70%" }}>
                    <form onSubmit={handlesubmit}>

                        <TextField id="standard-basic" label="Email" name='email' variant="standard" style={{ width: "80%", }} className='mt-3' onChange={handlechange} />

                        <TextField id="standard-basic" label="Username" name='username' variant="standard" style={{ width: "80%" }} className='mt-3' onChange={handlechange} />

                        <TextField id="standard-basic" label="Password" name='password' variant="standard" style={{ width: "80%" }} className='mt-3' onChange={handlechange} />

                        <Button variant="contained" className='mt-5' type='submit'>Signup</Button>

                    </form>
                </div>
            </div>
        </div>
    );
}

export default Signupform;