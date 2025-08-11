import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import { Container, Flex, Box } from 'theme-ui'
import Reveal from '@solid-ui-components/Reveal'
import Divider from '@solid-ui-components/Divider'
import Counter from '@solid-ui-components/Counter'
import ContentContainer from '@solid-ui-components/ContentContainer'
import ContentText from '@solid-ui-components/ContentText'
import ContentButtons from '@solid-ui-components/ContentButtons'
import WithDefaultContent from '@solid-ui-blocks/WithDefaultContent'

const StatsBlock01 = () => {
  const { strapiStat } = useStaticQuery(graphql`
    query {
      strapiStat {
        miniheading
        heading
        leadsnumber
        Leadstext
        campaignsnumber
        Campaignstext
        clintsnumber
        Clientstext
        medianumber
        Mediatext
      }
    }
  `)

  const content = {
    text: [
      {
        text: strapiStat.miniheading,
        color: 'omegaDark',
        variant: 'h4'
      },
      {
        text: strapiStat.heading,
        color: 'omegaDarker',
        variant: 'h2'
      }
    ],
    collection: [
      {
        text: [
          {
            text: strapiStat.leadsnumber,
            color: 'alpha',
            variant: 'h1'
          },
          {
            text: strapiStat.Leadstext,
            color: 'omegaDark',
            variant: 'h5'
          }
        ]
      },
      {
        text: [
          {
            text: strapiStat.campaignsnumber,
            color: 'alpha',
            variant: 'h1'
          },
          {
            text: strapiStat.Campaignstext,
            color: 'omegaDark',
            variant: 'h5'
          }
        ]
      },
      {
        text: [
          {
            text: strapiStat.clintsnumber,
            color: 'alpha',
            variant: 'h1'
          },
          {
            text: strapiStat.Clientstext,
            color: 'omegaDark',
            variant: 'h5'
          }
        ]
      },
      {
        text: [
          {
            text: strapiStat.medianumber,
            color: 'alpha',
            variant: 'h1'
          },
          {
            text: strapiStat.Mediatext,
            color: 'omegaDark',
            variant: 'h5'
          }
        ]
      }
    ]
  }

  return (
    <Container sx={{ textAlign: `center` }}>
      <ContentContainer content={{}} variant='cards.paper-lg'>
        <ContentText content={content.text} />
        {content.text && content.collection && <Divider space={3} />}
        {content.collection && (
          <Flex
            sx={{
              flexWrap: `wrap`,
              alignItems: `flex-start`,
              alignContent: `center`,
              justifyContent: `center`,
              m: -1
            }}
          >
            {content.collection.map(({ text }, index) => (
              <Box
                key={`item-${index}`}
                sx={{
                  flex: `1`,
                  minWidth: 100,
                  textAlign: `center`,
                  p: 1
                }}
              >
                <Reveal effect='fadeInGrow' delay={0.2 * (index + 2)}>
                  <ContentText content={text?.[0]} mb='0'>
                    <Counter to={parseInt(text?.[0]?.text)} />
                  </ContentText>
                  <ContentText
                    content={text?.[1]}
                    sx={{ fontWeight: `body` }}
                    mb='0'
                  />
                </Reveal>
              </Box>
            ))}
          </Flex>
        )}
        {content.buttons && (
          <>
            <Divider />
            <ContentButtons content={content.buttons} />
          </>
        )}
      </ContentContainer>
    </Container>
  )
}

export default WithDefaultContent(StatsBlock01)
