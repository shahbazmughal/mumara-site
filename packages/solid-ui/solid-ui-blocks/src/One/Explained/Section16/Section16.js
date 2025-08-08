import React from 'react'
import arrow from "./images/arrow.png";
import paytm from "./images/paytm.png";

import './section16.css';

export default function Section16() {
  const handleClickScroll = () => {
    const element = document.getElementById('oneExpPriceBlk');
    if (element) {
      // 👇 Will scroll smoothly to the top of the next section
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };
  return (
    <div className="one-section one-section-16 pt-0">
      <div className="container">
        <div className="row">
          <div className="col-md-12 section16-box max-w950 m-auto mt-5">
            <div className="col-md-12 section16-box-inn">
              <div className="row justify-content-around m-0">
                <h3 className="fw500 mt-2 text-sea-green text-center">
                  <em>Get Started with <span className="fw700 ">Mumara One</span></em></h3>
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
                <div className="col-md-12 mt-5">
                  <img
                      src={paytm} alt="payment"
                      className="img-fluid mx-auto d-block"
                    />
                  </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
