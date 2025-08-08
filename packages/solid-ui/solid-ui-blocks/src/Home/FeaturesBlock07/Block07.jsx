import React from 'react'
import { Container, Flex, Box } from 'theme-ui'
import Reveal from '@solid-ui-components/Reveal'
import Divider from '@solid-ui-components/Divider'
import ContentContainer from '@solid-ui-components/ContentContainer'
import ContentText from '@solid-ui-components/ContentText'
import ListItem from '@solid-ui-components/ListItem'
import ContentButtons from '@solid-ui-components/ContentButtons'
import Icon from '@solid-ui-components/ContentIcon'
import WithDefaultContent from '@solid-ui-blocks/WithDefaultContent'
import ContentImages from '@solid-ui-components/ContentImages'

const FeaturesBlock07 = ({ content: { text = [], collection, buttons, icon } }) => (
  <Container sx={{ textAlign: `center` }}>
    {collection && (
      <>
        <Divider />
        <Reveal effect='fadeInDown'>
          <Box>
            <ContentText content={text} />
          </Box>
          <Divider />
          <Flex sx={{ justifyContent: `center`, flexWrap: `wrap`, m: -3 }}>
            {collection.map(({ container, icon, images, ...props }, index) => (
              <Box
                key={`item-${index}`}
                sx={{ flexBasis: [`1`, `1/2`, null, `1/4`], p: 3 }}
              >
                <ContentContainer content={container}>
                  <ContentImages
                    content={{ images }}
                    loading='eager'
                    imagePosition='center'
                  />
                  <Icon content={icon} size='xl' mr='3' mb='3' />
                  <ListItem
                    {...props}
                    iconProps={{ round: true }}
                    vertical
                    center
                  />
                </ContentContainer>
              </Box>
            ))}
          </Flex>
        </Reveal>
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

export default WithDefaultContent(FeaturesBlock07)
