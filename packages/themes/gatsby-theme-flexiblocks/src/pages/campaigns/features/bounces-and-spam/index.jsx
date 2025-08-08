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
import FeatureLeft from '@solid-ui-blocks/InnerPage/FeatureLeft'
import FeatureRight from '@solid-ui-blocks/InnerPage/FeatureRight'
import CallToAction from '@solid-ui-blocks/CallToAction'
import Menu from '@solid-ui-blocks/Menu'
import theme from './_theme'
import styles from './_styles'
import './innerpage.css'

const campFeaturesBouncesSpam = props => {
  const { allBlockContent } = props.data
  const content = normalizeBlockContentNodes(allBlockContent?.nodes)

  return (
    <Layout theme={theme} {...props} xs={styles.body}>
      <div className="innerpage-main">
      <Seo title="Optimize Deliverability | Mumara Bounce & Email Management" description="Manage email bounces and spam effectively with Mumara Campaigns. Ensure high deliverability, clean your email list, and improve campaign performance." keywords="contact management system,custom contacts,contact details for email,update contact details,import contacts" image="Mumara Bounce, email management, deliverability, bounce handling, optimization" canonical="https://www.mumara.com/campaigns/features/bounces-and-spam/" favicon="https://www.mumara.com/favicon.ico" />
        
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
        <div id="bounce-rules" className="innerpage-section bg-white img-right">
          <FeatureLeft content={content['features1']} />
        </div>
        <div className="innerpage-section bg-light img-left">
          <FeatureRight content={content['features2']} />
        </div>
        <div id="imap-pop"  className="innerpage-section bg-white img-right">
          <FeatureLeft content={content['features3']} />
        </div>
        <div id="fbl"className="innerpage-section bg-light img-left">
          <FeatureRight content={content['features4']} />
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
  query campFeaturesBouncesSpamBlockContent {
    allBlockContent(
      filter: { page: { in: ["campaigns/features/bounces-and-spam", "shared"] } }
    ) {
      nodes {
        ...BlockContent
      }
    }
  }
`
export default campFeaturesBouncesSpam
