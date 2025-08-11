import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import { Container, Flex, Box } from 'theme-ui'
import ContentText from '@solid-ui-components/ContentText'
import ContentContainer from '@solid-ui-components/ContentContainer'
import ContentButtons from '@solid-ui-components/ContentButtons'
import WithDefaultContent from '@solid-ui-blocks/WithDefaultContent'

const CallToActionBlock02 = () => {
  // 1. Load all entries from Strapi
  const data = useStaticQuery(graphql`
    query {
      allStrapiDownload {
        nodes {
          heading
          discription
          button
        }
      }
    }
  `)

  // 2. Get the second entry (index 1)
  const entry = data?.allStrapiDownload?.nodes?.[1]
  if (!entry) return null

  // 3. Map content
  const content = {
    text: [
      { text: entry.heading, variant: 'h5', color: '#6366f1' },
      { text: entry.discription, variant: 'p' }
    ],
    buttons: [
      {
        text: 'Contact Us Now',
        link: '#download',
        variant: 'primary-light'
      }
    ]
  }

  // 4. Layout
  return (
    <Container>
      <ContentContainer content={{}} variant='cards.paper'>
        <Flex
          sx={{
            flexDirection: ['column', 'row'],
            justifyContent: 'space-between',
            alignItems: 'center',
            textAlign: ['center', 'left']
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
