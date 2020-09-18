'use strict'
const { HTTPError } = require('./HTTPError')

const config = {
  statusCode: 409,
  type: 'Conflict',
  message: 'The request could not be completed due to a conflict with the current state of the resource.'
}

class Conflict extends HTTPError {
  constructor (message) {
    const params = Object.assign({}, config)
    params.message = message || params.message
    super(params)
  }
}

module.exports = { config, Conflict }
