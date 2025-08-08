import React from 'react'
import bg14 from './images/bg14.jpg';
import connection14 from './images/connection3.png';
import titleBg14 from './images/titleBg1.png';
import emailcampaignbro from "./images/Email-campaign-bro.jpg";
import emailcampaignraf from "./images/Emailcampaign-rafiki1.jpg";
import './section14.css';

export default function Section14() {
  return (
    <div className="one-section one-section-14" style={{ backgroundImage: `url(${bg14})` }}>
      <div className="container">
        <div className='col-md-12'>
          <div className="row justify-content-center">
            <div className="col-md-12 text-center">
              <h1 className="mt-2 mb-2 mx-auto lh-4 new-sec-small-width"> <span className="title3-out"><span className="title3"><span className="text-sea-green"> Don’t believe us…? </span> </span></span> </h1>
            </div>
            <div className="col-md-12 text-center"> <img src={connection14} className="img-fluid mx-auto d-block connection3" alt="connection3" /> </div>
          </div>
          <div className="col-md-12">
            <div className="row mt-2">
              <div className="col-md-6 col-lg-6 my-pad-left70">
                <div className="col-md-12 titleBg1 my-margin-left mb-5" style={{ backgroundImage: `url(${titleBg14})` }}>
                  <h2 className="fw500 lh-4 text-white mt-3 mb-5 ms-4">A Worth Reading Case Study</h2>
                </div>
                <p className="fw400 lh-5 mt-4">Keebler is a New York-based eyewear company built on the strong principles that designer eyewear should be cost-effective and more stylish. Although they set reasonable prices for the products they didn’t get enough sales at the start even after spending hundreds of dollars on <span className="fw500 text-sea-green">social media</span> and <span className="fw500 text-sea-green">google campaigns</span>.</p>
                <p className="fw400 lh-5 mt-3">The problem they found was that the message was not going to the right audience as it was being sent to all and sundry including irrelevant users. They just tried to figure out the answer to the question, ‘what stops people from buying from the brand?” After discussions, they tried to guess the answer and decided to try email marketing tool Mumara One.</p>
              </div>
              <div className="col-md-6 col-lg-6"> <img src={emailcampaignbro} className="img-fluid center-block important max-w500" alt="important" /> </div>
            </div>
          </div>
          <div className="col-md-12 pading">
            <div className="row justify-content-around">
              <div className="col-lg-6 col-md-6 order-md-2 align-self-center problem-text">
                <p className="fw400 lh-5 mt-3 mx-auto max-w650">
                  They added their <span className="fw500 text-sea-green">contact lists</span>, segmented them according to <span className="fw500 text-sea-green">user's preferences</span>, and targeted the audience more sophisticatedly. <span className="fw500 text-sea-green">Keebler</span> tried email marketing automation for a few weeks and as a result, they converted 55% more users by simply showing them the desired product. Another thing that they did on the <span className="fw500 text-sea-green">Mumara One</span> was that they added landing pages to showcase the intended products to the users. In this way, the navigation of the redirected traffic was limited; the focus of the user was increased and they made more purchases without going from one page to another.
                </p>
              </div>
              <div className="col-md-6 col-lg-6 order-md-1 align-self-center"> <img src={emailcampaignraf} className="img-fluid mx-auto d-block image1 max-w500" alt="email" /> </div>
            </div>
          </div>
          <div className="col-md-12">
            <div className="row mt-2">
              <div className="col-md-10 mx-auto">
                <h2 className="fw400 lh160 gray text-center max-w950 mx-auto">Do You Want to Experience the Same Boost Just Like <b className="w600 text-sea-green">Keebler</b> ? Don’t Go Anywhere When We Give You a <b className="w600 text-sea-green">Complete</b> and <b className="w600 text-sea-green">Ready-Made</b> Solution.
                </h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}