// TestimonialsBlock02.jsx
import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import { Container, Flex, Box, css } from 'theme-ui'
import Reveal from '@solid-ui-components/Reveal'
import Divider from '@solid-ui-components/Divider'
import { ImQuotesRight } from 'react-icons/im'
import { AiFillStar } from 'react-icons/ai'
import ContentText from '@solid-ui-components/ContentText'
import ContentImages from '@solid-ui-components/ContentImages'
import ContentContainer from '@solid-ui-components/ContentContainer'
import WithDefaultContent from '@solid-ui-blocks/WithDefaultContent'

const STRAPI_BASE_URL = 'https://strapi5-dev-jt.mumara.com'

const styles = {
  avatar: {
    width: 150,
    bg: `omegaLighter`,
    borderTopColor: `omegaLighter`,
    borderTopWidth: `xl`,
    borderTopStyle: `solid`,
    borderRadius: `lg`,
    boxSizing: `content-box`
  }
}

const normalizeUrl = (url) =>
  url?.startsWith('http') ? url : `${STRAPI_BASE_URL}${url}`

const TestimonialsBlock02 = () => {
  const data = useStaticQuery(graphql`
    query GetTestimonials {
      strapiTestimonial {
        heading
        description

        johnheading
        Johnpost
        john { url }
        Johndescription

        Janeheading
        Janepost
        Jane { url }
        Janedescription

        Sarahheading
        Sarahpost
        Sarah { url }
        Sarahdescription

        Steveheading
        Stevepost
        Steve { url }
        Stevedescription
      }
    }
  `)

  const d = data.strapiTestimonial

  const content = {
    text: [
      { text: d.description, variant: 'h4', color: 'omegaDark' },
      { text: d.heading, variant: 'h2' }
    ],
    collection: [
      {
        text: [
          { text: d.johnheading, variant: 'h5' },
          { text: d.Johnpost, variant: 'small' },
          { text: d.Johndescription }
        ],
        avatar: {
          src: normalizeUrl(d.john?.url),
          alt: d.johnheading
        }
      },
      {
        text: [
          { text: d.Janeheading, variant: 'h5' },
          { text: d.Janepost, variant: 'small' },
          { text: d.Janedescription }
        ],
        avatar: {
          src: normalizeUrl(d.Jane?.url),
          alt: d.Janeheading
        }
      },
      {
        text: [
          { text: d.Sarahheading, variant: 'h5' },
          { text: d.Sarahpost, variant: 'small' },
          { text: d.Sarahdescription }
        ],
        avatar: {
          src: normalizeUrl(d.Sarah?.url),
          alt: d.Sarahheading
        }
      },
      {
        text: [
          { text: d.Steveheading, variant: 'h5' },
          { text: d.Stevepost, variant: 'small' },
          { text: d.Stevedescription }
        ],
        avatar: {
          src: normalizeUrl(d.Steve?.url),
          alt: d.Steveheading
        }
      }
    ]
  }

  return (
    <Container>
      <Box sx={{ textAlign: `center` }}>
        <ContentText content={content.text} />
      </Box>
      <Divider />
      <Flex sx={{ mx: -3, flexWrap: `wrap` }}>
        {content.collection.map(({ container, avatar, text }, index) => (
          <Box
            key={`item-${index}`}
            sx={{ flexBasis: [`1`, `1/2`], flexGrow: 1, p: 3 }}
          >
            <Reveal effect='fadeInLeft' delay={0.25 * (index + 2)}>
              <Flex
                sx={{
                  alignItems: `center`,
                  flexDirection: [`column`, null, null, `row`]
                }}
              >
                <ContentContainer
                  content={container}
                  variant='cards.paper'
                  sx={{
                    flexBasis: `1/3`,
                    textAlign: `center`,
                    position: `relative`,
                    width: `full`
                  }}
                >
                  <ImQuotesRight
                    css={css({
                      size: `icon.lg`,
                      color: `omegaLighter`,
                      position: `absolute`,
                      bottom: `-12%`,
                      left: `50%`,
                      transform: `translate(-50%, 0)`
                    })}
                  />
                  <ContentText content={text?.slice(0, 2)} />
                  <Box mt='3'>
                    {Array.from({ length: 5 }, (_, i) => (
                      <AiFillStar
                        key={`item-${i}`}
                        css={css({ color: `alphaLight` })}
                      />
                    ))}
                  </Box>
                </ContentContainer>

                <Box
                  sx={{
                    ml: [0, null, null, -3],
                    mr: [0, null, null, 3],
                    mt: [-4, null, null, 0],
                    mb: [3, null, null, 0]
                  }}
                >
                  <ContentImages
                    content={{ images: [avatar] }}
                    sx={styles.avatar}
                    imageEffect='fadeIn'
                  />
                </Box>

                <Box sx={{ flexBasis: `1/3`, flexGrow: 1 }}>
                  <ContentText content={text?.slice(2)} />
                </Box>
              </Flex>
            </Reveal>
          </Box>
        ))}
      </Flex>
    </Container>
  )
}

export default WithDefaultContent(TestimonialsBlock02)
