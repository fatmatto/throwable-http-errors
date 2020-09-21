'use strict'
const { HTTPError } = require('./HTTPError')

const config = {
  statusCode: 411,
  type: 'LengthRequired',
  message: 'The server refuses to accept the request without a defined Content-Length.'
}

class LengthRequired extends HTTPError {
  constructor (message) {
    const params = Object.assign({}, config)
    params.message = message || params.message
    super(params)
  }
}

module.exports = { config, LengthRequired }
