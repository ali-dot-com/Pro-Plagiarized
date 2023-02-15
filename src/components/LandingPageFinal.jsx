import './landingFinal.css'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
// import NavDropdown from 'react-bootstrap/NavDropdown';
import proff from "../images/professor (Medium).jpg"
// import proff2 from "../images/professor.jpg"
// import search from '../images/search.png'
// import remove from '../images/remove.png'
// import speed from '../images/fast.png'
import { styled } from '@mui/material/styles';
// import FormGroup from '@mui/material/FormGroup';
// import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';
// import Stack from '@mui/material/Stack';
// import Typography from '@mui/material/Typography';
import { Uploader } from "uploader";
// import { UploadButton } from "react-uploader";
import { UploadDropzone } from "react-uploader";
import { ReactDOM, useState } from 'react';
import arrow from '../images/down-arrow.svg'
import { i1, i2, i3, i4, i5 } from './ImportingImages'
import { BrowserRouter, Route, NavLink } from 'react-router-dom';
import SlideRoutes from 'react-slide-routes';
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';



const RemovePlagiarism = () => <div className="card home mb-5 text-center mx-auto">
    <h1>$5/per page</h1>
    <p style={{ fontSize: "1rem", padding: "1em" }}>
        Error Free <br />
        Return in 2 Days <br />
        Tasalli Bakhsh
    </p>

    {/* <button className='btn btn-warning px-3'>Let's Start</button> */}

    <button className="cta">
        <span className="span">Remove</span>
        <span className="second">
            <svg width="35px" height="20px" viewBox="0 0 66 43">
                <g id="arrow" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                    <path className="one" d="M40.1543933,3.89485454 L43.9763149,0.139296592 C44.1708311,-0.0518420739 44.4826329,-0.0518571125 44.6771675,0.139262789 L65.6916134,20.7848311 C66.0855801,21.1718824 66.0911863,21.8050225 65.704135,22.1989893 C65.7000188,22.2031791 65.6958657,22.2073326 65.6916762,22.2114492 L44.677098,42.8607841 C44.4825957,43.0519059 44.1708242,43.0519358 43.9762853,42.8608513 L40.1545186,39.1069479 C39.9575152,38.9134427 39.9546793,38.5968729 40.1481845,38.3998695 C40.1502893,38.3977268 40.1524132,38.395603 40.1545562,38.3934985 L56.9937789,21.8567812 C57.1908028,21.6632968 57.193672,21.3467273 57.0001876,21.1497035 C56.9980647,21.1475418 56.9959223,21.1453995 56.9937605,21.1432767 L40.1545208,4.60825197 C39.9574869,4.41477773 39.9546013,4.09820839 40.1480756,3.90117456 C40.1501626,3.89904911 40.1522686,3.89694235 40.1543933,3.89485454 Z" fill="#FFFFFF"></path>
                    <path className="two" d="M20.1543933,3.89485454 L23.9763149,0.139296592 C24.1708311,-0.0518420739 24.4826329,-0.0518571125 24.6771675,0.139262789 L45.6916134,20.7848311 C46.0855801,21.1718824 46.0911863,21.8050225 45.704135,22.1989893 C45.7000188,22.2031791 45.6958657,22.2073326 45.6916762,22.2114492 L24.677098,42.8607841 C24.4825957,43.0519059 24.1708242,43.0519358 23.9762853,42.8608513 L20.1545186,39.1069479 C19.9575152,38.9134427 19.9546793,38.5968729 20.1481845,38.3998695 C20.1502893,38.3977268 20.1524132,38.395603 20.1545562,38.3934985 L36.9937789,21.8567812 C37.1908028,21.6632968 37.193672,21.3467273 37.0001876,21.1497035 C36.9980647,21.1475418 36.9959223,21.1453995 36.9937605,21.1432767 L20.1545208,4.60825197 C19.9574869,4.41477773 19.9546013,4.09820839 20.1480756,3.90117456 C20.1501626,3.89904911 20.1522686,3.89694235 20.1543933,3.89485454 Z" fill="#FFFFFF"></path>
                    <path className="three" d="M0.154393339,3.89485454 L3.97631488,0.139296592 C4.17083111,-0.0518420739 4.48263286,-0.0518571125 4.67716753,0.139262789 L25.6916134,20.7848311 C26.0855801,21.1718824 26.0911863,21.8050225 25.704135,22.1989893 C25.7000188,22.2031791 25.6958657,22.2073326 25.6916762,22.2114492 L4.67709797,42.8607841 C4.48259567,43.0519059 4.17082418,43.0519358 3.97628526,42.8608513 L0.154518591,39.1069479 C-0.0424848215,38.9134427 -0.0453206733,38.5968729 0.148184538,38.3998695 C0.150289256,38.3977268 0.152413239,38.395603 0.154556228,38.3934985 L16.9937789,21.8567812 C17.1908028,21.6632968 17.193672,21.3467273 17.0001876,21.1497035 C16.9980647,21.1475418 16.9959223,21.1453995 16.9937605,21.1432767 L0.15452076,4.60825197 C-0.0425130651,4.41477773 -0.0453986756,4.09820839 0.148075568,3.90117456 C0.150162624,3.89904911 0.152268631,3.89694235 0.154393339,3.89485454 Z" fill="#FFFFFF"></path>
                </g>
            </svg>
        </span>
    </button>

