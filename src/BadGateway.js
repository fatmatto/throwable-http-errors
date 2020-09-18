'use strict'
const { HTTPError } = require('./HTTPError')

const config = {
  statusCode: 502,
  type: 'BadGateway',
  message: 'The server, while acting as a gateway or proxy, received an invalid response from the upstream server it accessed in attempting to fulfill the request.'
}

class BadGateway extends HTTPError {
  constructor (message) {
    const params = Object.assign({}, config)
    params.message = message || params.message
    super(params)
  }
}

module.exports = { config, BadGateway }
