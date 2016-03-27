const process = require('process');
const fetch = require('node-fetch');

const args = process.argv.slice(2);
const currency = args[0];
const value = args[1];

fetch(`http://api.gengi.is/calculate/${currency}/${value}`).then(response => {
  if (response.status !== 200) {
    var error = new Error(response.statusText)
    error.response = response
    throw error
  } else {
    return response;
  }
}).then(
  res => res.json()
).then(json => {
  const value = `${currency}value`;
  if (value in json) {
    console.log(json[value]);
  } else {
    console.log(json);
  }
}).catch(err => console.log(err.message));
