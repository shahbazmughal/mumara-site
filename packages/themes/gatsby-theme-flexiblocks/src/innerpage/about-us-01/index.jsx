import React from 'react'
import { graphql } from 'gatsby'
import { Container } from 'theme-ui'
import Layout from '@solid-ui-layout/Layout'
import Seo from '@solid-ui-components/Seo'
import Divider from '@solid-ui-components/Divider'
import ModalWithTabs from '@solid-ui-blocks/Modal/Block01'
import ModalSimple from '@solid-ui-blocks/Modal/Block02'
import Header from '@solid-ui-blocks/Header/Block01'
import Hero from '@solid-ui-blocks/AboutUs01/Hero/Block01'
import Content from '@solid-ui-blocks/AboutUs01/Content/Block01'
import Content2 from '@solid-ui-blocks/AboutUs01/Content2/Block01'
import Footer from '@solid-ui-blocks/Footer/Block01'
import Team from '@solid-ui-blocks/AboutUs01/Teams/Block02'
import Main from '@solid-ui-blocks/SEO/Main'
import Base from '@solid-ui-blocks/SEO/Base'
import { normalizeBlockContentNodes } from '@blocks-helpers'
import styles from './_styles'

const AboutUs01 = props => {

  return (
    <Layout {...props}>
      <Seo />
      <ModalWithTabs reverse />
      <ModalWithTabs />
      <ModalSimple />
      <Header />
      <Container variant='full' sx={styles.heroContainer}>
        <Hero />
      </Container>
      <Divider space='5' />
      <Content />
      <Divider space='5' />
      <Divider space='5' />
      <Team />
      <Divider space='5' />
      <Container variant='wide' sx={styles.contentTwoContainer}>
        <Content2 />
      </Container>
      <Divider space='5' />
      <Footer />
      <Main />
      <Base />
    </Layout>
  )
}

export default AboutUs01
