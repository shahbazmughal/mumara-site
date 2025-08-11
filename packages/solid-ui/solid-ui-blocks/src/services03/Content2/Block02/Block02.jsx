import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import { Container, Grid, Box, Heading, Text } from 'theme-ui'

const ServicesSection = () => {
  const data = useStaticQuery(graphql`
    query {
      allStrapiServicesthreecontent {
        nodes {
          Businessheading
          Businesssubheading
          Businessdescription
        }
      }
    }
  `)

  const nodes = data.allStrapiServicesthreecontent.nodes

  if (!nodes || nodes.length < 3) return null // ✅ Ensure 3rd entry exists

  const {
    Businessheading,
    Businesssubheading,
    Businessdescription
  } = nodes[2] // ✅ Using third entry here

  return (
    <Container>
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
