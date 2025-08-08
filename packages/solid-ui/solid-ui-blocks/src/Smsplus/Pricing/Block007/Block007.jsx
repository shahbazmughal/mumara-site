import React from 'react'
import { Container, Flex, Box } from 'theme-ui'
import Reveal from '@solid-ui-components/Reveal'
import Divider from '@solid-ui-components/Divider'
import ContentContainer from '@solid-ui-components/ContentContainer'
import ContentText from '@solid-ui-components/ContentText'
import WithDefaultContent from '@solid-ui-blocks/WithDefaultContent'
import './block007.css'

const FeaturesBlock07 = ({ content: { text = [], collection, buttons } }) => (
  <Container sx={{ textAlign: `left` }}>
    <Box>
      <ContentText content={text} sx={{ textAlign: `center` }} />
    </Box>
    {collection && (
      <>
        <Divider space='0' />
        <Reveal effect='fadeInDown'>
          <div className='cprow'>
            <Flex sx={{ justifyContent: `start`, flexWrap: `wrap`, m: 0 }}>
              
                <Box
                  sx={{ flexBasis: [`1`, `1/2`, null, `1/2`], p: 2 }}
                >
                  <ContentContainer >
                    <div className="classic-price-blk block1">
                      <ul className="price-features">
                        <li>
                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="css-31ketc"><path d="M12,5c-3.859,0-7,3.141-7,7s3.141,7,7,7s7-3.141,7-7S15.859,5,12,5z M12,17c-2.757,0-5-2.243-5-5s2.243-5,5-5s5,2.243,5,5 S14.757,17,12,17z"></path><path d="M12,9c-1.627,0-3,1.373-3,3s1.373,3,3,3s3-1.373,3-3S13.627,9,12,9z"></path></svg>
                          Hosted on the cloud
                        </li>
                        <li>
                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="css-31ketc"><path d="M12,5c-3.859,0-7,3.141-7,7s3.141,7,7,7s7-3.141,7-7S15.859,5,12,5z M12,17c-2.757,0-5-2.243-5-5s2.243-5,5-5s5,2.243,5,5 S14.757,17,12,17z"></path><path d="M12,9c-1.627,0-3,1.373-3,3s1.373,3,3,3s3-1.373,3-3S13.627,9,12,9z"></path></svg>
                          Auto deployment in less than 5 minutes
                        </li>
                        <li>
                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="css-31ketc"><path d="M12,5c-3.859,0-7,3.141-7,7s3.141,7,7,7s7-3.141,7-7S15.859,5,12,5z M12,17c-2.757,0-5-2.243-5-5s2.243-5,5-5s5,2.243,5,5 S14.757,17,12,17z"></path><path d="M12,9c-1.627,0-3,1.373-3,3s1.373,3,3,3s3-1.373,3-3S13.627,9,12,9z"></path></svg>
                          All features included
                        </li>
                        <li>
                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="css-31ketc"><path d="M12,5c-3.859,0-7,3.141-7,7s3.141,7,7,7s7-3.141,7-7S15.859,5,12,5z M12,17c-2.757,0-5-2.243-5-5s2.243-5,5-5s5,2.243,5,5 S14.757,17,12,17z"></path><path d="M12,9c-1.627,0-3,1.373-3,3s1.373,3,3,3s3-1.373,3-3S13.627,9,12,9z"></path></svg>
                          Your own custom branding
                        </li>
                      </ul>
                    </div>
                  </ContentContainer>
                </Box>
                <Box
                  sx={{ flexBasis: [`1`, `1/2`, null, `1/2`], p: 2 }}
                >
                  <ContentContainer >
                    <div className="classic-price-blk block2">
                      <div className="text-center">
                        <h4 className="mb-4 ">Starting From</h4>
                        <h2 className="mb-0 mt-2 price-number smsplus ">$47</h2>
                        <h3 className="mb-4 ">per month</h3>
                        <p className="font-lg">
                          Not available for purchase at the moment
                        </p>
                      </div>
                    </div>
                  </ContentContainer>
                </Box>
            </Flex>
          </div>
        </Reveal>
      </>
    )}
  </Container>
)

export default WithDefaultContent(FeaturesBlock07)
