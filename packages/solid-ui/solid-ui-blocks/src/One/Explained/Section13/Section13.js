import React from 'react'
import star from './images/star.png';
import anthony from './images/anthony.jpg';
import firas from './images/firas.jpg';
import arif from './images/arif.jpg';
import bg13 from './images/bg13.jpg';
import './section13.css';

export default function Section13() {
  return (


    <div className="one-section one-section-13" style={{ backgroundImage: `url(${bg13})` }}>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-12 text-center">

            <h1 className="fw400 lh-4 text-white fs-h1-42">
              What Do <span className="fw700 text-yellow">Our Clients </span> Say<br className="d-none d-md-block" />About Mumara One?
            </h1>
          </div>
        </div>
        <div className="row justify-content-center mt2">
          <div className="col-lg-4 col-md-4 testimonial-box-out">
            <div className="col-md-12 testimonial-box">
              <div className="row m-0">
                <div className="col-md-2 p-0"> <img src={firas} className="img-fluid mx-auto d-block person1" alt="person" /> </div>
                <div className="col-md-9">
                  <p className="m-0 fw500 lh-6">Donald J. Moore</p> <img src={star} className="img-fluid star" alt="star" />
                </div>
              </div>
              <p className=" fw400 lh-6 gray2 mt-4 p-fs">“Being an online business owner, I strongly recommend Mumara One to all who are looking forward to making their mark in the field. I was spending plenty of dollars on other platforms without getting the true results. One of my friends who was already using it told me to give it a try. I was astonished to see the huge sales. The rates are comparatively low, and the interface is straightforward to use. I am getting the results of my choice and wish you all to do so.” </p>
            </div>
          </div>
          <div className="col-lg-4 col-md-4 testimonial-box-out">
            <div className="col-md-12 testimonial-box">
              <div className="row m-0">
                <div className="col-md-2 p-0"> <img src={arif} className="img-fluid mx-auto d-block person2" alt="person" /> </div>
                <div className="col-md-9">
                  <p className="m-0 fw500 lh-6">Arlene G. Lee</p> <img src={star} className="img-fluid star" alt="star" />
                </div>
              </div>
              <p className="fw400 lh-6 gray2 mt-4 p-fs">“After a significant loss in my business, I was about to quit. One good day I just read about Mumara One somewhere and planned to give it a try as a final resort. Believe me or not, I was so amazed to get the sales to boost within no time. Mumara One’s team is highly professional and comes forward during any need according to the users’ requirements. You need not be a programmer or coder to use Mumara One. If you are passing through the same as I experienced, do not wait for the end, use it now and change your destiny.” </p>
            </div>
          </div>
          <div className="col-lg-4 col-md-4 testimonial-box-out">
            <div className="col-md-12 testimonial-box">
              <div className="row m-0">
                <div className="col-md-2 p-0"> <img src={anthony} className="img-fluid mx-auto d-block person3" alt="person" /> </div>
                <div className="col-md-9">
                  <p className="m-0 fw500 lh-6">Jubair Nibras</p> <img src={star} className="img-fluid star" alt="star" />
                </div>
              </div>
              <p className="fw400 lh-6 gray2 mt-4 p-fs">“I want to thank Mumara One for making things so much easy. It has helped me a lot to multiply my revenue through more sales. Today, I can save big and plan to invest big. I would highly appreciate the brain behind creating this tool with the amazing features and options that drive straight to success. I wish Mumara One good luck to bring more ease for the user.” </p>
            </div>
          </div>

        </div>
      </div>
    </div>


  );
}