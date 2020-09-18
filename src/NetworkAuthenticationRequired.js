'use strict'
const { HTTPError } = require('./HTTPError')

const config = {
  statusCode: 511,
  type: 'NetworkAuthenticationRequired',
  message: 'The client needs to authenticate to gain network access.'
}

class NetworkAuthenticationRequired extends HTTPError {
  constructor (message) {
    const params = Object.assign({}, config)
    params.message = message || params.message
    super(params)
  }
}

module.exports = { config, NetworkAuthenticationRequired }
