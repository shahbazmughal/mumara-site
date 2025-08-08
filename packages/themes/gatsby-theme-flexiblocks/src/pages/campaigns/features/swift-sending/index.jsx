import React from 'react'
import { graphql } from 'gatsby'
import { Container } from 'theme-ui'
import Layout from '@solid-ui-layout/Layout'
import Seo from '@solid-ui-components/Seo'
import Divider from '@solid-ui-components/Divider'
import SubHeader from '@solid-ui-blocks/SubHeader/SubHeader'
import Footer from '@solid-ui-blocks/Footer/Block01'
import { normalizeBlockContentNodes } from '@blocks-helpers'
import Main from '@solid-ui-blocks/SEO/Main'
import Base from '@solid-ui-blocks/SEO/Base'
import Hero from '@solid-ui-blocks/InnerPage/HeroBlock02'
import Menu from '@solid-ui-blocks/Menu'
import FeatureLeft from '@solid-ui-blocks/InnerPage/FeatureLeft'
import FeatureRight from '@solid-ui-blocks/InnerPage/FeatureRight'
import Services from '@solid-ui-blocks/InnerPage/FeaturesBlock05'
import CallToAction from '@solid-ui-blocks/CallToAction'
import theme from './_theme'
import styles from './_styles'
import './innerpage.css'

const campFeaturesSwiftSending = props => {
  const { allBlockContent } = props.data
  const content = normalizeBlockContentNodes(allBlockContent?.nodes)

  return (
    <Layout theme={theme} {...props} xs={styles.body}>
      <div className="innerpage-main">
      <Seo title='Swift Sending | Mumara Campaigns' description="Boost your email campaigns with Mumara's Swift Sending. Ensure fast, reliable delivery and improved engagement. Try it now!" keywords="Swift sending, rapid delivery, email acceleration, fast email delivery, optimized infrastructure, advanced delivery algorithms, email campaign speed, inbox delivery, engagement optimization, Mumara Campaigns." canonical="https://www.mumara.com/campaigns/features/swift-sending/" favicon="https://www.mumara.com/favicon.ico" />
        
        {/* <Header content={content['header']} /> */}
        <Menu content={content['header']} />
        {/* Blocks */}
        <div className="subheader-block">
          <SubHeader content={content['subheader_campaign']} menuJustify='space-between' />
        </div>
        <Container className="innerpage-heroblock" variant='full' sx={styles.heroContainer}>
          <Hero content={content['hero']} />
          <Divider space='5' />
        </Container>
        <div id="sending-domains" className="innerpage-section bg-white img-right">
          <FeatureLeft content={content['features1']} />
        </div>
        <div id="tracking-domains" className="innerpage-section bg-light img-left">
          <FeatureRight content={content['features2']} />
        </div>
        <div id="sending-nodes" className="innerpage-section bg-white img-right">
          <FeatureLeft content={content['features3']} />
        </div>
        <div id="speed" className="innerpage-section bg-light img-left">
          <FeatureRight content={content['features4']} />
        </div>
        <div id="multithreading" className="innerpage-section bg-white img-right">
          <FeatureLeft content={content['features5']} />
        </div>
        <div id="sending-node" className="innerpage-section bg-light img-left">
          <Services content={content['featuresmore']} />
        </div>
        
      <CallToAction bg="success" content="Ready to Get Started with Mumara Campaigns" btname="Buy Now" link="/campaigns/pricing/" />
        <Footer content={content['footer']} />
        <Main />
        <Base />
      </div>
    </Layout>
  )
}

export const query = graphql`
  query campFeaturesSwiftSendingBlockContent {
    allBlockContent(
      filter: { page: { in: ["campaigns/features/swift-sending", "shared"] } }
    ) {
      nodes {
        ...BlockContent
      }
    }
  }
`
export default campFeaturesSwiftSending
