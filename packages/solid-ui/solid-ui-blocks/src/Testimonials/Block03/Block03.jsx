import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { Container, Flex, Box, css } from 'theme-ui';
import { ImQuotesRight } from 'react-icons/im';
import { AiFillStar } from 'react-icons/ai';
import Reveal from '@solid-ui-components/Reveal';
import Divider from '@solid-ui-components/Divider';
import Tabs4 from '@solid-ui-components/Tabs4';
import ContentText from '@solid-ui-components/ContentText';
import ContentImages from '@solid-ui-components/ContentImages';
import ContentContainer from '@solid-ui-components/ContentContainer';
import WithDefaultContent from '@solid-ui-blocks/WithDefaultContent';
import ContentButtons from '@solid-ui-components/ContentButtons';

const STRAPI_BASE_URL = 'https://strapi5-dev-jt.mumara.com';

const styles = {
  avatar: {
    bg: `omegaLighter`,
    borderTopColor: `omegaLighter`,
    borderTopStyle: `solid`,
    borderRadius: `lg`,
    boxSizing: `content-box`,
    verticalAlign: `baseline`
  }
};

const normalizeUrl = (url) =>
  url?.startsWith('http') ? url : `${STRAPI_BASE_URL}${url}`;

const TestimonialsBlock03 = ({ reverse }) => {
  const data = useStaticQuery(graphql`
    query {
      allStrapiTestimonial {
        nodes {
          heading
          description
          john { url }
          johnheading
          Johnpost
          Johndescription
          Jane { url }
          Janeheading
          Janepost
          Janedescription
          Sarah { url }
          Sarahheading
          Sarahpost
          Sarahdescription
          Steve { url }
          Steveheading
          Stevepost
          Stevedescription
          Florrie { url }
          Florrieheading
          Florriepost
          Florriedescripton
          button
        }
      }
    }
  `);

  const testimonial = data.allStrapiTestimonial.nodes[1];

  const content = {
    text: [{ text: testimonial.heading, variant: 'h3', mb: 3 },
      { text: testimonial.description, variant: 'p', mb: 3, 
        sx: {
          fontSize: '1.25rem', 
          whiteSpace: 'pre-line',
          lineHeight: 1.5
        }
      }
    ],
    buttons: testimonial.button
      ? [{ text: 'Get Started Now', variant: 'primary', link: '#' }]
      : [],
    collection: [
      {
        avatar: { src: normalizeUrl(testimonial.john?.url) },
        text: [
          { text: testimonial.johnheading, variant: 'h5' },
          { text: testimonial.Johnpost, variant: 'h4', color: '#718096' },
          { text: testimonial.Johndescription, variant: 'paragraph' }
        ]
      },
      {
        avatar: { src: normalizeUrl(testimonial.Jane?.url) },
        text: [
          { text: testimonial.Janeheading, variant: 'h5' },
          { text: testimonial.Janepost, variant: 'h4', color: '#718096' },
          { text: testimonial.Janedescription, variant: 'paragraph' }
        ]
      },
      {
        avatar: { src: normalizeUrl(testimonial.Sarah?.url) },
        text: [
          { text: testimonial.Sarahheading, variant: 'h5' },
          { text: testimonial.Sarahpost, variant: 'h4', color: '#718096' },
          { text: testimonial.Sarahdescription, variant: 'paragraph' }
        ]
      },
      {
        avatar: { src: normalizeUrl(testimonial.Steve?.url) },
        text: [
          { text: testimonial.Steveheading, variant: 'h5' },
          { text: testimonial.Stevepost, variant: 'h4', color: '#718096' },
          { text: testimonial.Stevedescription, variant: 'paragraph' }
        ]
      },
      {
        avatar: { src: normalizeUrl(testimonial.Florrie?.url) },
        text: [
          { text: testimonial.Florrieheading, variant: 'h5' },
          { text: testimonial.Florriepost, variant: 'h4', color: '#718096' },
          { text: testimonial.Florriedescripton, variant: 'paragraph' }
        ]
      }
    ]
  };

  return (
    <Container>
      <Flex
        sx={{
          alignItems: `flex-start`,
          flexDirection: [
            reverse ? `column-reverse` : `column`,
            null,
            null,
            reverse ? `row-reverse` : `row`
          ],
          mx: [null, null, null, -4]
        }}
      >
        <Box sx={{ flexBasis: `1/2`, mx: [null, null, null, 4], [reverse ? 'mt' : 'mb']: [5, null, null, 0] }}>
          <Tabs4 variant='dots' position='bottom' space={3} autoplay>
            {content.collection.map(({ avatar, text }, index) => (
              <ContentContainer
                content={{}}
                variant='cards.paper'
                key={`item-${index}`}
                sx={{ position: `relative` }}
              >
                <Flex sx={{ alignItems: `center`, position: `relative`, flexWrap: `wrap`, zIndex: 1 }}>
                  <Box sx={{ width: 150 }}>
                    <ContentImages content={{ images: [avatar] }} sx={styles.avatar} imageEffect='fadeInRotate' />
                  </Box>
                  <Box sx={{ flex: [`100%`, 1], ml: [0, 4] }}>
                    <Reveal effect='fadeInUp'>
                      <ContentText content={text} />
                      {Array.from({ length: 5 }, (_, i) => (
                        <Reveal key={`star-${i}`} effect='fadeInRotate' delay={0.2 * (i + 1)} css={css({ display: `inline-block`, mt: 1 })}>
                          <AiFillStar css={css({ color: `#117bff`, size: `icon.xs` })} />
                        </Reveal>
                      ))}
                    </Reveal>
                  </Box>
                </Flex>
                <ImQuotesRight
                  css={css({
                    size: `30%`,
                    color: `omegaLighter`,
                    position: `absolute`,
                    transform: `translate(0, -20%)`,
                    bottom: 0,
                    right: 0
                  })}
                />
              </ContentContainer>
            ))}
          </Tabs4>
        </Box>

        <Box sx={{ flexBasis: `1/3`, mx: [null, null, null, 4], textAlign: [`center`, null, null, `left`], fontSize: 'xs' }}>
          <Reveal effect={reverse ? 'fadeInLeft' : 'fadeInRight'}>
            <ContentText content={content.text} />
          </Reveal>

          <Flex sx={{ mt: 4 }}>
            {content.buttons && (
                <>
                  <Divider space={3} />
                  <ContentButtons
                    content={content.buttons}

                  />
                </>
              )}
          </Flex>

          <Divider space='5' />
        </Box>
      </Flex>
    </Container>
  );
};

export default WithDefaultContent(TestimonialsBlock03);
