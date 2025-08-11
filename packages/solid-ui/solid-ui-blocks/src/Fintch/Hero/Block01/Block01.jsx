import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { Container, Flex, Box } from 'theme-ui';
import ContentText from '@solid-ui-components/ContentText';
import Reveal from '@solid-ui-components/Reveal';
import ContentImages from '@solid-ui-components/ContentImages';
import WithDefaultContent from '@solid-ui-blocks/WithDefaultContent';

// Strapi Base URL
const STRAPI_BASE_URL = 'https://strapi5-dev-jt.mumara.com';

// Helper to normalize URLs
const normalizeUrl = (url) =>
  url?.startsWith('http') ? url : `${STRAPI_BASE_URL}${url}`;

const HeroBlock01 = () => {
  const data = useStaticQuery(graphql`
    query {
      allStrapiHomehero {
        nodes {
          heading
          discription
          image { url }
          overlayimage { url }
          overlaytwoimage { url }
          atmimage { url }
        }
      }
    }
  `);

  const heroData = data?.allStrapiHomehero?.nodes?.[2]; // Third entry

  if (!heroData) {
    console.warn('HeroBlock01: No third entry found from Strapi.');
    return null;
  }

  const {
    heading,
    discription,
    image,
    overlayimage,
    overlaytwoimage,
    atmimage,
  } = heroData;

  const imageUrl = image?.url ? normalizeUrl(image.url) : null;
  const overlayImageUrl = overlayimage?.url ? normalizeUrl(overlayimage.url) : null;
  const overlayTwoImageUrl = overlaytwoimage?.url ? normalizeUrl(overlaytwoimage.url) : null;
  const atmImageUrl = atmimage?.url ? normalizeUrl(atmimage.url) : null;

  const titleContent = [
    { type: 'heading', text: heading, as: 'h1', color: '#2d3748' },
  ];

  const descriptionContent = [
    { type: 'text', text: discription, color: '#2d3748' },
  ];

  const images = [
    imageUrl && { src: imageUrl, alt: 'Main Image', maxWidth: '100%' },
    atmImageUrl && {
      src: atmImageUrl,
      alt: 'ATM Overlay',
      position: { bottom: '-5%', left: '33%' },
      effects: ['float'],
    },
    overlayTwoImageUrl && {
      src: overlayTwoImageUrl,
      alt: 'Overlay Two Image',
      position: { top: '10%', right: '-7%' },
      effects: ['floatFaster'],
    },
    overlayImageUrl && {
      src: overlayImageUrl,
      alt: 'Overlay Image',
      position: { top: '20%', left: '25%' },
      effects: ['float'],
    }
  ].filter(Boolean);

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
          <Reveal effect="fadeInDown" delay={0.1}>
            <Box sx={{ maxWidth: ['100%', '95%', '95%', '95%'], fontSize: [2, 3, 4] }}>
              <ContentText content={titleContent} />
            </Box>
          </Reveal>

          <Reveal effect="fadeInDown" delay={0.2}>
            <Box sx={{ maxWidth: ['100%', '95%', '95%', '95%'], fontSize: [1, 2, 3], mt: 3 }}>
              <ContentText content={descriptionContent} />
            </Box>
          </Reveal>

          
          <Reveal effect="fadeInUp" delay={0.4}>
            <Flex
              as="form"
              onSubmit={(e) => {
                e.preventDefault();
              }}
              sx={{
                justifyContent: ['center', null, 'flex-start'],
                mt: 4,
                width: '100%',
                maxWidth: '80%',
                backgroundColor: 'white',
                borderRadius: '50px',
                overflow: 'hidden',
                boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
                border: '1px solid #e2e8f0',
                p: '5px',
              }}
            >
              <Box
                as="input"
                type="email"
                placeholder="Enter Your Email Address"
                required
                sx={{
                  flex: 1,
                  px: 3,
                  py: 3,
                  fontSize: 2,
                  border: 'none',
                  outline: 'none',
                  backgroundColor: 'transparent',
                  color: '#4a5568',
                  '::placeholder': {
                    color: '#a0aec0',
                  },
                }}
              />
              <Box
                as="button"
                type="submit"
                sx={{
                  backgroundColor: '#2d3748',
                  color: '#fff',
                  px: 4,
                  py: 3,
                  fontSize: 2,
                  border: 'none',
                  borderRadius: '40px',
                  cursor: 'pointer',
                  transition: 'background-color 0.3s ease',
                  '&:hover': {
                    backgroundColor: '#1a202c',
                  },
                }}
              >
                Get Started
              </Box>
            </Flex>

          </Reveal>
        </Box>

        <Box
          sx={{
            flexBasis: ['100%', null, null, null],
            position: 'relative',
            textAlign: 'center',
            mt: [4, null, null, 0],
          }}
        >
          <ContentImages
            content={{ images }}
            loading="eager"
            imagePosition="center"
          />
        </Box>
      </Flex>
    </Container>
  );
};

export default WithDefaultContent(HeroBlock01);