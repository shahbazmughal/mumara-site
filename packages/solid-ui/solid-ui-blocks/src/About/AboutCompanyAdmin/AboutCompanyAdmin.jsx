import React from 'react'
import { getImage } from 'gatsby-plugin-image'
import { Container, Flex, Box } from 'theme-ui'
import ContentText from '@solid-ui-components/ContentText'
import WithDefaultContent from '@solid-ui-blocks/WithDefaultContent'
import './admin_team.css';

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
    height:`full`,
    position: `absolute`,
    top: 0,
    zIndex: -2
  }
}

const AboutCompanyAdmin = ({
  content: { container, text, buttons, form, images }
}) => (
  <Container className="companyadmin" variant='full' sx={{ textAlign: `center`, position: `relative` }}>
    <Flex
      sx={{
        ...styles.content,
        minHeight: images?.[0]?.src
          ? getImage(images[0].src)?.height
          : undefined
      }}
    >
        <ContentText
          content={text?.[0]}
          sx={{
            bg: `alphaDark`,
            display: `inline-block`
          }}
          px='2'
          mb='2'
          mt='3'
        />
        <ContentText content={text?.[1]} mb='5' mt='0' mx='auto' />
        <ContentText content={text?.slice(2)} mx='auto' />
    </Flex>
    <Flex
      sx={{
        ...styles.content
      }}
    >
        
        <div className="container "></div>
          
    </Flex>
  </Container>
)

export default WithDefaultContent(AboutCompanyAdmin)
