import each from 'lodash/each'

const _processArgs = () => {
  const args = process.argv.slice(2)
  const ret = {
    currency: '',
    value: 1,
    help: false,
    list: false,
    round: false,
  }

  each(args, (arg) => {
    if (!arg) { return }
    if (parseFloat(arg)) {
      ret.value = parseFloat(arg)
    } else if (arg === 'list') {
      ret.list = true
    } else if (arg === '--round' || arg === '-r') {
      ret.round = true
    } else if (arg === '--help' || arg === '-h' || arg === '-?' || arg === '?') {
      ret.help = true
    } else if (arg.length === 3) {
      ret.currency = arg
    }
  })

  return ret
}

export default _processArgs()
