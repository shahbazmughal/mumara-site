import React from 'react'
import { graphql } from 'gatsby'
import { Container } from 'theme-ui'
import Layout from '@solid-ui-layout/Layout'
import Seo from '@solid-ui-components/Seo'
import Divider from '@solid-ui-components/Divider'
import Footer from '@solid-ui-blocks/Footer/Block01'
import SubHeader from '@solid-ui-blocks/SubHeader/SubHeader'
import Features from '@solid-ui-blocks/Classic/Features/Block06'
import Team from '@solid-ui-blocks/Classic/Features/Block03'
import Faq from '@solid-ui-blocks/Classic/Features/Block02'
import { normalizeBlockContentNodes } from '@blocks-helpers'
import CallToAction from '@solid-ui-blocks/CallToAction'
import Menu from '@solid-ui-blocks/Menu'
import Main from '@solid-ui-blocks/SEO/Main'
import Base from '@solid-ui-blocks/SEO/Base'
import styles from './_styles'
import theme from './_theme'
import './calssic-features.css'

const Services01 = props => {
  const { allBlockContent } = props.data
  const content = normalizeBlockContentNodes(allBlockContent?.nodes)

  return (
    <Layout theme={theme} {...props}>
      <Seo title='Features & Addons | Mumaraclassic' description="Discover Mumara's powerful campaign features. From A/B testing to automation, enhance your email marketing strategy and boost engagement. Explore our features now!" keywords="mumara addons,high volume email delivery,email marketing tools,bulk email software,bulk email sender" image="https://post.mumara.com/images/classic-features.png" image2="https://post.mumara.com/images/classic-features.png" canonical="https://www.mumara.com/classic/features/" favicon="https://www.mumara.com/favicon.ico" />
      
      <Menu content={content['header']} />
      {/* Blocks */}
      <div className="subheader-block">
        <SubHeader content={content['subheader_classic']} menuJustify='space-between' />
      </div>
      <Team content={content['team']} />
      <Container className="classic-featuresBlk" variant='full' sx={styles.heroContainer}>
        <Features content={content['cl_features']} />
        <Features content={content['cl_features2']} />
        <Features content={content['cl_features3']} />
        <Features content={content['cl_features4']} />
        <Features content={content['cl_features5']} />
        <Features content={content['cl_features6']} />
        <Divider space='5' />
        <Divider space='5' />
      </Container>
      
      
      <Divider space='5' />
      <Container variant='full' sx={styles.heroContainer2}>
        <Faq content={content['faq']} />
        <Faq content={content['faq2']} />
        <Faq content={content['faq3']} />
      </Container>
      <Divider space='5' />
      <Divider space='5' />
      
      <CallToAction bg="success" content="Ready to Get Started with Mumara Classic" btname="Buy Now" link="/classic/pricing/" />
      <Footer content={content['footer']} />

      <Main />
      <Base />

    </Layout>
  )
}

export const query = graphql`
  query classicfeaturesBlockContent {
    allBlockContent(
      filter: { page: { in: ["classic/features", "shared"] } }
    ) {
      nodes {
        ...BlockContent
      }
    }
  }
`

export default Services01
