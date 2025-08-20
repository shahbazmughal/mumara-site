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
  tabs,
  children,
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

  // Fetch GraphQL data
  const data = useStaticQuery(graphql`
    query MyQuery {
      strapiPricingtab {
        heading
        description
      }
      strapiPricing {
        MarketersandDevelopers {
          planname
          plandescription
        }
      }
    }
  `)

  // Extract tab data and pricing data
  const tabData = data.strapiPricingtab || []
  const pricingData = data.strapiPricing?.MarketersandDevelopers || []
  const tabsList = tabData.map(tab => tab.heading)
  const currentPricing = pricingData[tabIndex] || { planname: 'No Plan', plandescription: 'No Description' }

  const selectedIndex = id ? activeTab?.index || 0 : tabIndex
  const childrenArray = Children.toArray(children)
  const totalTabs = tabs?.length || tabData.length || childrenArray?.length

  useEffect(() => {
    interval.current =
      autoplay &&
      setInterval(() => {
        setTabIndex(tabIndex => (tabIndex < totalTabs - 1 ? tabIndex + 1 : 0))
      }, autoplayInterval)
    return () => clearInterval(interval.current)
  }, [autoplay, autoplayInterval, totalTabs])

  useEffect(() => {
    return () =>
      id && setActiveTab(state => (state.identifier === id ? {} : state))
  }, [id])

  const handleSelect = index => {
    clearInterval(interval.current)
    id ? setActiveTab({ identifier: id, index }) : setTabIndex(index)
    onChange && onChange(index)
  }

  const handleNext = () => {
    setTabIndex(tabIndex => (tabIndex < totalTabs - 1 ? tabIndex + 1 : 0))
  }

  const handlePrev = () => {
    setTabIndex(tabIndex => (tabIndex !== 0 ? tabIndex - 1 : totalTabs - 1))
  }

  const customTabButtons = () =>
    tabsList.filter(Boolean).map((item, index) => (
      <Tab key={`item-${index}`} className='tabs_tab'>
        {item}
      </Tab>
    ))

  const contentTabButtons = () =>
    childrenArray.map(({ props }, index) =>
      variant === 'dots' ? (
        <Tab key={`item-${index}`} className='tabs_tab' />
      ) : (
        props?.content?.text?.[0] && (
          <Tab key={`item-${index}`} className='tabs_tab'>
            {props.content.text[0].text}
          </Tab>
        )
      )
    )

  const tabButtons = (
    <TabList className='tabs_tabList'>
      {tabs ? customTabButtons() : contentTabButtons()}
    </TabList>
  )

  return totalTabs ? (
    <Box sx={styles[variant]}>
      <Tabs
        selectedTabClassName='tabs_selectedTab'
        selectedIndex={selectedIndex}
        onSelect={handleSelect}
      >
        {position === 'top' && (
          <>
            {tabButtons}
            <Divider space={space} />
          </>
        )}
        {tabData.map((tab, index) => (
          <TabPanel key={`item-${index}`} forceRender={forceRender}>
            <Box>
              <p>{tab.description}</p>
              <p><strong>Plan:</strong> {currentPricing.planname}</p>
              <p><strong>Description:</strong> {currentPricing.plandescription}</p>
            </Box>
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
  variant: PropTypes.oneOf(Object.keys(styles)),
  tabs: PropTypes.array
}

export default StyledTabs