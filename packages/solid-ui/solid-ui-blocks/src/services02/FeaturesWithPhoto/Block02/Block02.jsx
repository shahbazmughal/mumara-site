import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import { Container, Flex, Box } from 'theme-ui'
import Reveal from '@solid-ui-components/Reveal'
import Divider from '@solid-ui-components/Divider'
import ListItem from '@solid-ui-components/ListItem'
import FlexImage from '@solid-ui-components/FlexImage'
import FlexContent from '@solid-ui-components/FlexContent'
import FlexOverlapFade from '@solid-ui-components/FlexOverlapFade'
import ContentImages from '@solid-ui-components/ContentImages'
import ContentButtons from '@solid-ui-components/ContentButtons'
import WithDefaultContent from '@solid-ui-blocks/WithDefaultContent'

const STRAPI_BASE_URL = 'https://strapi5-dev-jt.mumara.com'

const normalizeUrl = (url) =>
  url?.startsWith('http') ? url : `${STRAPI_BASE_URL}${url}`

const FeaturesWithPhotoBlock02 = ({ reverse }) => {
  const data = useStaticQuery(graphql`
    query {
      strapiServicestwoservice {
        image { url }
        Businessheading
        Businessdescription
        Consultingheading
        Consultingdescription
        Strategicheading
        Strategicdescription
        Designheading
        Designdescription
        button
      }
    }
  `)

  const entry = data?.strapiServicestwoservice
  if (!entry) return null

  const content = {
    collection: [
      {
        text: [
          { text: entry.Businessheading, variant: 'h4' },
          { text: entry.Businessdescription }
        ]
      },
      {
        text: [
          { text: entry.Consultingheading, variant: 'h4' },
          { text: entry.Consultingdescription }
        ]
      },
      {
        text: [
          { text: entry.Strategicheading, variant: 'h4' },
          { text: entry.Strategicdescription }
        ]
      },
      {
        text: [
          { text: entry.Designheading, variant: 'h4' },
          { text: entry.Designdescription }
        ]
      }
    ],
    images: [
      {
        src: normalizeUrl(entry.image?.url),
        alt: 'Service Image',
        radius: 'lg',
        shadow: 'default'
      }
    ],
    button: [
      {
        text: 'Schedule a Consultation',
        link: '/',
        variant: 'secondary'
      }
    ]
  }

  return (
    <Container sx={{ position: 'relative', mb: 6 }}>
      <Flex
        sx={{
          alignItems: ['center', null],
          flexDirection: [
            reverse ? 'column-reverse' : 'column',
            reverse ? 'row-reverse' : 'row'
          ],
          mx: [null, null, null, -4]
        }}
      >
        <FlexImage reverse={reverse}>
          <Box sx={{ img: { maxWidth: '100%', height: 'auto' } }}>
            <ContentImages content={{ images: content.images }} reverse={reverse} />
          </Box>
        </FlexImage>

        <FlexContent reverse={reverse}>
          {content.collection && (
            <>
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 3,
                  mt: 2
                }}
              >
                {content.collection.map((item, index) => (
                  <Reveal
                    key={`item-${index}`}
                    effect="fadeInPop"
                    delay={1 + 0.2 * (index + 1)}
                  >
                    <ListItem {...item} compact middle />
                  </Reveal>
                ))}
              </Box>
            </>
          )}

          {content.button?.length > 0 && (
            <Reveal effect="fadeInUp" delay={0.4}>
              <Box sx={{ mt: 5, textAlign: ['center', 'left'] }}>
                <ContentButtons content={content.button} />
              </Box>
            </Reveal>
          )}
        </FlexContent>
      </Flex>

      <FlexOverlapFade direction={reverse ? 'ltr' : 'rtl'} />
    </Container>
  )
}

export default WithDefaultContent(FeaturesWithPhotoBlock02)
