/**
 *
 * These styles are solely for adding [background images] or
 * [background colors] to blocks.
 *
 */
import heroBg from './assets/dot-pattern.svg'
import holographic from './assets/holographic.jpg'
import heroBg3 from './assets/contour-pattern.svg'
import arrow from './assets/arrows.png'
import bannerBg from './assets/banner_bg.png'
import bg from './bg-3.jpg'

export default {
  heroContainer: {
    bg: `#F6F7FA`,
    pt: [5, 6]
  },
  heroContainer2Main: {
    position: `relative`,
  },
  bannerContainer: {
    '::before': {
      content: `" "`,
      size: `full`,
      position: `absolute`,
      top: 0,
      left: 0,
      right:0,
      bottom:0,
      zIndex: -1,
      background: t =>
        `url(${bannerBg}) no-repeat center 0`,
      backgroundSize: `cover`
    }
  },
  heroContainer2: {
    '::before': {
      content: `" "`,
      size: `full`,
      position: `absolute`,
      top: `-10%`,
      left: 0,
      zIndex: -1,
      background: t =>
        `url(${heroBg3}) no-repeat center 0, linear-gradient(
          180deg,
          ${`#cfe8e6`} 0%,
          ${`#FFFFFF`} 100%
        )`,
      backgroundSize: `100%`
    }
  },
  buildBrandContainer: {
    position: `relative`,
    '::before': {
      content: `" "`,
      size: `full`,
      position: `absolute`,
      right: 0,
      top: `13%`,
      zIndex: -1,
      background: `url(${heroBg}) no-repeat center center`,
      opacity: 0.3,
      backgroundSize: `40%`
    }
  },
  featureThreeContainer: {
    position: `relative`,
    py: [4],
    '::before, ::after': {
      position: `absolute`,
      content: `" "`,
      size: `full`,
      top: `30%`,
      right: `0%`,
      zIndex: -1
    },
    '::after': {
      background: `linear-gradient(
          180deg,
          rgba(255,255,255,1) 0%,
          rgba(255,255,255,0.6) 50%,
          rgba(255,255,255,1) 100%
        )`
    },
    '::before': {
      background: `url(${holographic}) no-repeat center center`,
      backgroundSize: `cover`
    }
  },
  whyChooseUsContainer: {
    bg: `omegaDarker`,
    borderRadius: `xl`,
    py: 5,
    px: [4, 0]
  },
  testimonialsContainer: {
    position: `relative`,
    pt: 6,
    pb: 5,
    '::before': {
      position: `absolute`,
      content: `" "`,
      width: `full`,
      height: `full`,
      top: 0,
      right: 0,
      zIndex: -1,
      borderRadius: `xl`,
      background: `linear-gradient(
        180deg,
        #f7f9fe 0%,
        #f4f4f8 100%
      )`
    }
  }
}
