import React, { useEffect } from 'react';
import { navigate } from 'gatsby';
import { graphql } from 'gatsby'
import { Container } from 'theme-ui'
import Layout from '@solid-ui-layout/Layout'
import Seo from '@solid-ui-components/Seo'
import Divider from '@solid-ui-components/Divider'
import Footer from '@solid-ui-blocks/Footer/Block01'
import SubHeader from '@solid-ui-blocks/SubHeader/SubHeader'
import Features from '@solid-ui-blocks/Classicesp/Pricing/Block06'
import { normalizeBlockContentNodes } from '@blocks-helpers'
import CallToAction from '@solid-ui-blocks/CallToAction'
import Menu from '@solid-ui-blocks/Menu'
import Main from '@solid-ui-blocks/SEO/Main'
import Base from '@solid-ui-blocks/SEO/Base'
import Timer from '@solid-ui-components/Timer/index';
import styles from './_styles'
import theme from './_theme'
import './floader.css';

const campFeatures07 = props => {
  const { allBlockContent } = props.data
  const content = normalizeBlockContentNodes(allBlockContent?.nodes)

  return (
    <Layout theme={theme} {...props}>
      <Seo title='Custom Email Headers | Mail Headers' description="Customize the email headers for the better specification of your email and include values apart from standard routing information for the mail headers to carry." keywords="mail routing information,email header values,link unsubscribe header,x-priority header,read receipt to" canonical="https://www.mumara.com/campaigns/features/customize-message-headers/" favicon="https://www.mumara.com/favicon.ico" />
      
      {/* <Header content={content['header']} /> */}
      <Menu content={content['header']} />
       {/* Blocks */}
      <div className="subheader-block">
        <SubHeader content={content['subheader_campaign']} menuJustify='space-between' />
      </div> 
      <Container className="classic-featuresBlk" variant='full' sx={styles.heroContainer}>
        <Divider space='2' />
        <Features content={content['cl_features']} />
        <Timer url="/campaigns/features/" />
        <Divider space='5' />
      </Container>
      <CallToAction bg="success" content="Ready to Get Started with Mumara Campaigns" btname="Buy Now" link="/campaigns/pricing/" />
      <Footer content={content['footer']} />
      <Main />
      <Base />
    </Layout>
  )
}

export const query = graphql`
  query campFeatures07BlockContent {
    allBlockContent(
      filter: { page: { in: ["campaigns/features/customize-message-headers", "shared"] } }
    ) {
      nodes {
        ...BlockContent
      }
    }
  }
`

export default campFeatures07
