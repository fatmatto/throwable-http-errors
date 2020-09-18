'use strict'
const { HTTPError } = require('./HTTPError')

const config = {
  statusCode: 507,
  type: 'InsufficientStorage',
  message: 'The method could not be performed on the resource because the server is unable to store the representation needed to successfully complete the request.'
}

class InsufficientStorage extends HTTPError {
  constructor (message) {
    const params = Object.assign({}, config)
    params.message = message || params.message
    super(params)
  }
}

module.exports = { config, InsufficientStorage }
