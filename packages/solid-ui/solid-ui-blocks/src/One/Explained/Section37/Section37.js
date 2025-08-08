import React from "react";
import emails_cuate_1 from './images/Emails-cuate-1.jpg';
import newsletter_amico from './images/Newsletter-amico.jpg';
import webhook from './images/webhook_pages.jpg';
import connection11 from './images/connection11.png';
import check22 from './images/check22.png';

import "./section37.css";
export default function Section37() {
  return (
    <div className="one-section one-section-37">
      <div className="container">
        <div className="row">
          <div className="col-md-12 text-center mt-20-responsive">
            <h1 className="fw400 text-center text-white"><span className="title3-out"><span className="title3"><span className="fw700 text-yellow">WAIT!</span> Here’s The Best Part
              </span></span></h1>
          </div>
          <div className="col-md-12 text-center">
            <img
              src={connection11} alt="connection"
              className="img-fluid mx-auto d-block connection11"
            />
            <h1 className="fw500 lh-4 text-yellow">
              Get Timely Notifications Through <span className="text-white fw700"> Webhooks</span>
            </h1>
          </div>
          <div className="col-lg-12 col-md-12">
            <div className="row justify-content-center margint10">
              <div className="col-md-6 align-self-center">
                <img
                  src={webhook} alt="bonus"
                  className="img-fluid d-block mx-auto mt-5 max-w550"
                />
              </div>
              <div className="col-md-6 align-self-center bonus-text">
                <p className="lh-5 fw400 text-off-white fs-20">Automation workflow is not limited to the events and actions that you perform on your account. It is more than that. On Mumara One, Webhook allows you to connect your workflow with a third party to receive status notifications to your endpoints as soon as an event occurred your matches your criteria, i.e. </p>
              </div>
            </div>
          </div>
          <div className="col-lg-12 col-md-12">
            <div className="row justify-content-center ">
              <div className="col-md-6 align-self-center bonus-text">
                <p className="lh-4 fw400 text-off-white fs-20">You can select an event to receive a status notification when an email is ‘received, delivered, bounced, delayed, or complaints.’ Fill in a reachable webhook URL where you want to send a post request and enjoy the benefits: </p>
                <div className="lh-5 fw400 text-white margint10 text-left">
                  <div className="list-overflow-green15">
                    <img
                      src={check22} alt="check"
                      className="bulletlistgreen15 img-responsive"
                    />
                    <p>
                      Send data in real-time when the <b className="text-yellow">relevant event</b> occurs
                    </p>
                  </div>
                  <div className="list-overflow-green15">
                    <img
                      src={check22} alt="check"
                      className="bulletlistgreen15 img-responsive"
                    />
                    <p>
                      Use that information and re-visit your <b className="text-yellow">strategy</b> if needed
                    </p>
                  </div>
                  <div className="list-overflow-green15">
                    <img
                      src={check22} alt="check"
                      className="bulletlistgreen15 img-responsive"
                    />
                    <p>
                      <b className="text-yellow"> Know immediately</b> if the system is failed to send your data
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-6 align-self-center">
                <img
                  src={newsletter_amico} alt="bonus"
                  className="img-fluid d-block mx-auto mb-5 max-w550"
                />
              </div>
            </div>
          </div>
          <div className="col-lg-12 col-md-12">
            <div className="row justify-content-center ">

              <div className="col-md-6 align-self-center bonus-text mt-3 order-md-2">
                <h1 className="lh-4 fw600 text-white"><span className="text-yellow">Real-Life</span> Example</h1>
                <p className="lh-5 fw400 text-off-white margint10 fs-20">Twitter has an account activity webhooks where the user is instantly notified upon receiving a message, reply, like, etc. In this way, you get timely information through the notification that the businesses respond timely to any query promptly. Likewise, Mumara One enables you to receive real-time information to respond at the earliest.  </p>
              </div>
              <div className="col-md-6 align-self-center mt-3 order-md-1">
                <img
                  src={emails_cuate_1} alt="bonus"
                  className="img-fluid d-block mx-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}