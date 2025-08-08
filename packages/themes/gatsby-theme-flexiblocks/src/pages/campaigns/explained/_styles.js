/**
 *
 * These styles are solely for adding [background images] or
 * [background colors] to blocks.
 *
 */

import heroBg from './assets/herobg.png'
import cc from './assets/cc.png'
import cccta from './assets/cc-cta.png'
import heroBg2 from './assets/contour-pattern.svg'
import check from './assets/check.png'
import marketer from './assets/marketer.jpg'
import roi from './assets/roi.jpg'
import sec3e from './assets/img-svc-section-3e.jpg'
import sec3d from './assets/img-svc-section-3d.jpg'
import check2 from './assets/check2.png'
import heigherlevel from './assets/higher-level.jpg'
import j100 from './assets/100.jpg'
import templates from './assets/templates.png'
import salevideo from './assets/sales-video.jpg'
import algorithm from './assets/algorithm.jpg'
import adown from './assets/arrow-down.jpg'
import statistics from './assets/statistics.jpg'
import topcurve from './assets/top-curve.jpg'
import dripconfigure from './assets/drip-configure.jpg'
import takingautomation from './assets/taking-automation.jpg'
import targetemail from './assets/target-email.jpg'
import builder from './assets/builder.jpg'
import smtp from './assets/smtp.jpg'
import analysis from './assets/analysis.jpg'
import r1 from './assets/review-1.jpg'
import r2 from './assets/review-2.jpg'
import r3 from './assets/review-3.jpg'
import r4 from './assets/review-4.jpg'
import r5 from './assets/review-7.jpg'
import r6 from './assets/review-8.jpg'
import r7 from './assets/review-9.jpg'
import r8 from './assets/review-10.jpg'
import toplcurve from './assets/top-lcurve.png'
import thumb from './assets/thumb.png'

export default {
  html: {
    overflowX: 'hidden'
  },
  body : {
    overflowX: 'hidden'
  },
  footer: {
    display:"block",
    overflowX: "hidden"
  },
  heroContainer: {
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
        `url(${check}) no-repeat center 0, linear-gradient(
          180deg,
          ${t.colors.alphaLighter} 0%,
          ${t.colors.background} 100%
        )`,
      backgroundSize: `100%`
    }
  },
  heroContainerFeature: {
      backgroundImage:`url(${heroBg})`,
      backgroundImage:`url(${cc})`,
      backgroundImage:`url(${cccta})`,
      backgroundImage:`url(${marketer})`,
      backgroundImage:`url(${roi})`,
      backgroundImage:`url(${sec3e})`,
      backgroundImage:`url(${sec3d})`,
      backgroundImage:`url(${check2})`,
      backgroundImage:`url(${heigherlevel})`,
      backgroundImage:`url(${j100})`,
      backgroundImage:`url(${templates})`,
      backgroundImage:`url(${salevideo})`,
      backgroundImage:`url(${algorithm})`,
      backgroundImage:`url(${adown})`,
      backgroundImage:`url(${statistics})`,
      backgroundImage:`url(${topcurve})`,
      backgroundImage:`url(${dripconfigure})`,
      backgroundImage:`url(${takingautomation})`,
      backgroundImage:`url(${targetemail})`,
      backgroundImage:`url(${builder})`,
      backgroundImage:`url(${smtp})`,
      backgroundImage:`url(${analysis})`,
      backgroundImage:`url(${r1})`,
      backgroundImage:`url(${r2})`,
      backgroundImage:`url(${r3})`,
      backgroundImage:`url(${r4})`,
      backgroundImage:`url(${r5})`,
      backgroundImage:`url(${r6})`,
      backgroundImage:`url(${r7})`,
      backgroundImage:`url(${r8})`,
      backgroundImage:`url(${toplcurve})`,
      backgroundImage:`url(${thumb})`,
      display: `none`
  }
}
