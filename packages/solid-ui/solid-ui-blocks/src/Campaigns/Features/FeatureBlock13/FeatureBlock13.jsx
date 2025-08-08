import React from 'react'
import Reveal from '@solid-ui-components/Reveal'
import ContentButtons from '@solid-ui-components/ContentButtons'
import WithDefaultContent from '@solid-ui-blocks/WithDefaultContent'


function htmlDecode(input) {
  var doc = new DOMParser().parseFromString(input, "text/html");
  return doc.documentElement.textContent;
}

const FeatureBlock13 = ({ content: { text, buttons, form, images, html } }) => (
  <div className="pt-40 pb-20 optimized-algorithm bg-white" id="features13">
    <div className="container">
      
      <h2 className=" text-42 h1g text-center pt-20">Super Optimized Algorithm to Reach Recipient’s Mailbox</h2>
      <div className="row nb50">
        <div className="col-md-6 text-center">
          <img src="/static/algorithm-9d2ad6ebc98424d1a60d43a3cee49b14.jpg" className="img-responsive" alt="Super Optimized Algorithm" />
        </div>
        <div className="col-md-6">
            <p className="text-24 latolight mt-60 pt-40"><b>RFC 2369</b> standards implementation for the <b>maximum deliverability</b> and the <b>mailbox approach. List-Unsubscribe header implementation</b> for single click unsubscription on mobile devices and other email clients.</p>
        </div>
      </div>       

    </div>
  </div>
)

export default WithDefaultContent(FeatureBlock13)
