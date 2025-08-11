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
    mx: 'auto'
  },
  subheading: {
    variant: 'text.medium',
    color: 'gray',
    mb: 4,
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
      allStrapiSaasstrategie {
        nodes {
          miniheading
          heading
          description
          Messaginglogo { url }
          Messagingheading
          Messagingdescription
          Reminderslogo { url }
          Remindersheading
          Remindersdescription
          Videologo { url }
          Videoheading
          Videodescription
          Organizerlogo { url }
          Organizerheading
          Organizerdescription
        }
      }
    }
  `)

  const strapi = data.allStrapiSaasstrategie.nodes[1]; // Use second entry

  if (!strapi) {
    console.warn("FeaturesBlock05Styled: Second entry not found.")
    return null
  }

  const text = [
    {
      text: strapi.miniheading,
      variant: 'h2',
      mb: 2,
      sx: {  fontWeight: 'bold' }
    },
    {
      text: strapi.heading,
      variant: 'medium',
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
      bg: '#d3e7fe',
      icon: normalizeUrl(strapi.Messaginglogo.url),
      title: strapi.Messagingheading,
      desc: strapi.Messagingdescription
    },
    {
      bg: '#fefad6',
      icon: normalizeUrl(strapi.Reminderslogo.url),
      title: strapi.Remindersheading,
      desc: strapi.Remindersdescription
    },
    {
      bg: '#fee8d1',
      icon: normalizeUrl(strapi.Videologo.url),
      title: strapi.Videoheading,
      desc: strapi.Videodescription
    },
    {
      bg: '#ebfdda',
      icon: normalizeUrl(strapi.Organizerlogo.url),
      title: strapi.Organizerheading,
      desc: strapi.Organizerdescription
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
              <Icon content={{ src: card.icon }} size='sm' />
            </Box>
            <Box sx={styles.title}>{card.title}</Box>
            <Box sx={styles.description}>{card.desc}</Box>
          </Box>
        ))}
      </Flex>
    </Container>
  )
}

export default FeaturesBlock05Styled
