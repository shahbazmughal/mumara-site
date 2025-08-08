import React from 'react'
import { graphql } from 'gatsby'
import { Container } from 'theme-ui'
import Layout from '@solid-ui-layout/Layout'
import Seo from '@solid-ui-components/Seo'
import Divider from '@solid-ui-components/Divider'
import SubHeader from '@solid-ui-blocks/SubHeader/SubHeader'
import Footer from '@solid-ui-blocks/Footer/Block01'
import { normalizeBlockContentNodes } from '@blocks-helpers'
import Main from '@solid-ui-blocks/SEO/Main'
import Base from '@solid-ui-blocks/SEO/Base'
import OneSeo from '@solid-ui-blocks/One/Features/OneSeo'
import Hero from '@solid-ui-blocks/One/Features/HeroBlock02'
import Services from '@solid-ui-blocks/One/Features/FeaturesBlock05'
import FeatureLeft from '@solid-ui-blocks/One/Features/FeatureLeft'
import FeatureRight from '@solid-ui-blocks/One/Features/FeatureRight'
import FeatureMain from '@solid-ui-blocks/One/Features/FeatureMain'
import CallToAction from '@solid-ui-blocks/CallToAction'
import Buttons from '@solid-ui-blocks/Home/ButtonsBlock01'
import Menu from '@solid-ui-blocks/Menu'
import theme from './_theme'
import styles from './_styles'
import './onefeature.css'

const IndexPage = props => {
  const { allBlockContent } = props.data
  const content = normalizeBlockContentNodes(allBlockContent?.nodes)

  return (
    <Layout theme={theme} {...props} xs={styles.body}>
      <div className="one-feature">
        <Seo title='Simplify Your Email Marketing & Growth (Mumara One)' description="Take control & automate email marketing with Mumara ONE. Design emails, personalize campaigns, & track results - all in one platform. Start growing your business today!" image="https://post.mumara.com/images/one-features.png" image2="https://post.mumara.com/images/one-features.png" canonical="https://www.mumara.com/one/features/" favicon="https://www.mumara.com/favicon.ico" />
        <Menu content={content['header']} />
        {/* Blocks */}
        <div className="subheader-block">
          <SubHeader content={content['subheader_one']} menuJustify='space-between' />
        </div>
        <Container className="one-features-heroblock landing-pages" variant='full' sx={styles.heroContainer}>
          <Hero content={content['hero']} />
          <Divider space='5' />
        </Container>

        <div id="list-create-manage" className="one-features-main bg-white section">
          <FeatureLeft content={content['features1']} />
          <FeatureRight content={content['features2']} />
          <FeatureLeft content={content['features3']} />
          <FeatureRight content={content['features4']} />
        </div>
        

        <div className='oneservice1 bg-light section image-left'>
          <FeatureRight content={content['features5']} />
          <FeatureMain content={content['featuremain1']} />
        </div>

        <div id="automation" className='oneservice2 bg-white section'>
          <Services content={content['services1']} />
          <span id="drip-campaigns">
            <FeatureMain content={content['featuremain2']} />
          </span>
          <FeatureMain content={content['featuremain3']} />
        </div>

        <div id="campaign-builder" className='oneservice3 bg-light section image-right'>
          <FeatureLeft content={content['features6']} />
          <FeatureMain content={content['featuremain4']} />
        </div>

        <div id="testing" className='oneservice2 bg-white section'>
          <Services content={content['services2']} />
          <FeatureMain content={content['featuremain5']} />
        </div>

        <div id="personalized-marketing" className='oneservice2 bg-light section'>
          <Services content={content['services3']} />
          <FeatureMain content={content['featuremain6']} />
          <FeatureMain content={content['featuremain7']} />
        </div>

        <div id="swift-sending" className='oneservice2 bg-white section'>
          <Services content={content['services4']} />
          <FeatureMain content={content['featuremain8']} />
        </div>

        <div id="ecommerce" className='oneservice2 bg-light section ecommerce'>
          <Services content={content['services5']} />
          <FeatureMain content={content['featuremain9']} />
          <FeatureMain content={content['featuremain10']} />
          <FeatureMain content={content['featuremain11']} />
        </div>

        <div className='oneservice3 bg-light section image-right'>
          <FeatureLeft content={content['features7']} />
          <FeatureMain content={content['featuremain12']} />
        </div>

        <div id="landing-pages" className='one-features-main section' style={styles.landingBg}>
          <Services content={content['services7']} />
          <FeatureLeft content={content['features8']} />
          <FeatureRight content={content['features9']} />
          <FeatureLeft content={content['features12']} />
          <FeatureRight content={content['features13']} />
          <Buttons content={content['buttons1']} />
        </div>

        <div id="pixel-tracking" className='one-features-main section' style={styles.pixelBg}>
          <Services content={content['services8']} />
          <FeatureLeft content={content['features10']} />
          <FeatureRight content={content['features11']} />
          <Buttons content={content['buttons2']} />
        </div>
        
      <CallToAction bg="bg-success" content="Ready to Get Started with Mumara One" btname="Get Started" link="/one/pricing/" />
        <Footer content={content['footer']} />
        <Main />
        <Base />
        <OneSeo />
      </div>
    </Layout>
  )
}

export const query = graphql`
  query oneFeaturesBlockContent {
    allBlockContent(
      filter: { page: { in: ["one/features", "shared"] } }
    ) {
      nodes {
        ...BlockContent
      }
    }
  }
`
export default IndexPage
