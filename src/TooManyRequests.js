'use strict'
const { HTTPError } = require('./HTTPError')

const config = {
  statusCode: 429,
  type: 'TooManyRequests',
  message: 'The user has sent too many requests in a given amount of time.'
}

class TooManyRequests extends HTTPError {
  constructor (message) {
    const params = Object.assign({}, config)
    params.message = message || params.message
    super(params)
  }
}

module.exports = { config, TooManyRequests }
