import React from 'react'
import { graphql } from 'gatsby'
import { Container } from 'theme-ui'
import Layout from '@solid-ui-layout/Layout'
import Hero from '@solid-ui-blocks/Hero/Block01'
import Divider from '@solid-ui-components/Divider'
import ModalWithTabs from '@solid-ui-blocks/Modal/Block01'
import ModalSimple from '@solid-ui-blocks/Modal/Block02'
import Header from '@solid-ui-blocks/Header/Block01'
import Footer from '@solid-ui-blocks/Footer/Block01'
import Pricing from '@solid-ui-blocks/Pricing/Block02'
import Testimonials from '@solid-ui-blocks/Testimonials/Block04'
import Faq from '@solid-ui-blocks/Faq/Block01'
import { normalizeBlockContentNodes } from '@blocks-helpers'

const Pricing03 = props => {

  return (
    <Layout {...props}>
      {/* Modals */}
      {/* <ModalWithTabs content={content['authentication']} reverse />
      <ModalWithTabs content={content['contact']} />
      <ModalSimple content={content['advertisement']} /> */}
      {/* Blocks */}
      <Divider space='6' />
      <Hero />
      <Divider space='6' />
      <Pricing />
      <Divider space='5' />
      <Container variant='narrow'>
        <Testimonials />
        <Divider space='5' />
        <Faq />
      </Container>
      <Divider space='5' />
      <Footer />
    </Layout>
  )
}
export default Pricing03
