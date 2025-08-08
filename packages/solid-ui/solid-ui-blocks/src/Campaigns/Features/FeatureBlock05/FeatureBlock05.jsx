import React from 'react'
import Reveal from '@solid-ui-components/Reveal'
import ContentButtons from '@solid-ui-components/ContentButtons'
import WithDefaultContent from '@solid-ui-blocks/WithDefaultContent'


function htmlDecode(input) {
  var doc = new DOMParser().parseFromString(input, "text/html");
  return doc.documentElement.textContent;
}

const FeatureBlock05 = ({ content: { text, buttons, form, images, html } }) => (
  <div className="pt-40 pb-20  bg-white" id="features5">
    <div className="container">
      
      <h2 className="  text-42 h1g text-center mb-40">Mumara is your Sales Agent that Never Sleeps</h2>
      <div className="row nb50">
        <div className="col-md-6">
            <p className="text-20 latolight fw200">During the tenure of the past decade, we have learned that automation Sending a series of Auto-responders is another great reason for revenue multiplication. When the machine is your employee that never sleeps and ready to work 24/7/365, why not fetching out the maximum benefits?</p>
            <p className="text-20 latolight fw200">We have seen that a great percentage of the business owners are not well aware of the technology and all automation stuff so we have built Mumara keeping in view all the difficulties and make the user-interface flow very user-friendly. You set up a series of auto follow up emails to be sent by specific time intervals on chosen criteria or segments.</p>
        </div>
        <div className="col-md-6 text-center">
          <img src="/static/img-svc-section-3e-7fd3c68d7863a9a5444246b1e5675092.jpg" className="img-responsive" alt="A Small Case Study" />
        </div>
      </div>       

    </div>
  </div>
)

export default WithDefaultContent(FeatureBlock05)
