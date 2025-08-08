import React from 'react'
import { Container, Flex, Box, css } from 'theme-ui'
import Divider from '@solid-ui-components/Divider'
import ContentText from '@solid-ui-components/ContentText'
import ContentButtons from '@solid-ui-components/ContentButtons'
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
    },
    ':nth-last-of-type(2), :last-child': {
      borderTopStyle: `solid`,
      borderTopColor: `rgba(113, 128, 150, 0.2)`,
      borderTopWidth: [0, null, null, `sm`]
    }
  }
}

const FeaturesBlock04 = ({
  content: { text, buttons }
}) => (
  <Container>
    <Box sx={{ textAlign: `center` }}>
      <ContentText content={text} />
    </Box>
    {buttons && (
      <>
        <Divider space={3} />
        <ContentButtons content={buttons} />
      </>
    )}
  </Container>
)

export default WithDefaultContent(FeaturesBlock04)
