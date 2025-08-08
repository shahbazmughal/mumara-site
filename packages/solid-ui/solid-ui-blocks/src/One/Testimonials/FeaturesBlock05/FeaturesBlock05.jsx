import React from 'react'
import { Container, Flex, Box, css } from 'theme-ui'
import Divider from '@solid-ui-components/Divider'
import Reveal from '@solid-ui-components/Reveal'
import ContentContainer from '@solid-ui-components/ContentContainer'
import ContentText from '@solid-ui-components/ContentText'
import Icon from '@solid-ui-components/ContentIcon'
import ContentButtons from '@solid-ui-components/ContentButtons2'
import WithDefaultContent from '@solid-ui-blocks/WithDefaultContent'
import ContentImages from '@solid-ui-components/ContentImages'

const styles = {
  sheading: {
    fontSize:"1.1em"
  },
  listItem: {
    flex: `1 1 0`,
    minWidth: 300,
    p: 3
  },
  itemDescription: {
    flexBasis: `3/5`,
    flexGrow: 1,
    order: [1, null, 0],
    mb: 3
  },
  icons: {
    padding:0,
    color: "#333",
    width:"16px",
    height:"16px",
    display: "inline-block",
    float: "left"
  },
  imageWrapper: {
    textAlign: `center`,
    position: `relative`,
    display: `block`,
    height: `full`
  },
  image: {
    display: [`none`, `block`],
    height: `full`,
    width:`auto`,
    margin: `0 auto`
  }
}

const FeaturesBlock05 = ({ content: { text, collection, images, buttons } }) => (
  <Container as={Reveal}>
    <Box sx={{ textAlign: `center`, marginBottom: 50 }}>
      <ContentText content={text} />
        {buttons && (
          <>
            <Divider space={3} />
            <ContentButtons content={buttons} />
          </>
        )}
      <Box sx={styles.imageWrapper} className="top-image">
        <ContentImages
          content={{ images }}
          sx={styles.image}
          imageEffect='fadeInUp'
        />
      </Box>
    </Box>
  </Container>
)

export default WithDefaultContent(FeaturesBlock05)
