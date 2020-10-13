'use strict'
const { HTTPError } = require('./HTTPError')

const config = {
  statusCode: 417,
  type: 'ExpectationFailed',
  message: 'The expectation given in an Expect request-header field could not be met by this server.'
}

class ExpectationFailed extends HTTPError {
  constructor (message) {
    const params = Object.assign({}, config)
    params.message = message || params.message
    super(params)
  }
}

module.exports = { config, ExpectationFailed }
