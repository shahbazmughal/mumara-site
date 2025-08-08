import React, { useState } from 'react'
import { graphql, useStaticQuery, Link as GLink } from 'gatsby';
import Sticky from 'react-sticky-el'
import { Container, Box, Flex, Button, css } from 'theme-ui'
import Reveal from '@solid-ui-components/Reveal'
import Drawer from '@solid-ui-components/Drawer'
import ContentImages from '@solid-ui-components/ContentImages'
import WithDefaultContent from '@solid-ui-blocks/WithDefaultContent'

const normalize = url =>
  url?.startsWith('http') ? url : `https://strapi5-dev-jt.mumara.com${url}`

const HeaderBlock01 = () => {
  const [openMenu, setOpenMenu] = useState(null)

  const { strapiHeader: h } = useStaticQuery(graphql`
    query {
      strapiHeader {
        logo { url }
        LandingPage {
          Heading
          software
          Softwarev2
          fintech
          consulting
          mobile
          marketing
        }
        softwarelogo { url }
        softwarev2logo { url }
        fintchlogo { url }
        consultinglogo { url }
        mobilelogo { url }
        marketinglogo { url }

        Pages {
          title
          minititle
          landingsoftware
          landingsoftwarev2
          landingfintech
          landingconsulting
          landingmobile
          landingmarketing
        }

        landinglogo { url }

        Pricing {
          Pricingtitle
          pricing01
          pricing02
          pricing03
          servicestitle
          services01
          services02
          services03
          Abouttitle
          About01
          About02
        }

        Pricinglogo { url }
        Serviceslogo { url }
        Aboutlogo { url }

        Modals {
          Modalstitle
          Register
          Contact
          Advertisement
        }

        Registerlogo { url }
        contactlogo { url }
        Advertisementlogo { url }
      }
    }
  `)

  const content = {
    images: [
      { src: normalize(h.logo?.url), alt: h.LandingPage?.Heading || 'Logo' }
    ],
    collection: [
      {
        label: h.LandingPage?.Heading || 'Landing Pages',
        buttons: [
          { text: h.LandingPage?.software, type: 'PAGE', link: '/homepage/saas', icon: { src: normalize(h.softwarelogo?.url) } },
          { text: h.LandingPage?.Softwarev2, type: 'PAGE', link: '/homepage/saas-v2', icon: { src: normalize(h.softwarev2logo?.url) } },
          { text: h.LandingPage?.fintech, type: 'PAGE', link: '/homepage/fintech', icon: { src: normalize(h.fintchlogo?.url) } },
          { text: h.LandingPage?.consulting, type: 'PAGE', link: '/homepage/consulting', icon: { src: normalize(h.consultinglogo?.url) } },
          { text: h.LandingPage?.mobile, type: 'PAGE', link: '/homepage/app', icon: { src: normalize(h.mobilelogo?.url) } },
          { text: h.LandingPage?.marketing, type: 'PAGE', link: '/', icon: { src: normalize(h.marketinglogo?.url) } }
        ]
      },
      {
        label: h.Pages?.title,
        buttons: [
        ]
      },
      {
        label: h.Modals?.Modalstitle || 'Modals',
        buttons: [
          { text: 'Register/Login', type: 'MODAL', link: '#', icon: { src: normalize(h.Registerlogo?.url) } },
          { text: 'Contact Form', type: 'MODAL', link: '#', icon: { src: normalize(h.contactlogo?.url) } },
          { text: 'Advertisement', type: 'MODAL', link: '#', icon: { src: normalize(h.Advertisementlogo?.url) } }
        ]
      },
      {
        buttons: [
          { text: 'Contact Us', type: 'PAGE', link: '#', variant: 'cta' }
        ]
      }
    ]
  }

  return (
    <Sticky enabled stickyClassName="nav-sticky" css={css({
      position: 'relative',
      zIndex: 10,
      '.nav-container': { position: 'fixed', bg: 'headerBg', py: 3 },
      '.nav-sticky .nav-container': { bg: 'headerActiveBg', boxShadow: '0 0 25px rgba(0,0,0,0.1)' }
    })}>
      <Container variant="full" className="nav-container">
        <Container >
          <Flex sx={{ justifyContent: 'space-between', alignItem: 'center' }}>
            <Box sx={{ flexShrink: 0, display: 'flex', alignItem: 'center', py: 2 }}>
              <ContentImages content={{ images: content.images }} imageEffect="fadeIn" />
            </Box>


            <Box sx={{ display: ['none', null, 'block'], flexGrow: 1, alignItems: 'center' }}>
              <Reveal effect="fadeInDown">
                <Flex sx={{ justifyContent: 'space-between', alignItems: 'center' }}>
                  <Flex as="ul" sx={{ alignItems: 'center', gap: 4, m: 0, p: 0, ml: '50px' }}>
                    <Box as="li" sx={{ listStyle: 'none' }}>
                      <GLink to="/" style={{ textDecoration: 'none' }}>
                        <Box
                          as="span"
                          sx={{
                            fontSize: '1.05rem',
                            fontWeight: 700,
                            color: 'white',
                            '.nav-sticky &': { color: '#2d3748' },
                            px: '0.8rem',
                            py: 3,
                            py: '0.5rem',
                            display: 'flex',
                            alignItems: 'center',
                            cursor: 'pointer',
                            whiteSpace: 'nowrap'
                          }}
                        >
                          {h.Home || 'Home'}
                        </Box>
                      </GLink>
                    </Box>

                    {/* Navigation Dropdowns */}
                    {content.collection.map((section, i) => (
                      <Box
                        key={i}
                        sx={{ position: 'relative' }}
                        onMouseEnter={() => setOpenMenu(i)}
                        onMouseLeave={() => setOpenMenu(null)}
                      >
                        {section.label && (
                          <Box
                            sx={{
                              fontWeight: 'bold',
                              fontSize: 2,
                              cursor: 'default',
                              py: 3,
                              display: 'inline-flex',
                              alignItems: 'center',
                              color: 'white',
                              gap: '0.25rem',
                              '.nav-sticky &': { color: '#2d3748' }
                            }}
                          >
                            {section.label}
                            <span>
                              <svg
                                stroke="currentColor"
                                fill="currentColor"
                                strokeWidth="0"
                                viewBox="0 0 24 24"
                                height="1.5em"
                                width="1.5em"
                                xmlns="http://www.w3.org/2000/svg"
                                style={{ display: 'block' }}
                              >
                                <path d="M16.293 9.293 12 13.586 7.707 9.293l-1.414 1.414L12 16.414l5.707-5.707z"></path>
                              </svg>
                            </span>
                          </Box>
                        )}

                        {openMenu === i && section.buttons && section.label && (
                          section.label === (h.Pages?.title || 'Pages') ? (
                            <Box
                              sx={{
                                position: 'absolute',
                                top: '100%',
                                right: '-70px',
                                mt: '-5px',
                                bg: 'white',
                                border: '1px solid #eee',
                                boxShadow: '0 4px 8px rgba(0,0,0,0.05)',
                                minWidth: '550px',
                                zIndex: 10,
                                borderRadius: '12px',
                                display: 'flex',
                                flexDirection: 'column',
                                gap: 3,
                              }}
                            >

                              <Box sx={{ bg: 'white', p: 2, borderRadius: '8px' }}>
                                <Box sx={{ fontWeight: 'bold', mb: 2, fontSize: 2, color: 'text', px: '25px', pt: 2  }}>
                                  {h.LandingPage?.Heading || 'LANDING PAGES'}
                                </Box>
                                <Box
                                  sx={{
                                    display: 'grid',
                                    gridTemplateColumns: 'repeat(3, 1fr)',
                                    gap: 2,
                                    px: 3
                                  }}
                                >
                                  {[
                                    { text: h.LandingPage?.software, link: '/homepage/saas', icon: h.landinglogo?.url },
                                    { text: h.LandingPage?.Softwarev2, link: '/homepage/saas-v2', icon: h.landinglogo?.url },
                                    { text: h.LandingPage?.fintech, link: '/homepage/fintech', icon: h.landinglogo?.url },
                                    { text: h.LandingPage?.consulting, link: '/', icon: h.landinglogo?.url },
                                    { text: h.LandingPage?.mobile, link: '/homepage/app', icon: h.landinglogo?.url },
                                    { text: h.LandingPage?.marketing, link: '/homepage/marketing', icon: h.landinglogo?.url }
                                  ].filter(item => item.text).map((item, k) => (
                                    <a
                                      key={k}
                                      href={item.link}
                                      rel="noopener noreferrer"
                                      style={{ textDecoration: 'none', color: 'inherit' }}
                                    >
                                      <Flex
                                        sx={{
                                          alignItems: 'center',
                                          gap: 2,
                                          '&:hover': { bg: 'gray.1' },
                                          p: 2,
                                          fontWeight: 'bold',
                                          borderRadius: '6px',
                                          cursor: 'pointer',
                                          fontSize: 1,
                                          color: '#2d3748',
                                          '&:hover': {
                                            color: '#6366f1',
                                          }
                                        }}
                                      >
                                        {item.icon && <img src={normalize(item.icon)} alt={item.text} width="24" />}
                                        <span>{item.text}</span>
                                      </Flex>
                                    </a>
                                  ))}
                                </Box>
                              </Box>

                              <Box
                                sx={{
                                  display: 'grid',
                                  gridTemplateColumns: 'repeat(3, 1fr)',
                                  gap: 3,
                                  bg: '#edf2f7',
                                  px: 3,
                                  pt: 3,
                                }}
                              >
                                <Box sx={{ bg: 'gray.1', p: 2, borderRadius: '8px', px: 3 }}>
                                  <Box sx={{ fontWeight: 'bold', mb: 2, fontSize: 2, display: 'flex', alignItems: 'center', gap: 2, color: 'text' }}>
                                    {h.Pricing?.Pricingtitle && <img src={normalize(h.Pricinglogo?.url)} alt={h.Pricing?.Pricingtitle} width="24" />}
                                    {h.Pricing?.Pricingtitle || 'PRICING'}
                                  </Box>
                                  <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                                    {[
                                      { text: h.Pricing?.pricing01, link: '/innerpage/pricing-01' },
                                      { text: h.Pricing?.pricing02, link: '/innerpage/pricing-02' },
                                      { text: h.Pricing?.pricing03, link: '/innerpage/pricing-03' },
                                    ].map((item, k) => (
                                      <a
                                        key={`pricing-${k}`}
                                        href={item.link || '#'}
                                        rel="noopener noreferrer"
                                        style={{ textDecoration: 'none', color: 'inherit' }}
                                      >
                                        <Flex
                                          sx={{
                                            fontWeight: 'bold',
                                            alignItems: 'center',
                                            gap: 2,
                                            '&:hover': { bg: 'gray.2' },
                                            p: 2,
                                            borderRadius: '6px',
                                            cursor: 'pointer',
                                            fontSize: 1,
                                            color: '#2d3748',
                                            '&:hover': {
                                              color: '#6366f1',
                                            }
                                          }}
                                        >
                                          <span>{item.text || `Missing text ${k + 1}`}</span>
                                        </Flex>
                                      </a>
                                    ))}

                                  </Box>
                                </Box>

                                <Box sx={{ bg: 'gray.1', p: 2, borderRadius: '8px' }}>
                                  <Box
                                    sx={{
                                      fontWeight: 'bold',
                                      mb: 2,
                                      fontSize: 2,
                                      display: 'flex',
                                      alignItems: 'center',
                                      gap: 2,
                                      color: 'text'
                                    }}
                                  >
                                    {h.Pricing?.servicestitle && (
                                      <img src={normalize(h.Serviceslogo?.url)} alt={h.Pricing?.servicestitle} width="24" />
                                    )}
                                    {h.Pricing?.servicestitle || 'SERVICES'}
                                  </Box>

                                  <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                                    {[
                                      { text: h.Pricing?.services01, link: '/innerpage/services-01' },
                                      { text: h.Pricing?.services02, link: '/innerpage/services-02' },
                                      { text: h.Pricing?.services03, link: '/innerpage/services-03' },
                                    ].map((item, k) => (
                                      <a
                                        key={`pricing-${k}`}
                                        href={item.link || '#'}
                                        rel="noopener noreferrer"
                                        style={{ textDecoration: 'none', color: 'inherit' }}
                                      >
                                        <Flex
                                          sx={{
                                            fontWeight: 'bold',
                                            alignItems: 'center',
                                            gap: 2,
                                            '&:hover': { bg: 'gray.2' },
                                            p: 2,
                                            borderRadius: '6px',
                                            cursor: 'pointer',
                                            fontSize: 1,
                                            color: '#2d3748',
                                            '&:hover': {
                                              color: '#6366f1',
                                            }
                                          }}
                                        >
                                          <span>{item.text || `Missing text ${k + 1}`}</span>
                                        </Flex>
                                      </a>
                                    ))}

                                  </Box>
                                </Box>


                                <Box sx={{ bg: 'gray.1', p: 2, borderRadius: '8px' }}>
                                  <Box sx={{ fontWeight: 'bold', mb: 2, fontSize: 2, display: 'flex', alignItems: 'center', gap: 2, color: 'text' }}>
                                    {h.Pricing?.Abouttitle && <img src={normalize(h.Aboutlogo?.url)} alt={h.Pricing?.Abouttitle} width="24" />}
                                    {h.Pricing?.Abouttitle || 'ABOUT US'}
                                  </Box>
                                  <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                                    {[
                                      { text: h.Pricing?.About01, link: '/innerpage/about-us-01' },
                                      { text: h.Pricing?.About02, link: '/innerpage/about-us-02' },
                                    ].map((item, k) => (
                                      <a
                                        key={`pricing-${k}`}
                                        href={item.link || '#'}
                                        rel="noopener noreferrer"
                                        style={{ textDecoration: 'none', color: 'inherit' }}
                                      >
                                        <Flex
                                          sx={{
                                            fontWeight: 'bold',
                                            alignItems: 'center',
                                            gap: 2,
                                            '&:hover': { bg: 'gray.2' },
                                            p: 2,
                                            borderRadius: '6px',
                                            cursor: 'pointer',
                                            fontSize: 1,
                                            color: '#2d3748',
                                            '&:hover': {
                                              color: '#6366f1',
                                            }
                                          }}
                                        >
                                          <span>{item.text || `Missing text ${k + 1}`}</span>
                                        </Flex>
                                      </a>
                                    ))}

                                  </Box>
                                </Box>
                              </Box>
                            </Box>

                          ) : (
                            <Box
                              sx={{
                                position: 'absolute',
                                top: '100%',
                                left: 0,
                                marginTop: '-5px',
                                bg: 'white',
                                border: '1px solid #eee',
                                boxShadow: '0 4px 8px rgba(0,0,0,0.05)',
                                minWidth: '220px',
                                zIndex: 10,
                                p: 2,
                                borderRadius: '8px'
                              }}
                            >
                              {section.buttons.filter(btn => btn.icon && btn.icon.src).map((btn, k) => (
                                <a
                                  key={k}
                                  href={btn.link}
                                  rel="noopener noreferrer"
                                  style={{ textDecoration: 'none', color: 'inherit' }}
                                >
                                  <Flex
                                    sx={{
                                      alignItems: 'center',
                                      px: 2,
                                      py: 2,
                                      '&:hover': { bg: 'gray.1' },
                                      gap: 2,
                                      fontSize: 2,
                                      cursor: 'pointer',
                                      fontWeight: 'bold',
                                      color: '#2d3748',
                                      '&:hover': {
                                        color: '#6366f1',
                                      }
                                    }}
                                  >
                                    <img src={btn.icon.src} alt={btn.text} width="24" />
                                    <span>{btn.text}</span>
                                  </Flex>
                                </a>
                              ))}
                            </Box>
                          )
                        )}
                      </Box>
                    ))}
                  </Flex>

                  {/* RIGHT: Contact Us Button */}
                  <Box>
                    <Button
                      sx={{
                        color: 'white',
                        borderRadius: '999px',
                        fontSize: 1,
                        minWidth: '100px',
                        px: 4,
                        py: 1,
                      }}
                    >
                      Contact Us
                    </Button>
                  </Box>
                </Flex>
              </Reveal>
            </Box>

            {/* Mobile Navigation */}
            <Box sx={{ display: ['block', null, 'none'] }}>
              <Drawer buttonStyle={{ svg: { size: 32 } }}>
                {content.collection.map((sec, i) => (
                  <Box key={i} sx={{ px: 3, py: 2 }}>
                    {sec.label && <Box sx={{ fontWeight: 'bold', pb: 2 }}>{sec.label}</Box>}
                    {sec.buttons.map((b, j) => (
                      <a
                        key={j}
                        href={b.link}
                        rel="noopener noreferrer"
                        style={{ textDecoration: 'none', color: 'inherit' }}
                      >
                        <Flex
                          sx={{
                            alignItems: 'center',
                            py: 2,
                            gap: 3
                          }}
                        >
                          {b.icon && <img src={b.icon.src} alt={b.text} width="20" />}
                          <span>{b.text}</span>
                        </Flex>
                      </a>
                    ))}
                  </Box>
                ))}
              </Drawer>
            </Box>
          </Flex>
        </Container>
      </Container>
    </Sticky>
  )
}

export default WithDefaultContent(HeaderBlock01)
