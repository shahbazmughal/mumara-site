import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import { Container, Flex, Box, Badge, Link } from 'theme-ui'
import ContentContainer from '@solid-ui-components/ContentContainer'
import Reveal from '@solid-ui-components/Reveal'
import Divider from '@solid-ui-components/Divider'
import ContentText from '@solid-ui-components/ContentText'
import ContentImages from '@solid-ui-components/ContentImages'
import ContentButtons from '@solid-ui-components/ContentButtons'
import WithDefaultContent from '@solid-ui-blocks/WithDefaultContent'

import { FaRegClock } from 'react-icons/fa'
import text from '@solid-ui-theme/text'

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
  footerWrapper: {
    alignItems: `center`
  },
  postInfo: {
    flex: 1,
    flexWrap: `wrap`,
    justifyContent: `space-between`,
    color: `omega`,
    ml: 3
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
  },
  avatar: {
    size: 42,
    bg: `omegaLighter`,
    borderRadius: `full`,
    borderStyle: `solid`,
    borderWidth: `md`,
    borderColor: `omegaLighter`,
    boxSizing: `content-box`,
    img: {
      objectPosition: 'top center !important'
    }
  }
}

const BlogBlock01 = () => {
  const data = useStaticQuery(graphql`
    query {
      strapiBlog {
        heading
        description

        digitalimage { url }
        digitalbadgee
        Digitalheading
        Digitaldescription
        Digitallogo { url }
        Digitalname
        Digitaldate
        clock { url }
        Digitalmints

        Marketerimage { url }
        Marketerbadge
        Marketerheading
        Marketerdescription
        Marketerlogo { url }
        Marketername
        Marketerdate
        Marketermints

        innovationsiamge { url }
        innovationsbadge
        innovationsheading
        innovationsdescription
        innovationslogo { url }
        innovationsname
        innovationsdate
        innovationsmints
      }
    }
  `)

  const blog = data.strapiBlog

  const content = {
    text:[
        { text: blog.heading, variant: 'h3'},
        { text: blog.description },
    ],
    collection: [
      {
        text: [
          { text: blog.digitalbadgee, color:'#6366f1'},
          { text: blog.Digitalheading, variant: 'h5' },
          { text: blog.Digitaldescription },
          { text: blog.Digitalname, color: 'primary' },
          { text: blog.Digitaldate },
          { text: blog.Digitalmints }
        ],
        images: [{ src: normalizeUrl(blog.digitalimage?.url) }],
        avatar: { src: normalizeUrl(blog.Digitallogo?.url) }
      },
      {
        text: [
          { text: blog.Marketerbadge , color:'#6366f1'},
          { text: blog.Marketerheading, variant: 'h5' },
          { text: blog.Marketerdescription },
          { text: blog.Marketername, color: 'primary' },
          { text: blog.Marketerdate },
          { text: blog.Marketermints }
        ],
        images: [{ src: normalizeUrl(blog.Marketerimage?.url) }],
        avatar: { src: normalizeUrl(blog.Marketerlogo?.url) }
      },
      {
        text: [
          { text: blog.innovationsbadge, color:'#6366f1' },
          { text: blog.innovationsheading, variant: 'h5' },
          { text: blog.innovationsdescription },
          { text: blog.innovationsname, color: 'primary' },
          { text: blog.innovationsdate },
          { text: blog.innovationsmints }
        ],
        images: [{ src: normalizeUrl(blog.innovationsiamge?.url) }],
        avatar: { src: normalizeUrl(blog.innovationslogo?.url) }
      }
    ]
  }

  return (
    <Container>
      <Box sx={{ textAlign: `center` }}>
        <ContentText content={content.text} />
      </Box>
      <Divider />
      {content.collection && (
        <Reveal effect='fadeIn'>
          <Flex sx={{ flexWrap: `wrap`, justifyContent: `center`, m: -3 }}>
            {content.collection.map(
              ({ container, text, images, avatar, buttons }, index) => (
                <Box key={`item-${index}`} sx={styles.wrapper}>
                  <ContentContainer
                    content={container}
                    variant='cards.interactive'
                    sx={styles.card}
                  >
                    <Flex as='article' sx={styles.content}>
                      <Box sx={{ flex: [0, 1], m: 2, mb: [null, null, null, 0] }}>
                        <Box sx={styles.imageWrapper}>
                          <ContentImages
                            content={{ images }}
                            sx={styles.image}
                            imageEffect='fadeIn'
                          />
                        </Box>
                      </Box>
                      <Box sx={styles.body}>
                        {text?.[0]?.text && (
                          <Box sx={{ display: `inline-block` }} mb='3'>
                            <Badge
                              variant='tag'
                              sx={{ bg: `#e0e7ff` }}
                              color={text[0]?.color}
                            >
                              {text[0].text}
                            </Badge>
                          </Box>
                        )}
                        <ContentText content={text?.[1]} />
                        <ContentText
                          content={text?.[2]}
                          variant='small'
                          sx={{ flex: `auto`, mb: 3 }}
                        />
                        <Box sx={{ variant: `text.small` }}>
                          <Flex sx={styles.footerWrapper}>
                            <ContentImages
                              content={{ images: [avatar] }}
                              sx={styles.avatar}
                              imageEffect='fadeIn'
                            />
                            <Flex sx={styles.postInfo}>
                              <ContentText
                                content={text?.[3]}
                                sx={{
                                  display: `inline-block`,
                                  flexBasis: `full`
                                }}
                              >
                                <Link color={text?.[3]?.color}>
                                  <strong>{text?.[3]?.text}</strong>
                                </Link>
                              </ContentText>
                              <Flex sx={{ alignItems: `center` }}>
                                <ContentText
                                  content={text?.[4]}
                                  sx={{ display: `inline-block` }}
                                  mr='2'
                                />
                                {text?.[5] && <FaRegClock />}
                                <ContentText
                                  content={text?.[5]}
                                  sx={{ display: `inline-block` }}
                                  ml='2'
                                />
                              </Flex>
                            </Flex>
                          </Flex>
                        </Box>
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
