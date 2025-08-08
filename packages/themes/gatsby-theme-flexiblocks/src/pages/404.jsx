import React from 'react'
import { graphql } from 'gatsby'
import Layout from '@solid-ui-layout/Layout'
import Seo from '@solid-ui-components/Seo'
import Divider from '@solid-ui-components/Divider'
import Menu from '@solid-ui-blocks/Menu'
import Message from '@solid-ui-blocks/FeaturesWithPhoto/Block01'
import { normalizeBlockContentNodes } from '@blocks-helpers'
import Main from '@solid-ui-blocks/SEO/Main'
import Base from '@solid-ui-blocks/SEO/Base'
import './error.css'

const NotFoundPage = props => {
  const { allBlockContent } = props.data
  const content = normalizeBlockContentNodes(allBlockContent?.nodes)

  return (
    <Layout {...props}>
      <Seo title='Oops! Page Not Found' description="You'veDiscover Mumara's world of possibilities. Lost? Don't worry, we'll guide you back. Explore our range of products and services. reached a dead end! Explore Mumara's email marketing automation solutions or contact us for assistance." keywords="Mumara, email marketing automation, 404 error, page not found, website error, marketing software, email campaigns" canonical="https://www.mumara.com/404" favicon="https://www.mumara.com/favicon.ico" />
      <div className="error-404">
        <Menu content={content['header']} />
        <Divider space='5' />
        <div className="error-page-content">
          <h1 style={{height: 0, fontSize:0}}>Page Not Found!</h1>
          <Message content={content['404']} reverse />
        </div>
      </div>

      <Main />
      <Base />
        
    </Layout>
  )
}

export const query = graphql`
  query misc404BlockContent {
    allBlockContent(filter: { page: { in: ["innerpage/404", "shared"] } }) {
      nodes {
        ...BlockContent
      }
    }
  }
`

export default NotFoundPage
