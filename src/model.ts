// @ts-ignore
const tf = require("@tensorflow/tfjs-node")
// @ts-ignore
const trainingParameters = require('../data/trainingParameters.json')
const LEARNING_RATE = trainingParameters.learningRate

// @ts-ignore
function getModel() {
    const model = tf.sequential()

    // Add the input layer
    model.add(
    tf.layers.dense({inputShape: [4], units: 128, activation: "relu"}))
    // Add a hidden layer
    model.add(tf.layers.dense({units: 64, activation: "relu"}))
    // Add a hidden layer
    model.add(tf.layers.dense({units: 32, activation: "relu"}))
    // Add a hidden layer
    model.add(tf.layers.dense({units: 16, activation: "relu"}))
    // Add a hidden layer
    model.add(tf.layers.dense({units: 8, activation: "relu"}))
    // Add the output layer
    model.add(tf.layers.dense({units: 1, activation: "linear"}))
    
    // Compile the model
    model.compile({loss: tf.losses.meanSquaredError, metrics: ['mse'], optimizer: tf.train.adam(LEARNING_RATE)})

    model.summary()
    return model
}

module.exports = { getModel }