import React from 'react'
import { Container, Flex, Box, css } from 'theme-ui'
import ContentText from '@solid-ui-components/ContentText'
import Reveal from '@solid-ui-components/Reveal'
import Divider from '@solid-ui-components/Divider'
import ContentImages from '@solid-ui-components/ContentImages'
import ContentButtons from '@solid-ui-components/ContentButtons'
import QuickSignupForm from '@solid-ui-components/QuickSignupForm'
import WithDefaultContent from '@solid-ui-blocks/WithDefaultContent'

const styles = {
  image: {
    marginTop:50
  }
}

const HeroBlock02 = ({ content: { text, images} }) => (
  <Container sx={{ textAlign: `center` }}>
    <Reveal effect='fadeInDown'>
      <ContentText content={text} style={{maxWidth:`820px`, margin: `0 auto`}} />
      <ContentImages
        content={{ images }}
        sx={styles.image}
        imageEffect='fadeIn'
      />
    </Reveal>
  </Container>
)

export default WithDefaultContent(HeroBlock02)
