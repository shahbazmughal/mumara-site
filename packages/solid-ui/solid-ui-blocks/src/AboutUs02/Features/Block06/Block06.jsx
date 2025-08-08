import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { Container, Box, Image, Text } from 'theme-ui';
import Reveal from '@solid-ui-components/Reveal';
import WithDefaultContent from '@solid-ui-blocks/WithDefaultContent';

/* 🔍 GraphQL Query */
const query = graphql`
  query {
    allStrapiFeaturethreemore {
      nodes {
        miniheading
        heading
        description
        image {
          url
        }
      }
    }
  }
`;

/* 🔧 Normalize image URL */
const normalize = (url) =>
  url?.startsWith('http') ? url : `https://strapi5-dev-jt.mumara.com${url}`;

/* 🧱 Main Component */
const FeaturesBlock06 = () => {
  const data = useStaticQuery(query);
  const secondEntry = data?.allStrapiFeaturethreemore?.nodes?.[1];

  if (!secondEntry) {
    console.warn('⚠️ Second entry not found in Strapi data.');
    return null;
  }

  const { miniheading, heading, description, image } = secondEntry;
  const imageUrl = normalize(image?.url);

  return (
    <Container sx={{ textAlign: 'center' }}>
      <Reveal effect="fadeInDown">
        <Text
          as="h2"
          sx={{
            color: '#6366f1',
            fontSize: [3, 4],
            fontWeight: 'bold',
            letterSpacing: 'wide',
            mb: 2,
          }}
        >
          {miniheading}
        </Text>
      </Reveal>

      <Reveal effect="fadeInDown" delay={0.1}>
        <Text
          as="h1"
          sx={{
            mx: 'auto',
            maxWidth: '600px',
            fontSize: [6, 7],
            fontWeight: 'bold',
            color: '#2d3748',
            mb: 4,
          }}
        >
          {heading}
        </Text>
      </Reveal>

      <Reveal effect="fadeInDown" delay={0.2}>
        <Text
          as="p"
          sx={{
            fontSize: [2, 3],
            color: '#4a5568',
            mx: 'auto',
            mb: 5,
          }}
        >
          {description}
        </Text>
      </Reveal>

      {imageUrl && (
        <Reveal effect="fadeInUp" delay={0.3}>
          <Box sx={{ mt: 4 }}>
            <Image
              src={imageUrl}
              alt="Feature Image"
              sx={{
                minWidth: '100%',
                mx: 'auto',
                borderRadius: 'xl',
                boxShadow: 'lg',
              }}
            />
          </Box>
        </Reveal>
      )}
    </Container>
  );
};

export default WithDefaultContent(FeaturesBlock06);
