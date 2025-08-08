import React, { Fragment } from 'react';
import { useStaticQuery, graphql } from 'gatsby'; // Import GraphQL query
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

// You can set the Strapi base URL here if needed
const STRAPI_BASE_URL = 'https://strapi5-dev-jt.mumara.com';

const FeaturesWithPhotoBlock01 = ({ reverse }) => {
  // Fetching data from Strapi
  const data = useStaticQuery(graphql`
    query {
      strapiFeatureone {
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
  `);

  const build = data.strapiFeatureone;

  // Mapping text content
  const textContent = [
    { text: build.miniheading, variant: 'h4', color: '#718096' },
    { text: build.subheading, variant: 'h2'},
    { text: build.description, variant: 'medium' }
  ];

  // Images (Including both Strapi and static/local)
  const images = [
    // For dynamic Strapi images
    {
      src: `${STRAPI_BASE_URL}${build.image.url}`,  // This uses the Strapi URL for images
      radius: 'lg',
      alt: 'Main Image'
    },
    {
      src: `${STRAPI_BASE_URL}${build.overlayimage.url}`, // Strapi overlay image
      alt: 'Overlay Image',
      radius: 'lg',
      shadow: 'default',
      effects: ['fadeInLeft', 'float'],
      position: { bottom: '15%', right: '-5%' }
    }
  ];

  // Collection of feature items (Automatic, Reports) - Using icons from Strapi
  const collection = [
    {
      icon: {
        src: `${STRAPI_BASE_URL}${build.Automaticlogo.url}`,  // Strapi URL for logo
        color: 'beta',
        bg: 'betaLighter'
      },
      text: [
        { text: build.Automaticheading, variant: 'h5' },
        { text: build.Automaticdescription }
      ]
    },
    {
      icon: {
        src: `${STRAPI_BASE_URL}${build.reportslogo.url}`,  // Strapi URL for logo
        color: 'alpha',
        bg: 'alphaLighter'
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
          ],
        }}
      >
        {/* FlexImage Section */}
        <FlexImage reverse={reverse}>
          <ContentImages content={{ images }} reverse={reverse} />
        </FlexImage>

        {/* FlexContent Section */}
        <FlexContent reverse={reverse}>
          <Box sx={{ textAlign: ['center', 'left'] }}>
            <ContentText content={textContent} />
          </Box>

          {/* Render Collection if available */}
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
      </Flex>

      {/* Fade Overlap Effect */}
      <FlexOverlapFade direction={reverse ? 'ltr' : 'rtl'} />
    </Container>
  );
};

export default WithDefaultContent(FeaturesWithPhotoBlock01);
