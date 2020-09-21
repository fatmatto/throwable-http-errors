'use strict'
const { HTTPError } = require('./HTTPError')

const config = {
  statusCode: 415,
  type: 'UnsupportedMediaType',
  message: 'The server is refusing to service the request because the entity of the request is in a format not supported by the requested resource for the requested method.'
}

class UnsupportedMediaType extends HTTPError {
  constructor (message) {
    const params = Object.assign({}, config)
    params.message = message || params.message
    super(params)
  }
}

module.exports = { config, UnsupportedMediaType }
