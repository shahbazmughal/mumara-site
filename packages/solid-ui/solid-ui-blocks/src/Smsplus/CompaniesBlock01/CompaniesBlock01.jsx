import React from 'react'
import SVG from 'react-inlinesvg'
import { Container, Flex, Box, css } from 'theme-ui'
import Divider from '@solid-ui-components/Divider'
import ContentText from '@solid-ui-components/ContentText'
import ContentButtons from '@solid-ui-components/ContentButtons'
import WithDefaultContent from '@solid-ui-blocks/WithDefaultContent'
import ContentImages from '@solid-ui-components/ContentImages'

const styles = {
  logo: {
    width: "353px",
    height: "80px"
  },
  heading: {
    fontSize:16
  },
  textsize: {
    fontSize:12
  }
}

const CompaniesBlock01 = ({ content }) => {
  const { text, collection, buttons, images } = content

  return (
    <Container sx={{ textAlign: `center` }}>
      {text && collection && <Divider space={3} />}
      <Flex sx={{ flexWrap: `wrap`, m: -3, textAlign: `center` }}>
        <ContentText content={text}  sx={{ textAlign: `center`, display: `block`, width: `100%`, fontWeight:'600' }} />
        <Divider space={3} />
        {collection?.map(({ text, icon, images }, index) => (
          <Box key={`item-${index}`} sx={{ flexBasis: [`1`, `1/2`, null, `1/3`], p: 0 }} imagePosition='center'>
            <Box
              effect='fadeInGrow'
              delay={0.2 * (index + 2)}
              title={text?.[0]?.text}
              sx={{ textAlign: `center` }}
            >
              <ContentImages
                content={{ images }}
                loading='eager'
                imagePosition='center'
                sx={styles.logo}
              />
            </Box>
          </Box>
        ))}
      </Flex>
      {buttons && (
        <>
          <Divider space={3} />
          <ContentButtons content={buttons} />
        </>
      )}
    </Container>
  )
}

export default WithDefaultContent(CompaniesBlock01)
