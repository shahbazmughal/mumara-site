import React from "react";
import post_amicoo1 from './images/Post-amicoo1.jpg';
import connection10 from './images/connection10.png';
import "./section27.css";
export default function Section27() {
  return (
    <div className="one-section onesection-27 pt-0">
      <div className="col-md-12">
        <img
          src={connection10} alt="connection10"
          className="mycls img-fluid mx-auto d-block"
        />
      </div>
      <div className=" one-section-27 pb-0 pt-0">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="guarantee-section mb-5">
                <div className="row align-items-center padng ">
                  <div className="col-md-6 col-sm-12">
                    <div className="margin-r-l120">
                      <h1 className="fw500 lh-4 text-white"> Why Are You
                        <span className=" fw700"> Lagging Behind?</span>
                      </h1>
                      <p className="fw400 fs-20 lh-6 margint10 text-off-white">
                        <span className="">You may feel faded to run after the customer without inspiring them to make purchases. Don’t worry, you are not the only one who is facing this menace. </span>
                      </p>
                      <p className="fw400 fs-20 lh-6 text-white">
                        <span className="">Do you want to continue with the current strategy to <span className="fw600">waste your time</span>? Or do you want to step up with the trend of putting in less effort and making <span className="fw600">more profits</span>?
                          You can also do it just like all the prosperous brands to make a reasonable impact on the market.
                        </span>
                      </p>
                    </div>
                  </div>
                  <div className="col-md-6 col-sm-12">
                    <div className="margin-r-l120 my-mt-5-max767">
                      <img src={post_amicoo1} alt="Post" className="img-fluid mx-auto d-block max-w400"/>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-12">
              <div className="max-w900 text-center mt-5 mb-1 mx-auto">
                <h3 className="fw400 mt-5 text-center"><span className="title3-out"><span className="title3"><span className="fw700">You Are Just a Click Away from Getting These Benefits</span></span></span></h3>
              </div>
            </div>
            <div className="col-md-12">
              <img
                src={connection10} alt="connection10"
                className="img-fluid mx-auto d-block connection10"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
