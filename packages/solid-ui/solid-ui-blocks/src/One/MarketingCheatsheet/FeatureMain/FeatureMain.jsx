import React from 'react'
import { Container, Flex, Box } from 'theme-ui'
import ContentContainer from '@solid-ui-components/ContentContainer'
import Reveal from '@solid-ui-components/Reveal'
import Divider from '@solid-ui-components/Divider'
import ContentText from '@solid-ui-components/ContentText'
import ContentImages from '@solid-ui-components/ContentImages'
import ContentButtons from '@solid-ui-components/ContentButtons'
import WithDefaultContent from '@solid-ui-blocks/WithDefaultContent'

import { FaRegClock } from 'react-icons/fa'

const styles = {
  wrapper: {
    flex: [`100%`, null, null, 1],
    minWidth: 300,
    maxWidth: [`none`, null, null, 500],
    cursor: `pointer`,
    p: 3
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
    p: 1,
    mt:4
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
    div: {
      p: `0 !important`
    }
  }
}

const FeatureMain = ({ content: { text, collection, buttons } }) => (
  <Container>
    {collection && (
      <Reveal effect='fadeIn'>
        <Flex sx={{  justifyContent: `center`, m: -3 }}>
          {collection.map(
            ({ container, text, images, buttons }, index) => (
              <Box key={`item-${index}`} sx={styles.wrapper}>
                <ContentContainer
                >
                  <Flex as='article' sx={styles.content}>
                    {/* Image */}
                    <Box sx={{ flex: [0, 1], m: 2, mb: [null, null, null, 0] }}>
                      <Box sx={styles.imageWrapper}>
                        <ContentImages
                          content={{ images }}
                          sx={styles.image}
                          imageEffect='fadeInUp'
                        />
                      </Box>
                    </Box>
                    <Box sx={styles.body}>
                      {/* Title */}
                      <ContentText
                        content={text?.[1]}
                        sx={{ flex: [0, 0, `auto`] }}
                      />
                      {/* Excerpt */}
                      <ContentText
                        content={text?.[2]}
                        //variant='small'
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

export default WithDefaultContent(FeatureMain)
