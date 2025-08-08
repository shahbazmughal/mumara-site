import React from 'react'
import Reveal from '@solid-ui-components/Reveal'
import ContentButtons from '@solid-ui-components/ContentButtons'
import WithDefaultContent from '@solid-ui-blocks/WithDefaultContent'


function htmlDecode(input) {
  var doc = new DOMParser().parseFromString(input, "text/html");
  return doc.documentElement.textContent;
}

const FeatureBlock18 = ({ content: { text, buttons, form, images, html } }) => (
  <div className="" id="features18">
    <img src="/static/top-lcurve-e7d550a8d2954e08073d14c32bdb6aae.png" className="img-responsive center-block width-100p mtn-20" alt="Builder to Create Amazing &amp; Aesthetically striking HTML Rich Emails" />
    <div className="pt-60 pb-100 bg-lviolet builders">
      <div className="container">
        
        <div className="row">
          <h2 className=" text-42 text-center h1g mb-40 col-md-12">Use Built-In <span className="w500">Campaign Builder</span> to Create Amazing &amp; Aesthetically striking HTML Rich Emails</h2>
        </div>  
        <div className="row">
          <div className="col-md-12 text-center">
              <img src="/static/builder-279809512603b25e264513f6b60b7c54.jpg" alt="Campaign Builder" />
          </div>
        </div>       

      </div>
    </div>
    <img src="/static/top-lcurve-e7d550a8d2954e08073d14c32bdb6aae.png" alt="Builder to Create Amazing &amp; Aesthetically striking HTML Rich Emails"  className="img-responsive center-block width-100p mtn-20 transfer-y" />
  </div>
)

export default WithDefaultContent(FeatureBlock18)
