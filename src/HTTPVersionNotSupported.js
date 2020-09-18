'use strict'
const { HTTPError } = require('./HTTPError')

const config = {
  statusCode: 505,
  type: 'HTTPVersionNotSupported',
  message: 'The server does not support, or refuses to support, the HTTP protocol version that was used in the request message.'
}

class HTTPVersionNotSupported extends HTTPError {
  constructor (message) {
    const params = Object.assign({}, config)
    params.message = message || params.message
    super(params)
  }
}

module.exports = { config, HTTPVersionNotSupported }
