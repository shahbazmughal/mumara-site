import React from "react";
import blogimg from './images/blog3.jpg';
import blogimg2 from './images/blog4.jpg';
import waves from './images/waves.svg';
import bg29waves from './images/bg-29-top.jpg';
import pixel from './images/led-px.jpg';
import pixel2 from './images/led-px2.png';
import messaging_amico_1 from './images/Getintouch-amico2.jpg';
import "./section29.css";

export default function Section29() {
  return (
    <div className="one-section one-section-29 pt-0 p-0">
      <div className="one-section-29-uper" style={{ backgroundImage: `url(${bg29waves}) , linear-gradient(180deg, #cfe8e6 100%, #FFFFFF 100%) ` }}>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-6 text-left">
              <div className="blk1">
                <h1 className="fw500 lh-4 text-white max-w800 mx-auto">High Conversion Is Not a Dream Now,<span className="text-yellow fw800"> Try Tracking Pixels </span></h1>
                <p className="lh-6 margint10 max-w950 mx-auto text-white fs-18">Add HTML code to the email or a website to kick-start the tracking process through the pixels. Tracking pixels are a process to see how your users behaved with your products. See the users’ engagement by following the <span className="text-yellow fw600">footsteps of the users</span> including clicks, adding items to the cart, or completing the checkout process. Do everything in a brand new style using Mumara One.</p>
              </div>
            </div>
            <div className="col-md-6 text-center">
              <div className="laptop-img">
                <img
                  src={pixel2} alt="pixel"
                  className="img-fluid d-block mx-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="blk-img" style={{ backgroundImage: `url(${waves})` }}></div>
      </div>
      <div className="one-section one-section-29-bottom pt-0" >
        <div className="container">
          <div className="col-md-12">
            <div className="row justify-content-center">
              <div className="col-md-12 mt-5">
                <div className="row">
                  <div className="col-md-5 align-self-center mt-3 mx-auto">
                    <h1 className="fw400 lh-4 text-white text-left">
                      <span className="title5-out">
                        <span className="title5">
                          <span className="title5-inn">Mumara Tracking Pixels</span>
                        </span>
                      </span>
                    </h1>
                    <p className="fw400 lh-5 fs-20 text-left">Pixels are a way to track the activities of your users on your website or application. This is a highly intelligent way to get the trail of the visitors and retarget them by sending emails based on some activity. </p>
                    <p className="fw400 lh-5 fs-20  text-left">Sometimes, a user comes to your website, and adds some items to the cart but doesn’t complete the checkout process. 7 out of 10 shopping carts remain abandoned, which means that 70% of the users do not complete the purchasing process on your online store which is too much. Would you like to leave a major chunk of the buyers untouched?</p>
                  </div>
                  <div className="col-md-6 mt-3">
                    <img
                          src={messaging_amico_1} alt="Pixels"
                          className="img-fluid d-block mx-auto"
                        />
                  </div>
                </div>
              </div>
              <div className="col-md-10 text-center mx-auto mb-5">
                <h1 className="fw400 lh-4 mt-5">We suggest you use Mumara One as a complete solution to <span className="text-sea-green fw600">track visitors</span> and send them <span className="text-sea-green fw600">automated emails</span>. </h1>
              </div>
              <div className="col-md-12 mt-5 mb-5">
                <div className="row">
                  <div className="col-md-6 align-self-center mx-auto mt-3">
                    <img
                      src={pixel} alt="Pixels-messaging"
                      className="img-fluid d-block mx-auto mt-3"
                    />
                  </div>
                  <div className="col-md-6 align-self-center mt-5">
                    <h1 className="fw700 lh-4 text-left">How It Works..?</h1>
                    <p className="fw400 lh-5 fs-20 text-left">A <span className="text-sea-green fw500">pixel</span> is a code that you place on your <span className="text-sea-green fw500">website</span> to track conversions from <span className="text-sea-green fw500">Facebook ads</span>, and optimized ads based on collected data. It helps you build your <span className="text-sea-green fw500">targeted audience</span> for future ads to qualified leads. </p>
                    <p className="fw400 lh-5 fs-20 text-left">Mumara One pixel can be installed in a couple of ways i.e., Track events by the postback URL, or Install pixel in your website, application, or any other platform. It will help you track the occurring events, top events, and monthly activity more precisely. By tracking the activities, you can target the most interested users.</p>
                  </div>
                </div>
              </div>
              <div className="col-md-12 mt-5">
                <div className="row">
                  <div className="col-md-6 mt-5">
                    <div className="section29-box">
                    <img src={blogimg} className="img-fluid mx-auto d-block recap2" alt="blog-img" />
                      <div className="pading">
                        <ul className="checklist2 fw400 text-blackish lh-6 text-left">
                          <li>Track users' shopping <b>behaviors and interests</b>
                          </li>
                          <li> Track the open rate of your call to action and the behavior of the users after they go to your <b>online store</b>. </li>
                          <li>You can create <b>segments</b> based on location, devices, engagement type, etc. </li>
                          <li>These segments can be targeted differently finding the best day, or best time of the day for <b>higher ROI</b>. </li>
                          <li>You can track the <b>type of devices</b> the visitors are using. </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6 mt-5">
                    <div className="section29-box">
                    <img src={blogimg2} className="img-fluid mx-auto d-block recap2" alt="blog-img2" />
                      <div className="pading">
                        <ul className="checklist2 fw400 text-blackish lh-6 text-left">
                          <li>It informs you about the <b>location</b> of the users. </li>
                          <li>
                            <b>Pixels reveal</b> if the users are being brought through a paid search on Facebook, Twitter, Google, etc.
                          </li>
                          <li>You can <b>Embed pixels</b> into websites, ads, applications, or more where required. </li>
                          <li>Pixels informs you about the IPs, ad impressions, conversions, or other web activities.</li>
                          <li>Track your <b>engagements</b> and <b>earnings</b> as never before. </li>
                        </ul>
                      </div>
                    </div>
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
