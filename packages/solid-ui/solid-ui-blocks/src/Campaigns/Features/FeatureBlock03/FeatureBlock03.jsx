import React from 'react'
import Reveal from '@solid-ui-components/Reveal'
import ContentButtons from '@solid-ui-components/ContentButtons'
import WithDefaultContent from '@solid-ui-blocks/WithDefaultContent'


function htmlDecode(input) {
  var doc = new DOMParser().parseFromString(input, "text/html");
  return doc.documentElement.textContent;
}

const FeatureBlock03 = ({ content: { text, buttons, form, images, html } }) => (
  <div className="pt-40 pb-20  bg-white" id="features3">
    <div className="container">
      
      <h2 className=" text-42 text-center h1g mb-20 fw200">Mumara is the Smartest Ever Autoresponder</h2>
      <div className="row nb50">
        <div className="col-md-12">
            <p className="text-24 latolight text-center fw200">Drive Buyers to your Business &amp; Ensure <b>a high ROI of $38 for Every $1 spent</b>, Get your hands-on with One of the Most Influential channels of Marketing Automation and Customer Communication. Ever imagined to have a platform that will decide itself what variation of the email content should be sent for best results or correctly starts a series of emails to the qualified leads or decide as per the recipient’s engagement type.</p>
        </div>
      </div>

      <h2 className=" text-42 text-center h1g mb-20 fw200">A Small Case Study</h2>
      <div className="row nb50">
        <div className="col-md-6">
          <img src="/static/marketer-2c44cd2a34ab4fe8e6767c263b86b686.jpg" className="img-responsive" alt="A Small Case Study" />
        </div>
        <div className="col-md-6">
            <p className="text-20 latolight fw200">During the tenure of the past decade, we have learned that automation in marketing is the future of business success. Any business without marketing is a never existing business and any marketing without automation never brings great ROI (return on investment). Every business is always looking for expansion and reaching the new clients every day via varied channels of marketing e.g newspaper ads, radio, tv ads, banners, flyers, emails, and more. Sending an email to the targeted customer has the maximum potential of converting a lead into a sale. Ever imagined why bigger brands are always following up through emails and showing targeted offers? Because it WORKS!!! Automation in marketing is highly effective and brings maximum sales for the least cost.</p>
        </div>
      </div>
      <div className="row nb50">
        <div className="col-md-6">
            <p className="text-20 latolight fw200">In Mumara Campaigns, we have highly focused on automation with a wide range of criteria that can turn your shop into a superstore and small business into a large business by staying delegate with your clients. Thinking how? If a customer comes to your clothing shop and buys a blue color collar shirt so most likely he likes the color blue and mostly wears the collar shirts. So if ever you get a chance to send him a promotion, the two keys that can convert another sale are 1- blue color, 2- and a collared shirt, so if you show him a brown hoodie then you most probably be losing a new sale. With Mumara, you can add the correct feeds of his likes and dislikes. Another possible variation could be the day of week e.g if he came on Sunday then most probably he goes shopping on Sundays, so better to send him a promotion on Sunday morning or closer to Sunday i.e Saturday. It was one example of the thousands of variations. Whatever business you are in, you need targeted marketing and Mumara is a standalone solution to your needs.</p>
        </div>
        <div className="col-md-6">
          <img src="/static/roi-ed71e468951873d4d8954bcf61d420fa.jpg" className="img-responsive" style={{paddingTop:50}} alt="A Small Case Study" />
        </div>
      </div>
        

    </div>
  </div>
)

export default WithDefaultContent(FeatureBlock03)
