'use strict'
const { HTTPError } = require('./HTTPError')

const config = {
  statusCode: 413,
  type: 'RequestEntityTooLarge',
  message: 'The server is refusing to process a request because the request entity is larger than the server is willing or able to process.'
}

class RequestEntityTooLarge extends HTTPError {
  constructor (message) {
    const params = Object.assign({}, config)
    params.message = message || params.message
    super(params)
  }
}

module.exports = { config, RequestEntityTooLarge }
