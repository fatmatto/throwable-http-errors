'use strict'
const { HTTPError } = require('./HTTPError')

const config = {
  statusCode: 506,
  type: 'VariantAlsoNegotiates',
  message: 'The server has an internal configuration error: the chosen variant resource is configured to engage in transparent content negotiation itself, and is therefore not a proper end point in the negotiation process.'
}

class VariantAlsoNegotiates extends HTTPError {
  constructor (message) {
    const params = Object.assign({}, config)
    params.message = message || params.message
    super(params)
  }
}

module.exports = { config, VariantAlsoNegotiates }
