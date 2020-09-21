'use strict'
const { HTTPError } = require('./HTTPError')

const config = {
  statusCode: 504,
  type: 'GatewayTimeout',
  message: 'The server, while acting as a gateway or proxy, did not receive a timely response from the upstream server it accessed in attempting to fulfill the request.'
}

class GatewayTimeout extends HTTPError {
  constructor (message) {
    const params = Object.assign({}, config)
    params.message = message || params.message
    super(params)
  }
}

module.exports = { config, GatewayTimeout }
