'use strict'
const { HTTPError } = require('./HTTPError')

const config = {
  statusCode: 408,
  type: 'RequestTimeout',
  message: 'The client did not produce a request within the time that the server was prepared to wait.'
}

class RequestTimeout extends HTTPError {
  constructor (message) {
    const params = Object.assign({}, config)
    params.message = message || params.message
    super(params)
  }
}

module.exports = { config, RequestTimeout }
