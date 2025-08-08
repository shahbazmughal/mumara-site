import React from 'react'
import { getImage } from 'gatsby-plugin-image'
import { Container, Flex, Box } from 'theme-ui'
import ContentText from '@solid-ui-components/ContentText'
import WithDefaultContent from '@solid-ui-blocks/WithDefaultContent'
import image7 from "./shahbazmughal.jpg"
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

const AboutTeam = ({
  content: { container, text, buttons, form, images }
}) => (
  <Container className="companyteam" variant='full' sx={{ textAlign: `center`, position: `relative` }}>
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
            display: `inline-block`
          }}
          px='0'
          mb='0'
          mt='0'
        />
        <ContentText content={text?.[1]} mb='0' mt='0' mx='auto' />
        <ContentText content={text?.slice(2)} mx='auto' mb='5' />
    </Flex>
    <Flex
      sx={{
        ...styles.content
      }}
    >
        
        <div className="container ">
          <div className="row gy-4">

            <div className="col-lg-3 mx-auto col-md-6 d-flex align-items-stretch aos-animate">
              <div className="member">
                <div className="member-img">
                  <img src={image7} className="img-fluid" alt="Shahbaz Mughal" />
                </div>
                <div className="member-info">
                  <h4>Shahbaz Mughal</h4>
                  <span>Expert UI/UX</span>
                </div>
              </div>
            </div>

          </div>
        </div>
          
    </Flex>
  </Container>
)

export default WithDefaultContent(AboutTeam)
