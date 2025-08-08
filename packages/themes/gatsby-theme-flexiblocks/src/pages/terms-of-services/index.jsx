import React from 'react'
import { graphql } from 'gatsby'
import { Container } from 'theme-ui'
import Layout from '@solid-ui-layout/Layout'
import Seo from '@solid-ui-components/Seo'
import Divider from '@solid-ui-components/Divider'
import Footer from '@solid-ui-blocks/Footer/Block01'
import Features from '@solid-ui-blocks/Privacy/Block06'
import Team from '@solid-ui-blocks/Privacy/Block03'
import { normalizeBlockContentNodes } from '@blocks-helpers'
import Menu from '@solid-ui-blocks/Menu'
import Main from '@solid-ui-blocks/SEO/Main'
import Base from '@solid-ui-blocks/SEO/Base'
import styles from './_styles'
import theme from './_theme'
import './about-us.css'

const TermsServices = props => {
  const { allBlockContent } = props.data
  const content = normalizeBlockContentNodes(allBlockContent?.nodes)

  return (
    <Layout theme={theme} {...props}>
      <Seo title='Mumara Terms of Service | Understand Your Rights' description="Read Mumara's Terms of Service to understand your rights and responsibilities. Our clear and comprehensive terms ensure transparency and trust. Learn more." image="https://post.mumara.com/images/terms-of-services.png" image2="https://post.mumara.com/images/terms-of-services.png" canonical="https://www.mumara.com/terms-of-services/" favicon="https://www.mumara.com/favicon.ico" />
      {/* Blocks */}
      <div className="terms-page-main" >
        <Menu content={content['header']} />
        <Team content={content['team']} />
        <Container className="terms-us-page" variant='full' sx={styles.heroContainer}>
          <div className="box-container">
            <Features content={content['cl_features']} />
            <h1 align="center" style={{height: 0, fontSize:0}}>Terms and Conditions</h1>
            <ol>
              <li>The portion of SaaS mainly consists of Campaign+, SMS+ and MumaraSMS, more can be released in future. This portion of SaaS apps is the hosted ones and you typically sign-up for the paid subscription to use the services.</li>
              <li>Once you sign-up for an account and subscribe to a package, Mumara auto-provisions the installation process on a remote instance, and grants you exclusive and non-transferable access to your account/user license. You can access your account from anywhere globally to start using your services.</li>
              <li>You cannot request the transfer of your account, or demand the installation of the license to a server/location of your choice.</li>
            </ol>
            <div className="css-1dsqwuv">
              <h4 className="css-16ufw76">Self-Hosted <span className="css-14je365">Apps</span></h4>
            </div>
            <ol>
              <li>Both MumaraClassic version (ESP/Pro) was always been and will remain self-hosted. Campaigns+ too has a self-hosted version. More apps or self-hosted versions of apps can later be released in future.</li>
              <li>You can install access and control the product from the web server you choose. Single license limits the installation to a single domain and web server at a time. However, to swap the installation domain or web server you would need to reissue the license.</li>
              <li>You will not be able to use single user license on more than one computer in a network.</li>
              <li>You aren’t allowed to lease or lend any sublicenses by charging the money or even free of cost. However this does not prevent you to use the application for regular business course.</li>
            </ol>
            <Features content={content['cl_features2']} />
            <ul>
              <li>Free of cost remedy of the fault</li>
              <li>Replacement of the license</li>
            </ul>
            <Features content={content['cl_features3']} />
            <ul>
              <li>You agree to always follow double opt-in process of collecting the consent</li>
              <li>You should keep a proof/record of consent to be able to demonstrate that the subscriber has provided the consent for email purposes.</li>
              <li>You must have a system in place for the consumers/subscribers to request for the removal of their personal information that they earlier have provided.</li>
            </ul>
            <Features content={content['cl_features4']} />
            <ul>
              <li>Make it noticeable to your contacts while acquiring consent or in agreement</li>
              <li>Provide your contacts/subscribers a way to opt out from the profiling (Halt Profiling)</li>
            </ul>
            <Features content={content['cl_features5']} />
          </div>
          <Divider space='5' />
        </Container>
        <Footer content={content['footer']} />
      </div>
      <Main />
      <Base />
    </Layout>
  )
}

export const query = graphql`
  query termsBlockContent {
    allBlockContent(
      filter: { page: { in: ["terms-of-services", "shared"] } }
    ) {
      nodes {
        ...BlockContent
      }
    }
  }
`

export default TermsServices
