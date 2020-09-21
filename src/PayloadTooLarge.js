'use strict'
const { HTTPError } = require('./HTTPError')

const config = {
  statusCode: 413,
  type: 'PayloadTooLarge',
  message: 'The server is refusing to process a request because the request payload is larger than the server is willing or able to process.'
}

class PayloadTooLarge extends HTTPError {
  constructor (message) {
    const params = Object.assign({}, config)
    params.message = message || params.message
    super(params)
  }
}

module.exports = { config, PayloadTooLarge }
