import React from 'react';
import Card from "./Card"
function Tickets() {
    return (
        <div className='container mt-3'>
            <h3 className='text-muted mx-5 mb-3 fs-4'>
                To create a ticket, select a relevant topic
            </h3>
            <div className='row'>
                <div className='col-2'>

                </div>
                <div className='col-2'>
                    <Card title="Account Opening" classsname="fa-solid fa-circle-plus" paras={[
                        "Resident individual",
                        "Minor",
                        "Non Resident Indian(NRI)",
                        "Company, Partnership, HUF and LLP",
                        "Glossary"
                    ]} />
                    <Card title="Funds" classsname="fa-solid fa-credit-card" paras={[
                       "Add money",
                       "Withdraw money",
                       "Add bank accounts",
                       "eMandates",
                    ]} />

                </div>
                <div className='col'>
                   
                </div>
                <div className='col-2'>
                <Card title="Your Zerodha Account" classsname="fa-solid fa-user" paras={[
                        "Your Profile",
                        "Account modification",
                        "Client Master Report (CMR) and Depository Participant (DP)",
                        "Nomination",
                        "Transfer and conversion of securities"
                    ]} />
                    <Card title="Console" classsname="fa-solid fa-circle-dot" paras={[
                       "Portfolio",
                       "Corporate actions",
                       "Funds statement",
                       "Reports",
                       "Profile",
                       "Segments",
                    ]} />


                </div>
                
                <div className='col'>

                </div>
                <div className='col-2'>
                <Card title="Kite" classsname="fa-solid fa-chart-simple" paras={[
                        "IPO",
                        "Trading FAQs",
                        "Margin Trading Facility (MTF) and Margins",
                        "Charts and orders",
                        "Alerts and Nudges",
                        "General",
                    ]} />
                    <Card title="Coin" classsname="fa-solid fa-face-meh-blank" paras={[
                       "Understanding mutual funds and Coin",
                       "Coin app",
                       "Coin web",
                       "Transactions and reports",
                       "National Pension Scheme (NPS)",
                    ]} />



                </div>

                <div className='col-2'>

                </div>
            </div>
        </div>
    );
}

export default Tickets;