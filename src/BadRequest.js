'use strict'
const { HTTPError } = require('./HTTPError')

const config = {
  statusCode: 400,
  type: 'BadRequest',
  message: 'The request could not be understood by the server due to malformed syntax.'
}

class BadRequest extends HTTPError {
  constructor (message) {
    const params = Object.assign({}, config)
    params.message = message || params.message
    super(params)
  }
}

module.exports = { config, BadRequest }
