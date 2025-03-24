import React from 'react';
import{Link} from "react-router-dom"
function Stats() {
    return (
        <div className="container  mt-5 mb-5 text-muted">
            <div className='row mt-5'>
                <div className='col-6 mt-5 p-5 '>
                    <h1 className='mb-5'>Trust with confidence</h1>
                    <div className='Item mb-3'>
                        <h4>Customer-first always</h4>
                        <p className='text-muted'>That's why 1.5+ crore customers trust Zerodha with ₹4.5+ lakh crores of equity investments and contribute to 15% of daily retail exchange volumes in India.</p>
                    </div>
                    <div className='Item mb-3'>
                        <h4>No spam or gimmicks</h4>
                        <p className='text-muted'>No gimmicks, spam, "gamification", or annoying push notifications. High quality apps that you use at your pace, the way you like.</p>
                    </div>
                    <div className='Item mb-3'>
                        <h4>The Zerodha universe</h4>
                        <p className='text-muted'>Not just an app, but a whole ecosystem. Our investments in 30+ fintech startups offer you tailored services specific to your needs.</p>
                    </div>
                    <div className='Item mb-3'>
                        <h4>Do better with money</h4>
                        <p className='text-muted'>With initiatives like Nudge and Kill Switch, we don't just facilitate transactions, but actively help you do better with your money</p>
                    </div>

                </div>
                <div className='col-6 mt-5 '>
                    <img src='images/ecosystem.png' alt='Ecosystem'
                        style={{ width: "85%" }}></img>
                    <Link to="/product" className='p-5 mt-2 '>Explore Our Products<i class="fa-solid fa-arrow-right p-2"></i></Link>
                    <Link to="" className='p-5 mt-2 '>Try Kite Demo<i class="fa-solid fa-arrow-right p-2"></i></Link>
                </div>
                <img src='images/pressLogos.png' alt='Presslogo' style={{ width: "50%", margin: 'auto' }}></img>
            </div>
        </div>
    );
}

export default Stats;