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
let startDate = coinData.startDate

let dd
let mm
let yyyy

// Get today's date
// @ts-ignore
let today = new Date()
let date = today.getDate()
let month = today.getMonth() + 1
let year = today.getFullYear()

if ( date < 10 )
{
    dd = date.toString()
    dd = '0' + dd
}

if ( date >= 10 )
{
    dd = date.toString()
}

if ( month < 10 )
{
    mm = month.toString()
    mm = '0' + mm
}

if ( month >= 10 )
{
    mm = month.toString()
}

yyyy = year

// Format today's date to international format
let toDate = yyyy + '-' + mm + '-' + dd

yahooFinance.historical({
    symbol: symbol,
    from: startDate,
    to: toDate,
    period: 'd'
}, function (err: any, quotes: any) {
    if (err) { throw err }
    if (quotes[0]) {
        const csv = parse.parse(quotes)
        writeFileSync('../data/' + symbol + '-TRAIN.csv', csv)
    } else {
        console.log('N/A')
    }
})