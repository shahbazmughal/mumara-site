import React from 'react'
import Reveal from '@solid-ui-components/Reveal'
import ContentButtons from '@solid-ui-components/ContentButtons'
import WithDefaultContent from '@solid-ui-blocks/WithDefaultContent'


function htmlDecode(input) {
  var doc = new DOMParser().parseFromString(input, "text/html");
  return doc.documentElement.textContent;
}

const FeatureBlock20 = ({ content: { text, buttons, form, images, html } }) => (
  <div className="pt-60 pb-100 feature7 section-mitem reporting" id="features20">
    <div className="container">
      
      <h2 className="text-42 text-center text-yellow pt-20">Reporting and Performance Analysis</h2>
      <div className="text-center"><img src="/static/analysis-1e8daaefd673458701ede2f5f5b19180.jpg" className="img-responsive" alt="Mumara Campaigns" /></div>
      <h3 className="text-34 latolight text-white text-center pb-40">
          <span className="text-yellow">Mumara Campaigns</span> offers detailed and valuable information for the sent campaigns that helps you draw a precise analysis.
      </h3>
      
      <div className="row">
        <div className="col-md-10 col-md-offset-1">
          <p className="text-22 latolight text-white">
            <ul className="items-lists">
                <li>Learn the precise location of the emails opened, and clicked. It reveals geographical details such as country, city, region, zip, browser, operating system, etc of the recipients opening your emails.</li>
                <li>Know which domain/ISP (e.g. Hotmail, Gmail) remains most promising in terms of open rate, and which one ranks low in the list to fix the delivery issues.</li>
                <li>Keep yourself updated on how many emails out of the total were successfully relayed, delivered, opened, clicked, or failed.</li>
            </ul>
          </p>
        </div>  
      </div>

    </div>
  </div>
)

export default WithDefaultContent(FeatureBlock20)
