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

const FeaturesWithPhotoBlock06 = ({ reverse }) => {
  const { strapiSaasfeaturetabtwo: data } = useStaticQuery(graphql`
    query {
      strapiSaasfeaturetabtwo {
        heading
        description
        image { url }
        visitorsimage { url }
        slaesimage { url }
        earningimage { url }
        miniheading
        advancedheading
        advanceddescription
        advancednumber
        Reportingheading
        Reportingdescription
        Reportnumber
      }
    }
  `)

  // Prepare content to match WithDefaultContent structure
  const text = [
    { text: data.miniheading, variant: 'h4', color: 'omegaDark', mb: 1 },
    { text: data.heading, variant: 'h2', mb: 1 },
    { text: data.description, variant: 'medium' }
  ]

  const collection = [
    {
      text: [
        { text: data.advancedheading, variant: 'h5', color: 'omegaDarker', fontWeight: 'bold' },
        { text: data.advanceddescription },
        { text: `${data.advancednumber}%`, color: 'beta' }
      ]
    },
    {
      text: [
        { text: data.Reportingheading, variant: 'h5', color: 'omegaDarker', fontWeight: 'bold' },
        { text: data.Reportingdescription },
        { text: `${data.Reportnumber}%`, color: 'beta' }
      ]
    }
  ]

  const images = [
    {
      src: normalizeUrl(data.image?.url),
      alt: 'Main Image',
      radius: 'lg',
      shadow: 'default'
    },
    {
      src: normalizeUrl(data.earningimage?.url),
      alt: 'Earning',
      effects: ['floatbonce'],
      position: { top: '-30%', right: '5%' }
    },
    {
      src: normalizeUrl(data.visitorsimage?.url),
      alt: 'Visitors',
      effects: ['float'],
      position: { top: '-15%', left: '10%' }
    },
    {
      src: normalizeUrl(data.slaesimage?.url),
      alt: 'Sales',
      effects: ['float'],
      position: { bottom: '-10%', left: '20%' }
    }
  ].filter(img => img.src)

  return (
    <Container sx={{ position: 'relative' }}>
      <Flex
        sx={{
          alignItems: ['center'],
          flexDirection: [reverse ? 'column-reverse' : 'column', reverse ? 'row-reverse' : 'row'],
          mx: [null, null, null, -4]
        }}
      >
        <FlexImage reverse={reverse}>
          <ContentImages content={{ images }} reverse={reverse} />
        </FlexImage>

        <FlexContent reverse={reverse}>
          <Box sx={{ textAlign: ['center', 'left'] }}>
            <ContentText content={text} />
          </Box>

          <Divider space={3} />

          {collection.map(({ text }, index) => (
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
                  <Counter from='0' to={parseInt(text?.[2]?.text)} duration={2} />%
                </ContentText>
              </Flex>

              <ProgressBar
                color={text?.[2]?.color}
                from='0%'
                to={text?.[2]?.text}
                duration={2}
              />
            </Box>
          ))}
        </FlexContent>
      </Flex>

      <FlexOverlapFade direction={reverse ? 'ltr' : 'rtl'} />
    </Container>
  )
}

export default FeaturesWithPhotoBlock06
