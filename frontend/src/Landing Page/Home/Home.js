import Education from "./Education";
import Hero from "./Hero";
import Pricing from "./Pricing";
import Stats from "./Stats";
import React from 'react';
import Footer from "../Footer";
import Account from "../Account";
import Nav from "../Nav"


export default function Home(){
    return(
        <div className="">
        <Hero/>
        <Stats/>
        <Pricing/>
        <Education/>
        <Account/>
        </div>
    );
}