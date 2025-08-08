import React from 'react'
import { Container, Flex, Box, css } from 'theme-ui'
import Divider from '@solid-ui-components/Divider'
import ContentText from '@solid-ui-components/ContentText'
import ContentButtons from '@solid-ui-components/ContentButtons'
import ListItem from '@solid-ui-components/ListItem2'
import WithDefaultContent from '@solid-ui-blocks/WithDefaultContent'

const styles = {
  listItem: {
    flexBasis: [`100%`, `1/2`, null, `1/3`],
    alignItems: `center`,
    justifyContent: `left`,
    p: 2
  }
}

const FeaturesBlock01 = ({ content: { text, collection, buttons } }) => (
  <Container>
    <Box sx={{ textAlign: `center` }}>
      <ContentText content={text}  />
    </Box>
    {collection && (
      <>
        <Flex sx={{ flexWrap: `wrap`, mx: -3 }}>
          {collection?.map((props, index, buttons) => (
            <>
            <Box
              css={css(styles.listItem)}
              key={'k-'+index}
            >
              <ListItem {...props} key={index} iconProps={{ size: 'sm' }} center />
            </Box>
            </>
          ))}
        </Flex>
      </>
    )}
    {buttons && (
      <Box
        css={css({ mb: [4, null, null, 0] })}
        key={'b-'+index}
      >
        {buttons && (
          <>
            <Divider space={3} />
            <ContentButtons content={buttons} sx={{ textAlign: `center` }} />
          </>
        )}
      </Box>
    )}
  </Container>
)

export default WithDefaultContent(FeaturesBlock01)