</div>;

const DetectPlagiarism = () => <div className="card about mb-5 text-center mx-auto">
    <h1>$5/per page</h1>
    <p style={{ fontSize: "1rem", padding: "1em" }}>
        Error Free <br />
        Return in 2 Days <br />
        Tasalli Bakhsh
    </p>

    {/* <button className='btn btn-warning px-3'>Let's Start</button> */}

    <button className="cta">
        <span className="span">Detect</span>
        <span className="second">
            <svg width="35px" height="20px" viewBox="0 0 66 43">
                <g id="arrow" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                    <path className="one" d="M40.1543933,3.89485454 L43.9763149,0.139296592 C44.1708311,-0.0518420739 44.4826329,-0.0518571125 44.6771675,0.139262789 L65.6916134,20.7848311 C66.0855801,21.1718824 66.0911863,21.8050225 65.704135,22.1989893 C65.7000188,22.2031791 65.6958657,22.2073326 65.6916762,22.2114492 L44.677098,42.8607841 C44.4825957,43.0519059 44.1708242,43.0519358 43.9762853,42.8608513 L40.1545186,39.1069479 C39.9575152,38.9134427 39.9546793,38.5968729 40.1481845,38.3998695 C40.1502893,38.3977268 40.1524132,38.395603 40.1545562,38.3934985 L56.9937789,21.8567812 C57.1908028,21.6632968 57.193672,21.3467273 57.0001876,21.1497035 C56.9980647,21.1475418 56.9959223,21.1453995 56.9937605,21.1432767 L40.1545208,4.60825197 C39.9574869,4.41477773 39.9546013,4.09820839 40.1480756,3.90117456 C40.1501626,3.89904911 40.1522686,3.89694235 40.1543933,3.89485454 Z" fill="#FFFFFF"></path>
                    <path className="two" d="M20.1543933,3.89485454 L23.9763149,0.139296592 C24.1708311,-0.0518420739 24.4826329,-0.0518571125 24.6771675,0.139262789 L45.6916134,20.7848311 C46.0855801,21.1718824 46.0911863,21.8050225 45.704135,22.1989893 C45.7000188,22.2031791 45.6958657,22.2073326 45.6916762,22.2114492 L24.677098,42.8607841 C24.4825957,43.0519059 24.1708242,43.0519358 23.9762853,42.8608513 L20.1545186,39.1069479 C19.9575152,38.9134427 19.9546793,38.5968729 20.1481845,38.3998695 C20.1502893,38.3977268 20.1524132,38.395603 20.1545562,38.3934985 L36.9937789,21.8567812 C37.1908028,21.6632968 37.193672,21.3467273 37.0001876,21.1497035 C36.9980647,21.1475418 36.9959223,21.1453995 36.9937605,21.1432767 L20.1545208,4.60825197 C19.9574869,4.41477773 19.9546013,4.09820839 20.1480756,3.90117456 C20.1501626,3.89904911 20.1522686,3.89694235 20.1543933,3.89485454 Z" fill="#FFFFFF"></path>
                    <path className="three" d="M0.154393339,3.89485454 L3.97631488,0.139296592 C4.17083111,-0.0518420739 4.48263286,-0.0518571125 4.67716753,0.139262789 L25.6916134,20.7848311 C26.0855801,21.1718824 26.0911863,21.8050225 25.704135,22.1989893 C25.7000188,22.2031791 25.6958657,22.2073326 25.6916762,22.2114492 L4.67709797,42.8607841 C4.48259567,43.0519059 4.17082418,43.0519358 3.97628526,42.8608513 L0.154518591,39.1069479 C-0.0424848215,38.9134427 -0.0453206733,38.5968729 0.148184538,38.3998695 C0.150289256,38.3977268 0.152413239,38.395603 0.154556228,38.3934985 L16.9937789,21.8567812 C17.1908028,21.6632968 17.193672,21.3467273 17.0001876,21.1497035 C16.9980647,21.1475418 16.9959223,21.1453995 16.9937605,21.1432767 L0.15452076,4.60825197 C-0.0425130651,4.41477773 -0.0453986756,4.09820839 0.148075568,3.90117456 C0.150162624,3.89904911 0.152268631,3.89694235 0.154393339,3.89485454 Z" fill="#FFFFFF"></path>
                </g>
            </svg>
        </span>
    </button>

