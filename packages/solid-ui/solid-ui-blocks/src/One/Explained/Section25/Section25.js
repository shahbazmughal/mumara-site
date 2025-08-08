import React from "react";
import bg25 from "./images/bg25.jpg";
import landingpage from "./images/led-lp.png";
import landingpage2 from "./images/led-lp2.jpg";
import "./section25.css";
export default function Section25() {
  return (

    <div className="one-section-25 pt-0">
      <div className="one-section one-section-25-uper">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-12 text-center">
              <div>
                <h1 className="fs-42 fw500 lh-4 text-black max-w800 mx-auto">  Be More <span className="fw800 text-sea-green"> Creative with Your Website</span></h1>
              </div>

              <div className="fs-20 fw400 lh-6 text-blackish margint10 max-w950 mx-auto">
                Providing users with a sense of achievement in a unique way is the motto of Mumara One. That is why it helps you leave no stone unturned in keeping you a step ahead of your competition.
                We come up with <span className="fw500">creative and <span className="fw800 text-sea-green">responsive landing page templates</span> </span> that convert leads into sales. It happens when the users are focused on a pre-defined goal. They click a specific call to action to redirect straight to the items or offers.
              </div>

            </div>
          </div>
        </div>
      </div>

      <div className="container-fluid one-section-25-mid bgcolor pad60-bottom pt-0">
        <div className="row justify-content-center">
          <div className="col-md-12 text-center">
            <div className="img-styling">
              <img
                src={landingpage} alt="landingpage"
                className="img-fluid d-block mx-auto landingpage"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="one-section one-section-25 pt-0" style={{ backgroundImage: `url(${bg25})` }}>
        <div className="container">
          <div className="col-md-12 mx-auto">
            <div className="row padding-t">

              <div className="col-md-6 col-sm-12 mt-5 align-self-center max-w600 mx-auto">
                <div>
                  <h1 className="lh-4 text-white"> Choose a <span className="fw700 text-yellow">Landing Page</span> That <span className="fw700 text-yellow"> Generates Sales</span></h1>
                </div>
                <div>
                  <p className="fs-18 fw400 lh-6 text-white margint10 pe-md-5"> Choose a customizable landing page, and edit it using Drag & Drop Builder. Mumara One has brought everything to one place where, you select, edit, promote, and optimize, without any coding knowledge. Sell your product and services from today, and get ready to make money. Get more subscribers and convert them to sales to soar the profits of your business. We are sure you want to look more professional, just do it by connecting your custom domain in a few steps.
                  </p>
                </div>

              </div>
              <div className="col-md-6 col-sm-12 mt-5 align-self-center">
                <img src={landingpage2} className="img-fluid d-block mx-auto " alt="Mumara-img" />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12 col-sm-12">
              <div className="fs-20 fw400 lh-6 text-white mt-5 text-center box-style-sec  max-w650 mx-auto">
                The primary goal of adding a landing page is to limit the <span className="fw600 text-yellow">users’ navigation</span> and keep them fixated on certain products instead of distracting them away from the page.
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}
