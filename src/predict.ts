// @ts-ignore
const dfd = require("danfojs-node")
// @ts-ignore
const tf = require("@tensorflow/tfjs-node")
// @ts-ignore
const path = require("path")
const fs = require("fs")
// @ts-ignore
const { processData } = require("./data_process")
// @ts-ignore
const coinData = require('../data/myCryptoCoins.json')
// @ts-ignore
let symbol = coinData.symbol
let dateToday = coinData.today

let mean: number
let std: number

async function loadModel() {
    const model = await tf.loadLayersModel('file://../model/CryptoPredict-' + symbol + '/model.json')
    model.summary()
    return model
}

async function predict(fileName: string) {
    const dataPath = path.join(__dirname, "../data", fileName)
    const dataSet = await dfd.readCSV(dataPath)

    let Xpredict
    Xpredict = dataSet.loc({columns: ["open", "high", "low", "volume"]})

    // Get volume value
    let volumeValue = Xpredict['volume'].values

    // Get mean and std from training data
    const data = await processData(symbol + "-TRAIN.csv")
    mean = data[2]
    std = data[3]

    // Normalize volume
    Xpredict['volume'] = [(volumeValue - mean) / std]

    Xpredict = Xpredict.tensor.arraySync()

    const model = await loadModel()

    const prediction = model.predict(tf.tensor(Xpredict))
    const predictionArray = prediction.arraySync()
    const priceNumber = predictionArray[0][0]
    const price = priceNumber.toFixed(4)
    console.log("Your predicted closing price on " + symbol + " for " + dateToday + " is " + price + " GBP.")

    const fileSaveDate = Date.now()

    fs.writeFile("../data/results/" + symbol + ' ' + fileSaveDate, "Your predicted closing price on " + symbol + " for " + dateToday + " is " + price + " GBP.", function(err: any) {
        if(err) {
            return console.log(err)
        }
        console.log("Your prediction data has been saved!")
    })

}

predict(symbol + '-PREDICT.csv').then()