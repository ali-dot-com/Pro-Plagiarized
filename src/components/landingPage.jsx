import './landing.css'
import analysis from '../images/analysis.jpg'
import search from '../images/search.png'
import remove from '../images/remove.png'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function LandingPage(){
    return (
        <>
            <Navbar collapseOnSelect expand="lg" bg="light" variant="dark" className='navbar'>
                <Container>
                    <Navbar.Brand href="#home" className='nav-logo text-dark'>turnitin<strong>PRO</strong></Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                    <div className="col-md-8"></div>
                        <Nav className='navbar-sign-btns'>
                            <Nav.Link href="#deets" className='btn btn-primary text-light px-3 fw-semibold'>Log In</Nav.Link>
                            <Nav.Link eventKey={2} href="#memes" className='btn btn-light text-dark fw-bold px-5'>Sign Up</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

            {/* ------ RIGHT AFTER NAVBAR ------- */}

            <div className="container-fluid chaapa-intro my-2" id='home'>
                <div className="row d-flex justify-content-center">
                    <div className="col-md-7 landing-1">
                        {/* <h1 className='text-center chaapa-heading'><span className='chaapa-c'>t</span>urnitinPRO</h1> */}
                        <h1 className='text-center chaapa-heading'><span className='chaapa-c'>Ensuring</span> Originality</h1>
                        <p>
                            A Portal that offers a "plagiarism checker and removal"
                            service which allows users to check their written work for plagiarism and rewords text to avoid duplication.
                        </p>

                        <div className="btn btn-primary mx-5 mb-3">Get Started</div>
                    </div>
                    <div className="col-md-5 right-img">
                        <img className='img-fluid' src={analysis} alt="" />
                    </div>
                </div>
            </div>

            
            <div className="container-fluid">
                <div className="row d-flex flex-row align-items-center justify-content-center features" id='features'>

                    <div className="row">
                        <div className="col-md-12 join-us-today d-flex justify-content-center ">
                            <h1>Features</h1>
                        </div>
                    </div>

                    <div className="col-md-6 d-flex flex-column justify-content-center align-items-center features-item">
                        <img src={search} alt="404" className="img-fluid" />
                        <h3>Plagiarism Detection</h3>
                        <p className='px-5 mx-5 text-center'>This plagiarism detection feature is a tool to scan documents or written work for instances of copied or paraphrased text 
                            from other sources without proper attribution.
                        </p>
                    </div>

                    <div className="col-md-6 d-flex flex-column justify-content-center align-items-center features-item">
                        <img src={remove} alt="404" className="img-fluid" />
                        <h3>Plagiarism Removal</h3>
                        <p className="text-center px-5 mx-5">
                            A plagiarism removal feature is a tool that helps to eliminate any instance of copied or paraphrased text from a document and replace it with original content. 
                        </p>
                    </div>

                </div>
            </div>

            {/* -------- FOR INDIVIDUALS AND EDUCATION --------- */}


            {/* <div className="row for-individuals">
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
            </div> */}
        </>
    )
}

export default LandingPage;