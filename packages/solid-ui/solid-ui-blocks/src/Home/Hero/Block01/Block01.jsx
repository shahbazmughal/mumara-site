import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { Container, Flex, Box } from 'theme-ui';
import ContentText from '@solid-ui-components/ContentText';
import Reveal from '@solid-ui-components/Reveal';
import ContentImages from '@solid-ui-components/ContentImages';
import ContentButtons from '@solid-ui-components/ContentButtons';
import WithDefaultContent from '@solid-ui-blocks/WithDefaultContent';

const STRAPI_BASE_URL = 'https://strapi5-dev-jt.mumara.com';

const normalizeUrl = (url) =>
  url?.startsWith('http') ? url : `${STRAPI_BASE_URL}${url}`;

const HeroBlock01 = () => {
  const data = useStaticQuery(graphql`
    query {
      strapiHomehero {
        heading
        discription
        image { url }
        overlayimage { url }
        overlaytwoimage { url }
      }
    }
  `);

  const heroData = data?.strapiHomehero;

  if (!heroData) {
    console.warn('HeroBlock01: No data found from Strapi.');
    return null;
  }

  const { heading, discription, image, overlayimage, overlaytwoimage } = heroData;

  const imageUrl = image?.url ? normalizeUrl(image.url) : null;
  const overlayImageUrl = overlayimage?.url ? normalizeUrl(overlayimage.url) : null;
  const overlayTwoImageUrl = overlaytwoimage?.url ? normalizeUrl(overlaytwoimage.url) : null;

  // Debugging log to check the URLs
  console.log('Overlay Two Image URL:', overlayTwoImageUrl);

  const titleContent = [
    { type: 'heading', text: heading, as: 'h1', color: '#2d3748' },
  ].filter(Boolean);

  const descriptionContent = [
    { type: 'text', text: discription },
  ].filter(Boolean);

  const buttons = [
    { text: 'Get Started', link: '/', variant: 'primary' },
    { text: 'Learn More', link: '/', variant: 'primary-light' },
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
          {titleContent.length > 0 && (
            <Reveal effect="fadeInDown" delay={0.1}>
              <Box
                sx={{
                  maxWidth: ['100%', '80%', '80%', '80%'],
                  fontSize: [2, 3, 4],
                  lineHeight: 1.5,
                  mb: 4,
                }}
              >
                <ContentText content={titleContent} />
              </Box>
            </Reveal>
          )}

          {descriptionContent.length > 0 && (
            <Reveal effect="fadeInDown" delay={0.2}>
              <Box sx={{ maxWidth: ['100%', '80%', '70%', '80%'], fontSize: [1, 2, 3], mt: 3 }}>
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
            <ContentImages
              content={{
                images: [
                  { src: imageUrl, alt: 'Main Image', maxWidth: '100%' },
                  overlayImageUrl && {
                    src: overlayImageUrl,
                    alt: 'Overlay Image',
                    position: { top: '22%', left: '4%' },
                  },
                  overlayTwoImageUrl && {
                    src: overlayTwoImageUrl,
                    alt: 'Overlay Two Image',
                    position: { top: '60%', right: '0%' },
                  },
                ].filter(Boolean),
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
