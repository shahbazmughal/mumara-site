import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { Container, Flex, Box } from 'theme-ui';
import Reveal from '@solid-ui-components/Reveal';
import Divider from '@solid-ui-components/Divider';
import Counter from '@solid-ui-components/Counter';
import ContentContainer from '@solid-ui-components/ContentContainer';
import ContentText from '@solid-ui-components/ContentText';
import ContentButtons from '@solid-ui-components/ContentButtons';
import WithDefaultContent from '@solid-ui-blocks/WithDefaultContent';

const StatsBlock01 = () => {
  const data = useStaticQuery(graphql`
    query {
      allStrapiStat {
        nodes {
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
    }
  `);

  // Use second entry if it exists, otherwise fallback to first
  const stat = data.allStrapiStat.nodes[1] ;

  const content = {
    text: [
      { text: stat.heading, color: 'omegaDarker', variant: 'h2' },
      {
        text: stat.miniheading,
        color: 'omegaDark',
        sx: {
          fontSize: '1.5rem',   // Explicitly set to 1.25rem (20px)
          whiteSpace: 'pre-line',
          lineHeight: 1.8
        }
}

    ],
    collection: [
      {
        text: [
          { text: stat.leadsnumber, color: '#9333ea', variant: 'h1' },
          { text: stat.Leadstext, color: 'omegaDark', variant: 'h5' }
        ]
      },
      {
        text: [
          { text: stat.campaignsnumber, color: '#9333ea', variant: 'h1' },
          { text: stat.Campaignstext, color: 'omegaDark', variant: 'h5' }
        ]
      },
      {
        text: [
          { text: stat.clintsnumber, color: '#9333ea', variant: 'h1' },
          { text: stat.Clientstext, color: 'omegaDark', variant: 'h5' }
        ]
      },
      {
        text: [
          { text: stat.medianumber, color: '#9333ea', variant: 'h1' },
          { text: stat.Mediatext, color: 'omegaDark', variant: 'h5' }
        ]
      }
    ]
  };

  return (
    <Container sx={{ textAlign: `center` }}>
      <ContentContainer >
        <ContentText content={content.text} />

        {content.text && content.collection && <Divider space={3} />}

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
                <ContentText content={text[0]} mb='0'>
                  <Counter to={parseInt(text[0].text)} />
                </ContentText>
                <ContentText
                  content={text[1]}
                  sx={{ fontWeight: `body` }}
                  mb='0'
                />
              </Reveal>
            </Box>
          ))}
        </Flex>

        {content.buttons && (
          <>
            <Divider />
            <ContentButtons content={content.buttons} />
          </>
        )}
      </ContentContainer>
    </Container>
  );
};

export default WithDefaultContent(StatsBlock01);
