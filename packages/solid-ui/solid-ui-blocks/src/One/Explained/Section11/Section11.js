import React from "react";
import sentmsg from "./images/take-elevate.jpg";
import "./section11.css";
export default function Section11() {
  return (
    <div className="one-section one-section-11">
      <div className="container">
        <div className="row justify-content-center mt-5">
          <div className="card">
            <div className="card-body p-5">
              <div className="row justify-content-center">
                <div className="col-md-6 align-self-center">
                  <img src={sentmsg} className="img-fluid mx-auto d-block max-w500 sentmsg" alt="wondering" />
                </div>
                <div className="col-md-6 col-sm-12 align-self-center">
                  <div className="m-auto max-w550">
                    <h1 className="fw500 fs-h1-42">Take the <span className="text-sea-green fw700">Elevated Experience</span> in Marketing</h1>
                    <p className="lh-5 gray margint10 fw400">If you want to lead your marketplace from the front, do not wait for tomorrow, do it today. Mumara One is fully capable of giving you the next-level experience of being the boss. Whether you are an online business, a social media agency, a designer, a content marketer, or any business on the planet, you are welcome to take your business to the advanced level with this all-in-one solution.</p>
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
