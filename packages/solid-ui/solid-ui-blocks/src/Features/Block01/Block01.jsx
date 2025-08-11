import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import { Container, Flex, Box, css } from 'theme-ui'
import Reveal from '@solid-ui-components/Reveal'
import Divider from '@solid-ui-components/Divider'
import ContentText from '@solid-ui-components/ContentText'
import ListItem from '@solid-ui-components/ListItem'
import WithDefaultContent from '@solid-ui-blocks/WithDefaultContent'

const STRAPI_BASE_URL = 'https://strapi5-dev-jt.mumara.com'

const normalize = (url) =>
  url?.startsWith('http') ? url : `${STRAPI_BASE_URL}${url}`

const styles = {
  listItem: {
    flexBasis: ['100%', '50%', null, '33.3333%'],
    alignItems: 'center',
    justifyContent: 'left',
    p: 3
  }
}

const FeaturesBlock01 = () => {
  const data = useStaticQuery(graphql`
    query {
      allStrapiFintchwhychooseus {
        nodes {
          miniheading
          heading
          Advancedlogo { url }
          advancedheading
          advanceddescription
          Expertlogo { url }
          Expertheading
          Expertdescription
          Lifetimelogo { url }
          Lifetimeheading
          Lifetimedescription
          Creativelogo { url }
          Creativeheading
          Creativedescription
          Agencylogo { url }
          Agencyheading
          Agencydescription
          Unlimitedlogo { url }
          Unlimitedheading
          Unlimiteddescription
        }
      }
    }
  `)

  const entry = data.allStrapiFintchwhychooseus.nodes[1] // second item from the list

  const text = [
    {
      type: 'subheading',
      text: entry.miniheading,
      as: 'h2',
      color: '#a0aec0'
    },
    {
      type: 'heading',
      text: entry.heading,
      as: 'h1',
      color: '#2d3748'
    }
  ]

  const collection = [
    {
      icon: { src: normalize(entry.Advancedlogo?.url) },
      text: [
        { text: entry.advancedheading, as: 'h3', color: '#2d3748' },
        { text: entry.advanceddescription }
      ]
    },
    {
      icon: { src: normalize(entry.Expertlogo?.url) },
      text: [
        { text: entry.Expertheading, as: 'h3', color: '#2d3748' },
        { text: entry.Expertdescription }
      ]
    },
    {
      icon: { src: normalize(entry.Lifetimelogo?.url) },
      text: [
        { text: entry.Lifetimeheading, as: 'h3', color: '#2d3748' },
        { text: entry.Lifetimedescription }
      ]
    },
    {
      icon: { src: normalize(entry.Creativelogo?.url) },
      text: [
        { text: entry.Creativeheading, as: 'h3', color: '#2d3748' },
        { text: entry.Creativedescription }
      ]
    },
    {
      icon: { src: normalize(entry.Agencylogo?.url) },
      text: [
        { text: entry.Agencyheading, as: 'h3', color: '#2d3748' },
        { text: entry.Agencydescription }
      ]
    },
    {
      icon: { src: normalize(entry.Unlimitedlogo?.url) },
      text: [
        { text: entry.Unlimitedheading, as: 'h3', color: '#2d3748' },
        { text: entry.Unlimiteddescription }
      ]
    }
  ]

  return (
    <Container as={Reveal}>
      <Box sx={{ textAlign: 'center' }}>
        <ContentText content={text} />
      </Box>

      <Divider />

      <Flex sx={{ flexWrap: 'wrap', mx: -3 }}>
        {collection.map((item, index) => (
          <Reveal
            key={index}
            effect="fadeInGrow"
            delay={0.15 * (index + 1)}
            css={css(styles.listItem)}
          >
            <ListItem {...item} iconProps={{ size: 'md' }} center />
          </Reveal>
        ))}
      </Flex>
    </Container>
  )
}

export default WithDefaultContent(FeaturesBlock01)
