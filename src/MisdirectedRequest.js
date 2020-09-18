'use strict'
const { HTTPError } = require('./HTTPError')

const config = {
  statusCode: 421,
  type: 'MisdirectedRequest',
  message: 'The request was directed at a server that is not able to produce a response.'
}

class MisdirectedRequest extends HTTPError {
  constructor (message) {
    const params = Object.assign({}, config)
    params.message = message || params.message
    super(params)
  }
}

module.exports = { config, MisdirectedRequest }
