import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { Container, Flex, Box, css } from 'theme-ui';
import Reveal from '@solid-ui-components/Reveal';
import Divider from '@solid-ui-components/Divider';
import Icon from '@solid-ui-components/ContentIcon';
import ContentContainer from '@solid-ui-components/ContentContainer';
import ContentText from '@solid-ui-components/ContentText';
import WithDefaultContent from '@solid-ui-blocks/WithDefaultContent';

const STRAPI_BASE_URL = 'https://strapi5-dev-jt.mumara.com';

const styles = {
  listItem: {
    flexBasis: [`1`, null, `1/2`],
    alignItems: `center`,
    justifyContent: `center`,
    p: [3, 4],
    ':nth-of-type(even)': {
      borderLeftStyle: `solid`,
      borderLeftColor: `rgba(113, 128, 150, 0.2)`,
      borderLeftWidth: [0, null, null, `sm`]
    },
    ':nth-last-of-type(2), :last-child': {
      borderTopStyle: `solid`,
      borderTopColor: `rgba(113, 128, 150, 0.2)`,
      borderTopWidth: [0, null, null, `sm`]
    }
  }
};

const FeaturesBlock04 = () => {
  const data = useStaticQuery(graphql`
    query {
      allStrapiWhychooseus {
        nodes {
          minuheading
          heading
          Advancedlogo { url }
          Advancedheading
          Advanceddescription
          Expertlogo { url }
          Expertheading
          Expertdescription
          Lifetimelogo { url }
          Lifetimeheading
          Lifetimedescription
          Creativelogo { url }
          Creativeheading
          Creativedescription
        }
      }
    }
  `);

  const build = data.allStrapiWhychooseus.nodes[1] || data.allStrapiWhychooseus.nodes[0];

  const normalizeUrl = (url) => {
    return url?.startsWith('http') ? url : `${STRAPI_BASE_URL}${url}`;
  };

  const textContent = [
    { text: build.minuheading, variant: 'h4', color: 'alpha' },
    { text: build.heading, variant: 'h2' },
  ];

  const collection = [
    {
      text: [
        { text: build.Advancedheading, variant: 'h5' },
        { text: build.Advanceddescription }
      ],
      icon: {
        src: normalizeUrl(build.Advancedlogo?.url),
        color: 'alpha',
        bg: '#d3e7fe'
      }
    },
    {
      text: [
        { text: build.Expertheading, variant: 'h5' },
        { text: build.Expertdescription }
      ],
      icon: {
        src: normalizeUrl(build.Expertlogo?.url),
        color: 'alpha',
        bg: '#fefad6'
      }
    },
    {
      text: [
        { text: build.Lifetimeheading, variant: 'h5' },
        { text: build.Lifetimedescription }
      ],
      icon: {
        src: normalizeUrl(build.Lifetimelogo?.url),
        color: 'alpha',
        bg: '#fee8d1'
      }
    },
    {
      text: [
        { text: build.Creativeheading, variant: 'h5' },
        { text: build.Creativedescription }
      ],
      icon: {
        src: normalizeUrl(build.Creativelogo?.url),
        color: 'alpha',
        bg: '#ebfdda'
      }
    }
  ];

  return (
    <Container>
      <Box sx={{ textAlign: 'center' }}>
        <ContentText content={textContent} />
      </Box>

      {collection && (
        <>
          <Divider />
          <ContentContainer content={build.container} as={Reveal} variant='cards.paper'>
            <Flex sx={{ flexWrap: 'wrap' }}>
              {collection.map(({ text, icon }, index) => (
                <Box key={`item-${index}`} css={css(styles.listItem)}>
                  {text?.[0] && (
                    <Flex sx={{ alignItems: 'center', mb: 3 }}>
                      <Icon content={icon} size='sm' mr='3' />
                      <ContentText content={text[0]} mb='0' />
                    </Flex>
                  )}
                  <Box ml={2}>
                    <ContentText content={text?.[1]} />
                  </Box>
                </Box>
              ))}
            </Flex>
          </ContentContainer>
        </>
      )}
    </Container>
  );
};

export default WithDefaultContent(FeaturesBlock04);
