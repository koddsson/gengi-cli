import chalk from 'chalk'

export default () => {
  console.log(`usage: gengi ${chalk.yellow('<currency>')} ${chalk.blue('<value>')}
${chalk.yellow('currency (required)')}: Standard three letter currency code (ISO 4217)
${chalk.blue('value (optional)')}: Numeric value, defaults to 1
  `)
}
