import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { Container, Flex, Box, css } from 'theme-ui';
import Reveal from '@solid-ui-components/Reveal';
import Divider from '@solid-ui-components/Divider';
import ContentText from '@solid-ui-components/ContentText';
import ContentImages from '@solid-ui-components/ContentImages';
import ContentContainer from '@solid-ui-components/ContentContainer';
import { ImQuotesRight } from 'react-icons/im';
import { AiFillStar } from 'react-icons/ai';
import WithDefaultContent from '@solid-ui-blocks/WithDefaultContent';

const STRAPI_BASE_URL = 'https://strapi5-dev-jt.mumara.com';

const styles = {
  avatar: {
    size: 120,
    display: `block`,
    bg: `omegaLighter`,
    borderTopColor: `omegaLighter`,
    borderTopWidth: `lg`,
    borderTopStyle: `solid`,
    borderRadius: `full`,
    boxSizing: `content-box`,
    mx: `auto`,
    mt: -90,
    mb: 3
  }
};

const normalizeUrl = (url) =>
  url?.startsWith('http') ? url : `${STRAPI_BASE_URL}${url}`;

const TestimonialsBlock01 = () => {
  const data = useStaticQuery(graphql`
    query {
      strapiTestimonial {
        heading
        description

        johnheading
        Johnpost
        john { url }
        Johndescription

        Janeheading
        Janepost
        Jane { url }
        Janedescription

        Sarahheading
        Sarahpost
        Sarah { url }
        Sarahdescription

        Steveheading
        Stevepost
        Steve { url }
        Stevedescription
        
        Florrieheading
        Florriepost
        Florrie { url }
        Florriedescripton
      }
    }
  `);

  const d = data.strapiTestimonial;

  const content = {
    text: [
      { text: d.description, variant: 'h4', color: 'omegaDark' },
      { text: d.heading, variant: 'h2' }
    ],
    collection: [
      {
        text: [
          { text: d.johnheading, variant: 'h5' },
          { text: d.Johnpost, variant: 'small' },
          { text: d.Johndescription }
        ],
        avatar: {
          src: normalizeUrl(d.john?.url),
          alt: d.johnheading
        }
      },
      {
        text: [
          { text: d.Janeheading, variant: 'h5' },
          { text: d.Janepost, variant: 'small' },
          { text: d.Janedescription }
        ],
        avatar: {
          src: normalizeUrl(d.Jane?.url),
          alt: d.Janeheading
        }
      },
      {
        text: [
          { text: d.Sarahheading, variant: 'h5' },
          { text: d.Sarahpost, variant: 'small' },
          { text: d.Sarahdescription }
        ],
        avatar: {
          src: normalizeUrl(d.Sarah?.url),
          alt: d.Sarahheading
        }
      },
      {
        text: [
          { text: d.Steveheading, variant: 'h5' },
          { text: d.Stevepost, variant: 'small' },
          { text: d.Stevedescription }
        ],
        avatar: {
          src: normalizeUrl(d.Steve?.url),
          alt: d.Steveheading
        }
      },
      {
        text: [
          { text: d.Florrieheading, variant: 'h5' },
          { text: d.Florriepost, variant: 'small' },
          { text: d.Florriedescripton }
        ],
        avatar: {
          src: normalizeUrl(d.Florrie?.url),
          alt: d.Florrieheading
        }
      }
    ]
  };

  return (
    <Container>
      <Box sx={{ textAlign: `center` }}>
        <ContentText content={content.text} />
      </Box>
      <Divider />
      <Divider />
      <Flex sx={{ mx: -3, flexWrap: `wrap` }}>
        {content.collection.map(({ container, avatar, text }, index) => (
          <Box
            key={`item-${index}`}
            sx={{ flexBasis: [`1`, null, `1/2`, `1/3`], flexGrow: 1, p: 3 }}
          >
            <Reveal effect='fadeInLeft' delay={0.25 * (index + 2)}>
              <ContentContainer
                content={container}
                variant='cards.paper'
                sx={{ textAlign: `center` }}
              >
                <ContentImages
                  content={{ images: [avatar] }}
                  sx={styles.avatar}
                  objectPosition='top center'
                  imageEffect='fadeIn'
                />
                <ImQuotesRight css={css({ size: `icon.xs`, color: `alpha` })} />
                <ContentText content={text} />
                {Array.from({ length: 5 }, (_, i) => (
                  <AiFillStar key={`item-${i}`} css={css({ color: `beta` })} />
                ))}
              </ContentContainer>
            </Reveal>
          </Box>
        ))}
      </Flex>
    </Container>
  );
};

export default WithDefaultContent(TestimonialsBlock01);
