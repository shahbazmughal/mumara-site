import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import { Container, Box } from 'theme-ui'
import ContentText from '@solid-ui-components/ContentText'
import Reveal from '@solid-ui-components/Reveal'
import Divider from '@solid-ui-components/Divider'
import ContentImages from '@solid-ui-components/ContentImages'
import ContentButtons from '@solid-ui-components/ContentButtons'
import QuickSignupForm from '@solid-ui-components/QuickSignupForm'

const STRAPI_BASE_URL = 'https://strapi5-dev-jt.mumara.com'

// Normalize image URL
const normalizeUrl = (url) =>
  url?.startsWith('http') ? url : `${STRAPI_BASE_URL}${url}`

const HeroBlock02Full = () => {
  // Fetch data from Strapi
  const data = useStaticQuery(graphql`
    query {
      strapiSaashero {
        miniheading
        heading
        description
        button
        image {
          url
        }
      }
    }
  `)

  const hero = data.strapiSaashero

  // Format content for HeroBlock02
  const content = {
    text: [
      { text: hero.miniheading, variant: 'h4', color: '#2d3748' },
      { text: hero.heading, variant: 'h1' },
      { text: hero.description, variant: 'medium' }
    ],
    buttons: hero.button
      ? [
          {
            text: 'Get Started Now',
            variant: 'secondary',
            link: '#' // Update this if needed
          }
        ]
      : null,
    images: hero.image
      ? [
          {
            src: normalizeUrl(hero.image.url),
            alt: 'Hero Image',
            loading: 'eager'
          }
        ]
      : null
  }

  return (
    <Container sx={{ textAlign: `center` }}>
      <Reveal effect='fadeInDown'>
        <ContentText content={content.text} />
      </Reveal>

      {content.buttons && (
        <>
          <Divider space={3} />
          <Reveal effect='fadeInUp' duration={0.7}>
            <ContentButtons content={content.buttons} />
          </Reveal>
        </>
      )}

      {/* Optional form if you want to add */}
      {/* <Divider space={4} />
      <Reveal effect='fadeInRight' delay={0.7}>
        <QuickSignupForm {...form} space={3} />
      </Reveal> */}

      {content.images && (
        <>
          <Divider space={4} />
          <Box sx={{ position: `relative` }}>
            <ContentImages
              content={{ images: content.images }}
              loading='eager'
              imagePosition='center'
              imageEffect='fadeInUp'
            />
          </Box>
        </>
      )}
    </Container>
  )
}

export default HeroBlock02Full
