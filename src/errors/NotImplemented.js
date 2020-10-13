'use strict'
const { HTTPError } = require('./HTTPError')

const config = {
  statusCode: 501,
  type: 'NotImplemented',
  message: 'The server does not support the functionality required to fulfill the request.'
}

class NotImplemented extends HTTPError {
  constructor (message) {
    const params = Object.assign({}, config)
    params.message = message || params.message
    super(params)
  }
}

module.exports = { config, NotImplemented }
