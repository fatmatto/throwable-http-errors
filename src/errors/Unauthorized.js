'use strict'
const { HTTPError } = require('./HTTPError')

const config = {
  statusCode: 401,
  type: 'Unauthorized',
  message: 'The request requires user authentication.'
}

class Unauthorized extends HTTPError {
  constructor (message) {
    const params = Object.assign({}, config)
    params.message = message || params.message
    super(params)
  }
}

module.exports = { config, Unauthorized }
