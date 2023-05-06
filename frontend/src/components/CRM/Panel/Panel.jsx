/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState } from "react";
import "./sidePanel.css";
import Nav from "../NavCRM/NavSide";
import { importFile, files } from "../../ImportingImages";
// import { Uploader } from "uploader";
// import { UploadDropzone } from "react-uploader";
import CrmTable from "../CrmTable/CrmTable";
import NewScan from "../CrmNewScan/NewScan";

function Panel() {
  const [sideActive, setSideActive] = useState(0);

  // const uploader = new Uploader({
  //   apiKey: "free",
  // });

  // const [pill, setPill] = useState(0);

  useEffect(()=> {
    console.log("effect test")
  }, [])

  const [selection, setSelection] = useState(0);

  return (
    <>
      <Nav />
      <div className="container-fluid">
        <div className="row flex-nowrap">
          <div className="col-auto col-md-2 px-0 side-panel-body">
            <div className="d-flex flex-column align-items-center align-items-sm-start pt-2 text-white vh-100 side-panel-flex">
              <a
                href="/"
                className="d-flex align-items-center pb-3 w-100 px-2 text-decoration-none"
              >
                <span className="fs-4 mb-0 ms-2 mt-2 d-none text-dark fw-bold d-sm-inline">
                  TurnitinPRO.com
                </span>
              </a>


              <ul
                class="nav nav-pills flex-column w-100 align-items-center align-items-sm-start"
                id="menu"
              >
                <li
                  class="w-100 border my-2 btn"
                  style={
                    sideActive === 0
                      ? { backgroundColor: "#74b0bb60" }
                      : { backgroundColor: "inherit" }
                  }
                  onClick={() => setSideActive(0)}
                >
                  <a href="#" className="nav-link align-middle px-0"
                  onClick={() => setSelection(0)}
                  >
                    <img src={importFile} height={30} alt="" />
                    <span className="ms-1 text-dark d-none d-sm-inline">
                      New Scan
                    </span>
                  </a>
                </li>

                <li
                  className="w-100 border my-2 btn"
                  style={
                    sideActive === 1
                      ? { backgroundColor: "#74b0bb60" }
                      : { backgroundColor: "inherit" }
                  }
                  onClick={() => setSideActive(1)}
                >
                  <a href="#" className="nav-link px-0 align-middle "
                    onClick={() => setSelection(1)}>
                    <img src={files} height={30} alt="" />
                    <span className="ms-1 text-dark d-none d-sm-inline">
                      My Files
                    </span>
                  </a>
                </li>

                <li className="w-100 my-2 border btn">
                  <a className="py-2 d-flex align-items-center justify-content-center text-dark text-decoration-none dropdown-toggle"
                    id="dropdownUser1"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <img
                      src="https://github.com/mdo.png"
                      alt="hugenerd"
                      width="30"
                      height="30"
                      className="rounded-circle"
                    />
                    <span className="d-none d-sm-inline mx-2">dhuz dhuz</span>
                  </a>
                  <ul className="dropdown-menu dropdown-menu-light text-small shadow">
                    <li>
                      <a className="dropdown-item" href="#">
                        Settings
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Profile
                      </a>
                    </li>
                    <li>
                      <hr className="dropdown-divider" />
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Sign out
                      </a>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>

          {/* --------------- MIDDLE CONTENT -------------- */}

          <div className="col-lg-10 mt-3 crm-content py-3 container-fluid">

            {selection === 0 ? <NewScan/> : <CrmTable/>}
            {/* <CrmTable /> */}
            {/* <NewScan /> */}
          </div>

        </div>
      </div>
    </>
  );
}

export default Panel;