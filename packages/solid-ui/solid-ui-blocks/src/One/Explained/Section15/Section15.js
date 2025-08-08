import React from 'react'
import conn3 from './images/connection3.png';
import conn4 from './images/connection4-1.png';
import titlebg15 from './images/titleBg2.png';
import amico from "./images/Emailcampaign-amico.png";
import './section15.css';

export default function Section15() {
  return (

    <div className="one-section-15">
      <div className="one-section one-section-15-inner pt-0">
        <div className="col-md-12 text-center">
          <h3 className="lh-4 my-margin-t"> <span className="title3-out"><span className="title3"><span className="text-sea-green"> Not Enough? Read Another! </span> </span></span> </h3>
        </div>
        <div className="col-md-12 text-center"> <img src={conn3} className="img-fluid mx-auto d-block connection3" alt="Doubled the Sales Within no time" /></div>
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-12">
              <div className="titleBg2 lh-4 fw400 text-center max-w1100 mx-auto" style={{ backgroundImage: `url(${titlebg15})` }}>
                <h1 className="fw500 lh-4 text-sea-green mb-0 fs-h1-42 mt-0"><span className="fw700">Liana</span> Doubled the Sales Within <span className="fw700">No Time</span></h1>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="lh-4 fw400 text-center pera1 mt-5">
                Liana is a women’s fashion brand that possesses a huge fan following. The contemporary brand always comes up with a customer-oriented approach, that makes them a well-groomed e-commerce store. Their marketing team faced severe challenges while using marketing automation technology.
                They observed that the software they used for the <span className="text-yellow fw600">cart abandonment tracking</span> was slowing down the website which decreased the sales and traffic due to poor user experience. The brand was unable to get all the abandoned cart data they could use for the re-targeting emails. The situation was not only risky but frustrating to a larger extent.
              </div>
              <div className="row align-items-center">
                <div className="col-md-6 col-sm-12">
                  <img src={amico} className="img-fluid d-block mx-auto max-w550 mt-5" alt='mumara-img' />
                </div>
                <div className="col-md-6 col-sm-12">
                  <p className="text-white fw400 lh-6 text-align-left mt-5">
                    They were looking for a full-fledged solution for the best user experience and sales at the same time. The software they were using proved to be a hindrance to achieving their set goals. They also faced the issue that they were unable to get traffic on a particular product through social media. Aaron Field, the digital head was assigned the task to find the solution. </p>
                  <p className="text-white fw400 lh-6 text-align-left">
                    Mumara One offered every feature, Aaron, exactly needed. He got the solution in the shape of <span className="text-yellow fw600">tracking pixels, landing pages,</span> and a <span className="text-yellow fw600">perfect email automation system</span>. He thought of stepping up instead of crawling with the same software. Within weeks, they doubled the sales through proficient automation technology.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <h3 className="fw400 problem-bg1 text-white text-center mywidthcom">Are You Looking to <span className="fw600">Double Your Sales</span> Just Like Liana?</h3>
      <div className="row justify-content-center m-0 mt8">
        <div className="col-md-12"><img src={conn4} className="img-fluid mx-auto d-block connection4" alt="connection4" /></div>
      </div>
    </div>
  );
}