import React from 'react'
import { graphql } from 'gatsby'
import { Container } from 'theme-ui'
import Layout from '@solid-ui-layout/Layout'
import Seo from '@solid-ui-components/Seo'
import Divider from '@solid-ui-components/Divider'
import Tabs from '@solid-ui-components/Tabs'
import Hero from '@solid-ui-blocks/Classicesp/HeroBlock01'
import FeatureOne from '@solid-ui-blocks/Classicesp/FeaturesWithPhotoBlock02'
import FeatureTwo from '@solid-ui-blocks/Classicesp/FeaturesWithPhotoBlock05'
import FeatureThree from '@solid-ui-blocks/Classicesp/FeaturesWithPhotoBlock01'
import Footer from '@solid-ui-blocks/Footer/Block01'
import WhyChooseUs from '@solid-ui-blocks/Classicesp/FeaturesBlock04'
import Services from '@solid-ui-blocks/Classicesp/FeaturesBlock05'
import { normalizeBlockContentNodes } from '@blocks-helpers'
import Menu from '@solid-ui-blocks/Menu'
import Main from '@solid-ui-blocks/SEO/Main'
import Base from '@solid-ui-blocks/SEO/Base'
import ClassicEsp from '@solid-ui-blocks/Classicesp/ClassicEsp'
import SubHeader from '@solid-ui-blocks/SubHeader/SubHeader'
import CallToAction from '@solid-ui-blocks/CallToAction'
import theme from './_theme'
import styles from './_styles'
import './classic-esp-page.css'

const IndexPage = props => {
  const { allBlockContent } = props.data
  const content = normalizeBlockContentNodes(allBlockContent?.nodes)

  return (
    <Layout theme={theme} {...props}>
      <Seo title='Software for Email Service Providers' description="Email service providers can have the Mumara ESP installed on their webserver, can configure it with all required resources to offer email services to its clients." image="https://post.mumara.com/images/mumara-classicesp.png" image2="https://post.mumara.com/images/mumara-classicesp.png" canonical="https://www.mumara.com/classic-esp/" favicon="https://www.mumara.com/favicon.ico" />
      {/* Blocks */}
      <div className="classic-esp-main">
        {/* <Header className="menu-light" content={content['header-light']} menuJustify='space-between' /> */}
        <Menu className="menu-light" content={content['header']} menuJustify='space-between' />
        <div className="subheader-block">
          <SubHeader content={content['subheader_classic_esp']} menuJustify='space-between' />
        </div>
        <Container variant='full' sx={styles.heroContainer}>
          <Divider space='2' />
          <Hero content={content['hero']} reverse />
        </Container>
        <Divider space='6' />
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
        <Services content={content['services']} />
        <Divider space='5' />
        
      <CallToAction bg="success" content="Ready to Get Started with Mumara ClassicESP" btname="Buy Now" link="/classic-esp/pricing/" />
        <Footer content={content['footer']} />
        <Main />
        <Base />
        <ClassicEsp />
      </div>
    </Layout>
  )
}

export const query = graphql`
  query classicespBlockContent {
    allBlockContent(filter: { page: { in: ["classic-esp", "shared"] } }) {
      nodes {
        ...BlockContent
      }
    }
  }
`
export default IndexPage
