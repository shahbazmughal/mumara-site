import React from 'react'
import { Container, Flex, Box } from 'theme-ui'
import ContentContainer from '@solid-ui-components/ContentContainer'
import ContentText from '@solid-ui-components/ContentText'
import WithDefaultContent from '@solid-ui-blocks/WithDefaultContent'

const FeaturesBlock06 = ({ content: { text = [], collection, buttons } }) => (
  <Container sx={{ textAlign: `left` }} className="about-content">
      <Flex sx={{ justifyContent: `start`, flexWrap: `wrap`, m: 0 }}>
        <ContentContainer>
          <Box sx={{ flexBasis: [`1`, `1/2`, null, `1/2`], p: 2 }}>
            <ContentText content={text} sx={{ textAlign: `center` }} />
          </Box>
        </ContentContainer>
      </Flex>
  </Container>
)

export default WithDefaultContent(FeaturesBlock06)
