import React from 'react'
import { graphql } from 'gatsby'
import { Container } from 'theme-ui'
import Layout from '@solid-ui-layout/Layout'
import Seo from '@solid-ui-components/Seo'
import Divider from '@solid-ui-components/Divider'
import Footer from '@solid-ui-blocks/Footer/Block01'
import SubHeader from '@solid-ui-blocks/SubHeader/SubHeader'
import Features from '@solid-ui-blocks/Smsplus/Pricing/Block06'
import Features2 from '@solid-ui-blocks/Smsplus/Pricing/Block007'
import { normalizeBlockContentNodes } from '@blocks-helpers'
import Menu from '@solid-ui-blocks/Menu'
import Main from '@solid-ui-blocks/SEO/Main'
import Base from '@solid-ui-blocks/SEO/Base'
import styles from './_styles'
import theme from './_theme'
import './smspluspricing-page.css'

const Services01 = props => {
  const { allBlockContent } = props.data
  const content = normalizeBlockContentNodes(allBlockContent?.nodes)

  return (
    <Layout theme={theme} {...props}>
      <Seo title='SMSPlus Pricing | Mumara' description="Discover flexible and affordable pricing plans for Mumara SMSPlus. Choose the perfect plan to enhance your SMS marketing with powerful features and tools." keywords="bulk sms service provider,smsplus pricing" image="https://post.mumara.com/images/smsplus-pricing.png" image2="https://post.mumara.com/images/smsplus-pricing.png" canonical="https://www.mumara.com/smsplus/pricing/" favicon="https://www.mumara.com/favicon.ico" />
      
      <Menu content={content['header']} />
      {/* Blocks */}
      <div className="subheader-block smspricing">
        <SubHeader content={content['subheader_smsplus']} menuJustify='space-between' />
      </div>
      <Container className="classic-featuresBlk" variant='full' sx={styles.heroContainer}>
        <Divider space='2' />
        <Features content={content['cl_features']} />
        <Divider space='4' />
        <div className="cprb">
          <Features2 content={content['cl_features2']} />
        </div>
      </Container>
      
      <Footer content={content['footer']} />
      <Main />
      <Base />
    </Layout>
  )
}

export const query = graphql`
  query smsPlusPricingBlockContent {
    allBlockContent(
      filter: { page: { in: ["smsplus/pricing", "shared"] } }
    ) {
      nodes {
        ...BlockContent
      }
    }
  }
`

export default Services01
