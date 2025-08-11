import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { Container, Flex, Box, Heading, css } from 'theme-ui';
import Reveal from '@solid-ui-components/Reveal';
import Divider from '@solid-ui-components/Divider';
import ContentText from '@solid-ui-components/ContentText';
import ContentButtons from '@solid-ui-components/ContentButtons';

const styles = {
  listItem: {
    alignItems: `stretch`,
    justifyContent: `flex-start`
  },
  line: {
    position: `absolute`,
    bottom: `10px`,
    left: `50%`,
    width: `1px`,
    height: t => `calc(100% - ${t.sizes.icon.md + 20}px)`,
    transform: `translateX(-50%)`,
    zIndex: 1,
    bg: `omega`
  },
  number: {
    color: `white`,
    fontWeight: `body`,
    borderRadius: `full`,
    bg: `alpha`,
    size: `icon.md`,
    textAlign: `center`,
    p: 2,
    mb: 0
  }
};

const FeaturesBlock03 = () => {
  const data = useStaticQuery(graphql`
    query {
      strapiProcess {
        heading
        description
        button
        Marketheading
        Marketdescription
        Strategyheading
        Strategydescription
        Brandheading
        Branddescription
        Smartheading
        Smartdescription
      }
    }
  `);

  const content = {
    text: [
      { type: 'heading', text: data.strapiProcess.heading, as: 'h1', color: '#2d3748' },
      { type: 'text', text: data.strapiProcess.description }
    ],
    buttons: data.strapiProcess.button
      ? [{ text: 'Schedule a Live Demo', variant: 'primary', link: '#' }]
      : [],
    collection: [
      {
        text: [
          { type: 'heading', text: data.strapiProcess.Marketheading, as: 'h2', color: '#2d3748' },
          { type: 'text', text: data.strapiProcess.Marketdescription }
        ]
      },
      {
        text: [
          { type: 'heading', text: data.strapiProcess.Strategyheading, as: 'h2', color: '#2d3748' },
          { type: 'text', text: data.strapiProcess.Strategydescription }
        ]
      },
      {
        text: [
          { type: 'heading', text: data.strapiProcess.Brandheading, as: 'h2', color: '#2d3748' },
          { type: 'text', text: data.strapiProcess.Branddescription }
        ]
      },
      {
        text: [
          { type: 'heading', text: data.strapiProcess.Smartheading, as: 'h2', color: '#2d3748' },
          { type: 'text', text: data.strapiProcess.Smartdescription }
        ]
      }
    ]
  };

  return (
    <Container>
      <Flex sx={{ flexDirection: [`column`, null, `row`], m: [0, -4] }}>
        {/* Left Text Column */}
        <Box
          sx={{
            flexBasis: [`1`, `1/2`],
            alignSelf: `center`,
            mx: 4,
            mb: [5, null, 0]
          }}
        >
          <Reveal effect='fadeInDown'>
            <Box sx={{ textAlign: `left` }}>
              <ContentText content={content.text} />
            </Box>
            {content.buttons && (
              <>
                <Divider space={3} />
                <ContentButtons
                  content={content.buttons}
                  sx={{
                    '& a': {
                      backgroundColor:
                        'linear-gradient(to right, var(--theme-ui-colors-beta, #a855f7), var(--theme-ui-colors-alpha, #6366f1), var(--theme-ui-colors-beta, #a855f7))',
                      color: 'white',
                      border: 'none',
                    },
                  }}
                />
              </>
            )}

          </Reveal>
        </Box>

        {/* Right Steps Column */}
        {content.collection && (
          <Box
            sx={{
              flexBasis: [`1`, `1/2`],
              alignSelf: `start`,
              mx: 4
            }}
          >
            <Flex sx={{ flexWrap: `wrap` }}>
              {content.collection.map(({ text }, index) => (
                <Reveal
                  key={`item-${index}`}
                  effect='fadeInDown'
                  delay={0.2 * (index + 1)}
                  css={css({ flexBasis: [`1`, null, null, `1`] })}
                >
                  <Flex sx={styles.listItem}>
                    <Box sx={{ position: `relative`, flexShrink: 0, mr: 4 }}>
                      <Heading variant='h4' as='div' sx={styles.number}>
                        {index + 1}
                      </Heading>
                      {index + 1 < content.collection.length && <Box sx={styles.line} />}
                    </Box>
                    <Box>
                      <ContentText content={text} />
                      {index + 1 < content.collection.length && <Divider space={3} />}
                    </Box>
                  </Flex>
                </Reveal>
              ))}
            </Flex>
          </Box>
        )}
      </Flex>
    </Container>
  );
};

export default FeaturesBlock03;
