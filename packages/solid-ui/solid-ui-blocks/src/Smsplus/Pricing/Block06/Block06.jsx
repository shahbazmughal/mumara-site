import React from 'react'
import { Container, Flex, Box } from 'theme-ui'
import Reveal from '@solid-ui-components/Reveal'
import Divider from '@solid-ui-components/Divider'
import ContentContainer from '@solid-ui-components/ContentContainer'
import ContentText from '@solid-ui-components/ContentText'
import ListItem from '@solid-ui-components/ListItem'
import ContentButtons from '@solid-ui-components/ContentButtons'
import WithDefaultContent from '@solid-ui-blocks/WithDefaultContent'

const FeaturesBlock06 = ({ content: { text = [], collection, buttons } }) => (
  <Container sx={{ textAlign: `left` }}>
    <Box>
      <ContentText content={text} sx={{ textAlign: `center` }} />
    </Box>
    {collection && (
      <>
        <Divider space='0' />
        <Reveal effect='fadeInDown'>
          <Flex sx={{ justifyContent: `start`, flexWrap: `wrap`, m: 0 }}>
            {collection.map(({ container, buttons, ...props }, index) => (
              <Box
                key={`item-${index}`}
                sx={{ flexBasis: [`1`, `1/2`, null, `1/2`], p: 2 }}
              >
                <ContentContainer content={container}>
                  <ListItem
                    {...props}
                    iconProps={{ round: true }}
                    vertical
                    left
                  />
                  {buttons && (
                    <>
                      <ContentButtons content={buttons} />
                    </>
                  )}
                </ContentContainer>
              </Box>
            ))}
          </Flex>
        </Reveal>
      </>
    )}
  </Container>
)

export default WithDefaultContent(FeaturesBlock06)
