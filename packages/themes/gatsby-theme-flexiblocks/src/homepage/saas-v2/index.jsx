import React from 'react'
import { graphql } from 'gatsby'
import { Container } from 'theme-ui'
import Layout from '@solid-ui-layout/Layout'
import Seo from '@solid-ui-components/Seo'
import Divider from '@solid-ui-components/Divider'
import ModalWithTabs from '@solid-ui-blocks/Modal/Block01'
import ModalSimple from '@solid-ui-blocks/Modal/Block02'
import Header2 from '@solid-ui-blocks/Header2/Block01'
import Tabs from '@solid-ui-components/Tabs'
import Tabs3 from '@solid-ui-components/Tabs3'
import Hero from '@solid-ui-blocks/Saasv2/Hero/Block01'
import FeatureOne from '@solid-ui-blocks/Saasv2/Features/Block02'
import FeatureTwo from '@solid-ui-blocks/Saasv2/Features/Block05'
import FeatureThree from '@solid-ui-blocks/Saasv2/Features/Block01'
import Features from '@solid-ui-blocks/Saasv2/Featureswithphoto/Block02'
import Screenshot from '@solid-ui-blocks/Saasv2/FeaturesScreenshort/Block03'
import Process from '@solid-ui-blocks/Saasv2/Process/Block03'
import Testimonials from '@solid-ui-blocks/Saasv2/Testimonials/Block03'
import Companies from '@solid-ui-blocks/Saasv2/Companies/Block01'
import Pricing from '@solid-ui-blocks/Saasv2/Pricing/Block02'
import Stats from '@solid-ui-blocks/Saasv2/Stats/Block01'
import Faq from '@solid-ui-blocks/Saasv2/Faq/Block01'
import Blog from '@solid-ui-blocks/Saasv2/Blog/Block01'
import Footer from '@solid-ui-blocks/Footer/Block01'
import Main from '@solid-ui-blocks/SEO/Main'
import Base from '@solid-ui-blocks/SEO/Base'
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
      <Header2 />
      <Divider space='5' />
      <Container variant='full' sx={styles.heroContainer}>
        <Hero />
      </Container>
      <Divider space='5' />
      <Divider space='5' />
      <Divider space='5' />
      <Container variant='wide' sx={styles.tabsContainer}>
        <Tabs space={5}>
          <FeatureOne />
          <FeatureTwo />
          <FeatureThree />
        </Tabs>
      </Container>
      <Container variant='wide' sx={styles.tabsContainer}>
        <Tabs3 space={3} variant='dots' position='bottom' arrows>
          <Screenshot />
          <Screenshot />
          <Screenshot />
        </Tabs3>
      </Container>
      <Divider space='5' />
      <Process />
      <Divider space='5' />
      <Container variant='full' sx={styles.featuresContainer}>
        <Features />
      </Container>
      <Divider space='5' />
      <Container variant='full' sx={styles.socialProofContainer}>
        <Divider space='5' />
        <Divider space='5' />
        <Container variant='narrow'>
          <Stats />
          <Divider space='5' />
        </Container>
        <Testimonials />
        <Divider space='5' />
      </Container>
      <Divider space='5' />
      <Divider space='5' />
      <Pricing />
      <Divider space='5' />
      <Companies />
      <Divider space='5' />
      <Container variant='narrow'>
        <Faq />
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
