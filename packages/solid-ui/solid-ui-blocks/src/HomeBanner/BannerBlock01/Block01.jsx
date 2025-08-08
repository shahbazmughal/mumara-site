import React from 'react'
import { Container, Flex, Box } from 'theme-ui'
import ContentText from '@solid-ui-components/ContentText'
import Reveal from '@solid-ui-components/Reveal'
import ContentImages from '@solid-ui-components/ContentImages'
import WithDefaultContent from '@solid-ui-blocks/WithDefaultContent'

import collaboration from './collaboration.png';

const newImage = {
  "src": collaboration,
  "alt": "Innovation at Collision",
  "objectposition": "center center"
}

const HeroBlock01 = ({
  content: { text = [], images },
  reverse
}) => (
  <Container>
    <Flex
      sx={{
        alignItems: [null, null, null, `center`],
        flexDirection: [
          reverse ? `column-reverse` : `column`,
          null,
          null,
          reverse ? `row-reverse` : `row`
        ]
      }}
    >
      <Box
        sx={{
          flexBasis: [null, null, null, `3/5`],
          [reverse ? 'ml' : 'mr']: [null, null, null, 3],
          position: `relative`,
          textAlign: `center`
        }}
        className="bannerImgBlk"
      >
        <ContentImages
          content={{ images }}
          loading='eager'
          reverse={reverse}
          imagePosition='center'
          className="bannerImg"
        />
      </Box>
      <Box
        sx={{
          flexBasis: `2/5`,
          textAlign: [`center`, null, null, `left`]
        }}
        className="bannerContent"
      >
        <Reveal effect='fadeInDown'>
          <ContentText content={text} />
        </Reveal>
        <Reveal effect='fadeInLeft'>
          <img 
            src={collaboration} 
            alt="Collision Meetup 2023 With Mumara"
            style={{
              width: `100%`,
              maxWidth: `none`,
              height:63
            }}
            className='connectImg'
          />
        </Reveal>
      </Box>
    </Flex>
  </Container>
)

export default WithDefaultContent(HeroBlock01)
