import React from 'react'
import { graphql } from 'gatsby'
import { Container } from 'theme-ui'
import Layout from '@solid-ui-layout/Layout'
import Seo from '@solid-ui-components/Seo'
import Divider from '@solid-ui-components/Divider'
import Footer from '@solid-ui-blocks/Footer/Block01'
import Features from '@solid-ui-blocks/About/Block06'
import CompanyAdmin from '@solid-ui-blocks/About/AboutCompanyAdmin'
import AboutTeam from '@solid-ui-blocks/About/AboutTeam'
import AboutMission from '@solid-ui-blocks/About/AboutMission'
import Team from '@solid-ui-blocks/About/Block03'
import Menu from '@solid-ui-blocks/Menu'
import { normalizeBlockContentNodes } from '@blocks-helpers'
import Main from '@solid-ui-blocks/SEO/Main'
import Base from '@solid-ui-blocks/SEO/Base'
import Stats from '@solid-ui-blocks/Stats/Block01'
import AboutSeo from '@solid-ui-blocks/About/AboutSeo'
import styles from './_styles'
import theme from './_theme'
import './about-us.css'

const Aboutus = props => {
  const { allBlockContent } = props.data
  const content = normalizeBlockContentNodes(allBlockContent?.nodes)

  return (
    <Layout className="aboutus-page-main" theme={theme} {...props}>
      <Seo title='About Mumara - Leading Email Marketing Solutions Provider' description="Discover Mumara's mission, values, and team. Learn how our innovative email marketing solutions help businesses streamline campaigns and achieve success." keywords="Mumara, email marketing automation, marketing software, subscriber management, campaign analytics, automation workflows, targeted campaigns, personalized emails" image="https://post.mumara.com/images/about.png" image2="https://post.mumara.com/images/about.png" canonical="https://www.mumara.com/about-us/" favicon="https://www.mumara.com/favicon.ico" />
      {/* Blocks */}
        {/* <Header content={content['header']} /> */}
        <Menu content={content['header']} />

        <Team content={content['team']} />
        <Container className="avout-us-page" variant='full' sx={styles.heroContainer}>
          <Features content={content['cl_features']} />
          <Divider space='5' />
          <Divider space='5' />
        </Container>
        <Container variant='narrow'>
            <Stats content={content['stats']} />
            <Divider space='5' />
        </Container>
        <Divider space='5' />
        <Container variant='full' sx={styles.heroContainer2}>
          <div style={{display:`none`}}>
            <AboutTeam content={content['company_team']} />
          </div>
          <AboutMission content={content['mission']} />
        </Container> 
        <Footer content={content['footer']} />

        <Main />
        <Base />
        <AboutSeo />

    </Layout>
  )
}

export const query = graphql`
  query aboutUsBlockContent {
    allBlockContent(
      filter: { page: { in: ["aboutus", "shared"] } }
    ) {
      nodes {
        ...BlockContent
      }
    }
  }
`

export default Aboutus
