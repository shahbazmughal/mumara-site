import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import SVG from 'react-inlinesvg'
import { Container, Flex, Box, css } from 'theme-ui'
import Reveal from '@solid-ui-components/Reveal'
import Divider from '@solid-ui-components/Divider'
import ContentText from '@solid-ui-components/ContentText'
import ContentButtons from '@solid-ui-components/ContentButtons'
import WithDefaultContent from '@solid-ui-blocks/WithDefaultContent'

const STRAPI_BASE_URL = 'https://strapi5-dev-jt.mumara.com';

const styles = {
  logo: {
    width: [100, 150],
    height: [50, 75],
  },
  container: {
    textAlign: 'center',
  },
  flex: {
    flexWrap: 'wrap',
    m: -3,
  },
  box: {
    flexGrow: 1,
    p: [1, 3],
  },
}

const normalizeUrl = (url) =>
  url?.startsWith('http') ? url : `${STRAPI_BASE_URL}${url}`;

const CompaniesBlock01 = () => {
  // Corrected GraphQL query
  const data = useStaticQuery(graphql`
    query {
      strapiClintlogo {
        logo1 { url }
        logo2 { url }
        logo3 { url }
        logo4 { url }
        logo5 { url }
      }
    }
  `);

  // Fetch the logos
  const logos = data.strapiClintlogo;

  const content = {
    collection: [
      { icon: { src: normalizeUrl(logos.logo1?.url) } },
      { icon: { src: normalizeUrl(logos.logo2?.url) } },
      { icon: { src: normalizeUrl(logos.logo3?.url) } },
      { icon: { src: normalizeUrl(logos.logo4?.url) } },
      { icon: { src: normalizeUrl(logos.logo5?.url) } },
    ],
  };

  return (
    <Container sx={styles.container}>
      {/* Assuming `text` should be dynamic or defined elsewhere */}
      <ContentText content={content.text} />
      {content.text && content.collection && <Divider />}
      <Flex sx={styles.flex}>
        {content.collection.map(({ icon }, index) => (
          <Box key={`item-${index}`} sx={styles.box}>
            <Reveal effect="fadeInGrow" delay={0.2 * (index + 2)}>
              {icon?.src ? (
                <SVG src={icon.src} css={css(styles.logo)} />
              ) : (
                <ContentText content={content.text?.[0]} variant="h6" mb="0" />
              )}
            </Reveal>
          </Box>
        ))}
      </Flex>
      {content.buttons && (
        <>
          <Divider space={3} />
          <ContentButtons content={content.buttons} />
        </>
      )}
    </Container>
  );
}

export default WithDefaultContent(CompaniesBlock01)
