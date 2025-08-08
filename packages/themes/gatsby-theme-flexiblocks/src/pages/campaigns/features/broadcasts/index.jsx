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
import ContentImages from '@solid-ui-components/ContentImages'
import WhyChooseUs2 from '@solid-ui-blocks/Campaigns/FeaturesBlock04'
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

const campFeaturesBroadcasts = props => {
  const { allBlockContent } = props.data
  const content = normalizeBlockContentNodes(allBlockContent?.nodes)

  return (
    <Layout theme={theme} {...props} xs={styles.body}>
      <div className="innerpage-main brodcast-page">
      <Seo title='Seamless Email Marketing Solutions | Mumara Broadcasts' description="Send impactful email broadcasts with Mumara Campaigns. Customize, schedule, and track your messages to effectively reach and engage your audience." keywords="Mumara Broadcasts, email marketing, campaigns, automation, analytics" image="https://post.mumara.com/images/campaigns-features-broadcasts.png" image2="https://post.mumara.com/images/campaigns-features-broadcasts.png" canonical="https://www.mumara.com/campaigns/features/broadcasts/" favicon="https://www.mumara.com/favicon.ico" />
        
        <Menu content={content['header']} />
        {/* Blocks */}
        <div className="subheader-block">
          <SubHeader content={content['subheader_campaign']} menuJustify='space-between' />
        </div>
        <Container className="innerpage-heroblock broadcast" variant='full' sx={styles.heroContainer}>
          <Hero content={content['hero']} />
          <h1 align="center" style={{height: 0, fontSize:0}}>Mumara Broadcast</h1>
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

        <div id="editor" className="innerpage-section bg-light img-left">
          <FeatureRight content={content['features2']} />
        </div>

        <div id="spintags" className="innerpage-section bg-white img-right">
          <FeatureLeft content={content['features3']} />
        </div>
        <div className="innerpage-section bg-light img-left">
          <FeatureRight content={content['features4']} />
        </div>

        <div id="schedule">
          <Divider space='5' />
          <WhyChooseUs2 content={content['why-choose-us2']} />
          <Divider space='5' />
          <Divider space='2' />
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
  query campFeaturesBroadcastsBlockContent {
    allBlockContent(
      filter: { page: { in: ["campaigns/features/broadcasts", "shared"] } }
    ) {
      nodes {
        ...BlockContent
      }
    }
  }
`
export default campFeaturesBroadcasts
