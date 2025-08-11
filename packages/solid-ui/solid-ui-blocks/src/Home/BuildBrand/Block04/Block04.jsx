import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { Container, Flex, Box, css } from 'theme-ui';
import Reveal from '@solid-ui-components/Reveal';
import Divider from '@solid-ui-components/Divider';
import ContentText from '@solid-ui-components/ContentText';
import ContentImages from '@solid-ui-components/ContentImages';
import WithDefaultContent from '@solid-ui-blocks/WithDefaultContent';

const STRAPI_BASE_URL = 'https://strapi5-dev-jt.mumara.com'; 

const styles = {
  item: {
    '& + &': {
      mt: [3, 5],
    },
  },
};

const FeaturesWithPhotoBlock04 = () => {
  const data = useStaticQuery(graphql`
    query {
      strapiHighlightedfeature {
        heading
        discription
        discriptions
        dripheading
        dripdescription
        Automationheading
        Automationdescription
        Deepheading
        Deepdescription
        Easyheading
        Easydescription
        Personalizationheading
        Personalizationdescription
        Reportingheading
        Reportingdescription
        image {
          url
        }
      }
    }
  `);

  const build = data.strapiHighlightedfeature;

  const content = {
    text: [
      { text: build.heading, variant: 'h2', color: '#2d3748' },
      {
        text: build.discription,
        color: '#718096',
        mt: 3,
        mb: 4,
        variant: 'larger'
      },
      {
        text: build.discriptions,
        color: '#718096',
        mt: 3,
        mb: 4,
        variant: 'larger'
      },
    ],
    collection: [
      {
        text: [
          { text: build.dripheading, variant: 'h5' },
          { text: build.dripdescription },
        ],
      },
      {
        text: [
          { text: build.Automationheading, variant: 'h5' },
          { text: build.Automationdescription },
        ],
      },
      {
        text: [
          { text: build.Deepheading, variant: 'h5' },
          { text: build.Deepdescription },
        ],
      },
      {
        text: [
          { text: build.Easyheading, variant: 'h5' },
          { text: build.Easydescription },
        ],
      },
      {
        text: [
          { text: build.Personalizationheading, variant: 'h5' },
          { text: build.Personalizationdescription },
        ],
      },
      {
        text: [
          { text: build.Reportingheading, variant: 'h5' },
          { text: build.Reportingdescription },
        ],
      },
    ],
    images: [
      {
        src: `${STRAPI_BASE_URL}${build.image?.url}`,
        alt: 'Feature Image',
        maxWidth: '100%',
      },
    ],
  };

  return (
    <Container>
      {content.text && (
        <Box sx={{ textAlign: `center` }}>
          <ContentText content={content.text} />
          <Divider />
        </Box>
      )}
      <Flex sx={{ flexDirection: [`column`, `row`], m: -3 }}>
        <Box
          sx={{
            flexBasis: `1/3`,
            alignSelf: `center`,
            textAlign: [`center`, `right`],
            mx: [0, 4],
          }}
        >
          <Reveal effect="fadeInRight">
            {content.collection.slice(0, 3).map(({ text }, index) => (
              <Box key={`item-left-${index}`} sx={styles.item}>
                <ContentText content={text} />
              </Box>
            ))}
          </Reveal>
        </Box>

        <Box
          sx={{
            flexBasis: `1/3`,
            position: `relative`,
            my: [4, 0],
            mx: 'auto',
            '& img': {
              borderRadius: '16px',
            },
          }}
        >
          <ContentImages
            content={{ images: content.images }}
            imageEffect="fadeInUp"
          />
        </Box>


        <Box
          sx={{
            flexBasis: `1/3`,
            alignSelf: `center`,
            textAlign: [`center`, `left`],
            mx: [0, 4],
          }}
        >
          <Reveal effect="fadeInLeft">
            {content.collection.slice(3, 6).map(({ text }, index) => (
              <Box key={`item-right-${index}`} sx={styles.item}>
                <ContentText content={text} />
              </Box>
            ))}
          </Reveal>
        </Box>
      </Flex>
    </Container>
  );
};

export default WithDefaultContent(FeaturesWithPhotoBlock04);
