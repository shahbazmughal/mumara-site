import React, {useState} from 'react'
import Reveal from '@solid-ui-components/Reveal'
import { Container, Flex, Box } from 'theme-ui'
import ContentText from '@solid-ui-components/ContentText'
import Divider from '@solid-ui-components/Divider'
import WithDefaultContent from '@solid-ui-blocks/WithDefaultContent'
import { Helmet } from "react-helmet"
import PriceBlock02 from '../PriceBlock02/PriceBlock02'
import NewsLetterPricing from './NewsLetterPricing'
import TransactionalPricing from './TransactionalPricing'
// import Faq from '../FaqBlock01/index'
// import FaqBlock02 from '../FaqBlock02/index'


function htmlDecode(input) {
  var doc = new DOMParser().parseFromString(input, "text/html");
  return doc.documentElement.textContent;
}

const PriceBlock01 = ({ content: { text, buttons, form, images, html } }) => {

  const [state, setState] = useState({
    tab3: " active show",
    tab4: " ",
    tabs_selectedTab1: " tabs_selectedTab",
    tabs_selectedTab2: ""
  });

  const handleChange = name => event => {
    setState({ ...state, [name]: event.target.value, });
  };

  const selectTab =(e)=> {
    var id = e.target.dataset.id;
    // console.log(id);
    if(id == 3) {
      setState({...state, tab3: " active show", tab4: " ", tabs_selectedTab1: " tabs_selectedTab",tabs_selectedTab2: " "});
    } else {
      setState({...state, tab3: " ", tab4: " active show", tabs_selectedTab1: " ",tabs_selectedTab2: " tabs_selectedTab"});
    }
  }

  return (
    <>
      <div className="pt-40 feature-block-01 one-pricing-feature-block" id="mainPricing">
          <div className="tab-content">
            <div className="tab-pane fade active show" id="tabs-one">

              <div id="pricing2" className="pricing">
                <Reveal effect='fadeInDown'>
                  <Box sx={{textAlign: 'center'}}>
                    <ContentText content={text} />
                  </Box>
                </Reveal>
              </div>

              <Box className="pt-40 feature-block-01 tabsmain one-tabs">

                <div className="css-eqz5y2">
                  <div className="react-tabs css-n8ejw4" data-tabs="true">
                      <ul className="tabs_tabList" role="tablist">
                        <li className={"tabs_tab "+state.tabs_selectedTab1} role="tab" id="react-tabs-newsletter" data-id="3" onClick={selectTab}>
                          For Marketers <small className="onePtabSmall">(Send Newsletters)</small>
                          <span data-id="3" onClick={selectTab}>Send engaging newsletters to your customers</span>
                        </li>
                        <li className={"tabs_tab"+state.tabs_selectedTab2} role="tab" id="react-tabs-transactional" data-id="4" onClick={selectTab}>
                          For Developers <small className="onePtabSmall">(Integrate with your App)</small>
                          <span data-id="4" onClick={selectTab}>Send from your App/Website with our API/SMTP</span>
                      </li>
                      </ul>
                  </div>
                </div>
              </Box>

            </div>
          </div>
      </div>

      <Box className="tabscontent one" id="one-ptabs">
        <div className="tab-content">
            <div className={"newsletter-blk tab-pane fade "+state.tab3} id="tab3">
              <NewsLetterPricing />
              {/* <Divider space='5' />
              <Container variant='narrow'>
                <Faq />
              </Container> */}
            </div>
            <div className={"transactional-blk tab-pane fade "+state.tab4} id="tab4">
              <TransactionalPricing />
              {/* <Divider space='5' />
              <Container variant='narrow'>
                <FaqBlock02 />
              </Container> */}
            </div>
        </div>
      </Box>
    </>
  )
}

export default WithDefaultContent(PriceBlock01)
