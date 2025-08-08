import React from 'react'
import { Container, Flex, Box } from 'theme-ui'
import Reveal from '@solid-ui-components/Reveal'
import Divider from '@solid-ui-components/Divider'
import ListItem from '@solid-ui-components/ListItem'
import ContentContainer from '@solid-ui-components/ContentContainer'
import ContentText from '@solid-ui-components/ContentText'
import ContentButtons from '@solid-ui-components/ContentButtons'
import WithDefaultContent from '@solid-ui-blocks/WithDefaultContent'

const FaqBlock02 = ({ content: { text, collection, buttons } }) => (
  <Container as={Reveal}>
    <Box sx={{ textAlign: `center` }}>
      <ContentText content={text} />
    </Box>
    {text && collection && <Divider />}
    <Flex sx={{ flexWrap: `wrap`, m: -3 }}>
      {collection?.map(({ container, buttons, ...props }, index) => (
        <Box key={`item-${index}`} sx={{ flexBasis: [`1`, `1/2`] }}>
          <ContentContainer content={container} p='4' className="cl-ffaq">
            <ListItem {...props} middle iconProps={{ mr: 2 }} />
            {buttons && (
              <div className="faq-link">
                <ContentButtons content={buttons} />
              </div>
            )}
          </ContentContainer>
        </Box>
      ))}
    </Flex>
  </Container>
)

export default WithDefaultContent(FaqBlock02)
