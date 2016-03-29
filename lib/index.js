import gengi from './gengi'
import help from './help'

const args = process.argv.slice(2)
const currency = args[0]
const value = parseFloat(args[1]) || 1

if (currency && currency.length === 3) {
  gengi(currency, value)
} else {
  help()
}
