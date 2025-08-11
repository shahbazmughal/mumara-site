import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import { Container, Flex, Box, Card, css } from 'theme-ui'
import Reveal from '@solid-ui-components/Reveal'
import Divider from '@solid-ui-components/Divider'
import ListItem from '@solid-ui-components/ListItem'
import FlexImage from '@solid-ui-components/FlexImage'
import FlexContent from '@solid-ui-components/FlexContent'
import FlexOverlapFade from '@solid-ui-components/FlexOverlapFade'
import ContentText from '@solid-ui-components/ContentText'
import ContentImages from '@solid-ui-components/ContentImages'
import ContentButtons from '@solid-ui-components/ContentButtons'
import WithDefaultContent from '@solid-ui-blocks/WithDefaultContent'

const STRAPI_BASE_URL = 'https://strapi5-dev-jt.mumara.com'

const normalizeUrl = (url) =>
  url?.startsWith('http') ? url : `${STRAPI_BASE_URL}${url}`

const FeaturesWithPhotoBlock02 = ({ reverse }) => {
  // Fetch data from Strapi via GraphQL
  const data = useStaticQuery(graphql`
    query MyQuery {
      strapiFeaturetwo {
        heading
        mainheading1
        discription
        button
        image {
          url
        }
        overlayimage {
          url
        }
      }
    }
  `)

  const {
    heading,
    mainheading1,
    discription,
    button,
    image,
    overlayimage
  } = data.strapiFeaturetwo

  // Build `content` structure for the component
  const content = {
    text: [
      { text: heading, color: 'omegaDark', variant: 'h4' },
      {
        text: mainheading1, variant: 'h2'
      },
      { text: discription, variant: 'medium' }
    ],
    images: [
      { src: normalizeUrl(image?.url), alt: 'Main Image' },
      {
        src: normalizeUrl(overlayimage?.url),
        alt: 'Overlay',
        effects: ['fadeInRight', 'float'],
        position: { top: '15%', left: '-5%' }
      }
    ],
    buttons: [
      {
        text: 'Get Started',
        type: 'MODAL',
        link: 'authentication',
        variant: 'secondary-light'
      }
    ]
  }

  return (
    <Container sx={{ position: `relative` }}>
      <Flex
        sx={{
          alignItems: [null, `center`],
          flexDirection: [
            reverse ? `column-reverse` : `column`,
            reverse ? `row-reverse` : `row`
          ],
          mx: [null, null, null, -4]
        }}
      >
        <FlexContent reverse={reverse}>
          <Box sx={{ textAlign: ['center', 'left'] }}>
            <ContentText content={content.text} />
          </Box>
          {content.collection && (
            <>
              <Divider space={3} />
              <Flex sx={{ flexWrap: `wrap`,  m: -2 }}>
                {content.collection.map((props, index) => (
                  <Reveal
                    key={`item-${index}`}
                    effect='fadeInPop'
                    delay={1 + 0.2 * (index + 1)}
                    css={css({ flexBasis: [`1`, `1/2`] })}
                  >
                    <Card py='3' m='2'>
                      <ListItem {...props} compact middle p='2' />
                    </Card>
                  </Reveal>
                ))}
              </Flex>
            </>
          )}
          {content.buttons && (
            <Box sx={{ textAlign: [`center`, `left`] }}>
              <Divider space={3} />
              <ContentButtons content={content.buttons} />
            </Box>
          )}
        </FlexContent>
        <FlexImage reverse={reverse}>
          <Box sx={{ img: { Width: '100%', height: 'auto' } }}>
            <ContentImages content={{ images: content.images }} reverse={reverse} />
          </Box>
        </FlexImage>

      </Flex>
      <FlexOverlapFade direction={reverse ? 'ltr' : 'rtl'} />
    </Container>
  )
}

export default WithDefaultContent(FeaturesWithPhotoBlock02)
