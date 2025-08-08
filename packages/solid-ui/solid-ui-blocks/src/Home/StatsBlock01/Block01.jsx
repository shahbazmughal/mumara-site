import React from 'react'
import { Container, Flex, Box, css } from 'theme-ui'
import Divider from '@solid-ui-components/Divider'
import ContentContainer from '@solid-ui-components/ContentContainer'
import ContentText from '@solid-ui-components/ContentText'
import ContentButtons from '@solid-ui-components/ContentButtons'
import Icon from '@solid-ui-components/ContentIcon'
import WithDefaultContent from '@solid-ui-blocks/WithDefaultContent'

const styles = {
  listItem: {
    flexBasis: [`1`, null, `1/2`],
    alignItems: `center`,
    justifyContent: `center`,
    p: [3, 4],
    ':nth-of-type(even)': {
      borderLeftStyle: `solid`,
      borderLeftColor: `rgba(113, 128, 150, 0.2)`,
      borderLeftWidth: [0, null, null, `sm`]
    }
  },
  button: {
    backgroundColor: `rgba(255, 255, 255, 0)`,
    color: "#333"
  }
}

const StatsBlock01 = ({
  content: { text, container, collection, buttons }
}) => (
  <Container sx={{ textAlign: `center` }}>
    <ContentContainer content={container} variant='cards.paper-lg'>
      <ContentText content={text} />
      {text && collection && <Divider space={3} />}
      {collection && (
      <>
        <Divider space={1} />
          <Flex sx={{ flexWrap: `wrap` }}>
            {collection?.map(({ text, icon, buttons }, index) => (
              <Box key={`item-${index}`} css={css(styles.listItem)}>
                {text?.[0] && (
                  <Flex sx={{ alignItems: `center`, mb: 3 }}>
                    <Icon content={icon} size='sm' mr='3' />
                    <ContentText content={text[0]} mb='0' />
                  </Flex>
                )}
                <Box ml={2}  sx={{ textAlign: `left` }}>
                  <ContentText content={text?.[1]} />
                  {buttons && (
                    <>
                      <Divider space={2} />
                      <ContentButtons content={buttons} css={css(styles.button)} />
                    </>
                  )}
                </Box>
              </Box>
            ))}
          </Flex>
      </>
      )}
    </ContentContainer>
  </Container>
)

export default WithDefaultContent(StatsBlock01)
