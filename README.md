# Crypto Price Predictor

Crypto Price Predictor is a Node application written in TypeScript that utilizes the Danfo JS and Tensorflow JS frameworks for data analysis, model training, and prediction. This application allows you to train a machine learning model to predict the price of a cryptocurrency for the following day based on historical data.

**Disclaimer: This application is provided for educational purposes only and does not constitute sound investing advice. Prior research and understanding of the Tensorflow JS and Danfo JS frameworks are recommended.**

## Table of Contents

- [Installation](#installation)
- [Configuration](#configuration)
- [Usage](#usage)
  - [Downloading Data](#downloading-data)
  - [Training the Model](#training-the-model)
  - [Predicting Prices](#predicting-prices)
- [Contributing](#contributing)
- [License](#license)

## Installation

Before installing Crypto Price Predictor, ensure that you have [Node.js](https://nodejs.org/) and [npm](https://www.npmjs.com/) (Node Package Manager) installed on your machine.

1. Clone the repository:

```shell
git clone https://github.com/PenguinPoweredApps/CryptoPricePredict.git
```

2. Navigate to the project directory:

```shell
cd CryptoPricePredict
```

3. Install the dependencies:

```shell
npm install
```

## Configuration

Before running the Crypto Price Predictor application, you need to configure some settings. These settings are stored in JSON files located in the `data` folder. Adjust the following files as needed:

- `myCryptoCoins`: Contains the configuration for downloading and using training data. Modify the JSON properties to specify the cryptocurrency and the time range for training data.
- `trainingParameters`: Contains the configuration for the model training hyper parameters. Modify the JSON properties to specify the required settings for the hyper parameters.

Ensure that you provide the necessary information in the JSON files, as the properties are self-explanatory.

## Usage

Crypto Price Predictor provides several scripts to perform different tasks. Follow the instructions below to download data, train the model, and predict prices.

### Downloading Data

To download the required data from the Yahoo Finance website for the cryptocurrency you want to train and predict, use the following scripts:

```shell
npm run getTrainingData
```
```shell
npm run getPredictionData
```

This script will utilize the configurations specified in the `myCryptoCoins.json` file to download the necessary data.

### Training the Model

To train the machine learning model using the downloaded training data, execute the following script:

```shell
npm run train
```

This script will use Danfo JS and Tensorflow JS frameworks to perform the necessary data analysis, model training, and save the trained model.

### Predicting Prices

To predict prices using the trained model, run the following script:

```shell
npm run predict
```

This script will utilize the trained model and the testing data to predict the prices for the following day. The predicted prices will be displayed in the console.

Alternatively, you can run both the training and prediction sequences in one step using the following scripts:

```shell
npm run trainSequence
```
```shell
npm run predictSequence
```

This script will automatically train the model and then predict the prices using the trained model.

## Contributing

Contributions are welcome! If you have any improvements, suggestions, or bug fixes, please feel free to open issues or submit pull requests. Please ensure that your contributions adhere to the existing code style and follow the project's guidelines.

## License

This project is licensed under the [MIT License](LICENSE).
