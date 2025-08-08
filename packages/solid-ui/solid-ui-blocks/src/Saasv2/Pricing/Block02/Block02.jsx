import React, { useState } from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import { Container, Flex, Box, Badge } from 'theme-ui'
import Divider from '@solid-ui-components/Divider'
import Tabs from '@solid-ui-components/Tabs4'
import ContentText from '@solid-ui-components/ContentText'
import ContentButtons from '@solid-ui-components/ContentButtons'
import Icon from '@solid-ui-components/ContentIcon'
import ContentContainer from '@solid-ui-components/ContentContainer'

const STRAPI_BASE_URL = 'https://strapi5-dev-jt.mumara.com'
const normalizeUrl = (url) => url?.startsWith('http') ? url : `${STRAPI_BASE_URL}${url}`
const headingColors = ['#718096', '#a855f7', '#6366f1']

const safeText = (val, fallback = '') =>
  typeof val === 'string' && val.trim() !== '' ? val : fallback

const safeCurrency = (val, fallback = '$0') =>
  typeof val === 'number'
    ? val.toLocaleString('en-US', { style: 'currency', currency: 'USD' })
    : fallback

const safeFeatures = (list) =>
  (list || []).map(item => {
    if (typeof item === 'object' && item !== null && item.text) {
      return item.text
    }
    return item
  }).filter(item => typeof item === 'string' && item.trim() !== '')

