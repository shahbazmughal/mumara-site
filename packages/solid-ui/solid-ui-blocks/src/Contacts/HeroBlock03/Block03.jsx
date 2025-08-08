import React from 'react'
import { getImage } from 'gatsby-plugin-image'
import { Container, Flex, Box } from 'theme-ui'
import ContentText from '@solid-ui-components/ContentText'
import ContentContainer from '@solid-ui-components/ContentContainer'
import ContentImages from '@solid-ui-components/ContentImages'
import WithDefaultContent from '@solid-ui-blocks/WithDefaultContent'

const styles = {
  minH : {
    minHeight:250
  },
  subTitle: {
    maxWidth: 750
  },
  smallTitle: {
    maxWidth: 1000
  },
  containerMain: {
    textAlign: `center`, 
    position: `relative`,
    minHeight: 250,
    borderRadius:0,
    paddingTop: 50,
    color:"white"
  },
  content: {
    flexDirection: `column`,
    size: `full`,
    alignItems: `center`,
    justifyContent: `center`,
    py: 4
  },
  overlay: {
    size: `full`,
    bg: `omegaDarker`,
    opacity: 0.75,
    position: `absolute`,
    borderRadius:0,
    top: 0,
    zIndex: -1
  },
  image: {
    position: `absolute`,
    top: 0,
    bottom: 0,
    width:`100%`,
    height:`300px`,
    zIndex: -2
  }
}

const HeroBlock03 = ({
  content: { container, text, buttons, form, images }
}) => (
  <Container variant='full' sx={styles.containerMain}>
    <Flex
      sx={{
        ...styles.content,
        minHeight: 250?.[0]?.src
          ? getImage(images[0].src)?.height
          : undefined
      }}
    >
      <ContentText
        content={text?.[0]}
        sx={{
          bg: `omegaDarker`,
          display: `inline-block`,
          maxWidth:"100%",
          padding:"10px 25px",
          color:"#FFF"
        }}
        px='0'
        mb='3'
      />
      <ContentText content={text?.[1]} mb='4' sx={styles.smallTitle} mx='auto' />
      <ContentText content={text?.slice(2)}  mx='auto' />
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
        sx={{ size: `full` ,borderRadius:0,}}
        imageEffect='fadeIn'
      />
    </Box>
  </Container>
)

export default WithDefaultContent(HeroBlock03)
