import React, { useRef, useState, useEffect } from 'react'
import { render } from "react-dom";
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
import OneSeo from '@solid-ui-blocks/One/MarketingGlossary/OneSeo'
import Hero from '@solid-ui-blocks/One/MarketingGlossary/HeroBlock02'
import FeatureLeft from '@solid-ui-blocks/One/MarketingGlossary/FeatureLeft'
import CallToAction from '@solid-ui-blocks/CallToAction'
import Menu from '@solid-ui-blocks/Menu'
import theme from './_theme'
import styles from './_styles'
import './oneglossary.css'

const IndexPage = props => {

  const { allBlockContent } = props.data
  const content = normalizeBlockContentNodes(allBlockContent?.nodes)

  const titleA = useRef();
  function clickA() {
    titleA.current.scrollIntoView({ behavior: "smooth" });
  }
  const titleB = useRef();
  function clickB() {
    titleB.current.scrollIntoView({ behavior: "smooth" });
  }
  const titleC = useRef();
  function clickC() {
    titleC.current.scrollIntoView({ behavior: "smooth" });
  }
  const titleD = useRef();
  function clickD() {
    titleD.current.scrollIntoView({ behavior: "smooth" });
  }
  const titleE = useRef();
  function clickE() {
    titleE.current.scrollIntoView({ behavior: "smooth" });
  }
  const titleF = useRef();
  function clickF() {
    titleF.current.scrollIntoView({ behavior: "smooth" });
  }
  const titleG = useRef();
  function clickG() {
    titleG.current.scrollIntoView({ behavior: "smooth" });
  }
  const titleH = useRef();
  function clickH() {
    titleH.current.scrollIntoView({ behavior: "smooth" });
  }
  const titleI = useRef();
  function clickI() {
    titleI.current.scrollIntoView({ behavior: "smooth" });
  }
  const titleJ = useRef();
  function clickJ() {
    titleJ.current.scrollIntoView({ behavior: "smooth" });
  }
  const titleK = useRef();
  function clickK() {
    titleK.current.scrollIntoView({ behavior: "smooth" });
  }
  const titleL = useRef();
  function clickL() {
    titleL.current.scrollIntoView({ behavior: "smooth" });
  }
  const titleM = useRef();
  function clickM() {
    titleM.current.scrollIntoView({ behavior: "smooth" });
  }
  const titleN = useRef();
  function clickN() {
    titleN.current.scrollIntoView({ behavior: "smooth" });
  }
  const titleO = useRef();
  function clickO() {
    titleO.current.scrollIntoView({ behavior: "smooth" });
  }
  const titleP = useRef();
  function clickP() {
    titleP.current.scrollIntoView({ behavior: "smooth" });
  }
  const titleQ = useRef();
  function clickQ() {
    titleQ.current.scrollIntoView({ behavior: "smooth" });
  }
  const titleR = useRef();
  function clickR() {
    titleR.current.scrollIntoView({ behavior: "smooth" });
  }
  const titleS = useRef();
  function clickS() {
    titleS.current.scrollIntoView({ behavior: "smooth" });
  }
  const titleT = useRef();
  function clickT() {
    titleT.current.scrollIntoView({ behavior: "smooth" });
  }
  const titleU = useRef();
  function clickU() {
    titleU.current.scrollIntoView({ behavior: "smooth" });
  }
  const titleV = useRef();
  function clickV() {
    titleV.current.scrollIntoView({ behavior: "smooth" });
  }
  const titleW = useRef();
  function clickW() {
    titleW.current.scrollIntoView({ behavior: "smooth" });
  }
  const titleX = useRef();
  function clickX() {
    titleX.current.scrollIntoView({ behavior: "smooth" });
  }
  const titleY = useRef();
  function clickY() {
    titleY.current.scrollIntoView({ behavior: "smooth" });
  }
  const titleZ = useRef();
  function clickZ() {
    titleZ.current.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <Layout theme={theme} {...props} xs={styles.body}>
      <div className="one-glossary">
        <Seo title='Marketing glossary for beginners | One' description="During the start of any marketing strategy, devise two or more ways to communicate your message. You can choose different tones or languages to talk to your audience." keywords="glossary, marketing glossary,marketing book,marketing guide,mumara marketing,email marketing software,email marketing automation" image="https://post.mumara.com/images/one-marketing-glossary.png" image2="https://post.mumara.com/images/one-marketing-glossary.png" canonical="https://www.mumara.com/one/marketing-glossary/" favicon="https://www.mumara.com/favicon.ico" />
        
        <Menu content={content['header']} />
        {/* Blocks */}
        <div className="subheader-block">
          <SubHeader content={content['subheader_one']} menuJustify='space-between' />
        </div>
        <Container className="one-glossary-heroblock" variant='full' sx={styles.heroContainer}>
          <Hero content={content['hero']} />
          <Divider space='5' />
        </Container>

        <div className="gl-nav" id="alfaMenu">
          <ul className="alfaNav">
            <li><button onClick={clickA}>A</button></li>
            <li><button onClick={clickB}>B</button></li>
            <li><button onClick={clickC}>C</button></li>
            <li><button onClick={clickD}>D</button></li>
            <li><button onClick={clickE}>E</button></li>
            <li><button onClick={clickF}>F</button></li>
            <li><button onClick={clickG}>G</button></li>
            <li><button onClick={clickH}>H</button></li>
            <li><button onClick={clickI}>I</button></li>
            <li><button onClick={clickJ}>J</button></li>
            <li><button onClick={clickK}>K</button></li>
            <li><button onClick={clickL}>L</button></li>
            <li><button onClick={clickM}>M</button></li>
          </ul>
          <ul className="alfaNav">
            <li><button onClick={clickN}>N</button></li>
            <li><button onClick={clickO}>O</button></li>
            <li><button onClick={clickP}>P</button></li>
            <li><button onClick={clickQ}>Q</button></li>
            <li><button onClick={clickR}>R</button></li>
            <li><button onClick={clickS}>S</button></li>
            <li><button onClick={clickT}>T</button></li>
            <li><button onClick={clickU}>U</button></li>
            <li><button onClick={clickV}>V</button></li>
            <li><button onClick={clickW}>W</button></li>
            <li><button onClick={clickX}>X</button></li>
            <li><button onClick={clickY}>Y</button></li>
            <li><button onClick={clickZ}>Z</button></li>
          </ul>
        </div>

        

        <div className="one-glossary-main" ref={titleA}>
          <div className="glossary1 glossary">
            <FeatureLeft content={content['features1']} />
          </div>
        </div>

        <div className="one-glossary-main">
          <div className="glossary2 glossary">
            <FeatureLeft content={content['features2']} />
          </div>
        </div>

        <div className="one-glossary-main">
          <div className="glossary3 glossary">
            <FeatureLeft content={content['features3']} />
          </div>
        </div>

        <div className="one-glossary-main">
          <div className="glossary4 glossary">
            <FeatureLeft content={content['features4']} />
          </div>
        </div>

        <div className="one-glossary-main">
          <div className="glossary5 glossary">
            <FeatureLeft content={content['features5']} />
          </div>
        </div>

        <div className="one-glossary-main" ref={titleB}>
          <div className="glossary6 glossary">
            <FeatureLeft content={content['features6']} />
          </div>
        </div>

        <div className="one-glossary-main">
          <div className="glossary7 glossary">
            <FeatureLeft content={content['features7']} />
          </div>
        </div>

        <div className="one-glossary-main">
          <div className="glossary8 glossary">
            <FeatureLeft content={content['features8']} />
          </div>
        </div>

        <div className="one-glossary-main" ref={titleC}>
          <div className="glossary9 glossary">
            <FeatureLeft content={content['features9']} />
          </div>
        </div>

        <div className="one-glossary-main">
          <div className="glossary10 glossary">
            <FeatureLeft content={content['features10']} />
          </div>
        </div>

        <div className="one-glossary-main">
          <div className="glossary11 glossary">
            <FeatureLeft content={content['features11']} />
          </div>
        </div>

        <div className="one-glossary-main">
          <div className="glossary12 glossary">
            <FeatureLeft content={content['features12']} />
          </div>
        </div>

        <div className="one-glossary-main">
          <div className="glossary13 glossary">
            <FeatureLeft content={content['features13']} />
          </div>
        </div>

        <div className="one-glossary-main">
          <div className="glossary14 glossary">
            <FeatureLeft content={content['features14']} />
          </div>
        </div>

        <div className="one-glossary-main">
          <div className="glossary15 glossary">
            <FeatureLeft content={content['features15']} />
          </div>
        </div>

        <div className="one-glossary-main">
          <div className="glossary16 glossary">
            <FeatureLeft content={content['features16']} />
          </div>
        </div>

        <div className="one-glossary-main">
          <div className="glossary17 glossary">
            <FeatureLeft content={content['features17']} />
          </div>
        </div>

        <div className="one-glossary-main" ref={titleD}>
          <div className="glossary18 glossary">
            <FeatureLeft content={content['features18']} />
          </div>
        </div>

        <div className="one-glossary-main">
          <div className="glossary19 glossary">
            <FeatureLeft content={content['features19']} />
          </div>
        </div>

        <div className="one-glossary-main">
          <div className="glossary20 glossary">
            <FeatureLeft content={content['features20']} />
          </div>
        </div>

        <div className="one-glossary-main">
          <div className="glossary21 glossary">
            <FeatureLeft content={content['features21']} />
          </div>
        </div>

        <div className="one-glossary-main">
          <div className="glossary22 glossary">
            <FeatureLeft content={content['features22']} />
          </div>
        </div>

        <div className="one-glossary-main">
          <div className="glossary23 glossary">
            <FeatureLeft content={content['features23']} />
          </div>
        </div>

        <div className="one-glossary-main">
          <div className="glossary24 glossary">
            <FeatureLeft content={content['features24']} />
          </div>
        </div>
        
        <div className="one-glossary-main" ref={titleE}>
          <div className="glossary25 glossary">
            <FeatureLeft content={content['features25']} />
          </div>
        </div>

        <div className="one-glossary-main">
          <div className="glossary26 glossary">
            <FeatureLeft content={content['features26']} />
          </div>
        </div>

        <div className="one-glossary-main">
          <div className="glossary27 glossary">
            <FeatureLeft content={content['features27']} />
          </div>
        </div>

        <div className="one-glossary-main">
          <div className="glossary28 glossary">
            <FeatureLeft content={content['features28']} />
          </div>
        </div>

        <div className="one-glossary-main" ref={titleF}>
          <div className="glossary29 glossary">
            <FeatureLeft content={content['features29']} />
          </div>
        </div>

        <div className="one-glossary-main" ref={titleG}>
          <div className="glossary30 glossary">
            <FeatureLeft content={content['features30']} />
          </div>
        </div>

        <div className="one-glossary-main" ref={titleH}>
          <div className="glossary31 glossary">
            <FeatureLeft content={content['features31']} />
          </div>
        </div>

        <div className="one-glossary-main" ref={titleI}>
          <div className="glossary32 glossary">
            <FeatureLeft content={content['features32']} />
          </div>
        </div>

        <div className="one-glossary-main">
          <div className="glossary33 glossary">
            <FeatureLeft content={content['features33']} />
          </div>
        </div>

        <div className="one-glossary-main" ref={titleJ}>
          <div className="glossary34 glossary">
            <FeatureLeft content={content['features34']} />
          </div>
        </div>

        <div className="one-glossary-main" ref={titleK}>
          <div className="glossary35 glossary">
            <FeatureLeft content={content['features35']} />
          </div>
        </div>

        <div className="one-glossary-main" ref={titleL}>
          <div className="glossary36 glossary">
            <FeatureLeft content={content['features36']} />
          </div>
        </div>

        <div className="one-glossary-main" ref={titleM}>
          <div className="glossary37 glossary">
            <FeatureLeft content={content['features37']} />
          </div>
        </div>

        <div className="one-glossary-main">
          <div className="glossary38 glossary">
            <FeatureLeft content={content['features38']} />
          </div>
        </div>

        <div className="one-glossary-main" ref={titleN}>
          <div className="glossary39 glossary">
            <FeatureLeft content={content['features39']} />
          </div>
        </div>

        <div className="one-glossary-main" ref={titleO}>
          <div className="glossary40 glossary">
            <FeatureLeft content={content['features40']} />
          </div>
        </div>

        <div className="one-glossary-main">
          <div className="glossary41 glossary">
            <FeatureLeft content={content['features41']} />
          </div>
        </div>

        <div className="one-glossary-main" ref={titleP}>
          <div className="glossary42 glossary">
            <FeatureLeft content={content['features42']} />
          </div>
        </div>

        <div className="one-glossary-main" ref={titleQ}>
          <div className="glossary43 glossary">
            <FeatureLeft content={content['features43']} />
          </div>
        </div>

        <div className="one-glossary-main" ref={titleR}>
          <div className="glossary44 glossary">
            <FeatureLeft content={content['features44']} />
          </div>
        </div>

        <div className="one-glossary-main" ref={titleS}>
          <div className="glossary45 glossary">
            <FeatureLeft content={content['features45']} />
          </div>
        </div>

        <div className="one-glossary-main">
          <div className="glossary46 glossary">
            <FeatureLeft content={content['features46']} />
          </div>
        </div>

        <div className="one-glossary-main">
          <div className="glossary47 glossary">
            <FeatureLeft content={content['features47']} />
          </div>
        </div>

        <div className="one-glossary-main">
          <div className="glossary48 glossary">
            <FeatureLeft content={content['features48']} />
          </div>
        </div>

        <div className="one-glossary-main">
          <div className="glossary49 glossary">
            <FeatureLeft content={content['features49']} />
          </div>
        </div>

        <div className="one-glossary-main">
          <div className="glossary50 glossary">
            <FeatureLeft content={content['features50']} />
          </div>
        </div>

        <div className="one-glossary-main" ref={titleT}>
          <div className="glossary51 glossary">
            <FeatureLeft content={content['features51']} />
          </div>
        </div>

        <div className="one-glossary-main" ref={titleU}>
          <div className="glossary52 glossary">
            <FeatureLeft content={content['features52']} />
          </div>
        </div>

        <div className="one-glossary-main" ref={titleV}>
          <div className="glossary53 glossary">
            <FeatureLeft content={content['features53']} />
          </div>
        </div>

        <div className="one-glossary-main" ref={titleW}>
          <div className="glossary54 glossary">
            <FeatureLeft content={content['features54']} />
          </div>
        </div>

        <div className="one-glossary-main" ref={titleX}>
          <div className="glossary55 glossary">
            <FeatureLeft content={content['features55']} />
          </div>
        </div>

        <div className="one-glossary-main" ref={titleY}>
          <div className="glossary56 glossary">
            <FeatureLeft content={content['features56']} />
          </div>
        </div>

        <div className="one-glossary-main" ref={titleZ}>
          <div className="glossary57 glossary">
            <FeatureLeft content={content['features57']} />
          </div>
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
  query oneGlossaryBlockContent {
    allBlockContent(
      filter: { page: { in: ["one/marketing-glossary", "shared"] } }
    ) {
      nodes {
        ...BlockContent
      }
    }
  }
`
export default IndexPage
