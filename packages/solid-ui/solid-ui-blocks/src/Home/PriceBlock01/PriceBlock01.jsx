import React from 'react'
import Reveal from '@solid-ui-components/Reveal'
import {Link} from 'gatsby';
import WithDefaultContent from '@solid-ui-blocks/WithDefaultContent'
import { Helmet } from "react-helmet"


function htmlDecode(input) {
  var doc = new DOMParser().parseFromString(input, "text/html");
  return doc.documentElement.textContent;
}

const PriceBlock01 = ({ content: { text, buttons, form, images, html } }) => (
  <div className="pt-40 pb-60 feature-block-01" id="mainPricing">

      <Helmet>
          {/* <link href="/css/bootstrap.min.css" rel="stylesheet" />
          <link href="/css/bootstrap-icons.css" rel="stylesheet" />
          <link href="/css/mbSlider.css" rel="stylesheet" />
          <link href="/css/style.css" rel="stylesheet" /> */}
      </Helmet>

      <div id="pricing2" className="pricing">
        <div className="container aos-init aos-animate" data-aos="fade-up">
          <div className="row gy-4 step1 row aos-init aos-animate" id="newPriceBlk" data-aos="fade-left">
            <div className="col-md-8 range-block">
              <div id="contactsrow">
                <div className="form-group row">
                  <h3>Choose your plan!</h3>
                  <h5 className="emails12">Automate Your Marketing to the Next Level!</h5>
                  <p><input type="hidden" id="contact11" className="" /></p>
                </div>
              </div>
            </div>
            <div className="col-md-4 base-block">
              <h3 data-fontsize="22" data-lineheight="26.4px" className="fusion-responsive-typography-calculated" style={{fontSize:22, lineHeight: 1.2}}>Your Plan!</h3>
              <h5 data-fontsize="18" data-lineheight="27px" className="fusion-responsive-typography-calculated" style={{fontSize:18, lineHeight: 1.5,minFontSize:18}}>1 - 1,000</h5>
              <p>Test the platform with no commitment</p>
              <p>
                <input type="hidden" id="pp1" value="0.00" />
                <input type="hidden" id="fprice" />
              </p>
              <div className="plan">
                <h5 id="pricemain" data-fontsize="27" data-lineheight="27px" className="fusion-responsive-typography-calculated" style={{fontSize:27, lineHeight: 1}}>$0.00</h5>
                <h5 data-fontsize="18" data-lineheight="27px" className="fusion-responsive-typography-calculated" style={{fontSize:18, lineHeight: 1.5, minFontSize:18}}> / month</h5>
                <p></p>
              </div>
              <p> 
                <Link to="https://account.mumara.com/signup?pid=57" alt="Order Now" id="buy" className="btn btn-success btn-sm">Order Now</Link>
              </p>
            </div>
          </div>
        </div>
      </div>

      <div id="table2" className="pricing-table">
        <div className="container">
          <div className="row gy-4">
            <div className="features row" id="features-blk">
              <div className="panel panel-product panel-default mb-4" id="product1">
                <div className="panel-heading">
                  <h3 id="product-name">1 - 1,000</h3>
                  <div className=" product-price"><span><i>BUNDLE DEAL!</i></span>&nbsp;&nbsp; <span className="price" id="panel-head-price"><strong>$0.00 USD </strong></span>
                  </div>
                </div>
                <div className="panel-body text-left">
                  <div className="feature-container">
                    <div className="row">
                      <div className="product-feature col-md-6 mb-4"> <span className="pull-left">Contacts</span> <span className="feature-value pull-right"><strong id="Contacts">1000</strong></span>
                        <div className="progress">
                          <div className="progress-bar progress-bar-success" id="contacts-progress" role="progressbar" aria-valuenow="1" aria-valuemin="0" aria-valuemax="100" style={{width: `1%`}}></div>
                        </div>
                      </div>
                      <div className="product-feature col-md-6 mb-4"> <span className="pull-left">Daily Sending Limit</span> <span className="feature-value pull-right"><strong id="MonthlyEmails">200</strong></span>
                        <div className="progress">
                          <div className="progress-bar progress-bar-success" id="emails-progress" role="progressbar" aria-valuenow="3" aria-valuemin="0" aria-valuemax="100" style={{width:`100%`}}></div>
                        </div>
                      </div>
                      <div className="product-feature col-md-6 mb-4"> <span className="pull-left">Monthly Quota</span> <span className="feature-value pull-right"><strong id="Transactional">6000</strong></span>
                        <div className="progress">
                          <div className="progress-bar progress-bar-success" id="transactional-progress" role="progressbar" aria-valuenow="1" aria-valuemin="0" aria-valuemax="100" style={{width: `0.12%`}}></div>
                        </div>
                      </div>
                      <div className="product-feature col-md-6 mb-4"> <span className="pull-left">Triggers</span> <span className="feature-value pull-right"><strong id="Segments">1</strong></span>
                        <div className="progress">
                          <div className="progress-bar progress-bar-success" id="segments-progress" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" style={{width: `1%`}}></div>
                        </div>
                      </div>

                      <div className="product-feature col-md-6 mb-2"> <span className="pull-left">Transactional Emails</span> <span className="feature-value pull-right"><strong id="Triggers">100</strong></span>
                        <div className="progress">
                          <div className="progress-bar progress-bar-success" id="triggers-progress" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" style={{width: `0.2%`}}></div>
                        </div>
                      </div>

                      <div className="product-feature col-md-6 mb-2"> <span className="pull-left">Maximum Dedicated IPs</span> <span className="feature-value pull-right"><strong id="IP">0</strong></span>
                        <div className="progress">
                          <div className="progress-bar progress-bar-success" id="ip-progress" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" style={{width: `100%`}}></div>
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
)

export default WithDefaultContent(PriceBlock01)
