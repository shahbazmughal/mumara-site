import React from 'react'
import Reveal from '@solid-ui-components/Reveal'
import ContentButtons from '@solid-ui-components/ContentButtons'
import WithDefaultContent from '@solid-ui-blocks/WithDefaultContent'


function htmlDecode(input) {
  var doc = new DOMParser().parseFromString(input, "text/html");
  return doc.documentElement.textContent;
}

const FeatureBlock06 = ({ content: { text, buttons, form, images, html } }) => (
  <div className="pt-60 pb-100 bg-lviolet" id="features6">
    <div className="container">
      
      <h2 className="  text-42 h1g text-center mb-40">Trigger Based Emailing</h2>
      <div className="row nb50">
        <div className="col-md-6 text-center">
          <img src="/static/img-svc-section-3d-7b220e2941c5b3dd33fd191a54c21047.jpg" className="img-responsive" alt="A Small Case Study" />
        </div>
        <div className="col-md-6">
            <p className="text-20 latolight fw200">“Mumara Campaigns” has great options for triggering. A trigger is an action to be taken on the occurrence of an event. An event may have a wide range of filters and the action to be performed can be any e.g. an event can be having a new client from New Jersey or a client who opened an email or a client who shopped less than $100 or a client with the last name McCarthy or a client who bought blue and red or a client who didn’t buy anything or even a client that is from new jersey and opened a recent email from you and shop less than $1000. So it’s an unlimited number of variations that you can set. And an action could be, starting a series of autoresponders on the above-mentioned criteria and so on.</p>
        </div>
      </div>       

    </div>
  </div>
)

export default WithDefaultContent(FeatureBlock06)
