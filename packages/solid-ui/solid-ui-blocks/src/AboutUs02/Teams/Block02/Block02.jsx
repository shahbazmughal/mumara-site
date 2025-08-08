import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { Container, Flex, Box, css } from 'theme-ui';
import Reveal from '@solid-ui-components/Reveal';
import Divider from '@solid-ui-components/Divider';
import ContentText from '@solid-ui-components/ContentText';
import ContentImages from '@solid-ui-components/ContentImages';
import ContentContainer from '@solid-ui-components/ContentContainer';
import WithDefaultContent from '@solid-ui-blocks/WithDefaultContent';

const STRAPI_BASE_URL = 'https://strapi5-dev-jt.mumara.com';

const normalizeUrl = (url) =>
  url?.startsWith('http') ? url : `${STRAPI_BASE_URL}${url}`;

const styles = {
  avatar: {
    height: 230,
    width: '100%',
    bg: `omegaLight`,
    borderTopColor: `omegaLight`,
    borderTopWidth: `xxl`,
    borderTopStyle: `solid`,
    borderBottomColor: `beta`,
    borderBottomWidth: `md`,
    borderBottomStyle: `solid`,
    boxSizing: `border-box`,
    borderRadius: `top`,
    mx: `auto`,
    overflow: 'hidden',
    img: {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      objectPosition: `top center !important`,
      display: 'block',
    }
  }
};


const TeamsBlock02 = () => {
  const data = useStaticQuery(graphql`
    query {
      strapiAboutusoneteam {
        miniheading
        heading
        John { url }
        Johnname
        Johnpost
        Johnjoin
        Jane { url }
        Janename
        Janepost
        Janejoin
        Sarah { url }
        Sarahname
        Sarahpost
        Sarahjoin
        Steve { url }
        Stevename
        Stevepost
        Stevejoin
        Florrie { url }
        Florriename
        Florriepost
        Florriejoin
      }
    }
  `);

  const entry = data?.strapiAboutusoneteam;

  if (!entry) {
    console.warn('TeamsBlock02: No data found in Strapi.');
    return null;
  }

  const text = [
    { type: 'heading', text: entry?.miniheading, as: 'h2', color: '#6366f1' },
    { type: 'heading', text: entry?.heading, as: 'h1', color: '#2d3748' }
  ].filter(Boolean);

  const teamMembers = [
    {
      name: entry?.Florriename,
      post: entry?.Florriepost,
      join: entry?.Florriejoin,
      url: entry?.Florrie?.url
    },
    {
      name: entry?.Janename,
      post: entry?.Janepost,
      join: entry?.Janejoin,
      url: entry?.Jane?.url
    },
    {
      name: entry?.Sarahname,
      post: entry?.Sarahpost,
      join: entry?.Sarahjoin,
      url: entry?.Sarah?.url
    },
    {
      name: entry?.Stevename,
      post: entry?.Stevepost,
      join: entry?.Stevejoin,
      url: entry?.Steve?.url
    },
    {
      name: entry?.Johnname,
      post: entry?.Johnpost,
      join: entry?.Johnjoin,
      url: entry?.John?.url
    }
  ].filter(member => member?.name && member?.url);

  const collection = teamMembers.map(member => ({
    avatar: {
      src: normalizeUrl(member.url),
      alt: member.name
    },
    text: [
      { type: 'heading', text: member.name, as: 'h4' },
      { type: 'text', text: member.post },
      { type: 'text', text: member.join }
    ]
  }));

  return (
    <Container>
      <Box sx={{ textAlign: `center`, maxWidth: `100%`, mx: `auto`, mb: 4 }}>
        <ContentText content={text} />
      </Box>
      {text && collection && <Divider />}
      <Flex sx={{ m: -3, flexWrap: `wrap`, justifyContent: `center` }}>
        {collection?.map(({ avatar, text }, index) => (
          <Box
            key={`item-${index}`}
            sx={{
              flexBasis: [`1/2`, null, `1/3`, `1/5`],
              flexGrow: 1,
              maxWidth: 240,
              p: 3
            }}
          >
            <Reveal
              effect='fadeInLeft'
              delay={0.25 * (index + 2)}
              css={css({ height: `100%` })}
            >
              <ContentContainer
                variant='cards.primary'
                sx={{ textAlign: `center`, height: `100%`, p: 2 }}
              >
                <ContentImages
                  content={{ images: [avatar] }}
                  sx={styles.avatar}
                  imageEffect='fadeIn'
                />
                <Flex sx={{ flexDirection: `column` }} p='3' px='2'>
                  <ContentText content={text} />
                </Flex>
              </ContentContainer>
            </Reveal>
          </Box>
        ))}
      </Flex>
    </Container>
  );
};

export default WithDefaultContent(TeamsBlock02);
