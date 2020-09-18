'use strict'
const { HTTPError } = require('./HTTPError')

const config = {
  statusCode: 414,
  type: 'URITooLong',
  message: 'The server is refusing to service the request because the request-target is longer than the server is willing to interpret.'
}

class URITooLong extends HTTPError {
  constructor (message) {
    const params = Object.assign({}, config)
    params.message = message || params.message
    super(params)
  }
}

module.exports = { config, URITooLong }
