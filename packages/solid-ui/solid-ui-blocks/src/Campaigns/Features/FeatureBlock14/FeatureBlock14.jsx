import React from 'react'
import Reveal from '@solid-ui-components/Reveal'
import ContentButtons from '@solid-ui-components/ContentButtons'
import WithDefaultContent from '@solid-ui-blocks/WithDefaultContent'


function htmlDecode(input) {
  var doc = new DOMParser().parseFromString(input, "text/html");
  return doc.documentElement.textContent;
}

const FeatureBlock14 = ({ content: { text, buttons, form, images, html } }) => (
  <div className="pt-60 pb-100 bg-lviolet " id="features14">
    <div className="container">
      
      <h2 className="  text-42 h1g text-center">Ensure Email Consent Under GDPR</h2>
      <div className="row">
        <div className="col-md-12">
            <p className="text-24 latolight text-center mb-20 pt-20"><b>Mumara Campaigns</b> has designed to adapt the existing spam laws including the major ones like <b>CAN-Spam</b> or <b>Canadian Anti-Spam Legislation (CASL)</b>, it doesn’t take much to fit in for the provisions of <b>General Data Protection Regulation (GDRP)</b> adopted regulations in EU member states. To comply with the acts, Mumara stores a history of IP address, geolocation, and other additional data based on <b>recipient engagements</b>.</p>
        </div>
      </div>       

    </div>
  </div>
)

export default WithDefaultContent(FeatureBlock14)
