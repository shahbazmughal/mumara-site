import React from 'react'
import { graphql } from 'gatsby'
import { Container } from 'theme-ui'
import Layout from '@solid-ui-layout/Layout'
import Seo from '@solid-ui-components/Seo'
import Divider from '@solid-ui-components/Divider'
import Tabs from '@solid-ui-components/Tabs'
import Hero from '@solid-ui-blocks/Smsplus/HeroBlock01'
import FeatureOne from '@solid-ui-blocks/Smsplus/FeaturesWithPhotoBlock02'
import FeatureTwo from '@solid-ui-blocks/Smsplus/FeaturesWithPhotoBlock05'
import FeatureThree from '@solid-ui-blocks/Smsplus/FeaturesWithPhotoBlock01'
import Features from '@solid-ui-blocks/Smsplus/FeaturesBlock02'
import Footer from '@solid-ui-blocks/Footer/Block01'
import WhyChooseUs from '@solid-ui-blocks/Smsplus/FeaturesBlock04'
import Services from '@solid-ui-blocks/Smsplus/FeaturesBlock05'
import Companies from '@solid-ui-blocks/Smsplus/CompaniesBlock01'
import { normalizeBlockContentNodes } from '@blocks-helpers'
import SubHeader from '@solid-ui-blocks/SubHeader/SubHeader'
import Menu from '@solid-ui-blocks/Menu'
import Main from '@solid-ui-blocks/SEO/Main'
import Base from '@solid-ui-blocks/SEO/Base'
import SmsplusSeo from '@solid-ui-blocks/Smsplus/SmsplusSeo'
import CallToAction from '@solid-ui-blocks/CallToAction'
import theme from './_theme'
import styles from './_styles'
import './smsplus-page.css'

const IndexPage = props => {
  const { allBlockContent } = props.data
  const content = normalizeBlockContentNodes(allBlockContent?.nodes)

  return (
    <Layout className="smsplus-page" theme={theme} {...props}>
      <Seo title='Start SMS Service' description="SMSplus is the platform for the ones who are looking to start SMS service. It is combination of features necessary for SMS service providers to operate." image="https://post.mumara.com/images/mumara-smsplus.png" image2="https://post.mumara.com/images/mumara-smsplus.png" canonical="https://www.mumara.com/smsplus/" favicon="https://www.mumara.com/favicon.ico" />
      {/* Blocks */}
        {/* <Header content={content['header-light']} menuJustify='space-between' /> */}

        <Menu className="smstop-header" content={content['header']} menuJustify='space-between' />
        {/* Blocks */}
        <div className="subheader-block">
          <SubHeader content={content['subheader_smsplus']} menuJustify='space-between' />
        </div>
        <Container variant='full' sx={styles.heroContainer} className="smsplus-hero">
          <Hero content={content['hero']} reverse />
        </Container>
        <Divider space='5' />
        <Divider space='5' />
        <Divider space='5' />
        <Divider space='5' />
        <WhyChooseUs content={content['why-choose-us']} />
        <Divider space='4' />
        <Container variant='wide' sx={styles.tabsContainer}>
          <Tabs space={5}>
            <FeatureOne content={content['tab-feature-one']} />
            <FeatureTwo content={content['tab-feature-two']} />
            <FeatureThree content={content['tab-feature-three']} />
          </Tabs>
        </Container>
        <Divider space='5' />
        <Companies content={content['companies']} />
        <Divider space='4' />
        <Container variant='full' sx={styles.featuresContainer}>
          <Features content={content['features']} />
        </Container>
        <Divider space='4' />
        <Services content={content['services']} />
        <Divider space='5' />
        
      <CallToAction bg="success" content="Ready to Get Started with Mumara SMSplus" btname="Buy Now" link="/smsplus/pricing/" />
        <Footer content={content['footer']} />

        <Main />
        <Base />
        <SmsplusSeo />
    </Layout>
  )
}

export const query = graphql`
  query smsplusBlockContent {
    allBlockContent(filter: { page: { in: ["smsplus", "shared"] } }) {
      nodes {
        ...BlockContent
      }
    }
  }
`
export default IndexPage
