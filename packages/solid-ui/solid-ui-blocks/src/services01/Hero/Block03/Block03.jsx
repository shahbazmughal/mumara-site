import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import { Container, Flex, Box } from 'theme-ui'
import ContentText from '@solid-ui-components/ContentText'
import Reveal from '@solid-ui-components/Reveal'
import ContentContainer from '@solid-ui-components/ContentContainer'
import ContentImages from '@solid-ui-components/ContentImages'
import ContentButtons from '@solid-ui-components/ContentButtons'

const STRAPI_BASE_URL = 'https://strapi5-dev-jt.mumara.com'

const normalizeUrl = (url) =>
  url?.startsWith('http') ? url : `${STRAPI_BASE_URL}${url}`

const styles = {
  subTitle: {
    maxWidth: 500
  },
  content: {
    flexDirection: `column`,
    size: `full`,
    alignItems: `center`,
    justifyContent: `center`,
    py: 4,
    position: 'relative',
    zIndex: 1,
    minHeight: ['300px', '400px', '500px']
  },
  overlay: {
    size: `full`,
    bg: `omegaDarker`,
    opacity: 0.75,
    position: `absolute`,
    top: 0,
    left: 0,
    zIndex: -1,
  },
  imageWrapper: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    zIndex: -2,
    overflow: 'hidden',
    boxShadow: '0 0 60px rgba(0, 0, 0, 0.4)'
  },
  image: {
    size: 'full',
    mt: '-180px',
    objectFit: 'cover'
  }
}

const HeroBlock03 = () => {
  const data = useStaticQuery(graphql`
    query {
      strapiServicesonecalltoaction {
        miniheading
        heading
        button
        image {
          url
        }
      }
    }
  `)

  const strapi = data.strapiServicesonecalltoaction

  const text = [
    {
      text: strapi.miniheading || '',
      color: 'alphaLight',
      variant: 'h3'
    },
    {
      text: strapi.heading || '',
      color: 'white',
      variant: 'h1'
    }
  ]

  const images = [
    {
      src: normalizeUrl(strapi.image?.url),
      alt: 'CTA background',
      shadow: 'lg',
      effects: ['fadeInLeft']
    }
  ]

  const buttons = [
    {
      text: 'Contact Us',
      type: 'MODAL',
      link: 'contact',
      variant: 'primary-light'
    }
  ]

  const container = {
    bg: 'linear-gradient(25deg, {{alpha}} 0%, {{beta}} 100%)'
  }

  return (
    <Container
      variant="full"
      sx={{
        textAlign: 'center',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <Flex sx={styles.content}>
        <Reveal effect="fadeInDown">
          <ContentText
            content={text[0]}
            sx={{
              bg: 'omegaDarker',
              display: 'inline-block'
            }}
            px="2"
            mb="3"
          />
          <ContentText content={text[1]} mb="4" mx="auto" />
        </Reveal>

        <Box>
          <Reveal effect="fadeInUp" duration={0.7}>
            <ContentButtons content={buttons} />
          </Reveal>
        </Box>
      </Flex>

      {/* Gradient Overlay */}
      <ContentContainer content={container} sx={styles.overlay} className="block-overlay" />

      {/* Background Image with radius and shadow */}
      <Box sx={styles.imageWrapper}>
        <ContentImages
          loading="eager"
          content={{ images }}
          sx={styles.image}
          imageEffect="fadeIn"
        />
      </Box>
    </Container>
  )
}

export default HeroBlock03
