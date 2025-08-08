import React from 'react'
import { graphql } from 'gatsby'
import { Container } from 'theme-ui'
import Layout from '@solid-ui-layout/Layout'
import Seo from '@solid-ui-components/Seo'
import Divider from '@solid-ui-components/Divider'
import ModalWithTabs from '@solid-ui-blocks/Modal/Block01'
import ModalSimple from '@solid-ui-blocks/Modal/Block02'
import Header from '@solid-ui-blocks/Header/Block01'
import Hero from '@solid-ui-blocks/Fintch/Hero/Block01'
import Companies from '@solid-ui-blocks/Fintch/Companies/Block01'
import Features from '@solid-ui-blocks/Fintch/Features/Block05'
import FeatureOne from '@solid-ui-blocks/Fintch/FeaturesWithPhoto/Block07'
import WhyChooseUs from '@solid-ui-blocks/Fintch/Features/Block01'
import FeatureTwo from '@solid-ui-blocks/Fintch/FeaturesWithPhoto/Block06'
import Strategies from '@solid-ui-blocks/Fintch/Strategies/Block06'
import FeatureThreeMore from '@solid-ui-blocks/Fintch/Features/Block06'
import Blog from '@solid-ui-blocks/Fintch/Blog/Block01'
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
      {/* Modals */}
      <ModalWithTabs reverse />
      <ModalWithTabs />
      <ModalSimple />
      {/* Blocks */}
      <Header  />
      <Divider space='4' />
      <Divider space='4' />
      <Container variant='wide' sx={styles.heroContainer}>
        <Hero />
      </Container>
      <Divider space='4' />
      <Companies  />
      <Divider space='5' />
      <Divider space='5' />
      <Features  />
      <Divider space='5' />
      <Divider space='5' />
      <Container variant='wide' sx={styles.featureOneContainer}>
        <FeatureOne />
      </Container>
      <Divider space='5' />
      <Divider space='5' />
      <Container variant='wide' sx={styles.whyChooseUsContainer}>
        <WhyChooseUs />
      </Container>
      <Divider space='5' />
      <Divider space='5' />
      <Container variant='wide' sx={styles.featureTwoContainer}>
        <FeatureTwo />
      </Container>
      <Divider space='5' />
      <Container variant='full' sx={styles.featureThreeContainer}>
        <FeatureThreeMore />
        <Divider space='4' />
        <Strategies />
      </Container>
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
