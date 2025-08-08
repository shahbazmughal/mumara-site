import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import { Container } from 'theme-ui'
import Divider from '@solid-ui-components/Divider'
import ContentContainer from '@solid-ui-components/ContentContainer'
import ContentText from '@solid-ui-components/ContentText'
import ContentButtons from '@solid-ui-components/ContentButtons'
import WithDefaultContent from '@solid-ui-blocks/WithDefaultContent'

const CallToActionBlock01 = () => {
  // 1. Fetch all entries
  const data = useStaticQuery(graphql`
    query {
      allStrapiGetstarted {
        nodes {
          miniheading
          mainheading
          heading
          description
          button
        }
      }
    }
  `)

  // 2. Use second entry if exists
  const d = data.allStrapiGetstarted.nodes[1] || data.allStrapiGetstarted.nodes[0]

  // 3. Prepare content
  const content = {
    text: [
      { text: d?.miniheading, variant: 'h4', color: 'omega' },
      { text: d?.mainheading, variant: 'h2' },
      { text: d?.heading, color: '#6366f1' },
      { text: d?.description }
    ],
    buttons: [
      {
        text: 'Get Started',
        link: '#get-started',
        variant: "secondary" 
      },
      {
        text: 'Get Started',
        link: '#get-started',
        variant: "primary-light" 
      }
    ],
    container: {}
  }

  // 4. Render
  return (
    <Container sx={{ textAlign: `center` }}>
      <ContentContainer content={content.container} variant='cards.paper-lg'>
        <ContentText content={content.text?.slice(0, 2)} />
        <ContentText content={content.text?.slice(2)} />
        {content.buttons && (
          <>
            <Divider space={3} />
            <ContentButtons content={content.buttons} />
          </>
        )}
      </ContentContainer>
    </Container>
  )
}

export default WithDefaultContent(CallToActionBlock01)
