import React from 'react'
import { Container, Flex, Box } from 'theme-ui'
import Divider from '@solid-ui-components/Divider'
import ContentButtons from '@solid-ui-components/ContentButtons'
import WithDefaultContent from '@solid-ui-blocks/WithDefaultContent'

const StatsBlock01 = ({
  content: { text, container, collection, buttons }
}) => (
  <Container sx={{ textAlign: `center` }}>
      {buttons && (
        <>
          <Divider />
          <ContentButtons content={buttons} />
        </>
      )}
  </Container>
)

export default WithDefaultContent(StatsBlock01)
