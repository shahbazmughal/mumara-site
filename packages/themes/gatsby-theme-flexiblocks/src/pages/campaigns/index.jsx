import React from 'react'
import { graphql } from 'gatsby'
import { Container } from 'theme-ui'
import Layout from '@solid-ui-layout/Layout'
import Seo from '@solid-ui-components/Seo'
import Divider from '@solid-ui-components/Divider'
import Hero from '@solid-ui-blocks/Campaigns/HeroBlock02'
import Companies from '@solid-ui-blocks/Campaigns/CompaniesBlock01'
import Services from '@solid-ui-blocks/Campaigns/FeaturesBlock05'
import Services2 from '@solid-ui-blocks/Campaigns/FeaturesBlock06'
import FeatureOne from '@solid-ui-blocks/Campaigns/FeaturesWithPhotoBlock01'
import WhyChooseUs2 from '@solid-ui-blocks/Campaigns/FeaturesBlock04'
import FeatureTwo from '@solid-ui-blocks/Campaigns/FeaturesWithPhotoBlock02'
import Footer from '@solid-ui-blocks/Footer/Block01'
import Team from '@solid-ui-blocks/Campaigns/HeroBlock03'
import GetStarted from '@solid-ui-blocks/Campaigns/StatsBlock02'
import GetStarted2 from '@solid-ui-blocks/Campaigns/StatsBlock022'
import FeatureLeft from '@solid-ui-blocks/Campaigns/FeatureLeft'
import FeatureRight from '@solid-ui-blocks/Campaigns/FeatureRight'
import FeatureThree from '@solid-ui-blocks/Campaigns/FeaturesBlock07'
import FeatureTabOne from '@solid-ui-blocks/One/FeaturesWithPhotoBlock05'
import FeatureTabTwo from '@solid-ui-blocks/One/FeaturesWithPhotoBlock06'
import FeatureTabThree from '@solid-ui-blocks/One/FeaturesWithPhotoBlock01'
import Features from '@solid-ui-blocks/Smsplus/FeaturesBlock02'
import { normalizeBlockContentNodes } from '@blocks-helpers'
import Buttons from '@solid-ui-blocks/Home/ButtonsBlock01'
import SubHeader from '@solid-ui-blocks/SubHeader/SubHeader'
import Menu from '@solid-ui-blocks/Menu'
import Main from '@solid-ui-blocks/SEO/Main'
import Base from '@solid-ui-blocks/SEO/Base'
import CampaignsSeo from '@solid-ui-blocks/Campaigns/CampaignsSeo'
import CallToAction from '@solid-ui-blocks/CallToAction'
import theme from './_theme'
import styles from './_styles'
import './campaigns-main.css'

