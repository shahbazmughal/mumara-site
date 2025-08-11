import React from 'react'
import { graphql } from 'gatsby'
import { Container } from 'theme-ui'
import Layout from '@solid-ui-layout/Layout'
import Seo from '@solid-ui-components/Seo'
import Divider from '@solid-ui-components/Divider'
import ModalWithTabs from '@solid-ui-blocks/Modal/Block01'
import ModalSimple from '@solid-ui-blocks/Modal/Block02'
import Header from '@solid-ui-blocks/Header/Block01'
import Tabs from '@solid-ui-components/Tabs'
import Hero from '@solid-ui-blocks/Mobile/Hero/Block01'
import Stats from '@solid-ui-blocks/Mobile/Stats/Block01'
import Features from '@solid-ui-blocks/Mobile/Features/Block07'
import HowItWorks from '@solid-ui-blocks/Mobile/FeaturesWithPhoto/Block04'
import FeatureTabOne from '@solid-ui-blocks/Mobile/FeaturesWithPhoto/Block05'
import FeatureTabTwo from '@solid-ui-blocks/Mobile/FeaturesWithPhoto/Block01'
import FeatureTabThree from '@solid-ui-blocks/Mobile/FeaturesWithPhoto/Block07'
import Testimonials from '@solid-ui-blocks/Mobile/Testimonials/Block03'
import Companies from '@solid-ui-blocks/Mobile/Companies/Block01'
import Faq from '@solid-ui-blocks/Mobile/Faq/Block02'
import Blog from '@solid-ui-blocks/Blog/Block01'
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
      <Divider space='5' />
      <Divider space='5' />
      <Hero />
      <Divider space='6' />
      <Container variant='wide' sx={styles.featuresContainer}>
        <Divider space={-6} />
        <Stats />
        <Divider space='4' />
        <Features />
      </Container>
      <Divider space='5' />
      <HowItWorks  />
      <Divider space='5' />
      <Divider space='5' />
      <Container variant='wide' sx={styles.tabsContainer}>
        <Tabs space={4} variant='pill'>
          <FeatureTabOne  />
          <FeatureTabTwo  />
          <FeatureTabThree />
        </Tabs>
      </Container>
      <Divider space='5' />
      <Faq  />
      
      <Divider space='5' />
      <Container variant='wide' sx={styles.testimonialsContainer}>
        <Testimonials  />
        <Divider space='5' color='omegaLight' />
        <Companies  />
      </Container>
      <Divider space='5' />
      <Divider space='5' />
      <Blog  />
      <Divider space='5' />
      <Footer  />

      <Main />
      <Base />
    </Layout>
  )
}

export default IndexPage
