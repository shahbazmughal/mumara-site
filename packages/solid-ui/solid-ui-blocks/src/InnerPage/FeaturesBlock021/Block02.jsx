import React from 'react'
import { Container, Flex, Box } from 'theme-ui'
import ContentContainer from '@solid-ui-components/ContentContainer'
import Divider from '@solid-ui-components/Divider'
import ContentText from '@solid-ui-components/ContentText'
import Icon from '@solid-ui-components/ContentIcon'
import ContentButtons from '@solid-ui-components/ContentButtons'
import WithDefaultContent from '@solid-ui-blocks/WithDefaultContent'

const FeaturesBlock02 = ({ content: { text, collection, buttons } }) => (
  <Container sx={{ textAlign: `center` }}>
    <ContentText content={text} />
      {collection && (
        <>
          <Divider />
          <Flex sx={{ flexWrap: `wrap`, m: -3 }}>
            {collection?.map(({ text, icon, buttons, container }, index) => (
              <Box
                key={`item-${index}`}
                sx={{
                  flexBasis: [`1`, null, `1/3`],
                  textAlign: `left`,
                  p: 2
                }}
              >
                <ContentContainer content={container} variant='cards.paper'>
                  {text?.[0] && (
                    <>
                      <Flex sx={{ alignItems: `center`, mb: 0 }}>
                        <Icon content={icon} size='sm' mr='0' />
                      </Flex>
                      <Flex sx={{ alignItems: `center`, mb: 3 }}>
                        <ContentText content={text[0]} mb='0' />
                      </Flex>
                    </>
                  )}
                  <ContentText content={text?.[1]} />
                  {buttons && (
                    <>
                      <Divider space={2} />
                      <ContentButtons content={buttons} />
                    </>
                  )}
                </ContentContainer>
              </Box>
            ))}
          </Flex>
        </>
      )}
      {buttons && (
        <>
          <Divider space={3} />
          <ContentButtons content={buttons} />
        </>
      )}
  </Container>
)

export default WithDefaultContent(FeaturesBlock02)