const IndexPage = props => {
  const { allBlockContent } = props.data
  const content = normalizeBlockContentNodes(allBlockContent?.nodes)

  return (
    <Layout theme={theme} {...props} xs={styles.body}>
      <Seo title='Email Marketing & Automation | Mumara Campaigns' description="Intelligently crafted features to ensure higher level of email engagement, Mumara Campaigns is available as Cloud and Self-Hosted platform." image="https://post.mumara.com/images/mumara-campaigns.png" image2="https://post.mumara.com/images/mumara-campaigns.png" canonical="https://www.mumara.com/campaigns/" favicon="https://www.mumara.com/favicon.ico" />
      {/* Blocks */}
      <div className="campaignplus-page">
        {/* <Header content={content['header']} /> */}
        <Menu content={content['header']} />
        <div className="subheader-block">
          <SubHeader content={content['subheader_campaign']} menuJustify='space-between' />
        </div>
        <Container variant='full' sx={styles.heroContainer}>
          <Hero content={content['hero']} />
          <Divider space='2' />
        </Container>
        <Divider space='4' />
        <Companies content={content['companies']} />
        <Divider space='5' />
        <Divider space='5' />
        <div className="camp-feature0">
          <GetStarted content={content['get-started']} />
        </div>

        <Divider space='5' />
        <div className='campservice1'>
          <Services content={content['services']} />
        </div>
        <Divider space='5' />
        <div className="innerpage-section img-right">
          <FeatureLeft content={content['features1']} />
        </div>
        <div className="innerpage-section img-left">
          <FeatureRight content={content['features2']} />
        </div>
        <div className="innerpage-section img-right">
          <FeatureLeft content={content['features3']} />
        </div>
        <div className="innerpage-section img-left">
          <FeatureRight content={content['features4']} />
        </div>
        <div className='campservice2'>
          <Services content={content['services2']} />
        </div>
        <Container variant='full' sx={styles.featuresContainerR}>
          <Features content={content['features']} />
        </Container>
        <Divider space='5' />

        <Divider space='5' />
        <WhyChooseUs2 content={content['why-choose-us2']} />

        <Divider space='5' />
        <div className='campservice3'>
          <Services content={content['services3']} />
        </div>
        <Divider space='5' />
        <div className="innerpage-section img-right">
          <FeatureLeft content={content['features9']} />
        </div>
        <div className="innerpage-section img-left">
          <FeatureRight content={content['features10']} />
        </div>
        <div className="innerpage-section img-right">
          <FeatureLeft content={content['features11']} />
        </div>
        <div className="innerpage-section img-left">
          <FeatureRight content={content['features12']} />
        </div>

        <Divider space='5' />
        <div className='campservice4'>
          <Services2 content={content['services4']} />
        </div>
        <div className="innerpage-section img-right">
          <FeatureLeft content={content['features13']} />
        </div>
        <div className="innerpage-section img-left">
          <FeatureRight content={content['features14']} />
        </div>
        <div className="innerpage-section img-right">
          <FeatureLeft content={content['features15']} />
        </div>
        <div className="innerpage-section img-left">
          <FeatureRight content={content['features16']} />
        </div>
        <div className="innerpage-section img-left">
          <FeatureLeft content={content['features17']} />
        </div>
        <Divider space='5' />
        <div className='campservice5'>
          <Services content={content['services5']} />
        </div>
        <Divider space='5' />
        <Container variant='wide' sx={styles.featuresContainerC}>
          <FeatureTabOne content={content['feature-tab-one']} reverse />
          <Divider space='5' />
          <Divider space='5' />
          <FeatureTabTwo content={content['feature-tab-two']} />
          <Divider space='5' />
          <Divider space='5' />
          <FeatureTabThree content={content['feature-tab-three']} reverse />
        </Container>
        <Divider space='5' />

        <Divider space='5' />
        <div className='campservice6'>
          <WhyChooseUs2 content={content['whychooseus3']} />
          <Buttons content={content['buttons']} />
        </div>

        <Divider space='5' />
        <div className='campservice7'>
          <Services content={content['services6']} />
        </div>
        <FeatureThree content={content['features21']} />
        <FeatureThree content={content['features22']} />
        <FeatureThree content={content['features23']} />

        <Divider space='5' />
        <Container className='campservice8' variant='wide' sx={styles.featuresContainer}>
          <Services content={content['services7']} />
          <Divider space='3' />
          <FeatureLeft content={content['features24']} />
          <Divider space='5' />
          <FeatureRight content={content['features25']} />
        </Container>
        <Divider space='5' />

        <div className='campservice9'>
          <Services content={content['services8']} />
          <Divider space='3' />
          <FeatureLeft content={content['features26']} />
          <Divider space='5' />
          <FeatureRight content={content['features27']} />
          <Divider space='5' />
          <FeatureLeft content={content['features28']} />
        </div>

        <Divider space='5' />
        <Divider space='5' />
        <FeatureOne content={content['feature-one']} />
        <Divider space='5' />
        <Divider space='5' />
        <FeatureTwo content={content['feature-two']} />
        <Divider space='6' />
        <FeatureLeft content={content['features29']} />
        <Divider space='5' />
        <div className="camp-feature00">
          <GetStarted2 content={content['get-started2']} />
        </div>
        <Divider space='5' />
        <CallToAction bg="success" content="Ready to Get Started with Mumara Campaigns" btname="Buy Now" link="/campaigns/pricing/" />
        <Team content={content['team']} />
        <Footer content={content['footer']} />

        <Main />
        <Base />
        <CampaignsSeo />
      </div>
    </Layout>
  )
}

export const query = graphql`
  query campaignsBlockContent {
    allBlockContent(
      filter: { page: { in: ["campaigns", "shared"] } }
    ) {
      nodes {
        ...BlockContent
      }
    }
  }
`
export default IndexPage
