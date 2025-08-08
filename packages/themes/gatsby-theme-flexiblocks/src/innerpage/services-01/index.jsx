import React from 'react'
import { graphql } from 'gatsby'
import { Container } from 'theme-ui'
import Layout from '@solid-ui-layout/Layout'
import Seo from '@solid-ui-components/Seo'
import Divider from '@solid-ui-components/Divider'
import ModalWithTabs from '@solid-ui-blocks/Modal/Block01'
import ModalSimple from '@solid-ui-blocks/Modal/Block02'
import Header from '@solid-ui-blocks/Header/Block01'
import Features from '@solid-ui-blocks/services01/Features/Block06'
import Feature from '@solid-ui-blocks/services01/FeaturesWithPhoto/Block05'
import Companies from '@solid-ui-blocks/services01/Companies/Block01'
import Calltoaction from '@solid-ui-blocks/services01/Hero/Block03'
import Faq from '@solid-ui-blocks/services01/Faq/Block02'
import Footer from '@solid-ui-blocks/Footer/Block01'
import Main from '@solid-ui-blocks/SEO/Main'
import Base from '@solid-ui-blocks/SEO/Base'
import { normalizeBlockContentNodes } from '@blocks-helpers'
import styles from './_styles'

const Services01 = props => {

  return (
    <Layout {...props}>
      <Seo />
      <ModalWithTabs reverse />
      <ModalWithTabs />
      <ModalSimple />
      <Header />
      <Container variant='full' sx={styles.heroContainer}>
        <Features />
      </Container>
      <Divider space='5' />
      <Divider space='5' />
      <Feature />
      <Divider space='4' />
      <Companies />
      <Divider space='5' />
      <Divider space='5' />
      <Calltoaction />
      <Divider space='5' />
      <Divider space='5' />
      <Faq />
      <Divider space='5' />
      <Divider space='5' />
      <Footer />
      <Main />
      <Base />
    </Layout>
  )
}

export default Services01
