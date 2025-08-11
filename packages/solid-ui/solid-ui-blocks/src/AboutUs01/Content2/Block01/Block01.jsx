import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { Container, Flex, Box, css } from 'theme-ui';
import Reveal from '@solid-ui-components/Reveal';
import Divider from '@solid-ui-components/Divider';
import ContentText from '@solid-ui-components/ContentText';
import ContentButtons from '@solid-ui-components/ContentButtons';
import WithDefaultContent from '@solid-ui-blocks/WithDefaultContent';

const ContentBlock01 = () => {
  // ✅ GraphQL query to fetch all entries
  const data = useStaticQuery(graphql`
    query {
      allStrapiAboutusone {
        nodes {
          miniheading
          heading
          button
          description
        }
      }
    }
  `);

  // ✅ Second entry (index 1)
  const secondEntry = data?.allStrapiAboutusone?.nodes?.[2];

  if (!secondEntry) {
    console.warn('ContentBlock01: Second entry not found in Strapi.');
    return null;
  }

  const { miniheading, heading, button, description } = secondEntry;

  // Format content into structure expected by ContentText
  const collection = [
    {
      text: [
        { type: 'heading', text: miniheading, as: 'h3', color: '#6366f1' },
        { type: 'heading', text: heading, as: 'h2', color: '#ffffff' },
      ].filter(Boolean),
      buttons: button
        ? [{ text: 'Schedule a Consultation', variant: 'secondary', link: '/' }]
        : [],
    },
    {
      text: [{ type: 'text', text: description , color: '#ffffff'}],
      buttons: [],
    },
  ];

  return (
    <Container>
      <Flex
        sx={{
          flexDirection: ['column', null, null, 'row'],
        }}
      >
        <Box
          sx={{
            flexBasis: [null, null, null, '2/5'],
            mr: [null, null, null, 4],
            position: 'relative',
            textAlign: ['center', 'left'],
          }}
        >
          {collection?.[0] && (
            <Reveal effect="fadeInLeft">
              <Box sx={{ textAlign: ['center', 'left'] }}>
                <ContentText content={collection[0]?.text} ml="0" />
              </Box>
              {collection[0]?.buttons?.length > 0 && (
                <>
                  <Divider space={3} />
                  <Reveal
                    effect="fadeInRight"
                    delay={1}
                    css={css({ mb: [4, null, null, 0] })}
                  >
                    <ContentButtons content={collection[0].buttons} />
                  </Reveal>
                </>
              )}
            </Reveal>
          )}
        </Box>
        <Box
          sx={{
            flexBasis: '3/5',
            alignSelf: 'center',
            textAlign: ['center', null, null, 'left'],
          }}
        >
          {collection?.[1] && (
            <Reveal effect="fadeInLeft">
              <Box sx={{ textAlign: ['center', 'left'] , fontSize: [1, 2, 3]}}>
                <ContentText content={collection[1]?.text} ml="0" />
              </Box>
              {collection[1]?.buttons?.length > 0 && (
                <>
                  <Divider space={3} />
                  <Reveal
                    effect="fadeInRight"
                    delay={1}
                    css={css({ mb: [4, null, null, 0] })}
                  >
                    <ContentButtons content={collection[1].buttons} />
                  </Reveal>
                </>
              )}
            </Reveal>
          )}
        </Box>
      </Flex>
    </Container>
  );
};

export default WithDefaultContent(ContentBlock01);
