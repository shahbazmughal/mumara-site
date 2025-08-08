import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import { Container, Flex, Box, Heading } from 'theme-ui'
import Reveal from '@solid-ui-components/Reveal'
import Divider from '@solid-ui-components/Divider'
import FlexImage from '@solid-ui-components/FlexImage'
import FlexContent from '@solid-ui-components/FlexContent'
import FlexOverlapFade from '@solid-ui-components/FlexOverlapFade'
import ContentText from '@solid-ui-components/ContentText'
import ContentImages from '@solid-ui-components/ContentImages'
import ContentButtons from '@solid-ui-components/ContentButtons'

const STRAPI_BASE_URL = 'https://strapi5-dev-jt.mumara.com'
const normalizeUrl = (url) => url?.startsWith('http') ? url : `${STRAPI_BASE_URL}${url}`

const styles = {
  listItem: {
    alignItems: `stretch`,
    justifyContent: `flex-start`
  },
  line: {
    position: `absolute`,
    bottom: `10px`,
    left: `50%`,
    width: `1px`,
    height: t => `calc(100% - ${t.sizes.icon.md + 20}px)`,
    transform: `translateX(-50%)`,
    zIndex: 1,
    bg: `omega`
  },
  number: {
    color: `white`,
    fontWeight: `body`,
    borderRadius: `full`,
    bg: `alpha`,
    size: `icon.md`,
    textAlign: `center`,
    p: 2,
    mb: 0
  }
}

const FeaturesWithPhotoBlock07 = ({ reverse = false }) => {
  const { strapiFintchfeatureone: data } = useStaticQuery(graphql`
    {
      strapiFintchfeatureone {
        image { url }
        coinimage { url }
        miniheading
        heading
        description
        Automaticheading
        Automaticdescription
        dailyheading
        dailydescription
        reportsheading
        reportsdescription
      }
    }
  `)

  const content = {
    text: [
      { text: data?.miniheading, color: 'beta', variant: 'h4' },
      { text: data?.heading, variant: 'h2' },
      { text: data?.description, variant: 'medium' }
    ],
    images: [
      {
        src: normalizeUrl(data?.image?.url),
        alt: 'Main Feature Image'
      },
      {
        src: normalizeUrl(data?.coinimage?.url),
        alt: 'Coin Overlay',
        effects: ['fadeInUp', 'float'],
        position: { bottom: '10%', right: '0%' }
      }
    ],
    collection: [
      {
        text: [
          { text: data?.Automaticheading, color: 'omegaDarker', variant: 'h5' },
          { text: data?.Automaticdescription }
        ]
      },
      {
        text: [
          { text: data?.dailyheading, color: 'omegaDarker', variant: 'h5' },
          { text: data?.dailydescription }
        ]
      },
      {
        text: [
          { text: data?.reportsheading, color: 'omegaDarker', variant: 'h5' },
          { text: data?.reportsdescription }
        ]
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
          <ContentImages content={{ images: content.images }} reverse={reverse} />
        </FlexImage>

        <FlexContent reverse={reverse}>
          <Box sx={{ textAlign: [`center`, `left`] }}>
            <ContentText content={content.text} />
          </Box>

          {content.collection && (
            <>
              <Divider space={3} />
              <Reveal
                effect={reverse ? 'fadeInRight' : 'fadeInLeft'}
                duration={1.5}
              >
                {content.collection.map(({ text }, index) => (
                  <Flex key={`item-${index}`} sx={styles.listItem}>
                    <Box sx={{ position: `relative`, flexShrink: 0, mr: 4 }}>
                      <Heading variant='h4' as='div' sx={styles.number}>
                        {index + 1}
                      </Heading>
                      {index + 1 < content.collection.length && <Box sx={styles.line} />}
                    </Box>
                    <Box>
                      <ContentText content={text} />
                      {index + 1 < content.collection.length && <Divider space={3} />}
                    </Box>
                  </Flex>
                ))}
              </Reveal>
            </>
          )}
        </FlexContent>
      </Flex>
      <FlexOverlapFade direction={reverse ? 'ltr' : 'rtl'} />
    </Container>
  )
}

export default FeaturesWithPhotoBlock07
