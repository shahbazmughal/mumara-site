import React from 'react'
import { graphql } from 'gatsby'
import { Container } from 'theme-ui'
import Layout from '@solid-ui-layout/Layout'
import Seo from '@solid-ui-components/Seo'
import Divider from '@solid-ui-components/Divider'
import Hero from '@solid-ui-blocks/One/HeroBlock02'
import FeatureLeft from '@solid-ui-blocks/One/FeatureLeft'
import FeatureRight from '@solid-ui-blocks/One/FeatureRight'
import FeatureTabOne from '@solid-ui-blocks/One/FeaturesWithPhotoBlock05'
import FeatureTabTwo from '@solid-ui-blocks/One/FeaturesWithPhotoBlock06'
import FeatureTabThree from '@solid-ui-blocks/One/FeaturesWithPhotoBlock01'
import WhyChooseUs from '@solid-ui-blocks/One/FeaturesBlock04'
import GetStarted from '@solid-ui-blocks/One/StatsBlock01'
import Faq from '@solid-ui-blocks/One/FaqBlock01'
import Footer from '@solid-ui-blocks/Footer/Block01'
import { normalizeBlockContentNodes } from '@blocks-helpers'
import CallToAction from '@solid-ui-blocks/CallToAction'
import StatsBlock from '@solid-ui-blocks/One/StatsBlock'
// import Blog2 from '@solid-ui-blocks/Home/BlogBlock02'
import Blog from '@solid-ui-blocks/Home/BlogBlock01'
import SubHeader from '@solid-ui-blocks/SubHeader/SubHeader'
import Buttons from '@solid-ui-blocks/Home/ButtonsBlock01'
import Menu from '@solid-ui-blocks/Menu'
import Main from '@solid-ui-blocks/SEO/Main'
import Base from '@solid-ui-blocks/SEO/Base'
import OneSeo from '@solid-ui-blocks/One/OneSeo'
import theme from './_theme'
import styles from './_styles'
import './oneseomain.css'

const IndexPage = props => {
  const { allBlockContent } = props.data
  const content = normalizeBlockContentNodes(allBlockContent?.nodes)

  return (
    <Layout theme={theme} {...props} className="mumara-one-layout">
      <Seo title='Mumara ONE' description="Discover Mumara ONE, the ultimate email marketing automation tool. Streamline your campaigns, enhance engagement, and boost ROI with advanced features." image2="https://post.mumara.com/images/mumara-one.png" canonical="https://www.mumara.com/one/" favicon="https://www.mumara.com/favicon.ico" />
      {/* Blocks */}
      {/* <Header content={content['header']} /> */}
      <Menu content={content['header']} />
      <div className="subheader-block">
          <SubHeader content={content['subheader_one']} menuJustify='space-between' />
        </div>
      <Container variant='full' sx={styles.heroContainer} className="one-hero">
        <Hero content={content['hero']} />
        <Hero className="btn-sales" content={content['hero-banner']} />
      </Container>
      <Divider space='5' />
      <WhyChooseUs content={content['why-choose-us']} className="m-one-wcu" />
      <Divider space='5' />
      <GetStarted content={content['get-started']} />
      <Divider space='5' />
      <Divider space='5' />
      <FeatureLeft content={content['feature-one']} />
      <Divider space='5' />
      <FeatureRight content={content['feature-two']} />
      <Divider space='5' />
      <FeatureLeft content={content['feature-three']} />
      <Divider space='5' />
      <FeatureRight content={content['feature-four']} />
      <Divider space='5' />
      <FeatureLeft content={content['feature-five']} />
      <Divider space='5' />
      <FeatureRight content={content['feature-six']} />
      <Divider space='5' />
      <FeatureLeft content={content['feature-seven']} />
      <Divider space='5' />
      <FeatureRight content={content['feature-eight']} />
      <Divider space='5' />
      <Divider space='5' />
      <Container variant='wide' sx={styles.featuresContainer} className="m-one-ftabs">
        <FeatureTabOne content={content['feature-tab-one']} reverse />
        <Divider space='5' />
        <Divider space='5' />
        <FeatureTabTwo content={content['feature-tab-two']} />
        <Divider space='5' />
        <Divider space='5' />
        <FeatureTabThree content={content['feature-tab-three']} reverse />
      </Container>
      <Divider space='5' />

      <Divider space='5' />
      <Container variant='narrow' className="m-one-faq">
        <Faq content={content['faq']} />
        <Buttons content={content['buttons']} />
      </Container>
      
      <Divider space='5' />
        <div className="camp-feature00">
          <StatsBlock content={content['get-started2']} />
        </div>
        <Divider space='5' />
      <CallToAction bg="bg-success" content="Ready to Get Started with Mumara One" btname="Get Started" link="/one/pricing/" />
      <Footer content={content['footer']} />

      <Main />
      <Base />
      <OneSeo />

    </Layout>
  )
}

export const query = graphql`
  query oneBlockContent {
    allBlockContent(filter: { page: { in: ["one", "shared"] } }) {
      nodes {
        ...BlockContent
      }
    }
  }
`
export default IndexPage
