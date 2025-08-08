/**
 *
 * These styles are solely for adding [background images] or
 * [background colors] to blocks.
 *
 */

import image1 from "./team-shape.svg"
import image5 from "./about_hero.jpg"
import image7 from "./shahbazmughal.jpg"
import image14 from "./001.png"
import image15 from "./002.png"
import image16 from "./003.png"

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
      bg: `white`,
      //bg: `white`,
      background: t =>  `url(${image7})`,
      backgroundSize:0
    }
  },
  heroContainer2: {
    position: `relative`,
    pt: [0]
  }
}
