import React from 'react'
import { graphql } from 'gatsby'
import { Container } from 'theme-ui'
import Layout from '@solid-ui-layout/Layout'
import Seo from '@solid-ui-components/Seo'
import Divider from '@solid-ui-components/Divider'
import ModalWithTabs from '@solid-ui-blocks/Modal/Block01'
import ModalSimple from '@solid-ui-blocks/Modal/Block02'
import Header from '@solid-ui-blocks/Header/Block01'
import Footer from '@solid-ui-blocks/Footer/Block01'
import Pricing from '@solid-ui-blocks/Pricing02/Pricing/Block01'
import Features from '@solid-ui-blocks/Pricing02/Feature/Block05'
import Faq from '@solid-ui-blocks/Pricing02/Faq/Block01'
import Main from '@solid-ui-blocks/SEO/Main'
import Base from '@solid-ui-blocks/SEO/Base'
import { normalizeBlockContentNodes } from '@blocks-helpers'

const Pricing02 = props => {

  return (
    <Layout {...props}>
      <Seo />
      <ModalWithTabs reverse />
      <ModalWithTabs />
      <ModalSimple />
      <Header />
      <Divider space='6' />
      <Pricing />
      <Divider space='5' />
      <Features />
      <Divider space='5' />
      <Container variant='narrow'>
        <Faq />
      </Container>
      <Divider space='5' />
      <Footer />
      <Main />
      <Base />
    </Layout>
  )
}
export default Pricing02
