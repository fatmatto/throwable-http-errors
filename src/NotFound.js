'use strict'
const { HTTPError } = require('./HTTPError')

const config = {
  statusCode: 404,
  type: 'NotFound',
  message: 'The server has not found anything matching the Request-URI.'
}

class NotFound extends HTTPError {
  constructor (message) {
    const params = Object.assign({}, config)
    params.message = message || params.message
    super(params)
  }
}

module.exports = { config, NotFound }
