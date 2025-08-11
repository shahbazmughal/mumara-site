import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel
} from 'react-accessible-accordion'
import { Container, Flex, Box } from 'theme-ui'
import Reveal from '@solid-ui-components/Reveal'
import Divider from '@solid-ui-components/Divider'
import ContentText from '@solid-ui-components/ContentText'
import Icon from '@solid-ui-components/ContentIcon'
import ContentContainer from '@solid-ui-components/ContentContainer'

const styles = {
  accordion: {
    '.accordion__button': {
      cursor: `pointer`,
      position: `relative`,
      outline: `none`,
      transition: `all 0.15s ease-in`
    },
    '.accordion__button:hover': {
      opacity: 0.75,
      '&::before': {
        borderColor: `beta`
      }
    },
    '.accordion__button::before': {
      content: `' '`,
      width: `10px`,
      height: `10px`,
      marginRight: `12px`,
      borderBottom: `3px solid currentColor`,
      borderLeft: `3px solid currentColor`,
      position: `absolute`,
      right: 4,
      top: `50%`,
      transform: `translate(0, -50%) rotate(45deg)`,
      transition: `all 0.15s ease-in`
    },
    '.accordion__button[aria-expanded="true"]::before, .accordion__button[aria-selected="true"]::before': {
      transform: `translate(0, -50%) rotate(-45deg)`,
      transition: `transform 0.35s ease-in`
    },
    '[hidden]': {
      display: `none`
    },
    '.accordion__panel': {
      animation: `fadeIn 0.25s ease-in`
    },
    '@keyframes fadeIn': {
      '0%': {
        opacity: 0.5,
        transform: 'translate(0, -15%)'
      },
      '100%': {
        opacity: 1,
        transform: 'translate(0, 0%)'
      }
    }
  }
}

const FaqBlock01 = () => {
  const data = useStaticQuery(graphql`
    {
      strapiFaq {
        miniheading
        heading
        description
        callicon { url }
        question1
        Answer1
        phoneicon { url }
        question2
        Answer2
        messageicon { url }
        question3
        answer3
        arrowicon { url }
        question4
        Answer4
      }
    }
  `)

  const STRAPI_BASE_URL = 'https://strapi5-dev-jt.mumara.com'

  const normalizeUrl = (url) =>
    url?.startsWith('http') ? url : `${STRAPI_BASE_URL}${url}`

  const faq = data.strapiFaq

  const content = {
    text: [
      { text: faq.miniheading, variant: 'h4', color:'#a855f7' },
      { text: faq.heading, variant: 'h2', mb: 3 },
      { text: faq.description, variant: 'p', mb: 2, sx:{ fontSize: [1, 2, 3] }}
    ],
    collection: [
      {
        icon: { src: normalizeUrl(faq.callicon?.url) },
        text: [
          { text: faq.question1, variant: 'h5' },
          { text: faq.Answer1, variant: 'paragraph' }
        ]
      },
      {
        icon: { src: normalizeUrl(faq.phoneicon?.url) },
        text: [
          { text: faq.question2, variant: 'h5' },
          { text: faq.Answer2, variant: 'paragraph' }
        ]
      },
      {
        icon: { src: normalizeUrl(faq.messageicon?.url) },
        text: [
          { text: faq.question3, variant: 'h5' },
          { text: faq.answer3, variant: 'paragraph' }
        ]
      },
      {
        icon: { src: normalizeUrl(faq.arrowicon?.url) },
        text: [
          { text: faq.question4, variant: 'h5' },
          { text: faq.Answer4, variant: 'paragraph' }
        ]
      }
    ]
  }

  return (
    <Container as={Reveal}>
      <Box sx={{ textAlign: `center` }}>
        <ContentText content={content.text} />
      </Box>
      {content.text && content.collection && <Divider />}
      <Box sx={styles.accordion}>
        <Accordion>
          {content.collection?.map(({ container, text, icon }, index) => (
            <ContentContainer
              content={container}
              key={`item-${index}`}
              variant='cards.primary'
              sx={{ '& + &': { mt: 3 } }}
            >
              <AccordionItem>
                <AccordionItemHeading>
                  <AccordionItemButton>
                    <Flex sx={{ alignItems: `center` }} p='3'>
                      <Icon content={icon} size='xs' mr='3' p='2' round />
                      <ContentText content={text?.[0]} mb='0' pr='5' />
                    </Flex>
                  </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                  <ContentText content={text?.[1]} pt='0' pb='4' px='5' />
                </AccordionItemPanel>
              </AccordionItem>
            </ContentContainer>
          ))}
        </Accordion>
      </Box>
    </Container>
  )
}

export default FaqBlock01
