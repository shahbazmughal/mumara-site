import React, { useState, useEffect, useRef, useContext, Children } from 'react'
import PropTypes from 'prop-types'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs'
import { Box, Button } from 'theme-ui'
import Divider from '@solid-ui-components/Divider'
import { TabsContext } from '@solid-ui-components/Tabs'
import { useStaticQuery, graphql } from 'gatsby'
import styles from './styles'

const StyledTabs = ({
  id,
  children,
  tabsData,
  variant,
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

  // Static GraphQL query for miniheadings
  const queryData = useStaticQuery(graphql`
    query FeatureHeadingsQuery {
      strapiSaasv2Featureone {
        miniheading
      }
      strapiSaasv2Featuretwo {
        miniheading
      }
      strapiSaasv2Featurethree {
        miniheading
      }
    }
  `)

  const strapiTabsData = [
    { heading: queryData.strapiSaasv2Featureone?.miniheading },
    { heading: queryData.strapiSaasv2Featuretwo?.miniheading },
    { heading: queryData.strapiSaasv2Featurethree?.miniheading }
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
    <TabList className='tabs_tabList'>
      {isUsingStrapi
        ? finalTabsData.map((tab, index) => (
            <Tab key={`tab-${index}`} className='tabs_tab'>
              {tab.heading || `Tab ${index + 1}`}
            </Tab>
          ))
        : childrenArray.map(({ props }, index) => (
            <Tab key={`tab-${index}`} className='tabs_tab'>
              {props?.heading || `Tab ${index + 1}`}
            </Tab>
          ))}
    </TabList>
  )

  return totalTabs ? (
    <Box sx={styles[variant]}>
      <Tabs
        selectedTabClassName='tabs_selectedTab'
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
            sx={{ ...styles.arrowButton, ...styles.arrowButtonLeft }}
            onClick={handlePrev}
          >
            <Box sx={{ ...styles.arrow, transform: `rotate(45deg)` }} />
          </Button>
          <Button
            variant='white'
            sx={{ ...styles.arrowButton, ...styles.arrowButtonRight }}
            onClick={handleNext}
          >
            <Box sx={{ ...styles.arrow, transform: `rotate(225deg)` }} />
          </Button>
        </>
      )}
    </Box>
  ) : null
}

StyledTabs.defaultProps = {
  variant: 'underline',
  position: 'top',
  autoplay: false,
  autoplayInterval: 4000,
  arrows: false,
  forceRender: false
}

StyledTabs.propTypes = {
  id: PropTypes.string,
  variant: PropTypes.oneOf(Object.keys(styles)),
  children: PropTypes.node,
  tabsData: PropTypes.arrayOf(
    PropTypes.shape({
      heading: PropTypes.string,
      content: PropTypes.string
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
