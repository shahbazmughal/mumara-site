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

const FeatureBlock12 = ({ content: { text, buttons, form, images, html } }) => (
  <div className="pt-40 pb-20 features4" id="features12">
    <div className="container">
      
      <h2 className=" text-40 text-yellow text-center pt-80">Email Journey Starts with Few Simple Clicks</h2>
      <h2 className="  text-28 text-white text-center pb-20 latolight">Create, Send and Scale effective Email Marketing Campaigns</h2>
      <div className="row pt-50 pb-40">
        <div className="col-md-6 col-md-offset-3">
          <div className="cta-box text-center pb-0 pt-40 p-20">
            
            <div className="pb-0">
              <div className="css-12g6cok">
                <Link to="./#orderarea" title="ORDER NOW" className="button-group-button level-1 css-12g6cok css-12hibeq text-block">
                  ORDER NOW
                </Link>
              </div>
              <div className="pt-20">
                <img src="/static/cc-cta-c64d4edc2508cb948022d099e3a8b623.png" alt="Credit Card Payment" />
              </div>
            </div>  

          </div>
        </div>
      </div>
    </div>
  </div>
)

export default WithDefaultContent(FeatureBlock12)
