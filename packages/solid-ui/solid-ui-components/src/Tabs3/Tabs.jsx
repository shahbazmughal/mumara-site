import React, { useState, useEffect, useRef } from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import PropTypes from 'prop-types';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { Box, Button, Text, Image } from 'theme-ui';
import Reveal from '@solid-ui-components/Reveal';
import Divider from '@solid-ui-components/Divider';
import styles from './styles';

const STRAPI_BASE_URL = 'https://strapi5-dev-jt.mumara.com';

const normalizeUrl = (url) =>
  url?.startsWith('http') ? url : `${STRAPI_BASE_URL}${url}`;

const StyledTabs = ({
  variant,
  space,
  position,
  autoplay,
  autoplayInterval,
  arrows,
  forceRender,
}) => {
  const { allStrapiSaasv2Screenshort } = useStaticQuery(graphql`
    query {
      allStrapiSaasv2Screenshort {
        nodes {
          miniheading
          heading
          description
          image {
            url
          }
        }
      }
    }
  `);

  const nodes = allStrapiSaasv2Screenshort?.nodes || [];
  const [tabIndex, setTabIndex] = useState(0);
  const interval = useRef(null);

  const totalTabs = nodes.length;

  useEffect(() => {
    if (autoplay) {
      interval.current = setInterval(() => {
        setTabIndex((prev) => (prev < totalTabs - 1 ? prev + 1 : 0));
      }, autoplayInterval);
    }

    return () => clearInterval(interval.current);
  }, [autoplay, autoplayInterval, totalTabs]);

  const handleSelect = (index) => {
    clearInterval(interval.current);
    setTabIndex(index);
  };

  const handleNext = () => {
    setTabIndex((prev) => (prev < totalTabs - 1 ? prev + 1 : 0));
  };

  const handlePrev = () => {
    setTabIndex((prev) => (prev !== 0 ? prev - 1 : totalTabs - 1));
  };

  return totalTabs ? (
    <Box sx={styles[variant]}>
      <Tabs
        selectedTabClassName="tabs_selectedTab"
        selectedIndex={tabIndex}
        onSelect={handleSelect}
      >
        {/* Tab Headers */}
        {position === 'top' && (
          <>
            <TabList className="tabs_tabList">
              {nodes.map((item, index) => (
                <Tab key={`tab-${index}`} className="tabs_tab">
                  {item.heading}
                </Tab>
              ))}
            </TabList>
            <Divider space={space} />
          </>
        )}

        {/* Tab Panels */}
        {nodes.map((item, index) => (
          <TabPanel key={`panel-${index}`} forceRender={forceRender}>
           <Box sx={{ textAlign: 'center', py: 4 }}>
              <Text
                as="h4"
                sx={{
                  color: '#6366f1', // miniheading color
                  fontSize: 3,
                  mb: 2,
                }}
              >
                {item.miniheading}
              </Text>

              <Text
                as="h2"
                sx={{
                  color: '#2d3748', // heading color
                  fontSize: 5,
                  mb: 3,
                }}
              >
                {item.heading}
              </Text>

              <Text
                as="p"
                sx={{
                  fontSize: '1.25rem', // description size
                  color: '#718096',    // description color
                  mb: 4,
                }}
              >
                {item.description}
              </Text>

              {item.image?.url && (
                <Reveal effect="fadeInDown">
                  <Image
                    src={normalizeUrl(item.image.url)}
                    alt={item.heading}
                    sx={{
                      borderRadius: '12px',
                      border: '5px solid white',
                      display: 'block',
                      minwidth: '100%',
                      mx: 'auto',
                    }}
                  />
                </Reveal>
              )}

            </Box>                          

          </TabPanel>
        ))}

        {/* Optional bottom tab headers */}
        {position === 'bottom' && (
          <>
            <Divider space={space} />
            <TabList className="tabs_tabList">
              {nodes.map((item, index) => (
                <Tab key={`tab-${index}`} className="tabs_tab">
                  {item.heading}
                </Tab>
              ))}
            </TabList>
          </>
        )}
      </Tabs>

      {/* Navigation arrows */}
      {arrows && (
        <>
          <Button
            variant="white"
            sx={{ ...styles.arrowButton, ...styles.arrowButtonLeft }}
            onClick={handlePrev}
          >
            <Box sx={{ ...styles.arrow, transform: 'rotate(45deg)' }} />
          </Button>
          <Button
            variant="white"
            sx={{ ...styles.arrowButton, ...styles.arrowButtonRight }}
            onClick={handleNext}
          >
            <Box sx={{ ...styles.arrow, transform: 'rotate(225deg)' }} />
          </Button>
        </>
      )}
    </Box>
  ) : null;
};

StyledTabs.defaultProps = {
  variant: 'underline',
  position: 'top',
  autoplay: false,
  autoplayInterval: 4000,
  arrows: false,
  forceRender: false,
};

StyledTabs.propTypes = {
  variant: PropTypes.oneOf(Object.keys(styles)),
};

export default StyledTabs;
