import React, {useState} from 'react'
import WithDefaultContent from '@solid-ui-blocks/WithDefaultContent'
import FeaturePriceBlock from './FeaturePriceBlock'


function htmlDecode(input) {
  var doc = new DOMParser().parseFromString(input, "text/html");
  return doc.documentElement.textContent;
}


const FeatureBlock21 = ({ content: { text, buttons, form, images, html } }) => (
  <div className="pt-40 pb-20 bg-white reviews" id="features21">
    <div className="container">
      
      <h2 className=" text-42 h1g text-center mb-60  pt-20">Learn What Our Clients Say About Us</h2>
      <div className="row">
        
        <div className="col-md-6">
          <img src="/static/review-1-7e61705e79ecf0b09cc9f5eeeb42623b.jpg" className="img-responsive" alt="Review 1" />
        </div>
        <div className="col-md-6">
          <img src="/static/review-2-b5efcf97b7b11eae757427c14b6a078f.jpg" className="img-responsive" alt="Review 2" />
        </div>

      </div>
      <div className="row">

        <div className="col-md-6">
          <img src="/static/review-3-9f5fdda13d95c061088cc398ebc415a5.jpg" className="img-responsive" alt="Review 3" />
        </div>
        <div className="col-md-6">
          <img src="/static/review-4-db50d51a28ef30209bf9b68a99a4d407.jpg" className="img-responsive" alt="Review 4" />
        </div>

      </div>
      <div className="row"> 

        <div className="col-md-6">
          <img src="/static/review-7-1b255eb4abf7b1ee5a50c429b0ab8160.jpg" className="img-responsive" alt="Review 5" />
        </div>
        <div className="col-md-6">
          <img src="/static/review-8-36375cecb418e8ee41507aa36c06aeea.jpg" className="img-responsive" alt="Review 6" />
        </div>
      
      </div>
      <div className="row pb-100">  

        <div className="col-md-6">
          <img src="/static/review-9-ddeed8fe418723de03e3719a189ee5d7.jpg" className="img-responsive" alt="Review 7" />
        </div>
        <div className="col-md-6">
          <img src="/static/review-10-10a3c39815570e4e4990a7f1c1cc3bde.jpg" className="img-responsive" alt="Review 8" />
        </div>

      </div>  
    </div>

    <div className="container" id="orderarea">
      <div className="row pt-40 pb-100 price-block">

        <div className="col-md-12">
          <h2 className=" text-44 text-center h1g mb-0"><span className="w500">Campaigns Connect</span></h2>
          <h3 className=" text-28 text-center h1g mb-60 mt-10">For Yourself or Your Business</h3>
          <FeaturePriceBlock />
        </div>
      </div>
    </div>

  </div>
)

export default WithDefaultContent(FeatureBlock21)
