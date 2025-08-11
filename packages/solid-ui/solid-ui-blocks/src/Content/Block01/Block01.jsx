import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import { Container, Flex, Box } from 'theme-ui'
import Reveal from '@solid-ui-components/Reveal'
import ContentText from '@solid-ui-components/ContentText'
import WithDefaultContent from '@solid-ui-blocks/WithDefaultContent'

const ContentBlock01 = ({ reverse }) => {
  const data = useStaticQuery(graphql`
    query {
      strapiServicesjoincompanie {
        heading
        description
      }
    }
  `)

  const entry = data?.strapiServicesjoincompanie
  if (!entry) return null

  const collection = [
    {
      text: [{ text: entry.heading, variant: 'h2' }]
    },
    {
      text: [{ text: entry.description, variant: 'p' }]
    }
  ]

  return (
    <Container>
      <Flex
        sx={{
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
            flexBasis: [null, null, null, `2/5`],
            [reverse ? 'ml' : 'mr']: [null, null, null, 5],
            position: `relative`,
            textAlign: ['center', 'left']
          }}
        >
          {collection[0] && (
            <Reveal effect='fadeInLeft'>
              <Box sx={{ textAlign: ['center', 'left'] }}>
                <ContentText content={collection[0]?.text} ml='0' />
              </Box>
            </Reveal>
          )}
        </Box>
        <Box
          sx={{
            flexBasis: `3/5`,
            alignSelf: `center`,
            textAlign: [`center`, null, null, `left`]
          }}
        >
          {collection[1] && (
            <Reveal effect='fadeInLeft'>
              <Box sx={{ textAlign: ['center', 'left'] }}>
                <ContentText content={collection[1]?.text} ml='0' />
              </Box>
            </Reveal>
          )}
        </Box>
      </Flex>
    </Container>
  )
}

export default WithDefaultContent(ContentBlock01)
