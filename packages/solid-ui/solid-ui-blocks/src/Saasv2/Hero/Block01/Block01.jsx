import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { Container, Flex, Box } from 'theme-ui';
import ContentText from '@solid-ui-components/ContentText';
import Reveal from '@solid-ui-components/Reveal';
import ContentImages from '@solid-ui-components/ContentImages';
import ContentButtons from '@solid-ui-components/ContentButtons';
import WithDefaultContent from '@solid-ui-blocks/WithDefaultContent';

// Strapi base URL
const STRAPI_BASE_URL = 'https://strapi5-dev-jt.mumara.com';

// Normalize image URL
const normalizeUrl = (url) =>
  url?.startsWith('http') ? url : `${STRAPI_BASE_URL}${url}`;

const HeroBlock01 = () => {
  const data = useStaticQuery(graphql`
    query {
      allStrapiHomehero {
        nodes {
          miniheading
          heading
          discription
          image { url }
        }
      }
    }
  `);

  // Use the second entry, fallback to first
  const heroData = data?.allStrapiHomehero?.nodes?.[1] || data?.allStrapiHomehero?.nodes?.[0];

  if (!heroData) {
    console.warn('HeroBlock01: No Hero data found from Strapi.');
    return null;
  }

  const {miniheading, heading, discription, image } = heroData;

  const imageUrl = image?.url ? normalizeUrl(image.url) : null;

  const miniheadingContent = [
    { type: 'miniheading', text: miniheading, as: 'h3', color: '#2d3748' },
  ].filter(Boolean);

  const titleContent = [
    { type: 'heading', text: heading, as: 'h1', color: '#fff' },
  ].filter(Boolean);

  const descriptionContent = [
    { type: 'text', text: discription , color: '#2d3748'},
  ].filter(Boolean);

  const buttons = [
    { text: 'Get Started Now', link: '/', variant: 'primary-light' },
  ];

  return (
    <Container>
      <Flex
        sx={{
          alignItems: ['center', null, null, 'center'],
          flexDirection: ['column', null, null, 'row'],
        }}
      >
        <Box
          sx={{
            textAlign: ['center', null, 'left'],
            mx: ['auto', null, 0],
          }}
        >
          {miniheadingContent.length > 0 && (
            <Reveal effect="fadeInDown" delay={0.1}>
              <Box sx={{ maxWidth: ['100%', '80%', '80%', '80%'], fontSize: [1, 2, 3] }}>
                <ContentText content={miniheadingContent} />
              </Box>
            </Reveal>
          )}

          {titleContent.length > 0 && (
            <Reveal effect="fadeInDown" delay={0.1}>
              <Box sx={{ maxWidth: ['100%', '80%', '80%', '80%'], fontSize: [2, 3, 3] }}>
                <ContentText content={titleContent} />
              </Box>
            </Reveal>
          )}
          {descriptionContent.length > 0 && (
            <Reveal effect="fadeInDown" delay={0.2}>
              <Box sx={{ maxWidth: ['100%', '80%', '80%', '80%'], fontSize: [1, 2, 3], mt: 3 }}>
                <ContentText content={descriptionContent} />
              </Box>
            </Reveal>
          )}

          {buttons.length > 0 && (
            <Reveal effect="fadeInUp" delay={0.4}>
              <Flex sx={{ justifyContent: ['center', null, 'flex-start'], mt: 4 }}>
                <ContentButtons content={buttons} />
              </Flex>
            </Reveal>
          )}
        </Box>

        <Box
          sx={{
            flexBasis: ['100%', null, null, null],
            position: 'relative',
            textAlign: 'center',
            mt: [4, null, null, 0],
          }}
        >
          {imageUrl && (
            <Box
              as="img"
              src={imageUrl}
              alt="Main Image"
              sx={{
                borderRadius: '12px',
                border: '5px solid white',
                display: 'block',
                minwidth: '100%',
                mx: 'auto',
              }}
            />
          )}

        </Box>
      </Flex>
    </Container>
  );
};

export default WithDefaultContent(HeroBlock01);
