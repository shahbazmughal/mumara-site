import React from "react";
import uncheckIcon34 from "./images/uncheckIcon.png";
import checkIcon34 from "./images/checkIcon.png";
import arrow from "./images/arrow.png";
import paytm from "./images/paytm.png";

import "./section34.css";
export default function Section34() {
  const handleClickScroll = () => {
    const element = document.getElementById('oneExpPriceBlk');
    if (element) {
      // 👇 Will scroll smoothly to the top of the next section
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };
  return (
    <div className="one-section one-section-34 ">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-12 text-center">
            <h1 className="lg42 md36 sm28 xs24 fw400 lh-4">Decide Your <span className="text-green fw700">Destiny</span> Yourself</h1> </div>
        </div>
        <div className="row justify-content-around">
          <div className="col-lg-6 col-md-6 without-list-box mt3">
            <div className="col-md-12 without-list">
              <h3 className="fw400 lh-4 text-white">
                <span className="without-box"> <img src={uncheckIcon34} className="img-fluid uncheckIcon" alt="uncheck" />    LOSING SIDE </span>
              </h3>

              <ul className="without-checklist fw400 lh-6 mt-10">
                <li>Continue using traditional methods.</li>
                <li>Keep spending on social media and google campaigns without a plan. </li>
                <li>Keep breaking your back by running after the customers. </li>
                <li>Continue paying hard-earned money to advertising agencies. </li>
                <li>Continue failing. </li>
                <li>Keep yourself out of the competition. </li>

              </ul>
            </div>
          </div>
          <div className="col-lg-6 col-md-6 with-list-box mt3">
            <div className="col-md-12 with-list">
              <h3 className="lg30 md28 sm26 xs22 fw400 lh-4 text-white text-right">
                <span className="with-box">  WINNING SIDE <img src={checkIcon34} className="img-fluid  checkIcon" alt="check" />  </span>
              </h3>
              <ul className="with-checklist fw400 lh-6 mt-10">
                <li> Use Mumara One with jaw-dropping features without any effort. </li>
                <li> Save your dollars without hiring any professionals. </li>
                <li> Collect more leads and convert them into sales. </li>
                <li> Select from the dozens of professionally designed templates. </li>
                <li>Manage your contact list and segment them according to users’ preferences. </li>
                <li> Dismiss old trends and step into the new world of wonders. </li>
                <li> Nurture your leads and increase ROI. </li>
              </ul>
            </div>
          </div>
          <div className="col-md-12 text-center mt-10">
            <p className="lh-4 fs-20"> <span className="title3-out"><span className="title3"><span>Keep Standing on the Winning Side, We Are Here to Help You Out</span> </span></span> </p>
          </div>
          <div className="col0md-12 padtop120">
            <div className="section34-box max-w950 m-auto">
              <div className="section34-box-inn">
                <div className="row justify-content-around m-0">
                  <h3 className="fw700 mt-2 text-sea-green text-center">
                    <em>Start Using <span className='fw700'>Mumara One</span>, Now</em>
                  </h3>
                  <div className="col-md-12 text-center mt-4">
                    <div className="mybutton">
                      <div className="text-center fw400 text-uppercase btn-price text-link" onClick={handleClickScroll}> <span className="mybutton-btn">
                        Sign Up Now
                        <img
                          src={arrow} alt="arrow"
                          className="img-fluid btn-arrow"
                        />
                      </span>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-12 mt-4">
                    <img
                      src={paytm} alt="payment"
                      className="img-fluid mx-auto d-block myimg-width"
                    />
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
