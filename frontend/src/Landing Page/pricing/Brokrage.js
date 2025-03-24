import React from 'react';
function Brokrage() {
    return ( 
        <div className='container'>
            <div className='row'>
                <div className='col-4 text-center  text-muted'>
                <img src='images/pricing0.svg' alt='pricing0'></img>
                <h1>
                    Free Equity Delivery
                </h1>
                <p>
                All equity delivery investments (NSE, BSE), are absolutely free — ₹ 0 brokerage.
                </p>
                </div>
                <div className='col-4 text-center text-muted '>
                    <img src='images\intradayTrades.svg' alt='Intradaytrades'></img>
                    <h1>
                        Intraday & F&O trades
                    </h1>
                    <p>
                    Flat ₹ 20 or 0.03% (whichever is lower) per executed order on intraday trades across equity, currency, and commodity trades. Flat ₹20 on all option trades.
                    </p>
                </div>
                <div className='col-4 text-center text-muted'>
                    <img src='images\pricing0.svg' alt='mutualfund'></img>
                    <h1>
                        Free Direct MF
                    </h1>
                    <p>
                    All direct mutual fund investments are absolutely free — ₹ 0 commissions & DP charges.
                    </p>
                </div>
                
            </div>
        </div>
     );
}

export default Brokrage;