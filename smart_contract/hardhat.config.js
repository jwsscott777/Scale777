// https://eth-ropsten.alchemyapi.io/v2/iHZGQeQvqWs7GAlxl6NIP7eUQ7LQdOWW

require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.0',
  networks: {
    ropsten: {
      url: 'https://eth-ropsten.alchemyapi.io/v2/iHZGQeQvqWs7GAlxl6NIP7eUQ7LQdOWW',
      accounts: [ '0297d640a1a665f51ed3b88e04405dd9326060d381286e44ec6ba7b20dc165c3' ]
    }
  }
}