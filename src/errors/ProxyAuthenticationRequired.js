'use strict'
const { HTTPError } = require('./HTTPError')

const config = {
  statusCode: 407,
  type: 'ProxyAuthenticationRequired',
  message: 'The client must first authenticate itself with the proxy.'
}

class ProxyAuthenticationRequired extends HTTPError {
  constructor (message) {
    const params = Object.assign({}, config)
    params.message = message || params.message
    super(params)
  }
}

module.exports = { config, ProxyAuthenticationRequired }
