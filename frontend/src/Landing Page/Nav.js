import React from 'react';
import { Link } from 'react-router-dom';
function Nav() {
    return ( 
    <div className=' border-bottom'>
    <nav class="navbar navbar-expand-lg" style={{backgroundColor:"white"}}>
        <div class="container">
            <Link class="navbar-brand" to="/">
                <img src='images/logo.svg' style={{width:"25%"}} alt='logo'></img>
            </Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
            
            <form class="d-flex">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item p-2">
                    <Link class="nav-link active" aria-current="page" to="/signup">Signup</Link>
                    </li>
                    <li className="nav-item p-2">
                    <Link class="nav-link active" to="/about">About</Link>
                    </li>
                    <li className="nav-item p-2">
                    <Link class="nav-link active" to="/product">Product</Link>
                    </li>
                    <li className="nav-item p-2">
                    <Link class="nav-link active" to="/pricing">Pricing</Link>
                    </li>
                    <li className="nav-item p-2">
                    <Link class="nav-link active" to="/support">Support</Link>
                    </li>

                    <li className="nav-item p-2">
                    <Link class="nav-link active" to="/">
                        <div style={{borderBottom:"3px solid black",margin:"0",padding:"0"}}>
                    <i class="fa-solid fa-grip-lines" style={{ margin: "0", padding: "0" }}></i></div></Link>
                    </li>
                </ul>
            </form>
            </div>
        </div>
    </nav>
    </div>
     );
}

export default Nav;