import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import { Container, Box, Flex, Text, Heading, Image } from 'theme-ui'
import Reveal from '@solid-ui-components/Reveal'
import Divider from '@solid-ui-components/Divider'

const STRAPI_BASE_URL = 'https://strapi5-dev-jt.mumara.com'

const WhyChooseUsBlock = () => {
  const data = useStaticQuery(graphql`
    query {
      allStrapiWhychooseus {
        nodes {
          Advancedlogo { url }
          Advancedheading
          Advanceddescription
          Expertlogo { url }
          Expertheading
          Expertdescription
          Lifetimelogo { url }
          Lifetimeheading
          Lifetimedescription
          Creativelogo { url }
          Creativeheading
          Creativedescription
        }
      }
    }
  `)

  const strapiWhychooseus = data.allStrapiWhychooseus.nodes[2]

  const features = [
    {
      title: strapiWhychooseus.Advancedheading,
      description: strapiWhychooseus.Advanceddescription,
      icon: strapiWhychooseus.Advancedlogo?.url
    },
    {
      title: strapiWhychooseus.Expertheading,
      description: strapiWhychooseus.Expertdescription,
      icon: strapiWhychooseus.Expertlogo?.url
    },
    {
      title: strapiWhychooseus.Lifetimeheading,
      description: strapiWhychooseus.Lifetimedescription,
      icon: strapiWhychooseus.Lifetimelogo?.url
    },
    {
      title: strapiWhychooseus.Creativeheading,
      description: strapiWhychooseus.Creativedescription,
      icon: strapiWhychooseus.Creativelogo?.url
    }
  ]

  return (
    <Container as={Reveal} >


      <Flex sx={{ flexWrap: 'wrap', mx: -3 }}>
        {features.map((item, index) => (
          <Box
            key={index}
            sx={{
              width: ['100%', '50%'],
              px: 3,
              maxWidth: '500px',
              mx: 'auto',
              mb: 4,
              display: 'flex',
              alignItems: 'flex-start'
            }}
          >
            <Box sx={{ mr: 3, flexShrink: 0 }}>
              <Image
                src={
                  item.icon?.startsWith('http')
                    ? item.icon
                    : `${STRAPI_BASE_URL}${item.icon}`
                }
                alt={item.title}
                sx={{ width: 32, height: 32, objectFit: 'contain' }}
              />
            </Box>
            <Box>
              <Heading as="h4" sx={{ fontSize: 3, mb: 2 , color: '#2d3748'}}>
                {item.title}
              </Heading>
              <Text sx={{ color: 'textSecondary' }}>{item.description}</Text>
            </Box>
          </Box>
        ))}
      </Flex>
    </Container>
  )
}

export default WhyChooseUsBlock
