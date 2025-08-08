import React from 'react'
import Reveal from '@solid-ui-components/Reveal'
import ContentButtons from '@solid-ui-components/ContentButtons'
import WithDefaultContent from '@solid-ui-blocks/WithDefaultContent'
import FeatureBlock01 from '@solid-ui-blocks/Campaigns/Features/FeatureBlock01'


function htmlDecode(input) {
  var doc = new DOMParser().parseFromString(input, "text/html");
  return doc.documentElement.textContent;
}

const HeroBlock02 = ({ content: { text, buttons, form, images, html } }) => (
  <div sx={{ textAlign: `center` }}>
    <section className="section-1 featured-section section_light">
      <div className="container pt-20 pb-60">
        <Reveal effect='fadeInUp' duration={1}>
          <h2 className="para1">
            <div className="paras">Are you tired of seeing less or zero ROI even after spending a lot of money on your <span className="w400">Email Marketing Techniques?</span></div>
          </h2>
        </Reveal>
        <Reveal effect='fadeInUp' duration={1}>
          <h1 className="text-white text-center text-42 text-case-non para2">
            Setup a correct workflow and send the right email at the right time to the right person with the right <span className="fwbold">CTA</span> (call to action) to get the maximum engagements… <br />Just with <span className="fwbold">Mumara Campaigns!</span>
          </h1>
        </Reveal>
        <Reveal effect='fadeInUp' duration={1}>
          <h4 className="text-white text-center text-28 text-case-non pb-20 mb-40  para2">
            It is not primarily a fault of <span className="head-yellow">your contact list</span> or the broadcasts you send. It is more commonly an issue with your <span className="head-yellow">Emailing platform</span> that doesn’t give you the correct workflow to <span className="head-yellow">design the best campaign</span> to make out of it.
          </h4>
        </Reveal>
        <Reveal effect='fadeInUp' duration={1}>
          <div className="text-center">
            <iframe src="https://a.mumara.com/lp1/50.html" width="1000" height="560" frameBorder="0" scrolling="no" allow="autoplay; fullscreen"></iframe>
          </div>
        </Reveal>
        <h2 className="head-yellow text-center text-32 text-case-none text-gray pt-40 mont para3">To let you know, we haven’t born this year. We have been providing solutions for more than 15 years now and Mumara Campaigns isn’t a dish of a single brain, it’s a cumulative effort of several brains and has gone through the massive clientele.....</h2>
      </div>
      {buttons && (
        <div className="text-center mb-10">
          <Reveal effect='fadeInUp' duration={0.7}>
            <ContentButtons content={buttons} />
          </Reveal>
        </div>
      )}
        <div className="text-center"><img src="/static/cc-bd0b3d96125f33ea7a06a69efba7cc3f.png" alt="Are you tired of seeing less or zero ROI even after spending a lot of money on your Email Marketing Techniques?" className="img-responsive m-auto" /></div>
    </section>
  </div>
)

export default WithDefaultContent(HeroBlock02)
