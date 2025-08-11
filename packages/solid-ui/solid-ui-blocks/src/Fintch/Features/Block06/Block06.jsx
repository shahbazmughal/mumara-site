import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { Container, Box, Image, Text, Button } from 'theme-ui';
import Reveal from '@solid-ui-components/Reveal';
import Divider from '@solid-ui-components/Divider';
import WithDefaultContent from '@solid-ui-blocks/WithDefaultContent';

/* 🔍 GraphQL Query */
const query = graphql`
  query {
    strapiFeaturethreemore {
      miniheading
      heading
      description
      button
      image {
        url
      }
    }
  }
`;

/* 🔧 Normalize image URL */
const normalize = (url) =>
  url?.startsWith('http') ? url : `https://strapi5-dev-jt.mumara.com${url}`;

/* 🧱 Main Component */
const FeaturesBlock06 = () => {
  const { strapiFeaturethreemore } = useStaticQuery(query);

  if (!strapiFeaturethreemore) return null;

  const {
    miniheading,
    heading,
    description,
    button,
    image,
  } = strapiFeaturethreemore;

  const imageUrl = normalize(image?.url);

  return (
    <Container sx={{ textAlign: 'center' }}>
      <Reveal effect="fadeInDown">
        <Text
          as="h2"
          sx={{
            color: '#a855f7',
            fontSize: [2, 3],
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
            fontSize: [4, 5],
            fontWeight: 'bold',
            color: '#2d3748',
            mb: 3,
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
            mb: 4,
          }}
        >
          {description}
        </Text>
      </Reveal>

      {button && (
        <>
          <Reveal effect="fadeInUp" delay={0.4}>
            <Box>
                <Button
                  variant="primary"
                  sx={{
                    fontSize: 2,
                    backgroundColor: '#2d3748',
                    borderRadius: 'full',
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      backgroundColor: '#1a202c',
                    },
                  }}
                >
                 Get Started Now
                </Button>
              
            </Box>
          </Reveal>
        </>
      )}

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
