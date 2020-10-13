'use strict'
const { HTTPError } = require('./HTTPError')

const config = {
  statusCode: 416,
  type: 'RangeNotSatisfiable',
  message: "None of the ranges in the request's Range header field overlap the current extent of the selected resource or the set of ranges requested has been rejected due to invalid ranges or an excessive request of small or overlapping ranges."
}

class RangeNotSatisfiable extends HTTPError {
  constructor (message) {
    const params = Object.assign({}, config)
    params.message = message || params.message
    super(params)
  }
}

module.exports = { config, RangeNotSatisfiable }
