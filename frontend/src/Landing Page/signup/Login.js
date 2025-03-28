import React from 'react';
import axios from "axios";
import { TextField,Button } from '@mui/material';
function Login() {
    let [formdata, setformdata] =React.useState({ email: "", password: "" })
        const handlechange = (e) => {
            // console.log(formdata)
            setformdata({ ...formdata, [e.target.name]: e.target.value })
        }
        const handlesubmit = async (e) => {
            e.preventDefault();
            // console.log(formdata)
            await axios.post("http://localhost:5000/login", formdata)
                .then((res) => {
                    // console.log(res.data)
                    if(res.data.success===true){
                        // console.log('navigate')
                        window.location.href = "http://localhost:5173/dashboard"
                    }
    
                })
                .catch((e) => console.log(e))
            
    
        }
    
    return ( 
        <div className='container'>
            <div className='row'>
                <div className='col-4'></div>
                <div className='col-4 border text-center p-5 mt-5 bg-info' style={{ height: "70%" }}>
                    <form onSubmit={handlesubmit}>

                        <TextField id="standard-basic" label="Email" name='email' variant="standard" style={{ width: "80%", }} className='mt-3' onChange={handlechange} />


                        <TextField id="standard-basic" label="Password" name='password' variant="standard" style={{ width: "80%" }} className='mt-3' onChange={handlechange} />

                        <Button variant="contained" className='mt-5' type='submit'>Login</Button>

                    </form>
                </div>
                <div classsName="col-4"/>


            </div>

        </div>
     );
}

export default Login ;