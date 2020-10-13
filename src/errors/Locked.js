'use strict'
const { HTTPError } = require('./HTTPError')

const config = {
  statusCode: 423,
  type: 'Locked',
  message: 'The source or destination resource of a method is locked.'
}

class Locked extends HTTPError {
  constructor (message) {
    const params = Object.assign({}, config)
    params.message = message || params.message
    super(params)
  }
}

module.exports = { config, Locked }
