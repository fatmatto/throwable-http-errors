'use strict'
const { HTTPError } = require('./HTTPError')

const config = {
  statusCode: 424,
  type: 'FailedDependency',
  message: 'The method could not be performed on the resource because the requested action depended on another action and that action failed.'
}

class FailedDependency extends HTTPError {
  constructor (message) {
    const params = Object.assign({}, config)
    params.message = message || params.message
    super(params)
  }
}

module.exports = { config, FailedDependency }
