import common from './common'

export default {
  ...common.button,
  color: `white`,
  '::after': {
    ...common.button['::after'],
    bg: `#0f977e`,
    borderColor: `#0f977e`
  }
}
