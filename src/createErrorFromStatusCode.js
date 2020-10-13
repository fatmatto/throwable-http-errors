const fs = require('fs')
const path = require('path')
const statuses = {}

fs.readdirSync(path.join(__dirname, 'errors')).forEach(function (file) {
  const errorName = file.split('.')[0]
  const error = require(path.join(__dirname, 'errors', file))
  statuses[error.config.statusCode] = error[errorName]
})

function createErrorFromStatusCode (statusCode, message) {
  return new statuses[statusCode](message)
}

module.exports = {createErrorFromStatusCode}
