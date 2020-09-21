'use strict'
const { HTTPError } = require('./HTTPError')

const config = {
  statusCode: 410,
  type: 'Gone',
  message: 'The requested resource is no longer available at the server and no forwarding address is known.'
}

class Gone extends HTTPError {
  constructor (message) {
    const params = Object.assign({}, config)
    params.message = message || params.message
    super(params)
  }
}

module.exports = { config, Gone }
