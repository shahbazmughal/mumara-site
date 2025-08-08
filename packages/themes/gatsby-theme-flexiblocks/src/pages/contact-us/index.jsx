import React from 'react'
import { graphql } from 'gatsby'
import Team from '@solid-ui-blocks/Contacts/HeroBlock03'
import Layout from '@solid-ui-layout/Layout'
import Seo from '@solid-ui-components/Seo'
import Divider from '@solid-ui-components/Divider'
import Footer from '@solid-ui-blocks/Footer/Block01'
import { normalizeBlockContentNodes } from '@blocks-helpers'
import Contacts from '@solid-ui-blocks/Contacts/Contacts'
import Menu from '@solid-ui-blocks/Menu'
import Main from '@solid-ui-blocks/SEO/Main'
import Base from '@solid-ui-blocks/SEO/Base'
import theme from './_theme'
import './contactspage.css'

const IndexPage = props => {
  const { allBlockContent } = props.data
  const content = normalizeBlockContentNodes(allBlockContent?.nodes)

  return (
    <Layout theme={theme} {...props} className="contactus-page-main">
      <Seo title='Contact Us | customer support' description="Fill in the contact form to send your query regarding apps and services or navigate your preferred app to send the demo request." keywords="customer support, mumara phone number,mumara contact number,mumara support,contact mumara" image="https://post.mumara.com/images/contact-us.png" image2="https://post.mumara.com/images/contact-us.png" canonical="https://www.mumara.com/contact-us/" favicon="https://www.mumara.com/favicon.ico" />
        {/* <Header content={content['header']} /> */}
        <Menu content={content['header']} />

        <Team content={content['team']} />
        <Divider space='5' />
        <h1 align="center" className="d-none" style={{ color: "#FFF" }}>customer support</h1>
        <Contacts  />
        <Divider space='5' />
        <div className="d-none" style={{ color: "#FFF" }}>knowledge base, customer relationship, customer support teams, serve customers, live chat, customer service and customer, problem solving, great customer support, terms customer, customer service team, support agents, customer satisfaction, customer centric, types of customer, great customer service, delight customers, customer experience</div>
        <Footer content={content['footer']} />
        <Main />
        <Base />
    </Layout>
  )
}

export const query = graphql`
  query contactUsBlockContent {
    allBlockContent(filter: { page: { in: ["contact-us", "shared"] } }) {
      nodes {
        ...BlockContent
      }
    }
  }
`
export default IndexPage
