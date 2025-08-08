import React from "react";
import newsletter_amico_g1 from './images/Newsletter-amico-g1.svg';
import bg36 from './images/bg36.png';

import "./section36.css";
export default function Section36() {
  return (
    <div className="one-section one-section-36" style={{ backgroundImage: `url(${bg36})` }}>
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <img
              src={newsletter_amico_g1} alt="Newsletter_amico_g1"
              className="img-fluid d-block mx-auto mt-2 max-w550"
            />
          </div>
          <div className="col-md-6 align-self-center">
            <div className="mt-5 ">
              <h2 className="fw500 lh-5 text-black ">
                Catch Up on Some <span className="heading">More Features</span>
              </h2>
              <div className="lh-5 fw400 text-blackish mt-4 text-left">
                <div className="list-overflow-green14">
                  <div className="circle"><svg width="34" height="34" viewBox="0 0 24 24" className="circle-color"><path d="M12,2C6.486,2,2,6.486,2,12s4.486,10,10,10s10-4.486,10-10S17.514,2,12,2z M12,20c-4.411,0-8-3.589-8-8s3.589-8,8-8 s8,3.589,8,8S16.411,20,12,20z"></path><path d="M9.999 13.587L7.7 11.292 6.288 12.708 10.001 16.413 16.707 9.707 15.293 8.293z"></path></svg></div>
                  <p>
                    <b>Order dedicated IPs</b> just available for you without sharing them with anyone.
                  </p>
                </div>
                <div className="list-overflow-green14">
                  <div className="circle"><svg width="34" height="34" viewBox="0 0 24 24" className="circle-color"><path d="M12,2C6.486,2,2,6.486,2,12s4.486,10,10,10s10-4.486,10-10S17.514,2,12,2z M12,20c-4.411,0-8-3.589-8-8s3.589-8,8-8 s8,3.589,8,8S16.411,20,12,20z"></path><path d="M9.999 13.587L7.7 11.292 6.288 12.708 10.001 16.413 16.707 9.707 15.293 8.293z"></path></svg></div>
                  <p>
                    Create <b>Dedicate Pools</b> to generate new <b>SMTP bridges</b>.
                  </p>
                </div>
                <div className="list-overflow-green14">
                  <div className="circle"><svg width="34" height="34" viewBox="0 0 24 24" className="circle-color"><path d="M12,2C6.486,2,2,6.486,2,12s4.486,10,10,10s10-4.486,10-10S17.514,2,12,2z M12,20c-4.411,0-8-3.589-8-8s3.589-8,8-8 s8,3.589,8,8S16.411,20,12,20z"></path><path d="M9.999 13.587L7.7 11.292 6.288 12.708 10.001 16.413 16.707 9.707 15.293 8.293z"></path></svg></div>
                  <p>
                    Don’t let anyone spoil your <b>IP reputation</b> - use it the way you want.
                  </p>
                </div>
                <div className="list-overflow-green14">
                  <div className="circle"><svg width="34" height="34" viewBox="0 0 24 24" className="circle-color"><path d="M12,2C6.486,2,2,6.486,2,12s4.486,10,10,10s10-4.486,10-10S17.514,2,12,2z M12,20c-4.411,0-8-3.589-8-8s3.589-8,8-8 s8,3.589,8,8S16.411,20,12,20z"></path><path d="M9.999 13.587L7.7 11.292 6.288 12.708 10.001 16.413 16.707 9.707 15.293 8.293z"></path></svg></div>
                  <p>
                    Generate an <b>API token</b> to connect <b>Mumara One</b> with any third-party application or your website.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}