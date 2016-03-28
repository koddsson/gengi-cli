const process = require('process')
const fetch = require('node-fetch')

const args = process.argv.slice(2)
const currency = args[0]
const value = parseFloat(args[1]) || 1

if (!currency) {
  // TODO: Do this more elegantly! F.x. show usage instructions
  const error = new Error('No currency provided!')
  throw error
}

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
}).catch(err => console.log(err.message))
