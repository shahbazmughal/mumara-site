import React from 'react'
import { Container, Flex, Box } from 'theme-ui'
import Reveal from '@solid-ui-components/Reveal'
import ContentImages from '@solid-ui-components/ContentImages'
import ContentText from '@solid-ui-components/ContentText'
import WithDefaultContent from '@solid-ui-blocks/WithDefaultContent'

const styles = {
  image: {
    opacity:0
  }
}

const FeaturesWithPhotoBlock01 = ({
  content: { text, images, collection, padding }
}) => (
  <Container sx={{ position: `relative` }}>
    <Flex>
      <Box className="glossary-mblock" sx={{ textAlign: ['center', 'left'] }}>
          <ContentText content={text} />
          <div className="glossary-background-image"><ContentImages content={{ images }} /></div>
      </Box>
    </Flex>
  </Container>
)

export default WithDefaultContent(FeaturesWithPhotoBlock01)