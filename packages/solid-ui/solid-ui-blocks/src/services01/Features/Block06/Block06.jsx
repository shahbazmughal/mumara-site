import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import { Container, Flex, Box } from 'theme-ui'
import Reveal from '@solid-ui-components/Reveal'
import ContentText from '@solid-ui-components/ContentText'
import Icon from '@solid-ui-components/ContentIcon'
import text from '@solid-ui-theme/text'

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
    maxWidth: '550px',
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
  text: {
      variant: 'text.h5',
      color: 'primary',
      fontWeight: 'bold',
        },
  title: {
    variant: 'text.h6',
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
      strapiServicesonehero{
        miniheading
        heading 
        description 
        Ratedicon {url}
        Ratedsubheading 
        Ratedheading 
        Rateddescription 
        Blazingicon {url}
        Blazingsubheading 
        Blazingheading 
        Blazingdescription 
        Globalicon {url}
        Globalsubheading 
        Globalheading 
        Globaldescription 
        Besticon {url}
        Bestsubheading 
        Bestheading 
        Bestdescription 
        }
    }
  `)

  const strapi = data.strapiServicesonehero

  const text = [
    {
      text: strapi.miniheading,
      variant: 'h4',
      color: '#6366f1',
      mb: 2,
      sx: { textTransform: 'uppercase', fontWeight: 'bold' }
    },
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
      icon: normalizeUrl(strapi.Ratedicon?.url),
      text: strapi.Ratedsubheading,
      title: strapi.Ratedheading,
      desc: strapi.Rateddescription,
    },
    {
      icon: normalizeUrl(strapi.Blazingicon?.url),
      text: strapi.Blazingsubheading,
      title: strapi.Blazingheading,
      desc: strapi.Blazingdescription,
    },
    {
      icon: normalizeUrl(strapi.Globalicon?.url),
      text: strapi.Globalsubheading,
      title: strapi.Globalheading,
      desc: strapi.Globaldescription,
    },
    {
      icon: normalizeUrl(strapi.Besticon?.url),
      text: strapi.Bestsubheading,
      title: strapi.Bestheading,
      desc: strapi.Bestdescription,
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
                width: 84,
                height: 84,
                size: 'x-lg',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                mx: 'auto',
              }}
            >
              <Icon content={{ src: card.icon }} size="sm" />
            </Box>
            <Box sx={styles.text}>{card.text}</Box>
            <Box sx={styles.title}>{card.title}</Box>
            <Box sx={styles.description}>{card.desc}</Box>
          </Box>
        ))}
      </Flex>
    </Container>
  )
}

export default FeaturesBlock05Styled
