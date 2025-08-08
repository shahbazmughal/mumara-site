import React from 'react'
import Reveal from '@solid-ui-components/Reveal'
import ContentButtons from '@solid-ui-components/ContentButtons'
import WithDefaultContent from '@solid-ui-blocks/WithDefaultContent'
import {Link} from 'gatsby';


function htmlDecode(input) {
  var doc = new DOMParser().parseFromString(input, "text/html");
  return doc.documentElement.textContent;
}

const FeatureBlock02 = ({ content: { text, buttons, form, images, html } }) => (
  <div className="steps-section section-steps" id="features2">
    <div className="et_pb_top_inside_divider"></div>
    <div className="container">
      
      <h2 className=" text-42 text-white text-center mb-20 pt-40 fw200"> How Easy is it to START with? </h2>
      <div className="text-left text-white text-24 text-center para1">
          Getting started with Mumara Campaigns is as easy as just thinking about it sending your campaigns ;-)
      </div>

      <div className="row">
        <div className="col-md-2 mb-20">
          <div className="steps-num text-white text-center">1</div>
        </div>
        <div className="col-md-10 mb-20">
          <div className="step-content text-white text-left">
              Decide whether you want to host it on your own server (Mumara Self-hosted) or you want to host it with us (Mumara Cloud)
              <p>If you want to host it with us, you’ll get it auto-installed on your selected server plan and our system will automatically send you your Mumara access details. This process takes less than 5 minutes for completion before you can start using it.</p>
              <p>If you plan to host it on your server, you’ll be allocated an instant License and able to download Mumara right after the purchase. Mumara installation guide and methods can be <Link to="https://docs.mumara.com/Campaigns/Getting-Started/Installation-Guide" title="found here">found here.</Link></p>
          </div>
        </div>
      </div>

      <div className="row">
          <div className="col-md-2 mb-20">
              <div className="steps-num text-white text-center">2</div>
          </div>
          <div className="col-md-10 mb-20">
              <div className="step-content text-white text-left">
                  Add a Sending Node
                  <p>A Sending node is an MTA that carries your Email to the recipient’s mailbox. You can connect to any of the supported ESP accounts or any SMTP.</p>
              </div>
          </div>
      </div>

      <div className="row">
          <div className="col-md-2 mb-20">
              <div className="steps-num text-white text-center">3</div>
          </div>
          <div className="col-md-10 mb-80">
              <div className="step-content text-white text-left">
                  Start Sending
                  <p>Decide whether you want to host it on your own server (Mumara Self-hosted) or you want to host it with us (Mumara Cloud)</p>
              </div>
          </div>
      </div>

    </div>
  </div>
)

export default WithDefaultContent(FeatureBlock02)
