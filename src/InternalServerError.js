'use strict'
const { HTTPError, config: HTTPErrorConfig } = require('./HTTPError')

const config = Object.assign({}, HTTPErrorConfig)

class InternalServerError extends HTTPError {
  constructor (message) {
    const params = Object.assign({}, config)
    params.message = message || params.message
    super(params)
  }
}

module.exports = { config, InternalServerError }
