import React from 'react'
import Reveal from '@solid-ui-components/Reveal'
import ContentButtons from '@solid-ui-components/ContentButtons'
import WithDefaultContent from '@solid-ui-blocks/WithDefaultContent'


function htmlDecode(input) {
  var doc = new DOMParser().parseFromString(input, "text/html");
  return doc.documentElement.textContent;
}

const FeatureBlock10 = ({ content: { text, buttons, form, images, html } }) => (
  <div className="pt-60 pb-100 bg-lviolet extent-section" id="features10">
    <div className="container">
      
      <h2 className="wmc text-42 h1g text-center">With Mumara Campaigns</h2>
      <h2 className=" text-24 h1g text-center mt-0 mb-40">You get everything covered to the maximum extent</h2>
      <div className="row">
        <div className="col-md-6 text-center mt--50">
          <img src="/static/templates-910f9f02c2f17583e8306b86a2ab9ff2.png" className="img-responsive" alt="A Small Case Study" />
        </div>
        <div className="col-md-6  pt-80">
            <p className="text-24 latolight mt-30 ">“Mumara Campaigns” features are meticulously designed by closely studying recipient’s behavior and keeping <b>industry trends of predictable</b> years into consideration.</p>
            <p className="text-24 latolight">It is developed to ensure <b>sustainable email delivery</b> with an improved level of email engagement and higher response rates.</p>
        </div>
      </div>       

    </div>
  </div>
)

export default WithDefaultContent(FeatureBlock10)
