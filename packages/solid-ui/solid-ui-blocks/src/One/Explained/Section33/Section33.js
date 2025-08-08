import React from "react";
import check33 from "./images/check.png";
import mamico from "./images/Messaging-amico.jpg";

import "./section33.css";
export default function Section33() {
  return (
    <div className="one-section one-section-33">
      <div className="container my-pad-bottom25">
        <div className="row justify-content-center pb-5">
          <div className="col-md-6 align-self-center"> <img src={mamico} className="img-fluid max-w500 mx-auto d-block money" alt="money" /> </div>
          <div className="col-md-6 align-self-center section23-text">
            <h2 className="fw500 lh-5 text-white"> Get Started with <span className="text-light-green fw700">Mumara One</span> for <span className="text-light-green fw600">Free</span>!</h2>
            <p className="fs-22 fw400 lh-6 margint10 text-white">Email marketing tool Mumara One is <span className="text-light-green fw600">cost-effective</span>.</p>
            <div className="lh-6 fw400 white margint10 text-left">

              <div className="list-overflow-green144 mb-20">
                <img src={check33} className="bulletlistgreen14 img-responsive" alt="check" />
                <p className="text-15 text-white list-paddingxx">
                  Send your <b className="text-white">Email Campaign </b> instantly.
                </p>
              </div>
              <div className="list-overflow-green144 mb-20">
                <img src={check33} className="bulletlistgreen14 img-responsive" alt="check" />
                <p className="text-15 text-white list-paddingxx">
                  You can start using it with a <b className="text-white">free account</b>.
                </p>
              </div>
              <div className="list-overflow-green144 mb-20">
                <img src={check33} className="bulletlistgreen14 img-responsive" alt="check" />
                <p className="text-15 text-white list-paddingxx">
                  Upgrade your <b className="text-white">Plan</b> when you start getting the results.
                </p>
              </div>
              <div className="list-overflow-green144 mb-20">
                <img src={check33} className="bulletlistgreen14 img-responsive" alt="check" />
                <p className="text-15 text-white list-paddingxx">
                  Send your <b className="text-white">Emails</b> whenever you want .
                </p>
              </div>
              <div className="list-overflow-green144 mb-20">
                <img src={check33} className="bulletlistgreen14 img-responsive" alt="check" />
                <p className="text-15 text-white list-paddingxx">
                  <b className="text-white"> Email marketing</b> is targeted and cost-effective.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
