import { Uploader } from "uploader";
import React, { useState } from "react";
import { UploadDropzone } from "react-uploader";
import "../Panel/sidePanel.css";

function NewScan () {
    const uploader = new Uploader({
        apiKey: "free",
    });

    const [pill, setPill] = useState(0);


    return (
    <div className="col-lg-10 mt-3 crm-content py-3 container-fluid">

        <div className="row">
              <div className="col-lg-12 text-center px-5">
                <h2 className="fw-bold">what do you want to scan?</h2>
              </div>
            </div>

            <div className="row d-flex flex-row justify-content-center">
              <div className="row d-block my-3 text-center mx-auto w-50">
                <div
                  className={
                    pill === 1
                      ? "col-lg-7 btn btn-outline-primary px-3 py-3 fw-bold rounded-5"
                      : "col-lg-5 btn btn-outline-primary px-3 py-3 fw-bold mx-auto rounded-5"
                  }
                  onClick={() => setPill(1)}
                  style={
                    pill === 1
                      ? {
                          backgroundColor: "rgb(12,100,215)",
                          color: "white",
                          transition: ".3s",
                        }
                      : {
                          backgroundColor: "white",
                          color: "rgb(12,100,215)",
                          transition: ".3s",
                        }
                  }
                >
                  Remove Plagiarism
                </div>

                <div
                  className={
                    pill === 2
                      ? "col-lg-7 btn btn-outline-primary px-3 py-3 fw-bold rounded-5"
                      : "col-lg-5 btn btn-outline-primary px-3 py-3 fw-bold mx-auto rounded-5"
                  }
                  onClick={() => setPill(2)}
                  style={
                    pill === 2
                      ? {
                          backgroundColor: "rgb(12,100,215)",
                          color: "white",
                          transition: ".3s",
                        }
                      : {
                          backgroundColor: "white",
                          color: "rgb(12,100,215)",
                          transition: ".3s",
                        }
                  }
                >
                  Detect Plagiarism
                </div>
              </div>
            </div>


            <div className="container-fluid">
              <div className="row d-flex justify-content-center">
                  <UploadDropzone
                    uploader={uploader}
                    options={{ multi: true }}
                    onComplete={(files) => console.log(files)}
                    width="100%"
                    height="280px"
                  />
              </div>
            </div>

            
    </div>

)}

export default NewScan;