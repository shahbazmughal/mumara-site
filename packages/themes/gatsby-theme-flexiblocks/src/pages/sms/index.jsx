import React from 'react'
import { graphql } from 'gatsby'
import { Container } from 'theme-ui'
import Layout from '@solid-ui-layout/Layout'
import Seo from '@solid-ui-components/Seo'
import Divider from '@solid-ui-components/Divider'
import SubHeader from '@solid-ui-blocks/SubHeader/SubHeader'
import Header from '@solid-ui-blocks/Sms/HeaderBlock01'
import Footer from '@solid-ui-blocks/Footer/Block01'
import Hero from '@solid-ui-blocks/Sms/HeroBlock01'
import FeatureTabOne from '@solid-ui-blocks/Sms/FeaturesWithPhotoBlock05'
import FeatureTabTwo from '@solid-ui-blocks/Sms/FeaturesWithPhotoBlock01'
import FeatureTabThree from '@solid-ui-blocks/Sms/FeaturesWithPhotoBlock07'
import Faq from '@solid-ui-blocks/Sms/FaqBlock02'
import WhyChooseUs from '@solid-ui-blocks/Sms/FeaturesBlock04'
import { normalizeBlockContentNodes } from '@blocks-helpers'
import CallToAction from '@solid-ui-blocks/CallToAction'
import Menu from '@solid-ui-blocks/Menu'
import Main from '@solid-ui-blocks/SEO/Main'
import Base from '@solid-ui-blocks/SEO/Base'
import SmsSeo from '@solid-ui-blocks/Sms/SmsSeo'
import Tabs from '@solid-ui-components/Tabs'
import theme from './_theme'
import styles from './_styles'
import "./sms-page.css"

const IndexPage = props => {
  const { allBlockContent } = props.data
  const content = normalizeBlockContentNodes(allBlockContent?.nodes)

  function myFunction() {
    var x = document.getElementById("___gatsby");
    var y = x.getElementsByTagName("*");
    var i;
    for (i = 0; i < y.length; i++) {
      y[i].style = "opacity:1";
    }
  }
  // setTimeout(function() {
  //  //myFunction()
  // }, 2000);

  return (
    <Layout theme={theme} {...props}>
      <Seo title='SMS Marketing and Beyond' description="Create engaging SMS marketing campaigns and get your text read within seconds of delivery. You can connect to your customers of 200 plus destinations." image="https://post.mumara.com/images/mumara-sms.png" image2="https://post.mumara.com/images/mumara-sms.png" canonical="https://www.mumara.com/sms/" favicon="https://www.mumara.com/favicon.ico" />
      {/* Blocks */}
      <div className="sms-page">
        {/* <div className="subheader-block">
          <SubHeader content={content['subheader_sms']} menuJustify='space-between' />
        </div> */}
        {/* <Header content={content['header']} /> */}
        <Menu content={content['header']} />

        <Hero content={content['hero']} reverse className="m-sms-hero" />
        <Divider space='5' />
        <WhyChooseUs content={content['why-choose-us']} />
        <Divider space='4' />
        <Container variant='wide' sx={styles.tabsContainer}>
          <Tabs space={4} variant='pill'>
            <FeatureTabOne content={content['feature-tab-one']} />
            <FeatureTabTwo content={content['feature-tab-two']} reverse />
            <FeatureTabThree content={content['feature-tab-three']} />
          </Tabs>
        </Container>
        <Divider space='5' />
        <Faq content={content['faq']} />
        <Divider space='5' />
        <Divider space='5' />
        
      <CallToAction bg="success" content="Ready to Get Started with Mumara SMS" btname="Buy Now" link="/sms/pricing/" />
        <Footer content={content['footer']} />

        <Main />
        <Base />
        <SmsSeo />
      </div>
    </Layout>
  )
}

export const query = graphql`
  query smsBlockContent {
    allBlockContent(filter: { page: { in: ["sms", "shared"] } }) {
      nodes {
        ...BlockContent
      }
    }
  }
`
export default IndexPage
