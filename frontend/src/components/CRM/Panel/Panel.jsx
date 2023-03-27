import React, { useState } from "react";
import "./sidePanel.css";
import Nav from '../NavCRM/NavSide'
import logo from '../../../assets/Logo.png'
import { importFile, files } from '../../ImportingImages'
import { Uploader } from "uploader";
import { UploadDropzone } from "react-uploader";

function Panel() {
    const [sideActive,setSideActive] = useState(0);
    const [pill, setPill] = useState(0);

    const uploader = new Uploader({
        apiKey: "free"
    });

    
    return (
        <>
            <Nav/>
            <div className="container-fluid">
                <div className="row flex-nowrap">
                    <div className="col-auto col-md-2 px-0 side-panel-body" style={{zIndex:"10"}}>
                        <div className="d-flex flex-column align-items-center align-items-sm-start pt-2 text-white vh-100 side-panel-flex">
                            <a href="/" className="d-flex align-items-center pb-3 w-100 px-2 text-decoration-none">
                                <span className="fs-4 mb-0 ms-2 mt-2 d-none text-dark fw-bold d-sm-inline">TurnitinPRO.com</span>
                            </a>

                            <ul class="nav nav-pills flex-column w-100 align-items-center align-items-sm-start" id="menu">
                                <li class="w-100 border my-2 btn"
                                    style={sideActive === 0 ? { backgroundColor: "#74b0bb60" } : { backgroundColor: "inherit"}}
                                    onClick={() => setSideActive(0)}>
                                    <a href="#" className="nav-link align-middle px-0">
                                        <img src={importFile} height={30} alt="" />    
                                        <span className="ms-1 text-dark d-none d-sm-inline">New Scan</span>
                                    </a>
                                </li>
                                
                                <li className="w-100 border my-2 btn"
                                    style={sideActive === 1 ? { backgroundColor: "#74b0bb60" } : { backgroundColor: "inherit" }}
                                    onClick={() => setSideActive(1)}>
                                    <a href="#" className="nav-link px-0 align-middle ">
                                        <img src={files} height={30} alt="" />
                                        <span className="ms-1 text-dark d-none d-sm-inline">My Files</span>
                                    </a>
                                </li>

                                <li className="w-100 my-2 border btn">

                                    <a href="#" className="py-2 d-flex align-items-center justify-content-center text-dark text-decoration-none dropdown-toggle" id="dropdownUser1" data-bs-toggle="dropdown" aria-expanded="false">
                                        <img src="https://github.com/mdo.png" alt="hugenerd" width="30" height="30" className="rounded-circle" />
                                        <span className="d-none d-sm-inline mx-2">dhuz dhuz</span>
                                    </a>
                                    <ul className="dropdown-menu dropdown-menu-light text-small shadow">
                                        <li><a className="dropdown-item" href="#">Settings</a></li>
                                        <li><a className="dropdown-item" href="#">Profile</a></li>
                                        <li>
                                            <hr className="dropdown-divider" />
                                        </li>
                                        <li><a className="dropdown-item" href="#">Sign out</a></li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                    </div>



                    {/* --------------- MIDDLE CONTENT -------------- */}



                    <div className="col-lg-10 mt-3 crm-content py-3">

                        <div className="row">
                            <div className="col-lg-12 text-center px-5">
                                <h2 className="fw-bold">what do you want to scan?</h2>
                            </div>
                        </div>

                        <div className="row d-flex flex-row justify-content-center">
                            <div className="row d-block my-3 text-center mx-auto w-50">
                                <div className={pill === 1 ? "col-lg-7 btn btn-outline-primary px-3 py-3 fw-bold rounded-5" : "col-lg-5 btn btn-outline-primary px-3 py-3 fw-bold mx-auto rounded-5"}
                                    onClick={() => setPill(1)}
                                    style={pill === 1 ? { backgroundColor: "rgb(12,100,215)", color: "white", transition: ".3s" } : { backgroundColor: "white", color: "rgb(12,100,215)", transition: ".3s" }}>
                                    Remove Plagiarism
                                </div>

                                <div className={pill === 2 ? "col-lg-7 btn btn-outline-primary px-3 py-3 fw-bold rounded-5" : "col-lg-5 btn btn-outline-primary px-3 py-3 fw-bold mx-auto rounded-5"}
                                    onClick={() => setPill(2)}
                                    style={pill === 2 ? { backgroundColor: "rgb(12,100,215)", color: "white", transition: ".3s" } : { backgroundColor: "white", color: "rgb(12,100,215)", transition: ".3s" }}>
                                    Detect Plagiarism
                                </div>
                            </div>

                        </div>

                        <div className="col-lg-8 mx-auto uploader">
                            <UploadDropzone uploader={uploader}
                                options={{ multi: true }}
                                onComplete={files => console.log(files)}
                                width="100%"
                                height="300px"
                            />
                        </div>
                    </div>

                </div>
            </div>

        </>

    );
}

export default Panel;
