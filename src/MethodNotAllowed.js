'use strict'
const { HTTPError } = require('./HTTPError')

const config = {
  statusCode: 405,
  type: 'MethodNotAllowed',
  message: 'The method specified in the Request-Line is not allowed for the resource identified by the Request-URI.'
}

class MethodNotAllowed extends HTTPError {
  constructor (message) {
    const params = Object.assign({}, config)
    params.message = message || params.message
    super(params)
  }
}

module.exports = { config, MethodNotAllowed }
