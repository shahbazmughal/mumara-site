import React from 'react';
import bg from "./bg-1.jpg";
import './section1.css';

export default function Section1() {
  return (
    <div className="one-section one-section-1 banner" style={{ backgroundImage: `url(${bg})` }}>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-12 text-center">
            <p className="title121 fs-20 mt-3"><span className="attention">ATTENTION:</span> You must be exhausted after spending plenty of vital capital on marketing channels with zero output</p>
            <h1 className="text-white mt-5">Welcome to <span className="text-yellow fw800">Mumara One </span>– The Best Email Marketing Tool</h1>
            <h2 className="text-white mt-4 para1">Are you looking forward to multiplying your income by doing a <span className="text-yellow fw800">little effort?</span>  You can’t  underestimate the importance of <span className="fw800 text-yellow"> Email marketing</span>. Why? You must ask! <span className="text-white fw800"> Email marketing automation </span>gives you a <span className="fw800 text-yellow">$42 return on investment</span>  for every $1 spent</h2>
            <p className="text-white mt-4 max-w950 mx-auto mb-4 fs-22 para2">If you want to increase your <span className="text-yellow">revenues, engagement and communication</span> and want to keep your data safe with you, you are at the right spot.</p>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row justify-content-center mt-4">
          <div className="col-md-12 video-section" align="center">
            {/* <video controls loop autoplay>
              <source src={MumaraVideo} type="video/mp4" height={565} width={1000} controls autoplay muted loop />
            </video> */}
            {/* <Video
              videoSrcURL="https://www.youtube.com/embed/0dhTw9o3Zfk"
              videoTitle="Mumara : Best Email Marketing Software"
              autoplay
              loop
            /> */}
            <iframe src="https://post.mumara.com/video/review.html" width="1000" height="563" frameBorder="0" scrolling="no" allow="autoplay; fullscreen"></iframe>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-12 text-center">
            <div className="col-md-12 title2">
              <p className="text-white fs-22 max-w1100 mx-auto pera3 mb-5">
                <span className="text-yellow">Mumara One</span> gives you full authority to create your lists design your <span className="text-yellow">campaigns</span>, and send them to the users the way you <span className="text-yellow">idealize</span>. We are <span className="text-yellow">operating worldwide</span> with our top-notch services with hundreds of satisfied customers. Mumara One’s experts have brainstormed the idea to provide <span className="text-yellow">easy to use interface </span>that allows users to hit the market in the most sophisticated manner!</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
