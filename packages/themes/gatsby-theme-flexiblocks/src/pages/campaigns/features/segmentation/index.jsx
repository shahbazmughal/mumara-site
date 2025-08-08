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

const campFeaturesSegmentation = props => {
  const { allBlockContent } = props.data
  const content = normalizeBlockContentNodes(allBlockContent?.nodes)

  return (
    <Layout theme={theme} {...props} xs={styles.body}>
      <div className="innerpage-main">
      <Seo title='Segmentation | Mumara Campaigns' description="Enhance your email marketing with Mumara Campaigns' segmentation features. Target specific audiences, personalize messages, and improve engagement." keywords="Segmentation, audience targeting, personalized marketing, customer segmentation, demographic targeting, behavior-based segmentation, email segmentation, targeted campaigns, audience segmentation, marketing automation." canonical="https://www.mumara.com/campaigns/features/segmentation/" favicon="https://www.mumara.com/favicon.ico" />
        
        <Menu content={content['header']} />
        {/* Blocks */}
        <div className="subheader-block">
          <SubHeader content={content['subheader_campaign']} menuJustify='space-between' />
        </div>
        <Container className="innerpage-heroblock segments" variant='full' sx={styles.heroContainer}>
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
        <div className="innerpage-section bg-white img-right">
          <FeatureLeft content={content['features1']} />
        </div>
        <div className="innerpage-section bg-light img-left">
          <FeatureRight content={content['features2']} />
        </div>
        <div className="innerpage-section bg-white img-right">
          <FeatureLeft content={content['features3']} />
        </div>
        <div className="innerpage-section bg-light img-left">
          <FeatureRight content={content['features4']} />
        </div>
        <div className="innerpage-section bg-white img-left">
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
  query campFeaturesSegmentationBlockContent {
    allBlockContent(
      filter: { page: { in: ["campaigns/features/segmentation", "shared"] } }
    ) {
      nodes {
        ...BlockContent
      }
    }
  }
`
export default campFeaturesSegmentation
