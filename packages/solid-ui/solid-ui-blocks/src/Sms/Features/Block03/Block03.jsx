import React from 'react'
import { getImage } from 'gatsby-plugin-image'
import { Container, Flex, Box } from 'theme-ui'
import ContentText from '@solid-ui-components/ContentText'
import ContentContainer from '@solid-ui-components/ContentContainer'
import ContentImages from '@solid-ui-components/ContentImages'
import WithDefaultContent from '@solid-ui-blocks/WithDefaultContent'

const styles = {
  subTitle: {
    maxWidth: 500
  },
  content: {
    flexDirection: `column`,
    size: `full`,
    alignItems: `center`,
    justifyContent: `center`,
    py: 0
  },
  overlay: {
    size: `full`,
    bg: `omegaDarker`,
    opacity: 0.75,
    position: `absolute`,
    top: 0,
    zIndex: -1
  },
  image: {
    size: `full`,
    position: `absolute`,
    top: 0,
    zIndex: -2
  }
}

const HeroBlock03 = ({
  content: { container, text, buttons, form, images }
}) => (
  <Container variant='full' sx={{ textAlign: `center`, position: `relative` }}>
    <Flex
      sx={{
        ...styles.content,
        minHeight: images?.[0]?.src
          ? getImage(images[0].src)?.height
          : undefined
      }}
    >
        <Box sx={{mt:3}}></Box>
        <ContentText
          content={text?.[0]}
          sx={{
            bg: `omegaDarker`,
            display: `inline-block`
          }}
          px='2'
          mb='3'
          mt='5'
        />
        <ContentText content={text?.[1]} mb='0' mt='0' mx='auto' />
        <ContentText content={text?.slice(2)} mx='auto' />
    </Flex>
    <ContentContainer
      content={container}
      sx={styles.overlay}
      className='block-overlay'
    />
    <Box sx={styles.image}>
      <ContentImages
        loading='eager'
        content={{ images }}
        sx={{ size: `full` }}
        imageEffect='fadeIn'
      />
    </Box>
  </Container>
)

export default WithDefaultContent(HeroBlock03)
