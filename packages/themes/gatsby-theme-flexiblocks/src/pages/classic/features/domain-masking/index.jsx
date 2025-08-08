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
      <Seo title='Domain Masking | Domain Forwarding | MumaraClassic' description="The addon offers an easy way to hide the identity of primary (Installation) domain, by seamlessly replacing the primary domain URL with another pointer domain URL." keywords="domain masking,mask forwarding option,cname,url masking,dns redirect,htaccess direct" image="https://post.mumara.com/images/classic-features-domain-masking.png" image2="https://post.mumara.com/images/classic-features-domain-masking.png" canonical="https://www.mumara.com/classic/features/domain-masking/" favicon="https://www.mumara.com/favicon.ico" />
        
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
  query classicFeaturesPage2BlockContent {
    allBlockContent(
      filter: { page: { in: ["classic/features/domain-masking", "shared"] } }
    ) {
      nodes {
        ...BlockContent
      }
    }
  }
`
export default IndexPage
