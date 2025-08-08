import React from 'react'
import { graphql } from 'gatsby'
import { Container } from 'theme-ui'
import Layout from '@solid-ui-layout/Layout'
import Seo from '@solid-ui-components/Seo'
import Divider from '@solid-ui-components/Divider'
import SubHeader from '@solid-ui-blocks/SubHeader/SubHeader'
import Footer from '@solid-ui-blocks/Footer/Block01'
import { normalizeBlockContentNodes } from '@blocks-helpers'
import Menu from '@solid-ui-blocks/Menu'
import Main from '@solid-ui-blocks/SEO/Main'
import Base from '@solid-ui-blocks/SEO/Base'
import Hero from '@solid-ui-blocks/InnerPage/HeroBlock02'
import FeatureLeft from '@solid-ui-blocks/InnerPage/FeatureLeft'
import FeatureRight from '@solid-ui-blocks/InnerPage/FeatureRight'
import GetStarted from '@solid-ui-blocks/One/StatsBlock01'
import Services from '@solid-ui-blocks/InnerPage/FeaturesBlock05'
import Features from '@solid-ui-blocks/Smsplus/FeaturesBlock02'
import ContentImages from '@solid-ui-components/ContentImages'
import CallToAction from '@solid-ui-blocks/CallToAction'
import Buttons from '@solid-ui-blocks/Home/ButtonsBlock01'
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

const pixelsPages = props => {
  const { allBlockContent } = props.data
  const content = normalizeBlockContentNodes(allBlockContent?.nodes)

  return (
    <Layout theme={theme} {...props} xs={styles.body}>
      <div className="innerpage-main pixel-pages">
      <Seo title='Track with Mumara One on Landing Pages, or Website' description="Track and optimize your email marketing with Mumara ONE's pixel tracking features. Gain insights, measure engagement, and improve campaign performance." keywords="tracking pixels, best tracking pixels, tracking pixels in emails, tracking pixels software, Mumara one tracking pixels." image="https://post.mumara.com/images/tracking-pixel.png" image2="https://post.mumara.com/images/tracking-pixel.png" canonical="https://www.mumara.com/one/features/pixels/" favicon="https://www.mumara.com/favicon.ico" />
        {/* Blocks */}
        
        
        {/* <Header content={content['header']} /> */}
        <Menu content={content['header']} />

        <div className="subheader-block">
          <SubHeader content={content['subheader_one']} menuJustify='space-between' />
        </div>

        <Container className="innerpage-herobloc pixels" variant='full' sx={styles.heroContainer}>
          <Hero content={content['hero']} />
          <Buttons content={content['buttons']} />
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
        <div id="contact-lists" className="innerpage-section bg-white img-right">
          <FeatureLeft content={content['features1']} />
        </div>
        <div className="innerpage-section bg-light img-left">
          <FeatureRight content={content['features2']} />
        </div>
        <div className="innerpage-section bg-white img-right">
          <FeatureLeft content={content['features3']} />
        </div>
        
        <div className="innerpage-section2 bg-light pb-0">
          <ContentImages
            content={content['images2']}
            imageEffect='fadeIn'
          />
        </div>

        <div className="innerpage-section bg-white img-right">
          <FeatureLeft content={content['features4']} />
        </div>
        <div className="innerpage-section bg-light img-left">
          <FeatureRight content={content['features5']} />
        </div>
        <div className="innerpage-section bg-white img-right">
          <FeatureLeft content={content['features6']} />
        </div>

        <Divider space='5' />

        <GetStarted content={content['get-started']} />

        <Divider space='5' />
        
        <CallToAction bg="bg-success" content="Ready to Get Started with Mumara Campaigns" btname="Buy Now" link="/campaigns/pricing/" />
        <Footer content={content['footer']} />
        <Main />
        <Base />
      </div>
    </Layout>
  )
}

export const query = graphql`
  query pixelsPagesBlockContent {
    allBlockContent(
      filter: { page: { in: ["one/features/pixels", "shared"] } }
    ) {
      nodes {
        ...BlockContent
      }
    }
  }
`
export default pixelsPages
