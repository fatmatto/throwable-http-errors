'use strict'
const { HTTPError } = require('./HTTPError')

const config = {
  statusCode: 431,
  type: 'RequestHeaderFieldsTooLarge',
  message: 'The server is unwilling to process the request because its header fields are too large.'
}

class RequestHeaderFieldsTooLarge extends HTTPError {
  constructor (message) {
    const params = Object.assign({}, config)
    params.message = message || params.message
    super(params)
  }
}

module.exports = { config, RequestHeaderFieldsTooLarge }
