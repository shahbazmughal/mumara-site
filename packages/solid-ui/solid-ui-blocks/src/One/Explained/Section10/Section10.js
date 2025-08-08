import React from "react";
import emailcampaign from "./images/Emailcampaign-bro.svg";
import imgpayload from "./images/Envelope-api.svg";
import "./section10.css";
export default function Section10() {
  return (
    <div className="one-section one-section-10">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-12 text-center max-w800">
            <h1 className="fs-h1-42 lh-4 fw400 text-center text-white">Send Your <span className="fw700 text-yellow">Transactional Emails</span> Via <span className="fw700 text-white">SMTP</span> or Via <span className="fw700 text-white">API</span>	</h1>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-md-12 sectionabcd-box my-padding-section-bottom">
            <div className="row align-items-center mb-5">
              <div className="col-md-6 col-sm-12 mt-5">
                <img src={emailcampaign} className="img-fluid" alt="my-img" />
              </div>
              <div className="col-md-6 col-sm-12 mt-5">
                <div className="lh-4 fw400  ">
                  <h3 className="fs-36 fw400 lh-4 text-white">Send Via <span className="fw700 text-yellow">SMTP</span></h3>
                </div>
                <div className="lh-6 fw400 text-white">
                  <div className="fw400 lh-6  pera">
                    <p className="fw400 lh-6">Simple Mail Transfer Protocol or SMTP is the method of sending emails across the internet. Mumara One gives you an option to create a bridge of the dedicated IPs and transfer your emails via the server to the destination. You can connect your website or application to the Mumara One route using SMTP contention.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="row align-items-center">
              <div className="col-md-6 col-sm-12">
                <div className="lh-4 fw400  ">
                  <h3 className="fs-36 fw400 text-white lh-4">Send Via <span className="fw700 text-yellow">API</span></h3>
                </div>
                <div className="fw400 text-white pera">
                  <p className="fw400 lh-6">Application Programming Interface or API is not just used for emails. It is software that helps various application systems communicate. Send emails from your Mumara One route from anywhere using the API. An application or a product website can use the API to send transactional mail automatically without waiting in queue. Copy the API Key and integrate that application or website with the Mumara One. When someone takes an action, Mumara One will get an alert and it will send a specific message to the user. Are you ready to try the latest technology?</p>
                </div>
              </div>
              <div className="col-md-6 col-sm-12 mt1">
                <img src={imgpayload} className="img-fluid" alt="my-img" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
