import React from 'react'
import { graphql } from 'gatsby'
import Layout from '@solid-ui-layout/Layout'
import Seo from '@solid-ui-components/Seo'
import Divider from '@solid-ui-components/Divider'
import SubHeader from '@solid-ui-blocks/SubHeader/SubHeader'
import Footer from '@solid-ui-blocks/Footer/Block01'
import Team from '@solid-ui-blocks/Contacts/HeroBlock03'
import { normalizeBlockContentNodes } from '@blocks-helpers'
import RequestDemo from '@solid-ui-blocks/Campaigns/RequestDemo/RequestDemo'
import CallToAction from '@solid-ui-blocks/CallToAction'
import Menu from '@solid-ui-blocks/Menu'
import Main from '@solid-ui-blocks/SEO/Main'
import Base from '@solid-ui-blocks/SEO/Base'
import RequestDemoSeo from '@solid-ui-blocks/Campaigns/RequestDemo/RequestDemoSeo'
import theme from './_theme'
import './camp-demopage.css'

const IndexPage = props => {
  const { allBlockContent } = props.data
  const content = normalizeBlockContentNodes(allBlockContent?.nodes)

  return (
    <Layout theme={theme} {...props}>
      <Seo title='Effortless Email Marketing: Grow Sales & Engagement' description="Craft stunning emails, automate workflows, and watch sales soar with Mumara's user-friendly email marketing platform. Request a free demo and see the magic for yourself!" image="https://post.mumara.com/images/campaigns-request-demo.png" image2="https://post.mumara.com/images/campaigns-request-demo.png" canonical="https://www.mumara.com/campaigns/request-demo/" favicon="https://www.mumara.com/favicon.ico" />
      <div className="camp-demopage">
        
        {/* <Header content={content['header']} /> */}
        <Menu content={content['header']} />
        <div className="subheader-block">
          <SubHeader content={content['subheader_campaign']} menuJustify='space-between' />
        </div>
        <Team content={content['team']} />
        <Divider space='5' />
        <RequestDemo  />
        <Divider space='5' />
        <CallToAction bg="success" content="Ready to Get Started with Mumara Campaigns" btname="Buy Now" link="/campaigns/pricing/" />
        <Footer content={content['footer']} />
        <Main />
        <Base />
        <RequestDemoSeo />
      </div>
    </Layout>
  )
}

export const query = graphql`
  query CampaignsReqDemoBlockContent {
    allBlockContent(filter: { page: { in: ["campaigns/requestdemo", "shared"] } }) {
      nodes {
        ...BlockContent
      }
    }
  }
`
export default IndexPage
