const errorHandler = require('./error-handler')
const isAdmin = require('./is-admin')
const sanitizeBody = require('./sanitize-body')

module.exports = {
  errorHandler,
  isAdmin,
  sanitizeBody
}
