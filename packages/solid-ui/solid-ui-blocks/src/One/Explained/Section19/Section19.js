import React from 'react'
import arrow from "./images/arrow.png";
import paytm from "./images/paytm.png";
import bg19 from './images/bg19.jpg';
import './section19.css';

export default function Section19() {
  const handleClickScroll = () => {
    const element = document.getElementById('oneExpPriceBlk');
    if (element) {
      // 👇 Will scroll smoothly to the top of the next section
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };
  return (
    <div className="one-section one-section-19" style={{backgroundImage: `url(${bg19})`}}>
      <div className="container">
        <div className="row">
          <div className="col-md-12 section19-box max-w950 m-auto mb-5">
            <div className="section19-box-inn">
              <div className="row justify-content-around m-0">
                <div className="col-md-12 text-center mt-2 mb-2">
                  <h1 className="fw600 lh-4">Did You <span className="fw800 text-sea-green">Like the Idea</span>? </h1>
                  <h1 className="fw600 lh-4">Then What You Are Waiting for?</h1>
                </div>
                <div className="col-md-12 text-center mt-4">
                  <div className="mybutton">
                    <div className="text-center fw400 text-uppercase btn-price text-link" onClick={handleClickScroll}> <span className="mybutton-btn">
                      Sign Up
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
                      className="img-fluid mx-auto d-block"
                    />
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-12 mt-3 mb-3 text-center">
            <div className="max-w750 mx-auto">
              <h1 className="fw500 text-white heading">Here Are <span className="fw700 ">More Interesting Things</span> Waiting for You.</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}