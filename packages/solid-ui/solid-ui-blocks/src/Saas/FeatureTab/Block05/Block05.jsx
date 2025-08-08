import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import { Container, Flex, Box } from 'theme-ui'
import Reveal from '@solid-ui-components/Reveal'
import Divider from '@solid-ui-components/Divider'
import FlexOverlapFade from '@solid-ui-components/FlexOverlapFade'
import ContentText from '@solid-ui-components/ContentText'
import ContentButtons from '@solid-ui-components/ContentButtons'

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
  },
  imageWrap: {
    position: 'relative',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    px: [2, 4],
    mt: [4, 0]
  },
  overlayImage: {
    position: 'absolute',
    maxWidth: '100%',
    height: 'auto'
  }
}

const FeaturesCombinedBlock = () => {
  const data = useStaticQuery(graphql`
    query {
      strapiSaasfeaturetabone {
        miniheading
        heading
        description
        advancednumber
        advancedheading
        advanceddescription
        Reportnumber
        Reportheading
        Reportdescription
        image { url }
        visitorimage { url }
        buyerimage { url }
      }
    }
  `)

  const strapi = data.strapiSaasfeaturetabone

  const text = [
    {
      text: strapi.miniheading || '',
      color: 'omegaDark',
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
    text: [
      {
        text: `${strapi.advancednumber || '0'}+`,
        color: 'beta',
        variant: 'h2',
        space: 1
      },
      {
        text: strapi.advancedheading || '',
        variant: 'h6'
      },
      {
        text: strapi.advanceddescription || ''
      }
    ]
  },
  {
    text: [
      {
        text: `${strapi.Reportnumber || '0'}+`,
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
      src: normalizeUrl(strapi.buyerimage?.url),
      alt: 'Overlay image 1',
      effects: ['fadeInDown', 'float'],
      position: { bottom: '-15%', left: '15%' }
    },
    {
      src: normalizeUrl(strapi.visitorimage?.url),
      alt: 'Overlay image 2',
      radius: 'lg',
      shadow: 'default',
      effects: ['fadeInUp', 'floatFaster'],
      position: { top: '-20%', right: '17.5%' }
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
        {/* Left Text Section */}
        <Box sx={{ flex: 1, px: [2, 4], textAlign: ['center', 'left'] }}>
          <ContentText content={text} />

          <Divider space={3} />

          <Flex sx={styles.items}>
            {collection.map(({ text }, index) => (
              <Reveal
                key={`item-${index}`}
                effect='fadeInPop'
                delay={0.3 * (index + 1)}
              >
                <Flex sx={{ flexDirection: 'column', height: 'full' }}>
                  <ContentText content={text} ml={0} />
                </Flex>
              </Reveal>
            ))}
          </Flex>
        </Box>

        {/* Right Image Section */}
        <Box sx={{ ...styles.imageWrap, flex: 1 }}>
          {images.map((img, idx) => (
            <Box
              as='img'
              key={idx}
              src={img.src}
              alt={img.alt}
              sx={{
                maxWidth: '100%',
                borderRadius: img.radius === 'lg' ? '12px' : 0,
                boxShadow:
                  img.shadow === 'default'
                    ? '0 10px 20px rgba(0,0,0,0.1)'
                    : 'none',
                position: img.position ? 'absolute' : 'relative',
                ...img.position
              }}
            />
          ))}
        </Box>
      </Flex>

      <FlexOverlapFade direction='rtl' />
    </Container>
  )
}

export default FeaturesCombinedBlock
