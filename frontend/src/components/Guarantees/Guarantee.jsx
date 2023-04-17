import NavbarLandingPage from '../NavbarLandingPage/NavbarLandingPage';
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';

function Guarantees () {
    return (
        <>
            <NavbarLandingPage/>

            <div className="container-fluid guaranteeBody">
                <div className="row">
                    <div className="col-lg-1"></div>
                    <div className="col-lg-10">
                        <h1 className='fw-bold'>Money Back Guarantee</h1>

                        <div className="para" style={{ fontSize: "20px" }}>
                            <p style={{ fontSize: "20px" }}>
                                The Turn it in pro's refund policy or Money back guarantee enables the customer to request reimbursement under the circumstances of the following cases.
                            </p>

                            <p style={{ fontSize: "20px" }}>
                                If there is any problem while placing the claim for a refund, you can contact our support team directly and tell them your case, after which your request will be processed.
                            </p>
                        </div>

                        <h3 className='mt-5 fw-semibold'>Cancellation Of Order:</h3>
                        <p className='' style={{fontSize: "20px"}}>If the customer decides to cancel or revoke the order, the following refund rules must be followed and accepted by the customer.</p>
                        <ul>
                            <li className='my-2'>
                                If the order is not assigned and processed to the writer, then 100% compensation will be provided.
                            </li>

                            <li className='my-2'>
                                If the cancellation request is made after the writer has been assigned to order, 70% of the amount will be compensated, and the remaining 30% will go to the company and the writer's efforts.
                            </li>

                            <li className='my-2'>
                                If the order is assigned to the writer & half of the deadline is passed, 50% will be compensated.
                            </li>
                        </ul>

                        <p className='mt-4' style={{fontSize: "18px"}}>
                           <span className='fw-bold'>Note: </span> After cancelling the order under any circumstances, the drafts & deliverables before cancellation fall under the company's property, and all the copyright goes back to the company. The customer doesn't have the right to use the provided material.
                        </p>



                        <h3 className='fw-semibold mt-5'>Late Delivery refund: </h3>
                        <p style={{fontSize: "18px"}}>The late delivery compensation is handled separately for each case. In this scenario, the refund request depends upon the initial delivery time and the amount of the delayed time.</p>
                        <p style={{fontSize: "18px"}}>For long-term orders, i.e. (&lt;14 days), the compensated amount will be 6% of the total bill.</p>
                        <p style={{fontSize: "18px"}}>The customer will not be eligible for compensation if the following circumstances occur.</p>
                        <ul style={{fontSize: "18px"}}>
                            <li className='my-2'>
                                Customers have become the reason for the late delivery. This includes the late submission of pending dues and delay in providing the necessary information and sources required for order completion.
                            </li>

                            <li className='my-2'>
                                Delay in the response due to technical difficulties from the customer's side i-e internet connection problems and system or browser failures.
                            </li>

                            <li className='my-2'>
                                The customer extended the deadline by themself, which means they are allowing us additional time for the delivery without any compensation.
                            </li>
                        </ul>



                        <h3 className='mt-5 fw-semibold' >Bad Quality Refund: </h3>
                        <p style={{fontSize: "18px"}}>
                            If a lousy quality refund request occurs, our quality assurance team will investigate the unhappy customer's application with our product or service. For investigation, detailed feedback from the customer is required about the product i-e why they are unhappy with our service. The actions & decisions of refund will be taken based on results conducted through the investigation by the internal department.
                        </p>
                        <p style={{ fontSize: "18px" }}>
                            In case of a lousy quality refund request, the compensation will be 70% of the total amount because each order is sent to the customer for revision before the final delivery. And revision is the process of revising and reviewing the paper for any changes, which means the customer has partially accepted the order.
                        </p>
                        <ul>
                            <li>In case of plagiarism, a Turnitin report is required for investigation purposes. And we don't accept any report other than the original Turnitin report.</li>
                        </ul>



                        <h3 className='fw-semibold mt-4'>Process of compensation request</h3>
                        <p style={{fontSize: "18px"}}>
                            Under the laws and regulations mentioned above, to appeal compensation, a customer must contact our support team within two months of getting the order.
                        </p>
                        <p style={{fontSize: "18px"}}>
                            After five days of reviewing, our finance department will contact you via your email or provided phone number.
                        </p>
                        <p style={{fontSize: "18px"}}>
                            To complete the application process and investigation, our internal team has the right to require any further information.
                        </p>



                        <h3 className='fw-semibold'>Compensation/refund process</h3>
                        <p style={{fontSize: "18px"}}>
                            After receiving your application, our team will immediately confirm the refund to the customer within five business days. Remember that any bank transaction fee, transfer fee, and delay in the process due to the interrupted bank service will not be part of the company's responsibility.
                        </p>
                        <p style={{fontSize: "18px"}}>
                            The bank transaction charges on the more extensive amount will be £10, and for the minor transaction, there are no charges because the transaction amount covers the charges for both the company's and the client's bank. Once the payment is released from the bank, the amount will be available to the customers provided by the bank.
                        </p>

                    </div>                    
                </div>
            </div>
        
        
            <div className="container-fluid ">
                <div className="row joinUsToday py-5">
                    <div className="col-lg-12 text-center">
                        <h1 className='text-center fw-bold text-light'>We would love to hear from you</h1>
                        <h2 className="text-center text-light py-3">Join us today and get services from our professional experts</h2>
                        <div className="btn btn-dark px-5 jello-horizontal">Get Quote Now</div>
                    </div>
                </div>
            </div>
        
            <MDBFooter bgColor='light' className='text-center text-lg-start text-muted'>
                <section className='d-flex justify-content-center justify-content-lg-between p-4 border-bottom'>
                    <div className='me-5 d-none d-lg-block'>
                        <span className=''>Get connected with us on social networks:</span>
                    </div>

                    <div>
                        <a href='' className='me-4 text-reset'>
                            <MDBIcon fab icon="facebook-f" />
                        </a>
                        <a href='' className='me-4 text-reset'>
                            <MDBIcon fab icon="twitter" />
                        </a>
                        <a href='' className='me-4 text-reset'>
                            <MDBIcon fab icon="google" />
                        </a>
                        <a href='' className='me-4 text-reset'>
                            <MDBIcon fab icon="instagram" />
                        </a>
                        <a href='' className='me-4 text-reset'>
                            <MDBIcon fab icon="linkedin" />
                        </a>
                        <a href='' className='me-4 text-reset'>
                            <MDBIcon fab icon="github" />
                        </a>
                    </div>
                </section>

                <section className=''>
                    <MDBContainer className='text-center text-md-start mt-5'>
                        <MDBRow className='mt-3'>
                            <MDBCol md="3" lg="4" xl="3" className='mx-auto mb-4'>
                                <h6 className='text-uppercase fw-bold mb-4 text-dark'>
                                    <MDBIcon icon="gem" className="me-3" />
                                    turnitinpro.com
                                </h6>
                                <p className='text-dark'>
                                    Here you can use rows and columns to organize your footer content. Lorem ipsum dolor sit amet,
                                    consectetur adipisicing elit.
                                </p>
                                <p className='text-success fw-bold  '>ATTENTION!</p>
                                <p>Using TurnitinPro writing service is legal and is not disallowed by university/college policies.
                                    If you want to know how to use a custom paper you get from us legally, then learn here.</p>
                            </MDBCol>

                            <MDBCol md="2" lg="2" xl="2" className='mx-auto mb-4'>
                                <h6 className='text-uppercase fw-bold mb-4 text-dark'>Products</h6>
                                <p>
                                    <a href='#!' className='text-dark'>
                                        Paraphraser
                                    </a>
                                </p>
                                <p>
                                    <a href='#!' className='text-dark'>
                                        AI Detection
                                    </a>
                                </p>
                                <p>
                                    <a href='#!' className='text-dark'>
                                        Research Oriented
                                    </a>
                                </p>

                                <p className=''>
                                    <a href="" className='text-dark fw-bold' style={{ textDecoration: "none" }}>Payment Methods: </a>
                                    <svg className='px-2' xmlns="http://www.w3.org/2000/svg" height={40} viewBox="0 0 576 512"><path d="M482.9 410.3c0 6.8-4.6 11.7-11.2 11.7-6.8 0-11.2-5.2-11.2-11.7 0-6.5 4.4-11.7 11.2-11.7 6.6 0 11.2 5.2 11.2 11.7zm-310.8-11.7c-7.1 0-11.2 5.2-11.2 11.7 0 6.5 4.1 11.7 11.2 11.7 6.5 0 10.9-4.9 10.9-11.7-.1-6.5-4.4-11.7-10.9-11.7zm117.5-.3c-5.4 0-8.7 3.5-9.5 8.7h19.1c-.9-5.7-4.4-8.7-9.6-8.7zm107.8.3c-6.8 0-10.9 5.2-10.9 11.7 0 6.5 4.1 11.7 10.9 11.7 6.8 0 11.2-4.9 11.2-11.7 0-6.5-4.4-11.7-11.2-11.7zm105.9 26.1c0 .3.3.5.3 1.1 0 .3-.3.5-.3 1.1-.3.3-.3.5-.5.8-.3.3-.5.5-1.1.5-.3.3-.5.3-1.1.3-.3 0-.5 0-1.1-.3-.3 0-.5-.3-.8-.5-.3-.3-.5-.5-.5-.8-.3-.5-.3-.8-.3-1.1 0-.5 0-.8.3-1.1 0-.5.3-.8.5-1.1.3-.3.5-.3.8-.5.5-.3.8-.3 1.1-.3.5 0 .8 0 1.1.3.5.3.8.3 1.1.5s.2.6.5 1.1zm-2.2 1.4c.5 0 .5-.3.8-.3.3-.3.3-.5.3-.8 0-.3 0-.5-.3-.8-.3 0-.5-.3-1.1-.3h-1.6v3.5h.8V426h.3l1.1 1.4h.8l-1.1-1.3zM576 81v352c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V81c0-26.5 21.5-48 48-48h480c26.5 0 48 21.5 48 48zM64 220.6c0 76.5 62.1 138.5 138.5 138.5 27.2 0 53.9-8.2 76.5-23.1-72.9-59.3-72.4-171.2 0-230.5-22.6-15-49.3-23.1-76.5-23.1-76.4-.1-138.5 62-138.5 138.2zm224 108.8c70.5-55 70.2-162.2 0-217.5-70.2 55.3-70.5 162.6 0 217.5zm-142.3 76.3c0-8.7-5.7-14.4-14.7-14.7-4.6 0-9.5 1.4-12.8 6.5-2.4-4.1-6.5-6.5-12.2-6.5-3.8 0-7.6 1.4-10.6 5.4V392h-8.2v36.7h8.2c0-18.9-2.5-30.2 9-30.2 10.2 0 8.2 10.2 8.2 30.2h7.9c0-18.3-2.5-30.2 9-30.2 10.2 0 8.2 10 8.2 30.2h8.2v-23zm44.9-13.7h-7.9v4.4c-2.7-3.3-6.5-5.4-11.7-5.4-10.3 0-18.2 8.2-18.2 19.3 0 11.2 7.9 19.3 18.2 19.3 5.2 0 9-1.9 11.7-5.4v4.6h7.9V392zm40.5 25.6c0-15-22.9-8.2-22.9-15.2 0-5.7 11.9-4.8 18.5-1.1l3.3-6.5c-9.4-6.1-30.2-6-30.2 8.2 0 14.3 22.9 8.3 22.9 15 0 6.3-13.5 5.8-20.7.8l-3.5 6.3c11.2 7.6 32.6 6 32.6-7.5zm35.4 9.3l-2.2-6.8c-3.8 2.1-12.2 4.4-12.2-4.1v-16.6h13.1V392h-13.1v-11.2h-8.2V392h-7.6v7.3h7.6V416c0 17.6 17.3 14.4 22.6 10.9zm13.3-13.4h27.5c0-16.2-7.4-22.6-17.4-22.6-10.6 0-18.2 7.9-18.2 19.3 0 20.5 22.6 23.9 33.8 14.2l-3.8-6c-7.8 6.4-19.6 5.8-21.9-4.9zm59.1-21.5c-4.6-2-11.6-1.8-15.2 4.4V392h-8.2v36.7h8.2V408c0-11.6 9.5-10.1 12.8-8.4l2.4-7.6zm10.6 18.3c0-11.4 11.6-15.1 20.7-8.4l3.8-6.5c-11.6-9.1-32.7-4.1-32.7 15 0 19.8 22.4 23.8 32.7 15l-3.8-6.5c-9.2 6.5-20.7 2.6-20.7-8.6zm66.7-18.3H408v4.4c-8.3-11-29.9-4.8-29.9 13.9 0 19.2 22.4 24.7 29.9 13.9v4.6h8.2V392zm33.7 0c-2.4-1.2-11-2.9-15.2 4.4V392h-7.9v36.7h7.9V408c0-11 9-10.3 12.8-8.4l2.4-7.6zm40.3-14.9h-7.9v19.3c-8.2-10.9-29.9-5.1-29.9 13.9 0 19.4 22.5 24.6 29.9 13.9v4.6h7.9v-51.7zm7.6-75.1v4.6h.8V302h1.9v-.8h-4.6v.8h1.9zm6.6 123.8c0-.5 0-1.1-.3-1.6-.3-.3-.5-.8-.8-1.1-.3-.3-.8-.5-1.1-.8-.5 0-1.1-.3-1.6-.3-.3 0-.8.3-1.4.3-.5.3-.8.5-1.1.8-.5.3-.8.8-.8 1.1-.3.5-.3 1.1-.3 1.6 0 .3 0 .8.3 1.4 0 .3.3.8.8 1.1.3.3.5.5 1.1.8.5.3 1.1.3 1.4.3.5 0 1.1 0 1.6-.3.3-.3.8-.5 1.1-.8.3-.3.5-.8.8-1.1.3-.6.3-1.1.3-1.4zm3.2-124.7h-1.4l-1.6 3.5-1.6-3.5h-1.4v5.4h.8v-4.1l1.6 3.5h1.1l1.4-3.5v4.1h1.1v-5.4zm4.4-80.5c0-76.2-62.1-138.3-138.5-138.3-27.2 0-53.9 8.2-76.5 23.1 72.1 59.3 73.2 171.5 0 230.5 22.6 15 49.5 23.1 76.5 23.1 76.4.1 138.5-61.9 138.5-138.4z" /></svg>
                                    <svg className='px-1' xmlns="http://www.w3.org/2000/svg" height={40} viewBox="0 0 576 512"><path d="M470.1 231.3s7.6 37.2 9.3 45H446c3.3-8.9 16-43.5 16-43.5-.2.3 3.3-9.1 5.3-14.9l2.8 13.4zM576 80v352c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V80c0-26.5 21.5-48 48-48h480c26.5 0 48 21.5 48 48zM152.5 331.2L215.7 176h-42.5l-39.3 106-4.3-21.5-14-71.4c-2.3-9.9-9.4-12.7-18.2-13.1H32.7l-.7 3.1c15.8 4 29.9 9.8 42.2 17.1l35.8 135h42.5zm94.4.2L272.1 176h-40.2l-25.1 155.4h40.1zm139.9-50.8c.2-17.7-10.6-31.2-33.7-42.3-14.1-7.1-22.7-11.9-22.7-19.2.2-6.6 7.3-13.4 23.1-13.4 13.1-.3 22.7 2.8 29.9 5.9l3.6 1.7 5.5-33.6c-7.9-3.1-20.5-6.6-36-6.6-39.7 0-67.6 21.2-67.8 51.4-.3 22.3 20 34.7 35.2 42.2 15.5 7.6 20.8 12.6 20.8 19.3-.2 10.4-12.6 15.2-24.1 15.2-16 0-24.6-2.5-37.7-8.3l-5.3-2.5-5.6 34.9c9.4 4.3 26.8 8.1 44.8 8.3 42.2.1 69.7-20.8 70-53zM528 331.4L495.6 176h-31.1c-9.6 0-16.9 2.8-21 12.9l-59.7 142.5H426s6.9-19.2 8.4-23.3H486c1.2 5.5 4.8 23.3 4.8 23.3H528z" /></svg>
                                </p>
                            </MDBCol>

                            <MDBCol md="3" lg="2" xl="2" className='mx-auto mb-4'>
                                <h6 className='text-uppercase fw-bold mb-4 text-dark'>Useful links</h6>
                                <p>
                                    <a href='#!' className='text-dark'>
                                        Pricing
                                    </a>
                                </p>
                                <p>
                                    <a href='#!' className='text-dark'>
                                        Settings
                                    </a>
                                </p>
                                <p>
                                    <a href='#!' className='text-dark'>
                                        Orders
                                    </a>
                                </p>
                                <p>
                                    <a href='#!' className='text-dark'>
                                        Help
                                    </a>
                                </p>
                            </MDBCol>

                            <MDBCol md="4" lg="3" xl="3" className='mx-auto mb-md-0 mb-4'>
                                <h6 className='text-uppercase fw-bold mb- text-dark'>Contact</h6>
                                <p className='text-dark'>
                                    <MDBIcon icon="home" className="me-2" />1600 Pennsylvania, Washington DC
                                </p>
                                <p className='text-dark'>
                                    <MDBIcon icon="envelope" className="me-3" />
                                    tinakdhinna@gmail.com
                                </p>
                                <p className='text-dark'>
                                    <MDBIcon icon="phone" className="me-3" /> + 92 234 567 88
                                </p>
                                <p className='text-dark'>
                                    <MDBIcon icon="print" className="me-3 " /> + 92 234 567 89
                                </p>
                            </MDBCol>
                        </MDBRow>
                    </MDBContainer>
                </section>

                <div className='text-center text-light p-4' style={{ backgroundColor: 'rgba(17,17,17,0.9)' }}>
                    © 2023 Copyright:&nbsp;
                    <a className='text-light fw-bold footer-web' href='https://mdbootstrap.com/'>
                        turnitinpro.com
                    </a>
                </div>
            </MDBFooter>
        </>
    )
}

export default Guarantees;