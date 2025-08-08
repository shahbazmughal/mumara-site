import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import { Container } from 'theme-ui'
import Divider from '@solid-ui-components/Divider'
import ContentContainer from '@solid-ui-components/ContentContainer'
import ContentText from '@solid-ui-components/ContentText'
import ContentButtons from '@solid-ui-components/ContentButtons'
import WithDefaultContent from '@solid-ui-blocks/WithDefaultContent'

const CallToActionBlock01 = () => {
  // 1. GraphQL Query to fetch Strapi data
  const data = useStaticQuery(graphql`
    query {
      strapiGetstarted {
        miniheading
        mainheading
        heading
        description
        button
      }
    }
  `)

  // 2. Map the data into `content` format
  const content = {
    text: [
      { text: data.strapiGetstarted?.miniheading, variant: 'h4', color: 'omega' },
      { text: data.strapiGetstarted?.mainheading, variant: 'h2' },
      { text: data.strapiGetstarted?.heading, color: '#6366f1' },
      { text: data.strapiGetstarted?.description }
    ],
    buttons: [
      {
        text: 'Get Started',
        link: '#get-started',
        variant: "secondary-light" 
      }
    ],
    container: {}
  }

  // 3. Render Layout
  return (
    <Container sx={{ textAlign: `center` }}>
      <ContentText content={content.text?.slice(0, 2)} />
      <ContentContainer content={content.container} variant='cards.paper-lg'>
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
