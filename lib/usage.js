import chalk from 'chalk'

let usage = 'usage: gengi <currency> <value> [-r | --round] [-h | --help]'
usage += '\n'
usage += `\n${chalk.bold('currency:')}     Standard three letter currency code (ISO 4217)`
usage += `\n${chalk.bold('value:')}        Numeric value, defaults to 1`
usage += `\n${chalk.bold('-r | --round:')} Round calculated number`
usage += `\n${chalk.bold('-h | --help:')}  Show these instructions`
usage += '\n\n'
usage += chalk.italic('Other available commands')
usage += `\n${chalk.bold('gengi list')}    Display list of all available currencies`

export default usage
