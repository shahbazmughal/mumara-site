import React from 'react'
import { graphql } from 'gatsby'
import Layout from '@solid-ui-layout/Layout'
import Seo from '@solid-ui-components/Seo'
import Divider from '@solid-ui-components/Divider'
import Menu from '@solid-ui-blocks/Menu'
import SubHeader from '@solid-ui-blocks/SubHeader/SubHeader'
/************  BEGIN SECTION  ************/
import Section1 from '@solid-ui-blocks/One/Explained/Section1'
import Section2 from '@solid-ui-blocks/One/Explained/Section2'
import Section3 from '@solid-ui-blocks/One/Explained/Section3'
import Section4 from '@solid-ui-blocks/One/Explained/Section4'
import Section5 from '@solid-ui-blocks/One/Explained/Section5'
// import Section6 from '@solid-ui-blocks/One/Explained/Section6'
import Section7 from '@solid-ui-blocks/One/Explained/Section7'
import Section8 from '@solid-ui-blocks/One/Explained/Section8'
import Section9 from '@solid-ui-blocks/One/Explained/Section9'
import Section10 from '@solid-ui-blocks/One/Explained/Section10'
import Section11 from '@solid-ui-blocks/One/Explained/Section11'
import Section12 from '@solid-ui-blocks/One/Explained/Section12'
import Section13 from '@solid-ui-blocks/One/Explained/Section13'
import Section14 from '@solid-ui-blocks/One/Explained/Section14'
import Section15 from '@solid-ui-blocks/One/Explained/Section15'
import Section16 from '@solid-ui-blocks/One/Explained/Section16'
import Section17 from '@solid-ui-blocks/One/Explained/Section17'
import Section18 from '@solid-ui-blocks/One/Explained/Section18'
import Section19 from '@solid-ui-blocks/One/Explained/Section19'
import Section20 from '@solid-ui-blocks/One/Explained/Section20'
import Section21 from '@solid-ui-blocks/One/Explained/Section21'
import Section22 from '@solid-ui-blocks/One/Explained/Section22'
import Section23 from '@solid-ui-blocks/One/Explained/Section23'
import Section24 from '@solid-ui-blocks/One/Explained/Section24'
import Section25 from '@solid-ui-blocks/One/Explained/Section25'
import Section26 from '@solid-ui-blocks/One/Explained/Section26'
import Section27 from '@solid-ui-blocks/One/Explained/Section27'
// import Section28 from '@solid-ui-blocks/One/Explained/Section28'
import Section29 from '@solid-ui-blocks/One/Explained/Section29'
import Section30 from '@solid-ui-blocks/One/Explained/Section30'
import Section31 from '@solid-ui-blocks/One/Explained/Section31'
import Section32 from '@solid-ui-blocks/One/Explained/Section32'
import Section33 from '@solid-ui-blocks/One/Explained/Section33'
import Section34 from '@solid-ui-blocks/One/Explained/Section34'
import Section35 from '@solid-ui-blocks/One/Explained/Section35'
import Section36 from '@solid-ui-blocks/One/Explained/Section36'
import Section37 from '@solid-ui-blocks/One/Explained/Section37'
import Section38 from '@solid-ui-blocks/One/Explained/Section38'
import Section40 from '@solid-ui-blocks/One/Explained/Section40'
import Section41 from '@solid-ui-blocks/One/Explained/Section41'
import Section42 from '@solid-ui-blocks/One/Explained/Section42'
import PriceBlock01 from '@solid-ui-blocks/One/Pricing/PriceBlock01'
import Contacts from '@solid-ui-blocks/Contacts/Contacts'
import PriceBlock02 from '@solid-ui-blocks/One/Pricing/PriceBlock02'
import Faq from '@solid-ui-blocks/One/Explained/FaqBlock40'
/************  END SECTION  ************/
import Footer from '@solid-ui-blocks/Footer/Block01'
import { normalizeBlockContentNodes } from '@blocks-helpers'
import Main from '@solid-ui-blocks/SEO/Main'
import Base from '@solid-ui-blocks/SEO/Base'
import theme from './_theme'
import "./fonts/font.css";
import './main.css'


const IndexPage = props => {
  const { allBlockContent } = props.data
  const content = normalizeBlockContentNodes(allBlockContent?.nodes)

  return (
    <Layout theme={theme} {...props}>

      <div className="one-feature one-explained-page">
      <Seo title='Best Email Marketing Tool to Grow your Business | Mumara' description="content= Are you exploring the best email marketing tool? See how Mumara email marketing tool can help grow your business with our best-in-class tools." Keywords="Email marketing, Email marketing automation, email marketing tools, email marketing strategy, Mumara One features" image="https://post.mumara.com/images/one-explained.jpg" image2="https://post.mumara.com/images/one-explained.jpg" canonical="https://www.mumara.com/one/email-marketing-tool/" favicon="https://www.mumara.com/favicon.ico" />

        <Menu content={content['header']} />

        <div className="subheader-block">
          <SubHeader content={content['subheader_one']} menuJustify='space-between' />
        </div>

        <div className="main">
          <Section1 />
          <Section2 />
          <Section3 />
          <Section4 />
          <Section5 />
          {/* <Section6 /> */}
          <Section41 />
          <Section7 />
          <Section8 />
          <Section9 />
          <Section10 />
          <Section11 />
          <Section12 />
          <Section13 />
          <Section14 />
          <Section15 />
          <Section16 />
          <Section17 />
          <Section18 />
          <Section19 />
          <Section20 />
          <Section21 />
          <Section22 />
          <Section23 />
          <Section24 />
          <Section25 />
          <Section26 />
          <Section27 />
          <Section42 />
          {/* <Section28 /> */}
          <Section29 />
          <Section30 />
          <Section31 />
          <Section32 />
          <Section33 />
          <Section34 />
          <Section35 />
          <Section36 />
          <Section37 />
          <Section38 />
          <Section40 />
          <div className="home-one-main op-page" id="oneExpPriceBlk">
            <PriceBlock01 content={content['oneprice']} />
            {/* <Divider space='4' />
            <PriceBlock02 content={content['oneprice']} /> */}
          </div>
          <Divider space='5' />
          <Contacts  />
          <Divider space='5' />
          <Faq content={content['faq']} />
        </div>
        
        <Footer content={content['footer']} />
        <Main />
        <Base />
      </div>

    </Layout>
  )
}

export const query = graphql`
  query oneExplainedBlockContent {
    allBlockContent(
      filter: { page: { in: ["one/explained", "shared"] } }
    ) {
      nodes {
        ...BlockContent
      }
    }
  }
`

export default IndexPage
