import React from 'react';
function Team() {
    return (
        <div className='container mt-5'>
            <h1 className='text-center mt-5 mb-5'>People</h1>
            <div className='row mt-5'>
                <div className='col text-center'>
                    <img src='/images/nithinKamath.jpg' alt='nitinkamath' style={{borderRadius:"100%",width:"40%"}}></img>
                    <p className='mt-3'>
                    Nithin Kamath
                    </p>
                    <p>
                    Founder, CEO
                    </p>

                </div>
                <div className='col text-muted fs-6'>
                    <p>
                        Nithin bootstrapped and founded Zerodha in 2010 to overcome the hurdles he faced during his decade long stint as a trader. Today, Zerodha has changed the landscape of the Indian broking industry.
                    </p>
                    <p>
                        He is a member of the SEBI Secondary Market Advisory Committee (SMAC) and the Market Data Advisory Committee (MDAC).
                    </p>
                    <p>
                    Playing basketball is his zen.   
                    </p>
                    <p>
                    Connect on 
                    &nbsp;
                        <a href='#'>
                        Homepage
                        </a>
                        /
                        <a href='#'>
                        TradingQnA
                        </a>
                        /
                        <a href='#'>
                        Twitter
                        </a>
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Team;