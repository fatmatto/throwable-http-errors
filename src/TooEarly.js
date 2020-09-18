'use strict'
const { HTTPError } = require('./HTTPError')

const config = {
  statusCode: 425,
  type: 'TooEarly',
  message: 'The server is unwilling to risk processing a request that might be replayed.'
}

class TooEarly extends HTTPError {
  constructor (message) {
    const params = Object.assign({}, config)
    params.message = message || params.message
    super(params)
  }
}

module.exports = { config, TooEarly }
