import React from 'react'
import Reveal from '@solid-ui-components/Reveal'
import ContentButtons from '@solid-ui-components/ContentButtons'
import WithDefaultContent from '@solid-ui-blocks/WithDefaultContent'


function htmlDecode(input) {
  var doc = new DOMParser().parseFromString(input, "text/html");
  return doc.documentElement.textContent;
}

const FeatureBlock16 = ({ content: { text, buttons, form, images, html } }) => (
  <div className="" id="features16">
    <img src="/static/top-curve-6e901132d8d9975f4e4201da180e9343.png" alt='Cost-Effective Email Marketing' className="img-responsive center-block width-100p mtn-20" />
    <div className="pt-60 pb-100 feature7">
      <div className="container">
        <h2 className="text-42 text-center text-yellow">Cost-Effective Email Marketing</h2>
        <div className="row">
          <div className="col-md-10 col-md-offset-1">
            <p className="text-22 latolight text-white">
              <ul className="items-lists">
                  <li>Instantly Deployed or Instantly Downloaded</li>
                  <li>Send without the Fear of Running out of Email Credits</li>
                  <li>Connect with an Email Relay of Your Choice</li>
                  <li>Offers a Complete White Labeled Solution by adding Primary and Sending Domains to Send Emails From</li>
                  <li>Thousands of Features Included</li>
              </ul>
            </p>
          </div>  
        </div>
      </div>
    </div>
  </div>
)

export default WithDefaultContent(FeatureBlock16)
