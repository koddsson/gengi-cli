import fetch from 'node-fetch'
import Promise from 'promise'

class Gengi {
  constructor() {
    this._currency = ''
    this._value = 1
    this._round = false
  }

  set args(args) {
    this.currency = args.currency
    this.value = args.value
    this.round = args.round
  }

  set currency(newCurrency) {
    if (newCurrency && newCurrency.length === 3) {
      this._currency = newCurrency.toUpperCase()
    }
  }

  get currency() {
    return this._currency
  }

  set value(newValue) {
    const value = parseFloat(newValue)
    if (value) {
      this._value = value
    }
  }

  get value() {
    return this._value
  }

  set round(newValue) {
    if (typeof newValue !== 'undefined') {
      this._round = !!newValue
    }
  }

  get round() {
    return this._round
  }

  get currencies() {
    return new Promise((resolve, reject) => {
      fetch('http://api.gengi.is/currencies').then(response => {
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
        resolve(json.list)
      }).catch(err => reject(err))
    })
  }

  _format(val) {
    let retVal = parseFloat(val)
    if (this.round) {
      retVal = Math.round(val)
    }
    return retVal
  }

  calculate() {
    return this.currencies.then((currencies) => {
      const currency = currencies[this._currency]
      if (!currency) {
        const error = new Error(`${this._currency} is not an available currency.`)
        error.response = currencies
        throw error
      }
      return this._format(currency.rate * this._value)
    })
  }

  list() {
    return this.currencies.then((currencies) => {
      const arr = []
      for (const code in currencies) {
        if (currencies.hasOwnProperty(code)) {
          arr.push(`${code} (${currencies[code].name})`)
        }
      }
      return arr
    })
  }
}

export default Gengi
