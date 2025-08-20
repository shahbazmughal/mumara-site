
import heroBg from './assets/contour-pattern.svg'

export default {
  heroContainer: {
    '::before': {
      content: `" "`,
      size: `full`,
      position: `absolute`,
      top: `-10%`,
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
  tabsContainer: {
    position: `relative`,
    py: [4, 5],
    '::before': {
      position: `absolute`,
      content: `" "`,
      size: `full`,
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
  }
}
