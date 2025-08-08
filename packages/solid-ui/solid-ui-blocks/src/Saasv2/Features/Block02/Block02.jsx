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
import WithDefaultContent from '@solid-ui-blocks/WithDefaultContent'

// Set your Strapi Base URL
const STRAPI_BASE_URL = 'https://strapi5-dev-jt.mumara.com'

// Normalize relative image/icon URLs
const normalizeUrl = (url) =>
  url?.startsWith('http') ? url : `${STRAPI_BASE_URL}${url}`

const FeaturesWithPhotoBlock02 = ({ reverse }) => {
  // Static query from Strapi
  const data = useStaticQuery(graphql`
    query {
      strapiSaasv2Featureone {
        miniheading
        subheading
        description

        analytics
        analyticicon { url }

        consultation
        consultationicon { url }

        Reports
        reportsicon { url }

        Support
        supporticon { url }

        image { url }
        visitorimage { url }
        Buyerimage { url }
      }
    }
  `)

  const {
    miniheading,
    subheading,
    description,
    analytics,
    analyticicon,
    consultation,
    consultationicon,
    Reports,
    reportsicon,
    Support,
    supporticon,
    image,
    visitorimage,
    Buyerimage
  } = data.strapiSaasv2Featureone

  // Assemble content from Strapi data
  const content = {
    text: [
      { text: miniheading, variant: 'h5', color: '#718096' },
      { text: subheading, variant: 'h2' },
      { text: description, variant: 'medium' }
    ],
    collection: [
      {
        icon: { src: normalizeUrl(analyticicon?.url), color: 'beta' },
        text: [{ text: analytics }]
      },
      {
        icon: { src: normalizeUrl(consultationicon?.url), color: 'beta' },
        text: [{ text: consultation }]
      },
      {
        icon: { src: normalizeUrl(reportsicon?.url), color: 'beta' },
        text: [{ text: Reports }]
      },
      {
        icon: { src: normalizeUrl(supporticon?.url), color: 'beta' },
        text: [{ text: Support }]
      }
    ],
    images: [
      {
        src: normalizeUrl(image?.url),
        alt: 'Main Image',
        radius: 'lg',
        shadow: 'default'
      },
      {
        src: normalizeUrl(Buyerimage?.url),
        alt: 'Overlay Two',
        effects: ['fadeInDown', 'float'],
        position: { bottom: '-15%', left: '10%' }
      },
      {
        src: normalizeUrl(visitorimage?.url),
        alt: 'Overlay One',
        radius: 'lg',
        shadow: 'default',
        effects: ['fadeInUp', 'floatFaster'],
        position: { top: '-20%', right: '17.5%' }
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
        

        <FlexImage reverse={reverse}>
          <Box sx={{ img: { maxWidth: '100%', height: 'auto' } }}>
            <ContentImages content={{ images: content.images }} reverse={reverse} />
          </Box>
        </FlexImage>
        <FlexContent reverse={reverse}>
          <Box sx={{ textAlign: ['center', 'left'] }}>
            <ContentText content={content.text} />
          </Box>

          {content.collection && (
            <>
              <Divider space={3} />
              <Flex sx={{ flexWrap: `wrap`, m: -2 }}>
                {content.collection.map((props, index) => (
                  <Reveal
                    key={`item-${index}`}
                    effect="fadeInPop"
                    delay={1 + 0.2 * (index + 1)}
                    css={css({ flexBasis: [`1`, `1/2`] })}
                  >
                    <Card py="3" m="2">
                      <ListItem {...props} compact middle p="2" />
                    </Card>
                  </Reveal>
                ))}
              </Flex>
            </>
          )}
        </FlexContent>
      </Flex>

      <FlexOverlapFade direction={reverse ? 'ltr' : 'rtl'} />
    </Container>
  )
}

export default WithDefaultContent(FeaturesWithPhotoBlock02)
