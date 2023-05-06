import React from 'react';
/* eslint-disable jsx-a11y/anchor-is-valid */
import './VerificationPage.css'


function VerificationPage() {
    const username = "TinakdhinNa"

    return (
        <>
            <div className="container-fluid backgroundImage p-0 m-0">
                <div className="row">
                    <div className="col-md-12 d-flex flex-column justify-content-center align-items-center">

                        <div className="row py-5"></div>

                        <div className="center-card d-flex flex-column justify-content-center align-items-center">

                            <div className="authenticate-icon mt-5 py-2">
                                <img className='img-fluid' src="https://cdn-icons-png.flaticon.com/512/1791/1791961.png" alt='icon' width={80} />
                            </div>

                            <div className="header py-2">
                                <h3 className='fw-bold px-3 text-center'>Authenticate Your Account</h3>
                            </div>
                            
                            <div className="description text-center">
                                <p className='px-4 fs-5'>Protecting your identity is our top priority. Please confirm your account
                                <span className='fw-bold text-primary'> "{username}"</span> by entering the authorization code sent to your <span className='fw-bold'>email.</span>                                </p>
                            </div>

                            <div className="inputBox mb-5">
                                <input className='form-control' type="text" />
                            </div>

                            <div className="resend">
                                <div className="row">
                                    <div className="col-md-8">
                                        <p className='px-5'>
                                            It may take a few minutes to receive your code.
                                            Haven't received it yet? <a href="#">Resend a new code.</a>
                                        </p>
                                    </div>
                                    <div className="col-md-4 submitbtn text-center mb-4">
                                        <button className='btn btn-primary px-4'>Submit</button>
                                    </div>
                                </div>
                            </div>

                        </div>

                    </div>
                </div>
            </div>
        </>
    )

}

export default VerificationPage;