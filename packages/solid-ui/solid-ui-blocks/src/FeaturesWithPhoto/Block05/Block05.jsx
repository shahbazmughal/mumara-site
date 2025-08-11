import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import { Container, Flex, Box } from 'theme-ui'
import Reveal from '@solid-ui-components/Reveal'
import Divider from '@solid-ui-components/Divider'
import FlexOverlapFade from '@solid-ui-components/FlexOverlapFade'
import ContentText from '@solid-ui-components/ContentText'
import FlexImage from '@solid-ui-components/FlexImage'
import ContentImages from '@solid-ui-components/ContentImages'

const STRAPI_BASE_URL = 'https://strapi5-dev-jt.mumara.com'

const normalizeUrl = (url) =>
  url?.startsWith('http') ? url : `${STRAPI_BASE_URL}${url}`

const styles = {
  items: {
    flexWrap: 'wrap',
    mx: [-2, -4],
    '& > div': {
      flex: 1,
      px: [2, 4],
      textAlign: ['center', 'unset']
    }
  }
}

const FeaturesCombinedBlock = () => {
  const data = useStaticQuery(graphql`
    query {
      strapiServicesonefeature {
        image { url }
        miniheading
        heading
        description
        customer
        reating
        customertext
        Satisfied
        Satisfiedheading
        success
        successheading
      }
    }
  `)

  const strapi = data.strapiServicesonefeature

  // Format rating to 1 decimal
  const formattedRating = strapi.reating
    ? Number(strapi.reating).toFixed(1)
    : '0.0'

  const text = [
    {
      text: strapi.miniheading || '',
      color: '#a855f7',
      variant: 'h4'
    },
    {
      text: strapi.heading || '',
      variant: 'h2'
    },
    {
      text: strapi.description || '',
      variant: 'medium'
    }
  ]

  const collection = [
    {
      content: [
        {
          text: `${strapi.customer || '0'}/${formattedRating}`,
          color: '#6366f1',
          variant: 'h2',
          space: 1
        },
        {
          text: strapi.customertext || '',
          variant: 'h6'
        }
      ]
    },
    {
      content: [
        {
          text: `${strapi.Satisfied || '0'}`,
          color: '#6366f1',
          variant: 'h2',
          space: 1
        },
        {
          text: strapi.Satisfiedheading || '',
          variant: 'h6'
        }
      ]
    },
    {
      content: [
        {
          text: `${strapi.success || '0'}%`,
          color: '#6366f1',
          variant: 'h2',
          space: 1
        },
        {
          text: strapi.successheading || '',
          variant: 'h6'
        }
      ]
    }
  ]

  const images = [
    {
      src: normalizeUrl(strapi.image?.url),
      alt: 'Main Image',
      radius: 'lg',
      shadow: 'default'
    }
  ].filter(img => img.src)

  return (
    <Container sx={{ position: 'relative' }}>
      <Flex
        sx={{
          alignItems: ['center'],
          flexDirection: ['column', 'row'],
          mx: [null, null, null, -4]
        }}
      >
        <FlexImage>
          <ContentImages content={{ images }} />
        </FlexImage>

        <Box sx={{ flex: 1, textAlign: ['center', 'left'] }}>
          <ContentText content={text} />
          <Divider space={3} />

          <Flex sx={styles.items}>
            {collection.map((item, index) => (
              <Reveal
                key={`item-${index}`}
                effect="fadeInPop"
                delay={0.3 * (index + 1)}
              >
                <Flex sx={{ flexDirection: 'column', height: 'full' }}>
                  <ContentText content={item.content} ml={0} />
                </Flex>
              </Reveal>
            ))}
          </Flex>
        </Box>
      </Flex>

      <FlexOverlapFade direction="rtl" />
    </Container>
  )
}

export default FeaturesCombinedBlock
