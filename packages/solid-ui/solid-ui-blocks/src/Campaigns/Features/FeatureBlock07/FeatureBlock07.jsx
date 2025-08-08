import React from 'react'
import Reveal from '@solid-ui-components/Reveal'
import ContentButtons from '@solid-ui-components/ContentButtons'
import WithDefaultContent from '@solid-ui-blocks/WithDefaultContent'


function htmlDecode(input) {
  var doc = new DOMParser().parseFromString(input, "text/html");
  return doc.documentElement.textContent;
}

const FeatureBlock07 = ({ content: { text, buttons, form, images, html } }) => (
  <div className="pt-60 pb-100 feature7" id="features7">
    <div className="container">
      
      <h2 className="text-42 text-center text-yellow">Get your Offer Delivered to Engage <b>Right Audience</b> at the <b>Right Time</b></h2>
      
      <div className="row">
        <div className="col-md-10 col-md-offset-1">
          <p className="text-22 latolight text-white">
            <ul className="items-lists">
                <li>75% Growth in Revenue using Seamless Tools for Workflow Automation</li>
                <li>26% More Open Rates by just Personalizing the Subject Line of Your Email. Relevancy has an Extra Edge overall Generic and Less Targeted Marketing Techniques. Campaigns+ Offers Limitless Possibilities of Content Personalization.</li>
                <li>47% More Purchases with an Effective Lead Nurturing Mechanism In-Place</li>
            </ul>
          </p>
        </div>  
      </div>

    </div>
  </div>
)

export default WithDefaultContent(FeatureBlock07)
