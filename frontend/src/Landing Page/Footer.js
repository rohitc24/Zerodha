import React from 'react';
function Footer() {
    return (
        <div className=' bg-body-secondary mt-5 '>
            <div className='row'>
                <div className='col'></div>
                <div className='col-2'>
                    <img src='images/logo.svg' className='mt-5 mb-3' style={{ width: "60%" }} alt='logo'></img>
                    <p>&copy; 2023-2024,Developer Rohit Chowdhury </p>
                    <div className="icons" style={{ borderBottom: "0.5px solid gray" }}>
                        <i class="fa-brands fa-x-twitter mx-2 mt-1 mb-3"></i>
                        <i class="fa-brands fa-facebook mx-2 mt-1 mb-3"></i>
                        <i class="fa-brands fa-instagram mx-2 mt-1 mb-3"></i>
                        <i class="fa-brands fa-linkedin mx-2 mt-1 mb-3"></i>
                    </div>
                    <div className='icons'>
                        <i class="fa-brands fa-youtube mx-2 mt-3"></i>
                        <i class="fa-brands fa-whatsapp mx-2 mt-3"></i>
                        <i class="fa-brands fa-telegram"></i>
                    </div>
                </div>
                <div className='col'>
                    <p className='mt-5 fw-bold '>Company</p>
                    <div className='footer text-muted'>
                        <a href='#'>About</a>
                        <a href='#'>Product</a>
                        <a href='#'>Pricing</a>
                        <a href='#'>Referral Programme</a>
                        <a href='#'>Carrers</a>
                        <a href='#'>Zerodha.tech</a>
                        <a href='#'>Open Source</a>
                        <a href='#'>Press & Media</a>
                        <a href='#'>Zeordha Cares (CSR)</a>
                    </div>

                </div>
                <div className='col'>
                <p className='mt-5  fw-bold'>Support</p>
                    <div className='footer text-muted'>
                        <a href='#'>Contact Us</a>
                        <a href='#'>Support Portal</a>
                        <a href='#'>Z-connect Blog</a>
                        <a href='#'>List of charges</a>
                        <a href='#'>Downloades & resources</a>
                        <a href='#'>Videos</a>
                        <a href='#'>Market Overview</a>
                        <a href='#'>How to file a complaint</a>
                        <a href='#'>Status of your complaint</a>
                    </div>
                </div>
                <div className='col'>
                <p className='mt-5 fw-bold'>Account</p>
                    <div className='footer text-muted'>
                        <a href='#'>Open a account</a>
                        <a href='#'>Fund transfer</a>
                    </div>
                </div>
            </div>
            <div className='row mt-5 text-muted'>
                <div className='col-2'></div>
                <div className='col' style={{ fontSize: "12px" }}>
                    <p>
                        Zerodha Broking Ltd.: Member of NSE, BSE​ &​ MCX – SEBI Registration no.: INZ000031633 CDSL/NSDL: Depository services through Zerodha Broking Ltd. – SEBI Registration no.: IN-DP-431-2019 Commodity Trading through Zerodha Commodities Pvt. Ltd. MCX: 46025; NSE-50001 – SEBI Registration no.: INZ000038238 Registered Address: Zerodha Broking Ltd., #153/154, 4th Cross, Dollars Colony, Opp. Clarence Public School, J.P Nagar 4th Phase, Bengaluru - 560078, Karnataka, India. For any complaints pertaining to securities broking please write to&nbsp;
                        <b><a href="#">chowdhuryrohit25@gmail.com</a></b>&nbsp;
                        , for DP related to&nbsp;
                        <b><a href='#'>none@gmail.com</a></b>&nbsp;
                        . Please ensure you carefully read the Risk Disclosure Document as prescribed by SEBI | ICF
                    </p>
                    <p>
                        Procedure to file a complaint on&nbsp;

                        <b><a href='#'>SEBI SCORES</a></b>&nbsp;
                        : Register on SCORES portal. Mandatory details for filing complaints on SCORES: Name, PAN, Address, Mobile Number, E-mail ID. Benefits: Effective Communication, Speedy redressal of the grievances
                    </p>
                    <p className='mb-0' >
                        <b><a href='#'>
                            Smart Online Dispute Resolution
                        </a></b>
                        <p style={{ display: "inline-block" }}>&nbsp;|&nbsp;</p>
                        <b>
                            <a href='#'>
                                Grievances Redressal Mechanism
                            </a>
                        </b>
                    </p>
                    <p>Investments in securities market are subject to market risks; read all the related documents carefully before investing.</p>
                    <p>
                        Attention investors: 1) Stock brokers can accept securities as margins from clients only by way of pledge in the depository system w.e.f September 01, 2020. 2) Update your e-mail and phone number with your stock broker / depository participant and receive OTP directly from depository on your e-mail and/or mobile number to create pledge. 3) Check your securities / MF / bonds in the consolidated account statement issued by NSDL/CDSL every month.
                    </p>
                    <p>
                        "Prevent unauthorised transactions in your account. Update your mobile numbers/email IDs with your stock brokers. Receive information of your transactions directly from Exchange on your mobile/email at the end of the day. Issued in the interest of investors. KYC is one time exercise while dealing in securities markets - once KYC is done through a SEBI registered intermediary (broker, DP, Mutual Fund etc.), you need not undergo the same process again when you approach another intermediary." Dear Investor, if you are subscribing to an IPO, there is no need to issue a cheque. Please write the Bank account number and sign the IPO application form to authorize your bank to make payment in case of allotment. In case of non allotment the funds will remain in your bank account. As a business we don't give stock tips, and have not authorized anyone to trade on behalf of others. If you find anyone claiming to be part of Zerodha and offering such services, please &nbsp;
                        <b>
                            <a href="#">create a ticket here</a>
                        </b>.
                    </p>
                    <div className='items'>
                        <a href='#'>NSE</a>
                        <a href='#'>BSE</a>
                        <a href='#'>MCX</a>
                        <a href='#'>Terms&Conditions</a>
                        <a href='#'>Policies&Procedures</a>
                        <a href='#'>Privacy&Policy</a>
                        <a href='#'>Disclosure</a>
                        <a href='#'>For Investor's attention</a>
                        <a href='#'>Investor charter</a>
                    </div>
                </div>
                <div className='col-2'></div>
            </div>
        </div>
    );
}

export default Footer;