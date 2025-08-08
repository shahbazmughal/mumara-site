import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import { Container, Flex, Box } from 'theme-ui'
import Divider from '@solid-ui-components/Divider'
import ProgressBar from '@solid-ui-components/ProgressBar'
import Counter from '@solid-ui-components/Counter'
import FlexImage from '@solid-ui-components/FlexImage'
import FlexContent from '@solid-ui-components/FlexContent'
import FlexOverlapFade from '@solid-ui-components/FlexOverlapFade'
import ContentText from '@solid-ui-components/ContentText'
import ContentImages from '@solid-ui-components/ContentImages'
import ContentButtons from '@solid-ui-components/ContentButtons'

const STRAPI_BASE_URL = 'https://strapi5-dev-jt.mumara.com'
const normalizeUrl = (url) => url?.startsWith('http') ? url : `${STRAPI_BASE_URL}${url}`

const FeaturesWithPhotoBlock06 = ({ reverse = false }) => {
  const { strapiFintchfeaturetwo: data } = useStaticQuery(graphql`
    {
      strapiFintchfeaturetwo {
        miniheading
        heading
        description
        advancedheading
        advanceddescription
        advancednumber
        Reportheading
        Reportdescription
        Reportnumber
        image { url }
        overlayimage { url }
      }
    }
  `)

  const content = {
    text: [
      { text: data?.miniheading, color: 'omegaDark', variant: 'h4' },
      { text: data?.heading, variant: 'h2' },
      {text: data?.description, variant: 'p', sx: { fontSize: [2, 3] } }

    ],
    images: [
      {
        src: normalizeUrl(data?.image?.url),
        alt: 'Main Image',
        position: { top: '0%', right: '-10%' },
        effects: ['fadeIn', 'scale'],
      },
      {
        src: normalizeUrl(data?.overlayimage?.url),
        alt: 'Overlay Image',
        effects: ['fadeInDown', 'float'],
        position: { bottom: '10%', left: '-19%' }
      }
    ],
    collection: [
      {
        text: [
          { text: data?.advancedheading, color: 'omegaDarker', variant: 'h5' },
          { text: data?.advanceddescription },
          { text: data?.advancednumber, color: 'beta', variant: 'h2' }
        ]
      },
      {
        text: [
          { text: data?.Reportheading, color: 'omegaDarker', variant: 'h5' },
          { text: data?.Reportdescription },
          { text: data?.Reportnumber, color: 'beta', variant: 'h2' }
        ]
      }
    ]
  }

  return (
    <Container sx={{ position: 'relative', mx: 'auto' }}>
      <Flex
        sx={{
          alignItems: [null, 'center'],
          flexDirection: [
            reverse ? 'column-reverse' : 'column',
            reverse ? 'row-reverse' : 'row'
          ],
          gap: [3, 4, 5],
          px: 'auto'
        }}
      >
        <FlexContent reverse={reverse}>
          <Box sx={{ textAlign: ['center', 'left'] }}>
            <ContentText content={content.text} />
          </Box>

          {content.collection && (
            <>
              <Divider space={3} />
              {content.collection.map(({ text }, index) => (
                <Box key={`item-${index}`} mb='4'>
                  <Flex
                    sx={{
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      mb: 3,
                      px: 2
                    }}
                  >
                    <Box>
                      <ContentText content={text?.slice(0, 2)} />
                    </Box>
                    <ContentText
                      content={text?.[2]}
                      variant='h2'
                      sx={{ color: 'omegaDarker' }}
                      mb='0'
                      pl='3'
                    >
                      <Counter from='0' to={text?.[2]?.text} duration={2} />%
                    </ContentText>
                  </Flex>
                  <ProgressBar
                    color={text?.[2]?.color || undefined}
                    from='0%'
                    to={text?.[2]?.text}
                    duration={2}
                  />
                </Box>
              ))}
            </>
          )}
        </FlexContent>

        <FlexImage reverse={reverse}>
          <ContentImages content={{ images: content.images }} reverse={reverse} />
        </FlexImage>
      </Flex>
      <FlexOverlapFade direction={reverse ? 'ltr' : 'rtl'} />
    </Container>
  )
}

export default FeaturesWithPhotoBlock06