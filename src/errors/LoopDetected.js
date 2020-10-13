'use strict'
const { HTTPError } = require('./HTTPError')

const config = {
  statusCode: 508,
  type: 'LoopDetected',
  message: 'The server terminated an operation because it encountered an infinite loop while processing a request with "Depth: infinity".'
}

class LoopDetected extends HTTPError {
  constructor (message) {
    const params = Object.assign({}, config)
    params.message = message || params.message
    super(params)
  }
}

module.exports = { config, LoopDetected }
