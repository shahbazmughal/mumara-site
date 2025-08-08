import React from 'react'
import { graphql } from 'gatsby'
import { Container } from 'theme-ui'
import Layout from '@solid-ui-layout/Layout'
import Seo from '@solid-ui-components/Seo'
import Divider from '@solid-ui-components/Divider'
import Header from '@solid-ui-blocks/Sms/Pricing/HeaderBlock01'
import Footer from '@solid-ui-blocks/Footer/Block01'
import Features from '@solid-ui-blocks/Sms/Pricing/Block06'
import SubHeader from '@solid-ui-blocks/SubHeader/SubHeader'
import { normalizeBlockContentNodes } from '@blocks-helpers'
import Menu from '@solid-ui-blocks/Menu'
import Main from '@solid-ui-blocks/SEO/Main'
import Base from '@solid-ui-blocks/SEO/Base'
import styles from './_styles'
import theme from './_theme'

const Services01 = props => {
  const { allBlockContent } = props.data
  const content = normalizeBlockContentNodes(allBlockContent?.nodes)
  
  return (
    <Layout theme={theme} {...props}>
      <Seo title='SMS Packages | Mumara' description="Select desired slab according to the estimated monthly sending volume and get the most affordable message sending rates across the globe." keywords="sms topup,sms package,bulk sms service,bulk sms cost,sms online recharge" image="https://post.mumara.com/images/sms-pricing.png" image2="https://post.mumara.com/images/sms-pricing.png" canonical="https://www.mumara.com/sms/pricing/" favicon="https://www.mumara.com/favicon.ico" />
      
      <Menu content={content['header']} />

      {/* Blocks */}
      <div className="subheader-block">
        <SubHeader content={content['subheader_sms']} menuJustify='space-between' />
      </div>
      
      <Container className="classic-featuresBlk" variant='full' sx={styles.heroContainer}>
        <Divider space='2' />
        <Features content={content['cl_features']} />
        <Divider space='5' />
      </Container>
      
      <Footer content={content['footer']} />
      <Main />
      <Base />
    </Layout>
  )
}

export const query = graphql`
  query smsPricingBlockContent {
    allBlockContent(
      filter: { page: { in: ["sms/pricing", "shared"] } }
    ) {
      nodes {
        ...BlockContent
      }
    }
  }
`

export default Services01
