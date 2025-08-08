import React from 'react'
import { Container, Flex, Box, css } from 'theme-ui'
import Reveal from '@solid-ui-components/Reveal'
import Divider from '@solid-ui-components/Divider'
import ContentText from '@solid-ui-components/ContentText'
import ContentImages from '@solid-ui-components/ContentImages'
import ContentButtons from '@solid-ui-components/ContentButtons'
import WithDefaultContent from '@solid-ui-blocks/WithDefaultContent'
import ListItem from '@solid-ui-components/ListItem'
import Icon from '@solid-ui-components/ContentIcon'

const styles = {
  paraWidth: {
    maxWidth: `820px`,
    margin: `80px auto 0`
  },
  listItem: {
    flex: `1 1 0`,
    minWidth: 300,
    maxWidth:650,
    margin: `30px auto 0`,
    p: 3
  }
}

const FeaturesWithPhotoBlock03 = ({ content: { text, buttons, images, collection } }) => (
  <Container sx={{ textAlign: `center` }}>
    <Box sx={styles.paraWidth}>
      {text && (
        <Reveal effect='fadeInDown'>
          <ContentText content={text} />
        </Reveal>
      )}
      {collection && (
          <>
            <Flex sx={{ flexWrap: `wrap` }} m={-3}>
              {collection.map(
                ({ text, icon, collection, buttons, container }, index) => (
                  <Reveal
                    key={`item-${index}`}
                    effect='fadeInGrow'
                    delay={0.15 * (index + 1)}
                    css={css(styles.listItem)}
                  >
                      <Icon content={icon} size='md' mr='3' mb='3' />
                      <ContentText content={text?.[0]} />
                      <Flex sx={{ alignItems: `center`, flexWrap: `wrap` }}>
                        <ContentText
                          content={text?.slice(1)}
                          sx={styles.itemDescription}
                          mt={[3, null, 0]}
                        />
                        {collection && (
                          <Box sx={{ flexGrow: 1, mr: [3, null, 0] }}>
                            {collection.map((props, index) => (
                              <ListItem key={`item-${index}`} {...props} compact />
                            ))}
                          </Box>
                        )}
                      </Flex>
                  </Reveal>
                )
              )}
            </Flex>
          </>
        )}
      {buttons && (
        <>
          <Divider space={3} />
          <ContentButtons content={buttons} />
        </>
      )}
    </Box>
    {images && (
      <>
        <Divider space={4} />
        <Box sx={{ position: `relative` }}>
          <ContentImages
            content={{ images }}
            loading='eager'
            imagePosition='center'
            imageEffect='fadeInDown'
          />
        </Box>
      </>
    )}
  </Container>
)

export default WithDefaultContent(FeaturesWithPhotoBlock03)
