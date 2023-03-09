import React, { useState, useEffect } from "react";
import classNames from "classnames";
import "./sidePanel.css";
import Navbar from '../NavSidePanel/NavSide'
import logo from '../../../assets/Logo.png'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function SidePanel(props) {
    const [open, setOpen] = useState(true);

    return (
        <>
            <Navbar />

            {/* <div className="p-0 container-fluid">
                <div className="row">
                    <div className={open === true ? "col-lg-3 vh-100 sidebar" : "sidebar-gayab"}>
                        <div>
                            <div className="sidebar-header">
                                <h2 className="fw-bold px-4 py-3">TurnitinPRO.com</h2>
                            </div>
                            
                            <div className="sideNavItems">
                                <div className="side-items mx-4 my-3">
                                    <i class="fa fa-file"></i>
                                    <a href="" className="px-3 h5">New Scan</a>
                                </div>

                                <div className="side-items mx-4 my-3">
                                    <i className="fa fa-file"></i>
                                    <a href="" className="px-3 h5">My Files</a>
                                </div>
                                
                                <div className="side-items mx-4 my-3">
                                    <i className="fa fa-file"></i>
                                    <a href="" className="px-3 h5">ek or idhr</a>
                                </div>
                                
                                <div className="side-items mx-4 my-3">
                                    <i className="fa fa-bars"></i>
                                    <a href="" className="px-3 h5">Dhuz dhuz</a>
                                </div>
                            </div>
                        </div>
                    </div>


                    <div className="col-lg-9 ">
                        <button className="sideNavToggle mt-2 py-2 px-3"
                            onClick={() => setOpen(!open)}>
                            <i className="fa fa-bars text-dark"></i>
                        </button>
                    </div>

                </div>


                
            </div> */}

            <div class="container-fluid">
                <div class="row flex-nowrap">
                    <div class="col-auto col-md-2  px-sm-2 px-0 side-panel-body border">
                        <div class="d-flex flex-column align-items-center align-items-sm-start px-3 pt-2 text-white min-vh-100">
                            <a href="/" class="d-flex align-items-center pb-3 mb-md-0 me-md-auto text-decoration-none">
                                <span class="fs-5 mb-0 mt-2 d-none text-dark fw-bold d-sm-inline">TurnitinPRO.com</span>
                                {/* <h4 className="text-fluid fw-bold text-dark mb-0 mt-2">TurnitinPRO.com</h4> */}
                            </a>
                            <ul class="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start" id="menu">
                                <li class="nav-item">
                                    <a href="#" class="nav-link align-middle px-0">
                                        <i class="fs-4 bi-house"></i> <span class="ms-1 d-none text-dark d-sm-inline">Home</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="#submenu1" data-bs-toggle="collapse" class="nav-link px-0 align-middle">
                                        <i class="fs-4 bi-speedometer2"></i> <span class="ms-1 d-none text-dark d-sm-inline">Dashboard</span> </a>
                                    <ul class="collapse show nav flex-column ms-1" id="submenu1" data-bs-parent="#menu">
                                        <li class="w-100">
                                            <a href="#" class="nav-link text-dark px-0"> <span class="d-none text-dark d-sm-inline">Item</span> 1 </a>
                                        </li>
                                        <li>
                                            <a href="#" class="nav-link px-0 text-dark"> <span class="d-none text-dark d-sm-inline">Item</span> 2 </a>
                                        </li>
                                    </ul>
                                </li>
                                <li>
                                    <a href="#" class="nav-link px-0 align-middle">
                                        <i class="fs-4 bi-table"></i> <span class="ms-1 d-none text-dark d-sm-inline">Orders</span></a>
                                </li>
                                {/* <li>
                                    <a href="#submenu2" data-bs-toggle="collapse" class="nav-link px-0 align-middle ">
                                        <i class="fs-4 bi-bootstrap"></i> <span class="ms-1 text-dark d-none d-sm-inline">Bootstrap</span></a>
                                    <ul class="collapse nav flex-column ms-1" id="submenu2" data-bs-parent="#menu">
                                        <li class="w-100">
                                            <a href="#" class="nav-link px-0"> <span class="d-none text-dark d-sm-inline">Item</span> 1</a>
                                        </li>
                                        <li>
                                            <a href="#" class="nav-link px-0"> <span class="d-none text-dark d-sm-inline">Item</span> 2</a>
                                        </li>
                                    </ul>
                                </li> */}
                                {/* <li>
                                    <a href="#submenu3" data-bs-toggle="collapse" class="nav-link px-0 align-middle">
                                        <i class="fs-4 bi-grid"></i> <span class="ms-1 d-none text-dark d-sm-inline">Products</span> </a>
                                    <ul class="collapse nav flex-column ms-1" id="submenu3" data-bs-parent="#menu">
                                        <li class="w-100">
                                            <a href="#" class="nav-link px-0"> <span class="d-none text-dark d-sm-inline">Product</span> 1</a>
                                        </li>
                                        <li>
                                            <a href="#" class="nav-link px-0"> <span class="d-none text-dark d-sm-inline">Product</span> 2</a>
                                        </li>
                                        <li>
                                            <a href="#" class="nav-link px-0"> <span class="d-none text-dark d-sm-inline">Product</span> 3</a>
                                        </li>
                                        <li>
                                            <a href="#" class="nav-link px-0"> <span class="d-none text-dark d-sm-inline">Product</span> 4</a>
                                        </li>
                                    </ul>
                                </li> */}
                                <li>
                                    <a href="#" class="nav-link px-0 align-middle">
                                        <i class="fs-4 bi-people"></i> <span class="ms-1 d-none text-dark d-sm-inline">Customers</span> </a>
                                </li>
                            </ul>
                            <hr/>
                                <div class="dropdown pb-5 mb-5">
                                    <a href="#" class="d-flex align-items-center text-dark text-decoration-none dropdown-toggle" id="dropdownUser1" data-bs-toggle="dropdown" aria-expanded="false">
                                        <img src="https://github.com/mdo.png" alt="hugenerd" width="30" height="30" class="rounded-circle" />
                                    <span class="d-none d-sm-inline text-dark mx-1 text-dark">dhuz dhuz</span>
                                    </a>
                                    <ul class="dropdown-menu dropdown-menu-dark text-small shadow">
                                        {/* <li><a class="dropdown-item" href="#">New project...</a></li> */}
                                        <li><a class="dropdown-item" href="#">Settings</a></li>
                                        <li><a class="dropdown-item" href="#">Profile</a></li>
                                        <li>
                                            <hr class="dropdown-divider" />
                                        </li>
                                        <li><a class="dropdown-item" href="#">Sign out</a></li>
                                    </ul>
                                </div>
                        </div>
                    </div>
                    <div class="col-lg-10 crm-content py-3">
                        
                    </div>
                </div>
            </div>




        </>

    );
}

export default SidePanel;
