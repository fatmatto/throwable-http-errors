'use strict'
const { HTTPError } = require('./HTTPError')

const config = {
  statusCode: 406,
  type: 'NotAcceptable',
  message: 'The resource identified by the request is only capable of generating response entities which have content characteristics not acceptable according to the accept headers sent in the request.'
}

class NotAcceptable extends HTTPError {
  constructor (message) {
    const params = Object.assign({}, config)
    params.message = message || params.message
    super(params)
  }
}

module.exports = { config, NotAcceptable }
