import React from 'react'
import { graphql } from 'gatsby'
import { Container } from 'theme-ui'
import Layout from '@solid-ui-layout/Layout'
import Seo from '@solid-ui-components/Seo'
import Divider from '@solid-ui-components/Divider'
import ModalWithTabs from '@solid-ui-blocks/Modal/Block01'
import ModalSimple from '@solid-ui-blocks/Modal/Block02'
import Header from '@solid-ui-blocks/Header/Block01'
import Hero from '@solid-ui-blocks/Saas/Hero/Block02'
import Features from '@solid-ui-blocks/Saas/Feature/Block05'
import FeatureTabOne from '@solid-ui-blocks/Saas/FeatureTab/Block05'
import FeatureTabTwo from '@solid-ui-blocks/Saas/FeatureTab/Block06'
import FeatureTabThree from '@solid-ui-blocks/Saas/FeatureTab/Block01'
import Pricing from '@solid-ui-blocks/Saas/Pricing/Block01'
import WhyChooseUs from '@solid-ui-blocks/Saas/WhyChooseUs/Block04'
import GetStarted from '@solid-ui-blocks/Saas/GetStarted/Block01'
import Testimonials from '@solid-ui-blocks/Saas/Testimonials/Block01'
import Companies from '@solid-ui-blocks/Saas/Companies/Block01'
import Blog from '@solid-ui-blocks/Saas/Blog/Block01'
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
      <Header />
      <Divider space='5' />
       <Container variant='full' sx={styles.heroContainer}>
        <Hero />
      </Container>
      <Divider space='5' />
      <Features />
      <Divider space='5' />
      <Divider space='5' />
      <Container sx={styles.featuresContainer}>
        <FeatureTabOne />
        <Divider space='5' />
        <Divider space='5' />
        <FeatureTabTwo />
        <Divider space='5' />
        <Divider space='5' />
        <FeatureTabThree />
      </Container>
      <Divider space='5' />
      <Divider space='5' />
      <WhyChooseUs />
      <Divider space='5' />
      <Divider space='5' />
      <Pricing  />
      <Divider space='5' />
      <Divider space='5' />
      <Container variant='full' sx={styles.testimonialsContainer}>
        <Testimonials />
      </Container>
      <Companies />
      <Divider space='5' />
      <GetStarted />
      <Divider space='5' />
      <Divider space='5' />
      <Blog /> 
      <Divider space='5' />
      <Divider space='5' />
      <Footer  />
            <Main />
            <Base />
    </Layout>
  )
}
export default IndexPage
