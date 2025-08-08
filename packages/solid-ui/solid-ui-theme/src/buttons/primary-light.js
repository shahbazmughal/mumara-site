import common from './common'

export default {
  ...common.button,
  color: `#0f977e`,
  '::before': {
    display: `none`
  },
  '::after': {
    ...common.button['::after'],
    bg: `#b6ece2`,
    borderColor: `#b6ece2`
  }
}
