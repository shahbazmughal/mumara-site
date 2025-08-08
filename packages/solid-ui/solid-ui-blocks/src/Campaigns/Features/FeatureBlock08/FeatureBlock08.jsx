import React from 'react'
import Reveal from '@solid-ui-components/Reveal'
import ContentButtons from '@solid-ui-components/ContentButtons'
import WithDefaultContent from '@solid-ui-blocks/WithDefaultContent'


function htmlDecode(input) {
  var doc = new DOMParser().parseFromString(input, "text/html");
  return doc.documentElement.textContent;
}

const FeatureBlock08 = ({ content: { text, buttons, form, images, html } }) => (
  <div className="pt-60 pb-100 bg-lviolet" id="features8">
    <div className="container">
      
      <h2 className="  text-42 h1g text-center mb-40">Higher Level of Email Engagement</h2>
      <div className="row nb50">
        <div className="col-md-6">
            <p className="text-24 latolight higher-level pt-20 mt-80">Campaigns+ offers limitless options to explore the potential of <b>Sales Process Management, Automation &amp; Data-Driven Marketing</b>, extensive filters to turn unclassified markets into targeted segments, advanced <b>Workflow Automation</b> to nurture leads, and a flexible structure to use it as you want.</p>
        </div>
        <div className="col-md-6 text-center">
          <img src="/static/higher-level-ff17b27b3a30226ce280fe18b0db2739.jpg" className="img-responsive" alt="Higher Level of Email Engagement" />
        </div>
      </div>       

    </div>
  </div>
)

export default WithDefaultContent(FeatureBlock08)
