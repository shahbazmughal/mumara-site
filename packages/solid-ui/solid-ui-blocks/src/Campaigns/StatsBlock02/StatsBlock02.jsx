import React from 'react'
import { Container, Flex, Box, css } from 'theme-ui'
import Divider from '@solid-ui-components/Divider'
import ContentContainer from '@solid-ui-components/ContentContainer'
import ContentText from '@solid-ui-components/ContentText'
import ContentButtons from '@solid-ui-components/ContentButtons'
import WithDefaultContent from '@solid-ui-blocks/WithDefaultContent'

const styles = {
  background : {
    backgroundColor: "#ebd6d6"
  }
}

const StatsBlock02 = ({
  content: { text, container, collection, buttons }
}) => (
  <Container sx={{ textAlign: `center` }}>
    <ContentContainer content={container} variant='cards.paper-lg' css={css(styles.background)}>
      <ContentText content={text} />
      {text && collection && <Divider space={3} />}
      {collection && (
        <>
          <Flex
            sx={{
              flexWrap: `wrap`,
              alignItems: `flex-start`,
              alignContent: `center`,
              justifyContent: `center`,
              m: -1
            }}
          >
            {collection?.map(({ text }, index) => (
              <Box
                key={`item-${index}`}
                sx={{
                  flex: `1`,
                  minWidth: 100,
                  textAlign: `center`,
                  p: 1
                }}
              >
                <Box>
                  <ContentText
                    content={text?.[1]}
                    sx={{ fontWeight: `body` }}
                    mb='0'
                  />
                </Box>
              </Box>
            ))}
          </Flex>
        </>
      )}
      {buttons && (
        <>
          <ContentButtons content={buttons} />
        </>
      )}
    </ContentContainer>
  </Container>
)

export default WithDefaultContent(StatsBlock02)