</div>;

function LandingPageFinal() {
    const [state, setState] = useState(0);

    const handleClick = () => {
        let x = document.getElementById('d-plagiarism');
        let y = document.getElementById('r-plagiarism');
        // setState(0);
        x.style.backgroundColor = "rgb(11,95,215)"
        x.style.color = "white";
        y.style.backgroundColor = "white"
        y.style.color = "rgb(11,95,215)";
    }

    const handleClickR = () => {
        let x = document.getElementById('d-plagiarism');
        let y = document.getElementById('r-plagiarism');
        // setState(1)
        y.style.backgroundColor = "rgb(11,95,215)"
        y.style.color = "white";
        x.style.backgroundColor = "white"
        x.style.color = "rgb(11,95,215)";
    }


    //----------TOGGLE SWITCHES ------------
    const AntSwitch = styled(Switch)(({ theme }) => ({
        width: 52,
        height: 30,
        padding: 7,
        display: 'flex',
        '&:active': {
            '& .MuiSwitch-thumb': {
                width: 20,
            },
            '& .MuiSwitch-switchBase.Mui-checked': {
                transform: 'translateX(25px)',
            },
        },
        '& .MuiSwitch-switchBase': {
            padding: 2,
            '&.Mui-checked': {
                transform: 'translateX(25px)',
                color: '#fff',
                '& + .MuiSwitch-track': {
                    opacity: 1,
                    backgroundColor: theme.palette.mode === 'dark' ? '#177ddc' : '#1890ff',
                },
            },
        },
        '& .MuiSwitch-thumb': {
            boxShadow: '0 2px 4px 0 rgb(0 35 11 / 20%)',
            width: 24,
            height: 24,
            borderRadius: 16,
            transition: theme.transitions.create(['width'], {
                duration: 200,
            }),
        },
        '& .MuiSwitch-track': {
            borderRadius: 16,
            opacity: 1,
            backgroundColor: theme.palette.mode === 'dark' ? '#6d81fe' : '#ffd800',
            boxSizing: 'border-box',
        },
    }));


    const uploader = new Uploader({
        apiKey: "free"
    });

    let priceHome = "price-home p-2 fw-bold";


    return (
        <>
            <div className="container-fluid">
                <Navbar collapseOnSelect expand="lg" bg="white" variant="dark" className='navbar'>
                    <Container>
                        <Navbar.Brand href="#home" className='nav-logo text-dark'>turnitin<strong>PRO</strong></Navbar.Brand>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" bg='dark' variant='dark' />
                        <Navbar.Collapse id="responsive-navbar-nav" className=''>
                            <div className="col-lg-7"></div>
                            <Nav className='navbar-sign-btns'>
                                <Nav.Link href="#deets" className='btn btn-primary  mx-2 nav-btns text-light px-3 fw-semibold'>Log In</Nav.Link>
                                <Nav.Link eventKey={2} href="#memes" className='btn mx-2 nav-btns btn-light text-dark fw-bold px-5'
                                    style={{ backgroundColor: "white" }}
                                >Sign Up</Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </div>


            <div className="container-fluid">
                <div className="row ">
                    <div className="col-lg-8 d-flex flex-column px-5">
                        <div className="row px-4 tracking-in-expand">
                            <h2 className='header fw-light'>turnitin<strong className='fw-bold'>PRO</strong></h2>
                            <div className="underlined-header"></div>
                        </div>

                        <div className="row p-4">
                            <p className='description'>
                                A website that offers a "research paper paraphrasing and plagiarism checker" service allows users to check their written work for plagiarism and reword text to avoid duplication.
                            </p>

                            <div className="container-fluid">
                                <div className="row my-3">
                                    <h4 className='text-center'>Upload a file to get started</h4>
                                </div>
                                <div className="row">
                                    <div className="col-lg-6  d-flex flex-row justify-content-center">
                                        <button className="btn btn-outline-primary px-5 py-4 mx-5 my-2 fw-bold"
                                            id='r-plagiarism'
                                            onClick={handleClickR}
                                        >
                                            Remove Plagiarism
                                        </button>
                                    </div>
                                    <div className="col-lg-6  d-flex flex-row justify-content-center">
                                        <button className="btn btn-outline-primary px-5 py-4 mx-5 my-2 fw-bold"
                                            id='d-plagiarism'
                                            onClick={handleClick}>
                                            Detect Plagiarism
                                        </button>
                                    </div>
                                </div>
                            </div>


                            <UploadDropzone uploader={uploader}
                                options={{ multi: true }}
                                onComplete={files => console.log(files)}
                                width="auto"
                                height="200px"
                            />
                        </div>

                    </div>

                    <div className="col-lg-4 professor d-flex align-items-center justify-content-center flex-column">
                        <img src={proff} alt="" className="img-fluid" />
                    </div>
                </div>

                <div className="features-header">
                    <h1 className='text-center'>Features</h1>
                </div>

                <div className="row featuresFinal fw-semibold slide-in-bck-center d-flex flex-row justify-content-center features-background">
                    {/* <div className="col-lg-12">
                        <div className="row features-header text-center">
                            <h1 className='mb-4 fw-bold'>Features</h1>
                        </div>
                        <div className="row text-center my-5">
                            <div className="col-lg-4 features-item">
                                <img src={search} alt="" className="img-fluid" />
                                <p className='p-4'>Plagiarism Detection</p>
                            </div>
                            <div className="col-lg-4 features-item">
                                <img src={remove} alt="" className="img-fluid" />
                                <p className='p-4'>Plagiarism Removal</p>

                            </div>
                            <div className="col-lg-4 features-item">
                                <img src={speed} alt="" className="img-fluid " />
                                <p className='p-4'>Speed & Efficiency</p>
                            </div>
                        </div>
                    </div> */}

                    {/* <div className="features-header text-center">
                        <h1>Features</h1>
                    </div>

                    <div className="col-lg-4 text-center individual-feature mb-5">
                        <img src={search} className='img-fluid features-icon' alt="" />
                        <p className="p-4 text-fluid fw-bold">Detect Plagiarism</p>
                        <span className='px-2'>
                            This plagiarism detection feature is a tool to scan documents or written work for instances
                            of copied or paraphrased text from other sources without proper attribution.
                        </span>
                    </div>
                    <div className="col-lg-4 text-center individual-feature mb-5">
                        <img src={remove} className='img-fluid features-icon' alt="" />
                        <p className="p-4 text-fluid fw-bold">Remove Plagiarism</p>
                        <span className='px-2'>
                            A plagiarism removal feature is a tool that helps to eliminate any instance of copied or 
                            paraphrased text from a document and replace it with original content.
                        </span>
                    </div>
                    <div className="col-lg-4 text-center individual-feature mb-5">
                        <img src={speed} className='img-fluid features-icon' alt="" />
                        <p className="p-4 text-fluid fw-bold">High Speed & Efficiency</p>
                        <span className='px-2'>
                            This plagiarism detection feature is a tool to scan documents or written work for instances
                            of copied or paraphrased text from other sources without proper attribution.
                        </span>
                    </div> */}



                    <div className="col-md-2 text-light py-5 text-center text-dark">
                        <img src={i1} alt="404" className='py-4 img-fluid mx-auto' />
                        <p>All Day, Everyday Service</p>
                    </div>
                    <div className="col-md-2 text-light py-5 text-center text-dark">
                        <img src={i2} alt="404" className='py-4 img-fluid mx-auto' />
                        <p>
                            Fast Turn it in Report
                        </p>
                    </div>
                    <div className="col-md-2 text-light py-5 text-center text-dark">
                        <img src={i3} alt="404" className='py-4 img-fluid' />
                        <p>
                            No repository required
                        </p>
                    </div>
                    <div className="col-md-2 text-light py-5 text-center text-dark">
                        <img src={i4} alt="404" className='py-4 img-fluid' />
                        <p>
                            Error Free results
                        </p>
                    </div>
                    <div className="col-md-2 text-light py-5 text-center text-dark">
                        <img src={i5} alt="404" className='py-4 img-fluid' />
                        <p>
                            Quality guaranteed
                        </p>
                    </div>

                    <div className="container-fluid">
                        <div className="row ">
                            <div className="col-lg-12 d-flex flex-column justify-content-center align-items-center">
                                <a href="#" className='arrow d-flex flex-column'>
                                    <img src={arrow} alt="" className='img-fluid' />
                                    <span className='text-center mb-4 my-3 text-dark'>Get Started</span>
                                </a>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

            <hr />


            {/* ------------ HOW IT WORKS ----------- */}

            <div className="container-fluid">

                <div className="text-fluid">
                    <h1 className='text-center text-fluid my-3 mb-5 fw-bold' style={{fontSize: "3.5rem"}}>How we work?</h1>
                </div>


                <div className="row reveal fade-bottom">

                    <div className="col-lg-4 stepOne d-flex justify-content-end align-items-end mt-5 pt-5">
                        <div class="stepCard">
                            <div class="pricing-block-content">
                                <p class="pricing-plan text-fluid">Step one</p>
                                <div class="price-value" data-currency="$ USD" data-currency-simple="USD">
                                    <p class="price-number text-fluid"><span class="price-integer">Upload</span></p>
                                </div>
                                <div class="pricing-note">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit
                                </div>

                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4 stepTwo d-flex flex-column flex-wrap align-content-center">
                        <div class="stepCard mb-3">
                            <div class="pricing-block-content">
                                <p class="pricing-plan text-fluid">Step Two</p>
                                <div class="price-value" data-currency="$ USD" data-currency-simple="USD">
                                    <p class="price-number text-fluid"><span class="price-integer">Review</span></p>
                                </div>
                                <div class="pricing-note">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit
                                </div>

                            </div>
                        </div>

                        <div class="loader triangle mx-auto my-auto">
                            <svg viewBox="0 0 86 80">
                                <polygon points="43 8 79 72 7 72"></polygon>
                            </svg>
                        </div>

                    </div>

                    <div className="col-lg-4 stepThree mt-5 pt-5">
                        <div class="stepCard mt-5">
                            <div class="pricing-block-content">
                                <p class="pricing-plan text-fluid">Step Three</p>
                                <div class="price-value" data-currency="$ USD" data-currency-simple="USD">
                                    <p class="price-number text-fluid"><span class="price-integer">Report</span></p>
                                </div>
                                <div class="pricing-note text-fluid">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>

<br /><br />
<hr />


            <div className="container-fluid mb-5" id='pricing'>
                <div className="row my-4">
                    <div className="col-md-12 d-flex justify-content-center ">
                        <h1 style={{ color: "rgb(0,0,0)", fontSize: "3.5rem" }} className='fw-bold'>Pricing</h1>
                    </div>
                </div>
                {/* 
                <div className="row mt-5">
                    <div className="col-md-4 d-flex flex-column justify-content-center align-items-center border-end border-dark">
                        <h1>
                            $0.5 <small style={{ fontSize: "0.6em", color: "rgb(0,124,188)" }}>/per page</small>
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
                </div> */}


                <div className="row h-auto">
                    <div className="col-lg-12 d-flex flex-column justify-content-center">
                        <BrowserRouter className='Pricing-Slider'>
                            <nav className='price-nav mb-5'>
                                <NavLink className={priceHome} to="/" end>Remove Plagiarism</NavLink>
                                <NavLink className={priceHome} to="/about">Detect Plagiarism</NavLink>
                            </nav>

                            <SlideRoutes>
                                <Route path="/" element={<RemovePlagiarism />} />
                                <Route path="/about" element={<DetectPlagiarism />} />
                            </SlideRoutes>
                        </BrowserRouter>

                    </div>
                </div>
            </div>



                {/* ------------- FOOTER ---------------- */}

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
                        turnitinpro.com
                    </a>
                </div>
            </MDBFooter>


        </>
    )
}

export default LandingPageFinal;