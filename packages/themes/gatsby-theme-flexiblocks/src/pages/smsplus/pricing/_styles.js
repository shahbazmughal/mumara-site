/**
 *
 * These styles are solely for adding [background images] or
 * [background colors] to blocks.
 *
 */

export default {
  heroContainer: {
    position: `relative`,
    pt: [6],
    '::before': {
      position: `absolute`,
      content: `" "`,
      width: `full`,
      height: `100%`,
      top: 0,
      right: 0,
      zIndex: -1,
      bg: `white`
    }
  },
  heroContainer2: {
    position: `relative`,
    pt: [0]
  }
}
