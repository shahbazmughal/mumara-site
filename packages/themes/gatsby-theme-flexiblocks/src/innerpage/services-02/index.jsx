import React from 'react'
import { graphql } from 'gatsby'
import { Container } from 'theme-ui'
import Layout from '@solid-ui-layout/Layout'
import Seo from '@solid-ui-components/Seo'
import Divider from '@solid-ui-components/Divider'
import ModalWithTabs from '@solid-ui-blocks/Modal/Block01'
import ModalSimple from '@solid-ui-blocks/Modal/Block02'
import Header from '@solid-ui-blocks/Header2/Block01'
import Hero from '@solid-ui-blocks/services02/Hero/Block02'
import Services from '@solid-ui-blocks/services02/FeaturesWithPhoto/Block02'
import ServicesDetails from '@solid-ui-blocks/services02/Faq/Block02'
import Contact from '@solid-ui-blocks/services02/CallToAction/Block02'
import CompaniesPhoto from '@solid-ui-blocks/services02/FeaturesWithPhoto/Block03'
import JoinCompanies from '@solid-ui-blocks/services02/Content/Block01'
import Companies from '@solid-ui-blocks/services02/Companies/Block01'
import Footer from '@solid-ui-blocks/Footer/Block01'
import Main from '@solid-ui-blocks/SEO/Main'
import Base from '@solid-ui-blocks/SEO/Base'
import { normalizeBlockContentNodes } from '@blocks-helpers'
import styles from './_styles'

const Services02 = props => {

  return (
    <Layout {...props}>
      <Seo />
      <ModalWithTabs reverse />
      <ModalWithTabs />
      <ModalSimple />
      <Header />
      <Container variant='full' sx={styles.heroContainer}>
        <Hero />
        <Divider space='4' />
        <Container variant='cards.paper-lg' sx={styles.servicesContainer}>
          <Services />
        </Container>
      </Container>
      <Divider space='5' />
      <ServicesDetails />
      <Divider space='5' />
      <CompaniesPhoto />
      <Divider space='4' />
      <JoinCompanies />
      <Divider space='4' />
      <Companies />
      <Divider space='4' />
      <Contact />
      <Divider space='5' />
      <Footer />
      <Main />
      <Base />
    </Layout>
  )
}

export default Services02
