
import React from 'react'
import { graphql } from 'gatsby'
import { Container } from 'theme-ui'
import Layout from '@solid-ui-layout/Layout'
import Seo from '@solid-ui-components/Seo'
import Divider from '@solid-ui-components/Divider'
import ModalWithTabs from '@solid-ui-blocks/Modal/Block01'
import ModalSimple from '@solid-ui-blocks/Modal/Block02'
import Header from '@solid-ui-blocks/Header/Block01'
import Hero from '@solid-ui-blocks/Home/Hero/Block01'
import Companies from '@solid-ui-blocks/Home/Companies/Block01'
import BuildBrand from '@solid-ui-blocks/Home/BuildBrand/Block04'
import FeatureOne from '@solid-ui-blocks/Home/FeatureOne/Block01'
import WhyChooseUs from '@solid-ui-blocks/Home/WhyChooseUs/Block04'
import FeatureTwo from '@solid-ui-blocks/Home/FeatureTwo/Block02'
import Stats from '@solid-ui-blocks/Home/Stats/Block01'
import Strategies from '@solid-ui-blocks/Home/Strategies/Block06'
import Download from '@solid-ui-blocks/Home/Download/Block02'
import Testimonials from '@solid-ui-blocks/Home/Testimonials/Block02'
import GetStarted from '@solid-ui-blocks/Home/GetStarted/Block01'
import Blog from '@solid-ui-blocks/Home/Blog/Block01'
import Main from '@solid-ui-blocks/SEO/Main'
import Base from '@solid-ui-blocks/SEO/Base'
import Footer from '@solid-ui-blocks/Footer/Block01'
import { normalizeBlockContentNodes } from '@blocks-helpers'
import theme from './_theme'
import styles from './_styles'

const IndexPage = props => {

  return (
    <Layout theme={theme} {...props}>
      <Seo />
      <ModalWithTabs reverse />
      <ModalWithTabs />
      <ModalSimple />
      <Header />
      <Container variant='full' sx={styles.heroContainer}>
        <Hero />
      </Container>
      <Divider space='4' />
       <Companies  />
      <Divider space='5' />
      <Divider space='5' />
      <Container variant='full' sx={styles.buildBrandContainer}>
        <BuildBrand />
      </Container>
      <Divider space='5' />
      <Divider space='5' />
      <FeatureOne />
      <Divider space='5' />
      <Divider space='5' />
      <WhyChooseUs />
      <Divider space='5' />
      <Divider space='5' />
      <FeatureTwo  />
      <Divider space='5' />
      <Divider space='5' />
      <Stats />
      <Divider space='4' />
      <Strategies />
      <Divider space='4' />
      <Download />
      <Divider space='5' />
      <Divider space='5' />
      <Testimonials />
      <Divider space='5' />
      <Divider space='5' />
      <Container sx={styles.getStartedContainer}>
      <GetStarted />
      </Container>
      <Divider space='5' />
      <Divider space='5' />
      <Blog />
      <Divider space='5' />
      <Footer />
      <Main />
      <Base />
    </Layout>
  )
}

export default IndexPage
