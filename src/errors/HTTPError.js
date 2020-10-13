'use strict'
const config = {
  statusCode: 500,
  type: 'InternalServerError',
  message: 'The server encountered an unexpected condition which prevented it from fulfilling the request.'
}

class HTTPError extends Error {
  constructor (data) {
    data = data || Object.assign({}, config)
    // Calling parent constructor of base Error class.
    super(data.message)

    // Saving class name in the property of our custom error as a shortcut.
    this.name = this.constructor.name

    // Default error status code
    this.statusCode = data.statusCode

    // Default error message
    this.message = data.message

    // Default human readable error type
    this.type = data.type

    // Capturing stack trace, excluding constructor call from it.
    Error.captureStackTrace(this, this.constructor)
  }

  toJSON () {
    return {
      statusCode: this.statusCode,
      type: this.type,
      message: this.message,
      name: this.name
    }
  }
}

module.exports = { config, HTTPError }
