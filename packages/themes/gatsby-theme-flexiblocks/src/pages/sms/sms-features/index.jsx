import React from 'react'
import { graphql } from 'gatsby'
import { Container } from 'theme-ui'
import Layout from '@solid-ui-layout/Layout'
import Seo from '@solid-ui-components/Seo'
import Divider from '@solid-ui-components/Divider'
import Footer from '@solid-ui-blocks/Footer/Block01'
import SubHeader from '@solid-ui-blocks/SubHeader/SubHeader'
import Features from '@solid-ui-blocks/Sms/Features/Block06'
import Team from '@solid-ui-blocks/Sms/Features/Block03'
import Faq from '@solid-ui-blocks/Sms/Features/Block02'
import { normalizeBlockContentNodes } from '@blocks-helpers'
import CallToAction from '@solid-ui-blocks/CallToAction'
import Menu from '@solid-ui-blocks/Menu'
import Main from '@solid-ui-blocks/SEO/Main'
import Base from '@solid-ui-blocks/SEO/Base'
import styles from './_styles'
import theme from './_theme'
import './sms-features.css'

const Services01 = props => {
  const { allBlockContent } = props.data
  const content = normalizeBlockContentNodes(allBlockContent?.nodes)

  return (
    <Layout theme={theme} {...props}>
      
      {/* <Header content={content['header']} /> */}
      <Menu content={content['header']} />
      {/* Blocks */}
      <div className="subheader-block">
        <SubHeader content={content['subheader_sms']} menuJustify='space-between' />
      </div>
      <Team content={content['team']} />
      <Container className="classic-featuresBlk sms-features-main" variant='full' sx={styles.heroContainer}>
        <Features content={content['cl_features']} />
        <Divider space='4' />
        <Features content={content['cl_features2']} />
        <Features content={content['cl_features3']} />
        <Features content={content['cl_features4']} />
        <Divider space='5' />
        <Divider space='5' />
      </Container>
      <Divider space='5' />
      <Container variant='full' sx={styles.heroContainer2}>
        <Faq content={content['faq']} />
      </Container>
      <Divider space='5' />
      
      <CallToAction bg="success" content="Ready to Get Started with Mumara SMS" btname="Buy Now" link="/sms/pricing/" />
      <Footer content={content['footer']} />
      <Main />
      <Base />
    </Layout>
  )
}

export const query = graphql`
  query smsfeaturesBlockContent {
    allBlockContent(
      filter: { page: { in: ["sms/features", "shared"] } }
    ) {
      nodes {
        ...BlockContent
      }
    }
  }
`

export default Services01
