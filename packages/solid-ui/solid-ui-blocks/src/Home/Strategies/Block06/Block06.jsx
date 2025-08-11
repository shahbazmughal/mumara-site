import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import { Container, Flex, Box } from 'theme-ui'
import Reveal from '@solid-ui-components/Reveal'
import Divider from '@solid-ui-components/Divider'
import ContentContainer from '@solid-ui-components/ContentContainer'
import ContentText from '@solid-ui-components/ContentText'
import ListItem from '@solid-ui-components/ListItem'
import ContentButtons from '@solid-ui-components/ContentButtons'
import WithDefaultContent from '@solid-ui-blocks/WithDefaultContent'

const STRAPI_BASE_URL = 'https://strapi5-dev-jt.mumara.com'

const normalizeUrl = (url) =>
  url?.startsWith('http') ? url : `${STRAPI_BASE_URL}${url}`

const FeaturesBlock06 = () => {
  // GraphQL query to fetch data from Strapi
  const { strapiStrategie } = useStaticQuery(graphql`
    query {
      strapiStrategie {
        Emailheading
        Emaildescription
        Emaillogo { url }

        Googleheading
        Googledescription
        Googlelogo { url }

        Facebookheading
        Facebookdescription
        Facebooklogo { url }

        mobileheading
        mobiledescription
        mobilelogo { url }
      }
    }
  `)

  const content = {
    
    collection: [
      {
        icon: {
          src: normalizeUrl(strapiStrategie.Emaillogo?.url),
          color: 'beta',
          bg: '#f3e8ff'
        },
        text: [
          { text: strapiStrategie.Emailheading, variant: 'h5', color:'#718096' },
          { text: strapiStrategie.Emaildescription }
        ]
      },
      {
        icon: {
          src: normalizeUrl(strapiStrategie.Googlelogo?.url),
          color: 'primary',
          bg: '#f3e8ff'
        },
        text: [
          { text: strapiStrategie.Googleheading, variant: 'h5', color:'#718096' },
          { text: strapiStrategie.Googledescription }
        ]
      },
      {
        icon: {
          src: normalizeUrl(strapiStrategie.Facebooklogo?.url),
          color: 'alpha',
          bg: '#f3e8ff'
        },
        text: [
          { text: strapiStrategie.Facebookheading, variant: 'h5', color:'#718096' },
          { text: strapiStrategie.Facebookdescription }
        ]
      },
      {
        icon: {
          src: normalizeUrl(strapiStrategie.mobilelogo?.url),
          color: 'omega',
          bg: '#f3e8ff'
        },
        text: [
          { text: strapiStrategie.mobileheading, variant: 'h5', color:'#718096' },
          { text: strapiStrategie.mobiledescription }
        ]
      }
    ]
  }

  // This is your original untouched component with injected content
  const Block = ({ content: { text = [], collection, buttons } }) => (
    <Container sx={{ textAlign: `center` }}>
      <Box>
        <ContentText content={text} />
      </Box>

      {collection && (
        <>
          <Divider />
          <Reveal effect='fadeInDown'>
            <Flex sx={{ justifyContent: `center`, flexWrap: `wrap`, m: -3 }}>
              {collection.map(({ container, ...props }, index) => (
                <Box
                  key={`item-${index}`}
                  sx={{ flexBasis: [`1`, `1/2`, null, `1/4`], p: 3 }}
                >
                  <ContentContainer content={container}>
                    <ListItem
                      {...props}
                      iconProps={{ round: true }}
                      vertical
                      center
                    />
                  </ContentContainer>
                </Box>
              ))}
            </Flex>
          </Reveal>
        </>
      )}
    </Container>
  )

  // Return the component wrapped with content
  return <Block content={content} />
}

export default WithDefaultContent(FeaturesBlock06)
