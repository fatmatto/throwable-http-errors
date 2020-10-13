'use strict'
const { HTTPError } = require('./HTTPError')

const config = {
  statusCode: 426,
  type: 'UpgradeRequired',
  message: 'The server refuses to perform the request using the current protocol but might be willing to do so after the client upgrades to a different protocol.'
}

class UpgradeRequired extends HTTPError {
  constructor (message) {
    const params = Object.assign({}, config)
    params.message = message || params.message
    super(params)
  }
}

module.exports = { config, UpgradeRequired }
