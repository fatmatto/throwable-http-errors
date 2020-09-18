'use strict'
const { HTTPError } = require('./HTTPError')

const config = {
  statusCode: 503,
  type: 'ServiceUnavailable',
  message: 'The server is currently unable to handle the request due to a temporary overloading or maintenance of the server.'
}

class ServiceUnavailable extends HTTPError {
  constructor (message) {
    const params = Object.assign({}, config)
    params.message = message || params.message
    super(params)
  }
}

module.exports = { config, ServiceUnavailable }
