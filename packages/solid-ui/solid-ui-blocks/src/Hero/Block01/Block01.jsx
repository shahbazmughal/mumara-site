import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { Container, Flex, Box } from 'theme-ui';
import ContentText from '@solid-ui-components/ContentText';
import Reveal from '@solid-ui-components/Reveal';
import WithDefaultContent from '@solid-ui-blocks/WithDefaultContent';

const STRAPI_BASE_URL = process.env.GATSBY_STRAPI_API_URL;
const normalizeUrl = (url) =>
 url?.startsWith('http') ? url : `${STRAPI_BASE_URL}${url}`;

const HeroBlock01 = () => {
 const data = useStaticQuery(graphql`
  query {
   strapiHero {
    heading
    description
    image {
     url
    }
   }
  }
 `);

 const { heading, description, image } = data.strapiHero;
 const mainImageUrl = normalizeUrl(image?.url);

 const titleContent = [
  { type: 'heading', text: heading, as: 'h2', color: '#2d3748' },
 ];

 const descriptionContent = [
  { type: 'text', text: description, color: '#718096' },
 ];

 return (
  <Container>
   <Flex
    sx={{
     alignItems: ['center', null, null, 'center'],
     flexDirection: ['column', null, null, 'row'],
    }}
   >
    {/* Left Side Content */}
    <Box
     sx={{
      textAlign: ['center', null, 'left'],
      mx: ['auto', null, 0],
      flexBasis: ['100%', null, null, '90%'], // Increased width for larger screens
      pr: [0, null, 4]
     }}
    >
     <Reveal effect="fadeInDown" delay={0.1}>
      <Box sx={{ maxWidth: ['100%', '95%'], fontSize: [2, 3, 4], lineHeight: 1.5 }}>
       <ContentText content={titleContent} />
      </Box>
     </Reveal>
     <Reveal effect="fadeInDown" delay={0.2}>
      <Box sx={{ maxWidth: ['100%', '95%'], fontSize: [1, 2, 3], mt: 3 }}>
       <ContentText content={descriptionContent} />
      </Box>
     </Reveal>
    </Box>

    {/* Right Side Image */}
    <Box
     sx={{
      flexBasis: ['100%', null, null, '30%'], // Decreased width for larger screens
      position: 'relative',
      textAlign: 'center',
      mt: [4, null, null, 0],
     }}
    >
     {mainImageUrl ? (
      <img
       src={mainImageUrl}
       alt="Hero Image"
       style={{ maxWidth: '100%', height: 'auto', display: 'block' }}
      />
     ) : (
      <p>No image available</p>
     )}
    </Box>
   </Flex>
  </Container>
 );
};

export default WithDefaultContent(HeroBlock01);