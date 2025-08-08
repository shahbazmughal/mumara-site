import React from 'react'
import bg22 from './images/bg22.jpg';
import emailcap from "./images/Emailcapture-rafiki1.svg";
import './section22.css';

export default function Section22() {
  return (
    <div className="one-section one-section-22 pb-5" style={{ backgroundImage: `url(${bg22})` }}>
      <div className="container">
        <div className="row align-center">
          <div className="col-md-6 col-sm-12 mx-auto align-self-center">
            <div className=' text-left'>
            <h1 className="fw500 text-white pt-3"><span className="text-yellow fw700">More Engagements</span><br />Lead to <span className="text-yellow fw700">More Sales</span></h1>
              <p className="fw400 text-white">
                Mumara One comes up with infinite options to explore the potential of your data-driven marketing automation. Sending emails to the targeted segments nurture more leads. While using other mediums of marketing including print, electronic, social media, etc. you will not be able to send the information to the relevant audience. On the other hand, if you use Mumara One, you can send the information that you want to the people of your choice.
              </p>
            </div>
          </div>
          <div className="col-md-6 col-sm-12 align-self-center">
            <img src={emailcap} className="img-fluid d-block max-w500 mx-auto " alt='mumara-img' />
          </div>
        </div>
      </div>
    </div >
  );
}