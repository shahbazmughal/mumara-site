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
    width: [100, 100],
    height: [60, 60]
  },
  heading: {
    fontSize:16
  },
  textsize: {
    fontSize:12
  },
  btnText: {
    fontWeight: '700'
  }
}

const CompaniesBlock01 = ({ content }) => {
  const { text, collection, buttons, images } = content

  return (
    <Container sx={{ textAlign: `center` }}>
      <ContentText content={text} />
      {text && collection && <Divider />}
      <Flex sx={{ flexWrap: `wrap`, m: -3 }}>
        {collection?.map(({ text, icon, buttons, images }, index) => (
          <Box key={`item-${index}`} sx={{ flexBasis: [`1`, `1/2`, null, `1/5`], p: 3 }}>
            <ContentImages
                content={{ images }}
                loading='eager'
                imagePosition='center'
              />
            <Box
              title={text?.[0]?.text}
            >
              <ContentButtons content={buttons} sx={styles.btnText} />
              <ContentText content={text} />
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
