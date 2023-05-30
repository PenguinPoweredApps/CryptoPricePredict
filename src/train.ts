// @ts-ignore
const { processData } = require("./data_process")
// @ts-ignore
const { getModel } = require("./model")
// @ts-ignore
const coinData = require('../data/myCryptoCoins.json')
// @ts-ignore
const trainingParameters = require('../data/trainingParameters.json')
// @ts-ignore
const symbol = coinData.symbol
const epochs = trainingParameters.epochs
const batchSize = trainingParameters.batchSize
const validationSplit = trainingParameters.validationSplit

async function train() {
    const data = await processData(symbol + "-TRAIN.csv")
    const Xtrain = data[0]
    const ytrain = data[1]

    const model = getModel()

    console.time("Training time")

    await model.fit(Xtrain, ytrain, {
        epochs: epochs,
        batchSize: batchSize,
        validationSplit: validationSplit
    }).then(() => {
        console.timeEnd("Training time")
    })

    await model.save("file://../model/CryptoPredict-" + symbol)
}

train().then()
