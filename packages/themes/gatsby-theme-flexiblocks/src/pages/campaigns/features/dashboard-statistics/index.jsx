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
import Features from '@solid-ui-blocks/Smsplus/FeaturesBlock02'
import ContentImages from '@solid-ui-components/ContentImages'
import CallToAction from '@solid-ui-blocks/CallToAction'
import Menu from '@solid-ui-blocks/Menu'
import theme from './_theme'
import styles from './_styles'
import './innerpage.css'

const styled = {
  image: {
    margin:`-50px auto 0px`,
    display: `table`
  }, 
  image2: {
    margin:`0px auto 0px`,
    display: `table`
  }
}

const campFeaturesDashboardStatistics = props => {
  const { allBlockContent } = props.data
  const content = normalizeBlockContentNodes(allBlockContent?.nodes)

  return (
    <Layout theme={theme} {...props} xs={styles.body}>
      <div className="innerpage-main">
      <Seo title='Insights for Informed Decisions | Mumara Dashboard Statistics' description="Gain insights into your email campaigns with Mumara Campaigns' dashboard statistics. Track performance, analyze data, and optimize your marketing strategy." keywords="Mumara Dashboard, statistics, insights, analytics, data-driven decisions" canonical="https://www.mumara.com/campaigns/features/dashboard-statistics/" favicon="https://www.mumara.com/favicon.ico" />
        
        {/* <Header content={content['header']} /> */}
        <Menu content={content['header']} />
        {/* Blocks */}
        <div className="subheader-block">
          <SubHeader content={content['subheader_campaign']} menuJustify='space-between' />
        </div>
        <Container className="innerpage-heroblock" variant='full' sx={styles.heroContainer}>
          <Hero content={content['hero']} />
          <Divider space='5' />
          <div className="innerpage-section bg-light pt-0 pb-0">
            <ContentImages
              content={content['images']}
              sx={styled.image}
              imageEffect='fadeIn'
            />
            <Divider space='4' />
          </div>
        </Container>
        <div id="live-events" className="innerpage-section bg-white img-right">
          <FeatureLeft content={content['features1']} />
        </div>
        <div id="email-graph" className="innerpage-section bg-light img-left">
          <FeatureRight content={content['features2']} />
        </div>
        <div id="recipient" className="innerpage-section bg-white img-right">
          <FeatureLeft content={content['features3']} />
        </div>
        <div id="top-domains" className="innerpage-section bg-light img-left">
          <FeatureRight content={content['features4']} />
        </div>
        <Divider space='5' />
        <Container id="top-devices" variant='full' sx={styles.featuresContainer}>
          <Features id="" content={content['features']} />
        </Container>
        <Divider space='5' />
        <Divider space='5' />
        
      <CallToAction bg="success" content="Ready to Get Started with Mumara Campaigns" btname="Buy Now" link="/campaigns/pricing/" />
        <Footer content={content['footer']} />
        <Main />
        <Base />
      </div>
    </Layout>
  )
}

export const query = graphql`
  query campFeaturesDashboardStatisticsBlockContent {
    allBlockContent(
      filter: { page: { in: ["campaigns/features/dashboard-statistics", "shared"] } }
    ) {
      nodes {
        ...BlockContent
      }
    }
  }
`
export default campFeaturesDashboardStatistics
