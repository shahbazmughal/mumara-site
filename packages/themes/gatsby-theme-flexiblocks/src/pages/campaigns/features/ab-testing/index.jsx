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
import Services from '@solid-ui-blocks/InnerPage/FeaturesBlock05'
import CallToAction from '@solid-ui-blocks/CallToAction'
import Menu from '@solid-ui-blocks/Menu'
import theme from './_theme'
import styles from './_styles'
import './innerpage.css'

const campFeaturesAbTesting = props => {
  const { allBlockContent } = props.data
  const content = normalizeBlockContentNodes(allBlockContent?.nodes)

  return (
    <Layout theme={theme} {...props} xs={styles.body}>
      <div className="innerpage-main">
      <Seo title='A/B Testing: Optimize Campaign Performance | Mumara Campaigns' description="Enhance your email marketing with Mumara's A/B Testing. Test subject lines, content, and more to find what works best. Improve engagement and conversions today!" keywords="A/B testing, split testing, campaign optimization, email performance, data-driven marketing, email variations, subject line testing, content testing, audience engagement, marketing experimentation." image="https://post.mumara.com/images/campaigns-pricing.png" image2="https://post.mumara.com/images/campaigns-pricing.png" canonical="https://www.mumara.com/campaigns/features/ab-testing/" favicon="https://www.mumara.com/favicon.ico" />

        {/* <Header content={content['header']} /> */}
        <Menu content={content['header']} />

        <div className="subheader-block">
          <SubHeader content={content['subheader_campaign']} menuJustify='space-between' />
        </div>
        
        <Container className="innerpage-heroblock" variant='full' sx={styles.heroContainer}>
          <Hero content={content['hero']} />
          <Divider space='5' />
        </Container>
        <div id="ab-testing" className="innerpage-section bg-white img-right">
          <FeatureLeft content={content['features1']} />
        </div>
        <div className="innerpage-section bg-light img-left">
          <FeatureRight content={content['features2']} />
        </div>
        <div className="innerpage-section bg-white img-right">
          <FeatureLeft content={content['features3']} />
        </div>
        <div className="innerpage-section bg-light img-left">
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
  query campFeaturesAbTestingBlockContent {
    allBlockContent(
      filter: { page: { in: ["campaigns/features/ab-testing", "shared"] } }
    ) {
      nodes {
        ...BlockContent
      }
    }
  }
`
export default campFeaturesAbTesting
