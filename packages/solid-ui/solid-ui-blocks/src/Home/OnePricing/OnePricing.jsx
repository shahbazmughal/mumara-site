import React from 'react'
import { withPrefix, Link } from "gatsby"
import { Container, Flex, Box } from 'theme-ui'
import Reveal from '@solid-ui-components/Reveal'
import ContentText from '@solid-ui-components/ContentText'
import WithDefaultContent from '@solid-ui-blocks/WithDefaultContent'
import Icon from '@solid-ui-components/ContentIcon'
import { Helmet } from "react-helmet"
import './oneprice.css'


function htmlDecode(input) {
  var doc = new DOMParser().parseFromString(input, "text/html");
  return doc.documentElement.textContent;
}


const OnePricing = ({ content: { text, buttons, form, images, html, icon } }) => (
    <Container as={Reveal}>
        <div className="pt-40 pb-60 feature-block-01" id="homePricing1">
            <Helmet>
                {/* <link href={withPrefix("/css/mbSlider.css")} rel="stylesheet" />
                <link href={withPrefix("/css/style.css")} rel="stylesheet" />
                <link href={withPrefix("/css/mbSlider.css")} rel="stylesheet" />
                <script src={withPrefix("/js/jquery.min.js")}></script>
                <script src={withPrefix("/js/ion.rangeSlider.min.js")}></script>
                <script src={withPrefix("/js/homeprice.js")}></script> */}
            </Helmet>

            <Reveal effect='fadeInDown'>
                <Box sx={{ textAlign: `center` }} className="one-price-text">
                    <ContentText content={text} />
                </Box>
            </Reveal>

            <div className="home-price-main">
                <div id="sliderrow">
                    <h3>Choose your plan!</h3>
                    <h5 className="emails12">Automate Your Marketing to the Next Level!</h5>
                    <div className="input-blk">
                        <input type="text" className="cnt-input" id="contacts-value" placeholder="Subscribers" defaultValue="1000" />
                        <span>Minimum purchase 1,000 contacts</span>
                    </div>
                    <p><input type="hidden" id="contact11" className="" /></p>
                </div>
                <div className="pricerow">
                    <div>
                        <div className="price-input" id="pricemain">
                            $0.00
                        </div>
                        <div className="plan"><h5 className="permonth">monthly</h5></div>
                        <div className="home-one-bblk">
                            <Link className="btn btn-one" to="https://account.mumara.com/signup?pid=57" id="orderone">Order Now</Link>
                        </div>
                    </div>
                </div>
            </div>

            <div className="row home-packages-row">

                <div className="col-md-3 text-center">
                    <div className="home-pkg-blk free active">
                        <div className="hm-price">
                            <Icon content={icon} size='xl' mr='3' mb='3' />
                            <h3>$<span>0</span><small>.00</small></h3>
                            <div className="pkg-name">Free</div>
                            <div className="pkg-range">1-1,000</div>
                        </div>
                    </div>
                </div>
                <div className="col-md-3 text-center">
                    <div className="home-pkg-blk starter">
                        <div className="hm-price">
                            <Icon content={icon} size='xl' mr='3' mb='3' />
                            <h3>$<span>17</span><small>.00</small></h3>
                            <div className="pkg-name">Starter</div>
                            <div className="pkg-range">1,001-5,000</div>
                        </div>
                    </div>
                </div>
                <div className="col-md-3 text-center">
                    <div className="home-pkg-blk economy">
                        <div className="hm-price">
                            <Icon content={icon} size='xl' mr='3' mb='3' />
                            <h3>$<span>67</span><small>.00</small></h3>
                            <div className="pkg-name">Economy</div>
                            <div className="pkg-range">5,001-25,000</div>
                        </div>
                    </div>
                </div>
                <div className="col-md-3 text-center">
                    <div className="home-pkg-blk standard">
                        <div className="hm-price">
                            <Icon content={icon} size='xl' mr='3' mb='3' />
                            <h3>$<span>117</span><small>.00</small></h3>
                            <div className="pkg-name">Standard</div>
                            <div className="pkg-range">25,001-50,000</div>
                        </div>
                    </div>
                </div>

                <div className="col-md-3 text-center">
                    <div className="home-pkg-blk business">
                        <div className="hm-price">
                            <Icon content={icon} size='xl' mr='3' mb='3' />
                            <h3>$<span>397</span><small>.00</small></h3>
                            <div className="pkg-name">Business</div>
                            <div className="pkg-range">50,001-100,000</div>
                        </div>
                    </div>
                </div>
                <div className="col-md-3 text-center">
                    <div className="home-pkg-blk premium">
                        <div className="hm-price">
                            <Icon content={icon} size='xl' mr='3' mb='3' />
                            <h3>$<span>797</span><small>.00</small></h3>
                            <div className="pkg-name">Premium</div>
                            <div className="pkg-range">100,001-250,000</div>
                        </div>
                    </div>
                </div>
                <div className="col-md-3 text-center">
                    <div className="home-pkg-blk enterprise">
                        <div className="hm-price">
                            <Icon content={icon} size='xl' mr='3' mb='3' />
                            <h3>$<span>67</span><small>.00</small></h3>
                            <div className="pkg-name">Enterprise</div>
                            <div className="pkg-range">250,001-1,000,000</div>
                        </div>
                    </div>
                </div>
                <div className="col-md-3 text-center">
                    <div className="home-pkg-blk custom">
                        <div className="hm-price">
                            <Icon content={icon} size='xl' mr='3' mb='3' />
                            <h3>Custom</h3>
                            <div className="pkg-name">Custom</div>
                            <div className="pkg-range">1,000,000+</div>
                        </div>
                    </div>
                </div>

            </div>

        </div>
    </Container>
        
)

export default WithDefaultContent(OnePricing)