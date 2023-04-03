import './landingFinal.css'
import { Uploader } from "uploader";
import { UploadDropzone } from "react-uploader";
import { useState } from 'react';
import arrow from '../../assets/down-arrow.svg'
import { i1, i2, i3, i4, i5, i6, i7, i8, i9 } from '../ImportingImages'
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';
import FeaturesCard from './FeaturesCard';
// import Button from 'react-bootstrap/Button'
import NavbarLandingPage from '../NavbarLandingPage/NavbarLandingPage';
import TestiMonials from '../TestiMonials/TestiMonials'



function LandingPageFinal() {

    const [text, setText] = useState("This is where different features are displayed!");
    const [header, setHeader] = useState("Features");
    const [priceMode, setPriceMode] = useState(1);
    const [pill, setPill] = useState(0);
    // const [active, setActive] = useState(0);

    const headArray = ["Qualified Writer", "Highest Grade Guaranteed", "All Day, Everyday Service",
        "Fastest Report Time", "Quality Assured", "Error Free Results"]
    const textArray = ["Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce lacinia neque felis, nec porttitor felis vulputate non. Cras viverra rutrum orci, vel tincidunt libero vulputate vel. Aenean aliquet augue elit.",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce lacinia neque felis, nec porttitor felis vulputate non. Cras viverra rutrum orci, vel tincidunt libero vulputate vel. Aenean aliquet augue elit.",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce lacinia neque felis, nec porttitor felis vulputate non. Cras viverra rutrum orci, vel tincidunt libero vulputate vel. Aenean aliquet augue elit. ",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce lacinia neque felis, nec porttitor felis vulputate non. Cras viverra rutrum orci, vel tincidunt libero vulputate vel. Aenean aliquet augue elit.",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce lacinia neque felis, nec porttitor felis vulputate non. Cras viverra rutrum orci, vel tincidunt libero vulputate vel. Aenean aliquet augue elit.",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce lacinia neque felis, nec porttitor felis vulputate non. Cras viverra rutrum orci, vel tincidunt libero vulputate vel. Aenean aliquet augue elit."]

    const FeatureClick = (id) => {
        if (id === 1) {
            setText(textArray[0])
            setHeader(headArray[0])
        }
        else if (id === 2) {
            setText(textArray[1])
            setHeader(headArray[1])
        }
        else if (id === 3) {
            setText(textArray[2])
            setHeader(headArray[2])
        }
        else if (id === 4) {
            setText(textArray[3])
            setHeader(headArray[3])
        }
        else if (id === 5) {
            setText(textArray[4])
            setHeader(headArray[4])
        }
        else if (id === 6) {
            setText(textArray[5])
            setHeader(headArray[5])
        }
    }

    const DefaultPricing = () =>
        <div className='container-fluid'>
            <div className="row d-flex justify-content-center">
                <div className="col-lg-6 text-center">
                    <div className="defaultCard">
                        <h2 className='text-center'>Get the best budget friendly pricing plans for our exclusive features</h2>
                        <h4 className='text-center text-muted mt-4'>Starting from as low as $ 0.1</h4>
                    </div>
                </div>
            </div>
        </div>;


    const RemovePlagiarism = () =>
        <div className={priceMode === 1 ? "card home mb-3 text-center mx-auto bounce-in-left" : "card home mb-3 text-center mx-auto"}>
            <h1>$5/per page</h1>
            <p style={{ fontSize: "1rem", padding: "1em" }}>
                Error Free <br />
                Return in 2 Days <br />
                Tasalli Bakhsh
            </p>

            <button className='price-button'>
                <span>Remove</span>
            </button>


        </div>;


    const DetectPlagiarism = () => {
        return (
            <div className={priceMode === 2 ? "card home mb-3 text-center mx-auto bounce-in-right" : "card home mb-3 text-center mx-auto"}>
                <h1>$5/per page</h1>
                <p style={{ fontSize: "1rem", padding: "1em" }}>
                    Error Free <br />
                    Return in 2 Days <br />
                    Tasalli Bakhsh
                </p>

                <button className='price-button'>
                    <span>Detect</span>
                </button>
            </div>);
    }

    const pricing = () => {
        if (priceMode === 0) {
            return <DefaultPricing />
        }
        else if (priceMode === 1) {
            return <RemovePlagiarism />

        }
        else {
            return <DetectPlagiarism />

        }
    }

    const uploader = new Uploader({
        apiKey: "free"
    });

    return (
        <>
            <NavbarLandingPage />

            <div className="container-fluid mt-2 mainBackgroundImage">
                <div className="row">
                    <div className="col-lg-12 d-flex justify-content-center flex-column">
                        <div className="row tracking-in-expand">
                            <h4 className='text-center fw-semibold'><span className='span'>Plagiarism</span> Company</h4>
                        </div>
                        <div className="row text-center">
                            <h1 className='fw-bold'>Get an Exclusive</h1>
                        </div>

                        <svg width="auto" height="15%">
                            <text x="50%" y="60%" text-anchor="middle"  >
                                Plagiarism Removal
                            </text>
                        </svg>

                        <h1 className='fw-bold text-center'>by a qualified writer pursuant!</h1>

                        <div className="row text-center">
                            <p className='h5 text-muted'>Get professional help from our qualified writers in your coursework and research papers</p>
                        </div>
                        <div className="row text-center mt-5" style={{ color: "rgba(31,31,31,0.9)" }}>
                            <h3 className='fw-semibold'>Upload a file to get started: </h3>
                        </div>
                        <br />
                        <div className="row mt-3 text-center mx-auto w-50">
                            <div className={pill === 1 ? "col-lg-8 btn btn-outline-primary px-3 py-3 fw-bold rounded-5" : "col-lg-4 btn btn-outline-primary px-3 py-3 fw-bold mx-auto rounded-5"}
                                onClick={() => setPill(1)}
                                style={pill === 1 ? { backgroundColor: "rgb(12,100,215)", color: "white", transition: ".3s" } : { backgroundColor: "white", color: "rgb(12,100,215)", transition: ".3s" }}>
                                Remove Plagiarism
                            </div>

                            <div className={pill === 2 ? "col-lg-8 btn btn-outline-primary px-3 py-3 fw-bold rounded-5" : "col-lg-4 btn btn-outline-primary px-3 py-3 fw-bold mx-auto rounded-5"}
                                onClick={() => setPill(2)}
                                style={pill === 2 ? { backgroundColor: "rgb(12,100,215)", color: "white", transition: ".3s" } : { backgroundColor: "white", color: "rgb(12,100,215)", transition: ".3s" }}>
                                Detect Plagiarism
                            </div>
                        </div>
                        <div className="row mt-3 d-flex justify-content-center flex-wrap">
                            <UploadDropzone uploader={uploader}
                                options={{ multi: true }}
                                onComplete={files => console.log(files)}
                                width="50%"
                                height="200px"
                            />
                        </div>

                        <div className="row banner border-primary p-5">
                            <div className="col-lg-8">
                                <h2 className='h1'
                                    style={{ fontFamily: "Arvo, serif", color: "#F1FFFF" }}>
                                    Starting from $1
                                </h2>
                                <p className='text-light h5'>Get certified professional's opinions at an extremely low price!</p>
                            </div>

                            <div className="col-lg-4">
                                <button class="learn-more">Order Now</button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* ---------- SERVICES ---------- */}

                <div className="container-fluid">
                    <div className="row">
                        <h1 className='fw-bold text-center my-4'  style={{fontSize: "3rem"}}>Our Services</h1>
                    </div>

                    <div className="row d-flex justify-content-center py-3">
                        <div className="col-md-5">
                            <div className="service-card d-flex flex-column justify-content-center align-items-center py-4">
                                <img className='mt-4 mb-2' src={i9} alt="" />
                                <h3>Plagiarism Report</h3>
                                <p className='fw-bold'>Starting from $10/Page</p>
                            </div>
                        </div>

                    <div className="col-md-1"></div>

                        <div className="col-md-5">
                            <div className="service-card d-flex flex-column justify-content-center align-items-center py-4">
                                <img className='mt-4 mb-2' src={i8} alt="" />
                                <h3>Remove Plagiarism</h3>
                                <p className='fw-bold'>Starting from $10/Page</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* ------------- FEATURES ------------------ */}

                <div className="features-header mt-4">
                    <h1 className='text-center'>Features</h1>
                </div>

                <div className="row featuresFinal fw-semibold d-flex flex-row justify-content-center" id='feature'>
                    <div className="col-lg-7 features-item">
                        <div className="row d-flex flex-row justify-content-center">
                            <div className="col-lg-6 features-1 d-flex flex-column align-items-center ">

                                <button className="btn feature-items d-flex flex-row justify-content-center align-items-center"
                                    onClick={() => FeatureClick(1)}
                                >
                                    <img src={i6} alt="proff" className="img-fluid" />
                                    <h5 className='px-3'>Qualified Writers</h5>
                                </button>

                                <button className="btn feature-items d-flex flex-row justify-content-center align-items-center"
                                    onClick={() => { FeatureClick(2) }}>
                                    <img src={i7} alt="proff" className="img-fluid" />
                                    <h5 className='px-3'>Highest Grade</h5>
                                </button>

                                <button className="btn feature-items d-flex flex-row justify-content-center align-items-center"
                                    onClick={() => FeatureClick(3)}>
                                    <img src={i1} alt="proff" className="img-fluid" />
                                    <h5 className='px-3'>Everyday Service</h5>
                                </button>

                                <button className="btn feature-items d-flex flex-row justify-content-center align-items-center"
                                    onClick={() => FeatureClick(3)}>
                                    <img src={i1} alt="proff" className="img-fluid" />
                                    <h5 className='px-3'>Everyday Service</h5>
                                </button>
                            </div>

                            <div className="col-lg-6 features-1 d-flex flex-column align-items-center ">

                                <button className="btn feature-items d-flex flex-row justify-content-center align-items-center"
                                    onClick={() => FeatureClick(4)}>
                                    <img src={i2} alt="proff" className="img-fluid" />
                                    <h5 className='px-3'>Fastest Report Time</h5>
                                </button>

                                <button className="btn feature-items d-flex flex-row justify-content-center align-items-center"
                                    onClick={() => FeatureClick(5)}>
                                    <img src={i5} alt="proff" className="img-fluid" />
                                    <h5 className='px-3'>Quality Assured</h5>
                                </button>

                                <button className="btn feature-items d-flex flex-row justify-content-center align-items-center"
                                    onClick={() => FeatureClick(6)}>
                                    <img src={i4} alt="proff" className="img-fluid" />
                                    <h5 className='px-3'>Error Free Results</h5>
                                </button>

                                <button className="btn feature-items d-flex flex-row justify-content-center align-items-center"
                                    onClick={() => FeatureClick(6)}>
                                    <img src={i4} alt="proff" className="img-fluid" />
                                    <h5 className='px-3'>Error Free Results</h5>
                                </button>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4 features-right-card">
                        <FeaturesCard head={header} text={text} />
                    </div>

                    <div className="container-fluid">
                        <div className="row mt-4">
                            <div className="col-lg-12 py-2 mt-2 d-flex flex-column justify-content-center align-items-center">
                                <a href="#" className='arrow d-flex flex-column mt-1'>
                                    <img src={arrow} alt="" className='img-fluid' />
                                    <h6 className='text-center mb-4 mt-3 fw-bold text-dark'>Get Started</h6>
                                </a>
                            </div>
                        </div>
                    </div>

                </div>
            </div>


            {/* ------------ HOW IT WORKS ----------- */}

            {/* ------------ Desktop ----------- */}



            <div className="container-fluid" id='desktopWorking'>

                <div className="row">
                    <h1 className='text-center text-fluid fw-bold' style={{ fontSize: "3rem" }}>Wondering how we work?</h1>
                </div>

                <div className="row px-5">
                    <div className="col-lg-4 my-auto workCard h-50">
                        <div className="step-one p-3">
                            <h3 className='f text-fluid'>Step One</h3>
                            <h4 className='fw-bold mt-3 text-fluid'>Upload</h4>
                            <hr />
                            <p className='text-light'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil ratione libero dolor neque saepe aspernatur laborum sunt et nam corrupti.</p>
                        </div>
                    </div>

                    <div className="col-lg-4 p-4">
                        <div className="step-one p-3 workCard h-50 my-4">
                            <h3 className='text-fluid'>Step Two</h3>
                            <h4 className='fw-bold mt-3 text-fluid'>Wait</h4>
                            <hr />
                            <p className='text-light'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil ratione libero dolor neque saepe aspernatur laborum sunt et nam corrupti.</p>
                        </div>

                        <div className="arrowClass text-center">
                            <img class=" rotating img-fluid" height={"50"} width={"50"} alt="arrow" src="https://www.essaycompany.com/assets_new/images/circular-arrows.webp"></img>
                        </div>

                        <div className="step-one p-3 workCard my-4 h-50">
                            <h3 className='f text-fluid'>Step Four</h3>
                            <h4 className='fw-bold mt-3 text-fluid'>Cancel</h4>
                            <hr />
                            <p className='text-light'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil ratione libero dolor neque saepe aspernatur laborum sunt et nam corrupti.</p>
                        </div>
                    </div>

                    <div className="col-lg-4 my-auto workCard h-50">
                        <div className="step-one p-3">
                            <h3 className='text-fluid'>Step Three</h3>
                            <h4 className='fw-bold mt-3 text-fluid'>Wait more</h4>
                            <hr />
                            <p className='text-light'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil ratione libero dolor neque saepe aspernatur laborum sunt et nam corrupti.</p>
                        </div>
                    </div>

                    <div className="row mt-5 pt-5">
                        <button class="heartbeat get-services mx-auto mt-5">
                            <span class="circle" aria-hidden="true">
                                <span class="icon arrow"></span>
                            </span>
                            <span class="button-text ">Get Services</span>
                        </button>
                    </div>

                </div>
            </div>

            <br />

            {/* ------------ Mobile ----------- */}

            <div className="container-fluid" id='mobileWorking'>
                <div className="row">
                    <div className="col-md-12 text-center">
                        <div className="row">
                            <h1 className='text-center text-fluid fw-bold' style={{ fontSize: "2.5rem" }}>Wondering how we work?</h1>
                        </div>

                        <div className="row px-5 py-3">
                                <div className="step-one p-3 workCard h-50">
                                    <h3 className='f text-fluid'>Step One</h3>
                                    <h4 className='fw-bold mt-3 text-fluid'>Upload</h4>
                                    <hr />
                                    <p className='text-light'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil ratione libero dolor neque saepe aspernatur laborum sunt et nam corrupti.</p>
                                </div>
                        </div>

                        <div className="row px-5 py-3">
                            <div className="step-one p-3 workCard h-50">
                                <h3 className='f text-fluid'>Step Two</h3>
                                <h4 className='fw-bold mt-3 text-fluid'>Wait</h4>
                                <hr />
                                <p className='text-light'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil ratione libero dolor neque saepe aspernatur laborum sunt et nam corrupti.</p>
                            </div>
                        </div>

                        <div className="row px-5 py-3">
                            <div className="step-one p-3 workCard h-50">
                                <h3 className='f text-fluid'>Step Three</h3>
                                <h4 className='fw-bold mt-3 text-fluid'>wait more</h4>
                                <hr />
                                <p className='text-light'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil ratione libero dolor neque saepe aspernatur laborum sunt et nam corrupti.</p>
                            </div>
                        </div>

                        <div className="row py-3 px-5">
                            <div className="step-one p-3 workCard h-50">
                                <h3 className='f text-fluid'>Step Four</h3>
                                <h4 className='fw-bold mt-3 text-fluid'>Cancel</h4>
                                <hr />
                                <p className='text-light'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil ratione libero dolor neque saepe aspernatur laborum sunt et nam corrupti.</p>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>


            {/* ------------- SAMPLES ----------- */}

            <TestiMonials />
            
            {/* ---------- TESTIMONIALS ------------ */}

            <div className="container-fluid my-3 mb-5 testimonial p-5">
                <div className="row">
                    <h1 className='text-center text-white'>Check what our customers are saying</h1>
                    <p className='text-center  text-white'>Check out our latest reviews so you can rely on our amazing features list</p>
                </div>

                <div className="row px-5 mt-2 d-flex flex-row justify-content-between">

                    <div className="col-lg-3 Usercard">
                        <h4 className='fw-bold text-center pt-3 text-dark'>Mindblowing Service</h4>
                        <p className='px-4 pt-2 text-center'>
                            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis tenetur aliquid voluptatibus saepe illo eos enim natus. Iusto, explicabo ullam."
                        </p>
                        <div className="userimg py-3 text-center justify-content-center">
                            <img className='img-fluid px-2' src={i3} alt="user" />
                            <i className='fw-bold'> - John Wick</i>
                        </div>
                    </div>

                    <div className="col-lg-3 Usercard">
                        <h4 className='fw-bold text-center pt-3 text-dark'>Efficient Workflow</h4>
                        <p className='px-4 pt-2 text-center'>
                            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis tenetur aliquid voluptatibus saepe illo eos enim natus. Iusto, explicabo ullam."
                        </p>
                        <div className="userimg py-3 text-center justify-content-center">
                            <img className='img-fluid px-2' src={i3} alt="user" />
                            <i className='fw-bold'> - John Wick</i>

                        </div>
                    </div>

                    <div className="col-lg-3 Usercard">
                        <h4 className='fw-bold text-center pt-3 text-dark'>Risk Free Service</h4>
                        <p className='px-4 pt-2 text-center'>
                            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis tenetur aliquid voluptatibus saepe illo eos enim natus. Iusto, explicabo ullam."
                        </p>
                        <div className="userimg py-3 text-center justify-content-center">
                            <img className='img-fluid px-2' src={i3} alt="user" />
                            <i className='fw-bold'> - John Wick</i>

                        </div>
                    </div>
                </div>
            </div>

            {/* --------- PRICING ----------- */}

            <div className="container-fluid mb-5" id='pricing'>
                <div className="row mt-4">
                    <div className="col-md-12">
                        <h1 style={{ color: "rgb(0,0,0)", fontSize: "3.5rem" }} className='text-center fw-bold'>Pricing</h1>
                    </div>
                </div>

                <div className="row h-auto">
                    <div className="col-lg-12 d-flex flex-column justify-content-center">
                        <h6 className='text-center'>Check from one of the following</h6>
                        <div className='Pricing-Slider'>

                            <div className="row mt-3 text-center mx-auto w-50">
                                <div className={priceMode === 1 ? "col-lg-8 btn btn-outline-primary px-2 py-3 fw-bold rounded-5" : "col-lg-4 btn btn-outline-primary px-2 py-3 fw-bold mx-auto rounded-5"}
                                    onClick={() => setPriceMode(1)}
                                    style={priceMode === 1 ? { backgroundColor: "rgb(12,100,215)", color: "white", transition: ".3s" } : { backgroundColor: "white", color: "rgb(12,100,215)", transition: ".3s" }}>
                                    Remove Plagiarism
                                </div>

                                <div className={priceMode === 2 ? "col-lg-8 btn btn-outline-primary px-2 py-3 fw-bold rounded-5" : "col-lg-4 btn btn-outline-primary px-2 py-3 fw-bold mx-auto rounded-5"}
                                    onClick={() => setPriceMode(2)}
                                    style={priceMode === 2 ? { backgroundColor: "rgb(12,100,215)", color: "white", transition: ".3s" } : { backgroundColor: "white", color: "rgb(12,100,215)", transition: ".3s" }}>
                                    Detect Plagiarism
                                </div>
                            </div>

                            <div className="row mt-5 tracking-in-contract-bck">
                                {pricing()}
                            </div>

                        </div>

                    </div>
                </div>
            </div>


            {/* -------------- PRICE CALCULATOR --------------- */}

            <div className="container-fluid my-3 mb-5">
                <div className="row text-center">
                    <h1 className='fw-bold'>Wanna know how much will you be paying?</h1>
                </div>

                <div className="row g-3 calculator">
                    <div className="col-lg-12 d-flex flex-row">

                        <div className="col-lg-4 my-3 mx-4">
                            <form action="" className="form">
                                <label className="form-label">Choose Country: </label>
                                <select class="form-select w-75 " required>
                                    <option selected disabled value="">Choose...</option>
                                    <option>USA</option>
                                    <option>Australia</option>
                                    <option>New Zealand</option>
                                    <option>United Kingdom</option>
                                    <option>Amreeka</option>
                                </select><br />

                                <label className="form-label">Currency: </label>
                                <select class="form-select w-75 " required>
                                    <option selected disabled value="">Choose...</option>
                                    <option>USD</option>
                                    <option>AUD</option>
                                    <option>GBP</option>
                                    <option>PKR</option>
                                    <option>INR</option>
                                </select><br />

                                <label className="form-label">Choose Service: </label>
                                <select class="form-select w-75 " required>
                                    <option selected disabled value="">Choose...</option>
                                    <option>Remove Plagiarism</option>
                                    <option>Detect Plagiarism</option>
                                </select><br />
                            </form>
                        </div>

                        <div className="col-lg-4 my-3 py-5">
                            <form>
                                <label className="form-label">Designation: </label>
                                <select class="form-select w-75 " required>
                                    <option selected disabled value="">Choose...</option>
                                    <option>Undergraduate</option>
                                    <option>Post Graduate</option>
                                    <option>High School</option>
                                    <option>College</option>
                                </select><br />

                                <label className="form-label">Length: </label>
                                <select class="form-select w-75 " required>
                                    <option selected disabled value="">Choose...</option>
                                    <option> &lt; 1000 words</option>
                                    <option> &lt; 5000 words</option>
                                    <option> &lt; 10000 words</option>
                                    <option> &lt; 10000 words</option>
                                    <option> &gt; 50000 words </option>
                                </select><br />
                            </form>
                        </div>

                        <div className="col-lg-4 priceResults p-5">
                            <h1 className='text-fluid'>Price Will Be:</h1>
                            <h3>$26.99</h3>
                            <br /><br />
                            <a className='btn btn-primary p-3' href="#">Order Now</a>
                        </div>
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

export default LandingPageFinal;