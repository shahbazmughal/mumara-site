import React from 'react'
import { graphql } from 'gatsby'
import { Container } from 'theme-ui'
import Layout from '@solid-ui-layout/Layout'
import Seo from '@solid-ui-components/Seo'
import Divider from '@solid-ui-components/Divider'
import SubHeader from '@solid-ui-blocks/SubHeader/SubHeader'
import Header from '@solid-ui-blocks/Classic/Pricing/HeaderBlock01'
import Footer from '@solid-ui-blocks/Footer/Block01'
import { normalizeBlockContentNodes } from '@blocks-helpers'
import Main from '@solid-ui-blocks/SEO/Main'
import Base from '@solid-ui-blocks/SEO/Base'
import Hero from '@solid-ui-blocks/Classic/Pricing/HeroBlock02'
import PriceBlock01 from '@solid-ui-blocks/Classic/Pricing/PriceBlock01'
import Clients from '@solid-ui-blocks/Classic/Pricing/CompaniesBlock01'
import Menu from '@solid-ui-blocks/Menu'
import { Helmet } from "react-helmet"
import theme from './_theme'
import styles from './_styles'
import './classicPricing.css'

const IndexPage = props => {
  const { allBlockContent } = props.data
  const content = normalizeBlockContentNodes(allBlockContent?.nodes)

  return (
    <Layout theme={theme} {...props} xs={styles.body}>
      <div className="camp-pricing classic">
      <Seo title='Affordable Email Marketing Ownership: Mumara Classic Plans ' description="Explore flexible pricing plans for Mumara Classic. Find the right plan for your email marketing needs and unlock powerful automation features to boost your campaigns." image="https://post.mumara.com/images/classic-pricing.png" image2="https://post.mumara.com/images/classic-pricing.png" canonical="https://www.mumara.com/classic/pricing/" favicon="https://www.mumara.com/favicon.ico" />
        
        <Menu content={content['header']} className='innerHeader' />
        {/* Blocks */}
        <div className="subheader-block">
          <SubHeader content={content['subheader_classic']} menuJustify='space-between' />
        </div>
        <Container variant='full' sx={styles.heroContainer} className='campFhero'>
          <Hero content={content['hero']} />
        </Container>
        <PriceBlock01 />
        <Divider space='3' />
        <div className="classic-customers">
          <Clients content={content['companies']} />
        </div>
        <Divider space='4' />
        <Footer content={content['footer']} />
        <Main />
        <Base />
      </div>
    </Layout>
  )
}

export const query = graphql`
  query classicPricingBlockContent {
    allBlockContent(
      filter: { page: { in: ["classic/pricing", "shared"] } }
    ) {
      nodes {
        ...BlockContent
      }
    }
  }
`
export default IndexPage
