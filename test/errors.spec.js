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

  it('400 BadRequest', function () {
    const err = new Errors.BadRequest()
    expect(err.statusCode).to.equal(400)
    expect(err.type).to.equal('BadRequest')
  })

  it('401 Unauthorized', function () {
    const err = new Errors.Unauthorized()
    expect(err.statusCode).to.equal(401)
    expect(err.type).to.equal('Unauthorized')
  })

  it('402 PaymentRequired', function () {
    const err = new Errors.PaymentRequired()
    expect(err.statusCode).to.equal(402)
    expect(err.type).to.equal('PaymentRequired')
  })

  it('403 Forbidden', function () {
    const err = new Errors.Forbidden()
    expect(err.statusCode).to.equal(403)
    expect(err.type).to.equal('Forbidden')
  })

  it('404 NotFound', function () {
    const err = new Errors.NotFound()
    expect(err.statusCode).to.equal(404)
    expect(err.type).to.equal('NotFound')
  })

  it('405 MethodNotAllowed', function () {
    const err = new Errors.MethodNotAllowed()
    expect(err.statusCode).to.equal(405)
    expect(err.type).to.equal('MethodNotAllowed')
  })

  it('406 NotAcceptable', function () {
    const err = new Errors.NotAcceptable()
    expect(err.statusCode).to.equal(406)
    expect(err.type).to.equal('NotAcceptable')
  })

  it('408 RequestTimeout', function () {
    const err = new Errors.RequestTimeout()
    expect(err.statusCode).to.equal(408)
    expect(err.type).to.equal('RequestTimeout')
  })

  it('409 Conflict', function () {
    const err = new Errors.Conflict()
    expect(err.statusCode).to.equal(409)
    expect(err.type).to.equal('Conflict')
  })

  it('411 LengthRequired', function () {
    const err = new Errors.LengthRequired()
    expect(err.statusCode).to.equal(411)
    expect(err.type).to.equal('LengthRequired')
  })

  it('412 PreconditionFailed', function () {
    const err = new Errors.PreconditionFailed()
    expect(err.statusCode).to.equal(412)
    expect(err.type).to.equal('PreconditionFailed')
  })

  it('413 EntityTooLarge', function () {
    const err = new Errors.EntityTooLarge()
    expect(err.statusCode).to.equal(413)
    expect(err.type).to.equal('EntityTooLarge')
  })

  it('414 URITooLong', function () {
    const err = new Errors.URITooLong()
    expect(err.statusCode).to.equal(414)
    expect(err.type).to.equal('URITooLong')
  })

  it('415 UnsupportedMediaType', function () {
    const err = new Errors.UnsupportedMediaType()
    expect(err.statusCode).to.equal(415)
    expect(err.type).to.equal('UnsupportedMediaType')
  })

  it('422 UnprocessableEntity', function () {
    const err = new Errors.UnprocessableEntity()
    expect(err.statusCode).to.equal(422)
    expect(err.type).to.equal('UnprocessableEntity')
  })

  it('429 TooManyRequests', function () {
    const err = new Errors.TooManyRequests()
    expect(err.statusCode).to.equal(429)
    expect(err.type).to.equal('TooManyRequests')
  })

  it('432 RequestHeaderFieldsTooLarge', function () {
    const err = new Errors.RequestHeaderFieldsTooLarge()
    expect(err.statusCode).to.equal(432)
    expect(err.type).to.equal('RequestHeaderFieldsTooLarge')
  })

  it('500 InternalServerError', function () {
    const err = new Errors.InternalServerError()
    expect(err.statusCode).to.equal(500)
    expect(err.type).to.equal('InternalServerError')
  })

  it('501 NotImplemented', function () {
    const err = new Errors.NotImplemented()
    expect(err.statusCode).to.equal(501)
    expect(err.type).to.equal('NotImplemented')
  })

  it('502 BadGateway', function () {
    const err = new Errors.BadGateway()
    expect(err.statusCode).to.equal(502)
    expect(err.type).to.equal('BadGateway')
  })
})
