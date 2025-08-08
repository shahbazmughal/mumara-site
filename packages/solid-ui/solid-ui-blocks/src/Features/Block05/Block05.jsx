import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { Container, Flex, Box, css } from 'theme-ui';
import Divider from '@solid-ui-components/Divider';
import Reveal from '@solid-ui-components/Reveal';
import ContentContainer from '@solid-ui-components/ContentContainer';
import ContentText from '@solid-ui-components/ContentText';
import ContentButtons from '@solid-ui-components/ContentButtons';

const STRAPI_BASE_URL = 'https://strapi5-dev-jt.mumara.com';
const normalizeUrl = (url) => (url?.startsWith('http') ? url : `${STRAPI_BASE_URL}${url}`);

const FeaturesBlock05 = () => {
  const { allStrapiFintechfeature } = useStaticQuery(graphql`
    query {
      allStrapiFintechfeature {
        nodes {
          miniheading
          heading

          Android {
            Androidheading
            Androiddescription
            AndroidFuture1
            AndroidFuture2
            AndroidFuture3
          }
          Androidicon {
            url
          }

          software {
            Softwareheading
            Softwaredescription
            SoftwareFuture1
            SoftwareFuture2
            SoftwareFuture3
          }
          Softwareicon {
            url
          }

          iPhone {
            iPhoneheading
            iPhonedescription
            iPhonefeature1
            iPhonefeature2
            iPhonefeature3
          }
          iPhoneicon {
            url
          }

          icon {
            url
          }
        }
      }
    }
  `);

  const data = allStrapiFintechfeature.nodes[1];

  const heading = [
    { text: data?.miniheading, as: 'h1', color: '#2d3748' },
    { text: data?.heading, as: 'p', color: '#2d3748'  }
  ];

  const features = [
    {
      mainIcon: normalizeUrl(data?.Androidicon?.url),
      heading: data?.Android?.Androidheading,
      description: data?.Android?.Androiddescription,
      list: [
        data?.Android?.AndroidFuture1 && { text: data.Android.AndroidFuture1 },
        data?.Android?.AndroidFuture2 && { text: data.Android.AndroidFuture2 },
        data?.Android?.AndroidFuture3 && { text: data.Android.AndroidFuture3 }
      ].filter(Boolean),
      icon: normalizeUrl(data?.icon?.url)
    },
    {
      mainIcon: normalizeUrl(data?.Softwareicon?.url),
      heading: data?.software?.Softwareheading,
      description: data?.software?.Softwaredescription,
      list: [
        data?.software?.SoftwareFuture1 && { text: data.software.SoftwareFuture1 },
        data?.software?.SoftwareFuture2 && { text: data.software.SoftwareFuture2 },
        data?.software?.SoftwareFuture3 && { text: data.software.SoftwareFuture3 }
      ].filter(Boolean),
      icon: normalizeUrl(data?.icon?.url)
    },
    {
      mainIcon: normalizeUrl(data?.iPhoneicon?.url),
      heading: data?.iPhone?.iPhoneheading,
      description: data?.iPhone?.iPhonedescription,
      list: [
        data?.iPhone?.iPhonefeature1 && { text: data.iPhone.iPhonefeature1 },
        data?.iPhone?.iPhonefeature2 && { text: data.iPhone.iPhonefeature2 },
        data?.iPhone?.iPhonefeature3 && { text: data.iPhone.iPhonefeature3 }
      ].filter(Boolean),
      icon: normalizeUrl(data?.icon?.url)
    }
  ];

  const styles = {
    listItem: {
      flex: '1 1 0',
      minWidth: ['100%', 'calc(50% - 16px)', '300px'],
      p: 3
    }
  };

  return (
    <Container as={Reveal}>
      <Divider />

      
      <ContentText
        content={heading}
        sx={{
          textAlign: 'center',
          py: '1rem',
          maxWidth: '600px',
          mx: 'auto',
        }}
      />
      <Flex sx={{ flexWrap: 'wrap', justifyContent: 'center', m: -3 }}>
        {features.map((item, index) => {
          const buttons = item.button
            ? [{ text: item.button, variant: 'primary', link: '#', mx: 'auto' }]
            : [];

          return (
            <Reveal
              key={index}
              effect="fadeInGrow"
              delay={0.15 * (index + 1)}
              css={css(styles.listItem)}
            >
              <ContentContainer
                variant="cards.paper"
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  textAlign: 'left',
                  height: '100%',
                  p: 4
                }}
              >
                <Box>
                  {item.mainIcon && (
                    <Box
                      sx={{
                        width: 64,
                        height: 64,
                        borderRadius: '12px',
                        backgroundColor: '#edf2f7',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        mb: 3
                      }}
                    >
                      <Box
                        as="img"
                        src={item.mainIcon}
                        alt="Main Icon"
                        sx={{ width: 38, height: 38 }}
                      />
                    </Box>
                  )}
                </Box>

                <Box>
                  <ContentText
                    content={[{ text: item.heading, as: 'h2', color: '#6366f1' }]}
                    sx={{ mb: 2 }}
                  />
                  <ContentText
                    content={[{ text: item.description }]}
                    sx={{ mb: 3 }}
                  />

                  {item.list.length > 0 && (
                    <Box sx={{ mb: 3 }}>
                      {item.list.map((featureObj, idx) => (
                        <Flex key={idx} sx={{ alignItems: 'center', mb: 3 }}>
                          {item.icon && (
                            <Box
                              as="img"
                              src={item.icon}
                              alt="Feature Icon"
                              sx={{
                                width: '30px',
                                height: '30px',
                                mr: 2,
                                flexShrink: 0
                              }}
                            />
                          )}
                          <Box sx={{ fontWeight: 'bold', fontSize: 2, color: 'text' }}>
                            {featureObj.text}
                          </Box>
                        </Flex>
                      ))}
                    </Box>
                  )}
                </Box>
              </ContentContainer>
            </Reveal>
          );
        })}
      </Flex>
    </Container>
  );
};

export default FeaturesBlock05;
