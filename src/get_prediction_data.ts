// @ts-ignore
let parse = require('json2csv')
// @ts-ignore
let writeFileSync = require('fs').writeFileSync
// @ts-ignore
let yahooFinance = require('yahoo-finance')

// @ts-ignore
const coinData = require('../data/myCryptoCoins.json')
// @ts-ignore
let symbol = coinData.symbol
// @ts-ignore
let today = coinData.today

yahooFinance.historical({
    symbol: symbol,
    from: today,
    to: today,
    period: 'd'
}, function (err: any, quotes: any) {
    if (err) { throw err }
    if (quotes[0]) {
        const csv = parse.parse(quotes)
        writeFileSync('../data/' + symbol + '-PREDICT.csv', csv)
    } else {
        console.log('N/A')
    }
})