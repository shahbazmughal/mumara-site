import React from 'react'
import Reveal from '@solid-ui-components/Reveal'
import ContentButtons from '@solid-ui-components/ContentButtons'
import WithDefaultContent from '@solid-ui-blocks/WithDefaultContent'
import { Container, Flex, Box, css, Input, Button } from 'theme-ui'
import {Link} from 'gatsby';


function htmlDecode(input) {
  var doc = new DOMParser().parseFromString(input, "text/html");
  return doc.documentElement.textContent;
}

const FeatureBlock04 = ({ content: { text, buttons, form, images, html } }) => (
  <div className="pt-40 features4" id="features4">
    <div className="container">
      
      {/* <h2 className="text-40 text-yellow text-center pt-80 pb-40 mt-0 mb20">Why pay GRANDS when it’s the Matter of a Few Bucks</h2> */}
      <div className="row pt-40">
        <div className="col-md-6 col-md-offset-3 pt-80">
          <div className="cta-box text-center pb-0 pt-40">
            
            <h4 className="text-center text-black br-10a p-10a text-18 bg-yellow  best-deal">Best Deal</h4>

            <h2 className="f4whypay">Why pay <span>GRANDS</span> when it’s the Matter of a Few Bucks</h2>
            <div className="cta-thumb"><img src="/static/thumb-56fdfe8799682d6d4e1924d139b6a122.png" width="50" height="50" alt="Why pay GRANDS" /></div>
            
            <h2 className="free-content">Startig from<div className="h1g free-tag">FREE</div>to a fully-featured platform</h2>

            <div className="css-12g6cok">
              <Link to="#orderarea" title="View Plans" className="button-group-button level-1 css-12g6cok css-12hibeq">
                View Plans
              </Link>
            </div>

            {/* <div className="wmemplans">Wanna own perfect email marketing automation platform</div>

            <p className="latolight h1g text-center mb-0 wmjust" style={{fontSize:"20px", fontWeight: 300, color:'white'}}>Just</p>
            <h1 className="h1g  mb-0 text-75 mt-0 w500 wm7">$7<span style={{fontSize:"24px"}}>/mo</span></h1> */}
            <p style={{margin:"10px 20px 20px 20px"}} className="text8 wmmessage">You get your own very perfect email marketing automation platform that works all the time, from capturing leads to converting into sales.
            </p>

            <div className="pb-0">
              <div className="p-20">
                <img src="/static/cc-cta-c64d4edc2508cb948022d099e3a8b623.png" className="img-responsive" alt="Credit Card Payment" />
              </div>
            </div>  


          </div>
        </div>
      </div>
    </div>
  </div>
)

export default WithDefaultContent(FeatureBlock04)
