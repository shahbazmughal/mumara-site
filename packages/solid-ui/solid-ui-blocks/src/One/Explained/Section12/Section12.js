import React from 'react'
import clock1 from "./images/clock1.jpg";
import arrow from "./images/arrow.png";
import paytm from "./images/paytm.png";
import bg12 from './images/bg12.jpg';
import './section12.css';

export default function Section12() {
  const handleClickScroll = () => {
    const element = document.getElementById('oneExpPriceBlk');
    if (element) {
      // 👇 Will scroll smoothly to the top of the next section
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };
  return (
    <div className="one-section one-section-12" style={{backgroundImage: `url(${bg12})`}}>
      <div className="container">
        <div className="row">
          <div className="col-md-12 section12-box max-w950 m-auto mb-5">
            <div className="section12-box-inn">
              <div className="row justify-content-around m-0">
                <h3 className="fw700 mt-2 text-sea-green text-center">
                  <img
                    src={clock1} alt="icon"
                    className="img-fluid clock"
                  />
                  <em>For Limited Time Only</em>
                </h3>
                <div className="col-md-12 text-center mt-4">
                  <div className="mybutton">
                    <div className="text-center fw400 text-uppercase btn-price text-link" onClick={handleClickScroll}> <span className="mybutton-btn">
                      Get Started with Mumara One
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