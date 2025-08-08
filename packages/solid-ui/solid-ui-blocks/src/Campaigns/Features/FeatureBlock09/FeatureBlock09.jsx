import React from 'react'
import Reveal from '@solid-ui-components/Reveal'
import ContentButtons from '@solid-ui-components/ContentButtons'
import WithDefaultContent from '@solid-ui-blocks/WithDefaultContent'


function htmlDecode(input) {
  var doc = new DOMParser().parseFromString(input, "text/html");
  return doc.documentElement.textContent;
}

const FeatureBlock09 = ({ content: { text, buttons, form, images, html } }) => (
  <div className="pt-60 pb-100 feature7" id="features9">
    <div className="container">
      
      <h2 className="text-42 text-center text-yellow"><b>As Email Marketing has Entered 2020</b></h2>
      <h3 className="text-32 text-center text-yellow">You too may have come across questions like the following</h3>
      
      <div className="row">
        <div className="col-md-10 col-md-offset-1">
          <p className="text-22 latolight text-white">
            <ul className="items-lists">
                <li>How extensive is the feature list and how long it would effectively sustain?</li>
                <li>What are the options for improved deliverability?</li>
                <li>How convenient it is to set up workflow automation considering the increased conversion rates with email automation?</li>
            </ul>
          </p>
        </div>  
      </div>

    </div>
  </div>
)

export default WithDefaultContent(FeatureBlock09)
