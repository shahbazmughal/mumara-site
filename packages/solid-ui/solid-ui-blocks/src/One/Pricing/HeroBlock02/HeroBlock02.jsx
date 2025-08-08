import React from 'react'
import { Container, Flex, Box, css } from 'theme-ui'
import ContentText from '@solid-ui-components/ContentText'
import Reveal from '@solid-ui-components/Reveal'
import Divider from '@solid-ui-components/Divider'
import ContentImages from '@solid-ui-components/ContentImages'
import ContentButtons from '@solid-ui-components/ContentButtons'
import QuickSignupForm from '@solid-ui-components/QuickSignupForm'
import WithDefaultContent from '@solid-ui-blocks/WithDefaultContent'


function htmlDecode(input) {
  var doc = new DOMParser().parseFromString(input, "text/html");
  return doc.documentElement.textContent;
}

const HeroBlock02 = ({ content: { text, buttons, form, images } }) => (
  <Container>
    <Flex
      sx={{
        alignItems: [null, null, null, `center`],
        flexDirection: [
          null,
          null
        ]
      }}
    >
      <Box
        sx={{
          flexBasis: `2/5`,
          textAlign: [`center`, null, null, `left`]
        }}
      >
        <Reveal effect='fadeInDown'>
          <ContentText content={text} />
        </Reveal>
        {buttons && (
          <Reveal
            effect='fadeInRight'
            delay={1}
            css={css({ mb: [4, null, null, 0] })}
          >
            {buttons && (
              <>
                <Divider space={3} />
                <ContentButtons content={buttons} />
              </>
            )}
          </Reveal>
        )}
        {form && (
          <Reveal
            effect='fadeInRight'
            delay={1}
            css={css({ mb: [4, null, null, 0] })}
          >
            <QuickSignupForm {...form} space={3} />
          </Reveal>
        )}
      </Box>
      <Box
        sx={{
          flexBasis: [null, null, null, `3/5`],
          position: `relative`,
          textAlign: `center`
        }}
      >
        <ContentImages
          content={{ images }}
          loading='eager'
          imagePosition='center'
        />
      </Box>
    </Flex>
  </Container>
)

export default WithDefaultContent(HeroBlock02)