const PricingBlock01 = () => {
  const { allStrapiPricing } = useStaticQuery(graphql`
    query {
      allStrapiPricing {
        nodes {
          miniheading
          heading
          description
          button
          badge
          checkicon { url }
          Startericon { url }
          Professionalicon { url }
          Organizationicon { url }
          StarterAnnuallyicon { url }
          AnnuallyProfessionalicon { url }
          OrganizationAnnuallyIcon { url }

          Stater {
            staterheading
            staterrate
            staterdescription
            Customers
            staterAgent
            staterDeal
            staterMeeting
            staterbutton
          }

          Professional {
            Professionalheading
            Professionalrates
            Professionaldescription
            Professionalcustomers
            Professionalagents
            Professionalsales
            Professionalrecords
            Professionalcalculated
            Professionalsmart
            Professionalbutton
          }

          Organization {
            Organizationheading
            Organizationrates
            Organizationdescription
            Organizationcustomers
            Organizationagents
            Organizationpredictive
            Organizationroels
            Organizationbutton
          }

          AnnuallyStarterPlan {
            Starterheading
            Starternumber
            Starterdescription
            Startercustomers
            StarterAgents
            Starterdeal
            Startermeeting
            Starterbutton
          }

          AnnuallyProfessionalPlan {
            Professionalheading
            Professionalrate
            Professionaldescription
            Professionalcustomers
            ProfessionalAgents
            Professionalsales
            Professionalrecords
            Professionalcalculators
            Professionalsmart
            Professionalbuttons
          }

          OrganizationAnnually {
            Organizationheading
            Organizationrate
            Organizationdescription
            OrganizationCustommers
            Organizationunlimited
            Organizationpredictive
            Organizationroles
            Organizationbutton
          }
        }
      }
    }
  `)

  const data = allStrapiPricing?.nodes?.[1] || {}
  const [plan, setPlan] = useState(0)
  const checkIcon = { src: normalizeUrl(data?.checkicon?.url) }

  const plans = [
    {
      icon: normalizeUrl(plan === 0 ? data?.Startericon?.url : data?.StarterAnnuallyicon?.url),
      heading: safeText(plan === 0 ? data?.Stater?.staterheading : data?.AnnuallyStarterPlan?.Starterheading),
      price: `${safeCurrency(plan === 0 ? data?.Stater?.staterrate : data?.AnnuallyStarterPlan?.Starternumber)}${plan === 0 ? '/month' : '/year'}`,
      description: safeText(plan === 0 ? data?.Stater?.staterdescription : data?.AnnuallyStarterPlan?.Starterdescription),
      button: safeText(plan === 0 ? data?.Stater?.staterbutton : data?.AnnuallyStarterPlan?.Starterbutton, 'Choose Starter'),
      features: safeFeatures([
        plan === 0 ? data?.Stater?.Customers : data?.AnnuallyStarterPlan?.Startercustomers,
        plan === 0 ? data?.Stater?.staterAgent : data?.AnnuallyStarterPlan?.StarterAgents,
        plan === 0 ? data?.Stater?.staterDeal : data?.AnnuallyStarterPlan?.Starterdeal,
        plan === 0 ? data?.Stater?.staterMeeting : data?.AnnuallyStarterPlan?.Startermeeting
      ]) 
    },
    {
      icon: normalizeUrl(plan === 0 ? data?.Professionalicon?.url : data?.AnnuallyProfessionalicon?.url),
      heading: safeText(plan === 0 ? data?.Professional?.Professionalheading : data?.AnnuallyProfessionalPlan?.Professionalheading),
      price: `${safeCurrency(plan === 0 ? data?.Professional?.Professionalrates : data?.AnnuallyProfessionalPlan?.Professionalrate)}${plan === 0 ? '/month' : '/year'}`,
      description: safeText(plan === 0 ? data?.Professional?.Professionaldescription : data?.AnnuallyProfessionalPlan?.Professionaldescription),
      button: safeText(plan === 0 ? data?.Professional?.Professionalbutton : data?.AnnuallyProfessionalPlan?.Professionalbuttons, 'Choose Professional'),
      features: safeFeatures([
        plan === 0 ? data?.Professional?.Professionalcustomers : data?.AnnuallyProfessionalPlan?.Professionalcustomers,
        plan === 0 ? data?.Professional?.Professionalagents : data?.AnnuallyProfessionalPlan?.ProfessionalAgents,
        plan === 0 ? data?.Professional?.Professionalsales : data?.AnnuallyProfessionalPlan?.Professionalsales,
        plan === 0 ? data?.Professional?.Professionalrecords : data?.AnnuallyProfessionalPlan?.Professionalrecords,
        plan === 0 ? data?.Professional?.Professionalcalculated : data?.AnnuallyProfessionalPlan?.Professionalcalculators,
        plan === 0 ? data?.Professional?.Professionalsmart : data?.AnnuallyProfessionalPlan?.Professionalsmart
      ])
    },
    {
      icon: normalizeUrl(plan === 0 ? data?.Organizationicon?.url : data?.OrganizationAnnuallyIcon?.url),
      heading: safeText(plan === 0 ? data?.Organization?.Organizationheading : data?.OrganizationAnnually?.Organizationheading),
      price: `${safeCurrency(plan === 0 ? data?.Organization?.Organizationrates : data?.OrganizationAnnually?.Organizationrate)}${plan === 0 ? '/month' : '/year'}`,
      description: safeText(plan === 0 ? data?.Organization?.Organizationdescription : data?.OrganizationAnnually?.Organizationdescription),
      button: safeText(plan === 0 ? data?.Organization?.Organizationbutton : data?.OrganizationAnnually?.Organizationbutton, 'Choose Organization'),
      features: safeFeatures([
        plan === 0 ? data?.Organization?.Organizationcustomers : data?.OrganizationAnnually?.OrganizationCustommers,
        plan === 0 ? data?.Organization?.Organizationagents : data?.OrganizationAnnually?.Organizationunlimited,
        plan === 0 ? data?.Organization?.Organizationpredictive : data?.OrganizationAnnually?.Organizationpredictive,
        plan === 0 ? data?.Organization?.Organizationroels : data?.OrganizationAnnually?.Organizationroles
      ])
    }
  ]

  return (
    <Container sx={{ textAlign: 'center' }}>
      <ContentText
        content={[
          { text: safeText(data?.miniheading), as: 'h2', color: '#6366f1' },
          { text: safeText(data?.heading), as: 'h1', color: '#2d3748' },
          { text: safeText(data?.description) }
        ]}
      />
      <Divider space={3} />
      <Tabs tabs={['Monthly', 'Annually (Save 10%)']} onChange={setPlan} variant='pill' />

      <Flex
        sx={{
          flexWrap: 'wrap',
          alignItems: 'stretch',
          justifyContent: 'center',
          mt: 4
        }}
      >
        {plans.map((planData, index) => (
          <Box key={index} sx={{ maxWidth: 400, p: 3, position: 'relative' }}>
            <ContentContainer
              variant="cards.paper"
              sx={{
                position: 'relative',
                transition: 'border 0.3s ease-in-out',
                bg: index === 1 ? '#2d3748' : 'background',
                color: index === 1 ? '#fff' : 'text'
              }}
            >
              {plan === 1 && safeText(data?.badge) && (
                <Badge variant="tag-yellow" sx={{ position: 'absolute', top: 3, right: 3 }}>
                  {data.badge}
                </Badge>
              )}

              {/* ✅ Icon wrapper with pink background for Professional */}
              <Box
                sx={{
                  bg: index === 1 ? '#a855f7' : '#edf2f7',
                  p: 3,
                  borderRadius: '50%',
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: 64,
                  height: 64,
                  mx: 'auto',
                  mb: 3
                }}
              >
                <Icon content={{ src: planData.icon }} size="sm" />
              </Box>

              <ContentText
                content={[
                  {
                    text: planData.heading,
                    as: 'h1',
                    sx: {
                      color: index === 1 ? '#fff' : headingColors[index],
                      fontWeight: 'bold',
                      mb: 2
                    }
                  }
                ]}
              />

              <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'baseline', gap: 1 }}>
                <ContentText content={[{ text: planData.price.split(/(?=\/)/)[0], as: 'h1', sx: { color: index === 1 ? '#fff' : '#2d3748' } }]} />
                <Box as="span" sx={{ fontSize: 2, color: index === 1 ? '#fff' : '#718096' }}>
                  {planData.price.split(/(?=\/)/)[1]}
                </Box>
              </Box>

              <ContentText content={[{ text: planData.description, sx: { color: index === 1 ? '#fff' : 'inherit' } }]} />

              <Divider space={2} />

              {planData.features.length > 0 && (
                <Box sx={{ textAlign: 'left', mt: 3, px: 0 }}>
                  {planData.features.map((item, idx) =>
                    item ? (
                      <li
                        key={idx}
                        style={{
                          marginBottom: '10px',
                          listStyle: 'none',
                          display: 'flex',
                          gap: '10px',
                          color: index === 1 ? '#fff' : 'inherit'
                        }}
                      >
                        <Icon content={checkIcon} size="xs" />
                        {safeText(item)}
                      </li>
                    ) : null
                  )}
                </Box>
              )}

              <Divider space={2} />
              <ContentButtons
                content={[
                  {
                    text: planData.button,
                    variant:
                      index === 0
                        ? 'buttons.primary'
                        : index === 1
                        ? 'buttons.secondary'
                        : 'buttons.primary'
                  }
                ]}
              />
            </ContentContainer>
          </Box>
        ))}
      </Flex>
    </Container>
  )
}

export default PricingBlock01
