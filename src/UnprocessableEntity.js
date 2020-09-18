'use strict'
const { HTTPError } = require('./HTTPError')

const config = {
  statusCode: 422,
  type: 'UnprocessableEntity',
  message: 'The the server understands the content type of the request entity, and the syntax of the request entity is correct but was unable to process the contained instructions.'
}

class UnprocessableEntity extends HTTPError {
  constructor (message) {
    const params = Object.assign({}, config)
    params.message = message || params.message
    super(params)
  }
}

module.exports = { config, UnprocessableEntity }
