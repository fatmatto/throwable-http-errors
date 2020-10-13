'use strict'
const Errors = require('../index')
const chai = require('chai')
const { createErrorFromStatusCode } = require('../index')
const expect = chai.expect

describe('createErrorFromStatusCode Unit Tests', function () {

  const errors = [
    { statusCode: 400, type: 'BadRequest' },
    { statusCode: 404, type: 'NotFound' },
    { statusCode: 502, type: 'BadGateway' },
    { statusCode: 401, type: 'Unauthorized' },
    { statusCode: 413, type: 'RequestEntityTooLarge' }
  ]
  errors.forEach(error => {
    it('Should return the correct error', function () {
      const computedError = createErrorFromStatusCode(error.statusCode)
      expect(computedError.type).to.equal(error.type)
    })
  })
  
})