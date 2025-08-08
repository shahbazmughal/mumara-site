import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { Container, Flex, Box } from 'theme-ui';
import ContentContainer from '@solid-ui-components/ContentContainer';
import Reveal from '@solid-ui-components/Reveal';
import Divider from '@solid-ui-components/Divider';
import ContentText from '@solid-ui-components/ContentText';
import Icon from '@solid-ui-components/ContentIcon';
import ContentButtons from '@solid-ui-components/ContentButtons';
import WithDefaultContent from '@solid-ui-blocks/WithDefaultContent';

// Strapi Base URL
const STRAPI_BASE_URL = 'https://strapi5-dev-jt.mumara.com';

const FeaturesBlock02 = () => {
  const data = useStaticQuery(graphql`
    query {
      strapiSaasv2Feature {
        Marketicon { url }
        Marketheading
        Marketdescription
        Strategyicon { url }
        Strategyheading
        Strategydescription
        Brandicon { url }
        Brandheading
        Branddescription
        Smarticon { url }
        Smartheading
        Smartdescription
      }
    }
  `);

  const strapiData = data?.strapiSaasv2Feature;

  // Build dynamic collection
  const collection = [
    {
      icon: {
        src: `${STRAPI_BASE_URL}${strapiData.Marketicon?.url}`,
        bg: '#fff2dd',
        color: 'white'
      },
      text: [
        { text: strapiData.Marketheading, variant: 'h4' },
        { text: strapiData.Marketdescription }
      ]
    },
    {
      icon: {
        src: `${STRAPI_BASE_URL}${strapiData.Strategyicon?.url}`,
        bg: '#fee9e3',
        color: 'white'
      },
      text: [
        { text: strapiData.Strategyheading, variant: 'h4' },
        { text: strapiData.Strategydescription }
      ]
    },
    {
      icon: {
        src: `${STRAPI_BASE_URL}${strapiData.Brandicon?.url}`,
        bg: '#e5fcf3',
        color: 'white'
      },
      text: [
        { text: strapiData.Brandheading, variant: 'h4' },
        { text: strapiData.Branddescription }
      ]
    },
    {
      icon: {
        src: `${STRAPI_BASE_URL}${strapiData.Smarticon?.url}`,
        bg: '#f5e7fe',
        color: 'white'
      },
      text: [
        { text: strapiData.Smartheading, variant: 'h4' },
        { text: strapiData.Smartdescription }
      ]
    }
  ];

  return (
    <Container sx={{ textAlign: `center` }}>
      <Reveal effect='fadeInUp'>
        {collection && (
          <>
            <Divider />
            <Flex sx={{ flexWrap: `wrap`, m: -3 }}>
              {collection.map(({ text, icon, buttons, container }, index) => (
                <Box
                  key={`item-${index}`}
                  sx={{
                    flexBasis: [`1`, null, `1/2`],
                    textAlign: `left`,
                    p: 3
                  }}
                >
                  <ContentContainer content={container} variant='cards.paper-lg'>
                    {text?.[0] && (
                      <Flex sx={{ alignItems: `center`, mb: 4 }}>
                        <Icon content={icon} size='sm' mr='3' />
                        <ContentText content={text[0]} mb='0' />
                      </Flex>
                    )}
                    <ContentText content={text?.[1]} />
                    {buttons && (
                      <>
                        <Divider space={2} />
                        <ContentButtons content={buttons} />
                      </>
                    )}
                  </ContentContainer>
                </Box>
              ))}
            </Flex>
          </>
        )}
      </Reveal>
    </Container>
  );
};

export default WithDefaultContent(FeaturesBlock02);
