import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import { Container, Flex, Box } from 'theme-ui'
import ContentContainer from '@solid-ui-components/ContentContainer'
import Reveal from '@solid-ui-components/Reveal'
import Divider from '@solid-ui-components/Divider'
import ContentText from '@solid-ui-components/ContentText'
import ContentImages from '@solid-ui-components/ContentImages'
import ContentButtons from '@solid-ui-components/ContentButtons'
import WithDefaultContent from '@solid-ui-blocks/WithDefaultContent'

const STRAPI_BASE_URL = 'https://strapi5-dev-jt.mumara.com'
const normalizeUrl = (url) =>
  url?.startsWith('http') ? url : `${STRAPI_BASE_URL}${url}`

const styles = {
  wrapper: {
    flex: [`100%`, null, null, 1],
    minWidth: 300,
    maxWidth: [`none`, null, null, 500],
    cursor: `pointer`,
    p: 3
  },
  card: {
    overflow: `hidden`,
    height: `full`
  },
  content: {
    alignItems: `stretch`,
    flexDirection: [`row`, null, null, `column`],
    height: `full`
  },
  body: {
    display: `flex`,
    flexDirection: `column`,
    justifyContent: `center`,
    flex: 1,
    p: 4
  },
  imageWrapper: {
    textAlign: `center`,
    position: `relative`,
    display: `block`,
    height: `full`
  },
  image: {
    display: [`none`, `block`],
    height: `full`,
    width: `100%`,
    objectFit: `cover`,
    bg: `omegaLighter`,
    borderRadius: `default`,
    minHeight: `15rem`,
    div: {
      p: `0 !important`
    }
  }
}

const BlogBlock01 = () => {
  const data = useStaticQuery(graphql`
    query {
      strapiServicesthreeblog {
        miniheading
        heading
        description

        markiting { url }
        markitingheading
        markitingdescription
        markitingbutton

        Lead { url }
        Leadheading
        Leaddescription
        Leadbutton

        Application { url }
        Applicationheading
        Applicationdescription
        Applicationbutton
      }
    }
  `)

  const blog = data.strapiServicesthreeblog

  const content = {
    text: [
      { text: blog.miniheading, variant: 'h3', color: 'white' },
      { text: blog.heading, variant: 'h2', color: '#d8b4fe', sx: { ml: 0 , maxWidth: '450px'} },
      { text: blog.description, color: '#9caabb' , sx: { ml: 0 , maxWidth: '450px'} }
    ],
    collection: [
      {
        text: [
          { text: blog.markitingheading, variant: 'h5' },
          { text: blog.markitingdescription }
        ],
        images: [{ src: normalizeUrl(blog.markiting?.url) }],
        buttons: [{ text: 'Learn More   ➜', variant: 'primary-light' }]
      },
      {
        text: [
          { text: blog.Leadheading, variant: 'h5' },
          { text: blog.Leaddescription }
        ],
        images: [{ src: normalizeUrl(blog.Lead?.url) }],
        buttons: [{ text: 'Learn More   ➜', variant: 'primary-light' }]
      },
      {
        text: [
          { text: blog.Applicationheading, variant: 'h5' },
          { text: blog.Applicationdescription }
        ],
        images: [{ src: normalizeUrl(blog.Application?.url) }],
        buttons: [{ text: 'Learn More   ➜', variant: 'primary-light' }]
      }
    ]
  }

  return (
    <Container>
      <Box sx={{ textAlign: `left` }}>
        <ContentText content={content.text} />
      </Box>
      <Divider />
      {content.collection && (
        <Reveal effect="fadeIn">
          <Flex sx={{ flexWrap: `wrap`, justifyContent: `center`, m: -3 }}>
            {content.collection.map(
              ({ container, text, images, buttons }, index) => (
                <Box key={`item-${index}`} sx={styles.wrapper}>
                  <ContentContainer
                    content={container}
                    variant="cards.interactive"
                    sx={styles.card}
                  >
                    <Flex as="article" sx={styles.content}>
                      <Box sx={{ flex: [0, 1], m: 2, mb: [null, null, null, 0] }}>
                        <Box sx={styles.imageWrapper}>
                          <ContentImages
                            content={{ images }}
                            sx={styles.image}
                            imageEffect="fadeIn"
                          />
                        </Box>
                      </Box>
                      <Box sx={styles.body}>
                        <ContentText content={text?.[0]} />
                        <ContentText
                          content={text?.[1]}
                          variant="small"
                          sx={{ flex: `auto`, mb: 3 }}
                        />
                        {buttons && (
                          <>
                            <Divider space={2} />
                            <ContentButtons content={buttons} />
                          </>
                        )}
                      </Box>
                    </Flex>
                  </ContentContainer>
                </Box>
              )
            )}
          </Flex>
        </Reveal>
      )}
    </Container>
  )
}

export default WithDefaultContent(BlogBlock01)
