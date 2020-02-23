'use strict'

const _errors = {
  BadRequest: {
    statusCode: 400,
    type: 'BadRequest',
    message: 'Bad request'
  },
  ValidationError: {
    statusCode: 400,
    type: 'BadRequest',
    message: 'ValidationError: your request contains invalid data.'
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

class BadRequest extends HTTPError {
  constructor (message) {
    const params = Object.assign({}, _errors.BadRequest)
    params.message = message || params.message
    super(params)
  }
}

class Unauthorized extends HTTPError {
  constructor (message) {
    const params = Object.assign({}, _errors.Unauthorized)
    params.message = message || params.message
    super(params)
  }
}

class PaymentRequired extends HTTPError {
  constructor (message) {
    const params = Object.assign({}, _errors.PaymentRequired)
    params.message = message || params.message
    super(params)
  }
}

class Forbidden extends HTTPError {
  constructor (message) {
    const params = Object.assign({}, _errors.Forbidden)
    params.message = message || params.message
    super(params)
  }
}

class NotFound extends HTTPError {
  constructor (message) {
    const params = Object.assign({}, _errors.NotFound)
    params.message = message || params.message
    super(params)
  }
}

class MethodNotAllowed extends HTTPError {
  constructor (message) {
    const params = Object.assign({}, _errors.MethodNotAllowed)
    params.message = message || params.message
    super(params)
  }
}

class NotAcceptable extends HTTPError {
  constructor (message) {
    const params = Object.assign({}, _errors.NotAcceptable)
    params.message = message || params.message
    super(params)
  }
}

class RequestTimeout extends HTTPError {
  constructor (message) {
    const params = Object.assign({}, _errors.RequestTimeout)
    params.message = message || params.message
    super(params)
  }
}

class Conflict extends HTTPError {
  constructor (message) {
    const params = Object.assign({}, _errors.Conflict)
    params.message = message || params.message
    super(params)
  }
}

class LengthRequired extends HTTPError {
  constructor (message) {
    const params = Object.assign({}, _errors.LengthRequired)
    params.message = message || params.message
    super(params)
  }
}

class PreconditionFailed extends HTTPError {
  constructor (message) {
    const params = Object.assign({}, _errors.PreconditionFailed)
    params.message = message || params.message
    super(params)
  }
}

class EntityTooLarge extends HTTPError {
  constructor (message) {
    const params = Object.assign({}, _errors.EntityTooLarge)
    params.message = message || params.message
    super(params)
  }
}

class URITooLong extends HTTPError {
  constructor (message) {
    const params = Object.assign({}, _errors.URITooLong)
    params.message = message || params.message
    super(params)
  }
}

class UnsupportedMediaType extends HTTPError {
  constructor (message) {
    const params = Object.assign({}, _errors.UnsupportedMediaType)
    params.message = message || params.message
    super(params)
  }
}

class UnprocessableEntity extends HTTPError {
  constructor (message) {
    const params = Object.assign({}, _errors.UnprocessableEntity)
    params.message = message || params.message
    super(params)
  }
}

class TooManyRequests extends HTTPError {
  constructor (message) {
    const params = Object.assign({}, _errors.TooManyRequests)
    params.message = message || params.message
    super(params)
  }
}

class RequestHeaderFieldsTooLarge extends HTTPError {
  constructor (message) {
    const params = Object.assign({}, _errors.RequestHeaderFieldsTooLarge)
    params.message = message || params.message
    super(params)
  }
}

class InternalServerError extends HTTPError {
  constructor (message) {
    const params = Object.assign({}, _errors.InternalServerError)
    params.message = message || params.message
    super(params)
  }
}

class NotImplemented extends HTTPError {
  constructor (message) {
    const params = Object.assign({}, _errors.NotImplemented)
    params.message = message || params.message
    super(params)
  }
}

class BadGateway extends HTTPError {
  constructor (message) {
    const params = Object.assign({}, _errors.BadGateway)
    params.message = message || params.message
    super(params)
  }
}

module.exports = {
  HTTPError,
  BadRequest,
  Unauthorized,
  PaymentRequired,
  Forbidden,
  NotFound,
  MethodNotAllowed,
  NotAcceptable,
  RequestTimeout,
  Conflict,
  LengthRequired,
  PreconditionFailed,
  EntityTooLarge,
  URITooLong,
  UnsupportedMediaType,
  UnprocessableEntity,
  TooManyRequests,
  RequestHeaderFieldsTooLarge,
  InternalServerError,
  NotImplemented,
  BadGateway
}
