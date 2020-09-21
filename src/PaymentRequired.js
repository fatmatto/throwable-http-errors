'use strict'
const { HTTPError } = require('./HTTPError')

const config = {
  statusCode: 402,
  type: 'PaymentRequired',
  message: 'The request can not be processed until the client makes a payment.'
}

class PaymentRequired extends HTTPError {
  constructor (message) {
    const params = Object.assign({}, config)
    params.message = message || params.message
    super(params)
  }
}

module.exports = { config, PaymentRequired }
