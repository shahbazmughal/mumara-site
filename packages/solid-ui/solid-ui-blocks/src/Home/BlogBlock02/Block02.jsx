import React from 'react'
import { Container, Flex, Box, Badge, Link } from 'theme-ui'
import ContentContainer from '@solid-ui-components/ContentContainer'
import Reveal from '@solid-ui-components/Reveal'
import Divider from '@solid-ui-components/Divider'
import ContentText from '@solid-ui-components/ContentText'
import ContentImages from '@solid-ui-components/ContentImages'
import ContentButtons from '@solid-ui-components/ContentButtons'
import WithDefaultContent from '@solid-ui-blocks/WithDefaultContent'
import { FaRegClock } from 'react-icons/fa'
import Data from './Data';
import mergeWith from 'lodash.mergewith'
import { Heading } from 'theme-ui'

const gradient = {
  background: t => `#2d3748`
}

const headings3 = ['h2']

const ContentText3 = ({ as: CustomComponent, content, children, ...props }) => {
  if (!content || content.length < 1) return null

  const contentArray = Array.isArray(content) ? content : [content]

  return contentArray.map(({ text, ...contentRest }, index) => {
    if (!text) return null

    contentRest.mb = contentRest.space

    const { variant, color, ...mergedProps } = mergeWith(
      {},
      props,
      contentRest,
      (a, b) => (b === null ? a : undefined)
    )

    const isHeading = headings3.includes(variant)

    return isHeading ? (
      <Heading
        key={`dpc-`+index}
        variant={variant}
        color={color}
      >
        Blogs, Resources & More.
      </Heading>
    ) : (
      <></>
    )
  })
}


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
      objectposition: 'top center !important'
    }
  }
}


const BlogBlock02 = ({ content: { text, collection, buttons } }) => (
  <Container>
    <Box sx={{ textAlign: `center` }}>
      <ContentText3 content={text} />
      <Divider />
      <Data />
    </Box>
    <Divider />
  </Container>
)

export default WithDefaultContent(BlogBlock02)
