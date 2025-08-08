import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import { Container, Flex, Box } from 'theme-ui'
import ContentText from '@solid-ui-components/ContentText'
import ContentContainer from '@solid-ui-components/ContentContainer'
import ContentButtons from '@solid-ui-components/ContentButtons'
import WithDefaultContent from '@solid-ui-blocks/WithDefaultContent'

const CallToActionBlock02 = () => {
  // 1. Load Strapi data
  const data = useStaticQuery(graphql`
    query {
      strapiDownload {
        heading
        discription
        button
      }
    }
  `)

  // 2. Map Strapi fields into content object
  const content = {
    text: [
      { text: data.strapiDownload?.heading,  variant: 'h5', color:'#6366f1' },
      { text: data.strapiDownload?.discription, variant: 'p' }
    ],
    buttons: [
      {
        text: 'Download our Free Cheat Sheet',
        link: '#download',
        variant: 'primary-light'
      }
    ]
  }

  // 3. Layout
  return (
    <Container>
      <ContentContainer content={{}} variant='cards.paper'>
        <Flex
          sx={{
            flexDirection: [`column`, `row`],
            justifyContent: `space-between`,
            alignItems: `center`,
            textAlign: [`center`, `left`]
          }}
        >
          <Box>
            <ContentText content={content.text} />
          </Box>
          <ContentButtons content={content.buttons} />
        </Flex>
      </ContentContainer>
    </Container>
  )
}

export default WithDefaultContent(CallToActionBlock02)
