'use strict'
const { HTTPError } = require('./HTTPError')

const config = {
  statusCode: 414,
  type: 'RequestURITooLong',
  message: 'The server is refusing to service the request because the Request-URI is longer than the server is willing to interpret.'
}

class RequestURITooLong extends HTTPError {
  constructor (message) {
    const params = Object.assign({}, config)
    params.message = message || params.message
    super(params)
  }
}

module.exports = { config, RequestURITooLong }
