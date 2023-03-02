import './about.css'
import analysis from '../../assets/analysis.jpg'
import individual from '../../assets/for-individuals.jpg'
import proff from '../../assets/professor2.jpg'
import search from '../../assets/search.png'
import fast from '../../assets/fast.png'
import custom from '../../assets/custom.png'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';


function AboutUs(){
    return(
        <>
            {/* ------- NAVBAR --------  */}

            <Navbar collapseOnSelect expand="lg" bg="light" variant="dark" className='navbar'>
                <Container>
                    <Navbar.Brand href="#home" className='nav-logo text-dark'>Chaapa</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto mt-2 text-dark">
                            <Nav.Link href="#features" className='nav-items btn btn-light text-dark'>Features</Nav.Link>
                            <Nav.Link href="#pricing" className='nav-items text-dark btn btn-light'>Pricing</Nav.Link>
                            <NavDropdown title="Dropdown" id="collasible-nav-dropdown text-dark" className='nav-items text-dark'>
                                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">
                                    Another action
                                </NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action/3.4">
                                    Separated link
                                </NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                        <Nav className='navbar-sign-btns'>
                            <Nav.Link href="#deets" className='btn btn-primary text-light px-3 fw-semibold'>Log In</Nav.Link>
                            <Nav.Link eventKey={2} href="#memes" className='btn btn-light text-dark fw-bold px-5'>Sign Up</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

            {/* ------ RIGHT AFTER NAVBAR ------- */}
            
            <div className="container-fluid chaapa-intro my-4" id='home'>
                <div className="row d-flex justify-content-center">
                    <div className="col-md-7 landing-1">
                        <h1 className='text-center chaapa-heading'><span className='chaapa-c'>C</span>haapa.com</h1>
                        <p>
                            A website that offers a "research paper paraphrasing and plagiarism checker" service allows users to check their written work for plagiarism and reword text to avoid duplication. The website compares the text with existing content on the internet and highlights any instances of plagiarism.
                            Users can then remix the content to make it original and one-of-a-kind.
                        </p>

                        <div className="btn btn-primary mx-4 mb-4">Get Started</div>
                    </div>
                    <div className="col-md-5 right-img">
                        <img className='img-fluid' src={analysis} alt="" />
                    </div>
                </div>
            </div>

            {/* -------- FOR INDIVIDUALS AND EDUCATION --------- */}


            <div className="row for-individuals">
                <div className="col-md-5 img-fluid for-individuals-left">
                    <img className='img-fluid' src={individual} alt="" />
                </div>

                <div className="col-md-7 for-individuals-right pt-5 px-5">
                    <h1>For Individuals</h1>
                    <p>
                        Designed for individuals to validate the authenticity and originality of
                        information (such as students, professors, freelancers, etc.).
                    </p>
                </div>
            </div>

            <div className="row for-individuals">
                <div className="col-md-7 pt-5 px-5">
                    <h1>For Education</h1>
                    <p>
                        We have a checker for education because, in the domain of education, 
                        we recognise the value of academic honesty. It's essential that professors 
                        always use Chaapa.com's web-based plagiarism detection tool to check for duplicate content.
                    </p>
                </div>

                <div className="col-md-5 right-img for-education">
                    <img className='img-fluid' src={proff} alt="" />
                </div>
            </div>

            {/* --------- FEATURES --------- */}

            <div className="container-fluid">
                <div className="row d-flex flex-row align-items-center justify-content-center features" id='features'>

                    <div className="row">
                        <div className="col-md-12 join-us-today d-flex justify-content-center ">
                            <h1>Features</h1>
                        </div>
                    </div>
                    
                    <div className="col-md-4 d-flex flex-column justify-content-center align-items-center features-item">
                        <img src={search} alt="404" className="img-fluid" />
                        <h3>Incomparable Search</h3>
                    </div>

                    <div className="col-md-4 d-flex flex-column justify-content-center align-items-center features-item">
                        <img src={fast} alt="404" className="img-fluid" />
                        <h3 >Exceptional Speed</h3>
                    </div>
                    
                    <div className="col-md-4 d-flex flex-column justify-content-center align-items-center features-item">
                        <img src={custom} alt="404" className="img-fluid" />
                        <h3 >Fully Customizable</h3>
                    </div>
                </div>
            </div>


            {/* ----------- PRICING ------------ */}

            <div className="container-fluid mb-5" id='pricing'>
                <div className="row mt-5">
                    <div className="col-md-12 join-us-today d-flex justify-content-center ">
                        <h1 style={{color: "rgb(0,0,0)"}}>Pricing</h1>
                    </div>
                </div>

                <div className="row mt-5">
                    <div className="col-md-4 d-flex flex-column justify-content-center align-items-center border-end border-dark">
                        <h1>
                            $0.5 <small style={{fontSize: "0.6em", color: "rgb(0,124,188)"}}>/per page</small>
                        </h1>
                        <br />
                        <p className='px-5'>You will be charged 0.5 USD per page in your research paper</p>
                        <p>Upto Unlimited Pages</p>
                        <p>Upto 10 Revisions</p>
                    </div>
                    <div className="col-md-4 d-flex flex-column justify-content-center align-items-center border-end border-dark">
                        <h1>
                            $20 <small style={{ fontSize: "0.6em", color: "rgb(0,124,188)" }}>/per month</small>
                        </h1>
                        <br />
                        <p className='px-5'>You will be charged 20 USD per page in this monthly subscription</p>
                        <p>Upto Unlimited Pages</p>
                        <p>Upto 10 Revisions</p>
                    </div>
                    <div className="col-md-4 d-flex flex-column justify-content-center align-items-center">
                        <h1>
                            $100 <small style={{ fontSize: "0.6em", color: "rgb(0,124,188)" }}>/per year</small>
                        </h1>
                        <br />
                        <p className='px-5'>You will be charged 100 USD per year in this annual subscription</p>
                        <p>Upto Unlimited Pages</p>
                        <p>Upto 10 Revisions</p>
                    </div>
                </div>
            </div>


            {/* -------- FOOTER -------- */}


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
                                    Chaapa.com
                                </h6>
                                <p className='text-dark'>
                                    Here you can use rows and columns to organize your footer content. Lorem ipsum dolor sit amet,
                                    consectetur adipisicing elit.
                                </p>
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
                                    <MDBIcon icon="home" className="me-2" />
                                    1600 Pennsylvania, Washington DC
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
                        Chaapa.com
                    </a>
                </div>
            </MDBFooter>

        </>
    )
}

export default AboutUs;