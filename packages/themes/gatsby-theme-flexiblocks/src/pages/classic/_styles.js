/**
 *
 * These styles are solely for adding [background images] or
 * [background colors] to blocks.
 *
 */

import heroBg from '../classic/assets/contour-pattern.svg'

export default {
  html: {
    overflowX: 'hidden'
  },
  body : {
    overflowX: 'hidden'
  },
  heroContainer: {
    position: `relative`,
    paddingTop:100,
    '::before': {
      content: `" "`,
      size: `full`,
      position: `absolute`,
      top: 0,
      left: 0,
      zIndex: -1,
      background: t =>
        `url(${heroBg}) no-repeat center 0, linear-gradient(
          180deg,
          ${`#cfe8e6`} 0%,
          ${`#FFFFFF`} 100%
        )`,
      backgroundSize: `100%`
    }
  },
  strategiesContainer: {
    position: `relative`,
    '::before': {
      content: `" "`,
      width: `full`,
      height: `150%`,
      position: `absolute`,
      top: 0,
      left: 0,
      zIndex: -1,
      background: t =>
        `url(${heroBg}) no-repeat center 0, linear-gradient(
          180deg,
          ${t.colors.alphaLighter} 0%,
          ${t.colors.background} 100%
        )`,
      backgroundSize: `100%`
    }
  },
  whyChooseUsContainer: {
    bg: `omegaLighter`,
    borderRadius: `xl`,
    py: 5,
    px: [4, 0]
  },
  footer: {
    display:"block",
    overflowX: "hidden"
  }
}
