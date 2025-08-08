import React from "react";
import bg31 from "./images/bg31.jpg";
import form from "./images/form-body.jpg";

import "./section31.css";
export default function Section31() {
  return (
    <div className="one-section one-section-31 section200 my-minus-mt2" style={{ backgroundImage: `url(${bg31})` }}>
      <div className="container">
        <div className="row justify-content-center"><div className="col-md-12 text-center mt2">
          <h1 className="fw500 text-black max-w950 mx-auto">
            Select your desired web forms on  <span className="fw700 text-sea-green">Mumara One</span></h1>
          <p className="mx-auto fs-20 fw400 gray lh-5 margint10 max-w950 py-5">Mumara One forms are your desired web forms that you can customize in your own way.A variety of web form templates are available, e.g., blank templates, simple subscription forms, contact forms, subscribe forms, contact forms with addresses, complaint monitor forms, campaign monitor forms with background, and many more.
          </p>
        </div></div>
        <div className="row justify-content-center mt5">
          <div className="col-lg-6 col-md-6 align-self-center"> <img src={form} className="img-fluid mx-auto d-block wasting max-w500" alt="Select your desired web forms" /> </div>
          <div className="col-lg-6 col-md-6 align-self-center">

            <ul className="checklist2 fw400 gray lh-6 ps-5">
              <li>Get <b>HTML</b> code on <b>Mumara One</b>. </li>
              <li>Start collecting the benefits.</li>
              <li>Collect leads, and use <b>Mumara One</b> to automate lead-nurturing activities.</li>

              <li>Embed copied code in your website’s HTML viewer window.</li>
              <li>Define your favorite <b>web form</b>. </li>

              <li>Save <b>Money</b> and <b>Manual effort</b>. </li>
              <li>Better communication workflow.</li>
              <li>Get <b>GDPR-related</b> consents. </li>

              <li>Start communicating with the <b>interested users</b>.</li>
              <li><b>Customize</b> it as per your needs. </li>


              <li>Handle your <b>Data</b> more easily.</li>
              <li><b>Convenient</b> to use.</li>
              <li>Grow a healthy <b>contact list</b>.</li>
            </ul>
          </div>
        </div>


      </div>
    </div>
  );
}
