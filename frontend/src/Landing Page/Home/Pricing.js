import React from 'react';

function Pricing() {
    return (
        <div className="container mt-5 mx-5 text-muted">
            <div className='row mt-5'>
                <div className='col-4 mt-5'>
                    <h1 className='mt-5'>Unbeatable pricing</h1>
                    <p className='mt-4'>We pioneered the concept of discount broking and price transparency in India. Flat fees and no hidden charges.</p>
                    <a href='#' className='p-5 mt-2 text-decoration-none'>See Pricing<i className="fa-solid fa-arrow-right p-2"></i></a>
                </div>
                <div className='col-8'>
                    <div className='pricingbox'>
                        <img src='images/pricing0.svg' style={{
                            width: "40%", position: "relative",
                            top: "150px",
                            left: "50px"
                        }} alt='pricing'></img>
                        <p
                            style={{ position: 'relative', top: "102px", left: "142px", fontSize: "10px" }}>Free Account <br /> opening</p>
                    </div>
                    <div className='pricingbox'>
                        <img src='images/pricing0.svg' style={{
                            width: "40%", position: "relative",
                            top: "150px",
                            right: "50px"
                        }} alt='pricing'></img>
                        <p
                            style={{ position: 'relative', top: "102px", left: "40px", fontSize: "10px" }}>Free Equity Delivery
                            <br /> and direct Mutual Fund</p>
                    </div>
                    <div className='pricingbox'>
                        <img src='images/intradayTrades.svg' style={{
                            width: "40%", position: "relative",
                            top: "15px",
                            left: "485px"
                        }}alt='pricing'></img>
                        <p
                            style={{ position: 'relative', bottom: "36px", left: "602px", fontSize: "15px" }}>Intraday and<br /> F&O</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Pricing;