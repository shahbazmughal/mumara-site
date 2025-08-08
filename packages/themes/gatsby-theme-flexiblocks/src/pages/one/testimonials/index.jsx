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
import OneSeo from '@solid-ui-blocks/One/Testimonials/OneSeo'
import Services from '@solid-ui-blocks/One/Testimonials/FeaturesBlock05'
import FeatureMain from '@solid-ui-blocks/One/Testimonials/FeatureMain'
import CallToAction from '@solid-ui-blocks/CallToAction'
import Menu from '@solid-ui-blocks/Menu'
import theme from './_theme'
import styles from './_styles'
import './testimonials.css'

const IndexPage = props => {
  const { allBlockContent } = props.data
  const content = normalizeBlockContentNodes(allBlockContent?.nodes)

  return (
    <Layout theme={theme} {...props} xs={styles.body}>
      <div className="one-testimonials">
      <Seo title='Customer Success Stories | Mumara Email Marketing' description="Discover how businesses are thriving with Mumara's email marketing solutions. Read our customer testimonials and learn how Mumara can transform your email campaigns." image="https://post.mumara.com/images/one-testimonials.png" image2="https://post.mumara.com/images/one-testimonials.png" canonical="https://www.mumara.com/one/testimonials/" favicon="https://www.mumara.com/favicon.ico" />
        
        <Menu content={content['header']} />
        {/* Blocks */}
        <div className="subheader-block">
          <SubHeader content={content['subheader_one']} menuJustify='space-between' />
        </div>
        <Container className="one-testimonials-heroblock" variant='full' sx={styles.heroContainer}>
          <Services content={content['heading']} />
          <Divider space='5' />
        </Container>
        <div className="one-testimonials-reviews">
          <FeatureMain content={content['featuremain1']} />
          <FeatureMain content={content['featuremain2']} />
        </div>
        <div className="one-testimonials-heading-bottom hero-inner bg-white">
          <Services content={content['heading2']} />
        </div>
        
        <CallToAction bg="success" content="Ready to Get Started with Mumara One" btname="Get Started" link="/one/pricing/" />
        <Footer content={content['footer']} />
        <Main />
        <Base />
        <OneSeo />
      </div>
    </Layout>
  )
}

export const query = graphql`
  query oneTestimonialsBlockContent {
    allBlockContent(
      filter: { page: { in: ["one/testimonials", "shared"] } }
    ) {
      nodes {
        ...BlockContent
      }
    }
  }
`
export default IndexPage
