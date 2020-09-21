'use strict'
const { HTTPError } = require('./HTTPError')

const config = {
  statusCode: 510,
  type: 'NotExtended',
  message: 'The policy for accessing the resource has not been met in the request.'
}

class NotExtended extends HTTPError {
  constructor (message) {
    const params = Object.assign({}, config)
    params.message = message || params.message
    super(params)
  }
}

module.exports = { config, NotExtended }
