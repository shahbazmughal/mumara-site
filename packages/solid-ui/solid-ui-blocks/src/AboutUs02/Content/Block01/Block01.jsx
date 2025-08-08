import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { Container, Flex, Box, css } from 'theme-ui';
import Reveal from '@solid-ui-components/Reveal';
import Divider from '@solid-ui-components/Divider';
import ContentText from '@solid-ui-components/ContentText';
import WithDefaultContent from '@solid-ui-blocks/WithDefaultContent';

const ContentBlock01 = () => {
  // ✅ GraphQL query to fetch all entries
  const data = useStaticQuery(graphql`
    query {
      allStrapiAboutusone {
        nodes {
          miniheading
          heading
          description
        }
      }
    }
  `);

  const secondEntry = data?.allStrapiAboutusone?.nodes?.[3];

  if (!secondEntry) {
    console.warn('ContentBlock01: Second entry not found in Strapi.');
    return null;
  }

  const { miniheading, heading, description } = secondEntry;

  const collection = [
    {
      text: [
        { type: 'heading', text: miniheading, as: 'h1', color: '#2d3748' },
        { type: 'heading', text: heading, as: 'p', color: '#718096'},
      ]
    },
    {
      text: [{ type: 'text', text: description }],
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
            flexBasis: [null, null, null, '3/5'],
            position: 'relative',
          }}
        >
          {collection?.[0] && (
            <Reveal effect="fadeInLeft">
              <Box sx={{ textAlign: ['center', 'left'], maxWidth:'330px',  fontSize: [1, 2, 3] }}>
                <ContentText content={collection[0]?.text} ml="0" />
              </Box>
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
              <Box sx={{ textAlign: ['center', 'left'] }}>
                <ContentText content={collection[1]?.text} ml="0" />
              </Box>
            </Reveal>
          )}
        </Box>
      </Flex>
    </Container>
  );
};

export default WithDefaultContent(ContentBlock01);
