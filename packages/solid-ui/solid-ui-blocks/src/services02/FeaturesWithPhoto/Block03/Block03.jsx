import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import { Container, Box, Image } from 'theme-ui'

const STRAPI_BASE_URL = 'https://strapi5-dev-jt.mumara.com'

const normalizeUrl = (url) =>
  url?.startsWith('http') ? url : `${STRAPI_BASE_URL}${url}`

const FeaturesBlock06 = () => {
  const { strapiServicestwophoto } = useStaticQuery(graphql`
    query {
      strapiServicestwophoto {
        image {
          url
        }
      }
    }
  `)

  const imageUrl = normalizeUrl(strapiServicestwophoto?.image?.url)

  if (!imageUrl) return null

  return (
    <Container sx={{ textAlign: 'center' }}>
      <Box>
        <Image
          src={imageUrl}
          alt="Service Two Photo"
          sx={{ borderRadius: '16px' }}
        />

      </Box>
    </Container>
  )
}

export default FeaturesBlock06
