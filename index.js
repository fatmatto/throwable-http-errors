'use strict'

const _errors = {
  BadRequest: {
    statusCode: 400,
    type: 'BadRequest',
    message: 'Bad request'
  },
  Unauthorized: {
    statusCode: 401,
    type: 'Unauthorized',
    message: 'Not authorized'
  },
  PaymentRequired: {
    statusCode: 402,
    type: 'PaymentRequired',
    message: 'Payment required'
  },
  Forbidden: {
    statusCode: 403,
    type: 'Forbidden',
    message: "Client has valid credentials, but doesn't have access to this action."
  },
  NotFound: {
    statusCode: 404,
    type: 'NotFound',
    message: 'Not found'
  },
  MethodNotAllowed: {
    statusCode: 405,
    type: 'MethodNotAllowed',
    message: 'Method not allowed'
  },
  NotAcceptable: {
    statusCode: 406,
    type: 'NotAcceptable',
    message: "The request's format is not acceptable. Check Content-Type header for a list of acceptable formats."
  },
  RequestTimeout: {
    statusCode: 408,
    type: 'RequestTimeout',
    message: 'The server timed out waiting for the request.'
  },
  Conflict: {
    statusCode: 409,
    type: 'Conflict',
    message: 'The request could not be completed due to a conflict with the current state of the resource.'
  },
  LengthRequired: {
    statusCode: 411,
    type: 'LengthRequired',
    message: 'The request did not specify the length of its content, which is required by the requested resource.'
  },
  PreconditionFailed: {
    statusCode: 412,
    type: 'PreconditionFailed',
    message: 'The server does not meet one of the preconditions that the requester put on the request.'
  },
  EntityTooLarge: {
    statusCode: 413,
    type: 'EntityTooLarge',
    message: 'The request entity is too large to be processed.'
  },
  PayloadTooLarge: {
    statusCode: 413,
    type: 'PayloadTooLarge',
    message: 'The request entity is too large to be processed.'
  },
  URITooLong: {
    statusCode: 414,
    type: 'URITooLong',
    message: 'The URI provided was too long for the server to process.'
  },
  UnsupportedMediaType: {
    statusCode: 415,
    type: 'UnsupportedMediaType',
    message: 'The request entity has a media type which the server or resource does not support.'
  },
  UnprocessableEntity: {
    statusCode: 422,
    type: 'UnprocessableEntity',
    message: 'The syntax of the request is correct but some values could be invalid (e.g. wrong type).'
  },
  TooManyRequests: {
    statusCode: 429,
    type: 'TooManyRequests',
    message: 'The user has sent too many requests in a given amount of time. more info at GET /v0/rate'
  },
  RequestHeaderFieldsTooLarge: {
    statusCode: 432,
    type: 'RequestHeaderFieldsTooLarge',
    message: 'The server is unwilling to process the request because its header fields are too large.'
  },
  InternalServerError: {
    statusCode: 500,
    type: 'InternalServerError',
    message: 'Internal server error'
  },
  NotImplemented: {
    statusCode: 501,
    type: 'NotImplemented',
    message: 'This endpoint has not been implemented'
  },
  BadGateway: {
    statusCode: 502,
    type: 'BadGateway',
    message: 'This service received an invalid response from an upstream service.'
  }
}

/**
 * @class Base class for HTTP Errors.
 */
class HTTPError extends Error {
  constructor (data) {
    data = data || Object.assign({}, _errors.InternalServerError)
    // Calling parent constructor of base Error class.
    super(data.message)

    // Saving class name in the property of our custom error as a shortcut.
    this.name = this.constructor.name

    // Default error status code
    this.statusCode = data.statusCode

    // Default error message
    this.message = data.message

    // Used to track a reference to messages
    this._message = data.message

    // Default human readable error type
    this.type = data.type

    // Capturing stack trace, excluding constructor call from it.
    Error.captureStackTrace(this, this.constructor)
  }

  toJSON () {
    const self = this

    return {
      statusCode: self.statusCode,
      type: self.type,
      message: self._message,
      name: self.name
    }
  }
}

module.exports = Object.keys(_errors)
  .reduce((acc, className) => Object.assign(acc, {
    [className]: class extends HTTPError {
      constructor (message) {
        const params = Object.assign({}, _errors[className])
        params.message = message || params.message
        super(params)
      }
    }
  }), { HTTPError })
