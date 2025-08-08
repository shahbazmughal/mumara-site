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
import Hero from '@solid-ui-blocks/InnerPage/HeroBlock02'
import Services from '@solid-ui-blocks/Classic/FeaturesBlock05'
import ContentImages from '@solid-ui-components/ContentImages'
import CallToAction from '@solid-ui-blocks/CallToAction'
import Menu from '@solid-ui-blocks/Menu'
import theme from './_theme'
import styles from './_styles'
import './innerpage.css'

const styled = {
  image: {
    margin:`-50px auto 0px`,
    display: `table`
  }, 
  image2: {
    margin:`0px auto 0px`,
    display: `table`
  }
}

const IndexPage = props => {
  const { allBlockContent } = props.data
  const content = normalizeBlockContentNodes(allBlockContent?.nodes)

  return (
    <Layout theme={theme} {...props} xs={styles.body}>
      <div className="innerpage-main classic">
      <Seo title='Advanced Reporting with Mumara Classic - Gain Deep Insights' description="Who has unsubscribed from the list? Who is opening email and who has clicked the link and from which location, learn every important metric about the sent campaigns." keywords="reporting, email analytics,email tracker,email analytics tool,email tracking app,track email opens,click email count" image="https://post.mumara.com/images/classic-features-advanced-reporting.png" image2="https://post.mumara.com/images/classic-features-advanced-reporting.png" canonical="https://www.mumara.com/classic/features/advanced-reporting/" favicon="https://www.mumara.com/favicon.ico" />
        
        <Menu content={content['header']} />
        {/* Blocks */}
        <div className="subheader-block">
          <SubHeader content={content['subheader_classic']} menuJustify='space-between' />
        </div>
        <Container className="innerpage-heroblock" variant='full'>
          <Hero content={content['hero']} />
          <Divider space='5' />
        </Container>
        <div className="innerpage-section bg-white pt-0 pb-0">
          <ContentImages
            content={content['images']}
            sx={styled.image}
            imageEffect='fadeIn'
          />
        </div>
        <div className="innerpage-section bg-white">
          <h1 className='d-none'>Reporting</h1>
          <Services content={content['services']} />
        </div>
        
      <CallToAction bg="success" content="Ready to Get Started with Mumara Classic" btname="Buy Now" link="/classic/pricing/" />
        <Footer content={content['footer']} />
        <Main />
        <Base />
      </div>
    </Layout>
  )
}

export const query = graphql`
  query classicFeaturesPage16BlockContent {
    allBlockContent(
      filter: { page: { in: ["classic/features/advanced-reporting", "shared"] } }
    ) {
      nodes {
        ...BlockContent
      }
    }
  }
`
export default IndexPage
