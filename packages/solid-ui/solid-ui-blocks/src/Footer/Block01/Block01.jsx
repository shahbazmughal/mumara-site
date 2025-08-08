import React from 'react'
import { useStaticQuery, graphql, Link as GLink } from 'gatsby'
import { Container, Box, Flex, Text } from 'theme-ui'
import ContentText from '@solid-ui-components/ContentText'
import ContentImages from '@solid-ui-components/ContentImages'
import PoweredByGatsby from '@solid-ui-components/PoweredByGatsby'
import WithDefaultContent from '@solid-ui-blocks/WithDefaultContent'

const styles = {
  wrapper: {
    position: `relative`,
    bg: `footerBg`
  },
  footer: {
    flexDirection: [`column-reverse`, `row`],
    justifyContent: `space-between`,
    alignItems: [`center`, `flex-start`],
    py: 5
  }
}

const STRAPI_BASE_URL = 'https://strapi5-dev-jt.mumara.com'
const normalizeUrl = (url) =>
  url?.startsWith('http') ? url : `${STRAPI_BASE_URL}${url}`

const FooterBlock01 = () => {
  const data = useStaticQuery(graphql`
    query {
      strapiFooter {
        Reversed
        logo { url }
        QuickLinks {
          Home
          Blog
          Contact
        }
        LegalStuff {
          privicy
          Cookie
          Terms
        }
        SocialMedia {
          Github
          Twitter
          Instagram
        }
        githublogo { url }
        twitterlogo { url }
        instagramlogo { url }
      }
    }
  `)

  const footer = data.strapiFooter

  const content = {
    images: [
      {
        src: normalizeUrl(footer.logo?.url),
        alt: 'Logo'
      }
    ],
    collection: [
      {
        text: [{ text: 'Quick Links' }],
        buttons: [
          { label: 'Home', link: footer.QuickLinks?.Home || '/' },
          { label: 'Blog', link: footer.QuickLinks?.Blog || '/blog' },
          { label: 'Contact', link: footer.QuickLinks?.Contact || '/contact' }
        ]
      },
      {
        text: [{ text: 'Legal Stuff' }],
        buttons: [
          { label: 'Privacy Policy', link: footer.LegalStuff?.privicy },
          { label: 'Cookie Policy', link: footer.LegalStuff?.Cookie },
          { label: 'Terms of Use', link: footer.LegalStuff?.Terms }
        ]
      },
      {
        text: [{ text: 'Social Media' }],
        buttons: [
          {
            label: 'Github',
            link: footer.SocialMedia?.Github,
            icon: { src: normalizeUrl(footer.githublogo?.url) }
          },
          {
            label: 'Twitter',
            link: footer.SocialMedia?.Twitter,
            icon: { src: normalizeUrl(footer.twitterlogo?.url) }
          },
          {
            label: 'Instagram',
            link: footer.SocialMedia?.Instagram,
            icon: { src: normalizeUrl(footer.instagramlogo?.url) }
          }
        ]
      }
    ]
  }

  return (
    <Box sx={styles.wrapper}>
      <Container px='4'>
        <Flex sx={styles.footer}>
          <Box sx={{ minWidth: 200 }}>
            <Box pb='1' mb='2' mt={[4, 0]}>
              <GLink to='/'>
                <ContentImages content={{ images: content.images }} imageEffect='fadeIn' />
              </GLink>
            </Box>
            <Box pt='2' mb={[2, 4]}>
              © {new Date().getFullYear()}, All Rights Reserved.
            </Box>
            <Box>
              <PoweredByGatsby />
            </Box>
          </Box>

          {content.collection.map(({ text, buttons }, index) => (
            <Box key={`section-${index}`} sx={{ minWidth: 150 }}>
              {text?.[0]?.text && (
                <ContentText
                  content={text?.[0]}
                  variant="h5"
                  sx={{ mb: 3 }}
                />
              )}
              {buttons?.map((button, idx) => (
                <Box
                  key={`btn-${idx}`}
                  as="a"
                  href={button.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 2,
                    mb: 2,
                    textDecoration: 'none',
                    color: 'inherit'
                  }}
                >
                  {button.icon?.src && (
                    <img src={button.icon.src} alt={button.label} width={24} />
                  )}
                  <Text variant={button.variant || 'default'}>
                    {button.label}
                  </Text>
                </Box>
              ))}
            </Box>
          ))}
        </Flex>
      </Container>
    </Box>
  )
}

FooterBlock01.defaultProps = {
  menuJustify: `flex-end`
}

export default WithDefaultContent(FooterBlock01)
