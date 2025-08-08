import React from 'react'
import Reveal from '@solid-ui-components/Reveal'
import ContentButtons from '@solid-ui-components/ContentButtons'
import WithDefaultContent from '@solid-ui-blocks/WithDefaultContent'


function htmlDecode(input) {
  var doc = new DOMParser().parseFromString(input, "text/html");
  return doc.documentElement.textContent;
}

const FeatureBlock17 = ({ content: { text, buttons, form, images, html } }) => (
  <div className="pt-40 pb-20 bg-white" id="features17">
    <div className="container">
      
      <h2 className="text-42 h1g text-center mb-60  mt-60">More Insight on Some Key Features</h2>

      <div className="row nb50">
        <div className="col-md-6 text-center">
          <img src="/static/drip-configure-883b1e3ba20e9cd829e037f9d4d4fe34.jpg" alt="Super Optimized Algorithm" className="img-responsive" />
        </div>
        <div className="col-md-6">
          <h2 className=" text-28 h1g pt20">The Dripping of Your Campaigns was never that Easy to Configure</h2>
          <p className="text-22 latolight pt-20">Tools to help you make most of your existing database and increase the sales pipeline, while not forgetting to encourage and engage current customers for upselling, repeat purchase, and cross-sell.</p>
        </div>
      </div>

      <div className="clr pb-20 mb-20 mt-20"></div>

      <div className="row nb50">
        <div className="col-md-6">
          <h2 className=" text-28 h1g pt-60">Taking Automation to Next Level</h2>
          <p className="text-22 latolight pt-20">A good range of actions is available at your disposal to set up automatically triggered actions.</p>
        </div>
        <div className="col-md-6 text-center">
          <img src="/static/taking-automation-fb68d35438508a039ca6be2e6ef1a7d3.jpg" alt="Super Optimized Algorithm" className="img-responsive" />
        </div>
      </div>    

      <div className="clr pb-20 mb-20 mt-20"></div>

        <div className="row mb-100">
          <div className="col-md-6 text-center">
            <img src="/static/target-email-b6f6a6823d63a968f0546c77c367ac4b.jpg" alt="Super Optimized Algorithm" className="img-responsive" />
          </div>
          <div className="col-md-6">
            <h2 className=" text-28 h1g pt20">Send Emails to Intelligently Targeted Groups</h2>
            <p className="text-22 latolight pt-20">Variety of filters available at your disposal to slice the list and create contact groups of a similar sort. These better-targeted groups of contacts will help to significantly improve customer engagement and message response rate</p>
          </div>
        </div>

    </div>
  </div>
)

export default WithDefaultContent(FeatureBlock17)
