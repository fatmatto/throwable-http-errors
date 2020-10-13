'use strict'
const { HTTPError } = require('./HTTPError')

const config = {
  statusCode: 416,
  type: 'RequestedRangeNotSatisfiable',
  message: 'The request included a Range request-header field, and none of the range-specifier values in this field overlap the current extent of the selected resource, and the request did not include an If-Range request-header field.'
}

class RequestedRangeNotSatisfiable extends HTTPError {
  constructor (message) {
    const params = Object.assign({}, config)
    params.message = message || params.message
    super(params)
  }
}

module.exports = { config, RequestedRangeNotSatisfiable }
