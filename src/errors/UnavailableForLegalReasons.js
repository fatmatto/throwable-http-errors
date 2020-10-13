'use strict'
const { HTTPError } = require('./HTTPError')

const config = {
  statusCode: 451,
  type: 'UnavailableForLegalReasons',
  message: 'The server is denying access to the resource as a consequence of a legal demand.'
}

class UnavailableForLegalReasons extends HTTPError {
  constructor (message) {
    const params = Object.assign({}, config)
    params.message = message || params.message
    super(params)
  }
}

module.exports = { config, UnavailableForLegalReasons }
