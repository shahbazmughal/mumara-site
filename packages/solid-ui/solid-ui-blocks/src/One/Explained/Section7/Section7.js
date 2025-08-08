import React from "react";
import envelope from "./images/Transactional-email.jpg";
import invite from "./images/Transactional-include.jpg";
import editingbodytext from "./images/Perfect-solution.jpg";
import contactus from "./images/start-transactional.jpg";
import wishes from "./images/triggered-based.jpg";
import touch from "./images/top-notch.jpg";
import bg7 from "./images/bg7.jpg";
import "./section7.css";

export default function Section7() {
  return (
    <div className="one-section one-section-7 spikes" style={{ backgroundImage: `url(${bg7})` }}>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-12 text-center">
            <h1 className="fw500 text-yellow">
              <span className="fw700 ">Transactional</span> Email Services
            </h1>
            <p className="mx-auto fs-20 fw400  lh-5 gray4 margint10 max-w800">
              Transactional email services with powerful APIs on Mumara One are
              always
              available to provide you with the true pleasure of success.
            </p>
          </div>
        </div>
        <div className="row justify-content-center ">
          <div className="col-md-12">
            <div className="row justify-content-center">
              <div className="col-md-6 mt-5">
                <div className="section29-box">
                  <img src={envelope} className="img-fluid mx-auto d-block recap1" alt="recap" />
                  <div className="pading">
                    <h1 className="fs-22 fw700 lh130">Understand Transactional Email</h1>
                    <p className="inner-padding lh-5 gray mb-0 fw400">
                    A transactional email is an email message that is triggered by a specific action in a website or mobile app. These emails contain specific information or data that is typically sent to the users one at a time when a user takes a specific action.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-6 mt-5">
                <div className="section29-box">
                  <img src={wishes} className="img-fluid mx-auto d-block recap2" alt="recap" />
                  <div className="pading">  <h1 className="fs-22 fw700 lh130">Transactional emails include</h1>
                    <ul className="checklist2 fw400 my-text-left gray lh-5  margint10 mb-0">
                      <li>Order confirmation.</li>
                      <li>Password reset.</li>
                      <li>Welcome emails.</li>
                      <li>Social media updates.</li>
                      <li>Account notifications.</li>
                      <li>Automated abandoned cart emails.</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row justify-content-center mt-5">
          <div className="col-md-12">
            <div className="row justify-content-center">
              <div className="col-md-12 ">
                <div className="blk-box">
                  <div className="row">
                    <div className="col-md-6 col-sm-12 m-auto text-center">
                      <img src={invite} className="img-fluid d-block recap3" alt="recap" />
                    </div>
                    <div className="col-md-6 col-sm-12 m-auto text-center">
                      <h1 className="fs-22 fw700 lh130 text-left">Triggered-based Emails</h1>
                      <p className="fw400 lh-5 pad-t gray text-align-left pe-md-2">
                        You can send these emails with Mumara One’s highly efficient email
                        automation system. Send your transactional emails by using
                        SMTP or an API server. Transactional emails are a bit different
                        than marketing emails when you send them. The former is
                        triggered-based emails in real-time bound with certain actions
                        taken by the user such as a password reset. On the other hand,
                        marketing emails are one email to many for product promotions,
                        sales, and services.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-md-12">
            <div className="row justify-content-center">
              <div className="col-md-6 mt-5">
                <div className="section29-box">
                  <img src={editingbodytext} className="img-fluid d-block recap1" alt="recap" />
                  <div className="pading">
                    <h1 className="fs-22 fw700 lh130"> Giving You the Perfect Solution</h1>
                    <p className="inner-padding lh-5 gray mb-0 fw400">
                      Sending transactional emails is never hard when you go with the
                      right transactional email service. This is the point where Mumara
                      One steps forward to give a complete solution for your
                      transactional emails and hold on sending and tracking these
                      emails.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-6 mt-5">
                <div className="section29-box">
                  <img src={contactus} className="img-fluid mx-auto d-block recap2" alt="recap" />
                  <div className="pading">
                    <h1 className="fs-22 fw700 lh130"> Start Sending Transactional Emails Today</h1>
                    <p className=" lh-5 gray mb-0 fw400"> Your brand needs an email service provider that helps users
                      timely, and Mumara One gives you that autonomy for your
                      transactional emails. If you want to increase your open rate,
                      boost reach, and increase sales, start sending transactional
                      emails via Mumara One today!</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row justify-content-center mt-5">
          <div className="col-md-12">
            <div className="row justify-content-center">
              <div className="col-lg-12 col-md-12 ">
                <div className="blk-box">
                  <div className="row">
                    <div className="col-md-6 col-sm-12 m-auto text-center">
                      <img src={touch} className="img-fluid d-block recap3" alt="automated-emails" />
                    </div>
                    <div className="col-md-6 col-sm-12 m-auto text-center">
                      <h1 className="fs-22 fw700 lh130 text-left">Sending Automated Emails</h1>
                      <p className="fw400 lh-5 gray pad-t text-align-left">
                        A top-notch system for sending automated emails gives you the
                        ultimate freedom to target your audience in your own way. Our
                        primary goal is to enable you with superlative services to
                        increase the deliverability rate while keeping them out of the
                        junk folder.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div >
  );
}
