import React from 'react'
import { Link as GLink } from 'gatsby'
import { Container, Box, Flex, css } from 'theme-ui'
import ContentText from '@solid-ui-components/ContentText'
import ContentImages from '@solid-ui-components/ContentImages'
import PoweredByGatsby from '@solid-ui-components/PoweredByGatsby'
import ContentButtons from '@solid-ui-components/ContentButtons'
import WithDefaultContent from '@solid-ui-blocks/WithDefaultContent'

const styles = {
  wrapper: {
    position: `relative`,
    bg: `footerBg`
  },
  footer: {
    flexDirection: [`column-reverse`, `row`],
    justifyContent: `space-between`,
    alignItems: [`center`, `flex-start`],
    py: 5
  },
  listBlk : {
    display:"block",
    overflowX:"hidden"
  }
}

const FooterBlock01 = ({ content: { text, images, collection } }) => {
  return (
    <Box sx={styles.wrapper}>
      <Container px='4'>
        <Flex sx={styles.footer} xs={styles.listBlk} className="footerJoint">
          <Box sx={{ minWidth: 200 }}>
            <Box pb='1' mb='2' mt={[4, 0]}>
              <GLink to='/'>
                <ContentImages content={{ images }} imageEffect='fadeIn' />
              </GLink>
            </Box>
            <Box pt='2' mb={2}>
              <ContentText
                sx={{ maxWidth: 260 }}
                content={text?.[0]}
              />
            </Box>
            <Box pt='2' mb={[2, 4]}>
              © {new Date().getFullYear()}, All Rights Reserved.
              <Box>
                <GLink to="https://www.dmca.com/Protection/Status.aspx?ID=994c3354-60b0-4def-8dfa-882e801d2cbc" title="DMCA.com Protection Status"><img src="https://images.dmca.com/Badges/_dmca_premi_badge_4.png?ID=994c3354-60b0-4def-8dfa-882e801d2cbc" alt="DMCA.com Protection Status" width="135px" height="28px" /></GLink>
              </Box>
            </Box>
          </Box>
          {collection?.map(
            ({ text, buttons }, index) =>
              buttons && (
                <Box key={`item-${index}`} mb='3' xs={styles.listBlk} className="footer-links-block">
                  <ContentText
                    content={text?.[0]}
                    variant='h5'
                    sx={{ display: [`none`, `block`] }}
                  />
                  <ContentButtons
                    content={buttons}
                    variant='vertical'
                    wrapperStyles={{ flexDirection: [null, `column`] }}
                  />
                </Box>
              )
          )}
        </Flex>
      </Container>
    </Box>
  )
}

FooterBlock01.defaultProps = {
  menuJustify: `flex-end`
}

export default WithDefaultContent(FooterBlock01)
