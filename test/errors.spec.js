'use strict'

const Errors = require('../index')
const chai = require('chai')

let expect = chai.expect

describe('HTTP Errors Unit Tests', function () {
  it('Error should be instance of HTTPError', function () {
    let err = new Errors.BadRequest()
    expect(err instanceof Errors.HTTPError).to.equal(true)
  })

  it('Should correctly set an error message', function () {
    let err = new Errors.BadRequest('Terrible Mistake')

    expect(err.message).to.equal('Terrible Mistake')
  })

  it('Should correctly set an error status code', function () {
    let err = new Errors.BadRequest()
    expect(err.statusCode).to.equal(400)
  })

  it('Should correctly default to 500 error', function () {
    let err = new Errors.HTTPError()
    expect(err.statusCode).to.equal(500)
  })

  it('400 BadRequest', function () {
    let err = new Errors.BadRequest()
    expect(err.statusCode).to.equal(400)
    expect(err.type).to.equal('BadRequest')
  })

  it('401 Unauthorized', function () {
    let err = new Errors.Unauthorized()
    expect(err.statusCode).to.equal(401)
    expect(err.type).to.equal('Unauthorized')
  })

  it('402 PaymentRequired', function () {
    let err = new Errors.PaymentRequired()
    expect(err.statusCode).to.equal(402)
    expect(err.type).to.equal('PaymentRequired')
  })

  it('403 Forbidden', function () {
    let err = new Errors.Forbidden()
    expect(err.statusCode).to.equal(403)
    expect(err.type).to.equal('Forbidden')
  })

  it('404 NotFound', function () {
    let err = new Errors.NotFound()
    expect(err.statusCode).to.equal(404)
    expect(err.type).to.equal('NotFound')
  })

  it('405 MethodNotAllowed', function () {
    let err = new Errors.MethodNotAllowed()
    expect(err.statusCode).to.equal(405)
    expect(err.type).to.equal('MethodNotAllowed')
  })

  it('406 NotAcceptable', function () {
    let err = new Errors.NotAcceptable()
    expect(err.statusCode).to.equal(406)
    expect(err.type).to.equal('NotAcceptable')
  })

  it('408 RequestTimeout', function () {
    let err = new Errors.RequestTimeout()
    expect(err.statusCode).to.equal(408)
    expect(err.type).to.equal('RequestTimeout')
  })

  it('409 Conflict', function () {
    let err = new Errors.Conflict()
    expect(err.statusCode).to.equal(409)
    expect(err.type).to.equal('Conflict')
  })

  it('411 LengthRequired', function () {
    let err = new Errors.LengthRequired()
    expect(err.statusCode).to.equal(411)
    expect(err.type).to.equal('LengthRequired')
  })

  it('412 PreconditionFailed', function () {
    let err = new Errors.PreconditionFailed()
    expect(err.statusCode).to.equal(412)
    expect(err.type).to.equal('PreconditionFailed')
  })

  it('413 EntityTooLarge', function () {
    let err = new Errors.EntityTooLarge()
    expect(err.statusCode).to.equal(413)
    expect(err.type).to.equal('EntityTooLarge')
  })

  it('414 URITooLong', function () {
    let err = new Errors.URITooLong()
    expect(err.statusCode).to.equal(414)
    expect(err.type).to.equal('URITooLong')
  })

  it('415 UnsupportedMediaType', function () {
    let err = new Errors.UnsupportedMediaType()
    expect(err.statusCode).to.equal(415)
    expect(err.type).to.equal('UnsupportedMediaType')
  })

  it('422 UnprocessableEntity', function () {
    let err = new Errors.UnprocessableEntity()
    expect(err.statusCode).to.equal(422)
    expect(err.type).to.equal('UnprocessableEntity')
  })

  it('429 TooManyRequests', function () {
    let err = new Errors.TooManyRequests()
    expect(err.statusCode).to.equal(429)
    expect(err.type).to.equal('TooManyRequests')
  })

  it('432 RequestHeaderFieldsTooLarge', function () {
    let err = new Errors.RequestHeaderFieldsTooLarge()
    expect(err.statusCode).to.equal(432)
    expect(err.type).to.equal('RequestHeaderFieldsTooLarge')
  })

  it('500 InternalServerError', function () {
    let err = new Errors.InternalServerError()
    expect(err.statusCode).to.equal(500)
    expect(err.type).to.equal('InternalServerError')
  })

  it('501 NotImplemented', function () {
    let err = new Errors.NotImplemented()
    expect(err.statusCode).to.equal(501)
    expect(err.type).to.equal('NotImplemented')
  })

  it('502 BadGateway', function () {
    let err = new Errors.BadGateway()
    expect(err.statusCode).to.equal(502)
    expect(err.type).to.equal('BadGateway')
  })
})
