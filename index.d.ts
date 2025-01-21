declare module 'throwable-http-errors' {
  interface HTTPErrorConfig {
    statusCode: number;
    type: string;
    message: string;
  }

  class HTTPError extends Error {
    statusCode: number;
    type: string;
    message: string;
    constructor(data?: Partial<HTTPErrorConfig>);
    toJSON(): HTTPErrorConfig;
  }

  function createErrorFromStatusCode(statusCode: number, message?: string): HTTPError;

  export {
    BadGateway,
    BadRequest,
    Conflict, createErrorFromStatusCode, EntityTooLarge,
    ExpectationFailed,
    FailedDependency,
    Forbidden,
    GatewayTimeout,
    Gone, HTTPError, HTTPVersionNotSupported,
    InsufficientStorage,
    InternalServerError,
    LengthRequired,
    Locked,
    LoopDetected,
    MethodNotAllowed,
    MisdirectedRequest,
    NetworkAuthenticationRequired,
    NotAcceptable,
    NotExtended,
    NotFound,
    NotImplemented,
    PayloadTooLarge,
    PaymentRequired,
    PreconditionFailed,
    PreconditionRequired,
    ProxyAuthenticationRequired,
    RangeNotSatisfiable, RequestedRangeNotSatisfiable, RequestEntityTooLarge,
    RequestHeaderFieldsTooLarge,
    RequestTimeout,
    RequestURITooLong, ServiceUnavailable,
    TooEarly,
    TooManyRequests, Unauthorized,
    UnavailableForLegalReasons,
    UnprocessableEntity,
    UnsupportedMediaType,
    UpgradeRequired, URITooLong, VariantAlsoNegotiates
  };
}