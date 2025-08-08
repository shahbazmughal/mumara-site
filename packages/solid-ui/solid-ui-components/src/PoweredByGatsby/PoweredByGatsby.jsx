import React from 'react'
import { Link } from 'theme-ui'
import SVG from 'react-inlinesvg'
import gatsbySVG from '../../assets/Gatsby-Logo.svg'

const styles = {
  link: {
    display: `inline-flex`,
    color: `heading`,
    fontWeight: `medium`,
    textDecoration: `none`,
    ':visited': {
      color: `heading`
    },
    ':hover': {
      color: `#663399`
    },
    svg: {
      height: 24,
      ml: 2
    }
  }
}

const PoweredByGatsby = () => (
  <Link
    target='_blank'
    title='Hostings House'
    href='https://www.hostingshouse.com'
    rel='noopener'
    sx={styles.link}
  >
    A Project by Hostings House (Pvt) Ltd.
  </Link>
)

export default PoweredByGatsby
