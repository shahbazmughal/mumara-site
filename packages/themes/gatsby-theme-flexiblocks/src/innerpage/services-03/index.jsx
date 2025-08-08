import React from 'react'
import { graphql } from 'gatsby'
import { Container } from 'theme-ui'
import Layout from '@solid-ui-layout/Layout'
import Seo from '@solid-ui-components/Seo'
import Divider from '@solid-ui-components/Divider'
import ModalWithTabs from '@solid-ui-blocks/Modal/Block01'
import ModalSimple from '@solid-ui-blocks/Modal/Block02'
import Header from '@solid-ui-blocks/Header/Block01'
import Content from '@solid-ui-blocks/services03/Content/Block02'
import Content1 from '@solid-ui-blocks/services03/Content1/Block02'
import Content2 from '@solid-ui-blocks/services03/Content2/Block02'
import Content3 from '@solid-ui-blocks/services03/Content3/Block02'
import Gallery from '@solid-ui-blocks/services03/Blog/Block01'
import Contact from '@solid-ui-blocks/CallToAction/Block02'
import Team from '@solid-ui-blocks/services03/Hero/Block03'
import Footer from '@solid-ui-blocks/Footer/Block01'
import Main from '@solid-ui-blocks/SEO/Main'
import Base from '@solid-ui-blocks/SEO/Base'
import { normalizeBlockContentNodes } from '@blocks-helpers'
import styles from './_styles'

const Services03 = props => {

  return (
    <Layout {...props}>
      <Seo />
      <ModalWithTabs reverse />
      <ModalWithTabs />
      <ModalSimple />
      <Header />
      <Divider space='5' />
      <Container variant='wide' sx={styles.heroContainer}>
        <Divider space='3' />
        <Gallery />
      </Container>
      <Divider space='5' />
      <Container variant='wide' sx={styles.teamContainer}>
        <Team />
      </Container>
      <Divider space='5' />
      <Content />
      <Content1 />
      <Content2 />
      <Content3 />
      <Divider space='5' />
      <Contact />
      <Divider space='5' />
      <Footer />
      <Main />
      <Base />
    </Layout>
  )
}

export default Services03
