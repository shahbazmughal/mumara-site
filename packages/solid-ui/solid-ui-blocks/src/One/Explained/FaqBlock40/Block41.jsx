import React from 'react'
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
import WithDefaultContent from '@solid-ui-blocks/WithDefaultContent'
import ContentButtons from '@solid-ui-components/ContentButtons'
import bg41 from "./bg41.png"

const styles = {
  accordion: {
    '.accordion__button': {
      cursor: `pointer`,
      position: `relative`,
      outline: `none`,
      color: `white`,
      transition: `all 0.15s ease-in`
    },
    '.accordion__button:hover': {
      opacity: 0.95,
      '&::before': {
        borderColor: `#ffd34a`
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
      right: 0,
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
    '.css-1l3rlkf': {
      backgroundColor: '#191919',
      borderRadius: '0',
      boxShadow: 'none',
      borderBottom: '1px solid#6B6B6B !important',
      _webkit_Transition: '-webkit-transform 250ms ease, box-shadow 250ms ease, color 250ms ease',
      _webkit_Transition: 'transform 250ms ease, box-shadow 250ms ease, color 250ms ease',
      transition: 'transform 250ms ease, box-shadow 250ms ease, color 250ms ease'
    },
    '.css-1chvpb5': {
      color: '#dfdfdf',
      paddingLeft: '3rem',
      paddingRight: '2rem',
      paddingTop: `10px`,
      paddingBottom: `10px`
    },
    '.css-8tdzxf': {
      color: '#ffffff'
    },
    '.accordion__button:hover::before':{
      borderColor: '#ffd34a'
    },
    '.accordion': {
      padding: `5px 25px`,
      backgroundColor: `#191919`,
      borderRadius: `20px`,
    },
    '.css-5ihtu5 .accordion__item': {
      paddingTop: `5px`,
      backgroundColor: `#191919`,
      borderStyle: `solid !important`,
      borderWidth: `0px 0px 1px 0px !important`,
      borderColor: `#6B6B6B !important`,
      borderRadius: `0px`,
      margin: `0px 5px`
    },
    '.css-1l3rlkf:last-child': {
      border: `none !important`,
    },
    '.css-1l3rlkf + .css-1l3rlkf': {
      marginTop: `0rem`,
      boxShadow: `none !important`,
    }, 
    '.css-9h7l2t': {
      boxShadow: `none !important`,
    },
    '.one-section-41':{
      backgroundColor: `#000000`,
      backgroundPosition: `top center`,
      backgroundRepeat: `repeat`,
      backgroundSize: `contain`
    },
    '.css-166hnro':{
      padding: `22px 15px`
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

const FaqBlock41 = ({ content: { text, collection, buttons }}) => (
  <div className='one-section one-section-41' style={{ backgroundImage: `url(${bg41})`}}>
    <Container as={Reveal}>
      <Box sx={{ textAlign: `center` }}>
        <ContentText content={text} />
      </Box>
      {text && collection && <Divider />}
      <Box sx={styles.accordion}>
        <Accordion>
          {collection?.map(({ container, text, icon, buttons }, index) => (
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
                  <ContentText content={text?.[1]} pt='0' pb='0' px='5' ml='2' />
                  <Box pt='0' pb='4' px='5' ml='2'>
                    {buttons && (
                      <>
                        <Divider space={1} />
                        <ContentButtons content={buttons} />
                      </>
                    )}
                  </Box>
                </AccordionItemPanel>
              </AccordionItem>
            </ContentContainer>
          ))}
        </Accordion>
      </Box>
    </Container>
  </div>
)

export default WithDefaultContent(FaqBlock41)
