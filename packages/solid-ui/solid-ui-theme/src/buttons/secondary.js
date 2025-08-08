import common from './common'

export default {
  ...common.button,
  color: `white`,
  '::after': {
    ...common.button['::after'],
    bg: `#007bff`,
    borderColor: `#007bff`
  }
}
