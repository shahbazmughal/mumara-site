import React from 'react'
import { Container, Flex, Box, css } from 'theme-ui'
import Reveal from '@solid-ui-components/Reveal'
import ContentText from '@solid-ui-components/ContentText'
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

const FeaturesBlock05 = ({ content: { text, collection, images } }) => (
  <Container as={Reveal}>
    <Box sx={{ textAlign: `center`, marginBottom: 50 }}>
      <ContentText content={text} />
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
