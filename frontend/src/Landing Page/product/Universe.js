import React from 'react';
import Card from './Card';
function Universe() {
    return ( 
        <div className='container mt-5'>
            <h1 className='text-center mt-5 fs-2 text-muted'>
            The Zerodha Universe
            </h1>
            <h2 className='text-muted mt-5 fs-5 text-center'>
            Extend your trading and investment experience even further with our partner platforms
            </h2>
            <div className='row'>
                <div className='col'>

                </div>
                <div className='col-8'>
                    <div className='row mt-5'>
                    <div className='col'>
                    <Card imgsrc="images/zerodhaFundhouse.png" para="Our asset management venture that is creating simple and transparent index funds to help you save for your goals."/>

                    <Card imgsrc="images/streakLogo.png" para="Systematic trading platform that allows you to create and backtest strategies without coding."/>

                    
                    </div>
                    
                    <div className='col'>
                    <Card imgsrc="images/sensibullLogo.svg" para="Options trading platform that lets you create strategies, analyze positions, and examine data points like open interest, FII/DII, and more."/>

                    <Card imgsrc="images/smallcaseLogo.png" para="Thematic investing platform that helps you invest in diversified baskets of stocks on ETFs."/>

                    </div>
                    <div className='col ms-3 mb-5 ps-3' >
                    <Card imgsrc="images/tijori.svg" para="Investment research platform that offers detailed insights on stocks, sectors, supply chains, and more." w="40%"/>

                    <Card imgsrc="images/dittoLogo.png" para="Personalized advice on life and health insurance. No spam and no mis-selling." w="40%"/>

                    </div>
                    </div>
                </div>
                <div className='col'>

                </div>
            </div>
        </div>
     );
}

export default Universe;