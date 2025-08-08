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

const IndexPage = props => {
  const { allBlockContent } = props.data
  const content = normalizeBlockContentNodes(allBlockContent?.nodes)

  return (
    <Layout theme={theme} {...props} xs={styles.body}>
      <div className="innerpage-main">
      <Seo title='Number Validation | Guaranteed SMS Delivery | SMS' description="Use integrated number validation feature to check mobile number validity, maintain a list of deliverable contacts only and ensure guaranteed SMS delivery." keywords="check mobile number,number validation,phone verify lookup,number lookup,guaranteed sms delivery,verify phone number online" image="https://post.mumara.com/images/sms-features-validation.png" image2="https://post.mumara.com/images/sms-features-validation.png" canonical="https://www.mumara.com/sms/sms-features/validation/" />
        
        <Menu content={content['header']} />
        {/* Blocks */}
        <div className="subheader-block">
          <SubHeader content={content['subheader_sms']} menuJustify='space-between' />
        </div>
        <Container className="innerpage-heroblock sms-inner" variant='full' sx={styles.heroContainer}>
          <Hero content={content['hero']} />
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
        
      <CallToAction bg="success" content="Ready to Get Started with Mumara SMS" btname="Buy Now" link="/sms/pricing/" />
        <Footer content={content['footer']} />
        <Main />
        <Base />
      </div>
    </Layout>
  )
}

export const query = graphql`
  query smsFeaturesPage5BlockContent {
    allBlockContent(
      filter: { page: { in: ["sms/features/validation", "shared"] } }
    ) {
      nodes {
        ...BlockContent
      }
    }
  }
`
export default IndexPage
