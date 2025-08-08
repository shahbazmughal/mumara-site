import React from 'react'
import { graphql } from 'gatsby'
import { Container } from 'theme-ui'
import Layout from '@solid-ui-layout/Layout'
import Seo from '@solid-ui-components/Seo'
import Divider from '@solid-ui-components/Divider'
import Header from '@solid-ui-blocks/Classicesp/Pricing/HeaderBlock01'
import Footer from '@solid-ui-blocks/Footer/Block01'
import SubHeader from '@solid-ui-blocks/SubHeader/SubHeader'
import Features from '@solid-ui-blocks/Classicesp/Pricing/Block06'
import Features2 from '@solid-ui-blocks/Classicesp/Pricing/Block007'
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
      <Seo title='Get Lifetime Email Marketing Solution with Mumara Classic ESP' description="Explore Mumara Classic ESP pricing plans. Find the perfect email marketing solution for your business with flexible options and powerful features to boost your campaigns." image="https://post.mumara.com/images/classic-esp-pricing.png" image2="https://post.mumara.com/images/classic-esp-pricing.png" canonical="https://www.mumara.com/classic-esp/pricing/" favicon="https://www.mumara.com/favicon.ico" />
      {/* Blocks */}
      
      <Menu content={content['header']} />
      <div className="subheader-block">
        <SubHeader content={content['subheader_classic_esp']} menuJustify='space-between' />
      </div>
      <Container className="classic-featuresBlk" variant='full' sx={styles.heroContainer}>
        <Divider space='2' />
        <Features content={content['cl_features']} />
        <Divider space='4' />
        <div className="cprb">
          <Features2 content={content['cl_features2']} />
        </div>
        <Main />
        <Base />
      </Container>
      
      <Footer content={content['footer']} />
    </Layout>
  )
}

export const query = graphql`
  query classicEspPricingBlockContent {
    allBlockContent(
      filter: { page: { in: ["classic-esp/pricing", "shared"] } }
    ) {
      nodes {
        ...BlockContent
      }
    }
  }
`

export default Services01
