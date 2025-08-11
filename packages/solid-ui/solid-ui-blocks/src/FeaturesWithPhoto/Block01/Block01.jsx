import React, { Fragment } from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { Container, Flex, Box, Card, css } from 'theme-ui';
import Reveal from '@solid-ui-components/Reveal';
import Divider from '@solid-ui-components/Divider';
import ListItem from '@solid-ui-components/ListItem';
import FlexImage from '@solid-ui-components/FlexImage';
import FlexContent from '@solid-ui-components/FlexContent';
import FlexOverlapFade from '@solid-ui-components/FlexOverlapFade';
import ContentImages from '@solid-ui-components/ContentImages';
import ContentText from '@solid-ui-components/ContentText';
import WithDefaultContent from '@solid-ui-blocks/WithDefaultContent';

// Set your Strapi base URL
const STRAPI_BASE_URL = 'https://strapi5-dev-jt.mumara.com';

// Normalize URLs
const normalizeUrl = (url) =>
  url?.startsWith('http') ? url : `${STRAPI_BASE_URL}${url}`;

const FeaturesWithPhotoBlock01 = ({ reverse }) => {
  const data = useStaticQuery(graphql`
 query {
  strapiMarkeeetingfeature {
    image {
      url
        }
        miniheading
        heading
        description
        feature1
        feature2
        feature3
        Featuresimage {
        url
      }
    }
  }
  `);

  const build = data?.strapiMarkeeetingfeature;

  if (!build) return <p>Data not found.</p>;

  // Text content
  const textContent = [
    { text: build.miniheading, variant: 'h5', color: '#718096' },
    { text: build.heading, variant: 'h2' },
    { text: build.description, variant: 'medium' }
  ];

  // Main + Feature image
  const images = [
    {
      src: normalizeUrl(build.image?.url),
      alt: 'Image',
      radius: 'lg',
      shadow: 'default'
    }
  ];

  // Feature list (using same icon for all)
  const collection = [
    {
      icon: {
        src: normalizeUrl(build.Featuresimage?.url),
      },
      text: [{ text: build.feature1, variant: 'p' }]
    },
    {
      icon: {
        src: normalizeUrl(build.Featuresimage?.url),
      },
      text: [{ text: build.feature2, variant: 'p' }]
    },
    {
      icon: {
        src: normalizeUrl(build.Featuresimage?.url),
      },
      text: [{ text: build.feature3, variant: 'p' }]
    }
  ];

  return (
    <Container sx={{ position: 'relative' }}>
      <Flex
        sx={{
          alignItems: [null, 'center'],
          flexDirection: [
            reverse ? 'column-reverse' : 'column',
            reverse ? 'row-reverse' : 'row'
          ]
        }}
      >
        <FlexImage reverse={reverse}>
          <ContentImages content={{ images }} reverse={reverse} />
        </FlexImage>

        <FlexContent reverse={reverse}>
          <Box sx={{ textAlign: ['center', 'left'] }}>
            <ContentText content={textContent} />
          </Box>

          {collection && (
            <>
              <Divider space={3} />
              <Flex
                sx={{
                  flexDirection: 'column',
                  gap: 3,
                  // Removed 'overflowX: 'auto'' and 'whiteSpace: 'nowrap''
                }}
              >
                {collection.map((props, index) => (
                  <Reveal
                    key={`item-${index}`}
                    effect="fadeInPop"
                    delay={1 + 0.2 * (index + 1)}
                  >
                    <Box
                      sx={{
                        display: 'inline-block',
                        // Removed 'minWidth: 220' and 'flex: '0 0 auto''
                      }}
                    >
                      <ListItem {...props} compact middle p="2" />
                    </Box>
                  </Reveal>
                ))}
              </Flex>
            </>
          )}

        </FlexContent>
      </Flex>

      <FlexOverlapFade direction={reverse ? 'ltr' : 'rtl'} />
    </Container>
  );
};

export default WithDefaultContent(FeaturesWithPhotoBlock01);