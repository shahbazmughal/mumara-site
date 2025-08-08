/**
 *
 * These styles are solely for adding [background images] or
 * [background colors] to blocks.
 *
 */

export default {
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
      bg: `white`
    }
  },
  heroContainer2: {
    position: `relative`,
    pt: [0]
  }
}
