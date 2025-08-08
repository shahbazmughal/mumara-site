import React from 'react'
import { Container, Flex, Box, css, Link } from 'theme-ui'
import Divider from '@solid-ui-components/Divider'
import ContentContainer from '@solid-ui-components/ContentContainer'
import ContentText from '@solid-ui-components/ContentText'
import Icon from '@solid-ui-components/ContentIcon'
import ContentButtons from '@solid-ui-components/ContentButtons2'
import WithDefaultContent from '@solid-ui-blocks/WithDefaultContent'

const styles = {
  sheading: {
    fontSize:"1.1em"
  },
  listItem: {
    flex: `1 1 0`,
    minWidth: 300,
    p: 3
  },
  itemDescription: {
    flexBasis: `3/5`,
    flexGrow: 1,
    order: [1, null, 0],
    mb: 3
  },
  icons: {
    padding:0,
    color: "#333",
    width:"16px",
    height:"16px",
    display: "inline-block",
    float: "left"
  }
}

const FeaturesBlock06 = ({ content: { text, collection, icon2 } }) => (
  <Container>
    <Box sx={{ textAlign: `center` }}>
      <ContentText content={text} sx={{backgroundColor:`#0f977e`, color:`#FFF`, padding: `7px 0`}} />
    </Box>
    {collection && (
      <>
        <Divider />
        <Flex sx={{ flexWrap: `wrap` }} m={-3}>
          {collection.map(
            ({ text, icon, collection, buttons, container }, index) => (
              <Box
                key={`item-${index}`}
                css={css(styles.listItem)}
              >
                <ContentContainer
                  content={container}
                  variant='cards.paper'
                  sx={{ height: `full` }}
                >
                  <Icon content={icon} size='md' mr='3' mb='3' />
                  <ContentText content={text?.[0]} sx={styles.sheading} />
                  <Flex sx={{ alignItems: `center`, flexWrap: `wrap` }}>
                    <ContentText
                      content={text?.slice(1)}
                      sx={styles.itemDescription}
                      mt={[3, null, 0]}
                    />
                  </Flex>
                  {buttons && (
                    <>
                      <Divider space={0} />
                      <ContentButtons content={buttons} css={css(styles.icons)} />
                    </>
                  )}
                </ContentContainer>
              </Box>
            )
          )}
        </Flex>
      </>
    )}
  </Container>
)

export default WithDefaultContent(FeaturesBlock06)
