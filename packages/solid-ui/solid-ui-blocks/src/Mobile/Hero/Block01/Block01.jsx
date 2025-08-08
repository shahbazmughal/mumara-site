import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { Container, Flex, Box } from 'theme-ui';
import ContentText from '@solid-ui-components/ContentText';
import Reveal from '@solid-ui-components/Reveal';
import ContentImages from '@solid-ui-components/ContentImages';
import WithDefaultContent from '@solid-ui-blocks/WithDefaultContent';
import ContentButtons from '@solid-ui-components/ContentButtons';

const STRAPI_BASE_URL = 'https://strapi5-dev-jt.mumara.com';

const normalizeUrl = (url) =>
  url?.startsWith('http') ? url : `${STRAPI_BASE_URL}${url}`;

const HeroBlock01 = () => {
  const data = useStaticQuery(graphql`
    query {
      strapiMobilehero {
        miniheading
        heading
        description
        button
        image { url }
        japanflag { url }
        franceflag { url }
      }
    }
  `);

  const {
    miniheading,
    heading,
    description,
    button,
    image,
    japanflag,
    franceflag,
  } = data.strapiMobilehero;

  const mainImageUrl = normalizeUrl(image?.url);
  const japanFlagUrl = normalizeUrl(japanflag?.url);
  const franceFlagUrl = normalizeUrl(franceflag?.url);

  const titleContent = [
    { type: 'subheading', text: miniheading, as: 'h5', color: '#a855f7' },
    { type: 'heading', text: heading, as: 'h1', color: '#2d3748' },
  ];

  const descriptionContent = [
    { type: 'text', text: description, color: '#718096' },
  ];
  const buttons = [
    { text: 'Get Started', link: '/', variant: 'primary' },
    { text: 'Learn More', link: '/', variant: 'primary-light' },
  ];

  const images = [
    mainImageUrl && { src: mainImageUrl, alt: 'Main Image', maxWidth: '100%' },
    japanFlagUrl && {
      src: franceFlagUrl,
      alt: 'Japan Flag',
      position: { bottom: '10%', left: '5%' },
      effects: ['float'],
    },
    franceFlagUrl && {
      src: japanFlagUrl,
      alt: 'France Flag',
      position: { top: '15%', right: '5%' },
      effects: ['floatFaster'],
    },
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
            <Box sx={{ maxWidth: ['100%', '80%'], fontSize: [2, 3, 4], lineHeight: 1.5 }}>
              <ContentText content={titleContent} />
            </Box>
          </Reveal>

          <Reveal effect="fadeInDown" delay={0.2}>
            <Box sx={{ maxWidth: ['100%', '80%'], fontSize: [1, 2, 3], mt: 3 }}>
              <ContentText content={descriptionContent} />
            </Box>
          </Reveal>
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
