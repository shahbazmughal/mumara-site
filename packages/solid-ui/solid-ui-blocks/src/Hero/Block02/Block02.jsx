import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import { Container, Box } from 'theme-ui'
import Reveal from '@solid-ui-components/Reveal'
import ContentText from '@solid-ui-components/ContentText'

const styles = {
  section: {
    py: [1, 2],
    textAlign: 'center'
  },
  heading: {
    maxWidth: '500px',
    mx: 'auto'
  },
  subheading: {
    variant: 'text.medium',
    maxWidth: '550px',
    mx: 'auto'
  }
}

const FeaturesBlock05Styled = () => {
  const data = useStaticQuery(graphql`
    query {
      strapiServicestwohome {
        miniheading
        heading
        description
      }
    }
  `)

  const strapi = data.strapiServicestwohome

  const text = [
    {
      text: strapi.miniheading,
      variant: 'h4',
      color: '#a957f7',
      mb: 2,
      sx: { textTransform: 'uppercase', fontWeight: 'bold' }
    },
    {
      text: strapi.heading,
      variant: 'h2',
      color: '#2d3748',
      sx: styles.heading
    },
    {
      text: strapi.description,
      variant: 'medium',
      color: '#2d3748',
      sx: styles.subheading
    }
  ]

  return (
    <Container as={Reveal} sx={styles.section}>
      <Box>
        {text.map((item, i) => (
          <ContentText key={i} content={[item]} />
        ))}
      </Box>
    </Container>
  )
}

export default FeaturesBlock05Styled
