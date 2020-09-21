'use strict'
const Errors = require('../index')
const chai = require('chai')

const expect = chai.expect

describe('HTTP Errors Unit Tests', function () {
  it('Error should be instance of HTTPError', function () {
    const err = new Errors.BadRequest()
    expect(err instanceof Errors.HTTPError).to.equal(true)
  })

  it('Should correctly set an error message', function () {
    const err = new Errors.BadRequest('Terrible Mistake')
    expect(err.message).to.equal('Terrible Mistake')
  })

  it('Should correctly set an error status code', function () {
    const err = new Errors.BadRequest()
    expect(err.statusCode).to.equal(400)
  })

  it('Should correctly default to 500 error', function () {
    const err = new Errors.HTTPError()
    expect(err.statusCode).to.equal(500)
  })

  it('Should correctly return the correct JSON', function () {
    const err = new Errors.BadRequest()
    expect(err.toJSON()).to.deep.equal({
      statusCode: 400,
      type: 'BadRequest',
      message: 'The request could not be understood by the server due to malformed syntax.',
      name: 'BadRequest'
    })
  })

  it('400 Bad Request', function () {
    const err = new Errors.BadRequest()
    expect(err.statusCode).to.equal(400)
    expect(err.type).to.equal('BadRequest')
  })

  it('401 Unauthorized', function () {
    const err = new Errors.Unauthorized()
    expect(err.statusCode).to.equal(401)
    expect(err.type).to.equal('Unauthorized')
  })

  it('402 Payment Required', function () {
    const err = new Errors.PaymentRequired()
    expect(err.statusCode).to.equal(402)
    expect(err.type).to.equal('PaymentRequired')
  })

  it('403 Forbidden', function () {
    const err = new Errors.Forbidden()
    expect(err.statusCode).to.equal(403)
    expect(err.type).to.equal('Forbidden')
  })

  it('404 Not Found', function () {
    const err = new Errors.NotFound()
    expect(err.statusCode).to.equal(404)
    expect(err.type).to.equal('NotFound')
  })

  it('405 Method Not Allowed', function () {
    const err = new Errors.MethodNotAllowed()
    expect(err.statusCode).to.equal(405)
    expect(err.type).to.equal('MethodNotAllowed')
  })

  it('406 Not Acceptable', function () {
    const err = new Errors.NotAcceptable()
    expect(err.statusCode).to.equal(406)
    expect(err.type).to.equal('NotAcceptable')
  })

  it('407 Proxy Authentication Required', function () {
    const err = new Errors.ProxyAuthenticationRequired()
    expect(err.statusCode).to.equal(407)
    expect(err.type).to.equal('ProxyAuthenticationRequired')
  })

  it('408 Request Timeout', function () {
    const err = new Errors.RequestTimeout()
    expect(err.statusCode).to.equal(408)
    expect(err.type).to.equal('RequestTimeout')
  })

  it('409 Conflict', function () {
    const err = new Errors.Conflict()
    expect(err.statusCode).to.equal(409)
    expect(err.type).to.equal('Conflict')
  })

  it('410 Gone', function () {
    const err = new Errors.Gone()
    expect(err.statusCode).to.equal(410)
    expect(err.type).to.equal('Gone')
  })

  it('411 Length Required', function () {
    const err = new Errors.LengthRequired()
    expect(err.statusCode).to.equal(411)
    expect(err.type).to.equal('LengthRequired')
  })

  it('412 Precondition Failed', function () {
    const err = new Errors.PreconditionFailed()
    expect(err.statusCode).to.equal(412)
    expect(err.type).to.equal('PreconditionFailed')
  })

  it('413 Request Entity Too Large', function () {
    const err = new Errors.RequestEntityTooLarge()
    expect(err.statusCode).to.equal(413)
    expect(err.type).to.equal('RequestEntityTooLarge')
  })

  it('413 Entity Too Large - alias', function () {
    const err = new Errors.EntityTooLarge()
    expect(err.statusCode).to.equal(413)
    expect(err.type).to.equal('EntityTooLarge')
  })

  it('413 Payload Too Large', function () {
    const err = new Errors.PayloadTooLarge()
    expect(err.statusCode).to.equal(413)
    expect(err.type).to.equal('PayloadTooLarge')
  })

  it('414 Request-URI Too Long', function () {
    const err = new Errors.RequestURITooLong()
    expect(err.statusCode).to.equal(414)
    expect(err.type).to.equal('RequestURITooLong')
  })

  it('414 URI Too Long', function () {
    const err = new Errors.URITooLong()
    expect(err.statusCode).to.equal(414)
    expect(err.type).to.equal('URITooLong')
  })

  it('415 Unsupported Media Type', function () {
    const err = new Errors.UnsupportedMediaType()
    expect(err.statusCode).to.equal(415)
    expect(err.type).to.equal('UnsupportedMediaType')
  })

  it('416 Requested Range Not Satisfiable', function () {
    const err = new Errors.RequestedRangeNotSatisfiable()
    expect(err.statusCode).to.equal(416)
    expect(err.type).to.equal('RequestedRangeNotSatisfiable')
  })

  it('416 Range Not Satisfiable', function () {
    const err = new Errors.RangeNotSatisfiable()
    expect(err.statusCode).to.equal(416)
    expect(err.type).to.equal('RangeNotSatisfiable')
  })

  it('417 Expectation Failed', function () {
    const err = new Errors.ExpectationFailed()
    expect(err.statusCode).to.equal(417)
    expect(err.type).to.equal('ExpectationFailed')
  })

  it('421 Misdirected Request', function () {
    const err = new Errors.MisdirectedRequest()
    expect(err.statusCode).to.equal(421)
    expect(err.type).to.equal('MisdirectedRequest')
  })

  it('422 Unprocessable Entity', function () {
    const err = new Errors.UnprocessableEntity()
    expect(err.statusCode).to.equal(422)
    expect(err.type).to.equal('UnprocessableEntity')
  })

  it('423 Locked', function () {
    const err = new Errors.Locked()
    expect(err.statusCode).to.equal(423)
    expect(err.type).to.equal('Locked')
  })

  it('424 Failed Dependency', function () {
    const err = new Errors.FailedDependency()
    expect(err.statusCode).to.equal(424)
    expect(err.type).to.equal('FailedDependency')
  })

  it('425 Too Early', function () {
    const err = new Errors.TooEarly()
    expect(err.statusCode).to.equal(425)
    expect(err.type).to.equal('TooEarly')
  })

  it('426 Upgrade Required', function () {
    const err = new Errors.UpgradeRequired()
    expect(err.statusCode).to.equal(426)
    expect(err.type).to.equal('UpgradeRequired')
  })

  it('428 Precondition Required', function () {
    const err = new Errors.PreconditionRequired()
    expect(err.statusCode).to.equal(428)
    expect(err.type).to.equal('PreconditionRequired')
  })

  it('429 Too Many Requests', function () {
    const err = new Errors.TooManyRequests()
    expect(err.statusCode).to.equal(429)
    expect(err.type).to.equal('TooManyRequests')
  })

  it('431 Request Header Fields Too Large', function () {
    const err = new Errors.RequestHeaderFieldsTooLarge()
    expect(err.statusCode).to.equal(431)
    expect(err.type).to.equal('RequestHeaderFieldsTooLarge')
  })

  it('451 Unavailable For Legal Reasons', function () {
    const err = new Errors.UnavailableForLegalReasons()
    expect(err.statusCode).to.equal(451)
    expect(err.type).to.equal('UnavailableForLegalReasons')
  })

  it('500 Internal Server Error', function () {
    const err = new Errors.InternalServerError()
    expect(err.statusCode).to.equal(500)
    expect(err.type).to.equal('InternalServerError')
  })

  it('501 Not Implemented', function () {
    const err = new Errors.NotImplemented()
    expect(err.statusCode).to.equal(501)
    expect(err.type).to.equal('NotImplemented')
  })

  it('502 Bad Gateway', function () {
    const err = new Errors.BadGateway()
    expect(err.statusCode).to.equal(502)
    expect(err.type).to.equal('BadGateway')
  })

  it('503 Service Unavailable', function () {
    const err = new Errors.ServiceUnavailable()
    expect(err.statusCode).to.equal(503)
    expect(err.type).to.equal('ServiceUnavailable')
  })

  it('504 Gateway Timeout', function () {
    const err = new Errors.GatewayTimeout()
    expect(err.statusCode).to.equal(504)
    expect(err.type).to.equal('GatewayTimeout')
  })

  it('505 HTTP Version Not Supported', function () {
    const err = new Errors.HTTPVersionNotSupported()
    expect(err.statusCode).to.equal(505)
    expect(err.type).to.equal('HTTPVersionNotSupported')
  })

  it('506 Variant Also Negotiates', function () {
    const err = new Errors.VariantAlsoNegotiates()
    expect(err.statusCode).to.equal(506)
    expect(err.type).to.equal('VariantAlsoNegotiates')
  })

  it('507 Insufficient Storage', function () {
    const err = new Errors.InsufficientStorage()
    expect(err.statusCode).to.equal(507)
    expect(err.type).to.equal('InsufficientStorage')
  })

  it('508 Loop Detected', function () {
    const err = new Errors.LoopDetected()
    expect(err.statusCode).to.equal(508)
    expect(err.type).to.equal('LoopDetected')
  })

  it('510 Not Extended', function () {
    const err = new Errors.NotExtended()
    expect(err.statusCode).to.equal(510)
    expect(err.type).to.equal('NotExtended')
  })

  it('511 Network Authentication Required', function () {
    const err = new Errors.NetworkAuthenticationRequired()
    expect(err.statusCode).to.equal(511)
    expect(err.type).to.equal('NetworkAuthenticationRequired')
  })
})
