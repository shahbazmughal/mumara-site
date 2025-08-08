import React from "react";
import bg20 from "./images/bg20.png";
import feature from "./images/feature-img6.svg";
import connection2 from "./images/connection2.png";
import "./section20.css";
export default function Section20() {
    return (
        <div className="one-section one-section-20 pt-0" style={{ backgroundImage: `url(${bg20})` }} >
            <div className="col-md-12 mx-auto">
                <img
                    src={connection2} alt="connection"
                    className="img-fluid mx-auto d-block connection2"
                />
            </div>
            <div className="one-section-20">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 mt-5">
                            <h1 className="fw600 lh-4 text-center heading">Don’t You Believe Us…?</h1>
                        </div>
                        <div className="col-md-6 mt-5">
                            <img
                                src={feature} alt="squad"
                                className="img-fluid mx-auto d-block squad"
                            />
                        </div>
                        <div className="col-md-6 mt-5 align-self-center">
                            <h1 className="fs-40 lh-5 fw400">Read <span className="fw600 headingbox">Something Mind-Blowing</span></h1>
                            <p className="fw400 fs-20 margint10 lh-5 text-gray textbox">During the past decade, email marketing automation tools have shined bright. Mumara One has taken this process to even an advanced level in the shape of your revenue multiplications. We allow you to use a mind-blowing machine with ready-to-use features that can work 24/7/365 for you.</p>
                            <p className="fw400 fs-20 margint10 lh-5 text-gray textbox">While building the interface, we worked hard on the concern to make it as much user-friendly so that a non-technical person can also use it. Mumara One will automatically send follow-up emails automatically according to the required time frame and intervals on the list or segments.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}