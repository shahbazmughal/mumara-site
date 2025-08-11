import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import { Container, Grid, Box, Heading, Text } from 'theme-ui'

const ServicesSection = () => {
  const data = useStaticQuery(graphql`
    query {
      allStrapiServicesthreecontent {
        nodes {
          miniheading
          heading
          Businessheading
          Businesssubheading
          Businessdescription
        }
      }
    }
  `)

  const nodes = data.allStrapiServicesthreecontent.nodes

  if (!nodes || nodes.length === 0) return null

  const {
    miniheading,
    heading,
    Businessheading,
    Businesssubheading,
    Businessdescription
  } = nodes[0]

  return (
    <Container >
      {/* Mini heading */}
      <Heading as="h3" sx={{ color: 'muted', mb: 2 }}>
        {miniheading}
      </Heading>

      {/* Main heading */}
      <Heading as="h2" sx={{ fontSize: 6, color: '#a855f7', fontWeight: 'bold', mb: 5 }}>
        {heading || 'Main Heading'}
      </Heading>

      {/* Business section - left heading, right description */}
      <Grid columns={[1, null, 2]} gap={4} sx={{ alignItems: 'flex-start' , mb: 5}}>
        {/* Left: Business heading and subheading */}
        <Box>
          <Heading as="h2" sx={{ fontSize: 4, mb: 3, color: '#2d3748' }}>
            {Businessheading}
          </Heading>
          <Text sx={{ color: 'text', fontSize: 3 }}>
            {Businesssubheading}
          </Text>
        </Box>

        {/* Right: Business description */}
        <Box>
          <Text sx={{ color: 'text', fontSize: 3, lineHeight: 1.9 }}>
            {Businessdescription}
          </Text>
        </Box>
      </Grid>
    </Container>
  )
}

export default ServicesSection
