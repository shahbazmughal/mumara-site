import React from 'react'
import { graphql } from 'gatsby'
import { Container } from 'theme-ui'
import Layout from '@solid-ui-layout/Layout'
import Seo from '@solid-ui-components/Seo'
import Divider from '@solid-ui-components/Divider'
import SubHeader from '@solid-ui-blocks/SubHeader/SubHeader'
// import Header from '@solid-ui-blocks/Campaigns/Features/HeaderBlock01'
import Footer from '@solid-ui-blocks/Footer/Block01'
import { normalizeBlockContentNodes } from '@blocks-helpers'
import Main from '@solid-ui-blocks/SEO/Main'
import Base from '@solid-ui-blocks/SEO/Base'
import CampaignsSeo from '@solid-ui-blocks/Campaigns/Features/CampaignsSeo'
import FeatureBlock01 from '@solid-ui-blocks/Campaigns/Features/FeatureBlock01'
import FeatureBlock02 from '@solid-ui-blocks/Campaigns/Features/FeatureBlock02'
import FeatureBlock03 from '@solid-ui-blocks/Campaigns/Features/FeatureBlock03'
import FeatureBlock04 from '@solid-ui-blocks/Campaigns/Features/FeatureBlock04'
import FeatureBlock05 from '@solid-ui-blocks/Campaigns/Features/FeatureBlock05'
import FeatureBlock06 from '@solid-ui-blocks/Campaigns/Features/FeatureBlock06'
import FeatureBlock07 from '@solid-ui-blocks/Campaigns/Features/FeatureBlock07'
import FeatureBlock08 from '@solid-ui-blocks/Campaigns/Features/FeatureBlock08'
import FeatureBlock09 from '@solid-ui-blocks/Campaigns/Features/FeatureBlock09'
import FeatureBlock10 from '@solid-ui-blocks/Campaigns/Features/FeatureBlock10'
import FeatureBlock11 from '@solid-ui-blocks/Campaigns/Features/FeatureBlock11'
import FeatureBlock12 from '@solid-ui-blocks/Campaigns/Features/FeatureBlock12'
import FeatureBlock13 from '@solid-ui-blocks/Campaigns/Features/FeatureBlock13'
import FeatureBlock14 from '@solid-ui-blocks/Campaigns/Features/FeatureBlock14'
import FeatureBlock15 from '@solid-ui-blocks/Campaigns/Features/FeatureBlock15'
import FeatureBlock16 from '@solid-ui-blocks/Campaigns/Features/FeatureBlock16'
import FeatureBlock17 from '@solid-ui-blocks/Campaigns/Features/FeatureBlock17'
import FeatureBlock18 from '@solid-ui-blocks/Campaigns/Features/FeatureBlock18'
import FeatureBlock19 from '@solid-ui-blocks/Campaigns/Features/FeatureBlock19'
import FeatureBlock20 from '@solid-ui-blocks/Campaigns/Features/FeatureBlock20'
// import FeatureBlock21 from '@solid-ui-blocks/Campaigns/Features/FeatureBlock21'
import PriceBlock01 from '@solid-ui-blocks/Campaigns/Pricing/PriceBlock01'
import Contacts from '@solid-ui-blocks/Contacts/Contacts'
import Faq from '@solid-ui-blocks/One/Pricing/FaqBlock01'
import Menu from '@solid-ui-blocks/Menu'
import Hero from '@solid-ui-blocks/Campaigns/Features/HeroBlock02'
import theme from './_theme'
import styles from './_styles'
import './campfeature.css'

const IndexPage = props => {
  const { allBlockContent } = props.data
  const content = normalizeBlockContentNodes(allBlockContent?.nodes)

  return (
    <Layout theme={theme} {...props} xs={styles.body}>
      <div className="camp-feature campaigns-explained">
      <Seo title='Email Marketing Tools | Mumara Campaigns Features' description="Use the best email marketing tools to send customized emails, A/B test your campaigns, Drag & Drop builder, HTML Editor for your targeted email campaigns. Get started." keywords="email campaigns, marketing email templates, best email marketing tools, email campaign ideas, e-commerce email marketing" image="https://post.mumara.com/images/campaigns-explained.jpg" image2="https://post.mumara.com/images/campaigns-explained.jpg" canonical="https://www.mumara.com/campaigns/explained/" favicon="https://www.mumara.com/favicon.ico" />
        {/* Blocks */}
        <Menu content={content['header']} className='innerHeader' />
        <div className="subheader-block">
          <SubHeader content={content['subheader_campaign']} menuJustify='space-between' />
        </div>
        <Container variant='full' sx={styles.heroContainer} className='campFhero'>
          <Hero content={content['hero']} />
        </Container>
        <Divider space='3' />
        <FeatureBlock01 content={content['feature1']} />
        <FeatureBlock02 content={content['feature2']} />
        <FeatureBlock03 content={content['feature3']} />
        <FeatureBlock04 content={content['feature4']} />
        <FeatureBlock05 content={content['feature5']} />
        <FeatureBlock06 content={content['feature6']} />
        <FeatureBlock07 content={content['feature7']} />
        <FeatureBlock08 content={content['feature8']} />
        <FeatureBlock09 content={content['feature9']} />
        <FeatureBlock10 content={content['feature10']} />
        <FeatureBlock11 content={content['feature11']} />
        <FeatureBlock12 content={content['feature12']} />
        <FeatureBlock13 content={content['feature13']} />
        <FeatureBlock14 content={content['feature14']} />
        <FeatureBlock15 content={content['feature15']} />
        <FeatureBlock16 content={content['feature16']} />
        <FeatureBlock17 content={content['feature17']} />
        <FeatureBlock18 content={content['feature18']} />
        <FeatureBlock19 content={content['feature19']} />
        <FeatureBlock20 content={content['feature20']} />

        <Divider space='5' />
        <div className="camp-pricing" id="orderarea">
          <PriceBlock01 />
        </div>
        <Container variant='narrow' className='cfeatures-faq bg-light'>
          <Faq content={content['faq']} />
        </Container>

        <div className="drop-message-blk">
          <Divider space='5' />
            <Contacts  />
          <Divider space='5' />
        </div>

        <Divider space='0' />
        <Footer content={content['footer']} />
        <Main />
        <Base />
        <CampaignsSeo />
        <div className='allbgimgs' style={{display: `none`, width:0, height:0,opacity:0}}><img style={styles.heroContainerFeature} /></div>
      </div>
    </Layout>
  )
}

export const query = graphql`
  query campExplainedBlockContent {
    allBlockContent(
      filter: { page: { in: ["campaigns/explained", "shared"] } }
    ) {
      nodes {
        ...BlockContent
      }
    }
  }
`
export default IndexPage
