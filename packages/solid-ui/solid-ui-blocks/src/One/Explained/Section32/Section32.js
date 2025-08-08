import React from "react";
// import greenbg32 from "./images/greenbg32.png";
import newsletterpana from "./images/Newsletter-pana.svg";
import GDPR from "./images/GDPR.jpg";
import "./section32.css";
export default function Section32() {
  return (
    <div className="one-section one-section-32 pt-0 pb-0">
      <div className="one-section one-section-32a">
        <div className="container">
          <div className="row">
            <div className="col-md-6 align-self-center">
              <h2 className="text-left text-yellow">Ensure Email Consent Under GDPR</h2>
              <p className="text-left fs-20 mt-4 text-white pr"><b>Mumara One</b> is easy to adapt to the <b>CAN-SPAM, CASL</b>(Canadian Anti-Spam Legislation), and <b>GDPR</b>(General Data Protection Regulation) laws. It is easy to fit with the <b>spam laws</b> where it stores the history of IP addresses, geolocations, and other additional data based on recipient engagements.</p>
            </div>
            <div className="col-md-6 align-self-center">
              <img src={GDPR} className="img-fluid mx-auto d-block money" alt="GDPR" />
            </div>
          </div>
        </div>
      </div>
      <div className="one-section one-section-32" >
        <div className="container">
          <div className="row justify-content-center ">
            <div className="col-md-12">
              <div className="section77-box my-padding-section-top-plus-bottom">
                <div className="row align-items-center justify-content-center">
                  <div className="col-md-10 col-sm-12">
                    <div className="mymax-stylesbox-width d-block">
                      <div className="box2-style-sec">
                        <div className="box2-style-box box2-text-style text-center " >
                          <h1 className="fs-h1-42 text-white"> If Opportunity Doesn’t Knock, <span className="text-white fw600"> Build a Door</span></h1>
                        </div>
                      </div>
                    </div>
                    <div className="fs-20 lh-6 fw400 text-center text-white mt-1 px-md-3">
                      Using Mumara One is just like building a door for great opportunities. Yes, believe your ears, you have heard it correctly. If you are looking for more conversions and sales, we are here to provide you with the best results. You can use these for both commercial and governmental perspectives according to your best causes.
                    </div>
                    <img src={newsletterpana} className="img-fluid d-block mx-auto mt-5" alt="newsletterpana" />
                    <div className="col-md-12">
                      <div className="pera fs-20 text-center fw400 text-white">We take all the responsibilities to cover the technical side and give you all the commands to move forward toward <br /> your success without being tech-savvy. It is as easy as you buy a car and driving it towards the destination.<br /> When There Is a Lot of Potential and Ease, You Must Think Twice if You Are Still Reluctant to Use It.</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
