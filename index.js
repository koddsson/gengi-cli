const process = require('process')
const fetch = require('node-fetch')

const args = process.argv.slice(2)
const currency = args[0]
const value = args[1]

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
  const propName = `${currency}value`
  if (propName in json) {
    console.log(json[propName])
  } else {
    console.log(json)
  }
}).catch(err => console.log(err.message))
