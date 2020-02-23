'use strict'

const _errors = {
  BadRequest: {
    statusCode: 400,
    type: 'BadRequest',
    message: 'The request could not be understood by the server due to malformed syntax.'
  },
  Unauthorized: {
    statusCode: 401,
    type: 'Unauthorized',
    message: 'The request requires user authentication.'
  },
  PaymentRequired: {
    statusCode: 402,
    type: 'PaymentRequired',
    message: 'The request can not be processed until the client makes a payment.'
  },
  Forbidden: {
    statusCode: 403,
    type: 'Forbidden',
    message: 'The server understood the request, but is refusing to fulfill it.'
  },
  NotFound: {
    statusCode: 404,
    type: 'NotFound',
    message: 'The server has not found anything matching the Request-URI.'
  },
  MethodNotAllowed: {
    statusCode: 405,
    type: 'MethodNotAllowed',
    message: 'The method specified in the Request-Line is not allowed for the resource identified by the Request-URI.'
  },
  NotAcceptable: {
    statusCode: 406,
    type: 'NotAcceptable',
    message: 'The resource identified by the request is only capable of generating response entities which have content characteristics not acceptable according to the accept headers sent in the request.'
  },
  ProxyAuthenticationRequired: {
    statusCode: 407,
    type: 'ProxyAuthenticationRequired',
    message: 'The client must first authenticate itself with the proxy.'
  },
  RequestTimeout: {
    statusCode: 408,
    type: 'RequestTimeout',
    message: 'The client did not produce a request within the time that the server was prepared to wait.'
  },
  Conflict: {
    statusCode: 409,
    type: 'Conflict',
    message: 'The request could not be completed due to a conflict with the current state of the resource.'
  },
  Gone: {
    statusCode: 410,
    type: 'Gone',
    message: 'The requested resource is no longer available at the server and no forwarding address is known.'
  },
  LengthRequired: {
    statusCode: 411,
    type: 'LengthRequired',
    message: 'The server refuses to accept the request without a defined Content-Length.'
  },
  PreconditionFailed: {
    statusCode: 412,
    type: 'PreconditionFailed',
    message: 'The precondition given in one or more of the request-header fields evaluated to false when it was tested on the server.'
  },
  RequestEntityTooLarge: {
    statusCode: 413,
    type: 'RequestEntityTooLarge',
    message: 'The server is refusing to process a request because the request entity is larger than the server is willing or able to process.'
  },
  PayloadTooLarge: {
    statusCode: 413,
    type: 'PayloadTooLarge',
    message: 'The server is refusing to process a request because the request payload is larger than the server is willing or able to process.'
  },
  RequestURITooLong: {
    statusCode: 414,
    type: 'RequestURITooLong',
    message: 'The server is refusing to service the request because the Request-URI is longer than the server is willing to interpret.'
  },
  URITooLong: {
    statusCode: 414,
    type: 'URITooLong',
    message: 'The server is refusing to service the request because the request-target is longer than the server is willing to interpret.'
  },
  UnsupportedMediaType: {
    statusCode: 415,
    type: 'UnsupportedMediaType',
    message: 'The server is refusing to service the request because the entity of the request is in a format not supported by the requested resource for the requested method.'
  },
  RequestedRangeNotSatisfiable: {
    statusCode: 416,
    type: 'RequestedRangeNotSatisfiable',
    message: 'The request included a Range request-header field, and none of the range-specifier values in this field overlap the current extent of the selected resource, and the request did not include an If-Range request-header field.'
  },
  RangeNotSatisfiable: {
    statusCode: 416,
    type: 'RangeNotSatisfiable',
    message: "None of the ranges in the request's Range header field overlap the current extent of the selected resource or the set of ranges requested has been rejected due to invalid ranges or an excessive request of small or overlapping ranges."
  },
  ExpectationFailed: {
    statusCode: 417,
    type: 'ExpectationFailed',
    message: 'The expectation given in an Expect request-header field could not be met by this server.'
  },
  MisdirectedRequest: {
    statusCode: 421,
    type: 'MisdirectedRequest',
    message: 'The request was directed at a server that is not able to produce a response.'
  },
  UnprocessableEntity: {
    statusCode: 422,
    type: 'UnprocessableEntity',
    message: 'The the server understands the content type of the request entity, and the syntax of the request entity is correct but was unable to process the contained instructions.'
  },
  Locked: {
    statusCode: 423,
    type: 'Locked',
    message: 'The source or destination resource of a method is locked.'
  },
  FailedDependency: {
    statusCode: 424,
    type: 'FailedDependency',
    message: 'The method could not be performed on the resource because the requested action depended on another action and that action failed.'
  },
  UpgradeRequired: {
    statusCode: 426,
    type: 'UpgradeRequired',
    message: 'The server refuses to perform the request using the current protocol but might be willing to do so after the client upgrades to a different protocol.'
  },
  PreconditionRequired: {
    statusCode: 428,
    type: 'PreconditionRequired',
    message: 'The origin server requires the request to be conditional.'
  },
  TooManyRequests: {
    statusCode: 429,
    type: 'TooManyRequests',
    message: 'The user has sent too many requests in a given amount of time.'
  },
  RequestHeaderFieldsTooLarge: {
    statusCode: 431,
    type: 'RequestHeaderFieldsTooLarge',
    message: 'The server is unwilling to process the request because its header fields are too large.'
  },
  InternalServerError: {
    statusCode: 500,
    type: 'InternalServerError',
    message: 'The server encountered an unexpected condition which prevented it from fulfilling the request.'
  },
  NotImplemented: {
    statusCode: 501,
    type: 'NotImplemented',
    message: 'The server does not support the functionality required to fulfill the request.'
  },
  BadGateway: {
    statusCode: 502,
    type: 'BadGateway',
    message: 'The server, while acting as a gateway or proxy, received an invalid response from the upstream server it accessed in attempting to fulfill the request.'
  },
  ServiceUnavailable: {
    statusCode: 503,
    type: 'ServiceUnavailable',
    message: 'The server is currently unable to handle the request due to a temporary overloading or maintenance of the server.'
  },
  GatewayTimeout: {
    statusCode: 504,
    type: 'GatewayTimeout',
    message: 'The server, while acting as a gateway or proxy, did not receive a timely response from the upstream server it accessed in attempting to fulfill the request.'
  },
  HTTPVersionNotSupported: {
    statusCode: 505,
    type: 'HTTPVersionNotSupported',
    message: 'The server does not support, or refuses to support, the HTTP protocol version that was used in the request message.'
  },
  InsufficientStorage: {
    statusCode: 507,
    type: 'InsufficientStorage',
    message: 'The method could not be performed on the resource because the server is unable to store the representation needed to successfully complete the request.'
  },
  NetworkAuthenticationRequired: {
    statusCode: 511,
    type: 'NetworkAuthenticationRequired',
    message: 'The client needs to authenticate to gain network access.'
  }
}

// aliases
_errors.EntityTooLarge = Object.assign({}, _errors.RequestEntityTooLarge, { type: 'EntityTooLarge' })

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
