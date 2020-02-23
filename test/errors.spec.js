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
      message: 'Bad request',
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

  it('413 Entity Too Large', function () {
    const err = new Errors.EntityTooLarge()
    expect(err.statusCode).to.equal(413)
    expect(err.type).to.equal('EntityTooLarge')
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

  it('422 Unprocessable Entity', function () {
    const err = new Errors.UnprocessableEntity()
    expect(err.statusCode).to.equal(422)
    expect(err.type).to.equal('UnprocessableEntity')
  })

  it('429 Too Many Requests', function () {
    const err = new Errors.TooManyRequests()
    expect(err.statusCode).to.equal(429)
    expect(err.type).to.equal('TooManyRequests')
  })

  it('432 Request Header Fields Too Large', function () {
    const err = new Errors.RequestHeaderFieldsTooLarge()
    expect(err.statusCode).to.equal(432)
    expect(err.type).to.equal('RequestHeaderFieldsTooLarge')
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
})
