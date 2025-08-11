import React from 'react'
import { graphql } from 'gatsby'
import { Container } from 'theme-ui'
import Layout from '@solid-ui-layout/Layout'
import Seo from '@solid-ui-components/Seo'
import Divider from '@solid-ui-components/Divider'
import ModalWithTabs from '@solid-ui-blocks/Modal/Block01'
import ModalSimple from '@solid-ui-blocks/Modal/Block02'
import Header from '@solid-ui-blocks/Header/Block01'
import Hero from '@solid-ui-blocks/Hero/Block02'
import Companies from '@solid-ui-blocks/Companies/Block01'
import Services from '@solid-ui-blocks/Features/Block05'
import FeatureOne from '@solid-ui-blocks/FeaturesWithPhoto/Block01'
import WhyChooseUs from '@solid-ui-blocks/Features/Block01'
import FeatureTwo from '@solid-ui-blocks/FeaturesWithPhoto/Block02'
import Strategies from '@solid-ui-blocks/Stats/Block01'
import Testimonials from '@solid-ui-blocks/Testimonials/Block01'
import GetStarted from '@solid-ui-blocks/CallToAction/Block01'
import Blog from '@solid-ui-blocks/Blog/Block01'
import Footer from '@solid-ui-blocks/Footer/Block01'
import Main from '@solid-ui-blocks/SEO/Main'
import Base from '@solid-ui-blocks/SEO/Base'
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
      <Header />
      <Divider space='5' />
      <Divider space='5' />
      <Container variant='full' sx={styles.heroContainer}>
        <Hero />
      </Container>
      <Divider space='3' />
      <Companies />
      <Divider space='5' />
      <Services />
      <Divider space='5' />
      <Divider space='5' />
      <FeatureOne />
      <Divider space='5' />
      <Divider space='5' />
      <Container variant='wide' sx={styles.whyChooseUsContainer}>
        <WhyChooseUs />
      </Container>
      <Divider space='5' />
      <Divider space='5' />
      <FeatureTwo />
      <Divider space='6' />
      <Divider space='6' />
      <Container variant='full' sx={styles.strategiesContainer}>
        <Divider space={-6} />
        <Strategies />
      </Container>
      <Divider space='5' />
      <Divider space='5' />
      <Testimonials />
      <Divider space='5' />
      <Divider space='5' />
      <GetStarted />
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
