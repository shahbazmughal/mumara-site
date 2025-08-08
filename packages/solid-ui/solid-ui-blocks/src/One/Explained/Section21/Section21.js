import React from 'react'
import bg21 from './images/bg21.jpg';
import trigger from './images/trigger-base.jpg';
import blogs from './images/blog1.jpg';
import './section21.css';

export default function Section21() {
  return (
    <div className="one-section one-section-21" style={{ backgroundImage: `url(${bg21})` }}>
      <div className="container">
        <div className="row align-center">
          <div className="col-md-12 text-center">
            <h3 className="lh-4 my-margin-t">
              <span className="title3-out">
                <span className="title3">
                  <span className="fw700">We Have Not Finished Yet!</span>
                </span>
              </span>
            </h3>
          </div>
          <div className="col-md-12">
            <h1 className="lh-4 fw700 text-center mt-2">Trigger-Based Emailing</h1>
          </div>
          <div className="col-md-12 mt-5">
            <div className="row">
              <div className="col-md-6 align-self-center">
                <img src={trigger} className="img-fluid mx-auto d-block max-w500" alt="trigger" />
              </div>
              <div className="col-md-6 align-self-center">
                <p className="inner-padding lh-5 gray mb-0 fs-20 pr-text text-left fw400">A trigger is an automatic reaction to a user’s particular action. Upon this particular action, Mumara One sends a trigger email as an automated email to inform a user of the occurrence of an event. You can apply a wide range of filters according to your desires.</p>
                <p className="inner-padding lh-5 gray mb-0 fs-20 pr-text text-left fw400">For example, if you select an event criterion “Contact is added to a List” you can select the action e.g, send a broadcast, start a drip campaign, send a notification email to the admin, etc. As soon as a user will be added to the selected email list, the trigger will be performed accordingly.</p>
              </div>
            </div>
          </div>
          <div className="col-md-12 mt-5">
            <div className="row ">
              <div className="col-md-6 align-self-center pl-text">
                <h1 className="fw600">Send Well-Timed Information <br /> to the Right Audience</h1>
                <ul className="checklist1 mt-5">
                  <li>Reach out to more than <b>4 billion users worldwide</b>. </li>
                  <li>Boost your <b>revenues
                    </b> by up to <b>4200%</b>. </li>
                  <li>
                    <b>64%
                    </b> of the brands use <b>Email Marketing Tool To Target Customers</b>.
                  </li>
                  <li>37% of <b>businesses
                    </b> are increasing their <b>Email Marketing Budget</b>. </li>
                  <li>Email is <b>40 times
                    </b> more effective than <b>social media</b>. </li>
                  <li>The buying process is <b>3 times faster
                    </b> than social media. </li>
                  <li>
                    <b>Email</b> provides a <b>One-On-One
                    </b> communication facility.
                  </li>
                  <li>
                    <b>Cost-effective
                    </b> medium of marketing as compared to others.
                  </li>
                </ul>
              </div>
              <div className="col-md-6 align-self-center">
              <img src={blogs} className="img-fluid mx-auto d-block max-w500" alt="recap" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}