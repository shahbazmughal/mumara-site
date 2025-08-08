import React from 'react'
import { Container, Flex, Box } from 'theme-ui'
import Divider from '@solid-ui-components/Divider'
import ListItem from '@solid-ui-components/ListItem'
import ContentContainer from '@solid-ui-components/ContentContainer'
import ContentText from '@solid-ui-components/ContentText'
import FlexImage from '@solid-ui-components/FlexImage'
import ContentImages from '@solid-ui-components/ContentImages'
import ContentButtons from '@solid-ui-components/ContentButtons'
import WithDefaultContent from '@solid-ui-blocks/WithDefaultContent'

const FaqBlock02 = ({ content: { text, collection, buttons, images } }) => (
  <Container>
    <Box sx={{ textAlign: `center` }}>
      <ContentText content={text} />
      {buttons && (
        <>
          <ContentButtons content={buttons} />
        </>
      )}
    </Box>
    {text && collection && <Divider />}
    <Flex sx={{ flexWrap: `wrap`, m: -3 }}>
      {collection?.map(({ container, buttons, images, ...props }, index) => (
        <Box key={`item-${index}`} sx={{ flexBasis: [`1`, `1/2`] }}>
          <ContentContainer content={container} p='4'>
            <ListItem {...props} middle iconProps={{ mr: 2 }} />
            {buttons && (
              <>
                <ContentButtons content={buttons} />
              </>
            )}
          </ContentContainer>
          <FlexImage>
            <ContentImages content={{ images }} />
          </FlexImage>
        </Box>
      ))}
    </Flex>
  </Container>
)

export default WithDefaultContent(FaqBlock02)
