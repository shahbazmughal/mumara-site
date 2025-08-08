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
import Hero from '@solid-ui-blocks/Campaigns/Pricing/HeroBlock02'
import PriceBlock01 from '@solid-ui-blocks/Campaigns/Pricing/PriceBlock01'
import Faq from '@solid-ui-blocks/One/Pricing/FaqBlock01'
import Menu from '@solid-ui-blocks/Menu'
import theme from './_theme'
import styles from './_styles'
import './campPricing.css'

const IndexPage = props => {
  const { allBlockContent } = props.data
  const content = normalizeBlockContentNodes(allBlockContent?.nodes)

  return (
    <Layout theme={theme} {...props} xs={styles.body}>
      <div className="camp-pricing">
      <Seo title='Mumara Campaigns Pricing' description="Send your campaign without the fear of running out email credits, subscribe Mumara CampaignsPlus to get your email marketer auto deployed on cloud." image="https://post.mumara.com/images/campaigns-pricing.png" image2="https://post.mumara.com/images/campaigns-pricing.png" canonical="https://www.mumara.com/campaigns/pricing/" favicon="https://www.mumara.com/favicon.ico" />
        
        {/* <Header content={content['header']} className='innerHeader' /> */}
        <Menu content={content['header']} className='innerHeader'  />
        {/* Blocks */}
        <div className="subheader-block">
          <SubHeader content={content['subheader_campaign']} menuJustify='space-between' />
        </div>
        <Container variant='full' sx={styles.heroContainer} className='campFhero'>
          <Hero content={content['hero']} />
        </Container>
        <PriceBlock01 />
        <Divider space='5' />
        <Container variant='narrow'>
          <Faq content={content['faq']} />
        </Container>
        <Divider space='5' />
        <Divider space='0' />
        <Footer content={content['footer']} />
        <Main />
        <Base />
      </div>
    </Layout>
  )
}

export const query = graphql`
  query campPricingBlockContent {
    allBlockContent(
      filter: { page: { in: ["campaigns/pricing", "shared"] } }
    ) {
      nodes {
        ...BlockContent
      }
    }
  }
`
export default IndexPage
