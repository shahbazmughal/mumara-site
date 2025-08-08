import React from 'react'
import { Container, Flex, Box } from 'theme-ui'
import Reveal from '@solid-ui-components/Reveal'
import Divider from '@solid-ui-components/Divider'
import ContentText from '@solid-ui-components/ContentText'
import ContentImages from '@solid-ui-components/ContentImages'
import WithDefaultContent from '@solid-ui-blocks/WithDefaultContent'


const TitleBlock01 = ({
  content: { text, images, collection }
}) => (
  <Container>
    {text && (
      <Box sx={{ textAlign: `center` }}>
        <ContentText content={text} my="0" />
        <Divider />
      </Box>
    )}
  </Container>
)

export default WithDefaultContent(TitleBlock01)
