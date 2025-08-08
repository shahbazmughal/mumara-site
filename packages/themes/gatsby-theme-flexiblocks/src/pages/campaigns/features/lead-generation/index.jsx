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
import Menu from '@solid-ui-blocks/Menu'
import CallToAction from '@solid-ui-blocks/CallToAction'
import theme from './_theme'
import styles from './_styles'
import './innerpage.css'

const campFeaturesLeadGeneration = props => {
  const { allBlockContent } = props.data
  const content = normalizeBlockContentNodes(allBlockContent?.nodes)

  return (
    <Layout theme={theme} {...props} xs={styles.body}>
      <div className="innerpage-main">
      <Seo title='Expert Lead Generation Strategies | Lead Generation' description="Boost your marketing efforts with Mumara Campaigns' lead generation features. Capture, nurture, and convert leads effectively with powerful tools." keywords="lead generation, lead generation strategies, business growth, customer acquisition, lead conversion, sales leads, marketing leads, B2B leads, B2C leads" canonical="https://www.mumara.com/campaigns/features/lead-generation/" favicon="https://www.mumara.com/favicon.ico" />
        
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
        <div className="innerpage-section bg-white img-right">
          <FeatureLeft content={content['features1']} />
        </div>
        <div className="innerpage-section bg-light img-left">
          <FeatureRight content={content['features2']} />
        </div>
        <div className="innerpage-section bg-white img-right">
          <FeatureLeft content={content['features3']} />
        </div>

        <div className="all-tags d-none">contact information, marketing strategy, lead generation strategies, sales team, ready to buy, b2b lead generation, lead generation is the process of attracting, product or service, target audience, potential customers, lead generation tool, marketing team, lead generation works, sales qualified lead, types of leads, interest in your products and services, social media platforms, call to action, content marketing, landing page, lead scoring, lead nurture, lead generation is the process of attracting, blog posts</div>
        
        <CallToAction bg="success" content="Ready to Get Started with Mumara Campaigns" btname="Buy Now" link="/campaigns/pricing/" />
        <Footer content={content['footer']} />
        <Main />
        <Base />
      </div>
    </Layout>
  )
}

export const query = graphql`
  query campFeaturesLeadGenerationBlockContent {
    allBlockContent(
      filter: { page: { in: ["campaigns/features/lead-generation", "shared"] } }
    ) {
      nodes {
        ...BlockContent
      }
    }
  }
`
export default campFeaturesLeadGeneration
