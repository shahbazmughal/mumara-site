/**
 *
 * These styles are solely for adding [background images] or
 * [background colors] to blocks.
 *
 */

import heroBg from './assets/contour-pattern.svg'
import bg1 from './assets/bg1.png'

export default {
  html: {
    overflowX: 'hidden'
  },
  body : {
    overflowX: 'hidden'
  },
  heroContainer: {
    position: `relative`,
    paddingTop:120,
    '::before': {
      content: `" "`,
      size: `full`,
      position: `absolute`,
      top:0,
      left: 0,
      zIndex: -1,
      background: t =>
        `url(${heroBg}) no-repeat center 0, linear-gradient(
          180deg,
          ${`#cfe8e6`} 0%,
          ${`#FFFFFF`} 100%
        )`,
      backgroundSize: `100%`,
      bg: `omegaLighter`
    }
  },
  footer: {
    display:"block",
    overflowX: "hidden"
  },
  landingBg: {
    background: `url(${bg1})`,
    border:0
  },
  pixelBg: {
    background: `linear-gradient(
      180deg,
      ${`#fbfbfb`} 0%,
      ${`#98d3b1`} 100%
    )`,
    border:0
  }
}
