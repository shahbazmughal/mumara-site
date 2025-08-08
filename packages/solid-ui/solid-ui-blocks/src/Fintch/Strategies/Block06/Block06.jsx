import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import { Container, Flex, Box } from 'theme-ui'
import Reveal from '@solid-ui-components/Reveal'
import Divider from '@solid-ui-components/Divider'
import ContentContainer from '@solid-ui-components/ContentContainer'
import ContentText from '@solid-ui-components/ContentText'
import ListItem from '@solid-ui-components/ListItem'
import WithDefaultContent from '@solid-ui-blocks/WithDefaultContent'

const STRAPI_BASE_URL = 'https://strapi5-dev-jt.mumara.com'

const normalizeUrl = (url) =>
  url?.startsWith('http') ? url : `${STRAPI_BASE_URL}${url}`

const FeaturesBlock06 = () => {
  // Fetch all entries from strategie collection
  const data = useStaticQuery(graphql`
    query {
      allStrapiStrategie {
        nodes {
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
    }
  `)

  const entry = data.allStrapiStrategie.nodes[1]

  const content = {
    collection: [
      {
        icon: {
          src: normalizeUrl(entry.Emaillogo?.url),
          color: 'beta',
          bg: '#a855f7'
        },
        text: [
          { text: entry.Emailheading, variant: 'h5', color:'#718096' },
          { text: entry.Emaildescription }
        ]
      },
      {
        icon: {
          src: normalizeUrl(entry.Googlelogo?.url),
          color: 'primary',
          bg: '#a855f7'
        },
        text: [
          { text: entry.Googleheading, variant: 'h5', color:'#718096' },
          { text: entry.Googledescription }
        ]
      },
      {
        icon: {
          src: normalizeUrl(entry.Facebooklogo?.url),
          color: 'alpha',
          bg: '#a855f7'
        },
        text: [
          { text: entry.Facebookheading, variant: 'h5', color:'#718096' },
          { text: entry.Facebookdescription }
        ]
      },
      {
        icon: {
          src: normalizeUrl(entry.mobilelogo?.url),
          color: 'omega',
          bg: '#a855f7'
        },
        text: [
          { text: entry.mobileheading, variant: 'h5', color:'#718096' },
          { text: entry.mobiledescription }
        ]
      }
    ]
  }

  const Block = ({ content: { text = [], collection } }) => (
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

  return <Block content={content} />
}

export default WithDefaultContent(FeaturesBlock06)
