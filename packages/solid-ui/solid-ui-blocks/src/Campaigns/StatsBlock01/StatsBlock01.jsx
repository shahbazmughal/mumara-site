import React from 'react'
import { Container, Flex, Box } from 'theme-ui'
import Divider from '@solid-ui-components/Divider'
import ContentContainer from '@solid-ui-components/ContentContainer'
import ContentText from '@solid-ui-components/ContentText'
import WithDefaultContent from '@solid-ui-blocks/WithDefaultContent'
import ContentImages from '@solid-ui-components/ContentImages'

const styles = {
  logo: {
    width:"100%",
    height:"auto"
  }
}

const StatsBlock01 = ({
  content: { text, container, images, icon }
}) => (
  <Container sx={{ textAlign: `center` }}>
    <ContentContainer content={container} variant='cards.paper-lg'>
      <Divider space={1} />
      <ContentText content={text} />
      <Divider space={3} />
      <Box sx={styles.logo}>
        <ContentImages
          content={{ images }}
          loading='eager'
          sx={styles.logo}
          imagePosition='center'
        />
      </Box>
    </ContentContainer>
  </Container>
)

export default WithDefaultContent(StatsBlock01)
