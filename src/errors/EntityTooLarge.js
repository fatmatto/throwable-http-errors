'use strict'
const { HTTPError } = require('./HTTPError')
const { config: RequestEntityTooLargeConfig } = require('./RequestEntityTooLarge')

const config = Object.assign({}, RequestEntityTooLargeConfig, { type: 'EntityTooLarge' })

class EntityTooLarge extends HTTPError {
  constructor (message) {
    const params = Object.assign({}, config)
    params.message = message || params.message
    super(params)
  }
}

module.exports = { config, EntityTooLarge }
