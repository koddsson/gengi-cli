import args from './args'
import Gengi from './gengi'
import usage from './usage'
import chalk from 'chalk'

const gengi = new Gengi()
gengi.args = args

if (args.help || (args.list && gengi.currency) || (!args.list && !gengi.currency)) {
  console.log(usage)
} else if (args.list) {
  gengi.list().then((currencies) => {
    console.log(currencies.join('\n'))
  }).catch((err) => {
    console.log(chalk.red(err))
    console.log(usage)
  })
} else if (gengi.currency) {
  gengi.calculate().then((val) => {
    console.log(val)
  }).catch((err) => {
    console.log(chalk.red(err))
    console.log(usage)
  })
}
