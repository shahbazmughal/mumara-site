import React, { Fragment } from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { Container, Flex, Box } from 'theme-ui';
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

const FeaturesWithPhotoBlock01 = ({ reverse }) => {
  // Fetch all entries
  const data = useStaticQuery(graphql`
    query {
      allStrapiFeatureone {
        nodes {
          id
          miniheading
          subheading
          description
          image { url }
          overlayimage { url }
          Automaticlogo { url }
          Automaticheading
          Automaticdescription
          reportslogo { url }
          reportsheading
          reportsdescription
        }
      }
    }
  `);

  // Get the second entry (index 1)
  const builds = data.allStrapiFeatureone.nodes;
  const build = builds[1];

  // Optional: Handle case where second entry doesn't exist
  if (!build) {
    return <p>Second entry not found.</p>;
  }

  // Text content
  const textContent = [
    { text: build.miniheading, variant: 'h4', color: '#718096' },
    { text: build.subheading, variant: 'h2' },
    { text: build.description, variant: 'medium' }
  ];

  // Image content
  const images = [
    {
      src: `${STRAPI_BASE_URL}${build.image.url}`,
      radius: 'lg',
      minWidth: '100%',
      alt: 'Main Image'
    },
    {
      src: `${STRAPI_BASE_URL}${build.overlayimage.url}`,
      alt: 'Overlay Image',
      radius: 'lg',
      shadow: 'default',
      minWidth: '100%',
      position: { top: '-35%', left: '25%' }
    }
  ];

  // Feature collection
  const collection = [
    {
      icon: {
        src: `${STRAPI_BASE_URL}${build.Automaticlogo.url}`,
        color: 'beta',
        bg: '#a855f7'
      },
      text: [
        { text: build.Automaticheading, variant: 'h5' },
        { text: build.Automaticdescription }
      ]
    },
    {
      icon: {
        src: `${STRAPI_BASE_URL}${build.reportslogo.url}`,
        color: 'alpha',
        bg: '#6366f1'
      },
      text: [
        { text: build.reportsheading, variant: 'h5' },
        { text: build.reportsdescription }
      ]
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
        <FlexContent reverse={reverse}>
          <Box sx={{ textAlign: ['center', 'left'] }}>
            <ContentText content={textContent} />
          </Box>

          {collection && (
            <>
              <Divider space={3} />
              <Reveal effect={reverse ? 'fadeInRight' : 'fadeInLeft'} duration={1.5}>
                {collection.map((props, index) => (
                  <Fragment key={`item-${index}`}>
                    <ListItem {...props} />
                    <Divider space={2} />
                  </Fragment>
                ))}
              </Reveal>
            </>
          )}
        </FlexContent>
        {/* Image Section */}
        <FlexImage reverse={reverse}>
          <ContentImages content={{ images }} reverse={reverse} />
        </FlexImage>
      </Flex>

      {/* Overlap Fade Effect */}
      <FlexOverlapFade direction={reverse ? 'ltr' : 'rtl'} />
    </Container>
  );
};

export default WithDefaultContent(FeaturesWithPhotoBlock01);
