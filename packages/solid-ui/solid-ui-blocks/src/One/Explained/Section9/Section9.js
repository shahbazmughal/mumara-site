import React from "react";
import emailcamp from "./images/shared_ip.svg";
import emailcamp2 from "./images/dedicated_ip.png";
import emailcap from "./images/dedicated_pool.png";
import bg9 from "./images/bg-9.jpg";
import check from "./images/check22.png";
import "./section9.css";

export default function Section9() {
  return (
    <div className="one-section one-section-9 " style={{ backgroundImage: `url(${bg9})` }}>
      <div className="container">
        <div className="row">
          <div className="col-md-12 col-sm-12 text-center">
            <h1 className=" fw400 lh-4 text-white"> Get Your <span className="fw700 text-yellow">Flexible IP Deployment</span> Options</h1>
            <p className="mx-auto  fw400 lh-5 text-white max-w800 mt-2 mb-5">Mumara One offers you flexible IP deployment options. You can use <span className="text-yellow">shared IPs</span> or <span className="text-yellow">dedicated IP addresses</span> as per your needs.</p>
          </div>

          <div className="col-md-12 ">
            <div className="mx-auto section9-box my-padding-section-top my-padding-section-bottom mt-4">
              <div className="col-lg-12 col-md-12 inner-section section-even">
                <div className="row align-items-center">
                  <div className="col-md-6 col-sm-12 margint10">
                    <div className="fs-36 lh-4 fw400  text-white">
                      <span className="fw600 text-yellow">Shared IP</span> Addresses
                    </div>
                    <div className=" fw400 text-white">
                      <p>  Shared IP addresses are just like public highways. Sometimes, you go everywhere, but other times due to the actions of others, the process gets slower and even halts your progress. It can be a great option for you if you want to send your messages instantly with established IPs. For shared IPs, you do not need to pay any extra costs, it will be just like the buy and drive kind of solution but deliverability can be affected due to many users.</p>
                    </div>
                  </div>
                  <div className="col-md-6 col-sm-12">
                    <img src={emailcamp} className="img-fluid" alt="img-sec9" />
                  </div>
                </div>
              </div>
              <div className="col-lg-12 col-md-12 inner-section section-odd">
                <div className="row align-items-center">
                  <div className="col-md-6 col-sm-12  order-md-2    ">
                    <div className="fs-36 lh-4 fw400  text-white ">
                      <span className="fw600 text-yellow"> Dedicated IP</span> Addresses
                    </div>
                    <div className="lh-6 fw400 black margint10 pr-md-4">
                      <div className="fw400 text-white pr-md-3">
                        <p>A dedicated IP address is like a private highway, designed for you to give you full access to drive or fly freely. If you want to build and manage your own reputation, you can avail of a dedicated IP to use your Mumara One account. If you are looking forward to sending a significant amount of emails, we suggest you use dedicated IPs to land directly in the mailbox.</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6 col-sm-12 order-md-1">
                    <img src={emailcamp2} className="img-fluid" alt="img-sec9" />
                  </div>
                </div>
              </div>
              <div className="col-lg-12 col-md-12 inner-section section-even">
                <div className="row align-items-center">
                  <div className="col-md-6 col-sm-12">
                    <div className="fs-36 lh-4 fw400  text-white">
                      <span className="fw600 text-yellow">Dedicated </span>Pools
                    </div>
                    <div className="fw400 text-white margint10 pr-md-3">
                      <p> You can also create a dedicated pool of multiple dedicated IPs to use according to your requirements. Floating IPs in the Dedicated Pools will help you send transactional and marketing emails separately by using a different IP. If you are a high-volume sender, create a Bridge on Mumara One to send your transactional emails using an SMTP or API. A dedicated IP Pool will allow you to group your dedicated IP addresses to get more control over the deliverability.</p>
                    </div>
                  </div>
                  <div className="col-md-6 col-sm-12">
                    <img src={emailcap} className="img-fluid" alt="img-sec9" />
                  </div>
                </div>
              </div>
              <div className="col-lg-12 col-md-12 inner-section-2 section-odd">
                <div className="row align-items-center">
                  <div className="col-md-6 col-sm-12 order-md-2">
                    <div className="blk-list text-align-left">
                      <div className="fs-36 lh-5 fw400 text-white ">Order
                        <span className="fw600 text-yellow"> Dedicated IPs</span>
                      </div>
                      <div className="lh-4 fw400 text-white margint10 pr-md-4 ">
                        <div className="list-overflow-green14">
                          <img src={check} className="bulletlistgreen14 img-responsive" alt="img-sec9" />
                          <p className=" list-paddingx">
                            Log in to your <span className="text-yellow">Mumara One </span> account.
                          </p>
                        </div>
                        <div className="list-overflow-green14">
                          <img src={check} className="bulletlistgreen14 img-responsive" alt="img-sec9" />
                          <p className=" list-paddingx">
                            Navigate to Setup, and click then <span className="text-yellow">Dedicated IPs </span>.
                          </p>
                        </div>
                        <div className="list-overflow-green14">
                          <img src={check} className="bulletlistgreen14 img-responsive" alt="img-sec9" />
                          <p className=" list-paddingx">
                            Now click  <span className="text-yellow">Order IPs</span>.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6 col-sm-12">
                    <div className="blk-list text-align-left">
                      <div className="fs-36 lh-5 fw400  text-white">
                        Dedicated <span className="fw600 text-yellow">Pools</span>
                      </div>
                      <div className="lh-4 fw400 text-white mb5 margint10 pr-md-4">
                        <div className="list-overflow-green14">
                          <img src={check} className="bulletlistgreen14 img-responsive" alt="img-sec9" />
                          <p className=" list-paddingx">
                            Log in to your <span className="text-yellow">Mumara One </span> account.
                          </p>
                        </div>
                        <div className="list-overflow-green14">
                          <img src={check} className="bulletlistgreen14 img-responsive" alt="img-sec9" />
                          <p className=" list-paddingx">
                            Navigate to Transactional&gt;<span className="text-yellow">Create a Bridge</span>.
                          </p>
                        </div>
                        <div className="list-overflow-green14">
                          <img src={check} className="bulletlistgreen14 img-responsive" alt="img-sec9" />
                          <p className=" list-paddingx">
                            Give a name to your <span className="text-yellow">dedicated pool</span>, select a <span className="text-yellow">pool</span> and click Create.
                          </p>
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
    </div>
  );
}
