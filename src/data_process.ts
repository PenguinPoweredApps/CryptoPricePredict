// @ts-ignore
const dfd = require("danfojs-node")
// @ts-ignore
const path = require("path")

// @ts-ignore
async function processData(fileName: string) {
    const dataPath = path.join(__dirname, "../data", fileName)
    const dataSet = await dfd.readCSV(dataPath)
        
    // Create dataFrames with only the open, close, high and low columns
    let Xtrain, ytrain
    Xtrain = dataSet.loc({columns: ["open", "high", "low", "volume"]})
    ytrain = dataSet.loc({columns: ["close"]})

    // Get the mean and standard deviation of the volume column
    let mean = Xtrain['volume'].mean()
    let std = Xtrain['volume'].std()

    // Normalize the data
    let scaler = new dfd.StandardScaler()
    scaler.fit(Xtrain['volume'])
    Xtrain['volume'] = scaler.transform(Xtrain['volume'])

    return [Xtrain.tensor, ytrain.tensor, mean, std]

}

module.exports = { processData }