import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import { Container, Flex, Box } from 'theme-ui'
import Reveal from '@solid-ui-components/Reveal'
import ContentText from '@solid-ui-components/ContentText'
import Icon from '@solid-ui-components/ContentIcon'

const STRAPI_BASE_URL = 'https://strapi5-dev-jt.mumara.com'

const normalizeUrl = (url) =>
  url?.startsWith('http') ? url : `${STRAPI_BASE_URL}${url}`

const styles = {
  section: {
    py: [3, 4],
    textAlign: 'center'
  },
  heading: {
    mb: 4,
    maxWidth: '600px',
    mx: 'auto'
  },
  subheading: {
    variant: 'text.medium',
    color: 'gray',
    mb: 4,
    maxWidth: '750px',
    lineHeight: '2.7',
    mx: 'auto'
  },
  listWrapper: {
    flexWrap: 'wrap',
    justifyContent: 'center',
    mt: 5,
    mx: -3
  },
  card: {
    flex: ['1 1 100%', '1 1 45%', '1 1 22%'],
    bg: 'white',
    borderRadius: '12px',
    boxShadow: '0 8px 24px rgba(0,0,0,0.06)',
    p: 4,
    m: 3,
    textAlign: 'center'
  },
  icon: {
    size: 'sm',
    mb: 3
  },
  title: {
    variant: 'text.h5',
    fontWeight: 'bold',
    mb: 2
  },
  description: {
    color: 'gray',
    fontSize: 2,
    lineHeight: 1.6
  }
}

const FeaturesBlock05Styled = () => {
  const data = useStaticQuery(graphql`
    query {
      strapiAboutustwostrategie {
        heading
        description
        Brandingicon { url }
        Brandingheading
        Brandingdescription
        Copyicon { url }
        Copyheading
        Copydescription
        Developmenticon { url }
        Developmentheading
        Developmentdescription
        Designicon { url }
        Designheading
        Designdescription
        Commerceicon { url }
        Commerceheading
        Commercedescription
        Advertisementicon { url }
        Advertisementheading
        Advertisementdescription
        Websiteicon { url }
        Websiteheading
        Websitedescription
        Mobileicon { url }
        mobileheading
        Mobiledescription
      }
    }
  `)

  const strapi = data.strapiAboutustwostrategie

  const text = [
    {
      text: strapi.heading,
      variant: 'h2',
      sx: styles.heading
    },
    {
      text: strapi.description,
      variant: 'medium',
      sx: styles.subheading
    }
  ]

  const cards = [
    {
      icon: normalizeUrl(strapi.Brandingicon?.url),
      title: strapi.Brandingheading,
      desc: strapi.Brandingdescription,
      bg: '#edf2f7',
      color: '#6366f1'
    },
    {
      icon: normalizeUrl(strapi.Copyicon?.url),
      title: strapi.Copyheading,
      desc: strapi.Copydescription,
      bg: '#edf2f7',
      color: '#6366f1'
    },
    {
      icon: normalizeUrl(strapi.Developmenticon?.url),
      title: strapi.Developmentheading,
      desc: strapi.Developmentdescription,
      bg: '#edf2f7',
      color: '#6366f1'
    },
    {
      icon: normalizeUrl(strapi.Designicon?.url),
      title: strapi.Designheading,
      desc: strapi.Designdescription,
      bg: '#edf2f7',
      color: '#6366f1'
    },
    {
      icon: normalizeUrl(strapi.Commerceicon?.url),
      title: strapi.Commerceheading,
      desc: strapi.Commercedescription,
      bg: '#edf2f7'
    },
    {
      icon: normalizeUrl(strapi.Advertisementicon?.url),
      title: strapi.Advertisementheading,
      desc: strapi.Advertisementdescription,
      bg: '#edf2f7'
    },
    {
      icon: normalizeUrl(strapi.Websiteicon?.url),
      title: strapi.Websiteheading,
      desc: strapi.Websitedescription,
      bg: '#edf2f7'
    },
    {
      icon: normalizeUrl(strapi.Mobileicon?.url),
      title: strapi.mobileheading,
      desc: strapi.Mobiledescription,
      bg: '#edf2f7'
    }
  ]

  return (
    <Container as={Reveal} sx={styles.section}>
      <Box>
        {text.map((item, i) => (
          <ContentText key={i} content={[item]} />
        ))}
      </Box>

      <Flex sx={styles.listWrapper}>
        {cards.map((card, index) => (
          <Box key={index} sx={styles.card}>
            <Box
              sx={{
                bg: card.bg,
                width: 64,
                height: 64,
                borderRadius: 9999,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                mx: 'auto',
                mb: 3
              }}
            >
              <Icon content={{ src: card.icon }} size="sm" />
            </Box>
            <Box sx={{ ...styles.title, color: card.color  }}>
              {card.title}
            </Box>
            <Box sx={styles.description}>{card.desc}</Box>
          </Box>
        ))}
      </Flex>
    </Container>
  )
}

export default FeaturesBlock05Styled
