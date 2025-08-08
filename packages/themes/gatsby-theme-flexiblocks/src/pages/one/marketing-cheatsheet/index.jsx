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
import OneSeo from '@solid-ui-blocks/One/MarketingCheatsheet/OneSeo'
import Services from '@solid-ui-blocks/One/MarketingCheatsheet/FeaturesBlock05'
import CallToAction from '@solid-ui-blocks/CallToAction'
import Menu from '@solid-ui-blocks/Menu'
import theme from './_theme'
import styles from './_styles'
import './onecheatsheet.css'

const IndexPage = props => {
  const { allBlockContent } = props.data
  const content = normalizeBlockContentNodes(allBlockContent?.nodes)

  return (
    <Layout theme={theme} {...props} xs={styles.body}>
      <div className="one-marketing-cheatsheet">
      <Seo title='Boost Your Email Marketing: Free Cheat sheet by Mumara' description="Download Mumara's free marketing cheat sheet to improve your email campaigns. Get expert tips and strategies to enhance your email marketing today." image="https://post.mumara.com/images/one-marketing-cheatsheet.png" image2="https://post.mumara.com/images/one-marketing-cheatsheet.png" canonical="https://www.mumara.com/one/marketing-cheatsheet/" favicon="https://www.mumara.com/favicon.ico" />
        
        <Menu content={content['header']} />
        {/* Blocks */}
        <div className="subheader-block">
          <SubHeader content={content['subheader_one']} menuJustify='space-between' />
        </div>
        <Container className="one-marketing-cheatsheet-heroblock" variant='full' sx={styles.heroContainer}>
          <Services content={content['services1']} />
          <Divider space='5' />
        </Container>

        <CallToAction bg="bg-success" content="Ready to Get Started with Mumara One" btname="Get Started" link="/one/pricing/" />
        <Footer content={content['footer']} />
        <Main />
        <Base />
        <OneSeo />
      </div>
    </Layout>
  )
}

export const query = graphql`
  query oneMarketingCheatsheetBlockContent {
    allBlockContent(
      filter: { page: { in: ["one/marketing-cheatsheet", "shared"] } }
    ) {
      nodes {
        ...BlockContent
      }
    }
  }
`
export default IndexPage
