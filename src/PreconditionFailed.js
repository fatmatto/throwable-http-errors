'use strict'
const { HTTPError } = require('./HTTPError')

const config = {
  statusCode: 412,
  type: 'PreconditionFailed',
  message: 'The precondition given in one or more of the request-header fields evaluated to false when it was tested on the server.'
}

class PreconditionFailed extends HTTPError {
  constructor (message) {
    const params = Object.assign({}, config)
    params.message = message || params.message
    super(params)
  }
}

module.exports = { config, PreconditionFailed }
