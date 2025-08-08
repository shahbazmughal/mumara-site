import React from 'react'
import Reveal from '@solid-ui-components/Reveal'
import { Container, Flex, Box } from 'theme-ui'
import ContentText from '@solid-ui-components/ContentText'
import WithDefaultContent from '@solid-ui-blocks/WithDefaultContent'
import {Link} from 'gatsby';
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
      <div className="tab-content">
        <div className="tab-pane fade active show" id="tab2">

          <section id="pricing2" className="pricing bg-white">
            <Reveal effect='fadeInDown'>
              <Box sx={{textAlign: 'center'}}>
                <ContentText content={text} />
              </Box>
            </Reveal>
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
                    <Link to="https://account.mumara.com/signup?pid=57" id="buy" className="btn btn-success btn-sm">Order Now</Link> <Link to="#" id="seeBrDwn" rel="noopener noreferrer" data-toggle="modal" data-target=".fusion-modal.seeBrDwn">See Cost Breakdown</Link>
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section id="table2" className="pricing-table bg-light">

            <div className="container" data-aos="fade-up">
              <div className="row gy-4" data-aos="fade-left">
                <div className="col-md-8 offset-md-2" data-aos="zoom-in" data-aos-delay="100">
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
                    <div className="panel panel-default" id="feature-list">
                      <div className="panel-heading">
                        <h4 id="list-name">Included With Every Plan</h4> </div>
                        <div className="panel-body">
                          <div className="feature-container">
                            <div className="row">
                              <div className="product-feature col-md-4"> <i className="bi bi-check blue"></i>&nbsp;&nbsp;Contact List Management </div>
                              <div className="product-feature col-md-4"> <i className="bi bi-check blue"></i>&nbsp;&nbsp;Suppression Management </div>
                              <div className="product-feature col-md-4"> <i className="bi bi-check blue"></i>&nbsp;&nbsp;Custom Fields </div>
                              <div className="product-feature col-md-4"> <i className="bi bi-check blue"></i>&nbsp;&nbsp;Contacts Management </div>
                              <div className="product-feature col-md-4"> <i className="bi bi-check blue"></i>&nbsp;&nbsp;Bulk Update </div>
                              <div className="product-feature col-md-4"> <i className="bi bi-check blue"></i>&nbsp;&nbsp;Broadcast Editor </div>
                              <div className="product-feature col-md-4"> <i className="bi bi-check blue"></i>&nbsp;&nbsp;Bulk Update </div>
                              <div className="product-feature col-md-4"> <i className="bi bi-check blue"></i>&nbsp;&nbsp;Drip Campaigns </div>
                              <div className="product-feature col-md-4"> <i className="bi bi-check blue"></i>&nbsp;&nbsp;Spintags </div>
                              <div className="product-feature col-md-4"> <i className="bi bi-check blue"></i>&nbsp;&nbsp;Dynamic Content Tags </div>
                              <div className="product-feature col-md-4"> <i className="bi bi-check blue"></i>&nbsp;&nbsp;Future Scheduling </div>
                              <div className="product-feature col-md-4"> <i className="bi bi-check blue"></i>&nbsp;&nbsp;Bounce Processing </div>
                              <div className="product-feature col-md-4"> <i className="bi bi-check blue"></i>&nbsp;&nbsp;Custom Bounce Rules </div>
                              <div className="product-feature col-md-4"> <i className="bi bi-check blue"></i>&nbsp;&nbsp;Sending Domains </div>
                              <div className="product-feature col-md-4"> <i className="bi bi-check blue"></i>&nbsp;&nbsp;Custom Tracking Domains </div>
                              <div className="product-feature col-md-4"> <i className="bi bi-check blue"></i>&nbsp;&nbsp;Domain Keys Authentication </div>
                              <div className="product-feature col-md-4"> <i className="bi bi-check blue"></i>&nbsp;&nbsp;Shared/Dedicated IPs </div>
                              <div className="product-feature col-md-4"> <i className="bi bi-check blue"></i>&nbsp;&nbsp;Segmentation </div>
                              <div className="product-feature col-md-4"> <i className="bi bi-check blue"></i>&nbsp;&nbsp;Triggers </div>
                              <div className="product-feature col-md-4"> <i className="bi bi-check blue"></i>&nbsp;&nbsp;Web Forms </div>
                              <div className="product-feature col-md-4"> <i className="bi bi-check blue"></i>&nbsp;&nbsp;Spam Processing </div>
                              <div className="product-feature col-md-4"> <i className="bi bi-check blue"></i>&nbsp;&nbsp;Bounce Processing </div>
                              <div className="product-feature col-md-4"> <i className="bi bi-check blue"></i>&nbsp;&nbsp;Custom Headers </div>
                              <div className="product-feature col-md-4"> <i className="bi bi-check blue"></i>&nbsp;&nbsp;Geo Tracking </div>
                              <div className="product-feature col-md-4"> <i className="bi bi-check blue"></i>&nbsp;&nbsp;Advanced Statistics </div>
                              <div className="product-feature col-md-4"> <i className="bi bi-check blue"></i>&nbsp;&nbsp;Split Tests </div>
                              <div className="product-feature col-md-4"> <i className="bi bi-check blue"></i>&nbsp;&nbsp;Community Support </div>
                              <div className="product-feature col-md-4"> <i className="bi bi-check blue"></i>&nbsp;&nbsp;Support Desk </div>
                              <div className="product-feature col-md-4"> <i className="bi bi-check blue"></i>&nbsp;&nbsp;Restful API </div>
                            </div>
                          </div>
                        </div>
                    </div>
                    </div>
                  </div>
                </div>
              </div>
          </section>

        </div>
      </div>
  </div>
)

export default WithDefaultContent(PriceBlock01)
