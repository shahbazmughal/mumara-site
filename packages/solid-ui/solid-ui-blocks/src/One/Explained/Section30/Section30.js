import React from "react";
import envelope_amico from './images/Envelope-amico.jpg';
import envelope_cuate from './images/Envelope-cuate.jpg';
import getintouch_amico1 from './images/Getintouch-amico1.jpg';
import check2 from './images/check2.png';
import bg30 from './images/bg30.jpg';

import "./section30.css";
export default function Section30() {
  return (
    <div className="one-section one-section-30" style={{ backgroundImage: `url(${bg30})` }}>
      <div className="row feature-section2 my-padding-section-top-bottom">
        <div className="container">
          <div className="row">
            <div className="col-md-12 mx-auto">
              <div className="row align-items-center">
                <div className="col-md-6 col-sm-12">
                  <h1 className="lh-4 fw500 max-w550 text-black mx-auto">
                    We Offer What <span className="text-black fw700"> You Deserve</span>
                  </h1>
                  <p className="fs-20 lh-6 fw400 text-black mt-3 mx-auto max-w550">
                    Mumara One has decided to cover you with heavy-duty, <span className="text-sea-green fw700">best-performing features</span>. We give your business a much-awaited final push to your business to step up with the current fashions that flourish your brand.
                  </p>
                </div>
                <div className="col-md-6 col-sm-12">
                  <img
                    src={envelope_amico} alt="envelope_amico"
                    className="img-fluid d-block mx-auto max-w400"
                  />
                </div>
              </div>
            </div>
            <div className="col-lg-12">
              <div className="row align-items-center">
                <div className="col-md-6 col-sm-12 mt6 order-md-2 px-md-0">
                  <h1 className="lh-4 fw400 text-black max-w550 m-auto mt-5">
                    Get Your <span className="text-sea-green fw600">Desired Plan</span> On Mumara One, and Start  <span className="text-sea-green fw600">Making Profit</span> with a Few Clicks.
                  </h1>
                  <div className="lh-6 fw400 text-black mt-4 pr-md-4 max-w550 m-auto text-left">
                    <div className="list-overflow-green14 mb-4">
                      <img
                        src={check2} alt="check"
                        className="bulletlistgreen14 img-responsive"
                      />
                      <p>
                        Create your <span className="fw700">Email Campaign</span>.
                      </p>
                    </div>
                    <div className="list-overflow-green14 mb-4">
                      <img
                        src={check2} alt="check"
                        className="bulletlistgreen14 img-responsive"
                      />
                      <p>
                        Send it to your <span className="fw700">Users.</span>.
                      </p>
                    </div>
                    <div className="list-overflow-green14 mb-4">
                      <img
                        src={check2} alt="check"
                        className="bulletlistgreen14 img-responsive"
                      />
                      <p>
                        <span className="fw700">Measure</span> the results in stats.
                      </p>
                    </div>
                    <div className="list-overflow-green14 mb-4">
                      <img
                        src={check2} alt="check"
                        className="bulletlistgreen14 img-responsive"
                      />
                      <p>
                        Get ready for more <span className="fw700">conversions.</span>
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 col-sm-12 mt6 order-md-1">
                  <img
                    src={envelope_cuate} alt="envelope_cuate"
                    className="img-fluid d-block mx-auto mt-3 max-w500"
                  />
                </div>
              </div>
            </div>
            <div className="col-lg-12">
              <div className="row align-items-center">
                <div className="col-md-6 col-sm-12 mt-5">
                  <h1 className="lh-4 fw400 max-w550 text-black mx-auto">
                    Capture More Emails – Grow Your <span className="text-sea-green fw700">Email List</span>
                  </h1>
                  <p className="fs-20 lh-6 fw400 text-black mt-3 mx-auto max-w550">
                    Grow your email list with less effort and more style. Mumara One presents user-friendly, <span className="text-sea-green fw800">responsive web forms</span> to add more email addresses to your mailing list. Increase your database with fascinating, and <span className="text-sea-green fw800">ready-to-use subscription forms</span> that are fully capable to grab the users’ attention.
                  </p>
                </div>
                <div className="col-md-6 col-sm-12">
                  <img
                    src={getintouch_amico1} alt="getintouch_amico1"
                    className="img-fluid d-block mx-auto mt-3 max-w500"
                  />
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
