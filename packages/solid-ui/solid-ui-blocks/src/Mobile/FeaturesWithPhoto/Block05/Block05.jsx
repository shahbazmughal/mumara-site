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
      strapiSaasv2Featuretwo {
        image { url }
        visitorsimage { url }
        salesimage { url }
        earningimage { url }
        miniheading
        subheading
        description
        advanced
        advancedheading
        Advanceddescription
        report
        Reportheading
        Reportdescription
      }
    }
  `)

  const strapi = data.strapiSaasv2Featuretwo

  const text = [
    {
      text: strapi.miniheading || '',
      color: 'omegaDark',
      variant: 'h4'
    },
    {
      text: strapi.subheading || '',
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
          text: `${strapi.advanced || '0'}+`,
          color: 'beta',
          variant: 'h2',
          space: 1
        },
        {
          text: strapi.advancedheading || '',
          variant: 'h6'
        },
        {
          text: strapi.Advanceddescription || ''
        }
      ]
    },
    {
      content: [
        {
          text: `${strapi.report || '0'}+`,
          color: 'beta',
          variant: 'h2',
          space: 1
        },
        {
          text: strapi.Reportheading || '',
          variant: 'h6'
        },
        {
          text: strapi.Reportdescription || ''
        }
      ]
    }
  ]

  const images = [
    {
      src: normalizeUrl(strapi.image?.url),
      alt: 'Main image',
      radius: 'lg',
      shadow: 'default'
    },
    {
      src: normalizeUrl(strapi.salesimage?.url),
      alt: 'Sales',
      effects: ['float'],
      position: { bottom: '-10%', left: '20%' }
    },
    {
      src: normalizeUrl(strapi.visitorsimage?.url),
      alt: 'Visitors',
      effects: ['float'],
      position: { top: '-15%', left: '10%' }
    },
    {
      src: normalizeUrl(strapi.earningimage?.url),
      alt: 'Earnings',
      radius: 'lg',
      effects: ['floatbonce'],
      position: { top: '-30%', right: '20%' }
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

        <Box sx={{ flex: 1, px: [2, 4], textAlign: ['center', 'left'] }}>
          <ContentText content={text} />
          <Divider space={3} />

          <Flex sx={styles.items}>
            {collection.map((item, index) => (
              <Reveal
                key={`item-${index}`}
                effect='fadeInPop'
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

      <FlexOverlapFade direction='rtl' />
    </Container>
  )
}

export default FeaturesCombinedBlock
