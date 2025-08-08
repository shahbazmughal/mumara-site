import React, {useState, useEffect} from 'react'
import { graphql, withPrefix } from 'gatsby'
import { Container } from 'theme-ui'
import Layout from '@solid-ui-layout/Layout'
import Seo from '@solid-ui-components/Seo'
import Divider from '@solid-ui-components/Divider'
import Header from '@solid-ui-blocks/Home/HeaderBlock01'
import Hero from '@solid-ui-blocks/Home/HeroBlock01'
import Hero2 from '@solid-ui-blocks/Home/HeroBlock02'
import Team from '@solid-ui-blocks/Home/HeroBlock03'
import Products from '@solid-ui-blocks/Home/CompaniesBlock01'
import Companies2 from '@solid-ui-blocks/Home/CompaniesBlock03'
import WhyChooseUs1 from '@solid-ui-blocks/Home/FeaturesBlock01'
import FeatureThreeMore from '@solid-ui-blocks/Home/FeaturesBlock07'
import FeatureThree from '@solid-ui-blocks/Home/FeaturesWithPhotoBlock03'
import FeatureThree3 from '@solid-ui-blocks/Home/FeaturesWithPhotoBlock033'
import BuildBrand from '@solid-ui-blocks/Home/FeaturesWithPhotoBlock04'
import Stats from '@solid-ui-blocks/Home/StatsBlock01'
import Buttons from '@solid-ui-blocks/Home/ButtonsBlock01'
import Testimonials from '@solid-ui-blocks/Home/TestimonialsBlock03'
import Blog from '@solid-ui-blocks/Home/BlogBlock01'
import Menu from '@solid-ui-blocks/Menu'
import Footer from '@solid-ui-blocks/Footer/Block01'
import PriceBlock02 from '@solid-ui-blocks/Home/PriceBlock02'
import { normalizeBlockContentNodes } from '@blocks-helpers'
import Main from '@solid-ui-blocks/SEO/Main'
import Base from '@solid-ui-blocks/SEO/Base'
import theme from './_theme'
import styles from './_styles'
import './home.css'
import og_image from './assets/home.png'

const HomePage = props => {
  const { allBlockContent } = props.data
    const content = normalizeBlockContentNodes(allBlockContent?.nodes)

  const [state, setState] = useState({
      loader:false,
      pnlock1: "hide",
      pnlock2: "show"
  }); 

  var base_url = props.location.origin;
  const fimage = base_url+og_image;

return (
  <Layout theme={theme} {...props}>
    <Seo title='Marketing Automation & Customer Engagement Tools' description="Transform your email and SMS marketing with Mumara's powerful automation tools. Boost engagement, optimize campaigns, and achieve better results." keywords="Email marketing, marketing automation, customer engagement, email campaigns, automation software, marketing tools, digital marketing, lead generation" image="https://post.mumara.com/images/mumara-home.jpg" image2="https://post.mumara.com/images/mumara-home.jpg" canonical="https://www.mumara.com/" favicon="https://www.mumara.com/favicon.ico" />
      {/* Blocks */}

      <span className="homepage-main">
        <Menu content={content['header']} />

        {/* <Container className="homebanner-block"  variant='full' sx={styles.bannerContainer}>
          <Banner content={content['banner']} reverse />
        </Container> */}

        <Container className="homehero-block" variant='full' sx={styles.heroContainer}>
          <Hero content={content['hero']} reverse />
        </Container>

        <Divider space='2' />
        <Container variant='full' sx={styles.featureThreeContainer}>
          <FeatureThreeMore content={content['feature-three-more']} />
            <Divider space='4' />
          <FeatureThree3 content={content['feature-three']} />  
          <FeatureThree content={content['feature-three2']} />  
        </Container>
        <Divider space='4' />

        <Container variant='wide' sx={styles.whyChooseUsContainer}>
          <WhyChooseUs1 content={content['why-choose-us2']} />
        </Container>
        
        <Divider space='6' />
        <Container variant='full' sx={styles.heroContainer2Main}>
          <Container variant='full' sx={styles.heroContainer2}>
            <Divider space='2' />
            <Hero2 content={content['hero2']} />
          </Container>
        </Container>
          
        <Divider space='4' />
        <Container variant='full' sx={styles.buildBrandContainer}>
          <BuildBrand content={content['build-brand']} />
        </Container>
        <Divider space='5' />
        <Stats content={content['get-started']} />
        <Divider space='5' />

        <div className='home-products'>
          <Products content={content['companies']} />
        </div>
        <Divider space='3' />

        <Divider space='5' />
        <Container className='home-testimonials' variant='wide' sx={styles.testimonialsContainer}>
          <Testimonials content={content['testimonials']} />
          <Divider space='5' color='omegaLight' />
          <Companies2 content={content['companies2']} />
        </Container>
        <Divider space='5' />
        <Blog content={content['latest-blogs']} />
        <Buttons content={content['buttons-blog']} />
        <Divider space='5' />

        <Team content={content['team']} />
        <Footer content={content['footer']} />
      </span>

      <Main />
      <Base />
      
  </Layout>
)
}

export const query = graphql`
  query indexBlockContent {
    allBlockContent(filter: { page: { in: ["main", "shared"] } }) {
      nodes {
        ...BlockContent
      }
    }
  }
`

export default HomePage
