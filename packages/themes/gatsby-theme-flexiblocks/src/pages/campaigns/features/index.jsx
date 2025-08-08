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
import Features from '@solid-ui-blocks/Smsplus/FeaturesBlock02'
import CallToAction from '@solid-ui-blocks/CallToAction'
import Menu from '@solid-ui-blocks/Menu'
import theme from './_theme'
import styles from './_styles'
import './innerpage.css'
//import './campfeature.css'

const IndexPage = props => {
  const { allBlockContent } = props.data
  const content = normalizeBlockContentNodes(allBlockContent?.nodes)

  return (
    <Layout theme={theme} {...props} xs={styles.body}>
      <div className="innerpage-main">
      <Seo title='Email Tools | Mumara Campaigns Features' description="Discover powerful features of Mumara Campaigns. From automation to analytics, explore tools that streamline your email marketing and boost engagement." keywords="email marketing features,email list management,contact management,smart segments,email tools" image="https://post.mumara.com/images/campaign-features.png" image2="https://post.mumara.com/images/campaign-features.png" canonical="https://www.mumara.com/campaigns/features/" favicon="https://www.mumara.com/favicon.ico" />
        
        <Menu content={content['header']} />
        {/* Blocks */}
        <div className="subheader-block">
          <SubHeader content={content['subheader_campaign']} menuJustify='space-between' />
        </div>
        <Container className="innerpage-heroblock" variant='full' sx={styles.heroContainer}>
          <Divider space='1' />
          <Hero content={content['hero']} />
          <Divider space='3' />
        </Container>
        <Container variant='full' sx={styles.featuresContainer}>
          <Features content={content['features']} />
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
  query featuresBlockContent {
    allBlockContent(
      filter: { page: { in: ["campaigns/features", "shared"] } }
    ) {
      nodes {
        ...BlockContent
      }
    }
  }
`
export default IndexPage
