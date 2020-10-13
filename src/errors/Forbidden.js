'use strict'
const { HTTPError } = require('./HTTPError')

const config = {
  statusCode: 403,
  type: 'Forbidden',
  message: 'The server understood the request, but is refusing to fulfill it.'
}

class Forbidden extends HTTPError {
  constructor (message) {
    const params = Object.assign({}, config)
    params.message = message || params.message
    super(params)
  }
}

module.exports = { config, Forbidden }
