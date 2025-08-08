import React from 'react'
import Reveal from '@solid-ui-components/Reveal'
import ContentButtons from '@solid-ui-components/ContentButtons'
import WithDefaultContent from '@solid-ui-blocks/WithDefaultContent'


function htmlDecode(input) {
  var doc = new DOMParser().parseFromString(input, "text/html");
  return doc.documentElement.textContent;
}

const FeatureBlock11 = ({ content: { text, buttons, form, images, html } }) => (
  <div className="pt-60 pb-100 bg-lviolet" id="features8">
    <div className="container">
      
      <h2 className="  text-42 h1g text-center">Cohesive Process of Automation</h2>
      <div className="row nb50">
        <div className="col-md-6 pt-40">
            <p className="text-24 latolight higher-level pt-20 mt-80">Marketing automation campaigns that are triggered off by the prospect’s activity/actions perform better than your marketing timeline.</p>
            <p className="text-22 latolight">Integrated processes loaded with endless possibilities to <b>automate customer journey and lead nurturing campaigns.</b></p>
            <p className="text-22 latolight">It helps you explore the potential of automation to <b>target the right audience based on purchase history, behavior, and preferences.</b></p>
        </div>
        <div className="col-md-6 text-center">
          <img src="/static/sales-video-f1cf21f1d52b58c8082becabfbfcc57f.jpg" className="img-responsive" alt="Higher Level of Email Engagement" />
        </div>
      </div>       

    </div>
  </div>
)

export default WithDefaultContent(FeatureBlock11)
