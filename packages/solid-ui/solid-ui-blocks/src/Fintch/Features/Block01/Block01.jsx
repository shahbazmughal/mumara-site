import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { Container, Flex, Box, css } from 'theme-ui';
import Reveal from '@solid-ui-components/Reveal';
import Divider from '@solid-ui-components/Divider';
import ContentText from '@solid-ui-components/ContentText';
import ListItem from '@solid-ui-components/ListItem';
import WithDefaultContent from '@solid-ui-blocks/WithDefaultContent';

const STRAPI_BASE_URL = 'https://strapi5-dev-jt.mumara.com';

const normalize = (url) =>
  url?.startsWith('http') ? url : `${STRAPI_BASE_URL}${url}`;

const styles = {
  listItem: {
    flexBasis: ['100%', '1/2', null, '1/3'],
    alignItems: 'center',
    justifyContent: 'left',
    p: 3,
  },
};

const FeaturesBlock01 = () => {
  const { strapiFintchwhychooseus } = useStaticQuery(graphql`
    query {
      strapiFintchwhychooseus {
        miniheading
        heading
        Advancedlogo { url }
        advancedheading
        advanceddescription
        Expertlogo { url }
        Expertheading
        Expertdescription
        Lifetimelogo { url }
        Lifetimeheading
        Lifetimedescription
        Creativelogo { url }
        Creativeheading
        Creativedescription
        Agencylogo { url }
        Agencyheading
        Agencydescription
        Unlimitedlogo { url }
        Unlimitedheading
        Unlimiteddescription
      }
    }
  `);

  const data = strapiFintchwhychooseus;

  const text = [
  {
    type: 'subheading',
    text: data.miniheading,
    as: 'h3',
    color: '#a855f7'
  },
  {
    type: 'heading',
    text: data.heading,
    as: 'h1',
    color: 'white'
  }
];


  const collection = [
    {
      icon: { src: normalize(data.Advancedlogo?.url) },
      text: [
        { text: data.advancedheading, as:'h2', color:'white'},
        { text: data.advanceddescription },
      ],
    },
    {
      icon: { src: normalize(data.Expertlogo?.url) },
      text: [
        { text: data.Expertheading, as:'h2' , color:'white'},
        { text: data.Expertdescription },
      ],
    },
    {
      icon: { src: normalize(data.Lifetimelogo?.url) },
      text: [
        { text: data.Lifetimeheading , as:'h2', color:'white'},
        { text: data.Lifetimedescription },
      ],
    },
    {
      icon: { src: normalize(data.Creativelogo?.url) },
      text: [
        { text: data.Creativeheading, as:'h2' , color:'white'},
        { text: data.Creativedescription },
      ],
    },
    {
      icon: { src: normalize(data.Agencylogo?.url) },
      text: [
        { text: data.Agencyheading, as:'h2', color:'white' },
        { text: data.Agencydescription },
      ],
    },
    {
      icon: { src: normalize(data.Unlimitedlogo?.url) },
      text: [
        { text: data.Unlimitedheading, as:'h2', color:'white' },
        { text: data.Unlimiteddescription },
      ],
    },
  ];

  return (
    <Container as={Reveal}>
      <Box sx={{ textAlign: 'center' }}>
        <ContentText content={text} />
      </Box>

      <Divider />

      <Flex sx={{ flexWrap: 'wrap', mx: -3 }}>
        {collection.map((item, index) => (
          <Reveal
            key={index}
            effect="fadeInGrow"
            delay={0.15 * (index + 1)}
            css={css(styles.listItem)}
          >
            <ListItem {...item} iconProps={{ size: 'md' }} center />
          </Reveal>
        ))}
      </Flex>
    </Container>
  );
};

export default WithDefaultContent(FeaturesBlock01);
