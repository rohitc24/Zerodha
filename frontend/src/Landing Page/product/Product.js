import React from 'react';
import Hero from "./Hero"
import Leftimage from './Leftimage';
import Rightimage from './Rightimage';
import Universe from './Universe';
import Account from "../Account"
function Product() {
    return ( 
        <div className='container'>
            <Hero/>
            <Leftimage para="Our ultra-fast flagship trading platform with streaming market data, advanced charts, an elegant UI, and more. Enjoy the Kite experience seamlessly on your Android and iOS devices" imgsrc="images/kite.png" title="Kite" links={["Try more","Learn more"]}/>
            <Rightimage title="Console" para="The central dashboard for your Zerodha account. Gain insights into your trades and investments with in-depth reports and visualisations." imgsrc="images/console.png" link="Learn more" />
            <Leftimage para="Buy direct mutual funds online, commission-free, delivered directly to your Demat account. Enjoy the investment experience on your Android and iOS devices." imgsrc="images/coin.png" title="Coin" links={["Coin"]}/>
            <Rightimage title="Kite Connect API" para="Build powerful trading platforms and experiences with our super simple HTTP/JSON APIs. If you are a startup, build your investment app and showcase it to our clientbase." imgsrc="images/kiteconnect.png" link="Kite Connect" />
            <Leftimage para="An easy to grasp, collection of stock market lessons with in-depth coverage and illustrations. Content is broken down into bite-size cards to help you learn on the go." imgsrc="images/varsity.png" title="Varsity Mobile" links={[]} w="60%"/>
            <p className='mt-5 mb-5 text-center text-muted fs-5'>Want to know more about our technology stack? Check out the 
            &nbsp;
                <a href='#'>Zerodha.tech</a>
                &nbsp;
             blog.</p>
             <Universe/>
             <Account/>
        </div>
     );
}

export default Product;