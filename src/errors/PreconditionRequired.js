'use strict'
const { HTTPError } = require('./HTTPError')

const config = {
  statusCode: 428,
  type: 'PreconditionRequired',
  message: 'The origin server requires the request to be conditional.'
}

class PreconditionRequired extends HTTPError {
  constructor (message) {
    const params = Object.assign({}, config)
    params.message = message || params.message
    super(params)
  }
}

module.exports = { config, PreconditionRequired }
