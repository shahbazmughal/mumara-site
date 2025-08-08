import React, { useState } from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import { Container, Flex, Box, css } from 'theme-ui'
import { FaDotCircle } from 'react-icons/fa'
import Reveal from '@solid-ui-components/Reveal'
import Divider from '@solid-ui-components/Divider'
import ListItem from '@solid-ui-components/ListItem'
import ContentText from '@solid-ui-components/ContentText'
import ContentImages from '@solid-ui-components/ContentImages'

const styles = {
  container: {
    background: `linear-gradient(0, #f6f7fb 0%, #e0e7ef 100%)`,
    py: [5, 5, 6]
  },
  control: {
    color: `omega`,
    cursor: `pointer`,
    transition: `all 0.2s ease-in`,
    mr: 2,
    ':hover': {
      color: `omegaDark`
    },
    '&.active': {
      color: `alpha`
    }
  },
  avatar: {
    borderTopColor: `omegaLighter`,
    borderTopWidth: 30,
    borderTopStyle: `solid`,
    bg: `omegaLighter`,
    borderRadius: `lg`,
    mx: `auto`,
    mb: [4, 0],
    mt: [5, 0],
    img: {
      borderRadius: `lg`
    }
  }
}

const TestimonialsBlock04 = ({ reverse = false }) => {
  const [state, setState] = useState(0)

  const data = useStaticQuery(graphql`
    query {
      strapiPricing03Testmonial {
        Johnimage { url }
        Johnminiheading
        Johnheading
        Johndescription
        Johnicon { url }
        John
        Johnpost

        Smithimage { url }
        Smithminiheading
        Smithheading
        Smithdescription
        Smithicon { url }
        Smith
        Smithpost

        Florrieimage { url }
        Florrieminiheading
        Florrieheading
        Florriedescription
        Florrieicon { url }
        Florrie
        Florriepost
      }
    }
  `)

  const STRAPI_URL = 'https://strapi5-dev-jt.mumara.com'
  const raw = data.strapiPricing03Testmonial

  const content = {
    collection: [
      {
        avatar: {
          src: `${STRAPI_URL}${raw.Johnimage?.url}`,
          alt: 'John'
        },
        icon: {
          src: `${STRAPI_URL}${raw.Johnicon?.url}`
        },
        text: [
          { text: raw.Johnminiheading, variant: 'h4', color: '#6366f1' },
          { text: raw.Johnheading, variant: 'h3' },
          { text: raw.Johndescription, variant: 'paragraph' },
          { text: raw.John, variant: 'strong' },
          { text: raw.Johnpost, variant: 'small' }
        ]
      },
      {
        avatar: {
          src: `${STRAPI_URL}${raw.Smithimage?.url}`,
          alt: 'Smith'
        },
        icon: {
          src: `${STRAPI_URL}${raw.Smithicon?.url}`
        },
        text: [
          { text: raw.Smithminiheading, variant: 'h4', color: '#6366f1' },
          { text: raw.Smithheading, variant: 'h3' },
          { text: raw.Smithdescription, variant: 'paragraph' },
          { text: raw.Smith, variant: 'strong' },
          { text: raw.Smithpost, variant: 'small' }
        ]
      },
      {
        avatar: {
          src: `${STRAPI_URL}${raw.Florrieimage?.url}`,
          alt: 'Florrie'
        },
        icon: {
          src: `${STRAPI_URL}${raw.Florrieicon?.url}`
        },
        text: [
          { text: raw.Florrieminiheading, variant: 'h4', color: '#6366f1' },
          { text: raw.Florrieheading, variant: 'h3' },
          { text: raw.Florriedescription, variant: 'paragraph' },
          { text: raw.Florrie, variant: 'strong' },
          { text: raw.Florriepost, variant: 'small' }
        ]
      }
    ]
  }

  return (
    <Container>
      <ContentText content={content.text} />
      <Divider />
      <Container>
        {content.collection.map(
          ({ text, avatar, icon }, index) =>
            index === state && (
              <Flex
                key={`block-${index}`}
                sx={{
                  alignItems: [null, `center`],
                  flexDirection: [
                    reverse ? `column-reverse` : `column`,
                    reverse ? `row-reverse` : `row`
                  ]
                }}
              >
                <Box
                  sx={{
                    flexBasis: [null, `2/5`],
                    [reverse ? 'ml' : 'mr']: [null, 5],
                    position: `relative`,
                    textAlign: `center`,
                  }}
                >
                  <ContentImages
                    content={{ images: [avatar] }}
                    sx={styles.avatar}
                    imageEffect='fadeIn'
                  />
                </Box>
                <Box sx={{ flexBasis: `3/5`, textAlign: [`center`, `left`] }}>
                  <Flex
                    sx={{
                      flexDirection: `column`,
                      minHeight: [`none`, 420],
                      position: `relative`
                    }}
                  >
                    <Reveal effect='fadeInRight'>
                      <ContentText content={text?.slice(0, 3)} />
                      <Box sx={{ display: `inline-block`, textAlign: `left` }}>
                        <ListItem
                          text={text?.slice(3, 5)}
                          icon={icon}
                          iconProps={{ bg : '#2d3748',mr: 2, size: 'md', round: true }}
                          compact
                          center
                        />
                      </Box>
                    </Reveal>
                  </Flex>
                </Box>
              </Flex>
            )
        )}
        <Divider space={2} />
        <Box sx={{ textAlign: `center` }}>
          {content.collection.map((_, i) => (
            <FaDotCircle
              key={i}
              size={24}
              css={css(styles.control)}
              className={i === state ? 'active' : undefined}
              onClick={() => setState(i)}
            />
          ))}
        </Box>
      </Container>
    </Container>
  )
}

export default TestimonialsBlock04
