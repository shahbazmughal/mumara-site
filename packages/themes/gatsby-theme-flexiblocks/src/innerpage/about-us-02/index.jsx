import React from 'react'
import { graphql } from 'gatsby'
import { Container } from 'theme-ui'
import Layout from '@solid-ui-layout/Layout'
import Seo from '@solid-ui-components/Seo'
import Divider from '@solid-ui-components/Divider'
import ModalWithTabs from '@solid-ui-blocks/Modal/Block01'
import ModalSimple from '@solid-ui-blocks/Modal/Block02'
import Header from '@solid-ui-blocks/Header/Block01'
import Strategie from '@solid-ui-blocks/AboutUs02/Strategie/Block02'
import ContentOne from '@solid-ui-blocks/AboutUs02/Content/Block01'
import ContentTwo from '@solid-ui-blocks/AboutUs02/Features/Block06'
import Team from '@solid-ui-blocks/AboutUs02/Teams/Block02'
import Footer from '@solid-ui-blocks/Footer/Block01'
import Main from '@solid-ui-blocks/SEO/Main'
import Base from '@solid-ui-blocks/SEO/Base'
import { normalizeBlockContentNodes } from '@blocks-helpers'

const AboutUs02 = props => {

  return (
    <Layout {...props}>
      <Seo />
      <ModalWithTabs reverse />
      <ModalWithTabs />
      <ModalSimple />
      <Header />
      <Divider space='6' />
      <ContentTwo />
      <Divider space='4' />
      <Container variant='narrow'>
        <ContentOne />
      </Container>
      <Divider space='5' />
      <Strategie />
      <Divider space='5' />
      <Divider space='5' />
      <Team />
      <Divider space='5' />
      <Footer />
      <Main />
      <Base />
    </Layout>
  )
}

export default AboutUs02
