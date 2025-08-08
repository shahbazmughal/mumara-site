import React from 'react'
import check from './images/check.png';
import Get_in_touch from './images/best_performing.jpg';
import rafiki from './images/design_newsletters.jpg';
import './section5.css';

export default function Section5() {
  return (
    <div className="one-section one-section-5 pb-0">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="text-center mb-5">
              <h1 className='max-w800 m-auto fw600'>Start Your <span className="fw800 text-sea-green">Newsletter Strategy</span> with <span className="fw800">Mumara One</span></h1>
            </div>
            <div className="row align-items-center">
              <div className="col-md-6 mt-5">
                <div className='max-w520 m-auto text-left'>
                  <div className="row align-items-center">
                    <div className="d-flex">
                      <div className='game-shape'></div>
                      <h2 className='align-self-center px-3 mt-2'>Inspire Your Readers With the
                        <span className="fw700 text-sea-green"> Best Performing Newsletters</span>
                      </h2>
                    </div>
                  </div>
                  <p className="lh-5 mb-4 mt-3 fs-20 fw400">
                    Determine the goals of your newsletters and use Mumara One to send them whenever you want. Your goals can be varied from informing, inspiring, entertaining, educating, or whatnot, we enable you to do everything with elegance.<span className="fw500"> Connect with your audience and feed them with relevant and interesting content well in time</span>.
                  </p>
                </div>
                <div className="max-w520 m-auto">
                  <div className='row'>
                    <div className="col-md-12 align-self-center">
                      <div className="fw400 text-black">
                        <div className="mb-20 bpn-list">
                          <img
                            src={check} alt="check"
                            className="bulletlistgreen14 img-responsive"
                          />
                          <p>
                            Send your newsletter from Mumara One.
                          </p>
                        </div>
                        <div className="mb-20 bpn-list">
                          <img
                            src={check} alt="check"
                            className="bulletlistgreen14 img-responsive"
                          />
                          <p>
                            Decide your sending frequency.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-12 align-self-center">
                      <div className="fw400 text-black mb-2">
                        <div className="mb-20 bpn-list">
                          <img
                            src={check} alt="check"
                            className="bulletlistgreen14 img-responsive"
                          />
                          <p>
                            Define your audience.
                          </p>
                        </div>
                        <div className="mb-20 bpn-list">
                          <img
                            src={check} alt="check"
                            className="bulletlistgreen14 img-responsive"
                          />
                          <p>
                            Determine what success looks like.
                          </p>
                        </div>

                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <img
                  src={Get_in_touch} alt="Get-in-touch"
                  className="img-fluid d-block mx-auto max-w550"
                />
              </div>
            </div>
          </div>
          <div className="col-md-12">
            <div className="row align-items-center">
              <div className="col-md-6 order-md-2">
                <div className='max-w520 m-auto text-left'>
                  <div className="row align-items-center">
                    <div className="d-flex">
                      <div className='game-shape'></div>
                      <h2 className='align-self-center px-3 mt-2'>
                        <span className="fw800 text-sea-green">Design Your Newsletters </span>the Way Your Readers Demand
                      </h2>
                    </div>
                  </div>
                  <p className="lh-5 mt-3 fs-20 fw400">
                    Once the goal is determined, now is the time to design your email newsletter. Make sure that your newsletter is well-timed, well-designed, and responsive. If that is not compatible with mobile phones, desktops, and other devices alike, you will be on the losing side. Mumara One enables you to create your newsletter by using HTML Editor, or Drag &amp; Drop Builder with an opportunity for Split Testing to determine the best variant.
                  </p>
                </div>
              </div>
              <div className="col-md-6 order-md-1">
                <img
                  src={rafiki} alt="rafiki"
                  className="img-fluid d-block mx-auto max-w550"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
