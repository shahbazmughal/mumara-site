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
      <Seo title='List and Contact Management | SMS' description="Don't need a separate contact manager to keep and manage contacts. MumaraSMS offers an integrated structure to create lists & manage contact information." keywords="contact management,contact information,contact list,custom fields,contact manager,import contacts" image="https://post.mumara.com/images/sms-features-organization.png" image2="https://post.mumara.com/images/sms-features-organization.png" canonical="https://www.mumara.com/sms/sms-features/organization/" favicon="https://www.mumara.com/favicon.ico" />
        
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
  query smsFeaturesPage1BlockContent {
    allBlockContent(
      filter: { page: { in: ["sms/features/organization", "shared"] } }
    ) {
      nodes {
        ...BlockContent
      }
    }
  }
`
export default IndexPage
