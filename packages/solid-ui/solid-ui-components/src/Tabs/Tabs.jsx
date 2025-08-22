import React, { useState, useEffect, useRef, useContext, Children } from 'react'
import PropTypes from 'prop-types'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs'
import { Box, Button } from 'theme-ui'
import Divider from '@solid-ui-components/Divider'
import { TabsContext } from '@solid-ui-components/Tabs'
import { useStaticQuery, graphql } from 'gatsby'

const STRAPI_BASE_URL = process.env.GATSBY_STRAPI_API_URL
const normalizeUrl = (url) =>
  url?.startsWith('http') ? url : `${STRAPI_BASE_URL}${url}`

const StyledTabs = ({
  id,
  children,
  tabsData,
  space,
  position,
  autoplay,
  autoplayInterval,
  arrows,
  onChange,
  forceRender
}) => {
  const { activeTab, setActiveTab } = useContext(TabsContext)
  const [tabIndex, setTabIndex] = useState(0)
  const interval = useRef(null)

  const queryData = useStaticQuery(graphql`
    query PricingTabsQuery {
      strapiPricingtab {
        heading
        description
        icon {
          url
        }
      }
      strapiPricing {
        MarketersandDevelopers {
          planname
          plandescription
        }
        icon {
          url
        }
      }
    }
  `)

  const strapiTabsData = [
    ...(queryData.strapiPricingtab
      ? [{
          heading: queryData.strapiPricingtab.heading,
          description: queryData.strapiPricingtab.description,
          icon: queryData.strapiPricingtab.icon
        }]
      : []),
    ...(queryData.strapiPricing?.MarketersandDevelopers
      ? Array.isArray(queryData.strapiPricing.MarketersandDevelopers)
        ? queryData.strapiPricing.MarketersandDevelopers.map(item => ({
            heading: item.planname,
            description: item.plandescription,
            icon: item.icon
          }))
        : [{
            heading: queryData.strapiPricing.MarketersandDevelopers.planname,
            description: queryData.strapiPricing.MarketersandDevelopers.plandescription,
            icon: queryData.strapiPricing.icon
          }]
      : [])
  ]

  const finalTabsData = tabsData?.length ? tabsData : strapiTabsData
  const childrenArray = Children.toArray(children)

  const isUsingStrapi = Array.isArray(finalTabsData) && finalTabsData.some(tab => !!tab?.heading)
  const totalTabs = isUsingStrapi ? finalTabsData.length : childrenArray.length

  useEffect(() => {
    if (autoplay && totalTabs > 1) {
      interval.current = setInterval(() => {
        setTabIndex(prev => (prev < totalTabs - 1 ? prev + 1 : 0))
      }, autoplayInterval)
    }
    return () => clearInterval(interval.current)
  }, [autoplay, autoplayInterval, totalTabs])

  useEffect(() => {
    return () => {
      if (id) {
        setActiveTab(state => (state.identifier === id ? {} : state))
      }
    }
  }, [id, setActiveTab])

  const handleSelect = index => {
    clearInterval(interval.current)
    id ? setActiveTab({ identifier: id, index }) : setTabIndex(index)
    onChange && onChange(index)
  }

  const handleNext = () => {
    setTabIndex(prev => (prev < totalTabs - 1 ? prev + 1 : 0))
  }

  const handlePrev = () => {
    setTabIndex(prev => (prev > 0 ? prev - 1 : totalTabs - 1))
  }

  const tabButtons = (
    <TabList
      style={{
        display: 'flex',
        margin: 0,
        padding: 0,
        listStyle: 'none',
        borderBottom: '1px solid #e0e0e0'
      }}
    >
      {isUsingStrapi
        ? finalTabsData.map((tab, index) => (
            <Tab
              key={`tab-${index}`}
              style={{
                fontWeight: '500',
                listStyle: 'none',
                cursor: 'pointer',
                color: tabIndex === index ? (index === 0 ? '#007d6c' : '#3498db') : '#666',
                borderBottom: tabIndex === index
                  ? `3px solid ${index === 0 ? '#007d6c' : '#3498db'}`
                  : '3px solid transparent',
                padding: '10px 16px',
                margin: '0 8px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                transition: 'all 0.3s ease'
              }}
            >
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                {tab.icon?.url && (
                  <img
                    src={normalizeUrl(tab.icon.url)}
                    alt={tab.heading}
                    style={{
                      width: index === 0 ? '48px' : '34px',   // 👈 first tab bigger
                      height: index === 0 ? '48px' : '34px',
                      marginRight: '8px',
                      textAlign: 'center',
                      objectFit: 'contain'
                    }}
                  />
                )}
                <Box sx={{ textAlign: 'left' }}>
                  <Box sx={{ fontWeight: 'bold' }}>{tab.heading || `Tab ${index + 1}`}</Box>
                  {tab.description && (
                    <Box sx={{ mt: '4px', fontSize: '0.875rem', color: 'gray' }}>
                      {tab.description}
                    </Box>
                  )}
                </Box>
              </Box>
            </Tab>
          ))
        : childrenArray.map(({ props }, index) => (
            <Tab
              key={`tab-${index}`}
              style={{
                fontWeight: '500',
                listStyle: 'none',
                cursor: 'pointer',
                color: tabIndex === index ? (index === 0 ? '#007d6c' : '#3498db') : '#666',
                borderBottom: tabIndex === index
                  ? `3px solid ${index === 0 ? '#007d6c' : '#3498db'}`
                  : '3px solid transparent',
                padding: '10px 16px',
                margin: '0 8px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                transition: 'all 0.3s ease'
              }}
            >
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                {props?.icon && (
                  <img
                    src={normalizeUrl(props.icon)}
                    alt={props?.heading}
                    style={{
                      width: index === 0 ? '48px' : '34px',   // 👈 first tab bigger
                      height: index === 0 ? '48px' : '34px',
                      marginRight: '8px',
                      textAlign: 'center',
                      objectFit: 'contain'
                    }}
                  />
                )}
                <Box sx={{ textAlign: 'left' }}>
                  <Box sx={{ fontWeight: 'bold' }}>{props?.heading || `Tab ${index + 1}`}</Box>
                  {props?.description && (
                    <Box sx={{ mt: '4px', fontSize: '0.875rem', color: 'gray' }}>
                      {props.description}
                    </Box>
                  )}
                </Box>
              </Box>
            </Tab>
          ))}
    </TabList>
  )

  return totalTabs ? (
    <Box sx={{ position: 'relative', width: '80%', margin: '0 auto' }}>
      <Tabs
        selectedIndex={id ? activeTab?.index || 0 : tabIndex}
        onSelect={handleSelect}
      >
        {position === 'top' && (
          <>
            {tabButtons}
            <Divider space={space} />
          </>
        )}

        {(isUsingStrapi ? childrenArray : childrenArray).map((child, index) => (
          <TabPanel key={`panel-${index}`} forceRender={forceRender}>
            {child}
          </TabPanel>
        ))}

        {position === 'bottom' && (
          <>
            <Divider space={space} />
            {tabButtons}
          </>
        )}
      </Tabs>

      {arrows && (
        <>
          <Button
            variant='white'
            sx={{
              minWidth: 'auto',
              borderWidth: '1px',
              borderRadius: '50%',
              boxShadow: '0 0 10px rgba(0,0,0,0.1)',
              position: 'absolute',
              top: '50%',
              left: 0,
              transform: 'translate(50%, -50%)',
              p: 2
            }}
            onClick={handlePrev}
          >
            <Box sx={{ size: '8px', borderBottom: '2px solid currentColor', borderLeft: '2px solid currentColor', transform: 'rotate(45deg)' }} />
          </Button>
          <Button
            variant='white'
            sx={{
              minWidth: 'auto',
              borderWidth: '1px',
              borderRadius: '50%',
              boxShadow: '0 0 10px rgba(0,0,0,0.1)',
              position: 'absolute',
              top: '50%',
              right: 0,
              transform: 'translate(-50%, -50%)',
              p: 2
            }}
            onClick={handleNext}
          >
            <Box sx={{ size: '8px', borderBottom: '2px solid currentColor', borderLeft: '2px solid currentColor', transform: 'rotate(225deg)' }} />
          </Button>
        </>
      )}
    </Box>
  ) : null
}

StyledTabs.defaultProps = {
  position: 'top',
  autoplay: false,
  autoplayInterval: 4000,
  arrows: false,
  forceRender: false
}

StyledTabs.propTypes = {
  id: PropTypes.string,
  children: PropTypes.node,
  tabsData: PropTypes.arrayOf(
    PropTypes.shape({
      heading: PropTypes.string,
      description: PropTypes.string,
      icon: PropTypes.shape({
        url: PropTypes.string
      })
    })
  ),
  space: PropTypes.number,
  position: PropTypes.oneOf(['top', 'bottom']),
  autoplay: PropTypes.bool,
  autoplayInterval: PropTypes.number,
  arrows: PropTypes.bool,
  onChange: PropTypes.func,
  forceRender: PropTypes.bool
}

export default StyledTabs
