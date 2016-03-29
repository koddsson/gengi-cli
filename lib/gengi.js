import fetch from 'node-fetch'
import chalk from 'chalk'

export default (currency, value) => {
  fetch(`http://api.gengi.is/calculate/${currency}/${value}`).then(response => {
    if (response.status !== 200) {
      const error = new Error(response.statusText)
      error.response = response
      throw error
    } else {
      return response
    }
  }).then(
    res => res.json()
  ).then(json => {
    const propName = `${currency.toUpperCase()}value`
    if (propName in json) {
      console.log(json[propName])
    } else {
      console.log(json)
    }
  }).catch(err => console.log(chalk.red(err.message)))
}
