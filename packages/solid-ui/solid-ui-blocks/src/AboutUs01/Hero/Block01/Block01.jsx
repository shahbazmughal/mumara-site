import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { Container, Flex, Box } from 'theme-ui';
import ContentText from '@solid-ui-components/ContentText';
import Reveal from '@solid-ui-components/Reveal';
import ContentImages from '@solid-ui-components/ContentImages';
import ContentButtons from '@solid-ui-components/ContentButtons';
import WithDefaultContent from '@solid-ui-blocks/WithDefaultContent';
import { teal } from '@solid-ui-theme/color-preset';

// 🌐 Strapi Base URL
const STRAPI_BASE_URL = 'https://strapi5-dev-jt.mumara.com';

// 🔁 Helper to normalize URLs
const normalizeUrl = (url) =>
  url?.startsWith('http') ? url : `${STRAPI_BASE_URL}${url}`;

const HeroBlock01 = () => {
  const data = useStaticQuery(graphql`
    query {
      allStrapiAboutusone {
        nodes {
          miniheading
          heading
          button
          image {
            url
          }
        }
      }
    }
  `);

  const entry = data?.allStrapiAboutusone?.nodes?.[0];

  if (!entry) {
    console.warn('HeroBlock01: No data found from Strapi.');
    return null;
  }

  const { miniheading, heading, button, image } = entry;

  const imageUrl = image?.url ? normalizeUrl(image.url) : null;

  const titleContent = [
    { type: 'heading', text: miniheading, as: 'h1', color: '#2d3748' },
    { type: 'heading', text: heading, as: 'p', color: '#718096' }
  ].filter(Boolean);

  const buttons = [
    { text: 'Contact Us', variant: 'primary' }
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
        flexBasis: ['100%', null, null, '50%'],
        textAlign: ['center', null, 'left'],
        mx: ['auto'],
      }}
    >
      {titleContent.length > 0 && (
        <Reveal effect="fadeInDown" delay={0.1}>
          <Box sx={{ maxWidth: ['100%', '65%', '65%', '85%'], fontSize: [1, 2, 3] }}>
            <ContentText content={titleContent} />
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
        flexBasis: ['100%', null, null, '60%'],
        textAlign: 'center',
        mt: [4, null, null, 0],
      }}
    >
      {imageUrl && (
        <ContentImages
          content={{
            images: [
              {
                src: imageUrl,
                alt: heading || 'Image',
                minWidth: '100%',
              },
            ],
          }}
          loading="eager"
          imagePosition="center"
        />
      )}
    </Box>

    
  </Flex>
</Container>

  );
};

export default WithDefaultContent(HeroBlock01);
