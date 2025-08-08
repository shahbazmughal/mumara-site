import React from 'react'
import paytm from "./images/paytm1.png";
import './section41.css';

export default function Section41() {
  const handleClickScroll = () => {
    const element = document.getElementById('oneExpPriceBlk');
    if (element) {
      // 👇 Will scroll smoothly to the top of the next section
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };
  return (
    <div className="one-section one-Section-41">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <h1 className="fw400 mt-2 text-white text-center">
              Get Started with <span className="fw700 ">Mumara One</span>
            </h1>
            <div className="mybutton2 mt-4 text-link" onClick={handleClickScroll}>
              <div className="text-center fw600 text-uppercase text-link" onClick={handleClickScroll}>
                <h2 className="mt-2 mb-2 text-link">Click Here To Get Started</h2>
              </div>
            </div>
            <div className='row'>
              <div className='col-md-12 text-center'>
                <p className="text-white fw400">Secure 1-time payment / 100% money back guarantee</p>
                <img src={paytm} alt="payment" className="img-fluid mx-auto d-block" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}