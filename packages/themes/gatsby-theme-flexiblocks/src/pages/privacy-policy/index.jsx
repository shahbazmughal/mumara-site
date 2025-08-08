import React from 'react'
import { graphql } from 'gatsby'
import { Container } from 'theme-ui'
import Layout from '@solid-ui-layout/Layout'
import Seo from '@solid-ui-components/Seo'
import Divider from '@solid-ui-components/Divider'
import Footer from '@solid-ui-blocks/Footer/Block01'
import Features from '@solid-ui-blocks/Privacy/Block06'
import Team from '@solid-ui-blocks/Privacy/Block03'
import { normalizeBlockContentNodes } from '@blocks-helpers'
import Menu from '@solid-ui-blocks/Menu'
import Main from '@solid-ui-blocks/SEO/Main'
import Base from '@solid-ui-blocks/SEO/Base'
import styles from './_styles'
import theme from './_theme'
import './about-us.css'

const Privacy = props => {
  const { allBlockContent } = props.data
  const content = normalizeBlockContentNodes(allBlockContent?.nodes)

  return (
    <Layout theme={theme} {...props}>
      <Seo title='Mumara Privacy Policy | Your Data, Our Commitment' description="Read Mumara's Privacy Policy to understand how we protect your data. Learn about our practices regarding data collection, usage, and security measures." image="https://post.mumara.com/images/privacy-policy.png" image2="https://post.mumara.com/images/privacy-policy.png" canonical="https://www.mumara.com/privacy-policy/" favicon="https://www.mumara.com/favicon.ico" />
      {/* Blocks */}
      <div className="privacy-page-main" >
        <Menu content={content['header']} />
        <Team content={content['team']} />
        <Container className="privacy-us-page" variant='full' sx={styles.heroContainer}>
          <div className="box-container">
            <Features content={content['cl_features']} />
            <h1 align="center" style={{height: 0, fontSize:0}}>Privacy Policies</h1>
            <ul className="privacy-list">
              <li>Non personal data</li>
              <li>IP addresses</li>
              <li>Browser Information</li>
              <li>Location</li>
            </ul>
            <Features content={content['cl_features2']} />
          </div>
          <Divider space='5' />
        </Container>
        <Footer content={content['footer']} />
        <Main />
        <Base />
      </div>
    </Layout>
  )
}

export const query = graphql`
  query privacyBlockContent {
    allBlockContent(
      filter: { page: { in: ["privacy-policy", "shared"] } }
    ) {
      nodes {
        ...BlockContent
      }
    }
  }
`

export default Privacy
