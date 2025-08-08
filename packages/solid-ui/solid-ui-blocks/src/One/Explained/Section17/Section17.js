import React from "react";
import connection2 from "./images/connection2.png";
import bg17 from "./images/bg17.svg";
import "./section17.css";
export default function Section17() {
    return (
    <>
        <div className="one-section one-section-17">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-9 align-self-center blk-box">
                        <h1 className="fw600 lh-4 text-black">Trying <span className="fw800 inner-box"> Mumara One</span> Is Super Easy, Here Is How! </h1>
                        <p className="fs-18 fw400 lh-5 text-black mt-0">We are sure that after knowing the features, and benefits, you are ready to sign up for Mumara One.</p>
                        <h3 className="fw600 lh-4 inner-box1">Just follow the easy steps and hit your market harder!</h3>
                    </div>
                    <div className="col-md-12 text-center">
                        <img
                            src={connection2} alt="connection"
                            className="img-fluid connection2"
                        />
                    </div>
                </div>
            </div>
        </div>
    </>
    )
}