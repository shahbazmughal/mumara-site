import React from 'react'
import clock1 from "./images/clock1.png";
import arrow from "./images/arrow.png";
import paytm from "./images/paytm.png";
import bg1 from './images/bg2-1.png';
import bg2 from './images/bg2-2.jpg';
import bg_mumara from './images/bg_mumara.png';

import './section2.css';

export default function Section2() {
  const handleClickScroll = () => {
    const element = document.getElementById('oneExpPriceBlk');
    if (element) {
      // 👇 Will scroll smoothly to the top of the next section
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };
  return (
    <>
      <div className="one-section one-section-2 pb-0" style={{ backgroundImage: `url(${bg1})` }}>
        <div className="container">
          <div className="row">
            <div className="col-md-12 section2-box max-w950 m-auto mb-5">
              <div className="section2-box-inn">
                <div className="row justify-content-around m-0">
                  <h3 className="col-md-12 fw700 mt-2 text-sea-green text-center">
                    <img
                      src={clock1} alt="icon"
                      className="img-fluid clock"
                    />
                    <em>For Limited Time Only</em>
                  </h3>
                  <div className="col-md-12 text-center mt-4">
                    <div className="mybutton">
                      <div className="text-center fw400 text-uppercase btn-price text-link" onClick={handleClickScroll}> 
                        <span className="mybutton-btn">
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
        <div className='container one-section-2-middle'>
          <div className="row">
            <div className="col-md-10 text-center mt-5 mx-auto">
              <h1 className="fw600 mt-1 text-sea-green"><em> Engage Your <span className="fw900 text-yellow-gold">Audience</span> as Never Before</em></h1>
              <p className="fw400 lh-4 fs-20"> More than 4.26 billion email users are there worldwide. You have to think twice while ignoring this huge market. Do not feel stuck when a gigantic marketplace with immeasurable potential is available in front of your eyeballs. Attract more customers to generate more ROI in a style. Mumara One creates a win-win situation for your brand with its mesmerizing features.</p>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid one-section one-section-2-lower" style={{ backgroundImage: `url(${bg2})` }}>
        <div className="row section2-mt">
          <div className='container'>
            <div className='row mt-10'>
              <div className="col-md-6 align-self-center">
                <img
                  src={bg_mumara} alt="wondering"
                  className="img-fluid mx-auto d-block"
                />
              </div>
              <div className="col-md-5 align-self-center mt-5">
                <h1 className="fw600"> Mumara One Has<span className="fw700 text-sea-green"> Everything</span> You Need for Your Brand!</h1>
                <p className="fw400 text-black mt-3 fs-20">Mumara is a highly intelligent, and creative automation tool that enables you to automate your marketing funnel. We give you the modern way forward to land in the mailbox of the users with a high deliverability rate. </p>
                <p className="fw400 text-black mt-3 fs-20">Sending an email is different than sending it exactly to the inbox. Mumara One understands the way spam filters work. That is why you can send every email for the maximum open and click-through rate. </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}